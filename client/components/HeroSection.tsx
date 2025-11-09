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
      className="pt-32 pb-32 px-8 bg-gradient-to-b from-yellow-300 to-yellow-100 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold text-black mb-6">
          Create Extraordinary
          <div className="inline-block">
            <span className="block"> Digital Experiences</span>
          </div>
        </h1>

        <p className="text-xl text-gray-800 mb-8 max-w-2xl mx-auto">
          We transform your vision into stunning digital solutions that
          captivate audiences and drive real business results.
        </p>

        <button
          onClick={scrollToContact}
          className="inline-block px-8 py-4 bg-black text-white font-bold text-lg rounded-full hover:bg-gray-900 transition-colors"
        >
          Start Your Project →
        </button>
      </div>
    </section>
  );
}
