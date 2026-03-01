"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      title: "Modern Cafe Website",
      category: "Restaurant",
      desc: "Menu showcase, online reservations, and Instagram feed integration",
      img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
      link: "/cafe.html",
      results: {
        metric: "+340%",
        label: "Bookings"
      },
      tags: ["Web Design", "Reservations", "SEO"],
      industry: "restaurant",
      testimonial: "Bookings tripled in the first month!"
    },
    {
      title: "Real Estate Landing Page",
      category: "Real Estate",
      desc: "High-converting lead capture page for luxury property listings",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      link: "/realestate.html",
      results: {
        metric: "47 leads",
        label: "From ₹10k ad spend"
      },
      tags: ["Landing Page", "Lead Gen", "Ads"],
      industry: "realestate",
      testimonial: "Best ROI we've ever seen on digital ads"
    },
    {
      title: "Fashion E-commerce Store",
      category: "E-commerce",
      desc: "Complete online store with payments, inventory, and mobile-first design",
      img: "https://images.unsplash.com/photo-1556742031-c6961e8560b0",
      link: "/ecommerce.html",
      results: {
        metric: "₹2L",
        label: "First month sales"
      },
      tags: ["E-commerce", "Payments", "Mobile"],
      industry: "ecommerce",
      testimonial: "Exceeded our first-year target in 3 months"
    },
    {
      title: "Dental Clinic Website",
      category: "Healthcare",
      desc: "Professional website with appointment booking and service showcase",
      img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
      link: "#",
      results: {
        metric: "23 leads",
        label: "First week"
      },
      tags: ["Healthcare", "Booking", "SEO"],
      industry: "healthcare",
      testimonial: "Phone hasn't stopped ringing since launch"
    },
    {
      title: "Fitness Studio Landing",
      category: "Fitness",
      desc: "Membership-focused landing page with class schedules and pricing",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
      link: "#",
      results: {
        metric: "+180%",
        label: "Sign-ups"
      },
      tags: ["Fitness", "Memberships", "Conversion"],
      industry: "fitness",
      testimonial: "Our best month ever for new member sign-ups"
    },
    {
      title: "Law Firm Website",
      category: "Professional Services",
      desc: "Trustworthy design with case studies and consultation booking",
      img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
      link: "#",
      results: {
        metric: "+95%",
        label: "Consultations"
      },
      tags: ["Legal", "Professional", "Trust"],
      industry: "professional",
      testimonial: "Positions us as the premium choice in our area"
    }
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "restaurant", label: "Restaurant" },
    { id: "realestate", label: "Real Estate" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "healthcare", label: "Healthcare" },
    { id: "fitness", label: "Fitness" },
    { id: "professional", label: "Professional" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(p => p.industry === activeFilter);
const openDemo = (url) => {
  if (!url) return;

  // Prevent SSR errors (Next.js)
  if (typeof window === "undefined") return;

  if (url === "#") {
    window.open(
      "https://wa.me/918520003931?text=Hi! I'd like to see more portfolio examples",
      "_blank",
      "noopener,noreferrer"
    );
  } else if (url.startsWith("http")) {
    // If it's already a full URL
    window.open(url, "_blank", "noopener,noreferrer");
  } else {
    // If it's a relative path
    window.open(`${window.location.origin}${url}`, "_blank", "noopener,noreferrer");
  }
};

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200/30 blur-3xl rounded-full"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-indigo-200/30 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* ===== Enhanced Header ===== */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-100 text-xs mb-4"
          >
            <svg className="w-4 h-4 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700 font-medium">Real projects. Real results.</span>
          </motion.div>

          <p className="text-sm font-semibold text-indigo-600 uppercase mb-3 tracking-wider">
            ✦ Portfolio
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Success stories from{" "}
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              businesses like yours
            </span>
          </motion.h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Every project is designed to attract customers and drive revenue. 
            See what we've built for businesses across industries.
          </p>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-8 mt-8"
          >
            <div className="text-center">
              <p className="text-3xl font-bold text-indigo-600">100+</p>
              <p className="text-sm text-gray-600">Projects Delivered</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-indigo-600">240%</p>
              <p className="text-sm text-gray-600">Avg. Growth</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-indigo-600">98%</p>
              <p className="text-sm text-gray-600">Client Satisfaction</p>
            </div>
          </motion.div>
        </div>

        {/* ===== Filter Pills ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
                activeFilter === filter.id
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {filter.label}
            </button>
          ))}
        </motion.div>

        {/* ===== Projects Grid ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              onClick={() => openDemo(p.link)}
              className="group relative rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer bg-white border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition"></div>
                
                {/* Results Badge */}
                <div className="absolute top-4 right-4 bg-white rounded-xl px-3 py-2 shadow-lg">
                  <p className="text-2xl font-bold text-indigo-600">{p.results.metric}</p>
                  <p className="text-xs text-gray-600">{p.results.label}</p>
                </div>

                {/* View Demo Button (Appears on Hover) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="bg-white text-indigo-600 px-6 py-3 rounded-xl font-bold shadow-2xl transform scale-90 group-hover:scale-100 transition-transform flex items-center gap-2">
                    <span>View Demo</span>
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Category Badge */}
                <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-full mb-3">
                  {p.category}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition">
                  {p.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {p.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Testimonial Quote */}
                <div className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <p className="text-xs text-gray-700 italic flex-1">"{p.testimonial}"</p>
                  </div>
                </div>
              </div>

              {/* Bottom Border Accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </motion.div>
          ))}
        </div>

        {/* ===== CTA Section ===== */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 relative"
        >
          <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center relative overflow-hidden shadow-2xl">
            
            {/* Background Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 blur-3xl rounded-full"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/10 blur-3xl rounded-full"></div>

            <div className="relative z-10">
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </motion.div>

              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to see your business here?
              </h3>
              
              <p className="text-lg opacity-95 max-w-2xl mx-auto mb-8">
                These results aren't luck — they're the outcome of strategic design, 
                proven conversion techniques, and a focus on what actually drives revenue.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <p className="text-3xl font-bold">7-14</p>
                  <p className="text-sm opacity-90">Days to launch</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <p className="text-3xl font-bold">240%</p>
                  <p className="text-sm opacity-90">Avg. increase</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <p className="text-3xl font-bold">100%</p>
                  <p className="text-sm opacity-90">Money-back</p>
                </div>
              </div>

              <button
                onClick={() => window.open('https://wa.me/918520003931?text=Hi! I want results like these for my business', '_blank')}
                className="bg-white text-indigo-600 px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all inline-flex items-center gap-3 group"
              >
                <span>Start Your Success Story</span>
                <svg className="w-6 h-6 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>

              <p className="mt-4 text-sm opacity-90">
                Free consultation • No commitment • Response in minutes
              </p>
            </div>
          </div>
        </motion.div>

        {/* ===== Trust Badges ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-600"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">All projects optimized for conversions</span>
          </div>
          <div className="w-px h-6 bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">Mobile-first responsive design</span>
          </div>
          <div className="w-px h-6 bg-gray-300"></div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="font-medium">SEO & speed optimized</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}