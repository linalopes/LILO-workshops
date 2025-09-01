import React from 'react';
import { MapPin, Building2, Users, Lightbulb, Camera } from 'lucide-react';

export function Location() {
  return (
    <section id="location" className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-light text-[#22113E] mb-4"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Location
          </h2>
          <p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            style={{ fontFamily: 'Inter' }}
          >
            Our home for the workshops is the Schönauareal in Wetzikon — a transformed factory space where performance, technology, and experimentation come together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Main content */}
          <div className="space-y-6">
            <div className="bg-white p-8 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#08F2DB] p-3">
                  <Building2 className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    className="text-xl font-medium text-[#22113E] mb-2"
                    style={{ fontFamily: 'Space Grotesk' }}
                  >
                    Transformed Factory Space
                  </h3>
                  <p
                    className="text-gray-700 leading-relaxed"
                    style={{ fontFamily: 'Inter' }}
                  >
                    The Schönauareal is a former factory that has been thoughtfully converted into a creative hub.
                    Its industrial heritage provides the perfect backdrop for innovative workshops and artistic exploration.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#EA7DFF] p-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    className="text-xl font-medium text-[#22113E] mb-2"
                    style={{ fontFamily: 'Space Grotesk' }}
                  >
                    Designed for Collaboration
                  </h3>
                  <p
                    className="text-gray-700 leading-relaxed"
                    style={{ fontFamily: 'Inter' }}
                  >
                    With a dance studio, a workshop for prototyping, and open areas for gatherings,
                    the site itself becomes part of the experience.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 border border-gray-200 shadow-sm">
              <div className="flex items-start gap-4 mb-6">
                <div className="bg-[#08F2DB] p-3">
                  <Lightbulb className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3
                    className="text-xl font-medium text-[#22113E] mb-2"
                    style={{ fontFamily: 'Space Grotesk' }}
                  >
                    Perfect for Experimentation
                  </h3>
                  <p
                    className="text-gray-700 leading-relaxed"
                    style={{ fontFamily: 'Inter' }}
                  >
                    The space encourages creative risk-taking and provides the tools and environment
                    needed for cutting-edge interactive art and technology workshops.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Photo Gallery */}
          <div className="space-y-6">
            <div className="bg-white p-6 border border-gray-200 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#EA7DFF] p-2">
                  <Camera className="w-5 h-5 text-white" />
                </div>
                <h3
                  className="text-lg font-medium text-[#22113E]"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  Workshop Spaces
                </h3>
              </div>

              {/* Main featured images */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="space-y-3">
                  <img
                    src="/1_dancestudio.jpg"
                    alt="Dance studio at Schönauareal - perfect for movement-based workshops"
                    className="w-full h-32 object-cover shadow-sm hover:shadow-md transition-shadow"
                  />
                  <img
                    src="/5_kitchen.jpg"
                    alt="Kitchen and common area for breaks and gatherings"
                    className="w-full h-32 object-cover shadow-sm hover:shadow-md transition-shadow"
                  />
                </div>
                <div className="space-y-3">
                  <img
                    src="/2_dancestudio.jpg"
                    alt="Another view of the dance studio showing the spacious layout"
                    className="w-full h-32 object-cover shadow-sm hover:shadow-md transition-shadow"
                  />
                  <img
                    src="/4_workspace.jpg"
                    alt="Additional workspace area for collaborative projects"
                    className="w-full h-32 object-cover shadow-sm hover:shadow-md transition-shadow"
                  />
                </div>
              </div>

              {/* Workshop space/common area */}
              <div className="mb-4">
                <img
                  src="/3_workspace.jpg"
                  alt="Prototyping workshop space with tools and equipment"
                  className="w-full h-40 object-cover shadow-sm hover:shadow-md transition-shadow"
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-[#EA7DFF]/10 to-[#08F2DB]/10 p-6 border border-gray-200">
              <p
                className="text-sm text-gray-600 italic text-center"
                style={{ fontFamily: 'Inter' }}
              >
                "The space itself becomes part of the experience"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
