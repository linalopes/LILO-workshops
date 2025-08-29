import React, { useState } from 'react';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    workshopInterest: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formspree.io/f/mvgbznoe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '', workshopInterest: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2
            className="text-3xl md:text-4xl font-light text-[#22113E] mb-4"
            style={{ fontFamily: 'Space Grotesk' }}
          >
            Get in Touch
          </h2>
          <p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: 'Inter' }}
          >
            Join our mailing list, ask questions, or express interest in specific workshops.
          </p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-200">
          {submitStatus === 'success' ? (
            <div className="text-center py-8">
              <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
              <h3
                className="text-2xl font-medium text-[#22113E] mb-2"
                style={{ fontFamily: 'Space Grotesk' }}
              >
                Thank you!
              </h3>
              <p className="text-gray-600 mb-6">We'll be in touch soon.</p>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="bg-[#EA7DFF] text-white px-6 py-2 font-medium hover:bg-[#d666e6] transition-colors"
                style={{ fontFamily: 'Inter' }}
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#22113E] mb-2"
                    style={{ fontFamily: 'Inter' }}
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EA7DFF] focus:border-transparent transition-colors"
                    style={{ fontFamily: 'Inter' }}
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#22113E] mb-2"
                    style={{ fontFamily: 'Inter' }}
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EA7DFF] focus:border-transparent transition-colors"
                    style={{ fontFamily: 'Inter' }}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="workshopInterest"
                  className="block text-sm font-medium text-[#22113E] mb-2"
                  style={{ fontFamily: 'Inter' }}
                >
                  Workshop Interest
                </label>
                <select
                  id="workshopInterest"
                  name="workshopInterest"
                  value={formData.workshopInterest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EA7DFF] focus:border-transparent transition-colors"
                  style={{ fontFamily: 'Inter' }}
                >
                  <option value="">Select a workshop (optional)</option>
                  <option value="augmented-cinema">Augmented Cinema</option>
                  <option value="maze-circuit">Maze Circuit</option>
                  <option value="singing-garden">Singing to a Garden</option>
                  <option value="marble-machine">Marble Machine Orchestra</option>
                  <option value="gesture-pen">From Gesture to Pen</option>
                  <option value="room-instrument">Room as Instrument</option>
                  <option value="embroidering-light">Embroidering Light</option>
                  <option value="general">General Interest</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-[#22113E] mb-2"
                  style={{ fontFamily: 'Inter' }}
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="Tell us about your interest, ask questions, or just say hello..."
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#EA7DFF] focus:border-transparent transition-colors resize-none"
                  style={{ fontFamily: 'Inter' }}
                />
              </div>

              {submitStatus === 'error' && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 p-4 rounded-lg">
                  <AlertCircle className="w-5 h-5" />
                  <span style={{ fontFamily: 'Inter' }}>
                    Something went wrong. Please try again or contact us directly.
                  </span>
                </div>
              )}

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-[#EA7DFF] text-white px-8 py-3 text-lg font-medium hover:bg-[#d666e6] disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center gap-3 mx-auto"
                  style={{ fontFamily: 'Inter' }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
