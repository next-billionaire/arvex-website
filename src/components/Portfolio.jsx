"use client";

import { motion } from "framer-motion";
import ResponsiveImage from "./ResponsiveImage";
import { getOptimizedImageSrc } from "../data/imageMap";

export default function Portfolio() {

  const projects = [
    {
      title: "Modern Cafe Website",
      category: "Restaurant",
      desc: "Modern responsive website with reservations and premium UI experience.",
      img: "photo-1501339847302-ac426a4a7cbb",
      link: "/cafe.html",
    },
    {
      title: "Real Estate Landing Page",
      category: "Real Estate",
      desc: "High-converting landing page designed for premium property lead generation.",
      img: "photo-1560518883-ce09059eeffa",
      link: "/realestate.html",
    },
    {
      title: "Fashion E-commerce Store",
      category: "E-commerce",
      desc: "Premium shopping experience with modern mobile-first design system.",
      img: "photo-1556742031-c6961e8560b0",
      link: "/ecommerce.html",
    },
  ];

  const openDemo = (url) => {
    if (!url) return;

    if (typeof window === "undefined") return;

    if (url.startsWith("http")) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      window.open(
        `${window.location.origin}${url}`,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden py-24 bg-[#f8fafc]"
    >

      {/* BACKGROUND */}
      <div className="absolute inset-0">

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,23,42,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,23,42,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-100/40 blur-3xl rounded-full" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-16">

          <div className="max-w-3xl">

            <div className="flex items-center gap-4 mb-5">

              <span className="text-sm font-bold tracking-[0.2em] uppercase text-blue-600">
                Portfolio
              </span>

              <div className="w-16 h-[2px] rounded-full bg-blue-600" />

            </div>

            <h2 className="text-5xl md:text-6xl font-bold tracking-[-0.05em] leading-[0.95] text-[#0f172a]">

              Selected
              <span className="text-blue-600">
                {" "}Projects
              </span>

            </h2>

          </div>

          <p className="max-w-md text-gray-600 text-lg leading-relaxed">

            A few selected projects designed with modern UI/UX,
            strong visual hierarchy, and premium user experience.

          </p>

        </div>

        {/* PROJECTS */}
        <div className="grid lg:grid-cols-3 gap-7">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.08,
              }}
              onClick={() => openDemo(project.link)}
              className="group relative overflow-hidden rounded-[30px] border border-gray-200 bg-white cursor-pointer shadow-[0_10px_40px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_70px_rgba(37,99,235,0.12)] transition-all duration-500"
            >

              {/* IMAGE */}
              <div className="relative h-[250px] overflow-hidden">

                <ResponsiveImage
                  src={getOptimizedImageSrc(project.img)}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width:768px) 100vw, 33vw"
                  loading="lazy"
                  width={600}
                  height={400}
                />

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* CATEGORY */}
                <div className="absolute top-5 left-5 px-4 py-2 rounded-full bg-white/90 backdrop-blur-xl text-xs font-semibold text-blue-600">

                  {project.category}

                </div>

              </div>

              {/* CONTENT */}
              <div className="p-7">

                <h3 className="text-2xl font-bold tracking-[-0.03em] text-[#0f172a] group-hover:text-blue-600 transition-colors">

                  {project.title}

                </h3>

                <p className="mt-4 text-gray-600 leading-relaxed">

                  {project.desc}

                </p>

                {/* FOOTER */}
                <div className="mt-8 pt-5 border-t border-gray-100 flex items-center justify-between">

                  <span className="text-sm font-semibold text-[#0f172a] group-hover:text-blue-600 transition-colors">

                    View Project →

                  </span>

                  <div className="w-11 h-11 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 text-lg">

                    ↗

                  </div>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-14">

          <a
            href="#contact"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-[#0f172a] hover:bg-blue-600 text-white font-semibold transition-all duration-300"
          >

            Show More Projects

            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>

          </a>

        </div>

      </div>

    </section>
  );
}