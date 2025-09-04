import React from 'react';
import { Calendar, Video, Zap, Flower, Music, PenTool, Waves, Shirt } from 'lucide-react';

const workshops = [
  {
    title: "Augmented Cinema",
    subtitle: "Video Mapping + AI",
    icon: Video,
    color: "bg-[#EA7DFF]",
    onlineSessions: "April 7 & April 14, 2026",
    inPersonDate: "April 25, 2026"
  },
  {
    title: "A Maze Circuit",
    subtitle: "Collaborative Game",
    icon: Zap,
    color: "bg-[#08F2DB]",
    onlineSessions: "May 12 & May 19, 2026",
    inPersonDate: "May 23, 2026"
  },
  {
    title: "Singing to a Garden",
    subtitle: "Voice Interaction",
    icon: Flower,
    color: "bg-[#EA7DFF]",
    onlineSessions: "June 2 & June 9, 2026",
    inPersonDate: "June 13, 2026"
  },
  {
    title: "Marble Machine Orchestra",
    subtitle: "Sound Installation",
    icon: Music,
    color: "bg-[#08F2DB]",
    onlineSessions: "August 18 & August 25, 2026",
    inPersonDate: "August 29, 2026"
  },
  {
    title: "From Gesture to Pen",
    subtitle: "Body Drawing",
    icon: PenTool,
    color: "bg-[#EA7DFF]",
    onlineSessions: "September 8 & September 15, 2026",
    inPersonDate: "September 19, 2026"
  },
  {
    title: "Room as Instrument",
    subtitle: "AR Music",
    icon: Waves,
    color: "bg-[#08F2DB]",
    onlineSessions: "October 13 & October 20, 2026",
    inPersonDate: "October 24, 2026"
  },
  {
    title: "Embroidering Light",
    subtitle: "Textile Technology",
    icon: Shirt,
    color: "bg-[#EA7DFF]",
    onlineSessions: "November 10 & November 17, 2026",
    inPersonDate: "November 21, 2026"
  }
];

export function Agenda() {
  return (
    <section
      id="agenda"
      className="bg-white py-16 relative overflow-hidden"
      style={{
        backgroundImage: 'url(/LiloAcademy_Pattern_6.png)',
        backgroundSize: 'fill',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-white/85"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <h2
          className="text-3xl md:text-4xl font-light text-[#22113E] mb-12 text-center"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          Workshop Schedule
        </h2>

        {/* Schedule Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse bg-white/95 border border-gray-200 overflow-hidden shadow-sm">
            <thead>
              <tr className="bg-gray-50/95">
                <th className="px-6 py-4 text-left text-sm font-medium text-[#22113E] border-b border-gray-200" style={{ fontFamily: 'Inter' }}>
                  Workshop
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#22113E] border-b border-gray-200" style={{ fontFamily: 'Inter' }}>
                  Online Sessions<br/>
                  <span className="text-xs text-gray-500 font-normal">Tuesdays, 19:00-21:00 CET</span>
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-[#22113E] border-b border-gray-200" style={{ fontFamily: 'Inter' }}>
                  In-Person<br/>
                  <span className="text-xs text-gray-500 font-normal">Saturday, 10:00–17:00 CET</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {workshops.map((workshop, index) => (
                <tr key={index} className="hover:bg-gray-50/80 transition-colors">
                  <td className="px-6 py-4 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className={`${workshop.color} p-2 border border-gray-200 rounded-lg`}>
                        <workshop.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-[#22113E]" style={{ fontFamily: 'Inter' }}>
                          {workshop.title}
                        </div>
                        <div className="text-sm text-gray-500" style={{ fontFamily: 'Inter' }}>
                          {workshop.subtitle}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100">
                    <div className="text-sm text-gray-700" style={{ fontFamily: 'Inter' }}>
                      {workshop.onlineSessions}
                    </div>
                  </td>
                  <td className="px-6 py-4 border-b border-gray-100">
                    <div className="text-sm text-gray-700 font-medium" style={{ fontFamily: 'Inter' }}>
                      {workshop.inPersonDate}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-white/90 p-6 border border-gray-200 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Calendar className="w-6 h-6 text-[#EA7DFF] mr-3" />
              <h3 className="text-lg font-medium text-[#22113E]" style={{ fontFamily: 'Space Grotesk' }}>
                Workshop Format
              </h3>
            </div>
            <div className="text-gray-700 space-y-2" style={{ fontFamily: 'Inter' }}>
              <p>Each workshop includes <strong>two online sessions</strong> (Tuesdays at 19:00 CET) followed by an <strong>in-person workshop</strong> (Saturday from 10:00 to 17:00 CET).</p>
              <p>You can choose to participate online only, in-person only, or both for the full experience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
