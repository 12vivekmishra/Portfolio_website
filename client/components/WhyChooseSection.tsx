export default function WhyChooseSection() {
  const features = [
    {
      icon: "C",
      title: "Creative Vision",
      description: "Transforming ideas into stunning digital experiences.",
    },
    {
      icon: "T",
      title: "Technical Precision",
      description: "Seamless performance meets flawless modern design.",
    },
   {
      icon: "F",
      title: "Fast Turnaround",
      description: "Quick, efficient, and on-time project completion always.",
   },
     {
      icon: "R",
      title: "Reliability & Support",
      description: "Consistent communication and dependable on-time delivery.",
    },
  ];

  return (
    <section id="why-choose" className="py-20 px-8 bg-yellow-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4">Why Choose Us?</h2>
          <p className="text-lg text-gray-700">
            We combine creativity, strategy, and technology to deliver
            exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="p-6 bg-white border border-black rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 bg-black text-yellow-300 rounded-lg flex items-center justify-center font-bold text-lg mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-black mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
