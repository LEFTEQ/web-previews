import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Knihkupectví a antikvariát Fryč — Liberec",
  description:
    "Kamenné knihkupectví a jeden z největších antikvariátů v Česku. Přes 40 000 titulů, LP desky, mapy i pohlednice. V centru Liberce už přes 30 let. Vykupujeme knihy.",
};

export default function Page() {
  return (
    <main className="fr">
      {/* HERO */}
      <header className="fr-hero">
        <div className="fr-hero__frame">
          <img
            className="fr-hero__img"
            src="/hero.webp"
            alt="Regály knihkupectví a antikvariátu Fryč v centru Liberce"
          />
          <span className="fr-hero__spine" aria-hidden="true" />
        </div>

        <div className="fr-hero__text">
          <p className="fr-eyebrow">Liberec · od roku 1993</p>
          <h1 className="fr-title">
            <span className="fr-title__line">Knihkupectví</span>
            <span className="fr-title__amp">&amp;&nbsp;antikvariát</span>
            <span className="fr-title__name">Fryč</span>
          </h1>
          <p className="fr-lede">
            Nová beletrie po levé ruce, po pravé jeden z největších
            antikvariátů v republice. Přijďte hledat mezi&nbsp;řádky —
            a nahoře si dejte kávu, dokud si vybíráte.
          </p>
          <div className="fr-hero__cta">
            <a className="fr-btn" href="#nabidka">
              Co u nás najdete
            </a>
            <a className="fr-link" href="#vykup">
              Vykupujeme knihy →
            </a>
          </div>
        </div>

        <dl className="fr-ledger" aria-label="Antikvariát v číslech">
          <div className="fr-ledger__row">
            <dt>Titulů v antikvariátu</dt>
            <dd>40&nbsp;000+</dd>
          </div>
          <div className="fr-ledger__row">
            <dt>Let na náměstí</dt>
            <dd>30+</dd>
          </div>
          <div className="fr-ledger__row">
            <dt>Patro s&nbsp;kávou a&nbsp;čajem</dt>
            <dd>1.</dd>
          </div>
        </dl>
      </header>

      {/* SEKCE 1 — NABÍDKA jako katalogové karty */}
      <section className="fr-cat" id="nabidka" aria-labelledby="nabidka-h">
        <div className="fr-cat__head">
          <p className="fr-eyebrow fr-eyebrow--dark">Katalog domu</p>
          <h2 className="fr-h2" id="nabidka-h">
            Čtyři regály, jedna adresa
          </h2>
        </div>

        <ol className="fr-shelf">
          <li className="fr-card">
            <p className="fr-card__sig">Odd. I</p>
            <h3 className="fr-card__t">Knihkupectví</h3>
            <p className="fr-card__d">
              Beletrie, odborná a dětská literatura, cizojazyčné knihy,
              audioknihy i pedagogické učebnice. K tomu kalendáře, diáře,
              omalovánky a stolní hry.
            </p>
          </li>

          <li className="fr-card fr-card--wide">
            <img
              className="fr-card__img"
              src="/section-1.webp"
              alt="Police antikvariátu Fryč s českými i cizojazyčnými knihami"
            />
            <p className="fr-card__sig">Odd. II</p>
            <h3 className="fr-card__t">Antikvariát</h3>
            <p className="fr-card__d">
              Přes 40 000 titulů — od povinné četby po nesehnatelné tisky.
              Vedle knih tu najdete LP desky, staré pohlednice, mapy i obrazy.
            </p>
          </li>

          <li className="fr-card">
            <p className="fr-card__sig">Odd. III</p>
            <h3 className="fr-card__t">Kulturní sál</h3>
            <p className="fr-card__d">
              Večery s herci, spisovateli a baviči, besedy na zajímavá témata
              a tradiční nedělní pohádky pro děti. Sál si u nás lze i pronajmout.
            </p>
          </li>

          <li className="fr-card">
            <p className="fr-card__sig">Odd. IV</p>
            <h3 className="fr-card__t">Dárkové poukazy</h3>
            <p className="fr-card__d">
              Nevíte, jakou knihu vybrat? Poukaz v hodnotě 100, 200, 500
              nebo 1000&nbsp;Kč vyřeší dárek a výběr necháte na obdarovaném.
            </p>
          </li>
        </ol>
      </section>

      {/* SEKCE 2 — O NÁS / VÝKUP / DŮVĚRA */}
      <section className="fr-about" id="vykup" aria-labelledby="about-h">
        <div className="fr-about__media">
          <img
            className="fr-about__img"
            src="/section-2.webp"
            alt="Interiér knihkupectví Fryč — kavárna v prvním patře a dětský koutek"
          />
        </div>

        <div className="fr-about__body">
          <p className="fr-eyebrow fr-eyebrow--dark">O nás</p>
          <h2 className="fr-h2" id="about-h">
            K Liberci patříme víc než třicet let
          </h2>
          <p className="fr-about__p">
            V kamenné prodejně v centru města najdete nepřeberné množství knih
            všeho druhu. Náš antikvariát je jeden z největších v České republice.
            V prvním patře si dáte kávu nebo čaj, děti mají svůj koutek — a nikdo
            vás nikam nežene.
          </p>

          <div className="fr-vykup">
            <p className="fr-vykup__label">Vykupujeme knihy</p>
            <a className="fr-vykup__tel" href="tel:+420485105755">
              485&nbsp;105&nbsp;755
            </a>
            <p className="fr-vykup__note">
              Zavolejte a domluvíme se — antikvariát U&nbsp;Kolory 302,
              e-shop antik.knihyfryc.cz
            </p>
          </div>

          <ul className="fr-facts">
            <li>
              <span>Autorské podpisy</span> Knihy podepsané Karin Babinskou,
              Miloslavem Nevrlým či Janem Štifterem — se slevou 15&nbsp;%.
            </li>
            <li>
              <span>Regionální literatura</span> Liberecko a Jizerské hory
              na jednom místě, včetně titulů, které jinde neseženete.
            </li>
            <li>
              <span>OIKOYMENH</span> Filosofickou edici máme jako jediní
              v&nbsp;Liberci.
            </li>
          </ul>
        </div>
      </section>
    </main>
  );
}
