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
            <b>Room for Interaction</b> is a series of workshops where the space itself becomes a playground for the body. Each workshop invites you to experiment with simple, creative interactions—<b>voices that make paper flowers bloom, gestures that become drawings, touches that light up fabric.</b>
            </p>
            <p>
            Open to <b>performers, designers, architects, educators, and anyone curious about interactive spaces</b>, the workshops are designed to be accessible no matter your background.
            </p>
            <p>
            You’ll leave each session with <b>hands-on prototypes, new tools to play with, and a shared sense of how technology can expand performance, space, and imagination.</b>
            </p>
            <p>
            The program offers <b>seven independent, one-day workshops</b> on Saturdays, <b>10am–5pm</b>. Each workshop includes <b>two short online prep sessions</b> that introduce the ideas and tools. <b>Join online, in person, or both—choose how deep you want to dive.</b>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
