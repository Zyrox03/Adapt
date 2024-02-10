import { useFormik } from "formik";
import { Transition } from "@headlessui/react";
import { useEffect, useState } from "react";
import * as Yup from "yup";
import { Switch } from "@headlessui/react";
import axios from "axios";
const ContactForm = () => {
  const [showAIResponse, setShowAIResponse] = useState(false);
  const [formSuccessMessage, setFormSuccessMessage] = useState("");
  const [formErrorMessage, setFormErrorMessage] = useState("");

  const [assistantMessage, setAssistantMessage] = useState(
    "You AI response will display here"
  );

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      ...(showAIResponse
        ? {}
        : {
            name: Yup.string().required("Required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("Required"),
          }),
      message: Yup.string().required("Required"),
    }),
    onSubmit: async (values, { setSubmitting, resetForm }) => {
      // Submit form data to backend or API

      setFormSuccessMessage("");
      setFormErrorMessage("");

      try {
        // Retrieve threadId and runId from localStorage
        const threadId = localStorage.getItem("threadId");

        // Include threadId and runId in the request data
        const requestData = {
          ...values,
          existingThreadId: threadId, // Include existingThreadId
        };

        // Example: Call GPT-4 API and get response
        if (showAIResponse) {
          const response = await axios.post(
            `${import.meta.env.VITE_ADAPT_BASE_API}/gpt`,
            requestData
          );
          const { assistantMessage, threadId } = response.data;

          // Store new threadId and runId in localStorage
          localStorage.setItem("threadId", threadId);

          // Split the string into an array of sentences using the dot as a delimiter
          let sentencesArray = assistantMessage.split(".");

          // Join the sentences back together with a newline character after each sentence
          let formattedString = sentencesArray.join(".<br/><br/>");

          setAssistantMessage(formattedString);
        } else {
          const response = await axios.post(
            `${import.meta.env.VITE_ADAPT_BASE_API}/contact`,
            values
          );
          const { message } = response.data;
          setFormSuccessMessage(message);
        }

        // Reset form after submission
        resetForm();
        setSubmitting(false);
      } catch (error) {
        setFormErrorMessage(error?.response?.data?.error);
        console.log(error?.response?.data?.error);
      }
    },
  });

  useEffect(() => {
    setFormErrorMessage("");
    setFormSuccessMessage("");
  }, [showAIResponse]);

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="w-full shadow-md rounded flex flex-col gap-8"
    >
      <div className="flex items-center justify-center gap-4 text-field">
        <label>Enable AI Responses</label>
        <Switch
          disabled={formik.isSubmitting}
          checked={showAIResponse}
          onChange={() => setShowAIResponse(!showAIResponse)}
          className={`${
            showAIResponse
              ? "bg-teal-600"
              : "bg-transparent border border-teal-600"
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span className="sr-only">AI Response</span>
          <span
            className={`${
              showAIResponse ? "translate-x-6" : "translate-x-1"
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
      </div>

      <div>
        <label
          className="block orbitron text-lg font-bold mb-6"
          htmlFor="message"
        >
          Ask us anything
        </label>
        <textarea
          disabled={formik.isSubmitting}
          placeholder="Ask us anything "
          className="text-field outline-none w-full "
          name="message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
        />
        {formik.touched.message && formik.errors.message ? (
          <div className="text-red-600">{formik.errors.message}</div>
        ) : null}
      </div>

      <Transition
        show={!showAIResponse}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {() => (
          <div className="flex items-center gap-8 flex-wrap lg:flex-nowrap">
            <div className="lg:flex-1 w-full space-y-4">
              <input
                disabled={formik.isSubmitting}
                className="text-field outline-none w-full"
                type="text"
                name="name"
                placeholder="Your Name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="text-red-600">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="lg:flex-1 w-full space-y-4">
              <input
                disabled={formik.isSubmitting}
                className="text-field outline-none w-full"
                type="email"
                name="email"
                placeholder="Your Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-600">{formik.errors.email}</div>
              ) : null}
            </div>
          </div>
        )}
      </Transition>

      {/* AI Response Transition */}
      <Transition
        show={showAIResponse}
        enter="transition-opacity duration-500"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-500"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        {() => (
          <div
            dangerouslySetInnerHTML={{ __html: assistantMessage }}
            className=" p-4 text-field rounded "
          ></div>
        )}
      </Transition>

      <div className="flex flex-col items-center justify-between">
        <button
          className="primary-gradient-button w-full disabled:opacity-[0.5]"
          type="submit"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting
            ? showAIResponse
              ? "AI is gathering information..."
              : "Sending Your Message"
            : "SUBMIT"}
        </button>

        <div className="text-lg text-start w-full mt-4 font-semibold text-green-500">
          {formSuccessMessage}
        </div>
        <div className="text-lg text-start w-full mt-4 font-semibold text-red-500">
          {formErrorMessage}
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
