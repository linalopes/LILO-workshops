import React, { useState } from 'react';
import { Video, Zap, Flower, Music, PenTool, Waves, Shirt, X } from 'lucide-react';

// TypeScript interface for workshop data
interface Workshop {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  hasModal: boolean;
  // Modal-specific data
  modalData?: {
    image?: string;
    imageAlt?: string;
    schedule: {
      online?: {
        title: string;
        time: string;
        dates: string;
        color: string;
        textColor: string;
      };
      inPerson?: {
        title: string;
        time: string;
        dates: string;
        color: string;
        textColor: string;
      };
    };
    content: {
      description: string;
      whatYoullLearn: string[];
      whoShouldJoin: string;
    };
    lumaEventUrl: string; // public event page
    lumaEmbedUrl?: string; // embed endpoint (optional)
  };
}

const workshops: Workshop[] = [
  {
    id: "augmented-cinema",
    title: "Augmented Cinema",
    subtitle: "Video Mapping + AI",
    description: "Turning the studio into an expanded cinema.",
    icon: Video,
    color: "bg-[#EA7DFF]",
    hasModal: true,
    modalData: {
      image: "/Augmented-Cinema.png",
      imageAlt: "Augmented Cinema workshop - Video mapping and AI in immersive spaces",
      schedule: {
        online: {
          title: "Online Sessions",
          time: "Tuesdays, 19:00 CET",
          dates: "April 7 & April 14, 2026",
          color: "#22113E",
          textColor: "#08F2DB"
        },
        inPerson: {
          title: "In-Person Session",
          time: "Saturday, 10:00–17:00 CET",
          dates: "April 25, 2026",
          color: "#EA7DFF",
          textColor: "#22113E"
        }
      },
      content: {
        description: "Augmented Cinema is a workshop that transforms video mapping into an immersive, expanded form of cinema. Instead of projecting on façades, we explore how mapping can reshape an interior space, turning walls, ceilings, and floors into living surfaces. Participants step into a scenographic environment where moving images envelop not only the eye but the whole body.\n\nThe workshop builds on Lina Lopes' previous projects such as Vesica Pieces (where dancers' movements and musicians' sounds generated live visuals that wrapped the audience) and an immersive storytelling performance inside Frida Kahlo's bedroom. These experiences show how quickly video mapping can create poetic and playful atmospheres, drawing the public into new spatial narratives.",
        whatYoullLearn: [
          "Explore the history and language of expanded cinema.",
          "Learn the basics of video mapping and how technology shapes visual storytelling.",
          "Experiment with AI platforms for generating imagery, video textures, and narrative content.",
          "Work with tools such as MadMapper (primary), Resolume, and alternative software (including iPad-based solutions).",
          "Collaboratively design and present a two-minute immersive scene inside the studio, with attempts to document the work even if video mapping often resists capture."
        ],
        whoShouldJoin: "No previous experience is required — the workshop is designed for complete beginners. At the same time, professionals are welcome to join and use the setting as a space for experimentation. Different challenges can be proposed depending on participants' experience, including adding interactivity or exploring unusual mapping surfaces.\n\nThis workshop is open to performers, designers, educators, architects, and anyone interested in discovering how projection and AI can transform a room into a stage, a story, or a dreamscape. What you take with you is not only technical skills but also a sense of how simple tools — a projector, a surface, a generated image — can shift perception and create new experiences in performance, teaching, or exhibition design."
      },
      lumaEventUrl: "https://luma.com/9nfn6wm2",
      lumaEmbedUrl: "https://luma.com/embed/event/evt-xNrvmYUE6CxuAAC/simple"
    }
  },
  {
    id: "maze-circuit",
    title: "Maze Circuit",
    subtitle: "Collaborative Game",
    description: "A collaborative game where connection powers the play.",
    icon: Zap,
    color: "bg-[#08F2DB]",
    hasModal: true,
    modalData: {
      schedule: {
        online: {
          title: "Online Sessions",
          time: "Tuesdays, 19:00 CET",
          dates: "May 12 & May 19, 2026",
          color: "#22113E",
          textColor: "#08F2DB"
        },
        inPerson: {
          title: "In-Person Session",
          time: "Saturday, 10:00–17:00 CET",
          dates: "May 23, 2026",
          color: "#EA7DFF",
          textColor: "#22113E"
        }
      },
      content: {
        description: "Maze Circuit is a collaborative workshop where bodies, conductive materials, and simple code come together to create playful circuits and games. On the floor, a maze made of copper and aluminum tape becomes a responsive playground: sometimes you move alone, sometimes you must connect — hand to hand, foot to foot, skin to skin — to advance.\n\nThe workshop is inspired by Makey Makey's playful logic, where closing a circuit turns the body into a controller. From navigating a conductive labyrinth to controlling a Pong game on screen, participants explore how touch, paper, and tape can transform into digital interfaces. It is an invitation to rethink how everyday materials — and the human body itself — can become unexpected tools for collective play.",
        whatYoullLearn: [
          "Learn the basics of conductive materials and simple circuit design",
          "Explore Makey Makey and similar tools for body-based interaction",
          "Create collaborative games using touch and movement",
          "Design and build conductive mazes and interactive surfaces",
          "Understand how physical materials can become digital interfaces"
        ],
        whoShouldJoin: "This workshop is perfect for anyone interested in playful technology, collaborative games, or hands-on learning. No prior experience with electronics or coding is required — we'll start from the basics and build up together. The workshop is designed for educators, artists, designers, and anyone curious about how our bodies can interact with technology in new and unexpected ways."
      },
      lumaEventUrl: "https://luma.com/iwq729r8",
      lumaEmbedUrl: "https://luma.com/embed/event/evt-qJ5pyCoWsj8Q2et/simple"
    }
  },
  {
    id: "singing-to-garden",
    title: "Singing to a Garden",
    subtitle: "Voice Interaction",
    description: "Voices make flowers bloom, silence makes them close.",
    icon: Flower,
    color: "bg-[#EA7DFF]",
    hasModal: true,
    modalData: {
      schedule: {
        online: {
          title: "Online Sessions",
          time: "Tuesdays, 19:00 CET",
          dates: "June 2 & June 9, 2026",
          color: "#22113E",
          textColor: "#08F2DB"
        },
        inPerson: {
          title: "In-Person Session",
          time: "Saturday, 10:00–17:00 CET",
          dates: "June 13, 2026",
          color: "#EA7DFF",
          textColor: "#22113E"
        }
      },
      content: {
        description: "Singing to a Garden is a hands-on workshop where paper meets sound. Participants fold and craft kinetic flowers from paper, then bring them to life using simple Arduino circuits connected to microphones. Singing, clapping, or any sound becomes the trigger: voices open the flowers, silence makes them close.\n\nTogether we build not just individual sculptures but a collective blooming garden — a poetic and playful experiment in interaction, design, and technology.",
        whatYoullLearn: [
          "Design and fold paper into kinetic flower structures",
          "Basics of Arduino as an accessible tool for sound interaction",
          "How microphones/sensors translate voice and sound into motion",
          "Collaborative building of a garden installation that responds to sound"
        ],
        whoShouldJoin: "No previous experience is required — this workshop is designed for beginners as well as curious minds from any field. Open to designers, educators, architects, performers, and anyone over 16 interested in kinetic sculpture, paper craft, and interactive design."
      },
      lumaEventUrl: "https://luma.com/gpkaocvs",
      lumaEmbedUrl: "https://luma.com/embed/event/evt-njJulGJrOK7B9ef/simple"
    }
  },
  {
    id: "marble-machine-orchestra",
    title: "Marble Machine Orchestra",
    subtitle: "Sound Installation",
    description: "Build and play with rolling marbles and sound.",
    icon: Music,
    color: "bg-[#08F2DB]",
    hasModal: true,
    modalData: {
      schedule: {
        online: {
          title: "Online Sessions",
          time: "Tuesdays, 19:00 CET",
          dates: "August 18 & August 25, 2026",
          color: "#22113E",
          textColor: "#08F2DB"
        },
        inPerson: {
          title: "In-Person Session",
          time: "Saturday, 10:00–17:00 CET",
          dates: "August 29, 2026",
          color: "#EA7DFF",
          textColor: "#22113E"
        }
      },
      content: {
        description: "Marble Machine Orchestra is a collaborative workshop where participants design and build kinetic sound machines from simple materials. Working in groups, you will create marble tracks on perforated panels, using screws, 3D-printed connectors, cardboard, and conduits. As marbles roll and collide with obstacles, rhythms and sounds emerge. The result is a collective installation where mechanics, improvisation, and play come together.\n\nThe workshop is inspired by the famous Wintergatan Marble Machine video. While we won't build that massive contraption, we apply the same principles of dynamics, elements, and mechanisms at a smaller, DIY scale.",
        whatYoullLearn: [
          "Build kinetic mechanisms on perforated panels",
          "Experiment with ramps, marbles, and obstacles to generate rhythm",
          "Use everyday materials (cardboard, conduits, screws, 3D-printed parts) for sound-making",
          "Collaborate in groups to design playful sound installations"
        ],
        whoShouldJoin: "Open to educators, designers, architects, performers, musicians, and anyone over 16 interested in interactive installations and creative mechanics. No previous experience required — beginners welcome."
      },
      lumaEventUrl: "https://luma.com/7uik3pz9",
      lumaEmbedUrl: "https://luma.com/embed/event/evt-0E8azprqOAA2U1E/simple"
    }
  },
  {
    id: "gesture-to-pen",
    title: "From Gesture to Pen",
    subtitle: "Body Drawing",
    description: "Draw with your body, print with a pen plotter.",
    icon: PenTool,
    color: "bg-[#EA7DFF]",
    hasModal: true,
    modalData: {
      schedule: {
        online: {
          title: "Online Sessions",
          time: "Tuesdays, 19:00 CET",
          dates: "September 8 & September 15, 2026",
          color: "#22113E",
          textColor: "#08F2DB"
        },
        inPerson: {
          title: "In-Person Session",
          time: "Saturday, 10:00–17:00 CET",
          dates: "September 19, 2026",
          color: "#EA7DFF",
          textColor: "#22113E"
        }
      },
      content: {
        description: "From Gesture to Pen is a workshop where your body turns into a drawing tool. Using machine learning for body tracking, participants capture gestures through a webcam, transforming movement into SVG data that can be exported and materialized.\n\nIn groups, participants explore how motion becomes digital traces, and then each person prints their own drawing with a pen plotter. The result is both poetic and tangible: a physical artifact that begins with gesture, becomes data, and returns as art on paper.",
        whatYoullLearn: [
          "Use machine learning for body and hand tracking via webcam",
          "Transform movement into data, export data as SVG, and materialize it as physical art",
          "Basics of working with p5.js to capture and process gestures",
          "Operate an XY pen plotter to print the drawings on paper"
        ],
        whoShouldJoin: "Open to performers, designers, architects, educators, and anyone over 16 interested in body interaction and physical computing. No previous experience required — beginner friendly and guided step by step."
      },
      lumaEventUrl: "https://luma.com/lqsxq9en",
      lumaEmbedUrl: "https://luma.com/embed/event/evt-3n7Cs4gd3THJKaN/simple"
    }
  },
  {
    id: "room-as-instrument",
    title: "Room as Instrument",
    subtitle: "AR Music",
    description: "The studio becomes a giant musical instrument in AR.",
    icon: Waves,
    color: "bg-[#08F2DB]",
    hasModal: true,
    modalData: {
      schedule: {
        online: {
          title: "Online Sessions",
          time: "Tuesdays, 19:00 CET",
          dates: "October 13 & October 20, 2026",
          color: "#22113E",
          textColor: "#08F2DB"
        },
        inPerson: {
          title: "In-Person Session",
          time: "Saturday, 10:00–17:00 CET",
          dates: "October 24, 2026",
          color: "#EA7DFF",
          textColor: "#22113E"
        }
      },
      content: {
        description: "Room as Instrument is a workshop where augmented reality turns space into a musical playground. Using their phones, participants prototype AR instruments that inhabit the room — a piano stretched across a wall, a harp suspended in the air, a drum triggered by gestures.\n\nWorking in pairs, each group builds an instrument and learns to map zones, recognize hand movements, and trigger sound. We end with a collective performance where all instruments play together in the same space.",
        whatYoullLearn: [
          "Basics of augmented reality for interactive sound",
          "How to map spatial zones and attach sound triggers",
          "How to use hand/body tracking to control AR instruments",
          "How to prototype AR instruments and share them via link and source code",
          "Collaborative composition methods for a final collective performance"
        ],
        whoShouldJoin: "Open to designers, performers, musicians, architects, educators, and anyone over 16 curious about AR and interactive sound. No prior experience is required — beginner-friendly and guided step by step."
      },
      lumaEventUrl: "https://luma.com/nmybnqnv",
      lumaEmbedUrl: "https://luma.com/embed/event/evt-fk9NwurwBY8uAPR/simple"
    }
  },
  {
    id: "embroidering-light",
    title: "Embroidering Light",
    subtitle: "Textile Technology",
    description: "Touch conductive embroidery to light up fabrics.",
    icon: Shirt,
    color: "bg-[#EA7DFF]",
    hasModal: true,
    modalData: {
      schedule: {
        online: {
          title: "Online Sessions",
          time: "Tuesdays, 19:00 CET",
          dates: "November 10 & November 17, 2026",
          color: "#22113E",
          textColor: "#08F2DB"
        },
        inPerson: {
          title: "In-Person Workshop",
          time: "Saturday, 10:00–17:00 CET",
          dates: "November 21, 2026",
          color: "#EA7DFF",
          textColor: "#22113E"
        }
      },
      content: {
        description: "Embroidering Light is a workshop blending textile craft with technology. Participants use conductive thread and LEDs to stitch interactive fabric that responds with light. Working in small groups, you'll explore the fundamentals of wearables through a poetic, hands-on process.\n\nInspired by Cellular Installation at São Paulo Fashion Week — where embroidery illuminated modular panels like a living organism — this workshop enables you to create personal, illuminated textile pieces that glow when touched.",
        whatYoullLearn: [
          "Conductive materials and flexible e-textiles basics",
          "How to embroider with conductive thread and integrate LEDs",
          "Designing and connecting touch-activated textile circuits",
          "Introduction to wearable technology with small-group prototyping"
        ],
        whoShouldJoin: "Open to designers, artists, architects, educators, performers, fashion makers, and anyone over 16 curious about textiles and interactive technology. No sewing or electronics experience required."
      },
      lumaEventUrl: "https://luma.com/doj9zfji",
      lumaEmbedUrl: "https://luma.com/embed/event/evt-ihxQOMiaVxB2Fjp/simple"
    }
  }
];

