"use client";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";

export default function Hero() {
  const [status, setStatus] = useState(null);
  const [liveVisitors, setLiveVisitors] = useState(12);
  const [recentSignups, setRecentSignups] = useState(3);

  // Simulate live activity (psychological trigger: social proof)
  useEffect(() => {
    const interval = setInterval(() => {
      setLiveVisitors(prev => prev + Math.floor(Math.random() * 3) - 1);
      if (Math.random() > 0.7) {
        setRecentSignups(prev => prev + 1);
      }
    }, 8000);
    return () => clearInterval(interval);
  }, []);

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
      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* Floating Glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300/30 blur-3xl rounded-full animate-float"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-300/30 blur-3xl rounded-full animate-float"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >

          {/* LIVE ACTIVITY INDICATOR - Social Proof */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-lg border border-green-100 text-xs mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-gray-700 font-medium">
              {liveVisitors} people viewing • {recentSignups} signed up today
            </span>
          </motion.div>

          {/* Trust Badge with Verification */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-indigo-100 text-xs mb-4 ml-2"
          >
            <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 font-medium">Trusted by 100+ businesses</span>
          </motion.div>

          {/* Power Headline with Specificity */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-6">
            Get 3-5x more customers{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-[length:200%] bg-clip-text text-transparent animate-shimmer">
              in 90 days
            </span>
            {" "}or we work for free
          </h1>

          {/* Specific Outcome with Numbers */}
          <p className="mt-5 text-gray-700 text-lg leading-relaxed">
            We build websites and AI chatbots that turn visitors into paying customers. 
            <span className="font-semibold text-gray-900"> Average client sees 240% increase in enquiries</span> within first 3 months.
          </p>

          {/* Proof Points - Authority Markers */}
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-7">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-md">
              <span className="text-2xl">⚡</span>
              <div className="text-left">
                <p className="text-xs text-gray-500">Delivery</p>
                <p className="font-semibold text-sm">7-14 days</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-md">
              <span className="text-2xl">⭐</span>
              <div className="text-left">
                <p className="text-xs text-gray-500">Rating</p>
                <p className="font-semibold text-sm">4.9/5.0</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-md">
              <span className="text-2xl">🎯</span>
              <div className="text-left">
                <p className="text-xs text-gray-500">Success Rate</p>
                <p className="font-semibold text-sm">98%</p>
              </div>
            </div>
          </div>

          {/* Social Proof - Mini Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 p-4 bg-white/80 backdrop-blur-sm rounded-xl shadow-md border border-gray-100"
          >
            <div className="flex items-start gap-3">
              <img
                src="https://i.pravatar.cc/40?img=12"
                alt="client"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <p className="text-sm text-gray-700 italic">
                  "We went from 2 enquiries a week to 15+ after working with them. Best investment we made."
                </p>
                <p className="text-xs text-gray-500 mt-1 font-medium">— Sarah M., Dental Practice Owner</p>
              </div>
            </div>
          </motion.div>

          {/* ENHANCED FORM with Urgency */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 p-[2px] rounded-2xl bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 shadow-2xl"
          >
            <div className="bg-white p-6 rounded-2xl">

              {/* Urgency Header */}
              <div className="flex items-center justify-between mb-4">
                <div>
                  <p className="font-bold text-lg text-gray-900">
                    Get Your Free Growth Audit
                  </p>
                  <p className="text-sm text-gray-600"> • 100% Free</p>
                </div>
                <div className="bg-red-50 px-3 py-1 rounded-full border border-red-200">
                  <p className="text-xs font-semibold text-red-600">3 spots left</p>
                </div>
              </div>

              {/* Value Bullets */}
              <div className="mb-4 space-y-2 bg-gradient-to-r from-indigo-50 to-purple-50 p-3 rounded-xl">
                <div className="flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">30-min strategy call with expert</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Custom growth roadmap for your business</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <svg className="w-4 h-4 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Website & competitor analysis</span>
                </div>
              </div>

              <form onSubmit={handleAudit} className="space-y-3">
                <input
                  name="name"
                  placeholder="Your name *"
                  required
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition"
                />

                <input
                  name="business"
                  placeholder="Business type (e.g., Dental Clinic) *"
                  required
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition"
                />

                <input
                  name="phone"
                  placeholder="Phone number *"
                  required
                  className="w-full p-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo-400 focus:border-indigo-400 outline-none transition"
                />

                <button
                  type="submit"
                  className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white w-full py-4 rounded-xl font-semibold hover:scale-[1.02] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Get My Free Audit Now</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>

                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-3 bg-green-50 border border-green-200 rounded-xl"
                  >
                    <p className="text-green-700 text-sm font-medium flex items-center gap-2">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      Success! We'll contact you within 2 hours.
                    </p>
                  </motion.div>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-sm text-center">Something went wrong. Please try again.</p>
                )}
              </form>

              {/* Trust Signals */}
              <div className="mt-4 flex items-center justify-center gap-4 text-xs text-gray-500">
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                  </svg>
                  <span>Your info is safe</span>
                </div>
                <div className="w-1 h-1 bg-gray-300 rounded-full"></div>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <span>Response in 2 hours</span>
                </div>
              </div>

            </div>
          </motion.div>

          {/* Money-back Guarantee Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-4 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full">
              <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-sm font-semibold text-green-900">
                • trust
              </span>
            </div>
          </motion.div>

        </motion.div>

        {/* ================= RIGHT IMAGE ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="hidden md:block relative"
        >
          {/* Floating Stats Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -left-6 top-20 bg-white p-4 rounded-2xl shadow-2xl z-10 border border-gray-100"
          >
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-3 rounded-xl">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">+240%</p>
                <p className="text-xs text-gray-600">Avg. Enquiries</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute -right-6 bottom-20 bg-white p-4 rounded-2xl shadow-2xl z-10 border border-gray-100"
          >
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-3 rounded-xl">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-bold text-gray-900">$850K</p>
                <p className="text-xs text-gray-600">Revenue Generated</p>
              </div>
            </div>
          </motion.div>

          {/* Main Image */}
          <div className="h-[520px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2070&auto=format&fit=crop"
              alt="business consultation"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>
        </motion.div>

      </div>

      {/* Bottom Trust Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="max-w-4xl mx-auto mt-16 px-6"
      >
        <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-100">
          <p className="text-center text-sm text-gray-600 mb-4">Trusted by leading brands:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <span className="text-xl font-bold text-gray-700">COMPANY</span>
            <span className="text-xl font-bold text-gray-700">BRAND</span>
            <span className="text-xl font-bold text-gray-700">BUSINESS</span>
            <span className="text-xl font-bold text-gray-700">CORP</span>
          </div>
        </div>
      </motion.div>

    </section>
  );
}