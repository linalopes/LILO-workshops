import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "Do I need to attend both the online and in-person sessions?",
    answer: "No. If you choose the in-person ticket, it includes both the Saturday session and the two online evenings. If you choose the online-only ticket, you join just the online sessions."
  },
  {
    question: "Can I join just one workshop, or do I need to sign up for the whole series?",
    answer: "You can join a single workshop, several, or all seven."
  },
  {
    question: "Can I switch from an online ticket to an in-person ticket later?",
    answer: "Yes, if space allows. Please use the contact form to request a change."
  },
  {
    question: "Is there a discount if I buy the full package of seven workshops?",
    answer: "Yes. Please use the contact form to ask about package discounts."
  },
  {
    question: "How many participants are allowed in the in-person workshops?",
    answer: "Each workshop is limited to about 20 participants in person."
  },
  {
    question: "When do the online sessions take place?",
    answer: "Two Tuesday evenings (19:00–21:00 CET) before the in-person Saturday."
  },
  {
    question: "Will there be recordings of the online sessions?",
    answer: "No. Sessions are live, practical, and based on participation."
  },
  {
    question: "Do I need to bring my own laptop?",
    answer: "Yes. Please bring your own laptop (any operating system) and a notebook."
  },
  {
    question: "What software will I need to install?",
    answer: "All instructions and links are provided in advance through the Reference Book."
  },
  {
    question: "Where do the in-person workshops take place?",
    answer: "At the Glitch Lab, located in the Schönauareal, Wetzikon."
  },
  {
    question: "What is the cancellation policy?",
    answer: "You can cancel up to one week before the workshop."
  },
  {
    question: "How do I know my registration is confirmed?",
    answer: "You will receive a confirmation email after completing your registration."
  }
];

export function FAQ() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section
      id="faq"
      className="py-20 relative"
      style={{
        backgroundImage: 'url(/LiloAcademy_Pattern_6.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Overlay for subtle fade effect */}
      <div className="absolute inset-0 bg-white/60"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <h2
          className="text-4xl md:text-5xl font-light text-[#22113E] mb-16 text-center"
          style={{ fontFamily: 'Space Grotesk' }}
        >
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden bg-white/80 backdrop-blur-sm"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-5 text-left bg-white/90 hover:bg-white transition-colors duration-200 flex items-center justify-between"
              >
                <h3
                  className="text-lg font-medium text-[#22113E] pr-4"
                  style={{ fontFamily: 'Inter' }}
                >
                  {item.question}
                </h3>
                {openItems.includes(index) ? (
                  <ChevronUp className="text-[#EA7DFF] flex-shrink-0" size={20} />
                ) : (
                  <ChevronDown className="text-[#EA7DFF] flex-shrink-0" size={20} />
                )}
              </button>

              {openItems.includes(index) && (
                <div className="px-6 pb-5 bg-white/70">
                  <p
                    className="text-gray-700 leading-relaxed"
                    style={{ fontFamily: 'Inter' }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
