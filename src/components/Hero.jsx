"use client";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState, useEffect, useRef } from "react";

// ─── Floating Orb ───────────────────────────────────────────────────────────
const Orb = ({ className }) => (
  <div className={`absolute rounded-full blur-3xl pointer-events-none ${className}`} />
);

// ─── Animated Counter ────────────────────────────────────────────────────────
const Counter = ({ end, suffix = "", duration = 2000 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const step = Math.ceil(end / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { setCount(end); clearInterval(timer); }
      else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [end, duration]);
  return <span>{count}{suffix}</span>;
};

// ─── Trust Badge ─────────────────────────────────────────────────────────────
const TrustBadge = ({ icon, label, value, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    className="flex flex-col items-center gap-1 px-5 py-3 rounded-2xl bg-white/70 backdrop-blur-sm border border-white shadow-lg shadow-indigo-100/40"
  >
    <span className="text-xl">{icon}</span>
    <span className="text-base font-bold text-gray-900 leading-none">{value}</span>
    <span className="text-[10px] text-gray-400 uppercase tracking-widest font-medium">{label}</span>
  </motion.div>
);

// ─── Step Indicator ──────────────────────────────────────────────────────────
const Step = ({ n, label, active, done }) => (
  <div className="flex flex-col items-center gap-1">
    <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300
      ${done ? "bg-green-500 text-white" : active ? "bg-indigo-600 text-white ring-4 ring-indigo-100" : "bg-gray-100 text-gray-400"}`}>
      {done ? "✓" : n}
    </div>
    <span className={`text-[9px] font-semibold uppercase tracking-wider transition-colors ${active || done ? "text-indigo-600" : "text-gray-300"}`}>{label}</span>
  </div>
);

const StepDivider = ({ done }) => (
  <div className={`flex-1 h-px mt-3.5 transition-all duration-500 ${done ? "bg-green-400" : "bg-gray-200"}`} />
);

// ─── Main Component ──────────────────────────────────────────────────────────
export default function Hero() {
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"
  const [liveVisitors, setLiveVisitors] = useState(12);
  const [recentSignups, setRecentSignups] = useState(3);
  const [step, setStep] = useState(1); // 1 | 2 | 3
  const [formData, setFormData] = useState({ name: "", business: "", phone: "", service: "" });
  const [focused, setFocused] = useState(null);
  const formRef = useRef(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const cardX = useTransform(mouseX, [0, 600], [-6, 6]);
  const cardY = useTransform(mouseY, [0, 700], [-4, 4]);

  useEffect(() => {
    const interval = setInterval(() => {
      setLiveVisitors(prev => Math.max(8, prev + Math.floor(Math.random() * 3) - 1));
      if (Math.random() > 0.7) setRecentSignups(prev => prev + 1);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = formRef.current?.getBoundingClientRect();
    if (rect) {
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    }
  };

  const handleChange = (e) => setFormData(p => ({ ...p, [e.target.name]: e.target.value }));

  const handleNext = (e) => {
    e.preventDefault();
    if (step < 3) setStep(s => s + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");
    emailjs.send(
      "service_ed645ik",
      "template_16m5dgq",
      { name: formData.name, business: formData.business, phone: formData.phone, email: "Lead from website" },
      "seN_ZeFks9wEmjqVH"
    ).then(() => {
      setStatus("success");
      setStep(1);
      setFormData({ name: "", business: "", phone: "", service: "" });
    }).catch(() => setStatus("error"));
  };

  const services = [
    { icon: "🌐", label: "Website Design" },
    { icon: "🤖", label: "AI Chatbot" },
    { icon: "📈", label: "Growth Strategy" },
    { icon: "💬", label: "WhatsApp Marketing" },
    { icon: "🔍", label: "SEO & Ads" },
    { icon: "🎯", label: "Lead Generation" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen pt-24 pb-20 overflow-hidden"
      style={{ background: "linear-gradient(135deg, #f0f4ff 0%, #f5f0ff 40%, #fff0f8 100%)" }}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(to right,rgba(99,102,241,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(99,102,241,0.04) 1px,transparent 1px)",
          backgroundSize: "48px 48px"
        }}
      />

      {/* Ambient orbs */}
      <Orb className="w-[600px] h-[600px] -top-60 -left-40 bg-purple-300/25 animate-[float_8s_ease-in-out_infinite]" />
      <Orb className="w-[500px] h-[500px] -bottom-40 -right-20 bg-indigo-300/20 animate-[float_10s_ease-in-out_infinite_2s]" />
      <Orb className="w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-pink-200/15 animate-[float_12s_ease-in-out_infinite_4s]" />

      {/* Live visitors pill */}
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm shadow-lg shadow-indigo-100/60 border border-white text-xs">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inset-0 rounded-full bg-green-400 opacity-75" />
              <span className="relative rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-gray-600 font-medium">
              <span className="text-gray-900 font-bold">{liveVisitors}</span> people viewing right now
            </span>
            <span className="w-px h-3 bg-gray-200" />
            <span className="text-indigo-600 font-semibold">{recentSignups} consultations booked today</span>
          </div>
        </motion.div>

        {/* Main grid */}
        <div className="grid lg:grid-cols-[1fr_480px] gap-12 xl:gap-20 items-start">

          {/* LEFT: Hero copy */}
          <div className="flex flex-col">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-xs font-semibold text-indigo-700 mb-6 tracking-wide uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                Trusted by 20+ growing businesses
              </div>

              {/* Headline */}
              <h1 className="text-5xl xl:text-6xl font-extrabold leading-[1.08] tracking-tight text-gray-900 mb-6">
                Get more customers{" "}
                <span
                  className="relative inline-block"
                  style={{
                    background: "linear-gradient(135deg,#4f46e5,#7c3aed,#db2777)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  with smart
                  <br />digital systems
                  {/* Underline squiggle */}
                  <svg
                    className="absolute -bottom-2 left-0 w-full"
                    viewBox="0 0 300 12"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <motion.path
                      d="M2 8 Q40 2 80 8 Q120 14 160 8 Q200 2 240 8 Q270 12 298 6"
                      stroke="url(#ugrad)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
                    />
                    <defs>
                      <linearGradient id="ugrad" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#4f46e5" />
                        <stop offset="1" stopColor="#db2777" />
                      </linearGradient>
                    </defs>
                  </svg>
                </span>
              </h1>

              {/* Body */}
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg mb-8">
                We build conversion-focused websites and AI-powered chatbots that turn visitors into{" "}
                <span className="font-semibold text-gray-900">paying customers</span> — designed for long-term business growth.
              </p>

              {/* Feature pills */}
              <div className="flex flex-wrap gap-3 mb-10">
                {[
                  { icon: "⚡", text: "Fast Delivery" },
                  { icon: "🎯", text: "Growth-Driven" },
                  { icon: "🤖", text: "AI-Powered" },
                  { icon: "🔒", text: "Secure & Scalable" },
                ].map(({ icon, text }) => (
                  <span
                    key={text}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white/80 backdrop-blur border border-white shadow-sm text-sm font-medium text-gray-700"
                  >
                    {icon} {text}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Trust stats */}
            <div className="flex flex-wrap gap-3">
              <TrustBadge icon="🏆" label="Clients Served" value={<Counter end={20} suffix="+" />} delay={0.5} />
              <TrustBadge icon="📈" label="Avg. Growth" value={<Counter end={3} suffix="×" />} delay={0.6} />
              <TrustBadge icon="⭐" label="Satisfaction" value={<Counter end={98} suffix="%" />} delay={0.7} />
              <TrustBadge icon="⚡" label="Delivery" value="7 Days" delay={0.8} />
            </div>

            {/* Hero image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mt-12 hidden lg:block relative"
            >
              <div className="relative rounded-3xl overflow-hidden h-64 shadow-2xl shadow-indigo-200/50">
                <img
                  src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2070&auto=format&fit=crop"
                  alt="Business consultation"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-900/30 to-transparent" />
                <div className="absolute bottom-4 left-4 px-4 py-2 rounded-xl bg-white/90 backdrop-blur shadow-lg text-sm font-semibold text-gray-800 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Helping businesses grow since 2026
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT: Consultant form card */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ delay: 0.25, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ rotateX: cardY, rotateY: cardX, transformStyle: "preserve-3d" }}
            ref={formRef}
            onMouseMove={handleMouseMove}
            className="relative"
          >
            {/* Glow halo */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-indigo-400/30 via-purple-400/20 to-pink-400/30 blur-xl" />

            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-indigo-200/60 border border-white/80 bg-white/95 backdrop-blur-xl">
              {/* Card header */}
              <div
                className="px-7 pt-7 pb-6 relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg,#4f46e5 0%,#7c3aed 60%,#db2777 100%)",
                }}
              >
                <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/4" />
                <div className="absolute top-4 right-12 w-24 h-24 rounded-full bg-white/5" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-semibold tracking-wide uppercase">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-300 animate-pulse" />
                      Free Consultation
                    </span>
                    <span className="text-white/60 text-xs">No credit card needed</span>
                  </div>
                  <h2 className="text-2xl font-bold text-white leading-tight">
                    Get Your Free<br />Business Audit
                  </h2>
                  <p className="text-white/70 text-sm mt-1">
                    See exactly how we can 3× your enquiries in 90 days.
                  </p>
                </div>
              </div>

              {/* Step progress */}
              <div className="flex items-center px-7 pt-5 pb-4 gap-2">
                <Step n={1} label="About" active={step === 1} done={step > 1} />
                <StepDivider done={step > 1} />
                <Step n={2} label="Service" active={step === 2} done={step > 2} />
                <StepDivider done={step > 2} />
                <Step n={3} label="Contact" active={step === 3} done={status === "success"} />
              </div>

              {/* Form body */}
              <div className="px-7 pb-7">
                <AnimatePresence mode="wait">

                  {/* STEP 1 */}
                  {step === 1 && (
                    <motion.form
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      onSubmit={handleNext}
                      className="space-y-4"
                    >
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Your Name</label>
                        <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all duration-200 bg-gray-50/60
                          ${focused === "name" ? "border-indigo-400 bg-white shadow-md shadow-indigo-100" : "border-gray-100 hover:border-gray-200"}`}>
                          <span className="text-gray-400">👤</span>
                          <input
                            required
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocused("name")}
                            onBlur={() => setFocused(null)}
                            placeholder="John Smith"
                            className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-300 outline-none font-medium"
                          />
                        </div>
                      </div>
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Business Name</label>
                        <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all duration-200 bg-gray-50/60
                          ${focused === "business" ? "border-indigo-400 bg-white shadow-md shadow-indigo-100" : "border-gray-100 hover:border-gray-200"}`}>
                          <span className="text-gray-400">🏢</span>
                          <input
                            required
                            name="business"
                            value={formData.business}
                            onChange={handleChange}
                            onFocus={() => setFocused("business")}
                            onBlur={() => setFocused(null)}
                            placeholder="Your business name"
                            className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-300 outline-none font-medium"
                          />
                        </div>
                      </div>
                      <motion.button
                        whileHover={{ scale: 1.02, y: -1 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        className="w-full py-3.5 rounded-xl font-bold text-white text-sm tracking-wide shadow-lg shadow-indigo-300/50 transition-all"
                        style={{ background: "linear-gradient(135deg,#4f46e5,#7c3aed)" }}
                      >
                        Continue →
                      </motion.button>
                    </motion.form>
                  )}

                  {/* STEP 2 */}
                  {step === 2 && (
                    <motion.form
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      onSubmit={handleNext}
                      className="space-y-4"
                    >
                      <div className="space-y-2">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">What do you need?</label>
                        <div className="grid grid-cols-2 gap-2">
                          {services.map(({ icon, label }) => (
                            <button
                              key={label}
                              type="button"
                              onClick={() => setFormData(p => ({ ...p, service: label }))}
                              className={`flex items-center gap-2 px-3 py-2.5 rounded-xl border-2 text-sm font-medium transition-all duration-150 text-left
                                ${formData.service === label
                                  ? "border-indigo-500 bg-indigo-50 text-indigo-700 shadow-md shadow-indigo-100"
                                  : "border-gray-100 bg-gray-50 text-gray-600 hover:border-indigo-200 hover:bg-indigo-50/50"}`}
                            >
                              <span>{icon}</span>
                              <span className="text-xs">{label}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-sm font-semibold text-gray-500 hover:bg-gray-50 transition-colors"
                        >
                          ← Back
                        </button>
                        <motion.button
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          disabled={!formData.service}
                          className="flex-[2] py-3 rounded-xl font-bold text-white text-sm shadow-lg shadow-indigo-300/50 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                          style={{ background: "linear-gradient(135deg,#4f46e5,#7c3aed)" }}
                        >
                          Continue →
                        </motion.button>
                      </div>
                    </motion.form>
                  )}

                  {/* STEP 3 */}
                  {step === 3 && status !== "success" && (
                    <motion.form
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.25 }}
                      onSubmit={handleSubmit}
                      className="space-y-4"
                    >
                      <div className="space-y-1">
                        <label className="text-xs font-semibold text-gray-500 uppercase tracking-wider">WhatsApp / Phone</label>
                        <div className={`flex items-center gap-3 px-4 py-3 rounded-xl border-2 transition-all duration-200 bg-gray-50/60
                          ${focused === "phone" ? "border-indigo-400 bg-white shadow-md shadow-indigo-100" : "border-gray-100 hover:border-gray-200"}`}>
                          <span className="text-gray-400">📱</span>
                          <input
                            required
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={() => setFocused("phone")}
                            onBlur={() => setFocused(null)}
                            placeholder="+91 98765 43210"
                            className="flex-1 bg-transparent text-sm text-gray-800 placeholder-gray-300 outline-none font-medium"
                          />
                        </div>
                      </div>

                      {/* Summary chip */}
                      <div className="flex flex-wrap gap-2 p-3 rounded-xl bg-indigo-50 border border-indigo-100">
                        <span className="text-xs text-indigo-700">
                          <span className="font-semibold">Hi {formData.name}</span> — booking a free audit for{" "}
                          <span className="font-semibold">{formData.business}</span> about{" "}
                          <span className="font-semibold">{formData.service}</span>.
                        </span>
                      </div>

                      <div className="flex gap-2">
                        <button
                          type="button"
                          onClick={() => setStep(2)}
                          className="flex-1 py-3 rounded-xl border-2 border-gray-200 text-sm font-semibold text-gray-500 hover:bg-gray-50 transition-colors"
                        >
                          ← Back
                        </button>
                        <motion.button
                          whileHover={{ scale: 1.02, y: -1 }}
                          whileTap={{ scale: 0.98 }}
                          type="submit"
                          disabled={status === "sending"}
                          className="flex-[2] py-3.5 rounded-xl font-bold text-white text-sm shadow-lg shadow-indigo-300/50 disabled:opacity-70 transition-all"
                          style={{ background: "linear-gradient(135deg,#4f46e5,#7c3aed,#db2777)" }}
                        >
                          {status === "sending" ? (
                            <span className="flex items-center justify-center gap-2">
                              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                                <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8v8z" />
                              </svg>
                              Sending…
                            </span>
                          ) : "🚀 Get My Free Audit"}
                        </motion.button>
                      </div>

                      {status === "error" && (
                        <p className="text-center text-xs text-red-500">Something went wrong. Please try again.</p>
                      )}
                    </motion.form>
                  )}

                  {/* SUCCESS STATE */}
                  {status === "success" && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                      className="py-8 flex flex-col items-center text-center gap-4"
                    >
                      <div className="relative">
                        <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center text-4xl shadow-xl shadow-green-100">
                          🎉
                        </div>
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: [0, 1.3, 1] }}
                          transition={{ delay: 0.2, duration: 0.5 }}
                          className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold shadow-md"
                        >
                          ✓
                        </motion.div>
                      </div>
                      <div>
                        <p className="text-lg font-bold text-gray-900">You're all set, {formData.name || "there"}!</p>
                        <p className="text-sm text-gray-500 mt-1 max-w-xs">
                          Our team will reach out within{" "}
                          <span className="font-semibold text-indigo-600">24 hours</span> with your personalised audit and growth plan.
                        </p>
                      </div>
                      <div className="flex flex-col gap-2 w-full mt-2">
                        {[
                          { bg: "bg-indigo-50", text: "text-indigo-700", icon: "📋", label: "Free website audit report" },
                          { bg: "bg-purple-50", text: "text-purple-700", icon: "📈", label: "90-day growth roadmap" },
                          { bg: "bg-pink-50", text: "text-pink-700", icon: "🤝", label: "1-on-1 strategy call" },
                        ].map(({ bg, text, icon, label }) => (
                          <div key={label} className={`flex items-center gap-3 px-4 py-2.5 rounded-xl ${bg} text-sm ${text}`}>
                            <span>{icon}</span>
                            <span className="font-medium">{label}</span>
                            <span className="ml-auto text-green-600 font-bold text-xs">INCLUDED</span>
                          </div>
                        ))}
                      </div>
                      <button
                        onClick={() => { setStatus(null); setStep(1); setFormData({ name: "", business: "", phone: "", service: "" }); }}
                        className="text-xs text-gray-400 underline underline-offset-2 hover:text-gray-600 mt-1"
                      >
                        Submit another enquiry
                      </button>
                    </motion.div>
                  )}

                </AnimatePresence>

                {/* Bottom trust strip */}
                {status !== "success" && (
                  <div className="mt-5 pt-5 border-t border-gray-100 flex items-center justify-between text-[10px] text-gray-400 font-medium">
                    <span className="flex items-center gap-1">🔒 100% Confidential</span>
                    <span className="flex items-center gap-1">✅ No spam, ever</span>
                    <span className="flex items-center gap-1">⚡ Reply in 24h</span>
                  </div>
                )}
              </div>
            </div>

            {/* Floating social proof badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-5 left-6 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-white shadow-xl shadow-gray-200/80 border border-gray-100"
            >
              <div className="flex -space-x-2">
                {["https://i.pravatar.cc/32?img=1", "https://i.pravatar.cc/32?img=2", "https://i.pravatar.cc/32?img=3"].map((src, i) => (
                  <img key={i} src={src} alt="" className="w-7 h-7 rounded-full border-2 border-white" />
                ))}
              </div>
              <div>
                <p className="text-xs font-bold text-gray-800">Join 20+ businesses</p>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-2.5 h-2.5 text-amber-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) scale(1); }
          33% { transform: translateY(-20px) scale(1.02); }
          66% { transform: translateY(10px) scale(0.98); }
        }
      `}</style>
    </section>
  );
}