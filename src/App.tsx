import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Workshops } from './components/Workshops';
import { Agenda } from './components/Agenda';
import { Artist } from './components/Artist';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Workshops />
      <Agenda />
      <Artist />
      <Footer />
    </div>
  );
}

export default App;