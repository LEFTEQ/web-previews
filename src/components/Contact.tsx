import { useState, type FormEvent } from "react";
import { EMAIL, PEOPLE, SEAT, SHOWROOM, mailto } from "../data";
import { MailIcon, PhoneIcon } from "./Icons";

const TOPICS = [
  "panDOMO podlahy a stěny",
  "Dřevěné podlahy",
  "Dveře",
  "Truhlářská výroba na míru",
  "Návštěva showroomu",
];

export function Contact() {
  const [prepared, setPrepared] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const topic = String(fd.get("tema") || TOPICS[0]);
    const body = [
      String(fd.get("zprava") || ""),
      "",
      `Jméno: ${fd.get("jmeno") || ""}`,
      `Telefon: ${fd.get("telefon") || ""}`,
    ].join("\n");
    window.location.href = mailto(`Poptávka: ${topic}`, body);
    setPrepared(true);
  };

  return (
    <section id="kontakt" aria-labelledby="kontakt-title" className="py-14 lg:py-20">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <p className="label">Kontakt</p>
        <h2 id="kontakt-title" className="mt-2 max-w-2xl text-4xl leading-tight sm:text-5xl">
          Přijďte se podívat — po domluvě.
        </h2>

        <div className="mt-10 grid gap-6 lg:grid-cols-12">
          {/* Showroom karta */}
          <div className="card relative p-6 sm:p-8 lg:col-span-7">
            <p className="label flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-dub" aria-hidden="true" /> Showroom
            </p>
            <address className="mt-2 not-italic">
              <span className="block font-display text-3xl text-grafit sm:text-4xl">{SHOWROOM.street}</span>
              <span className="block text-lg">{SHOWROOM.city}</span>
            </address>
            <p className="mt-3">{SHOWROOM.note} Showroom nemá pevnou otevírací dobu.</p>
            <a href={SHOWROOM.map} target="_blank" rel="noopener noreferrer" className="text-link mt-3 inline-block font-medium">
              Zobrazit na mapě (Mapy.cz, otevře se v novém okně)
            </a>

            <div className="mt-8 grid gap-6 border-t border-beton/15 pt-6 sm:grid-cols-2">
              {PEOPLE.map((p) => (
                <div key={p.tel}>
                  <p className="label">Kontaktní osoba</p>
                  <p className="mt-1 font-medium text-grafit">{p.name}</p>
                  <a href={`tel:${p.tel}`} className="phone-big">
                    <PhoneIcon className="h-6 w-6 shrink-0" />
                    <span>{p.display}</span>
                  </a>
                </div>
              ))}
            </div>

            <div className="mt-6 border-t border-beton/15 pt-6">
              <p className="label">E-mail</p>
              <a href={`mailto:${EMAIL}`} className="text-link mt-1 inline-flex items-center gap-2 break-all text-xl font-medium">
                <MailIcon className="h-5 w-5 shrink-0" />
                {EMAIL}
              </a>
            </div>

            <div className="mt-6 border-t border-beton/15 pt-6">
              <p className="label">Sídlo společnosti</p>
              <address className="mt-1 not-italic">
                {SEAT.company}
                <br />
                {SEAT.street}, {SEAT.city}
              </address>
            </div>
          </div>

          {/* Poptávka přes e-mailový program */}
          <div className="card p-6 sm:p-8 lg:col-span-5">
            <h3 className="text-2xl">Připravit poptávku e-mailem</h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed">
              Formulář jen předvyplní zprávu ve vašem e-mailovém programu. Z tohoto webu se nic neodesílá — zprávu
              odešlete sami.
            </p>
            <form className="mt-5 grid gap-4" action={`mailto:${EMAIL}`} method="post" encType="text/plain" onSubmit={onSubmit}>
              <label className="field">
                <span>Jméno</span>
                <input name="jmeno" autoComplete="name" />
              </label>
              <label className="field">
                <span>Telefon (nepovinné)</span>
                <input name="telefon" type="tel" autoComplete="tel" />
              </label>
              <label className="field">
                <span>Co řešíte</span>
                <select name="tema" defaultValue={TOPICS[0]}>
                  {TOPICS.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </label>
              <label className="field">
                <span>Zpráva</span>
                <textarea name="zprava" rows={4} />
              </label>
              <button type="submit" className="btn-primary justify-center">
                <MailIcon className="h-4 w-4" /> Otevřít v e-mailu
              </button>
              <p className="text-sm" aria-live="polite">
                {prepared
                  ? "Pokud se e-mailový program neotevřel, napište přímo na info@parket-pandomo.cz nebo zavolejte."
                  : ""}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
