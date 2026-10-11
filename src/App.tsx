import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { FalcDivider } from "./components/FalcDivider";
import { Services } from "./components/Services";
import { ColorBoard } from "./components/ColorBoard";
import { Inquiry } from "./components/Inquiry";
import { Contact, Footer } from "./components/Contact";
import { COMPANY } from "./data";

export default function App() {
  return (
    <>
      <a href="#obsah" className="skip-link">
        Přeskočit na obsah
      </a>
      <div className="bg-cihla px-4 py-2 text-center text-xs text-white sm:text-sm">
        <strong className="font-semibold">Neoficiální koncept redesignu</strong> — nejde o oficiální web firmy {COMPANY}.
      </div>
      <Header />
      <main id="obsah">
        <Hero />
        <figure className="bg-titan">
          <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6">
            <img
              src="/hero.webp"
              alt="Ilustrační obrázek střechy vytvořený AI"
              className="block aspect-[16/10] w-full object-cover sm:aspect-[21/9]"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="mt-2 font-mono text-xs text-ocel">
              Ilustrační obrázek vytvořený pomocí AI — nezobrazuje realizaci firmy.
            </figcaption>
          </div>
        </figure>
        <FalcDivider />
        <Services />
        <FalcDivider variant="wave" />
        <ColorBoard />
        <FalcDivider />
        <Inquiry />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
