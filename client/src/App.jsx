import LandingPage from "./pages/LandingPage";
import AOS from "aos";
import "aos/dist/aos.css";
import { Routes, Route } from "react-router-dom";
import Reviews from "./pages/Reviews";
import Faq from "./pages/Faq";
function App() {

  AOS.init({
    once: true, 
  });
  
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </div>
  );
}

export default App;
