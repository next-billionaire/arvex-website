export default function Services() {
  const services = [
    {
      icon: "🤖",
      title: "AI Customer Support Assistant",
      description:
        "A smart AI assistant that talks with your customers, answers questions, collects enquiries, and helps your business respond instantly — even when you are busy or offline.",
      benefits: [
        "Replies to customers 24/7",
        "Captures leads automatically",
        "Works on your website & chat",
        "Saves your time and effort"
      ]
    },
    {
      icon: "🌐",
      title: "Business Website",
      description:
        "A professional website that shows your services, builds trust, and helps customers easily contact and find your business online.",
      benefits: [
        "Mobile-friendly modern design",
        "Show your services clearly",
        "Contact & enquiry form",
        "Helps customers discover you online"
      ]
    },
    {
      icon: "🛒",
      title: "Online Store (E-commerce)",
      description:
        "Sell your products online with a simple and secure shopping website where customers can browse, order, and pay easily.",
      benefits: [
        "Accept online payments",
        "Display products professionally",
        "Smooth mobile shopping",
        "Easy order management"
      ]
    },
    {
      icon: "🚀",
      title: "Landing Pages for Ads",
      description:
        "Special pages designed to convert visitors from your ads into enquiries, bookings, or sales.",
      benefits: [
        "Perfect for Google & social ads",
        "Clear call-to-action sections",
        "Lead collection forms",
        "Improves campaign results"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* ===== Intro ===== */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-gray-500 uppercase mb-3">
            ✦ Our Services
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Everything your business needs to grow online
          </h2>

          <p className="text-gray-600 mt-4">
            We create simple and effective digital solutions that help businesses
            attract customers, answer enquiries faster, and increase sales.
          </p>
        </div>

        {/* ===== Grid ===== */}
        <div className="grid md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 border"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                <span>{service.icon}</span>
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-5">
                {service.description}
              </p>

              {/* Benefits */}
              <ul className="space-y-2">
                {service.benefits.map((item, i) => (
                  <li key={i} className="flex text-gray-700 text-sm">
                    <span className="mr-2">✅</span>
                    {item}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}