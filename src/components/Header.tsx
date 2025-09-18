import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [typewriterText, setTypewriterText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  const fullText = "School of Tomorrow's AI";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Typewriter effect
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setTypewriterText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100); // Adjust speed here (100ms per character)

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-light tracking-tight text-[#22113E]" style={{ fontFamily: 'Space Grotesk' }}>
            {typewriterText}
            {currentIndex < fullText.length && <span className="animate-pulse">|</span>}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex space-x-6">
              <a href="#about" className="text-[#22113E] hover:text-[#EA7DFF] transition-colors font-light" style={{ fontFamily: 'Inter' }}>
                About
              </a>
              <a href="#workshops" className="text-[#22113E] hover:text-[#EA7DFF] transition-colors font-light" style={{ fontFamily: 'Inter' }}>
                Workshops
              </a>
              <a href="#agenda" className="text-[#22113E] hover:text-[#EA7DFF] transition-colors font-light" style={{ fontFamily: 'Inter' }}>
                Agenda
              </a>
              <a href="#location" className="text-[#22113E] hover:text-[#EA7DFF] transition-colors font-light" style={{ fontFamily: 'Inter' }}>
                Location
              </a>
              <a href="#artist" className="text-[#22113E] hover:text-[#EA7DFF] transition-colors font-light" style={{ fontFamily: 'Inter' }}>
                Host
              </a>
              <a href="#faq" className="text-[#22113E] hover:text-[#EA7DFF] transition-colors font-light" style={{ fontFamily: 'Inter' }}>
                FAQ
              </a>
            </nav>
            <a href="#contact" className="bg-[#EA7DFF] text-white px-6 py-2 font-medium hover:bg-[#d666e6] transition-colors" style={{ fontFamily: 'Inter' }}>
              Stay updated
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-[#22113E] hover:text-[#EA7DFF] transition-colors"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <a
                href="#about"
                onClick={closeMobileMenu}
                className="text-[#22113E] hover:text-[#EA7DFF] transition-colors font-light py-2"
                style={{ fontFamily: 'Inter' }}
              >
                About
              </a>
              <a
                href="#workshops"
                onClick={closeMobileMenu}
                className="text-[#22113E] hover:text-[#EA7DFF] transition-colors font-light py-2"
                style={{ fontFamily: 'Inter' }}
              >
                Workshops
              </a>
              <a
                href="#agenda"
                onClick={closeMobileMenu}
                className="text-[#22113E] hover:text-[#EA7DFF] transition-colors font-light py-2"
                style={{ fontFamily: 'Inter' }}
              >
                Agenda
              </a>
              <a
                href="#location"
                onClick={closeMobileMenu}
                className="text-[#22113E] hover:text-[#EA7DFF] transition-colors font-light py-2"
                style={{ fontFamily: 'Inter' }}
              >
                Location
              </a>
              <a
                href="#artist"
                onClick={closeMobileMenu}
                className="text-[#22113E] hover:text-[#EA7DFF] transition-colors font-light py-2"
                style={{ fontFamily: 'Inter' }}
              >
                Host
              </a>
              <a
                href="#faq"
                onClick={closeMobileMenu}
                className="text-[#22113E] hover:text-[#EA7DFF] transition-colors font-light py-2"
                style={{ fontFamily: 'Inter' }}
              >
                FAQ
              </a>
              <a
                href="#contact"
                onClick={closeMobileMenu}
                className="bg-[#EA7DFF] text-white px-6 py-3 font-medium hover:bg-[#d666e6] transition-colors text-center mt-4"
                style={{ fontFamily: 'Inter' }}
              >
                Stay updated
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
