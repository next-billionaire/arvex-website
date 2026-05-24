"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      number: "01",
      title: "WEBSITE DEVELOPMENT",
      desc: "Modern, responsive, and high-performance websites designed to build trust and drive conversions.",
      icon: "💻",
    },
    {
      number: "02",
      title: "AI AUTOMATION",
      desc: "AI-powered automation systems that streamline workflows, support customers, and save valuable time.",
      icon: "🤖",
    },
    {
      number: "03",
      title: "LEAD GENERATION",
      desc: "Strategic lead generation systems designed to attract, capture, and convert high-quality leads.",
      icon: "🔍",
    },
    {
      number: "04",
      title: "AI CUSTOMER SUPPORT ASSISTANT",
      desc: "Intelligent AI assistants that handle calls, answer queries, and provide 24/7 customer support.",
      icon: "🎧",
      sub: "(AI ASSISTANT FOR CALLING)",
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f5f7ff] py-28"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* TOP RIGHT LINES */}
        <div className="absolute top-0 right-0 opacity-40">
          <svg
            width="500"
            height="300"
            viewBox="0 0 500 300"
            fill="none"
          >
            <path
              d="M500 0C420 80 420 220 500 300"
              stroke="#2563eb"
              strokeOpacity="0.15"
              strokeWidth="1.5"
            />
            <path
              d="M460 0C380 80 380 220 460 300"
              stroke="#2563eb"
              strokeOpacity="0.15"
              strokeWidth="1.5"
            />
            <path
              d="M420 0C340 80 340 220 420 300"
              stroke="#2563eb"
              strokeOpacity="0.15"
              strokeWidth="1.5"
            />
          </svg>
        </div>

        {/* BOTTOM LEFT BLUR */}
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-blue-200/20 blur-3xl rounded-full" />

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="max-w-3xl mb-20">

          <div className="flex items-center gap-4 mb-5">

            <span className="text-blue-600 text-sm font-bold tracking-[0.2em] uppercase">
              What We Do
            </span>

            <div className="w-16 h-[2px] bg-blue-600 rounded-full" />

          </div>

          <h2 className="text-5xl md:text-7xl font-bold tracking-[-0.05em] leading-[0.95] text-[#0b1020]">

            Our{" "}
            <span className="text-blue-600">
              Services
            </span>

          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-2xl">

            We offer end-to-end digital solutions that help businesses
            build, automate, and grow in the digital era.

          </p>

        </div>

        {/* SERVICES GRID */}
        <div className="grid lg:grid-cols-2 gap-7">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[34px] border border-blue-100 bg-white p-8 md:p-10 shadow-[0_10px_40px_rgba(37,99,235,0.05)] hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)] transition-all duration-500"
            >

              {/* NUMBER */}
              <div className="flex items-center gap-4 mb-8">

                <span className="text-4xl font-bold text-blue-600 tracking-[-0.04em]">
                  {service.number}
                </span>

                <div className="w-14 h-[2px] bg-blue-600 rounded-full" />

              </div>

              {/* CONTENT */}
              <div className="grid grid-cols-[110px_1fr] gap-8 items-start">

                {/* ICON BOX */}
                <div className="relative">

                  <div className="w-[110px] h-[110px] rounded-[28px] bg-gradient-to-br from-blue-500 to-blue-700 shadow-[0_15px_40px_rgba(37,99,235,0.35)] flex items-center justify-center text-white text-5xl group-hover:scale-105 transition-transform duration-500">

                    {service.icon}

                  </div>

                </div>

                {/* TEXT */}
                <div>

                  <h3 className="text-2xl md:text-3xl font-bold leading-tight tracking-[-0.03em] text-[#0b1020]">

                    {service.title}

                  </h3>

                  {service.sub && (
                    <p className="mt-2 text-blue-600 font-semibold text-sm">
                      {service.sub}
                    </p>
                  )}

                  <div className="w-12 h-[3px] bg-blue-600 rounded-full mt-5 mb-5" />

                  <p className="text-gray-600 text-[17px] leading-relaxed">

                    {service.desc}

                  </p>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

        {/* BOTTOM CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-[36px] border border-blue-200 bg-white px-8 md:px-12 py-8 shadow-[0_10px_40px_rgba(37,99,235,0.06)]"
        >

          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">

            {/* LEFT */}
            <div className="flex items-center gap-6">

              <div className="w-20 h-20 rounded-[24px] bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-4xl shadow-[0_15px_40px_rgba(37,99,235,0.35)]">

                🚀

              </div>

              <h3 className="text-2xl md:text-4xl font-bold leading-tight tracking-[-0.04em] text-[#0b1020] max-w-2xl">

                We build smart digital solutions
                <br />
                that help your business{" "}
                <span className="text-blue-600">
                  grow.
                </span>

              </h3>

            </div>

            {/* BUTTON */}
            <a
              href="#contact"
              className="group inline-flex items-center gap-4 rounded-2xl bg-blue-600 hover:bg-blue-700 px-8 py-5 text-white text-lg font-semibold transition-all duration-300 shadow-[0_15px_40px_rgba(37,99,235,0.35)]"
            >

              Let’s Work Together

              <span className="w-10 h-10 rounded-xl bg-white text-blue-600 flex items-center justify-center text-xl group-hover:translate-x-1 transition-transform">

                ↗

              </span>

            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}