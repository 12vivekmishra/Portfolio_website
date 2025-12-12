export default function ProjectsSection() {
  const projects = [
    {
      title: "E-Commerce Platform",
      type: "Website",
      image: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600&h=600&fit=crop",
      link: "#",
      colSpan: "md:col-span-1",
    },
    {
      title: "Social Media Design Suite",
      type: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=400&fit=crop",
      link: "#",
      colSpan: "md:col-span-1",
    },
    {
      title: "Brand Identity Design",
      type: "Design",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=400&fit=crop",
      link: "#",
      colSpan: "md:col-span-1",
    },
    {
      title: "Mobile App UI/UX",
      type: "Mobile App",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
      link: "#",
      colSpan: "md:col-span-1",
    },
    {
      title: "Video Marketing Campaign",
      type: "Video",
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500&h=400&fit=crop",
      link: "#",
      colSpan: "md:col-span-1",
    },
    {
      title: "Corporate Website Redesign",
      type: "Web Development",
      image: "https://images.unsplash.com/photo-1460925895917-aae19bac70bc?w=500&h=400&fit=crop",
      link: "#",
      colSpan: "md:col-span-1",
    },
  ];

  return (
    <section id="projects" className="py-24 px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl font-bold text-white mb-6">Our Work</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of stunning websites, designs, videos, apps, and case studies that showcase our creative excellence
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16 auto-rows-[300px]">
          {projects.map((project, i) => (
            <div
              key={i}
              className={`group relative bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-slate-500 hover:shadow-2xl hover:shadow-slate-900/50 ${project.colSpan}`}
              onMouseEnter={() => setHoveredIndex()}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setShowBeforeAfter(null);
              }}
            >
              <img

                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="absolute inset-0 flex flex-col justify-between p-6 translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full mb-3">
                      {project.type}
                    </span>
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  {project.hasBeforeAfter && (
                    <button
                      onClick={() => setShowBeforeAfter(showBeforeAfter === i ? null : i)}
                      className="flex-1 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-lg transition-colors"
                    >
                      {showBeforeAfter === i ? "After" : "Before/After"}
                    </button>
                  )}
                  <a
                    href={project.link}
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-sm font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
                  >
                    View
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white/20 rounded-2xl transition-colors duration-300" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50">
            View All Projects
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
