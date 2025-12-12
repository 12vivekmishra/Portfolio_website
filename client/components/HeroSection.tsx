export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen pt-40 pb-20 px-8 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden flex items-center"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500/20 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-8 inline-block">
          <span className="text-sm font-semibold text-transparent bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text">
            ✨ WELCOME TO YOUR CREATIVE JOURNEY
          </span>
        </div>

        <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
          Create Extraordinary
          <div className="inline-block mx-2 text-transparent bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text">
            Digital
          </div>
          <div className="block">Experiences</div>
        </h1>

        <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
          We transform your vision into stunning digital solutions that captivate audiences, drive real business results, and elevate your brand to new heights.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold text-lg rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 flex items-center gap-2"
          >
            Start Your Project
            <svg className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <a
            href="#why-choose"
            className="group px-8 py-4 border-2 border-slate-600 hover:border-slate-400 text-white font-semibold text-lg rounded-lg transition-all duration-300 hover:bg-slate-800/50 flex items-center gap-2"
          >
            Learn More
            <svg className="w-5 h-5 transform group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </a>
        </div>

        <div className="mt-16 pt-16 border-t border-slate-700">
          <p className="text-gray-400 text-sm mb-8">Trusted by leading brands</p>
          <div className="flex justify-center items-center gap-8 opacity-50">
            <div className="text-gray-400 font-semibold">TechCorp</div>
            <div className="w-px h-6 bg-slate-600"></div>
            <div className="text-gray-400 font-semibold">Creative Co.</div>
            <div className="w-px h-6 bg-slate-600"></div>
            <div className="text-gray-400 font-semibold">Digital Hub</div>
          </div>
        </div>
      </div>
    </section>
  );
}
