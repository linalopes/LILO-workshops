import React from 'react';
import { Mail, Instagram, Youtube, Linkedin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white py-16 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <h2
            className="text-3xl md:text-4xl font-light text-[#22113E] mb-8"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Want to be the first to know when registrations open?
          </h2>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="bg-[#08F2DB] text-[#22113E] px-8 py-3 text-lg font-medium hover:bg-[#06d4bf] transition-colors flex items-center gap-3"
              style={{ fontFamily: 'Inter' }}
            >
              <Mail className="w-5 h-5" />
              Stay updated
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-12 mt-12 border-t border-gray-200">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div
            className="text-2xl font-light text-[#22113E] mb-4 md:mb-0"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Room for Interaction
          </div>
          <div className="flex items-center gap-6 mb-4 md:mb-0">
            <a
              href="https://www.instagram.com/lilo.think/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22113E] hover:text-[#08F2DB] transition-colors"
              aria-label="Follow on Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="https://www.youtube.com/@lina_lopes"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22113E] hover:text-[#08F2DB] transition-colors"
              aria-label="Subscribe on YouTube"
            >
              <Youtube className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/lina-lopes/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#22113E] hover:text-[#08F2DB] transition-colors"
              aria-label="Connect on LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
          <div
            className="text-gray-600 font-normal"
            style={{ fontFamily: 'Inter' }}
          >
            © 2025 Lina Lopes. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
