import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/90 border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-transparent bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text hover:opacity-80 transition-opacity"
        >
          <span className="text-2xl">🚀</span>
          <span>Creative Studio</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-sm font-medium text-gray-300 hover:text-white hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 hover:bg-clip-text transition-all duration-300"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("why-choose")}
            className="text-sm font-medium text-gray-300 hover:text-white hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 hover:bg-clip-text transition-all duration-300"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm font-medium text-gray-300 hover:text-white hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 hover:bg-clip-text transition-all duration-300"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("faqs")}
            className="text-sm font-medium text-gray-300 hover:text-white hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 hover:bg-clip-text transition-all duration-300"
          >
            FAQs
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium text-gray-300 hover:text-white hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 hover:bg-clip-text transition-all duration-300"
          >
            Contact
          </button>
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg text-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1 hover:bg-slate-800 rounded text-white"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-700/50">
          <div className="px-8 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("why-choose")}
              className="block w-full text-left py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("faqs")}
              className="block w-full text-left py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              FAQs
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
