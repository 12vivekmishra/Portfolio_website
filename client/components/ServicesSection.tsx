<<<<<<< HEAD
import { Code2, Film, Palette } from "lucide-react";
=======
import { ArrowLeftRight, Layout, Wand2 } from "lucide-react";
>>>>>>> cb5546c7e6e113fdd59ea9a51cdefa3532e77ec5

export default function ServicesSection() {
  const services = [
    {
<<<<<<< HEAD
      icon: <Code2 className="w-8 h-8" />,
      title: "Web Development",
      description: "Modern, responsive websites that convert visitors into customers",
      features: [
        "Full Stack Development",
        "Performance Optimization",
        "Responsive Websites",
      ],
      gradient: "from-blue-500 to-cyan-500",
      number: "01",
    },
    {
      icon: <Film className="w-8 h-8" />,
      title: "Video Production",
      description: "Compelling video content that tells your story and engages your audience",
      features: ["Video Editing", "Motion Graphics", "Post-Production"],
      gradient: "from-purple-500 to-pink-500",
      number: "02",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Design",
      description: "Stunning visuals that capture attention and inspire meaningful action",
      features: ["UI/UX Design", "Visual Identity", "Brand Design"],
      gradient: "from-orange-500 to-red-500",
      number: "03",
=======
      icon: <ArrowLeftRight className="w-6 h-6" />,
      title: "Web Development",
      description: "Modern, responsive websites that convert visitors",
      features: [
        "⚙️Full Stack Development",
        "🚀Performance Optimization",
        "📱Responsive Websites",
      ],
    },
    {
      icon: <Wand2 className="w-6 h-6" />,
      title: "Creative Design",
      description: "Stunning visuals that capture attention and inspire action",
      features: ["🎯UI/UX Design", "🖌️Graphic Designing", "🖼️Thumbnails"],
    },
    {
      icon: <Layout className="w-6 h-6" />,
      title: "Video Production",
      description: "Compelling video content that tells your story",
      features: ["🎞️Video Editing", "🌟Video Production", "🎥 Cinematic Editing"],
>>>>>>> cb5546c7e6e113fdd59ea9a51cdefa3532e77ec5
    },
  ];

  return (
<<<<<<< HEAD
    <section id="services" className="py-24 px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold text-white mb-6">Our Services</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive solutions for every aspect of your digital journey, crafted with expertise and delivered with excellence
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative p-8 bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl overflow-hidden hover:border-slate-500 transition-all duration-300 hover:shadow-2xl hover:shadow-slate-900/50"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{backgroundImage: `linear-gradient(to bottom right, rgb(139, 92, 246), rgb(236, 72, 153), rgb(34, 197, 94))`}} />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} text-white shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  <span className={`text-5xl font-bold bg-gradient-to-r ${service.gradient} bg-clip-text text-transparent opacity-30`}>
                    {service.number}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="space-y-3">
                  {service.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3 text-gray-300">
                      <span className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient}`}></span>
                      {feature}
                    </div>
                  ))}
                </div>

                <button className={`w-full mt-8 px-4 py-3 bg-gradient-to-r ${service.gradient} hover:opacity-90 text-white font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2`}>
                  Learn More
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
=======
    <section id="services" className="py-20 px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-black mb-4">Our Services</h2>
          <p className="text-lg text-gray-700">
            Comprehensive solutions for every aspect of your digital journey
          </p>
        </div>

        {/* Grid of Service Cards */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {services.map((service, i) => (
            <div
              key={i}
              // Added perspective wrapper for 3D illusion
              style={{ perspective: 1000 }}
              className="cursor-pointer"
              tabIndex={0}
            >
              <div
                className={
                  `${i === 1 ? 'p-6 py-8' : 'p-6'} bg-yellow-50 border border-black rounded-lg transform-gpu transition-transform duration-450 ease-[cubic-bezier(0.2,0.9,0.2,1)] ` +
                  "hover:-translate-y-3 hover:scale-105 hover:shadow-2xl " +
                  "focus:outline-none focus:ring-4 focus:ring-black/10"
                }
              >
                <div className="w-12 h-12 bg-black text-white rounded-lg flex items-center justify-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-black mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, j) => (
                    <li
                      key={j}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <span className="w-1.5 h-1.5 bg-black rounded-full"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
>>>>>>> cb5546c7e6e113fdd59ea9a51cdefa3532e77ec5
              </div>
            </div>
          ))}
        </div>
<<<<<<< HEAD

        <div className="p-8 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-2xl text-center">
          <p className="text-gray-300 mb-4 text-lg">
            Ready to bring your vision to life?
          </p>
          <a href="#contact" className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50">
            Get Started
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
=======
      </div>

      {/* Inline CSS for subtle rotateX tilt effect */}
      <style>{`
        .hover\\:-translate-y-3:hover {
          transform: translateY(-0.75rem) scale(1.05) rotateX(3deg);
        }
        .focus\\:outline-none:focus {
          transform: translateY(-0.75rem) scale(1.05) rotateX(3deg);
        }
      `}</style>
>>>>>>> cb5546c7e6e113fdd59ea9a51cdefa3532e77ec5
    </section>
  );
}
