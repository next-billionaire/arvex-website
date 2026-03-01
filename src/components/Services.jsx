"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Solutions() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const solutions = [
    {
      icon: "🤖",
      badge: "Most Popular",
      badgeColor: "from-purple-500 to-pink-500",
      title: "AI Customer Support Assistant",
      desc: "Never miss a customer again. Automate conversations and capture leads 24/7.",
      features: ["24/7 instant replies", "Lead capture & qualification", "Multi-language support", "WhatsApp & web integration"],
      results: {
        stat: "85%",
        label: "Response rate increase"
      },
      caseStudy: "Dental clinic got 23 qualified leads in first week",
      pricing: ""
    },
    {
      icon: "🌐",
      badge: "Best for Startups",
      badgeColor: "from-blue-500 to-indigo-500",
      title: "Business Website",
      desc: "Professional websites that build trust and turn visitors into customers.",
      features: ["Custom modern design", "Mobile-optimized", "SEO & speed optimized", "Lead generation forms"],
      results: {
        stat: "3-5x",
        label: "More enquiries"
      },
      caseStudy: "Restaurant increased bookings by 340%",
      pricing: ""
    },
    {
      icon: "🛒",
      badge: "High ROI",
      badgeColor: "from-green-500 to-emerald-500",
      title: "E-commerce Store",
      desc: "Sell online with secure payments, inventory management, and seamless checkout.",
      features: ["Payment gateway setup", "Product catalog", "Order management", "Mobile shopping experience"],
      results: {
        stat: "₹8.5L",
        label: "Avg. monthly sales"
      },
      caseStudy: "Fashion brand hit ₹2L in first month",
      pricing: ""
    },
    {
      icon: "🚀",
      badge: "Quick Launch",
      badgeColor: "from-orange-500 to-red-500",
      title: "Landing Pages",
      desc: "High-converting pages designed to turn ad traffic into customers.",
      features: ["Conversion-optimized design", "A/B testing ready", "Ad campaign integration", "Fast loading speed"],
      results: {
        stat: "18%",
        label: "Avg. conversion rate"
      },
      caseStudy: "Real estate got 47 leads from ₹10k ad spend",
      pricing: ""
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-200/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* ===== Enhanced Intro ===== */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-md border border-gray-100 text-xs mb-4"
          >
            <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
            </svg>
            <span className="text-gray-700 font-medium">Proven solutions for every business need</span>
          </motion.div>

          <p className="text-sm font-semibold text-indigo-600 uppercase mb-3 tracking-wider">
            ✦ Our Solutions
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Digital solutions that{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              drive real results
            </span>
          </motion.h2>

          <p className="text-gray-600 text-lg">
            Choose the solution that fits your goals. Each one is designed to attract customers, 
            build trust, and grow your revenue.
          </p>

          {/* Quick Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 mt-8 text-sm"
          >
            <div className="text-center">
              <p className="text-3xl font-bold text-indigo-600">240%</p>
              <p className="text-gray-600">Avg. lead increase</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-indigo-600">7-14</p>
              <p className="text-gray-600">Days delivery</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-indigo-600">100+</p>
              <p className="text-gray-600">Happy clients</p>
            </div>
          </motion.div>
        </div>

        {/* ===== Enhanced Cards Grid ===== */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
          {solutions.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
            >
              {/* Hover Gradient Effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${s.badgeColor} opacity-0 group-hover:opacity-5 transition-opacity`}></div>

              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${s.badgeColor} text-white text-xs font-bold shadow-lg`}>
                  {s.badge}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                {/* Icon with Animation */}
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-indigo-600 transition">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {s.desc}
                </p>

                {/* Results Box */}
                <div className="mb-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-600 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clipRule="evenodd" />
                    </svg>
                    <div className="flex-1">
                      <p className="text-2xl font-bold text-gray-900">{s.results.stat}</p>
                      <p className="text-xs text-gray-600">{s.results.label}</p>
                    </div>
                  </div>
                </div>

                {/* Features List */}
                <ul className="space-y-2 text-sm text-gray-700 flex-1 mb-4">
                  {s.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Case Study */}
                <div className="mb-4 p-3 bg-indigo-50 rounded-xl border border-indigo-100">
                  <p className="text-xs text-indigo-600 font-semibold mb-1">Success Story</p>
                  <p className="text-xs text-gray-700 italic">"{s.caseStudy}"</p>
                </div>

                {/* Pricing */}
                <div className="mb-4">
                  <p className="text-sm text-gray-500">Starting at</p>
                  <p className="text-2xl font-bold text-gray-900">{s.pricing}</p>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    const message = `Hi! I'm interested in ${s.title}. Can we discuss?`;
                    window.open(`https://wa.me/918520003931?text=${encodeURIComponent(message)}`, '_blank');
                  }}
                  className={`w-full py-3 rounded-xl font-semibold bg-gradient-to-r ${s.badgeColor} text-white hover:scale-[1.02] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group`}
                >
                  <span>Get Started</span>
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
              </div>

              {/* Hover Border Effect */}
              <div className={`absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gradient transition ${hoveredCard === i ? 'opacity-100' : 'opacity-0'}`}></div>
            </motion.div>
          ))}
        </div>

        {/* ===== Comparison Table Hint ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-4 bg-white rounded-2xl shadow-md border border-gray-100">
            <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="text-gray-700">
              Not sure which solution fits best? 
              <button 
                onClick={() => window.open('https://wa.me/918520003931?text=Hi! I need help choosing the right solution for my business', '_blank')}
                className="ml-2 font-semibold text-indigo-600 hover:text-indigo-700 underline"
              >
                Let's chat and find the perfect fit
              </button>
            </p>
          </div>
        </motion.div>

        {/* ===== Trust Bar ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Money-Back Guarantee</h4>
            <p className="text-sm text-gray-600">Not happy? Get a full refund. No questions asked.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Fast Delivery</h4>
            <p className="text-sm text-gray-600">Most projects completed within 7-14 days. No delays.</p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
              </svg>
            </div>
            <h4 className="font-bold text-gray-900 mb-2">Ongoing Support</h4>
            <p className="text-sm text-gray-600">We're here for you even after launch. Updates included.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}