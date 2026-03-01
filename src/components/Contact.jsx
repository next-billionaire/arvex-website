"use client";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaCheckCircle
} from "react-icons/fa";

export default function Contact() {
  const [activeUsers, setActiveUsers] = useState(8);
  const [responseTime, setResponseTime] = useState("2 min");

  // Simulate live response time updates
  useEffect(() => {
    const interval = setInterval(() => {
      const times = ["1 min", "2 min", "3 min", "< 5 min"];
      setResponseTime(times[Math.floor(Math.random() * times.length)]);
      setActiveUsers(prev => Math.max(5, Math.min(15, prev + (Math.random() > 0.5 ? 1 : -1))));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-6xl mx-auto px-6 relative">

        {/* ===== Heading with Social Proof ===== */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-gray-100 text-xs mb-4"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-gray-700 font-medium">
              {activeUsers} people contacted us this week
            </span>
          </motion.div>

          <p className="text-sm font-semibold text-indigo-600 uppercase mb-3 tracking-wider">
            ✦ Get In Touch
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold"
          >
            Let's turn your vision into{" "}
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              reality
            </span>
          </motion.h2>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Average response time: <span className="font-semibold text-indigo-600">{responseTime}</span> • 
            Free consultation • No commitment required
          </p>
        </div>

        {/* ===== Grid ===== */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT — CONTACT CHANNELS */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 space-y-6"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Choose your preferred way to connect</h3>
              <p className="text-sm text-gray-600">We're available across multiple channels for your convenience</p>
            </div>

            {/* WhatsApp - PRIORITY (Highlighted) */}
            <div className="relative bg-gradient-to-r from-green-50 to-emerald-50 p-5 rounded-xl border-2 border-green-200 group hover:shadow-md transition">
              <div className="absolute -top-3 -right-3 bg-green-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
                Fastest ⚡
              </div>
              <div className="flex items-center gap-4">
                <div className="p-4 bg-white rounded-xl shadow-sm group-hover:scale-110 transition">
                  <FaWhatsapp className="text-green-600 text-2xl" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-gray-600 font-medium">WhatsApp Chat</p>
                  <p className="text-lg font-bold text-gray-900">Instant Response</p>
                  <a
                    href="https://wa.me/918520003931?text=Hi! I'm interested in your services"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-2 text-sm font-semibold text-green-600 hover:text-green-700"
                  >
                    Start conversation now
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition group">
              <div className="p-3 bg-indigo-50 rounded-xl group-hover:scale-110 transition">
                <FaPhoneAlt className="text-indigo-600 text-xl" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 font-medium">Call us directly</p>
                <a 
                  href="tel:+918520003931"
                  className="text-lg font-semibold text-gray-900 hover:text-indigo-600"
                >
                  +91 8520003931
                </a>
                <div className="flex items-center gap-2 mt-1">
                  <FaClock className="text-green-500 text-xs" />
                  <span className="text-xs text-gray-600">24 H availability</span>
                </div>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition group">
              <div className="p-3 bg-indigo-50 rounded-xl group-hover:scale-110 transition">
                <FaEnvelope className="text-indigo-600 text-xl" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 font-medium">Email us</p>
                <a 
                  href="mailto:hello.arvextech@gmail.com"
                  className="text-base font-semibold text-gray-900 hover:text-indigo-600 break-all"
                >
                  hello.arvextech@gmail.com
                </a>
                <p className="text-xs text-gray-600 mt-1">Response within 4 hours</p>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition group">
              <div className="p-3 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl group-hover:scale-110 transition">
                <FaInstagram className="text-pink-600 text-xl" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-gray-500 font-medium">Follow us on Instagram</p>
                <a
                  href="https://instagram.com/arvextech_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold text-gray-900 hover:text-pink-600 flex items-center gap-2"
                >
                  @arvextech_
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
                <p className="text-xs text-gray-600 mt-1">See our latest work & updates</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4 p-4 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-indigo-100">
              <div className="p-3 bg-white rounded-xl shadow-sm">
                <FaMapMarkerAlt className="text-indigo-600 text-xl" />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium mb-1">Based in</p>
                <p className="font-semibold text-gray-900">Vijayawada, Andhra Pradesh</p>
                <p className="text-xs text-gray-600 mt-1">🇮🇳 Serving clients across India & globally</p>
              </div>
            </div>

            {/* Trust badges */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <FaCheckCircle className="text-green-500" />
                  <span>100% Response rate</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <FaCheckCircle className="text-green-500" />
                  <span>No spam policy</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <FaCheckCircle className="text-green-500" />
                  <span>Your data is safe</span>
                </div>
              </div>
            </div>

          </motion.div>

          {/* RIGHT — ENHANCED CTA BLOCK */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white p-10 rounded-2xl shadow-2xl overflow-hidden"
          >

            {/* Animated Glow */}
            <div className="absolute -top-20 -right-20 w-56 h-56 bg-white/20 blur-3xl rounded-full animate-pulse"></div>
            <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-white/10 blur-3xl rounded-full"></div>

            {/* Trust Badge */}
            <div className="relative mb-6 inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Trusted by 100+ businesses</span>
            </div>

            <h3 className="text-3xl font-bold mb-4 relative">
              Ready to grow your business?
            </h3>

            <p className="text-base opacity-95 relative leading-relaxed">
              Join the businesses that transformed their online presence. We'll help you attract more customers, 
              build credibility, and scale revenue with modern websites and AI solutions.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 my-6 relative">
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <p className="text-2xl font-bold">240%</p>
                <p className="text-sm opacity-90">Avg. lead increase</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/20">
                <p className="text-2xl font-bold">7-14</p>
                <p className="text-sm opacity-90">Days delivery</p>
              </div>
            </div>

            {/* Benefits List */}
            <div className="relative space-y-3 text-sm">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Free 30-min strategy consultation</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Custom solution designed for your goals</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Fast turnaround - start seeing results quickly</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="font-medium">Ongoing support & maintenance included</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="mt-8 space-y-3 relative">
              <a
                href="https://wa.me/918520003931?text=Hi! I'm interested in your services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-white text-indigo-600 px-6 py-4 rounded-xl font-bold hover:scale-[1.02] hover:shadow-2xl transition-all group"
              >
                <FaWhatsapp className="text-xl" />
                <span>Start Free Consultation</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>

              <a
                href="tel:+918520003931"
                className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/20 transition"
              >
                <FaPhoneAlt />
                <span>Or call us now</span>
              </a>
            </div>

            {/* Guarantee Badge */}
            <div className="mt-6 relative text-center">
              <div className="inline-flex items-center gap-2 bg-green-500/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm border border-green-400/30">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-semibold">100% Satisfaction Guaranteed</span>
              </div>
            </div>

          </motion.div>

        </div>

        {/* Bottom Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-6 px-8 py-4 bg-white rounded-2xl shadow-md border border-gray-100">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">100+ Happy Clients</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="font-medium">4.9/5 Rating</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <svg className="w-5 h-5 text-indigo-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">7-14 Days Delivery</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}