import { Route, Routes, useLocation } from "react-router-dom";

import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import Landing from "../pages/landing/Landing";
import Temario_Portfolio from "../pages/temario_portfolio/Temario_Portfolio";

const AnimatedRoutes = ({ personalDetails }) => {
  const location = useLocation();

  return (
    <Routes location={location} key={location.pathname}>
      <Route path="/" element={<Landing name={personalDetails.name} tagline={personalDetails.tagline} />} />

      <Route
        path="/about"
        element={
          <About
            name={personalDetails.name}
            location={personalDetails.location}
            email={personalDetails.email}
            availability={personalDetails.availability}
            brand={personalDetails.brand}
          />
        }
      />

      <Route path="/temario" element={<Temario_Portfolio />} />

      <Route
        path="/contact"
        element={
          <Contact name={personalDetails.name} location={personalDetails.location} email={personalDetails.email} />
        }
      />
    </Routes>
  );
};

export default AnimatedRoutes;
