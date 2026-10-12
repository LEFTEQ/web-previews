import { useInquiry } from "../inquiry.jsx";

export default function ThemeBand() {
  const { has, toggle } = useInquiry();
  const inCart = has("PRG-06");

  return (
    <section id="tematicke-programy" className="theme-band" aria-labelledby="tema-title">
      <div className="band-edge" aria-hidden="true" />
      <div className="wrap band-grid">
        <figure className="band-figure">
          <img src="/section-1.webp" alt="Ilustrační obrázek vytvořený pomocí AI k tematickým programům" loading="lazy" decoding="async" />
          <figcaption className="ai-tag">Ilustrační AI – nejde o realizaci firmy</figcaption>
          <span className="sticker sticker-scroll" aria-hidden="true">
            Téma
            <br />
            podle vás
          </span>
        </figure>
        <div className="band-copy">
          <p className="eyebrow eyebrow-light">PRG-06 · Tematické programy</p>
          <h2 id="tema-title" className="section-title">
            Jedno téma,
            <br />
            celá akce.
          </h2>
          <p>
            Tematický program spojuje výzdobu, soutěže a atrakce do jednoho příběhu. Hodí se na firemní akci,
            rodinný den, slavnost obce i program v obchodním centru.
          </p>
          <p>Jaké téma zvolit a co bude jeho součástí, popište v poptávce – podle místa, publika a délky akce.</p>
          <button type="button" className={`btn ${inCart ? "btn-done" : "btn-yellow"}`} aria-pressed={inCart} onClick={() => toggle("PRG-06")}>
            {inCart ? "V poptávce – odebrat" : "Přidat tematický program do poptávky"}
          </button>
        </div>
      </div>
      <div className="band-edge" aria-hidden="true" />
    </section>
  );
}
