import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

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
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/95 border-b border-black/10">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-black hover:opacity-80 transition-opacity"
        >
          <span className="text-2xl">🚀</span>
          <span>CodeCanvas Studio</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("home")}
            className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("why-choose")}
            className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
            className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("faqs")}
            className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
          >
            FAQs
          </button>
          <button
            onClick={() => scrollToSection("contact")}
            className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
          >
            Contact
          </button>

          {/* Admin link 
          <Link
            to="/admin"
            className="ml-4 inline-block px-3 py-2  text-sm font-medium hover:bg-gray-50"
            onClick={() => setMobileMenuOpen(false)}
            aria-label="Admin"
          >
            Admin
          </Link>*/}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection("contact")}
            className="px-6 py-2 bg-black text-white font-semibold rounded-full text-sm hover:bg-gray-900 transition-colors"
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1 hover:bg-gray-100 rounded"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-black/10">
          <div className="px-8 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-black"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("why-choose")}
              className="block w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-black"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-black"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("faqs")}
              className="block w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-black"
            >
              FAQs
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-black"
            >
              Contact
            </button>
            {/*
<Link
  to="/admin"
  onClick={() => setMobileMenuOpen(false)}
  className="block w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-black"
>
  Admin
</Link>
*/}

          </div>
        </div>
      )}
    </header>
  );
}
