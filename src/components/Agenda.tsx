import React from 'react';
import { Calendar } from 'lucide-react';

export function Agenda() {
  return (
    <section id="agenda" className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2
          className="text-3xl md:text-4xl font-light text-[#22113E] mb-12 text-center"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          Schedule
        </h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          <div className="bg-gray-50 p-6 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="bg-[#EA7DFF] p-3 mr-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3
                className="text-xl font-medium text-[#22113E]"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Spring 2026
              </h3>
            </div>
            <div className="space-y-3">
              <div
                className="text-gray-700 font-normal"
                style={{ fontFamily: 'Inter' }}
              >
                April, May, June
              </div>
              <div
                className="text-sm text-[#22113E] opacity-75"
                style={{ fontFamily: 'Courier Prime' }}
              >
                First three workshops
              </div>
            </div>
          </div>

          <div className="bg-gray-50 p-6 border border-gray-200">
            <div className="flex items-center mb-6">
              <div className="bg-[#08F2DB] p-3 mr-4">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <h3
                className="text-xl font-medium text-[#22113E]"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Fall 2026
              </h3>
            </div>
            <div className="space-y-3">
              <div
                className="text-gray-700 font-normal"
                style={{ fontFamily: 'Inter' }}
              >
                August, September, October, November
              </div>
              <div
                className="text-sm text-[#22113E] opacity-75"
                style={{ fontFamily: 'Courier Prime' }}
              >
                Last four workshops
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
