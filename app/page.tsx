import { LaneSpine } from "./motion";

export default function Page() {
  return (
    <main className="page">
      <LaneSpine />

      <div className="topbar">
        <a className="brand" href="#">
          AUTOŠKOLA <span className="shield shield--sm">M2</span>
        </a>
        <a className="brand__tel" href="tel:+420777111222">
          +420 777 111 222
        </a>
      </div>

      <header className="band hero">
        <div className="wrap">
          <p className="eyebrow">AUTOŠKOLA M2 · PLZEŇ · SKUPINA&nbsp;B · L17</p>

          <div className="lane-grid hero__grid">
            <div className="lane lane--right">
              <h1 className="hero__title">
                ŘIDIČÁK<br />
                NA AUTO<br />
                OD <span className="num">17</span> LET
              </h1>
            </div>

            <div className="lane lane--left">
              <div className="shield shield--l17" aria-hidden="true">L17</div>
              <p className="hero__sub">
                Ježdění v reálném provozu s mentorem. Začni už v sedmnácti
                a nasbírej kilometry ještě před osmnáctkou — v den narozenin
                můžeš vyrazit sám.
              </p>
              <a className="btn" href="#l17">Více o L17</a>
            </div>
          </div>
        </div>
      </header>

      <section className="band" aria-labelledby="vycvik">
        <div className="wrap">
          <p className="eyebrow">VÝCVIK · SKUPINA&nbsp;B</p>
          <h2 className="title" id="vycvik">Bez zbytečných průtahů</h2>

          <div className="lane-grid section__grid">
            <div className="lane lane--right">
              <ul className="benefits">
                <li className="benefit">Zahájení výcviku hned, bez čekání na naplněný termín.</li>
                <li className="benefit">Jízdy i o víkendu a státních svátcích.</li>
                <li className="benefit">Termíny přizpůsobíme vašim časovým možnostem.</li>
                <li className="benefit">Splátky bez navýšení — první v den přihlášení, pak dle dohody.</li>
                <li className="benefit">Závěrečné zkoušky 2× do měsíce.</li>
                <li className="benefit">Neomezený počet kilometrů během výcviku.</li>
                <li className="benefit">Máte čas na výuku? Zkouška do jednoho měsíce.</li>
              </ul>
            </div>

            <div className="lane lane--left">
              <div className="cenik">
                <p className="eyebrow eyebrow--dark">CENÍK</p>
                <div className="cenik__row">
                  <span className="cenik__name">Skupina B (auto)</span>
                  <span className="cenik__price">22&nbsp;000&nbsp;Kč</span>
                </div>
                <div className="cenik__row">
                  <span className="cenik__name">Řidičák L17 (od 17 let)</span>
                  <span className="cenik__price">22&nbsp;000&nbsp;Kč</span>
                </div>
                <div className="cenik__row">
                  <span className="cenik__name">Kondiční jízda</span>
                  <span className="cenik__price">650&nbsp;Kč&nbsp;/&nbsp;45&nbsp;min</span>
                </div>
                <div className="cenik__row cenik__row--green">
                  <span className="cenik__name">Sleva pro absolventy motorky</span>
                  <span className="cenik__price">−2&nbsp;000&nbsp;Kč</span>
                </div>
                <p className="cenik__note">A to stále za stejnou cenu — žádné příplatky za jízdy navíc.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="band" aria-labelledby="pobocky">
        <div className="wrap">
          <p className="eyebrow">POBOČKY · JEDNA CENA</p>
          <h2 className="title" id="pobocky">Praha i Plzeň, stejný ceník</h2>

          <div className="lane-grid section__grid">
            <div className="lane lane--right">
              <div className="branch">
                <div className="shield shield--route" aria-hidden="true">P</div>
                <h3 className="branch__name">Autoškola Praha</h3>
                <p className="branch__meta">Skupina B · L17 · kondiční jízdy</p>
                <a className="branch__tel" href="tel:+420777111222">+420 777 111 222</a>
              </div>
            </div>

            <div className="lane lane--left">
              <div className="branch">
                <div className="shield shield--route" aria-hidden="true">PL</div>
                <h3 className="branch__name">Autoškola Plzeň</h3>
                <p className="branch__meta">Ukázková 123, Plzeň</p>
                <a className="branch__tel" href="tel:+420777111222">+420 777 111 222</a>
                <a className="branch__tel branch__tel--mail" href="mailto:info@example.cz">info@example.cz</a>
              </div>
            </div>
          </div>

          <div className="l17" id="l17">
            <div className="shield shield--l17 shield--inline" aria-hidden="true">L17</div>
            <div className="l17__body">
              <h3 className="l17__title">Řidičák od 17 let</h3>
              <p className="l17__text">
                Začni s výcvikem už v sedmnácti. Po zkoušce jezdíš s vlastním
                mentorem — zkušeným řidičem z rodiny nebo okolí — a nasbíráš
                praxi v reálném provozu ještě před osmnáctkou. Osmnácté
                narozeniny pak vyrazíš na silnici sám a jistě.
              </p>
            </div>
          </div>

          <dl className="stats">
            <div className="stat">
              <dt className="stat__num">17</dt>
              <dd className="stat__label">věk startu (L17)</dd>
            </div>
            <div className="stat">
              <dt className="stat__num">2×</dt>
              <dd className="stat__label">zkoušky měsíčně</dd>
            </div>
            <div className="stat">
              <dt className="stat__num">0</dt>
              <dd className="stat__label">Kč navýšení splátek</dd>
            </div>
            <div className="stat">
              <dt className="stat__num">∞</dt>
              <dd className="stat__label">km ve výcviku</dd>
            </div>
          </dl>
        </div>
      </section>
    </main>
  );
}
