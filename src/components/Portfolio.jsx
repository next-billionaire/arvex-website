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
        metric: "Optimized",
        label: "For More Bookings"
      },
      tags: ["Web Design", "Reservations", "SEO"],
      industry: "restaurant",
      testimonial: "Improved our online booking experience significantly."
    },
    {
      title: "Real Estate Landing Page",
      category: "Real Estate",
      desc: "High-converting lead capture page for luxury property listings",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      link: "/realestate.html",
      results: {
        metric: "Lead Focused",
        label: "Landing System"
      },
      tags: ["Landing Page", "Lead Gen", "Ads"],
      industry: "realestate",
      testimonial: "Helped us generate consistent property inquiries."
    },
    {
      title: "Fashion E-commerce Store",
      category: "E-commerce",
      desc: "Complete online store with payments, inventory, and mobile-first design",
      img: "https://images.unsplash.com/photo-1556742031-c6961e8560b0",
      link: "/ecommerce.html",
      results: {
        metric: "Sales Ready",
        label: "E-commerce Platform"
      },
      tags: ["E-commerce", "Payments", "Mobile"],
      industry: "ecommerce",
      testimonial: "A smooth and professional online shopping experience."
    },
    {
      title: "Dental Clinic Website",
      category: "Healthcare",
      desc: "Professional website with appointment booking and service showcase",
      img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09",
      link: "/dental.html",
      results: {
        metric: "Conversion",
        label: "Optimized Design"
      },
      tags: ["Healthcare", "Booking", "SEO"],
      industry: "healthcare",
      testimonial: "Professional website that builds trust with patients."
    },
    {
      title: "Fitness Studio Landing",
      category: "Fitness",
      desc: "Membership-focused landing page with class schedules and pricing",
      img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48",
      link: "/fitness.html",
      results: {
        metric: "Membership",
        label: "Focused Layout"
      },
      tags: ["Fitness", "Memberships", "Conversion"],
      industry: "fitness",
      testimonial: "Clear structure that highlights our programs effectively."
    },
    {
      title: "Law Firm Website",
      category: "Professional Services",
      desc: "Trustworthy design with case studies and consultation booking",
      img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
      link: "/law.html",
      results: {
        metric: "Trust",
        label: "Focused Website"
      },
      tags: ["Legal", "Professional", "Trust"],
      industry: "professional",
      testimonial: "Positions us strongly as a professional firm."
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
    if (typeof window === "undefined") return;

    if (url === "#") {
      window.open(
        "https://wa.me/918520003931?text=Hi! I'd like to see more portfolio examples",
        "_blank",
        "noopener,noreferrer"
      );
    } else if (url.startsWith("http")) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.open(`${window.location.origin}${url}`, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <section id="portfolio" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.02] bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="max-w-7xl mx-auto px-6 relative">

        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-indigo-600 uppercase mb-3 tracking-wider">
            ✦ Portfolio
          </p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Projects built for
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              {" "}business growth
            </span>
          </motion.h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Each project is designed using conversion-focused strategy and modern design principles.
          </p>
        </div>

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
              <div className="relative h-64 overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition"></div>

                <div className="absolute top-4 right-4 bg-white rounded-xl px-3 py-2 shadow-lg">
                  <p className="text-lg font-bold text-indigo-600">{p.results.metric}</p>
                  <p className="text-xs text-gray-600">{p.results.label}</p>
                </div>
              </div>

              <div className="p-6">
                <div className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-semibold rounded-full mb-3">
                  {p.category}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-indigo-600 transition">
                  {p.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                  {p.desc}
                </p>

                <div className="p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-100">
                  <p className="text-xs text-gray-700 italic">"{p.testimonial}"</p>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}