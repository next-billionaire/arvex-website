"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-blue-50 blur-3xl opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#f8fafc_1px,transparent_1px),linear-gradient(to_bottom,#f8fafc_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-6 pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 lg:pb-24">

        {/* HERO GRID */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >

            {/* TOP LABEL */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-xs sm:text-sm font-medium text-gray-700 shadow-sm">

              <MapPin className="w-3.5 h-3.5 text-blue-600" />

              IT & Software Company in Vijayawada

            </div>

            {/* HEADING */}
            <h1 className="mt-6 sm:mt-8 text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold tracking-[-0.04em] leading-[1.02] sm:leading-[0.95] text-gray-950 max-w-3xl">

              Enterprise software, ERP & AI systems, built and supported locally.

            </h1>

            {/* DESCRIPTION */}
            <p className="mt-6 sm:mt-8 text-base sm:text-lg leading-relaxed text-gray-600 max-w-2xl">

              Arvex Technologies is a Vijayawada-based software company
              delivering websites, mobile apps, ERP & CRM systems, AI
              automation, and AI voice agents for hospitals, colleges,
              enterprises, and growing businesses across Andhra Pradesh
              and beyond.

            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-3 sm:gap-4 mt-8 sm:mt-10">

              {/* PRIMARY CTA */}
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl bg-gray-950 text-white text-sm sm:text-base font-medium hover:bg-blue-600 transition-all duration-300"
              >
                Book Consultation

                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* SECONDARY CTA */}
              <a
                href="#services"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-2xl border border-gray-300 text-gray-800 text-sm sm:text-base font-medium hover:border-gray-950 hover:bg-gray-950 hover:text-white transition-all duration-300"
              >
                Explore Our Services
              </a>

            </div>

            {/* TRUST TEXT */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-4 mt-12 sm:mt-14 text-sm text-gray-500">

              <div className="flex items-center gap-3">
                <div className="w-10 h-px bg-gray-300" />
                <span>ERP & Enterprise Systems</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-px bg-gray-300" />
                <span>AI Automation</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-px bg-gray-300" />
                <span>Custom Software</span>
              </div>

            </div>

          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >

            {/* MAIN CONTAINER */}
            <div className="relative rounded-[24px] sm:rounded-[32px] border border-gray-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)] overflow-hidden">

              {/* TOP BAR */}
              <div className="flex items-center justify-between gap-3 px-5 sm:px-6 py-4 sm:py-5 border-b border-gray-100">

                <div className="flex items-center gap-3">

                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-semibold shrink-0">
                    A
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      Arvex Technologies
                    </h3>

                    <p className="text-xs text-gray-500">
                      Vijayawada · Enterprise Software
                    </p>
                  </div>

                </div>

                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 text-xs font-medium text-green-700 shrink-0">

                  <div className="w-2 h-2 rounded-full bg-green-500" />

                  Available for projects

                </div>

              </div>

              {/* CONTENT */}
              <div className="p-5 sm:p-8">

                {/* FEATURE CARD */}
                <div className="rounded-2xl sm:rounded-3xl bg-gray-950 p-6 sm:p-8 text-white">

                  <p className="text-xs sm:text-sm text-blue-400 font-medium mb-4 sm:mb-6">
                    ERP & AI SYSTEMS
                  </p>

                  <h3 className="text-2xl sm:text-3xl font-semibold leading-tight">

                    Automate operations.
                    <br />
                    Scale with confidence.

                  </h3>

                  <p className="mt-4 sm:mt-5 text-sm sm:text-base text-gray-300 leading-relaxed max-w-md">

                    ERP, CRM, and AI-powered automation built for hospitals,
                    colleges, and enterprises that need reliable, locally
                    supported systems.

                  </p>

                  {/* MINI STATS */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-8 sm:mt-10">

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                      <p className="text-xl sm:text-2xl font-semibold">
                        10+
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400 mt-1">
                        Core services
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-4 sm:p-5">
                      <p className="text-xl sm:text-2xl font-semibold">
                        24/7
                      </p>
                      <p className="text-xs sm:text-sm text-gray-400 mt-1">
                        AI support systems
                      </p>
                    </div>

                  </div>

                </div>

                {/* LOWER GRID */}
                <div className="grid sm:grid-cols-2 gap-4 mt-5">

                  <div className="rounded-2xl border border-gray-200 p-5">

                    <p className="text-sm font-medium text-gray-500 mb-3">
                      Enterprise Software
                    </p>

                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 leading-snug">
                      ERP, CRM & custom systems built for real operations.
                    </h4>

                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5">

                    <p className="text-sm font-medium text-gray-500 mb-3">
                      Local & Reliable
                    </p>

                    <h4 className="text-lg sm:text-xl font-semibold text-gray-900 leading-snug">
                      Vijayawada-based team, dependable long-term support.
                    </h4>

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}