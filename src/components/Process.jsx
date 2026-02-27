export default function Process() {

  const steps = [
    {
      icon: "🤝",
      title: "Understanding Your Business",
      desc: "We learn your goals, audience, and vision."
    },
    {
      icon: "🎨",
      title: "Design Preview",
      desc: "Visual concept so you can review early."
    },
    {
      icon: "⚙️",
      title: "Development",
      desc: "Building your solution with care."
    },
    {
      icon: "💬",
      title: "Feedback & Refinement",
      desc: "Adjustments until you're happy."
    },
    {
      icon: "🚀",
      title: "Launch & Support",
      desc: "Smooth launch with ongoing help."
    }
  ];

  return (
    <section id="process" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Intro */}
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-gray-500 uppercase mb-2">
            ✦ Our Process
          </p>

          <h2 className="text-2xl md:text-3xl font-bold">
            A smooth journey from idea to launch
          </h2>
        </div>

        {/* Swipe container */}
        <div className="flex md:grid md:grid-cols-5 gap-4 overflow-x-auto snap-x snap-mandatory pb-4 md:overflow-visible">

          {steps.map((step, index) => (
            <div
              key={index}
              className="min-w-[200px] md:min-w-0 snap-start bg-white p-5 rounded-2xl shadow-sm border hover:shadow-md transition flex flex-col"
            >
              {/* Icon badge */}
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600 mb-3 text-lg">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-sm mb-1">
                {step.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-600 text-xs">
                {step.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}