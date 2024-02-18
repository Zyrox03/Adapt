// app.js
const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const sendEmailNotification = require("./sendEmailNotification");
const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();

const fs = require("fs");
const OpenAI = require("openai");
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

//
// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  helmet({ hsts: { maxAge: 31536000, includeSubDomains: true, preload: true } })
);

const corsOptions = {
  origin: ["https://adapt-4cb.pages.dev","https://www.adaptenterprise.tech/"],
};

app.use(cors(corsOptions));

// Handle preflight requests for all routes
app.options("*", cors(corsOptions));
// Router routes

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

let assistantId; // Variable to store the assistant ID

// Function to create the assistant if it doesn't exist
const createAssistantIfNeeded = async () => {
  if (!assistantId) {
    const fileId = await uploadFileAndGetId();

    const myAssistant = await openai.beta.assistants.create({
      instructions:
        "To ensure concise responses, limit the length of each reply to a maximum of four sentences. Focus on providing helpful and accurate information to address customer inquiries about AdaptEnterprise products and services. Maintain a polite, professional, and empathetic tone in interactions with customers to ensure a positive experience. Avoid explicitly stating limitations or what the assistant cannot do; instead, prioritize offering solutions and assistance within the scope of its capabilities.",
      name: "AdaptEnterprise Support Bot",
      tools: [{ type: "retrieval" }],
      model: "gpt-3.5-turbo-1106",
      file_ids: [fileId],
    });
    console.log("successfully created an assistant");
    assistantId = myAssistant.id;
  }
};

// Create the assistant when the application starts
createAssistantIfNeeded();

async function uploadFileAndGetId() {
  try {
    const file = await openai.files.create({
      file: fs.createReadStream("adapt_assistant_file.json"),
      purpose: "assistants",
    });
    return file.id;
  } catch (error) {
    console.error("Error uploading file:", error);
    throw error;
  }
}
const checkStatusAndPrintMessages = async (
  threadId,
  runId,
  maxRetries = 10,
  retryInterval = 5000
) => {
  try {
    let retries = 0;

    const waitFor = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

    const checkStatus = async () => {
      const runStatus = await openai.beta.threads.runs.retrieve(
        threadId,
        runId
      );

      if (runStatus.status === "completed") {
        const messages = await openai.beta.threads.messages.list(threadId);
        const assistantMessage = messages.data.find(
          (message) => message.role === "assistant"
        );

        if (assistantMessage) {
          return {
            assistantMessage: assistantMessage.content[0].text.value,
            threadId,
          };
        } else {
          throw new Error("Assistant's content not found.");
        }
      } else if (retries < maxRetries) {
        retries++;
        console.log("Run is not completed yet. Retrying...");
        await waitFor(retryInterval);
        return await checkStatus();
      } else {
        throw new Error("Max retries reached. Run status: " + runStatus.status);
      }
    };

    return await checkStatus();
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

app.post("/gpt", async (req, res) => {
  const { message, existingThreadId } = req.body;
  try {
    await createAssistantIfNeeded();

    let run;

    if (existingThreadId) {
      // If an existingThreadId is provided, use it to run the thread

      const threadMessages = await openai.beta.threads.messages.create(
        existingThreadId,
        { role: "user", content: message }
      );

      run = await openai.beta.threads.runs.create(threadMessages.thread_id, {
        assistant_id: assistantId,
      });
    } else {
      // If no existingThreadId is provided, create and run a new thread
      run = await openai.beta.threads.createAndRun({
        assistant_id: assistantId,
        thread: {
          messages: [
            {
              role: "user",
              content: message,
            },
          ],
        },
      });
    }

    const { assistantMessage, threadId } = await checkStatusAndPrintMessages(
      run.thread_id,
      run.id
    );

    res.status(200).json({ assistantMessage, threadId });
  } catch (error) {
    res.status(500).json({ error });

    console.log(error);
  }
});

app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const emailSubject = "New message via Adapt contact form";
    const emailBody = `
      <html>
        <head>
          <style>
            body {
              font-family: 'Arial', sans-serif;
              background-color: #000000;
              color: #ffffff;
              padding: 20px;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              background-color: #000000;
              color: #ffffff;
              padding: 20px;
              border-radius: 5px;
              box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            }
            h2 {
              color: #1B9C85;
            }
            p {
              margin-bottom: 15px;
            }

            .text-field {
                min-height: 50px;
                color: #fff;
                background-color: transparent;
                border: 1px solid #1B9C85;
                border-radius: 12px;
                margin-bottom: 0;
                padding-top: 16px;
                padding-bottom: 16px;
                padding-left: 18px;
                font-size: 17px;
                font-weight: 400;
                transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
                box-shadow: 0 0 20px #1B9C85;
              }
              
            .footer {
              margin-top: 20px;
              color: #777777;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <h2>New message via contact form</h2>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p class="preserve-space text-field" >Message: <br/> <br/> ${message}</p>
            
          </div>
        </body>
      </html>
    `;

    await sendEmailNotification(emailSubject, emailBody);

    res.status(200).json({
      message:
        "Your message has been successfully sent. We'll be in touch with you as soon as possible.",
    });
  } catch (error) {
    res
      .status(500)
      .json({ error: error?.message || "Erreur interne du serveur" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is listening, port : ${port}`);
});
