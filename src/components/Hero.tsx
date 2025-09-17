import React from 'react';

export function Hero() {
  return (
    <section
      className="bg-gray-50 pt-20 pb-32 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/LiloAcademy_Pattern_1.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/80"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h1
            className="text-5xl md:text-7xl font-light text-[#22113E] py-6 leading-tight"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Room for Interaction
          </h1>
          <p
            className="text-xl md:text-2xl text-gray-700 mb-8 font-light leading-relaxed"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            A playground for body, space and technology.
            <br />
            An initiative of the <b>School of Tomorrow's AI</b> with <b>Glitch Lab</b>.
          </p>
          <div
            className="inline-block bg-gray-100 px-6 py-3 text-lg text-[#22113E] mb-12 font-medium"
            style={{ fontFamily: 'Courier Prime' }}
          >
            Seven Saturdays of interactive workshops in 2026 <br/>— where body, space and technology meet.
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#contact"
              className="bg-[#EA7DFF] text-white px-8 py-3 text-lg font-medium hover:bg-[#d666e6] transition-colors"
              style={{ fontFamily: 'Inter' }}
            >
              Sign up to stay updated
            </a>
            <button
              className="bg-white text-[#22113E] px-8 py-3 text-lg font-medium border border-gray-300 hover:bg-gray-50 transition-colors"
              style={{ fontFamily: 'Inter' }}
            >
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
