import LandingPage from "./pages/LandingPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import Faq from "./pages/Faq";
import Learn from "./pages/Learn";
import Contact from "./pages/Contact";
import Careers from "./pages/Careers";
import Terms from "./pages/policies/Terms";
import Privacy from "./pages/policies/Privacy";
import Refund from "./pages/policies/Refund";
function App() {
  AOS.init({
    once: true,
  });

  console.log(import.meta.env.ADAPT_BASE_API);
  return (
    <div>
      <Routes>
        <Route path="/*" element={<LandingPage />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/terms-services" element={<Terms />} />
        <Route path="/privacy-policy" element={<Privacy />} />
        <Route path="/refund-policy" element={<Refund />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
