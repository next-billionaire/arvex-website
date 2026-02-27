export default function Solutions() {

  const solutions = [
    {
      icon: "🤖",
      title: "AI Customer Support Assistant",
      desc: "Automate customer conversations and capture leads even when offline.",
      features: ["24/7 replies", "Lead capture", "Website integration", "Analytics"]
    },
    {
      icon: "🌐",
      title: "Business Website",
      desc: "Professional websites that build trust and generate enquiries.",
      features: ["Modern design", "Contact forms", "SEO ready", "Mobile-first"]
    },
    {
      icon: "🛒",
      title: "E-commerce Store",
      desc: "Sell products online with secure payments and smooth shopping.",
      features: ["Payments setup", "Product management", "Mobile UX", "Orders dashboard"]
    },
    {
      icon: "🚀",
      title: "Landing Pages",
      desc: "High-converting pages designed for ads and campaigns.",
      features: ["Conversion layout", "CTAs", "Lead forms", "Ad optimized"]
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Intro */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase mb-3">✦ Solutions</p>
          <h2 className="text-3xl md:text-4xl font-bold">
            Digital solutions designed for business growth
          </h2>
        </div>

        {/* Swipe container */}
        <div className="flex lg:grid lg:grid-cols-4 gap-6 overflow-x-auto snap-x snap-mandatory pb-4 lg:overflow-visible">

          {solutions.map((s, i) => (
            <div
              key={i}
              className="min-w-[260px] lg:min-w-0 snap-start bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition border flex flex-col"
            >
              <div className="text-3xl mb-3">{s.icon}</div>

              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>

              <p className="text-gray-600 text-sm">{s.desc}</p>

              <ul className="mt-5 space-y-2 text-sm text-gray-700 flex-1">
                {s.features.map((f, idx) => (
                  <li key={idx} className="flex">
                    <span className="mr-2">✔️</span>
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="mt-6 py-3 rounded-xl font-medium bg-indigo-600 text-white hover:scale-[1.02] transition"
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