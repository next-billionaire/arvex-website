import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState } from "react";

export default function Hero() {

  const [status, setStatus] = useState(null);

  const handleAudit = (e) => {
    e.preventDefault();

    const data = {
      name: e.target.name.value,
      business: e.target.business.value,
      phone: e.target.phone.value,
      email: "Lead from website"
    };

    emailjs.send(
      "service_ed645ik",
      "template_16m5dgq",
      data,
      "seN_ZeFks9wEmjqVH"
    ).then(() => {
      setStatus("success");
      e.target.reset();
    }).catch(() => {
      setStatus("error");
    });
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-24 overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"
    >

      {/* ===== FLOATING GLOW BACKGROUND ===== */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300/30 blur-3xl rounded-full animate-float"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-300/30 blur-3xl rounded-full animate-float"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >

          {/* Brand label */}
          <p className="text-sm font-semibold text-gray-500 uppercase mb-3">
            ✦ Arvex Technologies
          </p>

          {/* Hook headline */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Turn your business into a{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-[length:200%] bg-clip-text text-transparent animate-shimmer">
              customer-generating brand
            </span>
          </h1>

          {/* Supporting text */}
          <p className="mt-4 text-gray-600 text-lg">
            We create websites and AI-powered experiences that help businesses
            attract customers, respond faster, and grow online without complexity.
          </p>

          {/* Trust chips */}
          <div className="flex flex-wrap gap-3 mt-6 text-sm">
            <span className="px-3 py-1 bg-white rounded-full shadow-sm">⚡ Fast delivery</span>
            <span className="px-3 py-1 bg-white rounded-full shadow-sm">💬 Simple communication</span>
            <span className="px-3 py-1 bg-white rounded-full shadow-sm">🤝 Ongoing support</span>
          </div>

          {/* ===== FORM CARD ===== */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 bg-white p-6 rounded-2xl shadow-xl"
          >

            <p className="font-semibold mb-3">
              Get a free website growth audit
            </p>

            <form onSubmit={handleAudit} className="space-y-3">

              <input
                name="name"
                placeholder="Your name"
                required
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />

              <input
                name="business"
                placeholder="Business type (Cafe, Salon, etc)"
                required
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />

              <input
                name="phone"
                placeholder="Phone number"
                required
                className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />

              <button
                type="submit"
                className="bg-indigo-600 text-white w-full py-3 rounded-xl hover:scale-[1.02] transition ease-premium animate-glow"
              >
                Get Free Audit →
              </button>

              {/* ===== STATUS MESSAGE ===== */}
              {status === "success" && (
                <p className="text-green-600 text-sm mt-2">
                  ✅ Request sent successfully!
                </p>
              )}

              {status === "error" && (
                <p className="text-red-600 text-sm mt-2">
                  ❌ Something went wrong. Try again.
                </p>
              )}

            </form>

            <p className="text-xs text-gray-500 mt-2">
              We usually respond within 24 hours
            </p>

          </motion.div>

        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9 }}
          className="h-[460px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2070&auto=format&fit=crop"
            alt="business consultation"
            className="w-full h-full object-cover hover:scale-105 transition duration-700"
          />
        </motion.div>

      </div>

    </section>
  );
}