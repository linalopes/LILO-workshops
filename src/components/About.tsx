import React from 'react';

export function About() {
  return (
    <section id="about" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="bg-gray-50 p-8 md:p-12 border border-gray-200">
          <h2 
            className="text-3xl md:text-4xl font-light text-[#22113E] mb-8 text-center"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            About the Program
          </h2>
          <div className="space-y-6 text-base leading-relaxed text-gray-700 font-normal max-w-4xl mx-auto" style={{ fontFamily: 'Inter' }}>
            <p>
              Room for Interaction is a series of workshops where space itself becomes a playground for the body. 
              Voices that open flowers, gestures that turn into drawings, touches that light up fabric — each meeting 
              invites you to experiment with new ways of interacting creatively with your environment.
            </p>
            <p>
              The program consists of seven independent one-day workshops, taking place on Saturdays from 10am to 5pm. 
              Each workshop is preceded by two short online sessions that introduce the ideas and tools. You can choose 
              to join online, in person, or both — and decide how deep you want to dive into the experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}