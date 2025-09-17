import React from 'react';
import { User } from 'lucide-react';

export function Artist() {
  return (
    <section
      id="artist"
      className="bg-white py-16 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/LiloAcademy_Pattern_2.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/85"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="bg-white/90 p-8 md:p-12 border border-gray-200 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <div className="bg-[#EA7DFF] ">
                <img src="/Lina Lopes-06.jpg" alt="Lina Lopes" className="w-40 h-40 object-cover" />
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
                interactive spaces, and technology. With over a decade of experience across art, design, and innovation,
                she has presented her work internationally in museums, universities, and festivals. Her practice includes collaborations with institutions such as the MIT Media Lab, Arte1 TV and FabLabs. She creates collaborative workshops where technology becomes a tool for imagination, play, and radical experimentation. She is also the director of the <strong>School of Tomorrow's AI</strong>, which partners with <strong>Glitch Lab</strong> to bring Room for Interaction 2026 to life.
              </p>
              <p
                className="text-base leading-relaxed text-gray-700 font-normal mt-4"
                style={{ fontFamily: 'Inter' }}
              >
                Check out her <a href="https://www.linalopes.info" target="_blank" rel="noopener noreferrer" className="text-[#EA7DFF] hover:text-[#d666e6] underline transition-colors">website</a> for more information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
