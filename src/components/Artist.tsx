import React from 'react';
import { User } from 'lucide-react';

export function Artist() {
  return (
    <section id="artist" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-white p-8 md:p-12 border border-gray-200">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <div className="bg-[#EA7DFF] p-8">
                <User className="w-16 h-16 text-white" />
              </div>
            </div>
            <div className="flex-1">
              <h2 
                className="text-3xl md:text-4xl font-light text-[#22113E] mb-6"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                About the Host
              </h2>
              <p 
                className="text-base leading-relaxed text-gray-700 font-normal"
                style={{ fontFamily: 'Inter' }}
              >
                Lina Lopes is an artist and creative technologist exploring the intersections of performance, 
                interactive spaces, and technology. With two decades of experience across art, design, and innovation, 
                she has presented her work internationally in museums, universities, and festivals. She creates 
                collaborative workshops where technology becomes a tool for imagination, play, and radical experimentation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}