import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Workshops } from './components/Workshops';
import { Agenda } from './components/Agenda';
import { Location } from './components/Location';
import { Artist } from './components/Artist';
import { FAQ } from './components/FAQ';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Workshops />
      <About />
      <Agenda />
      <Location />
      <Artist />
      <FAQ />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
