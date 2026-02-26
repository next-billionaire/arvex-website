export default function Process() {
  const steps = [
    {
      title: "Understanding Your Business",
      desc: "We discuss your goals, audience, and requirements to understand how your digital presence should support your business."
    },
    {
      title: "Design Preview",
      desc: "We create a visual design preview so you can see the look and feel before development begins."
    },
    {
      title: "Development",
      desc: "Your website or solution is built with performance, responsiveness, and user experience in mind."
    },
    {
      title: "Feedback & Revisions",
      desc: "You review the work and request changes to ensure everything matches your expectations."
    },
    {
      title: "Launch & Support",
      desc: "After approval, we launch your project and remain available for support, updates, and improvements."
    }
  ];

  return (
    <section id="process" className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">

        {/* Intro */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-gray-500 uppercase mb-3">
            ✦ Our Process
          </p>

          <h2 className="text-3xl md:text-4xl font-bold">
            A simple and transparent workflow
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We follow a structured process to ensure clarity, quality, and smooth delivery at every stage.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-10">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-6">

              {/* Number */}
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white font-semibold">
                  {index + 1}
                </div>

                {index !== steps.length - 1 && (
                  <div className="w-px flex-1 bg-gray-300 mt-2"></div>
                )}
              </div>

              {/* Content */}
              <div className="pb-8">
                <h3 className="font-semibold text-lg mb-1">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm max-w-xl">
                  {step.desc}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}