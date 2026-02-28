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

      {/* Glow Circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300/30 blur-3xl rounded-full animate-float"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-300/30 blur-3xl rounded-full animate-float"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white shadow-sm text-xs mb-4">
            ⭐ Helping businesses build digital presence
          </div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Turn your business into a{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-[length:200%] bg-clip-text text-transparent animate-shimmer">
              customer-generating brand
            </span>
          </h1>

          <p className="mt-4 text-gray-600 text-lg">
            Websites and AI experiences designed to attract customers, increase enquiries, and grow revenue.
          </p>

          {/* Premium CTA Buttons */}
          <div className="flex gap-4 mt-6 justify-center md:justify-start">

            <a
              href="#services"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white transition-all duration-300 ease-premium hover:scale-105 hover:-translate-y-1 hover:shadow-2xl active:scale-95"
            >
              View Services
            </a>

            <a
              href="#portfolio"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-gray-300 transition-all duration-300 ease-premium hover:scale-105 hover:-translate-y-1 hover:shadow-lg active:scale-95"
            >
              See Portfolio
            </a>

          </div>

          {/* Form */}
          <div className="mt-8 p-[1px] rounded-2xl bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
            <div className="bg-white p-6 rounded-2xl shadow-xl">

              <p className="font-semibold mb-3">
                Get your free growth audit
              </p>

              <form onSubmit={handleAudit} className="space-y-3">

                <input name="name" placeholder="Your name" required className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-primary outline-none" />
                <input name="business" placeholder="Business type" required className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-primary outline-none" />
                <input name="phone" placeholder="Phone number" required className="w-full p-3 border rounded-xl focus:ring-2 focus:ring-primary outline-none" />

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-primary text-white transition-all duration-300 ease-premium hover:scale-105 hover:-translate-y-1 hover:shadow-xl active:scale-95"
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
          </div>

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
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
          />
        </motion.div>

      </div>
    </section>
  );
}