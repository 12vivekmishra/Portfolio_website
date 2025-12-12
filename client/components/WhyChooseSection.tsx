export default function WhyChooseSection() {
  const features = [
    {
<<<<<<< HEAD
      number: "01",
      icon: "✨",
      title: "Creative Excellence",
      description: "Award-winning designs that stand out and capture attention in every detail",
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "02",
      icon: "⚡",
      title: "Innovation Focused",
      description: "Cutting-edge technology and trends that keep you ahead of the competition",
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "03",
      icon: "📊",
      title: "Analytics Driven",
      description: "Data-backed strategies and insights that deliver measurable real results",
      color: "from-green-500 to-emerald-500",
    },
    {
      number: "04",
      icon: "🎯",
      title: "Mission Oriented",
      description: "Your success is our primary goal, with every decision aligned to your vision",
      color: "from-orange-500 to-red-500",
=======
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
>>>>>>> cb5546c7e6e113fdd59ea9a51cdefa3532e77ec5
    },
  ];

  return (
<<<<<<< HEAD
    <section id="why-choose" className="py-24 px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold text-white mb-6">Why Choose Us?</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            We combine creativity, strategy, and technology to deliver exceptional results that transform your vision into reality
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl overflow-hidden hover:border-slate-500 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{backgroundImage: `linear-gradient(to bottom right, rgb(139, 92, 246), rgb(236, 72, 153), rgb(34, 197, 94))`}} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} text-white text-2xl font-bold shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <span className={`text-6xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent opacity-30`}>
                    {feature.number}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed text-base">
                  {feature.description}
                </p>

                <div className="mt-6 flex items-center text-gray-400 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-semibold mr-2">Learn more</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-2xl text-center">
          <p className="text-gray-300 mb-4">
            Ready to transform your business with our expertise?
          </p>
          <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50">
            Get Started Today
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
=======
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
>>>>>>> cb5546c7e6e113fdd59ea9a51cdefa3532e77ec5
      </div>
    </section>
  );
}
