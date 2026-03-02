import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { useState } from 'react'
import Home from './components/Home'
import Blogs from './components/Blogs'
import BlogPost from './components/BlogPost'
import About from './components/About'
import Contact from './components/contact'
import Help from './components/Help'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {/* Navigation Bar */}
        <nav className="bg-white shadow-md sticky top-0 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-16">
              {/* Logo - Link to home */}
              <Link to="/" className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-primary-dark">
                  Theater<span className="text-secondary">HUB</span>
                </h1>
              </Link>
              
              {/* Desktop Menu */}
              <ul className="hidden md:flex space-x-8">
                <li>
                  <Link 
                    to="/" 
                    className="text-gray-700 hover:text-primary transition-colors relative group"
                  >
                    Home
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/blogs" 
                    className="text-gray-700 hover:text-primary transition-colors relative group"
                  >
                    Blogs
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/about" 
                    className="text-gray-700 hover:text-primary transition-colors relative group"
                  >
                    About us
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="text-gray-700 hover:text-primary transition-colors relative group"
                  >
                    Our contact
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/help" 
                    className="text-gray-700 hover:text-primary transition-colors relative group"
                  >
                    Help
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all group-hover:w-full"></span>
                  </Link>
                </li>
              </ul>

              {/* Mobile Menu Button */}
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden flex flex-col space-y-1.5 p-2 focus:outline-none"
              >
                <span className={`w-6 h-0.5 bg-primary transition-transform ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-primary transition-opacity ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
                <span className={`w-6 h-0.5 bg-primary transition-transform ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
              </button>
            </div>

            {/* Mobile Menu Dropdown */}
            {mobileMenuOpen && (
              <div className="md:hidden py-4 border-t border-gray-200">
                <ul className="flex flex-col space-y-3">
                  <li>
                    <Link 
                      to="/" 
                      className="block px-2 py-1 text-gray-700 hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/blogs" 
                      className="block px-2 py-1 text-gray-700 hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/about" 
                      className="block px-2 py-1 text-gray-700 hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/contact" 
                      className="block px-2 py-1 text-gray-700 hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Our contact
                    </Link>
                  </li>
                  <li>
                    <Link 
                      to="/help" 
                      className="block px-2 py-1 text-gray-700 hover:text-primary"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Help
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/help" element={<Help />} />
        </Routes>
        

        {/* Footer */}
        <footer className="bg-[#1A0F0A] text-white py-12 px-4 mt-auto">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Brand Section */}
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  Theater<span className="text-secondary">HUB</span>
                </h3>
                <p className="text-gray-400 mb-4">
                  Centralized Ticketing and Seat Reservation Platform
                </p>
                <div className="flex gap-4">
                  {['📘', '🐦', '📷', '🎬'].map((icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-gray-900 transition-all transform hover:-translate-y-1">
                      {icon}
                    </a>
                  ))}
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4 relative inline-block">
                  Quick Links
                  <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-secondary"></span>
                </h4>
                <ul className="space-y-2">
                  {['About Us', 'Blogs', 'FAQs', 'Terms of Service', 'Privacy Policy'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 className="text-lg font-semibold mb-4 relative inline-block">
                  Support
                  <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-secondary"></span>
                </h4>
                <ul className="space-y-2">
                  {['Help Center', 'Our Contact', 'Register Theater', 'Report Issue'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-secondary transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="text-lg font-semibold mb-4 relative inline-block">
                  Contact Info
                  <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-secondary"></span>
                </h4>
                <div className="space-y-3 text-gray-400">
                  <p className="flex items-center gap-2">📧 info@theaterhub.com</p>
                  <p className="flex items-center gap-2">📞 +251-XXX-XXXXXX</p>
                  <p className="flex items-center gap-2">📍 Mizan-Tepi, Ethiopia</p>
                  <p className="flex items-center gap-2">⏰ Mon-Fri: 9:00 - 18:00</p>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500">
              <p>&copy; 2026 TheaterHub. All rights reserved. | Mizan Tepi University</p>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App