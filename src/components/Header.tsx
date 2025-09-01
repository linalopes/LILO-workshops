import React from 'react';
import { Menu } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-light tracking-tight text-[#22113E]" style={{ fontFamily: 'Space Grotesk' }}>
            Room for Interaction
          </div>
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
              <a href="#artist" className="text-[#22113E] hover:text-[#EA7DFF] transition-colors font-light" style={{ fontFamily: 'Inter' }}>
                Host
              </a>
            </nav>
            <a href="#contact" className="bg-[#EA7DFF] text-white px-6 py-2 font-medium hover:bg-[#d666e6] transition-colors" style={{ fontFamily: 'Inter' }}>
            Stay updated
            </a>
          </div>
          <button className="md:hidden text-[#22113E]">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}
