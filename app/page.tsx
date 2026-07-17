import { AiImage } from "./_ui";
import { MeasureRail } from "./motion";

const SIZES = [34, 38, 42, 46, 50, 54, 58, 62, 64];

const SLUZBY = [
  { t: "Dámská konfekce", d: "Vlastní modely dámského oblečení — návrh, ušití i prodej přímo v dílně." },
  { t: "Opravy na průmyslových strojích", d: "Zkrácení, výměny zipů, záplaty a přešití. Rychle a v profesionální kvalitě." },
  { t: "Zakázkové krejčovství", d: "Ušijeme přesně na vaše míry — od jednoho kusu po malou sérii." },
  { t: "Bytový textil", d: "Úpravy záclon a závěsů na míru oken. Zaměříme, zkrátíme, obroubíme." },
  { t: "Nadměrné velikosti", d: "Šijeme i nadměrné velikosti až do velikosti 64." },
  { t: "Vlastní materiály", d: "Ověřené látky přímo od výrobce, dobrá gramáž, podíl spandexu 4–6 %." },
];

const CENIK = [
  { p: "Zkrácení kalhot — obyčejné", c: "79" },
  { p: "Zkrácení džín a pánských kalhot s chranítkem", c: "109" },
  { p: "Výměna zipu — kalhoty", c: "119" },
  { p: "Výměna zipu — džíny", c: "129" },
  { p: "Výměna zipu — mikina", c: "189" },
  { p: "Výměna zipu — bunda", c: "259" },
];

const DOBA = [
  { d: "Pondělí", h: "8:00–17:00" },
  { d: "Úterý", h: "8:00–17:00" },
  { d: "Středa", h: "8:00–17:00" },
  { d: "Čtvrtek", h: "8:00–14:00" },
  { d: "Pátek", h: "8:00–14:00" },
  { d: "Sobota", h: "zavřeno", off: true },
  { d: "Neděle", h: "zavřeno", off: true },
];

const GALERIE = [
  { prompt: "Elegant tailored women's dress on a workshop dress form, natural light, muted navy and chalk-blue fabric, editorial fashion photography", alt: "Dámské šaty na míru na krejčovské figuríně", cap: "Šaty na míru" },
  { prompt: "Close-up of an industrial sewing machine stitching denim seam, steel machine housing, thread spool, sharp detail", alt: "Detail šití na průmyslovém stroji", cap: "Opravy na strojích" },
  { prompt: "Rolls of women's fashion fabric bolts stacked, textured cotton with subtle stretch, cool muslin and carmine tones", alt: "Role vlastních látek v dílně", cap: "Výběr látek" },
  { prompt: "Tailor's hands pinning a hem on tailored trousers, measuring tape and chalk marks, workshop table", alt: "Zkracování kalhot s křídou a metrem", cap: "Úpravy oděvů" },
];

