"use client";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useState, useEffect } from "react";

export default function Hero() {
  const [status, setStatus] = useState(null);
  const [liveVisitors, setLiveVisitors] = useState(12);
  const [recentSignups, setRecentSignups] = useState(3);

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
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-300/30 blur-3xl rounded-full animate-float"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-300/30 blur-3xl rounded-full animate-float"></div>

      <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center">

        <motion.div
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >

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

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-indigo-100 text-xs mb-4 ml-2"
          >
            <span className="text-gray-700 font-medium">Trusted by businesses</span>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold leading-tight mt-6">
            Get more customers{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-[length:200%] bg-clip-text text-transparent animate-shimmer">
              with smart digital systems
            </span>
          </h1>

          <p className="mt-5 text-gray-700 text-lg leading-relaxed">
            We build websites and AI chatbots that turn visitors into paying customers.
            <span className="font-semibold text-gray-900"> Designed to increase enquiries and engagement.</span>
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-7">
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-md">
              <span className="text-2xl">⚡</span>
              <div className="text-left">
                <p className="text-xs text-gray-500">Delivery</p>
                <p className="font-semibold text-sm">Fast turnaround</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-md">
              <span className="text-2xl">⭐</span>
              <div className="text-left">
                <p className="text-xs text-gray-500">Quality</p>
                <p className="font-semibold text-sm">Professional execution</p>
              </div>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow-md">
              <span className="text-2xl">🎯</span>
              <div className="text-left">
                <p className="text-xs text-gray-500">Focus</p>
                <p className="font-semibold text-sm">Growth-driven approach</p>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-4 text-center md:text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full">
              <span className="text-sm font-semibold text-green-900">
                Built for long-term business growth
              </span>
            </div>
          </motion.div>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="hidden md:block relative"
        >
          <div className="h-[520px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=2070&auto=format&fit=crop"
              alt="business consultation"
              className="w-full h-full object-cover hover:scale-105 transition duration-700"
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}