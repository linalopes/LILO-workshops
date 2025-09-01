import React from 'react';
import { Video, Zap, Flower, Music, PenTool, Waves, Shirt } from 'lucide-react';

const workshops = [
  {
    title: "Augmented Cinema",
    subtitle: "Video Mapping + AI",
    description: "Turning the studio into an expanded cinema.",
    icon: Video,
    color: "bg-[#EA7DFF]",
    link: "https://luma.com/9nfn6wm2"
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
            const isClickable = workshop.link;

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
                    Click to learn more & buy tickets →
                  </div>
                )}
              </>
            );

            if (isClickable) {
              return (
                <a
                  key={index}
                  href={workshop.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white p-6 border border-gray-200 hover:border-[#EA7DFF] hover:shadow-lg transition-all duration-200 group cursor-pointer block"
                >
                  <CardContent />
                </a>
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
    </section>
  );
}
