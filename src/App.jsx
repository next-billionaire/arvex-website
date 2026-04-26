import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

import Navbar from "./components/Navbar";
import SeoHead from "./components/SeoHead";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";

// Lazy load heavy components for code splitting
const Hero = lazy(() => import("./components/Hero"));
const Services = lazy(() => import("./components/Services"));
const Portfolio = lazy(() => import("./components/Portfolio"));
const WhyChoose = lazy(() => import("./components/WhyChoose"));
const Process = lazy(() => import("./components/Process"));
const Contact = lazy(() => import("./components/Contact"));
const ServiceLandingPage = lazy(() => import("./components/ServiceLandingPage"));

// Loading fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="inline-flex items-center gap-3">
      <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
      <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
      <div className="w-3 h-3 bg-indigo-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
    </div>
  </div>
);

function Home() {
  return (
    <>
      <SeoHead
        title="Arvex Technologies - Web Development & AI Solutions"
        description="Professional web development, AI chatbots, and digital solutions for businesses. Get custom websites, e-commerce stores, and growth-focused web applications."
        path="/"
      />
      <Suspense fallback={<LoadingFallback />}>
        <Hero />
        <Services />
        <Portfolio />
        <WhyChoose />
        <Process />
        <Contact />
      </Suspense>
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Navbar />

      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services/:serviceId" element={<ServiceLandingPage />} />
          <Route path="/services/:serviceId/:cityId" element={<ServiceLandingPage />} />
        </Routes>
      </Suspense>

      <Footer />
      <WhatsAppFloat />
    </Router>
  );
}