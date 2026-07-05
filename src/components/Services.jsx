"use client";

import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      number: "01",
      title: "WEBSITE DEVELOPMENT",
      desc: "Modern, responsive websites with complete security, fast performance, and SEO-friendly design to grow your business online.",
      icon: "💻",
    },
    {
      number: "02",
      title: "MOBILE APP DEVELOPMENT",
      desc: "Powerful Android & iOS mobile apps with beautiful UI, smooth performance, and a user-centric experience.",
      icon: "📱",
    },
    {
      number: "03",
      title: "E-COMMERCE SOLUTIONS",
      desc: "Secure online stores with payment gateways, inventory management, and order tracking to help you sell more, anywhere.",
      icon: "🛒",
    },
    {
      number: "04",
      title: "AI CHATBOTS & CUSTOMER SUPPORT",
      desc: "Intelligent AI chatbots that provide 24/7 support, answer questions, and improve customer satisfaction across platforms.",
      icon: "💬",
    },
    {
      number: "05",
      title: "BOOKING & APPOINTMENT SYSTEMS",
      desc: "Smart booking systems for clinics, hospitals, salons, gyms, and service businesses to manage appointments effortlessly.",
      icon: "📅",
    },
    {
      number: "06",
      title: "ERP & MANAGEMENT SYSTEMS",
      desc: "Complete management systems for hospitals, colleges, universities, enterprises, and companies to streamline operations and improve efficiency.",
      icon: "🏢",
    },
    {
      number: "07",
      title: "CRM SOLUTIONS",
      desc: "Smart CRM systems to manage leads, customers, and sales pipelines, supporting better relationships and business growth.",
      icon: "📈",
    },
    {
      number: "08",
      title: "CUSTOM SOFTWARE DEVELOPMENT",
      desc: "Tailor-made software solutions designed to solve your unique business challenges and drive real results.",
      icon: "🧩",
    },
    {
      number: "09",
      title: "AI AUTOMATION",
      desc: "Automation for business processes such as emails, WhatsApp automation, data entry, and reports to save time, reduce errors, and increase productivity.",
      icon: "🤖",
    },
    {
      number: "10",
      title: "AI VOICE AGENTS",
      desc: "AI calling agents that talk like a real human, handle calls, qualify leads, and deliver exceptional customer experiences.",
      icon: "🎧",
      sub: "(AI ASSISTANT FOR CALLING)",
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f5f7ff] py-16 sm:py-20 lg:py-28"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">

        {/* TOP RIGHT LINES */}
        <div className="absolute top-0 right-0 opacity-40 hidden sm:block">
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

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6">

        {/* HEADER */}
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">

          <div className="flex items-center gap-4 mb-4 sm:mb-5">

            <span className="text-blue-600 text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
              What We Do
            </span>

            <div className="w-12 sm:w-16 h-[2px] bg-blue-600 rounded-full" />

          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] sm:tracking-[-0.05em] leading-[1.02] sm:leading-[0.95] text-[#0b1020]">

            Our{" "}
            <span className="text-blue-600">
              Services
            </span>

          </h2>

          <p className="mt-6 sm:mt-8 text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl">

            As a Vijayawada-based IT & software company, we deliver
            end-to-end digital solutions — from websites and apps to
            ERP, CRM, and AI systems — that help businesses build,
            automate, and grow.

          </p>

        </div>

        {/* SERVICES GRID */}
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.4) }}
              className="group relative overflow-hidden rounded-[24px] sm:rounded-[34px] border border-blue-100 bg-white p-6 sm:p-8 shadow-[0_10px_40px_rgba(37,99,235,0.05)] hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)] transition-all duration-500"
            >

              {/* NUMBER */}
              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">

                <span className="text-3xl sm:text-4xl font-bold text-blue-600 tracking-[-0.04em]">
                  {service.number}
                </span>

                <div className="w-10 sm:w-14 h-[2px] bg-blue-600 rounded-full" />

              </div>

              {/* CONTENT */}
              <div className="flex flex-col gap-5 sm:gap-6">

                {/* ICON BOX */}
                <div className="relative">

                  <div className="w-16 h-16 sm:w-[90px] sm:h-[90px] rounded-2xl sm:rounded-[28px] bg-gradient-to-br from-blue-500 to-blue-700 shadow-[0_15px_40px_rgba(37,99,235,0.35)] flex items-center justify-center text-white text-3xl sm:text-4xl group-hover:scale-105 transition-transform duration-500">

                    {service.icon}

                  </div>

                </div>

                {/* TEXT */}
                <div>

                  <h3 className="text-xl sm:text-2xl font-bold leading-tight tracking-[-0.02em] sm:tracking-[-0.03em] text-[#0b1020]">

                    {service.title}

                  </h3>

                  {service.sub && (
                    <p className="mt-2 text-blue-600 font-semibold text-xs sm:text-sm">
                      {service.sub}
                    </p>
                  )}

                  <div className="w-10 sm:w-12 h-[3px] bg-blue-600 rounded-full mt-4 sm:mt-5 mb-4 sm:mb-5" />

                  <p className="text-gray-600 text-sm sm:text-[16px] leading-relaxed">

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
          className="mt-12 sm:mt-16 rounded-[28px] sm:rounded-[36px] border border-blue-200 bg-white px-6 sm:px-8 md:px-12 py-8 shadow-[0_10px_40px_rgba(37,99,235,0.06)]"
        >

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">

            {/* LEFT */}
            <div className="flex items-center gap-5 sm:gap-6">

              <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-2xl sm:rounded-[24px] bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center text-white text-2xl sm:text-4xl shadow-[0_15px_40px_rgba(37,99,235,0.35)] shrink-0">

                🚀

              </div>

              <h3 className="text-xl sm:text-2xl md:text-4xl font-bold leading-tight tracking-[-0.03em] sm:tracking-[-0.04em] text-[#0b1020] max-w-2xl">

                We build intelligent software
                <br />
                that helps your business{" "}
                <span className="text-blue-600">
                  grow.
                </span>

              </h3>

            </div>

            {/* BUTTON */}
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-4 w-full lg:w-auto rounded-2xl bg-blue-600 hover:bg-blue-700 px-7 sm:px-8 py-4 sm:py-5 text-white text-base sm:text-lg font-semibold transition-all duration-300 shadow-[0_15px_40px_rgba(37,99,235,0.35)]"
            >

              Let's Work Together

              <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white text-blue-600 flex items-center justify-center text-lg sm:text-xl group-hover:translate-x-1 transition-transform shrink-0">

                ↗

              </span>

            </a>

          </div>

        </motion.div>

      </div>
    </section>
  );
}