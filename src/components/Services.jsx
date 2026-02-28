export default function Services() {

  const solutions = [
    {
      icon: "🤖",
      title: "AI Customer Support Assistant",
      desc: "Automate customer conversations and capture leads even when offline.",
      features: ["24/7 replies", "Lead capture", "Website integration", "Analytics"]
    },
    {
      icon: "🌐",
      title: "Business Website Development",
      desc: "Professional websites that build trust and generate enquiries.",
      features: ["Modern design", "Contact forms", "SEO ready", "Mobile-first"]
    },
    {
      icon: "🛒",
      title: "E-commerce Website",
      desc: "Sell products online with secure payments and smooth shopping.",
      features: ["Payments setup", "Product management", "Mobile UX", "Orders dashboard"]
    },
    {
      icon: "🚀",
      title: "Landing Page Development",
      desc: "High-converting pages designed for ads and campaigns.",
      features: ["Conversion layout", "CTAs", "Lead forms", "Ad optimized"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase mb-3">
            ✦ Services
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Digital Solutions for Business Growth
          </h2>

          <p className="mt-4 text-gray-600">
            We provide professional website development in Vijayawada,
            ecommerce website design, and AI-powered solutions for businesses
            across Andhra Pradesh.
          </p>
        </div>

        <div className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto pb-4">

          {solutions.map((s, i) => (
            <div
              key={i}
              className="min-w-[260px] lg:min-w-0 bg-white p-8 rounded-2xl border flex flex-col transition-all duration-500 ease-premium hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl"
            >

              <div className="text-3xl mb-3">{s.icon}</div>

              <h3 className="text-lg font-semibold mb-2">
                {s.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {s.desc}
              </p>

              <ul className="mt-5 space-y-2 text-sm text-gray-700 flex-1">
                {s.features.map((f, idx) => (
                  <li key={idx} className="flex">
                    <span className="mr-2">✔️</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* INTERNAL SEO LINK */}
              {s.title.includes("Business Website") && (
                <a
                  href="/website-development-vijayawada"
                  className="text-primary underline mt-4 text-sm"
                >
                  Website Development in Vijayawada →
                </a>
              )}

              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="mt-6 py-3 rounded-xl font-medium bg-primary text-white transition-all duration-300 ease-premium hover:scale-105 hover:-translate-y-1 hover:shadow-xl active:scale-95"
              >
                Get Quote →
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}export default function Services() {

  const solutions = [
    {
      icon: "🤖",
      title: "AI Customer Support Assistant",
      desc: "Automate customer conversations and capture leads even when offline.",
      features: ["24/7 replies", "Lead capture", "Website integration", "Analytics"]
    },
    {
      icon: "🌐",
      title: "Business Website Development",
      desc: "Professional websites that build trust and generate enquiries.",
      features: ["Modern design", "Contact forms", "SEO ready", "Mobile-first"]
    },
    {
      icon: "🛒",
      title: "E-commerce Website",
      desc: "Sell products online with secure payments and smooth shopping.",
      features: ["Payments setup", "Product management", "Mobile UX", "Orders dashboard"]
    },
    {
      icon: "🚀",
      title: "Landing Page Development",
      desc: "High-converting pages designed for ads and campaigns.",
      features: ["Conversion layout", "CTAs", "Lead forms", "Ad optimized"]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase mb-3">
            ✦ Services
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Digital Solutions for Business Growth
          </h2>

          <p className="mt-4 text-gray-600">
            We provide professional website development in Vijayawada,
            ecommerce website design, and AI-powered solutions for businesses
            across Andhra Pradesh.
          </p>
        </div>

        <div className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto pb-4">

          {solutions.map((s, i) => (
            <div
              key={i}
              className="min-w-[260px] lg:min-w-0 bg-white p-8 rounded-2xl border flex flex-col transition-all duration-500 ease-premium hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl"
            >

              <div className="text-3xl mb-3">{s.icon}</div>

              <h3 className="text-lg font-semibold mb-2">
                {s.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {s.desc}
              </p>

              <ul className="mt-5 space-y-2 text-sm text-gray-700 flex-1">
                {s.features.map((f, idx) => (
                  <li key={idx} className="flex">
                    <span className="mr-2">✔️</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* INTERNAL SEO LINK */}
              {s.title.includes("Business Website") && (
                <a
                  href="/website-development-vijayawada"
                  className="text-primary underline mt-4 text-sm"
                >
                  Website Development in Vijayawada →
                </a>
              )}

              <button
                onClick={() =>
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="mt-6 py-3 rounded-xl font-medium bg-primary text-white transition-all duration-300 ease-premium hover:scale-105 hover:-translate-y-1 hover:shadow-xl active:scale-95"
              >
                Get Quote →
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}