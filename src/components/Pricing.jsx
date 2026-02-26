// src/components/Pricing.jsx
export default function Pricing() {

  const plans = [
    {
      icon: "🏪",
      name: "Local Business Website",
      price: "₹6,999",
      desc: "Ideal for cafes, salons, gyms, clinics, and local service providers",
      features: [
        "5-page professional website",
        "Mobile responsive design",
        "Contact & enquiry form",
        "Google Maps integration",
        "Basic SEO setup"
      ],
      highlight: false
    },
    {
      icon: "🏢",
      name: "Business Growth Website",
      price: "₹11,999",
      desc: "Perfect for service businesses aiming to generate leads and scale",
      features: [
        "8–10 page website",
        "Modern UI & branding",
        "WhatsApp integration",
        "Lead capture system",
        "Conversion-focused layout"
      ],
      highlight: true,
      tag: "Most Chosen"
    },
    {
      icon: "🛒",
      name: "E-commerce Store",
      price: "₹18,999",
      desc: "For businesses selling products online with payments and orders",
      features: [
        "Complete online store",
        "Payment gateway setup",
        "Product management",
        "Mobile shopping experience",
        "Order dashboard"
      ],
      highlight: false
    },
    {
      icon: "🤖",
      name: "AI Customer Support System",
      price: "₹24,999+",
      desc: "Automate customer conversations and lead capture using AI",
      features: [
        "AI chat assistant setup",
        "Lead capture automation",
        "Website integration",
        "Conversation workflows",
        "Performance monitoring"
      ],
      highlight: false,
      premium: true
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Intro */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gray-500 uppercase mb-3">
            ✦ Pricing
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Plans tailored for different business needs
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Whether you run a local business, growing company, or online store,
            we have solutions designed to support your digital journey.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {plans.map((p, i) => (
            <div
              key={i}
              className={`relative flex flex-col rounded-2xl p-8 transition duration-300
              ${p.highlight
                  ? "bg-white shadow-2xl scale-105 border border-indigo-500"
                  : "bg-white shadow-sm hover:shadow-xl border"}
              ${p.premium ? "bg-gradient-to-br from-indigo-600 to-purple-600 text-white border-0" : ""}`}
            >

              {/* Tag */}
              {p.tag && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-xs">
                  {p.tag}
                </span>
              )}

              {/* Icon */}
              <div className="text-3xl mb-2">{p.icon}</div>

              {/* Title */}
              <h3 className="text-lg font-semibold">{p.name}</h3>

              {/* Description */}
              <p className={`text-sm mt-1 ${p.premium ? "text-indigo-100" : "text-gray-500"}`}>
                {p.desc}
              </p>

              {/* Price */}
              <p className="text-3xl font-bold mt-4">{p.price}</p>

              {/* Features */}
              <ul className={`mt-6 space-y-2 text-sm flex-1 ${p.premium ? "text-indigo-100" : "text-gray-600"}`}>
                {p.features.map((f, idx) => (
                  <li key={idx} className="flex">
                    <span className="mr-2">✔️</span>
                    {f}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <button
                className={`mt-6 py-3 rounded-xl font-medium transition
                ${p.premium
                    ? "bg-white text-indigo-600 hover:scale-[1.02]"
                    : "bg-indigo-600 text-white hover:scale-[1.02]"}`}
              >
                Choose Plan →
              </button>

            </div>
          ))}

        </div>

        <p className="text-center text-gray-500 mt-10">
          Custom requirements? We can create a plan tailored specifically for your business.
        </p>

      </div>
    </section>
  );
}