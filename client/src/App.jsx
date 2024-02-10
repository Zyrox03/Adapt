import LandingPage from "./pages/LandingPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import Faq from "./pages/Faq";
import Learn from "./pages/Learn";
import Contact from "./pages/Contact";
function App() {
  AOS.init({
    once: true,
  });

  console.log(import.meta.env.ADAPT_BASE_API)
  return (
    <div>
      <Routes>
        <Route path="/*" element={<LandingPage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
