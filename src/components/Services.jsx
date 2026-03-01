"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Services() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const solutions = [
    {
      icon: "🤖",
      badge: "Most Popular",
      badgeColor: "from-purple-500 to-pink-500",
      title: "AI Customer Support Assistant",
      desc: "Never miss a customer again. Automate conversations and capture leads 24/7.",
      features: [
        "24/7 instant replies",
        "Lead capture & qualification",
        "Multi-language support",
        "WhatsApp & web integration"
      ],
      results: { stat: "85%", label: "Response rate increase" },
      caseStudy: "Dental clinic got 23 qualified leads in first week"
    },
    {
      icon: "🌐",
      badge: "Best for Startups",
      badgeColor: "from-blue-500 to-indigo-500",
      title: "Business Website",
      desc: "Professional websites that build trust and turn visitors into customers.",
      features: [
        "Custom modern design",
        "Mobile-optimized",
        "SEO & speed optimized",
        "Lead generation forms"
      ],
      results: { stat: "3-5x", label: "More enquiries" },
      caseStudy: "Restaurant increased bookings by 40%"
    },
    {
      icon: "🛒",
      badge: "High ROI",
      badgeColor: "from-green-500 to-emerald-500",
      title: "E-commerce Store",
      desc: "Sell online with secure payments, inventory management, and seamless checkout.",
      features: [
        "Payment gateway setup",
        "Product catalog",
        "Order management",
        "Mobile shopping experience"
      ],
      results: { stat: "₹8.5L", label: "Avg. monthly sales" },
      caseStudy: "Fashion brand hit ₹2L in first month"
    },
    {
      icon: "🚀",
      badge: "Quick Launch",
      badgeColor: "from-orange-500 to-red-500",
      title: "Landing Pages",
      desc: "High-converting pages designed to turn ad traffic into customers.",
      features: [
        "Conversion-optimized design",
        "A/B testing ready",
        "Ad campaign integration",
        "Fast loading speed"
      ],
      results: { stat: "18%", label: "Avg. conversion rate" },
      caseStudy: "Real estate got 47 leads from ₹10k ad spend"
    }
  ];

  const scrollToContact = () => {
    const section = document.getElementById("contact");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="solutions"
      className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto px-6 relative">
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
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl hover:ring-2 hover:ring-indigo-500 transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col"
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div
                  className={`px-3 py-1 rounded-full bg-gradient-to-r ${s.badgeColor} text-white text-xs font-bold shadow-lg`}
                >
                  {s.badge}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>

                <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-indigo-600 transition">
                  {s.title}
                </h3>

                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {s.desc}
                </p>

                {/* Results */}
                <div className="mb-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                  <p className="text-2xl font-bold text-gray-900">
                    {s.results.stat}
                  </p>
                  <p className="text-xs text-gray-600">
                    {s.results.label}
                  </p>
                </div>

                {/* Features */}
                <ul className="space-y-2 text-sm text-gray-700 flex-1 mb-4">
                  {s.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-500">✔</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Case Study */}
                <div className="mb-4 p-3 bg-indigo-50 rounded-xl border border-indigo-100">
                  <p className="text-xs text-indigo-600 font-semibold mb-1">
                    Success Story
                  </p>
                  <p className="text-xs text-gray-700 italic">
                    "{s.caseStudy}"
                  </p>
                </div>

                {/* Get Started Button */}
                <button
                  type="button"
                  onClick={scrollToContact}
                  className={`w-full py-3 rounded-xl font-semibold bg-gradient-to-r ${s.badgeColor} text-white hover:scale-[1.02] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group`}
                >
                  <span>Get Started</span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}