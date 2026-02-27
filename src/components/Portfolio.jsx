export default function Portfolio() {

  const projects = [
    {
      title: "Cafe Website",
      desc: "Menu showcase + reservation experience",
      img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
      link: "/cafe.html",
      tag: "Business Website",
      featured: true
    },
    {
      title: "Real Estate Landing",
      desc: "Lead generation property experience",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      link: "/realestate.html",
      tag: "Landing Page"
    },
    {
      title: "E-commerce Store",
      desc: "Shopping experience with checkout",
      img: "https://images.unsplash.com/photo-1556742031-c6961e8560b0",
      link: "/ecommerce.html",
      tag: "E-commerce"
    }
  ];

  const openDemo = (url) => {
    window.open(window.location.origin + url, "_blank");
  };

  const featured = projects.find(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Intro */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gray-500 uppercase mb-3">
            ✦ Portfolio
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            Experiences crafted for growth
          </h2>
        </div>

        {/* ⭐ FEATURED */}
        {featured && (
          <div
            onClick={() => openDemo(featured.link)}
            className="group relative rounded-3xl overflow-hidden shadow-lg cursor-pointer mb-12"
          >
            <img
              src={featured.img}
              className="w-full h-[260px] md:h-[420px] object-cover group-hover:scale-105 transition duration-700"
            />

            <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
              <span className="bg-white/20 backdrop-blur px-3 py-1 rounded-full text-xs w-fit mb-2">
                {featured.tag}
              </span>

              <h3 className="text-2xl font-semibold">{featured.title}</h3>
              <p className="text-sm opacity-90">{featured.desc}</p>
              <span className="mt-2 text-sm">View demo →</span>
            </div>
          </div>
        )}

        {/* ⭐ GRID */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {others.map((p, i) => (
            <div
              key={i}
              onClick={() => openDemo(p.link)}
              className="group relative rounded-xl overflow-hidden shadow-sm hover:shadow-lg cursor-pointer"
            >
              <img
                src={p.img}
                className="w-full h-40 md:h-60 object-cover group-hover:scale-105 transition duration-500"
              />

              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-4 text-white">
                <span className="bg-white/20 backdrop-blur px-2 py-1 rounded-full text-xs w-fit mb-1">
                  {p.tag}
                </span>
                <h3 className="text-sm md:text-lg font-semibold">{p.title}</h3>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}