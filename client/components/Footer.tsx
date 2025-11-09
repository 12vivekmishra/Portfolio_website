export default function Footer() {
  return (
    <footer className="bg-yellow-50 border-t border-black/10">
      <div className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="font-bold text-lg text-black mb-4">
              Creative Studio
            </div>
            <p className="text-sm text-gray-700">
              Transforming ideas into extraordinary digital experiences.
            </p>
          </div>

          {/* Services */}
          <div>
            <div className="font-semibold text-black mb-4">Services</div>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>
                <a href="#services" className="hover:text-black transition-colors">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-black transition-colors">
                  Video Production
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-black transition-colors">
                  Creative Design
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="font-semibold text-black mb-4">Company</div>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>
                <a href="#why-choose" className="hover:text-black transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-black transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <div className="font-semibold text-black mb-4">Connect</div>
            <ul className="text-sm text-gray-700 space-y-2">
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-black/10 pt-8 text-center text-sm text-gray-700">
          © 2024 CodeCanvas Studio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
