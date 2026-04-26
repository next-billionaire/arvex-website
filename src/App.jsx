import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import WhyChoose from "./components/WhyChoose"; // ✅ FIXED (added import)
import Process from "./components/Process";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import ServiceLandingPage from "./components/ServiceLandingPage";
import SeoHead from "./components/SeoHead";

function Home() {
  return (
    <>
      <SeoHead
        title="Arvex Technologies - Web Development & AI Solutions"
        description="Professional web development, AI chatbots, and digital solutions for businesses. Get custom websites, e-commerce stores, and growth-focused web applications."
        path="/"
      />
      <Hero />
      <Services />
      <Portfolio />
      <WhyChoose /> {/* ✅ Now properly defined */}
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
        <Route path="/services/:serviceId" element={<ServiceLandingPage />} />
        <Route path="/services/:serviceId/:cityId" element={<ServiceLandingPage />} />
      </Routes>

      <Footer />
      <WhatsAppFloat />
    </Router>
  );
}