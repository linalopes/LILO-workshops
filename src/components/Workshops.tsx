import React, { useState } from 'react';
import { Video, Zap, Flower, Music, PenTool, Waves, Shirt, X } from 'lucide-react';

const workshops = [
  {
    title: "Augmented Cinema",
    subtitle: "Video Mapping + AI",
    description: "Turning the studio into an expanded cinema.",
    icon: Video,
    color: "bg-[#EA7DFF]",
    hasModal: true
  },
  {
    title: "Maze Circuit",
    subtitle: "Collaborative Game",
    description: "A collaborative game where connection powers the play.",
    icon: Zap,
    color: "bg-[#08F2DB]"
  },
  {
    title: "Singing to a Garden",
    subtitle: "Voice Interaction",
    description: "Voices make flowers bloom, silence makes them close.",
    icon: Flower,
    color: "bg-[#EA7DFF]"
  },
  {
    title: "Marble Machine Orchestra",
    subtitle: "Sound Installation",
    description: "Build and play with rolling marbles and sound.",
    icon: Music,
    color: "bg-[#08F2DB]"
  },
  {
    title: "From Gesture to Pen",
    subtitle: "Body Drawing",
    description: "Draw with your body, print with a pen plotter.",
    icon: PenTool,
    color: "bg-[#EA7DFF]"
  },
  {
    title: "Room as Instrument",
    subtitle: "AR Music",
    description: "The studio becomes a giant musical instrument in AR.",
    icon: Waves,
    color: "bg-[#08F2DB]"
  },
  {
    title: "Embroidering Light",
    subtitle: "Textile Technology",
    description: "Touch conductive embroidery to light up fabrics.",
    icon: Shirt,
    color: "bg-[#EA7DFF]"
  }
];

export function Workshops() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <section id="workshops" className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-light text-[#22113E] mb-4 text-center"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          Workshop Series
        </h2>
        <p
          className="text-center text-base text-gray-600 mb-12 font-normal max-w-2xl mx-auto"
          style={{ fontFamily: 'Inter' }}
        >
          Seven unique experiences exploring the boundaries of interaction design
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {workshops.map((workshop, index) => {
            const IconComponent = workshop.icon;
            const isClickable = workshop.hasModal;

            const CardContent = () => (
              <>
                <div className={`${workshop.color} p-3 w-fit mb-4`}>
                  <IconComponent className="w-6 h-6 text-white" />
                </div>
                <h3
                  className="text-lg font-medium text-[#22113E] mb-2"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  {workshop.title}
                </h3>
                <p
                  className="text-sm text-gray-600 mb-3 font-medium"
                  style={{ fontFamily: 'Courier Prime' }}
                >
                  {workshop.subtitle}
                </p>
                <p
                  className="text-sm text-gray-700 font-normal leading-relaxed"
                  style={{ fontFamily: 'Inter' }}
                >
                  {workshop.description}
                </p>
                {isClickable && (
                  <div className="mt-4 text-xs text-[#EA7DFF] font-medium" style={{ fontFamily: 'Inter' }}>
                    Click to learn more →
                  </div>
                )}
              </>
            );

            if (isClickable) {
              return (
                <button
                  key={index}
                  onClick={openModal}
                  className="bg-white p-6 border border-gray-200 hover:border-[#EA7DFF] hover:shadow-lg transition-all duration-200 group cursor-pointer block text-left w-full"
                >
                  <CardContent />
                </button>
              );
            }

            return (
              <div
                key={index}
                className="bg-white p-6 border border-gray-200 hover:border-gray-300 transition-all duration-200 group"
              >
                <CardContent />
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-4">
                  <div className="bg-[#EA7DFF] p-3">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h2
                      className="text-2xl font-medium text-[#22113E]"
                      style={{ fontFamily: 'Space Grotesk' }}
                    >
                      Augmented Cinema
                    </h2>
                    <p
                      className="text-sm text-gray-600 font-medium"
                      style={{ fontFamily: 'Courier Prime' }}
                    >
                      Video Mapping + AI
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href="https://luma.com/9nfn6wm2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#EA7DFF] text-white px-4 py-2 text-sm font-medium hover:bg-[#d666e6] transition-colors rounded"
                    style={{ fontFamily: 'Inter' }}
                  >
                    Buy the ticket at Luma
                  </a>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
              </div>

              {/* Workshop Image */}
              <div className="mb-6">
                <img
                  src="/Augmented-Cinema.png"
                  alt="Augmented Cinema workshop - Video mapping and AI in immersive spaces"
                  className="w-full h-auto rounded-lg shadow-sm"
                />
              </div>

              {/* Content */}
              <div className="space-y-6" style={{ fontFamily: 'Inter' }}>
                <div className="text-gray-700 leading-relaxed">
                  <p className="mb-4">
                    <strong>Augmented Cinema</strong> is a workshop that transforms video mapping into an immersive, expanded form of cinema. Instead of projecting on façades, we explore how mapping can reshape an interior space, turning walls, ceilings, and floors into living surfaces. Participants step into a scenographic environment where moving images envelop not only the eye but the whole body.
                  </p>

                  <p className="mb-4">
                    The workshop builds on Lina Lopes' previous projects such as <em>Vesica Pieces</em> (where dancers' movements and musicians' sounds generated live visuals that wrapped the audience) and an immersive storytelling performance inside Frida Kahlo's bedroom. These experiences show how quickly video mapping can create poetic and playful atmospheres, drawing the public into new spatial narratives.
                  </p>
                </div>

                <div>
                  <h3
                    className="text-lg font-medium text-[#22113E] mb-4"
                    style={{ fontFamily: 'Space Grotesk' }}
                  >
                    What You'll Learn
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Over the course of two online sessions and one in-person Saturday, participants will:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                    <li>Explore the history and language of expanded cinema.</li>
                    <li>Learn the basics of video mapping and how technology shapes visual storytelling.</li>
                    <li>Experiment with AI platforms for generating imagery, video textures, and narrative content.</li>
                    <li>Work with tools such as <strong>MadMapper</strong> (primary), <strong>Resolume</strong>, and alternative software (including iPad-based solutions).</li>
                    <li>Collaboratively design and present a <strong>two-minute immersive scene</strong> inside the studio, with attempts to document the work even if video mapping often resists capture.</li>
                  </ul>
                </div>

                <div>
                  <h3
                    className="text-lg font-medium text-[#22113E] mb-4"
                    style={{ fontFamily: 'Space Grotesk' }}
                  >
                    Who Should Join
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    No previous experience is required — the workshop is designed for complete beginners. At the same time, professionals are welcome to join and use the setting as a space for experimentation. Different challenges can be proposed depending on participants' experience, including adding interactivity or exploring unusual mapping surfaces.
                  </p>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    This workshop is open to performers, designers, educators, architects, and anyone interested in discovering how projection and AI can transform a room into a stage, a story, or a dreamscape. What you take with you is not only technical skills but also a sense of how simple tools — a projector, a surface, a generated image — can shift perception and create new experiences in performance, teaching, or exhibition design.
                  </p>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200 flex justify-end">
                <button
                  onClick={closeModal}
                  className="bg-[#EA7DFF] text-white px-6 py-2 font-medium hover:bg-[#d666e6] transition-colors"
                  style={{ fontFamily: 'Inter' }}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
