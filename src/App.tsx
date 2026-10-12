import Header from "./components/Header";
import Hero from "./components/Hero";
import QuickContact from "./components/QuickContact";
import Overview from "./components/Overview";
import StratumBand from "./components/StratumBand";
import Inquiry from "./components/Inquiry";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";
import BottomBar from "./components/BottomBar";
import { STRATA } from "./data";
import { useFocusGuard } from "./hooks/useFocusGuard";

export default function App() {
  useFocusGuard();
  return (
    <>
      <a href="#obsah" className="skip-link">
        Přeskočit na obsah
      </a>
      <p className="bg-ink px-4 py-2 text-center font-mono text-[11px] uppercase leading-snug tracking-[0.08em] text-loess">
        Neoficiální koncept redesignu – nejde o oficiální web ZVČ, s.r.o.
      </p>
      <Header />
      <main id="obsah">
        <Hero />
        <QuickContact />
        <Overview />
        <div id="cinnosti">
          {STRATA.map((s) => (
            <StratumBand key={s.id} s={s} />
          ))}
        </div>
        <Inquiry />
        <Contacts />
      </main>
      <Footer />
      <BottomBar />
    </>
  );
}