export function Workshops() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState<Workshop | null>(null);

  const openModal = (workshop: Workshop) => {
    setSelectedWorkshop(workshop);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedWorkshop(null);
  };

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
                  onClick={() => openModal(workshop)}
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
      {isModalOpen && selectedWorkshop && selectedWorkshop.modalData && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-4 flex-1">
                  <div className={`${selectedWorkshop.color} p-3`}>
                    <selectedWorkshop.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2
                      className="text-2xl font-medium text-[#22113E]"
                      style={{ fontFamily: 'Space Grotesk' }}
                    >
                      {selectedWorkshop.title}
                    </h2>
                    <p
                      className="text-sm text-gray-600 font-medium"
                      style={{ fontFamily: 'Courier Prime' }}
                    >
                      {selectedWorkshop.subtitle}
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-gray-600 transition-colors ml-4 flex-shrink-0"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Mobile Ticket Button */}
              <div className="md:hidden mb-6">
                <a
                  href={selectedWorkshop.modalData.lumaEventUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#EA7DFF] text-white px-6 py-4 text-base font-medium hover:bg-[#d666e6] transition-colors rounded-lg w-full text-center block"
                  style={{ fontFamily: 'Inter' }}
                >
                  Register at Luma
                </a>
              </div>

              {/* Desktop Ticket Button */}
              <div className="hidden md:block mb-6">
                <a
                  href={selectedWorkshop.modalData.lumaEventUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#EA7DFF] text-white px-6 py-3 text-sm font-medium hover:bg-[#d666e6] transition-colors rounded-lg inline-block"
                  style={{ fontFamily: 'Inter' }}
                >
                  Register at Luma
                </a>
              </div>

              {/* Workshop Schedule */}
              <div className="mb-8">
                <h3
                  className="text-lg font-medium text-[#22113E] mb-4"
                  style={{ fontFamily: 'Space Grotesk' }}
                >
                  Workshop Schedule
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {/* Online Sessions */}
                  {selectedWorkshop.modalData.schedule.online && (
                    <div
                      className="rounded-lg p-4"
                      style={{
                        backgroundColor: selectedWorkshop.modalData.schedule.online.color,
                        border: `1px solid ${selectedWorkshop.modalData.schedule.online.color}`
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div
                          className="w-3 h-3 rounded-full"
                          style={{ backgroundColor: selectedWorkshop.modalData.schedule.online.textColor }}
                        ></div>
                        <h4
                          className="font-medium text-white"
                          style={{ fontFamily: 'Inter' }}
                        >
                          {selectedWorkshop.modalData.schedule.online.title}
                        </h4>
                      </div>
                      <p
                        className="text-sm mb-2"
                        style={{
                          fontFamily: 'Courier Prime',
                          color: selectedWorkshop.modalData.schedule.online.textColor
                        }}
                      >
                        {selectedWorkshop.modalData.schedule.online.time}
                      </p>
                      <p
                        className="text-sm font-medium text-white"
                        style={{ fontFamily: 'Inter' }}
                      >
                        {selectedWorkshop.modalData.schedule.online.dates}
                      </p>
                    </div>
                  )}

                  {/* In-Person Session */}
                  {selectedWorkshop.modalData.schedule.inPerson && (
                    <div
                      className="rounded-lg p-4"
                      style={{
                        backgroundColor: selectedWorkshop.modalData.schedule.inPerson.color,
                        border: `1px solid ${selectedWorkshop.modalData.schedule.inPerson.color}`
                      }}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                        <h4
                          className="font-medium text-white"
                          style={{ fontFamily: 'Inter' }}
                        >
                          {selectedWorkshop.modalData.schedule.inPerson.title}
                        </h4>
                      </div>
                      <p
                        className="text-sm mb-2"
                        style={{
                          fontFamily: 'Courier Prime',
                          color: selectedWorkshop.modalData.schedule.inPerson.textColor
                        }}
                      >
                        {selectedWorkshop.modalData.schedule.inPerson.time}
                      </p>
                      <p
                        className="text-sm font-medium text-white"
                        style={{ fontFamily: 'Inter' }}
                      >
                        {selectedWorkshop.modalData.schedule.inPerson.dates}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6" style={{ fontFamily: 'Inter' }}>
                <div className="text-gray-700 leading-relaxed">
                  {selectedWorkshop.modalData.content.description.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* What You'll Learn Section */}
                {selectedWorkshop.modalData.content.whatYoullLearn && selectedWorkshop.modalData.content.whatYoullLearn.length > 0 && (
                  <div>
                    <h3
                      className="text-lg font-medium text-[#22113E] mb-4"
                      style={{ fontFamily: 'Space Grotesk' }}
                    >
                      What You'll Learn
                    </h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
                      {selectedWorkshop.modalData.content.whatYoullLearn.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Who Should Join Section */}
                {selectedWorkshop.modalData.content.whoShouldJoin && (
                  <div>
                    <h3
                      className="text-lg font-medium text-[#22113E] mb-4"
                      style={{ fontFamily: 'Space Grotesk' }}
                    >
                      Who Should Join
                    </h3>
                    {selectedWorkshop.modalData.content.whoShouldJoin.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
              </div>

              {/* Luma Registration Embed */}
              {selectedWorkshop.modalData.lumaEmbedUrl ? (
                <div className="mt-8">
                  <h3
                    className="text-lg font-medium text-[#22113E] mb-4"
                    style={{ fontFamily: 'Space Grotesk' }}
                  >
                    Register for the Workshop
                  </h3>
                  <div className="flex justify-center">
                    <iframe
                      src={selectedWorkshop.modalData.lumaEmbedUrl}
                      width="100%"
                      height="450"
                      allow="fullscreen; payment"
                      aria-hidden="false"
                      tabIndex={0}
                    ></iframe>
                  </div>
                </div>
              ) : (
                <div className="mt-8">
                  <h3
                    className="text-lg font-medium text-[#22113E] mb-4"
                    style={{ fontFamily: 'Space Grotesk' }}
                  >
                    Register for the Workshop
                  </h3>
                  <div className="text-center">
                    <a
                      href={selectedWorkshop.modalData.lumaEventUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-[#EA7DFF] text-white px-8 py-4 text-lg font-medium hover:bg-[#d666e6] transition-colors rounded-lg inline-block"
                      style={{ fontFamily: 'Inter' }}
                    >
                      🎫 Register on Luma Platform
                    </a>
                  </div>
                </div>
              )}

              {/* Footer */}
              <div className="mt-8 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center">
                <a
                  href={selectedWorkshop.modalData.lumaEventUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#EA7DFF] text-white px-6 py-3 text-base font-medium hover:bg-[#d666e6] transition-colors rounded-lg text-center block sm:inline-block"
                  style={{ fontFamily: 'Inter' }}
                >
                  Register at Luma
                </a>
                <button
                  onClick={closeModal}
                  className="bg-gray-500 text-white px-6 py-3 text-base font-medium hover:bg-gray-600 transition-colors rounded-lg text-center block sm:inline-block"
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
