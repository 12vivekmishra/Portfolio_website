import { ArrowLeftRight, Layout, Wand2 } from "lucide-react";

export default function ServicesSection() {
  const services = [
    {
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
    },
  ];

  return (
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
              </div>
            </div>
          ))}
        </div>
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
    </section>
  );
}
