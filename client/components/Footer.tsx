export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-950 to-slate-900 border-t border-slate-700/50">
      <div className="max-w-7xl mx-auto px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="font-bold text-lg text-transparent bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text mb-4">
              Creative Studio
            </div>
            <p className="text-sm text-gray-400">
              Transforming ideas into extraordinary digital experiences that captivate, inspire, and drive success.
            </p>
          </div>

          {/* Services */}
          <div>
            <div className="font-semibold text-white mb-6">Services</div>
            <ul className="text-sm text-gray-400 space-y-3">
              <li>
                <a href="#services" className="hover:text-purple-400 transition-colors duration-300">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-purple-400 transition-colors duration-300">
                  Video Production
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-purple-400 transition-colors duration-300">
                  Creative Design
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="font-semibold text-white mb-6">Company</div>
            <ul className="text-sm text-gray-400 space-y-3">
              <li>
                <a href="#why-choose" className="hover:text-purple-400 transition-colors duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-purple-400 transition-colors duration-300">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-purple-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <div className="font-semibold text-white mb-6">Connect</div>
            <ul className="text-sm text-gray-400 space-y-3">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-700/50 pt-8 text-center text-sm text-gray-500">
          © 2024 Creative Studio. All rights reserved. | Crafted with ✨ by our amazing team
        </div>
      </div>
    </footer>
  );
}
