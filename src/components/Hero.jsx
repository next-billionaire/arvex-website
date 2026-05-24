"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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

      <div className="max-w-7xl mx-auto px-6 pt-32 pb-24">

        {/* HERO GRID */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >

            {/* TOP LABEL */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-sm font-medium text-gray-700 shadow-sm">

              <div className="w-2 h-2 rounded-full bg-blue-600" />

              Modern websites & AI systems

            </div>

            {/* HEADING */}
            <h1 className="mt-8 text-5xl md:text-6xl xl:text-7xl font-semibold tracking-[-0.04em] leading-[0.95] text-gray-950 max-w-3xl">

              We build digital systems that help businesses grow faster.

            </h1>

            {/* DESCRIPTION */}
            <p className="mt-8 text-lg leading-relaxed text-gray-600 max-w-2xl">

              Arvex Technologies creates high-performance websites,
              AI customer support systems, and modern digital experiences
              designed to increase trust, conversions, and business growth.

            </p>

            {/* CTA BUTTONS */}
            <div className="flex flex-wrap gap-4 mt-10">

              {/* PRIMARY CTA */}
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-gray-950 text-white font-medium hover:bg-blue-600 transition-all duration-300"
              >
                Book Consultation

                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* SECONDARY CTA */}
              <a
                href="#portfolio"
                className="inline-flex items-center px-7 py-4 rounded-2xl border border-gray-300 text-gray-800 font-medium hover:border-gray-950 hover:bg-gray-950 hover:text-white transition-all duration-300"
              >
                View Our Work
              </a>

            </div>

            {/* TRUST TEXT */}
            <div className="flex flex-wrap items-center gap-8 mt-14 text-sm text-gray-500">

              <div className="flex items-center gap-3">
                <div className="w-10 h-px bg-gray-300" />
                <span>Modern UI/UX</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-px bg-gray-300" />
                <span>AI Automation</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-10 h-px bg-gray-300" />
                <span>Conversion Focused</span>
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
            <div className="relative rounded-[32px] border border-gray-200 bg-white shadow-[0_20px_80px_rgba(15,23,42,0.08)] overflow-hidden">

              {/* TOP BAR */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">

                <div className="flex items-center gap-3">

                  <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-semibold">
                    A
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">
                      Arvex Technologies
                    </h3>

                    <p className="text-xs text-gray-500">
                      Digital Growth Systems
                    </p>
                  </div>

                </div>

                <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-100 text-xs font-medium text-green-700">

                  <div className="w-2 h-2 rounded-full bg-green-500" />

                  Available for projects

                </div>

              </div>

              {/* CONTENT */}
              <div className="p-8">

                {/* FEATURE CARD */}
                <div className="rounded-3xl bg-gray-950 p-8 text-white">

                  <p className="text-sm text-blue-400 font-medium mb-6">
                    AI CUSTOMER SUPPORT
                  </p>

                  <h3 className="text-3xl font-semibold leading-tight">

                    Automate conversations.
                    <br />
                    Capture more leads.

                  </h3>

                  <p className="mt-5 text-gray-300 leading-relaxed max-w-md">

                    AI-powered support systems designed to help businesses
                    respond faster, improve customer experience,
                    and increase conversions.

                  </p>

                  {/* MINI STATS */}
                  <div className="grid grid-cols-2 gap-4 mt-10">

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-2xl font-semibold">
                        24/7
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        Customer support
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-2xl font-semibold">
                        Fast
                      </p>
                      <p className="text-sm text-gray-400 mt-1">
                        Response systems
                      </p>
                    </div>

                  </div>

                </div>

                {/* LOWER GRID */}
                <div className="grid sm:grid-cols-2 gap-4 mt-5">

                  <div className="rounded-2xl border border-gray-200 p-5">

                    <p className="text-sm font-medium text-gray-500 mb-3">
                      Website Development
                    </p>

                    <h4 className="text-xl font-semibold text-gray-900 leading-snug">
                      Fast, modern websites built for trust and conversions.
                    </h4>

                  </div>

                  <div className="rounded-2xl border border-gray-200 p-5">

                    <p className="text-sm font-medium text-gray-500 mb-3">
                      Growth Focused
                    </p>

                    <h4 className="text-xl font-semibold text-gray-900 leading-snug">
                      Digital systems designed to support long-term growth.
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