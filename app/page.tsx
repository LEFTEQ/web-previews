export default function Page() {
  return (
    <main className="vb">
      {/* ================= HERO ================= */}
      <header className="vb-hero">
        <div className="vb-shell">
          <div className="vb-topbar">
            <a className="vb-wordmark" href="#" aria-label="Victory Bartoš — servis počítačů Brno">
              <span className="vb-wordmark-main">VICTORY</span>
              <span className="vb-wordmark-sub">BARTOŠ · PC SERVIS BRNO</span>
            </a>
            <a className="vb-topbar-tel" href="tel:+420739434849">
              <span className="vb-topbar-tel-label">Servis na drátě</span>
              739 434 849
            </a>
          </div>

          <div className="vb-hero-grid">
            <div className="vb-hero-copy">
              <p className="vb-hero-eyebrow">
                <span className="vb-led" aria-hidden="true"></span>
                Dílna přijímá — Brno, po–pá 9–18
              </p>
              <h1 className="vb-hero-title">
                Počítač zamrzl?
                <br />
                <span className="vb-hero-title-accent">My ne.</span>
              </h1>
              <p className="vb-hero-lead">
                Opravíme stolní PC i notebook za pevnou cenu <strong>690&nbsp;Kč</strong> —
                bez ohledu na to, kolik hodin nad ním strávíme. Diagnostika závady
                je vždy zdarma. Když by oprava vyšla dráž (třeba kvůli vadnému dílu),
                řekneme vám cenu předem. Žádné překvapení na účtence.
              </p>
              <div className="vb-hero-actions">
                <a className="vb-btn vb-btn-primary" href="tel:+420739434849">Zavolat do dílny</a>
                <a className="vb-btn vb-btn-ghost" href="#sluzby">Ceník oprav</a>
              </div>
            </div>

            {/* Signature: diagnostický POST panel — jako obrazovka BIOSu při startu */}
            <div className="vb-post" role="img" aria-label="Diagnostický výpis: diagnostika zdarma, oprava 690 Kč, záruka až 3 roky">
              <div className="vb-post-head">
                <span className="vb-post-dot" aria-hidden="true"></span>
                VB-DIAG v2.5 — BRNO
              </div>
              <ol className="vb-post-lines">
                <li className="vb-post-line" style={{ ['--i' as string]: 0 }}>
                  <span className="vb-post-key">Diagnostika závady</span>
                  <span className="vb-post-dots" aria-hidden="true"></span>
                  <span className="vb-post-val vb-post-ok">ZDARMA</span>
                </li>
                <li className="vb-post-line" style={{ ['--i' as string]: 1 }}>
                  <span className="vb-post-key">Oprava PC, pevná cena</span>
                  <span className="vb-post-dots" aria-hidden="true"></span>
                  <span className="vb-post-val">690 Kč</span>
                </li>
                <li className="vb-post-line" style={{ ['--i' as string]: 2 }}>
                  <span className="vb-post-key">Odvirování u nás v dílně</span>
                  <span className="vb-post-dots" aria-hidden="true"></span>
                  <span className="vb-post-val">590 Kč</span>
                </li>
                <li className="vb-post-line" style={{ ['--i' as string]: 3 }}>
                  <span className="vb-post-key">Zapomenuté heslo Windows</span>
                  <span className="vb-post-dots" aria-hidden="true"></span>
                  <span className="vb-post-val">490 Kč</span>
                </li>
                <li className="vb-post-line" style={{ ['--i' as string]: 4 }}>
                  <span className="vb-post-key">Záruka na vyměněné díly</span>
                  <span className="vb-post-dots" aria-hidden="true"></span>
                  <span className="vb-post-val">2 roky</span>
                </li>
                <li className="vb-post-line" style={{ ['--i' as string]: 5 }}>
                  <span className="vb-post-key">Záruka na PC složené u nás</span>
                  <span className="vb-post-dots" aria-hidden="true"></span>
                  <span className="vb-post-val vb-post-ok">3 roky</span>
                </li>
              </ol>
              <p className="vb-post-footer" style={{ ['--i' as string]: 6 }}>
                Boot OK — pokračujte volbou služby&nbsp;<span className="vb-cursor" aria-hidden="true">▮</span>
              </p>
            </div>
          </div>
        </div>
      </header>

      {/* ================= SLUŽBY ================= */}
      <section className="vb-section" id="sluzby" aria-labelledby="sluzby-h">
        <div className="vb-shell">
          <div className="vb-section-head">
            <h2 className="vb-section-title" id="sluzby-h">Co u nás na stole opravíme</h2>
            <p className="vb-section-lead">
              Stolní počítače, notebooky i netbooky všech značek. Většinu běžných
              závad vyřešíme na počkání, díly máme skladem od brněnských velkoskladů.
            </p>
          </div>

          <div className="vb-cards">
            <article className="vb-card">
              <h3 className="vb-card-title">Oprava a výměna hardwaru</h3>
              <p className="vb-card-text">
                Nefunkční zdroj, vadný disk, prasklá klávesnice notebooku nebo
                přehřívání? Běžné díly vyměníme na počkání a dostanete na ně
                záruku 2 roky. Před opravou vždy znáte cenu.
              </p>
              <p className="vb-card-price">od 690 Kč · diagnostika zdarma</p>
            </article>

            <article className="vb-card">
              <h3 className="vb-card-title">Odvirování a vyčištění PC</h3>
              <p className="vb-card-text">
                Pomalý start, samovolné restarty, vyskakující reklama nebo
                zablokovaná obrazovka? Odstraníme viry, malware i spyware,
                systém zabezpečíme a počítač zbavíme prachu.
              </p>
              <p className="vb-card-price">590 Kč u nás v dílně · pevná cena</p>
            </article>

            <article className="vb-card">
              <h3 className="vb-card-title">Záchrana a zálohování dat</h3>
              <p className="vb-card-text">
                Fotky, faktury, diplomka — když disk odejde, data ještě nemusí.
                Obnovíme, co jde, a nastavíme zálohování, aby se to už neopakovalo.
              </p>
              <p className="vb-card-price">cena podle rozsahu · posouzení zdarma</p>
            </article>

            <article className="vb-card">
              <h3 className="vb-card-title">Instalace Windows a Linuxu</h3>
              <p className="vb-card-text">
                Čistá instalace nebo oprava poškozeného systému Windows 10/11
                i Linuxu Ubuntu, včetně ovladačů, aktualizací a přenosu vašich dat.
              </p>
              <p className="vb-card-price">v ceně opravy 690 Kč</p>
            </article>

            <article className="vb-card">
              <h3 className="vb-card-title">Zapomenuté heslo Windows</h3>
              <p className="vb-card-text">
                Zabezpečili jste si přihlášení a heslo si nevzpomenete? Technik
                ho odstraní během pár minut — bez ztráty dokumentů a nastavení.
              </p>
              <p className="vb-card-price">490 Kč · na počkání</p>
            </article>

            <article className="vb-card">
              <h3 className="vb-card-title">Sestavení PC na míru</h3>
              <p className="vb-card-text">
                Poradíme s výběrem komponent, nakoupíme je, počítač složíme
                a zahoříme testem. Na sestavu od našeho technika dáváme
                záruku 3 roky.
              </p>
              <p className="vb-card-price">složení + test · záruka 3 roky</p>
            </article>
          </div>

          <p className="vb-remote">
            <strong>Pro firmy:</strong> menší závady vyřešíme i vzdáleně přes
            TeamViewer — stačí připojení k internetu a jeden telefonát. Nemusíte
            nikam vozit ani jeden počítač.
          </p>
        </div>
      </section>

      {/* ================= DŮVĚRA / JAK TO CHODÍ ================= */}
      <section className="vb-section vb-section-alt" id="duvera" aria-labelledby="duvera-h">
        <div className="vb-shell">
          <div className="vb-trust-grid">
            <div className="vb-trust-copy">
              <h2 className="vb-section-title" id="duvera-h">Dílna, ne pult s formulářem</h2>
              <p className="vb-trust-text">
                Jsme malý servis v Brně a opravujeme počítače, ne účtenky.
                Neúčtujeme hodiny — zaplatíte pevnou cenu, ať oprava trvá
                dvacet minut nebo celé odpoledne. Komponenty bereme od
                ověřených brněnských velkoskladů, takže nečekáte týdny na díl
                z druhého konce republiky.
              </p>
              <p className="vb-trust-text">
                Když se při diagnostice ukáže, že se oprava nevyplatí, řekneme
                vám to na rovinu — a poradíme, jaký počítač si místo toho pořídit.
              </p>
              <blockquote className="vb-quote">
                <p>
                  „Notebook mi zamrzal a doma už z něj nikdo nechtěl nic
                  vymáčknout. Odpoledne jsem ho přivezl, druhý den fungoval —
                  a data zůstala. Cena přesně podle domluvy.“
                </p>
                <cite>— pan Novotný, Brno-Židenice</cite>
              </blockquote>
            </div>

            <ol className="vb-steps" aria-label="Jak oprava probíhá">
              <li className="vb-step">
                <span className="vb-step-num" aria-hidden="true">1</span>
                <div>
                  <h3 className="vb-step-title">Zavoláte nebo přinesete</h3>
                  <p className="vb-step-text">
                    Popíšete závadu po telefonu, nebo počítač rovnou donesete
                    k nám do dílny v Brně. Objednání předem stačí telefonem.
                  </p>
                </div>
              </li>
              <li className="vb-step">
                <span className="vb-step-num" aria-hidden="true">2</span>
                <div>
                  <h3 className="vb-step-title">Diagnostika zdarma</h3>
                  <p className="vb-step-text">
                    Závadu najdeme a řekneme vám přesnou cenu opravy dřív,
                    než se do ní pustíme. Bez souhlasu nic neměníme.
                  </p>
                </div>
              </li>
              <li className="vb-step">
                <span className="vb-step-num" aria-hidden="true">3</span>
                <div>
                  <h3 className="vb-step-title">Oprava a test</h3>
                  <p className="vb-step-text">
                    Opravíme, vyčistíme a počítač zahoříme testem, aby závada
                    nepřišla nazpátek. Běžné výměny zvládáme na počkání.
                  </p>
                </div>
              </li>
              <li className="vb-step">
                <span className="vb-step-num" aria-hidden="true">4</span>
                <div>
                  <h3 className="vb-step-title">Záruka černá na bílém</h3>
                  <p className="vb-step-text">
                    Na vyměněné díly 2 roky, na počítače složené u nás 3 roky.
                    Kdyby cokoli, jsme pořád na stejném čísle: 739 434 849.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}
