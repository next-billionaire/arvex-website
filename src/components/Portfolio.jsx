export default function Portfolio() {

  const projects = [
    {
      title: "Cafe Website",
      desc: "Menu showcase and reservation experience",
      img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb",
      link: "/cafe.html"
    },
    {
      title: "Real Estate Landing Page",
      desc: "Lead-focused property enquiry experience",
      img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa",
      link: "/realestate.html"
    },
    {
      title: "E-commerce Store",
      desc: "Online shopping with catalog and checkout",
      img: "https://images.unsplash.com/photo-1556742031-c6961e8560b0",
      link: "/ecommerce.html"
    }
  ];

  const openDemo = (url) => {
    window.open(window.location.origin + url, "_blank");
  };

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-gray-500 uppercase mb-2">
            ✦ Portfolio
          </p>
          <h2 className="text-3xl font-bold">
            Selected digital experiences
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border overflow-hidden flex flex-col transition-all duration-500 ease-premium hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl"
            >

              <div
                onClick={() => openDemo(p.link)}
                className="cursor-pointer overflow-hidden"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-44 object-cover transition-transform duration-700 ease-smooth hover:scale-110"
                />
              </div>

              <div className="p-4 flex flex-col flex-1">

                <h3 className="font-semibold text-sm mb-1">
                  {p.title}
                </h3>

                <p className="text-xs text-gray-600 flex-1">
                  {p.desc}
                </p>

                <button
                  onClick={() => openDemo(p.link)}
                  className="text-primary text-sm mt-3 font-medium text-left transition-all duration-300 ease-premium hover:translate-x-1"
                >
                  View demo →
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}