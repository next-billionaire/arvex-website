export default function Portfolio() {

  const projects = [
    {
      title: "Cafe Website",
      desc: "Digital presence with menu showcase and reservation system",
      img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
      link: "/cafe.html"
    },
    {
      title: "Real Estate Landing Page",
      desc: "Lead generation experience for property enquiries",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      link: "/realestate.html"
    },
    {
      title: "E-commerce Store",
      desc: "Online shopping experience with product catalog and checkout",
      img: "https://images.unsplash.com/photo-1556742031-c6961e8560b0",
      link: "/ecommerce.html"
    }
  ];

  const openDemo = (url) => {
    window.open(window.location.origin + url, "_blank");
  };

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gray-500 uppercase mb-3">
            ✦ Portfolio
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Selected projects and experiences
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            A glimpse(demo websites) into the digital experiences we have designed to help businesses connect with customers.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              onClick={() => openDemo(p.link)}
              className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-300 cursor-pointer"
            >

              <img
                src={p.img}
                alt={p.title}
                className="w-full h-40 md:h-64 -cover group-hover:scale-110 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6 text-white">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-sm opacity-90">{p.desc}</p>
                <span className="text-sm mt-2">View demo →</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}