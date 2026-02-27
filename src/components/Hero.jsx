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
      className="relative pt-28 pb-20 overflow-hidden bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"
    >

      {/* ===== GRID PATTERN ===== */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* ===== FLOATING GLOW ===== */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300/30 blur-3xl rounded-full animate-float"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-300/30 blur-3xl rounded-full animate-float"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* ================= LEFT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >

          {/* Authority badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm text-xs mb-4">
            ⭐ Helping businesses build digital presence
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Turn your business into a{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-[length:200%] bg-clip-text text-transparent animate-shimmer">
              customer-generating brand
            </span>
          </h1>

          {/* Outcome line */}
          <p className="mt-4 text-gray-600 text-lg">
            Websites and AI experiences designed to attract customers, increase enquiries, and grow revenue.
          </p>

          {/* Trust chips */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-6 text-sm">
            <span className="px-3 py-1 bg-white rounded-full shadow-sm">⚡ Fast delivery</span>
            <span className="px-3 py-1 bg-white rounded-full shadow-sm">💬 Simple communication</span>
            <span className="px-3 py-1 bg-white rounded-full shadow-sm">🤝 Ongoing support</span>
          </div>

          {/* FORM */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 p-[1px] rounded-2xl bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
          >
            <div className="bg-white p-6 rounded-2xl shadow-xl">

              <p className="font-semibold mb-3">
                Get your free growth audit
              </p>

              <form onSubmit={handleAudit} className="space-y-3">

                <input
                  name="name"
                  placeholder="Your name"
                  required
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
                />

                <input
                  name="business"
                  placeholder="Business type"
                  required
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
                />

                <input
                  name="phone"
                  placeholder="Phone number"
                  required
                  className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-indigo-400 outline-none"
                />

                <button
                  type="submit"
                  className="bg-indigo-600 text-white w-full py-3 rounded-xl hover:scale-[1.03] transition"
                >
                  Get Free Audit →
                </button>

                {status === "success" && <p className="text-green-600 text-sm">Request sent!</p>}
                {status === "error" && <p className="text-red-600 text-sm">Try again</p>}

              </form>

              <p className="text-xs text-gray-500 mt-2 text-center">
                No spam. Response within 24 hrs.
              </p>

            </div>
          </motion.div>

        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="hidden md:block h-[460px] rounded-3xl overflow-hidden shadow-2xl"
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