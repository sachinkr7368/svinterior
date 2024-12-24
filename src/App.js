import React, { useEffect } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./Pages/HomePage/HomePage";
import NotFound from "./Pages/notFound/notFound";
import ContactUs from "./Pages/ContactUs/contactUs";
import AboutUs from "./Pages/AboutUs/aboutUs";
import Factory from "./Pages/Factory/factory";
import Testimonials from "./Pages/testimonials/testimonials";
import ModularKitchen from "./Pages/services/modularKitchen";
import ModularWardrobe from "./Pages/services/modularWardrobe";
import TVCabinets from "./Pages/services/tvCabinets";
import CrockeryCabinets from "./Pages/services/crockeyCabinets";
import Furnitures from "./Pages/services/furnitures";
import Partitions from "./Pages/services/partitions";
import KidsRoom from "./Pages/services/kidsRoom";
import PoojaUnits from "./Pages/services/poojaUnits";
import POPCeiling from "./Pages/services/popCeiling";
import FoyerArea from "./Pages/services/foyerArea";
import HandlesAndBrackets from "./Pages/services/handlesAndBrackets";
import Grills from "./Pages/services/grills";
import AllInteriorWorks from "./Pages/services/allInteriorWorks";
import LivingRoom from "./Pages/services/livingRoom";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/factory-and-machinery" element={<Factory />} />
          <Route path="/modular-kitchen" element={<ModularKitchen />} />
          <Route path="/modular-wardrobe" element={<ModularWardrobe />} />
          <Route path="/tv-cabinets" element={<TVCabinets />} />
          <Route path="/crockery-cabinets" element={<CrockeryCabinets />} />
          <Route path="/furnitures" element={<Furnitures />} />
          <Route path="/partitions" element={<Partitions />} />
          <Route path="/kids-room" element={<KidsRoom />} />
          <Route path="/pooja-units" element={<PoojaUnits />} />
          <Route path="/pop-ceiling" element={<POPCeiling />} />
          <Route path="/foyer-area" element={<FoyerArea />} />
          <Route
            path="/handles-and-brackets"
            element={<HandlesAndBrackets />}
          />
          <Route path="/grills" element={<Grills />} />
          <Route path="/all-interior-works" element={<AllInteriorWorks />} />
          <Route path="/living-room" element={<LivingRoom />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
// hello