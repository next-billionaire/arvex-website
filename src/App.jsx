import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import WhyChoose from "./components/WhyChoose";
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import WebsiteDevelopmentVijayawada from "./components/WebsiteDevelopmentVijayawada";

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Portfolio />
      <WhyChoose />
      <Process />
      <Contact />
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/website-development-vijayawada"
          element={<WebsiteDevelopmentVijayawada />}
        />
      </Routes>

      <Footer />
      <WhatsAppFloat />
    </Router>
  );
}