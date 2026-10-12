import { MotionConfig } from "motion/react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SampleWall } from "./components/SampleWall";
import { Services } from "./components/Services";
import { Steps } from "./components/Steps";
import { Advice } from "./components/Advice";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { BottomBar } from "./components/BottomBar";
import { useFocusClearance } from "./hooks/useFocusClearance";

export function Seam() {
  return <div className="seam" aria-hidden="true" />;
}

export default function App() {
  useFocusClearance();
  return (
    <MotionConfig reducedMotion="user">
      <a href="#obsah" className="skip-link" data-fixed-bar>
        Přeskočit na obsah
      </a>
      <p className="concept-banner">
        <strong>Neoficiální koncept redesignu</strong> · nejde o oficiální web firmy Parket&amp;pandomo s.r.o. Obrázky jsou ilustrační (AI), nejsou to realizace firmy.
      </p>
      <Header />
      <main id="obsah" tabIndex={-1} className="outline-none">
        <Hero />
        <Seam />
        <SampleWall />
        <Seam />
        <Services />
        <Seam />
        <Steps />
        <Seam />
        <Advice />
        <Seam />
        <Contact />
      </main>
      <Footer />
      <BottomBar />
    </MotionConfig>
  );
}
