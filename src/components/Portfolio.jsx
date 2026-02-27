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
    <section id="portfolio" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Intro */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-gray-500 uppercase mb-2">
            ✦ Portfolio
          </p>

          <h2 className="text-2xl md:text-3xl font-bold">
            Selected digital experiences
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border shadow-sm hover:shadow-lg transition overflow-hidden flex flex-col"
            >

              {/* Image */}
              <div
                onClick={() => openDemo(p.link)}
                className="cursor-pointer overflow-hidden"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-44 object-cover hover:scale-105 transition duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col flex-1">

                <h3 className="font-semibold text-sm mb-1">
                  {p.title}
                </h3>

                <p className="text-xs text-gray-600 flex-1">
                  {p.desc}
                </p>

                <button
                  onClick={() => openDemo(p.link)}
                  className="text-indigo-600 text-sm mt-3 font-medium hover:underline text-left"
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