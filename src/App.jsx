import { useEffect, useState } from 'react';
import { LAYERS } from './data.js';
import { useFocusClearance } from './useFocusClearance.js';
import { ConceptStrip, Header, ContactBar } from './components/Header.jsx';
import { Trench } from './components/Trench.jsx';
import { Hero } from './components/Hero.jsx';
import { Tasks } from './components/Tasks.jsx';
import { Services } from './components/Services.jsx';
import { Terrain } from './components/Terrain.jsx';
import { Inquiry } from './components/Inquiry.jsx';
import { Footer } from './components/Footer.jsx';

export default function App() {
  const [current, setCurrent] = useState(LAYERS[0]);
  const [workType, setWorkType] = useState('');

  useFocusClearance();

  useEffect(() => {
    const els = Array.from(document.querySelectorAll('[data-layer]'));
    if (!('IntersectionObserver' in window) || !els.length) return undefined;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const layer = LAYERS.find((l) => l.id === entry.target.getAttribute('data-layer'));
          if (layer) setCurrent(layer);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <a href="#obsah" className="skip-link">
        Přeskočit na obsah
      </a>
      <ConceptStrip />
      <Header />
      <Trench current={current} />
      <div className="lg:pl-16">
        <main id="obsah">
          <Hero />
          <Tasks />
          <Services onPick={setWorkType} />
          <Terrain onPick={setWorkType} />
          <Inquiry workType={workType} setWorkType={setWorkType} />
        </main>
        <Footer />
      </div>
      <ContactBar />
    </>
  );
}