export default function Page() {
  return (
    <div className="frame">
      <MeasureRail />
      <main className="page">
        <div className="wrap">
          {/* HERO */}
          <header className="hero">
            <div className="brandbar">
              <span className="wordmark">
                OLA<span className="wm-dot">·</span>MÓDA
              </span>
              <span className="wm-sub">krejčovství — České Budějovice</span>
            </div>

            <div className="hero-grid">
              <div className="hero-main">
                <p className="eyebrow reveal r1">
                  <span className="tick" aria-hidden="true" />
                  Dámská konfekce · opravy · zakázkové šití
                </p>
                <h1 className="hero-h">
                  <span className="reveal r2">Ušité přesně</span>
                  <span className="reveal r3">
                    na <em>centimetr</em>.
                  </span>
                </h1>
                <p className="lede reveal r4">
                  Malá krejčovská dílna v Českých Budějovicích. Šijeme dámskou
                  konfekci, opravujeme oděvy na průmyslových strojích a bereme
                  zakázky na míru — i nadměrné velikosti až do 64.
                </p>
                <div className="cta reveal r5">
                  <a className="btn" href="tel:+420777111222">
                    Zavolat 777 111 222
                  </a>
                  <a className="btn btn-ghost" href="mailto:info@example.cz">
                    Napsat e-mail
                  </a>
                </div>
              </div>

              {/* SIZE TAPE — signature graphic derived from the trade */}
              <aside className="sizetape reveal r4" aria-label="Šijeme velikosti od 34 do 64">
                <span className="sizetape-cap">rozsah velikostí</span>
                <ol className="sizetape-scale">
                  {SIZES.map((s) => (
                    <li
                      key={s}
                      className={"sizetape-row" + (s === 64 ? " is-max" : "")}
                    >
                      <span className="sizetape-num">{s}</span>
                      <span className="sizetape-mark" aria-hidden="true" />
                    </li>
                  ))}
                </ol>
                <span className="sizetape-foot">i nadměrné velikosti</span>
              </aside>
            </div>
          </header>

          {/* SEKCE 1 — NABÍDKA + CENÍK */}
          <section className="section" aria-labelledby="s-nabidka">
            <div className="rule" aria-hidden="true" />
            <div className="sec-head">
              <p className="eyebrow">
                <span className="tick" aria-hidden="true" />
                Nabídka
              </p>
              <h2 id="s-nabidka" className="sec-h">
                Co pro vás ušijeme a spravíme
              </h2>
            </div>

            <div className="offer-grid">
              <ul className="sluzby">
                {SLUZBY.map((s) => (
                  <li key={s.t} className="sluzba">
                    <h3 className="sluzba-t">{s.t}</h3>
                    <p className="sluzba-d">{s.d}</p>
                  </li>
                ))}
              </ul>

              <div className="cenik">
                <h3 className="cenik-t">Ceník základních oprav</h3>
                <table className="cenik-tbl">
                  <thead>
                    <tr>
                      <th scope="col">Úkon</th>
                      <th scope="col">Cena</th>
                    </tr>
                  </thead>
                  <tbody>
                    {CENIK.map((r) => (
                      <tr key={r.p}>
                        <td>{r.p}</td>
                        <td className="cena">
                          {r.c}<span className="kc">Kč</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <p className="cenik-note">
                  Ceny za zakázkové šití a úpravy bytového textilu spočítáme po
                  zaměření. Řekněte nám, co potřebujete.
                </p>
              </div>
            </div>
          </section>

          {/* SEKCE 2 — GALERIE + DŮVĚRA */}
          <section className="section" aria-labelledby="s-galerie">
            <div className="rule" aria-hidden="true" />
            <div className="sec-head">
              <p className="eyebrow">
                <span className="tick" aria-hidden="true" />
                Ukázka naší práce
              </p>
              <h2 id="s-galerie" className="sec-h">
                Z dílny na Ukázkové
              </h2>
            </div>

            <div className="galerie">
              {GALERIE.map((g) => (
                <figure key={g.cap} className="shot">
                  <div className="shot-frame">
                    <AiImage
                      className="shot-img"
                      src={g.prompt}
                      alt={g.alt}
                    />
                  </div>
                  <figcaption className="shot-cap">{g.cap}</figcaption>
                </figure>
              ))}
            </div>

            <div className="trust">
              <div className="trust-col">
                <h3 className="trust-t">Prodejna a dílna</h3>
                <p className="trust-p">
                  Ukázková 123<br />
                  České Budějovice
                </p>
                <p className="trust-p muted">
                  Spojení autobusem č. 3 a 15, zastávka Šumava.
                </p>
                <p className="trust-p">
                  <a className="link" href="tel:+420777111222">777 111 222</a>
                  <br />
                  <a className="link" href="mailto:info@example.cz">info@example.cz</a>
                </p>
              </div>

              <div className="trust-col">
                <h3 className="trust-t">Provozní doba</h3>
                <table className="doba-tbl">
                  <tbody>
                    {DOBA.map((d) => (
                      <tr key={d.d} className={d.off ? "is-off" : ""}>
                        <th scope="row">{d.d}</th>
                        <td>{d.h}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="trust-col">
                <h3 className="trust-t">Proč k nám</h3>
                <p className="trust-p">
                  Šijeme z vlastních ověřených látek s dobrou gramáží a podílem
                  spandexu 4–6 %, takže oblečení drží tvar a dobře se nosí.
                </p>
                <p className="trust-p muted">
                  Každý kus si u nás zaměříme ručně — proto sedne přesně tam,
                  kde má.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
