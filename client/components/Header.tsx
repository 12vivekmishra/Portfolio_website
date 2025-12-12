import { useState } from "react";
import { Menu, X } from "lucide-react";
<<<<<<< HEAD
=======
import { Link } from "react-router-dom";
>>>>>>> cb5546c7e6e113fdd59ea9a51cdefa3532e77ec5

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
<<<<<<< HEAD
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-slate-950/90 border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-transparent bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text hover:opacity-80 transition-opacity"
        >
          <span className="text-2xl">🚀</span>
          <span>Creative Studio</span>
=======
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-white/95 border-b border-black/10">
      <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
        <a
          href="/"
          className="flex items-center gap-2 font-bold text-xl text-black hover:opacity-80 transition-opacity"
        >
          <span className="text-2xl">🚀</span>
          <span>CodeCanvas Studio</span>
>>>>>>> cb5546c7e6e113fdd59ea9a51cdefa3532e77ec5
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <button
            onClick={() => scrollToSection("home")}
<<<<<<< HEAD
            className="text-sm font-medium text-gray-300 hover:text-white hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 hover:bg-clip-text transition-all duration-300"
=======
            className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
>>>>>>> cb5546c7e6e113fdd59ea9a51cdefa3532e77ec5
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection("why-choose")}
<<<<<<< HEAD
            className="text-sm font-medium text-gray-300 hover:text-white hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 hover:bg-clip-text transition-all duration-300"
=======
            className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
>>>>>>> cb5546c7e6e113fdd59ea9a51cdefa3532e77ec5
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("services")}
<<<<<<< HEAD
            className="text-sm font-medium text-gray-300 hover:text-white hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 hover:bg-clip-text transition-all duration-300"
=======
            className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
>>>>>>> cb5546c7e6e113fdd59ea9a51cdefa3532e77ec5
          >
            Services
          </button>
          <button
            onClick={() => scrollToSection("faqs")}
<<<<<<< HEAD
            className="text-sm font-medium text-gray-300 hover:text-white hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 hover:bg-clip-text transition-all duration-300"
=======
            className="text-sm font-medium text-gray-700 hover:text-black transition-colors"
>>>>>>> cb5546c7e6e113fdd59ea9a51cdefa3532e77ec5
          >
            FAQs
          </button>
          <button
            onClick={() => scrollToSection("contact")}
<<<<<<< HEAD
            className="text-sm font-medium text-gray-300 hover:text-white hover:text-transparent hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-600 hover:bg-clip-text transition-all duration-300"
          >
            Contact
          </button>
=======
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
>>>>>>> cb5546c7e6e113fdd59ea9a51cdefa3532e77ec5
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => scrollToSection("contact")}
<<<<<<< HEAD
            className="px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold rounded-lg text-sm transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50"
=======
            className="px-6 py-2 bg-black text-white font-semibold rounded-full text-sm hover:bg-gray-900 transition-colors"
>>>>>>> cb5546c7e6e113fdd59ea9a51cdefa3532e77ec5
          >
            Let's Talk
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
<<<<<<< HEAD
          className="md:hidden p-1 hover:bg-slate-800 rounded text-white"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
=======
          className="md:hidden p-1 hover:bg-gray-100 rounded"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
>>>>>>> cb5546c7e6e113fdd59ea9a51cdefa3532e77ec5
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
<<<<<<< HEAD
        <div className="md:hidden bg-slate-900 border-t border-slate-700/50">
          <div className="px-8 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
=======
        <div className="md:hidden bg-white border-t border-black/10">
          <div className="px-8 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("home")}
              className="block w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-black"
>>>>>>> cb5546c7e6e113fdd59ea9a51cdefa3532e77ec5
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("why-choose")}
<<<<<<< HEAD
              className="block w-full text-left py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
=======
              className="block w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-black"
>>>>>>> cb5546c7e6e113fdd59ea9a51cdefa3532e77ec5
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
<<<<<<< HEAD
              className="block w-full text-left py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
=======
              className="block w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-black"
>>>>>>> cb5546c7e6e113fdd59ea9a51cdefa3532e77ec5
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("faqs")}
<<<<<<< HEAD
              className="block w-full text-left py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
=======
              className="block w-full text-left py-2 text-sm font-medium text-gray-700 hover:text-black"
>>>>>>> cb5546c7e6e113fdd59ea9a51cdefa3532e77ec5
            >
              FAQs
            </button>
            <button
              onClick={() => scrollToSection("contact")}
<<<<<<< HEAD
              className="block w-full text-left py-2 text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              Contact
            </button>
=======
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

>>>>>>> cb5546c7e6e113fdd59ea9a51cdefa3532e77ec5
          </div>
        </div>
      )}
    </header>
  );
}
