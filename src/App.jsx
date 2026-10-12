import { InquiryProvider } from "./inquiry.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import ThemeBand from "./components/ThemeBand.jsx";
import Catalog from "./components/Catalog.jsx";
import Inquiry from "./components/Inquiry.jsx";
import VideoSection from "./components/VideoSection.jsx";
import Footer from "./components/Footer.jsx";
import TrayFab from "./components/TrayFab.jsx";

export default function App() {
  return (
    <InquiryProvider>
      <a className="skip-link" href="#obsah">
        Přeskočit na obsah
      </a>
      <div className="concept-bar" role="note">
        <div className="wrap">
          <strong>Neoficiální koncept redesignu</strong> webu GEMARE AGENCY – nejde o oficiální stránky
          firmy. Obrázky a video jsou ilustrační, vytvořené pomocí AI.
        </div>
      </div>
      <Header />
      <main id="obsah">
        <Hero />
        <ThemeBand />
        <Catalog />
        <Inquiry />
        <VideoSection />
      </main>
      <Footer />
      <TrayFab />
    </InquiryProvider>
  );
}
