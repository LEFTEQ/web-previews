export default function VideoSection() {
  return (
    <section id="video" className="video-section" aria-labelledby="video-title">
      <div className="wrap video-grid">
        <div>
          <p className="eyebrow eyebrow-light">Video</p>
          <h2 id="video-title" className="section-title">
            Atmosféra akce
          </h2>
          <p>
            Krátké ilustrační video vytvořené pomocí AI pro tento koncept webu. Nezobrazuje skutečnou akci, místo
            ani lidi a není ukázkou realizace firmy.
          </p>
          <p className="video-alt">
            Video se nespouští samo. <a href="/brand-video.mp4">Otevřít video samostatně</a>
          </p>
        </div>
        <figure className="video-frame">
          <video className="video-el" controls muted playsInline preload="none" poster="/hero.webp">
            <source src="/brand-video.mp4" type="video/mp4" />
            Váš prohlížeč video nepodporuje. <a href="/brand-video.mp4">Stáhnout video</a>.
          </video>
          <img className="video-poster" src="/hero.webp" alt="Statický náhled ilustračního AI videa" loading="lazy" decoding="async" />
          <figcaption className="ai-tag">Ilustrační AI video</figcaption>
        </figure>
      </div>
    </section>
  );
}
