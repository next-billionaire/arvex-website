export default function WhyChoose() {
  const reasons = [
    {
      icon: "⚡",
      title: "Fast Delivery",
      description:
        "We understand business urgency. Your website or solution is delivered quickly without unnecessary delays."
    },
    {
      icon: "💬",
      title: "Simple Communication",
      description:
        "No technical confusion. We explain everything in simple language and keep you updated at every step."
    },
    {
      icon: "🎯",
      title: "Business-Focused Solutions",
      description:
        "We don’t just build websites — we create digital tools designed to bring enquiries, customers, and growth."
    },
    {
      icon: "📱",
      title: "Mobile-First Experience",
      description:
        "Your customers mostly visit from mobile. We ensure your website looks and works perfectly on all devices."
    },
    {
      icon: "🤝",
      title: "Ongoing Support",
      description:
        "Even after delivery, we are available for updates, questions, and improvements whenever needed."
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      description:
        "Professional digital solutions at pricing suitable for startups and local businesses."
    }
  ];

  return (
    <section id="why-choose" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* ===== Intro ===== */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-gray-500 uppercase mb-3">
            ✦ Why Choose Us
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            A reliable partner for your digital growth
          </h2>

          <p className="text-gray-600 mt-4">
            We combine creativity, technology, and business understanding to deliver
            digital solutions that are simple, effective, and results-driven.
          </p>
        </div>

        {/* ===== Grid ===== */}
        <div className="grid md:grid-cols-3 gap-10">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl border hover:shadow-md transition duration-300"
            >
              <div className="text-3xl mb-3">{reason.icon}</div>

              <h3 className="font-semibold text-lg mb-2">
                {reason.title}
              </h3>

              <p className="text-gray-600 text-sm">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}