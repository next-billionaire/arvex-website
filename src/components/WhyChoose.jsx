export default function WhyChoose() {

  const reasons = [
    { icon: "⚡", title: "Fast Delivery" },
    { icon: "💬", title: "Simple Communication" },
    { icon: "🎯", title: "Business-Focused" },
    { icon: "📱", title: "Mobile-First" },
    { icon: "🤝", title: "Ongoing Support" },
    { icon: "💰", title: "Affordable" }
  ];

  return (
    <section id="why-choose" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Intro */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-gray-500 uppercase mb-2">
            ✦ Why Choose Us
          </p>

          <h2 className="text-2xl md:text-3xl font-bold">
            A reliable partner for your digital growth
          </h2>
        </div>

        {/* Compact grid */}
        <div className="flex flex-wrap justify-center gap-4">
          {reasons.map((r, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-4 py-2 rounded-full border bg-gray-50 hover:bg-gray-100 transition text-sm"
            >
              <span>{r.icon}</span>
              <span className="font-medium">{r.title}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}