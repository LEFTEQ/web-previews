import { useId, useState } from 'react';
import { EMAIL, PHONES, SERVICES } from '../data.js';
import { Eyebrow, MailIcon, PhoneIcon } from './Icons.jsx';
import { SoilEdge } from './SoilEdge.jsx';

const OTHER = 'Jiné / zatím nevím';

function buildMailto({ place, workType, desc, name, contact }) {
  const subject = `Poptávka: ${workType || 'stavební práce'}${place ? ` – ${place}` : ''}`;
  const body = [
    'Dobrý den,',
    'posílám poptávku.',
    '',
    `Místo stavby: ${place || '-'}`,
    `Druh práce: ${workType || '-'}`,
    `Popis: ${desc || '-'}`,
    '',
    `Jméno: ${name || '-'}`,
    `Kontakt pro odpověď: ${contact || '-'}`,
  ].join('\n');
  return `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function Inquiry({ workType, setWorkType }) {
  const uid = useId();
  const [place, setPlace] = useState('');
  const [desc, setDesc] = useState('');
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [prepared, setPrepared] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    window.location.href = buildMailto({ place, workType, desc, name, contact });
    setPrepared(true);
  };

  const f = (k) => `${uid}-${k}`;

  return (
    <section id="poptavka" data-layer="inquiry" aria-labelledby="inquiry-title" className="on-dark relative bg-pond text-stake">
      <SoilEdge variant={2} className="text-pond" />
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
          <div className="min-w-0">
            <Eyebrow depth="−2,6" name="Spodní voda" dark />
            <h2 id="inquiry-title" className="mt-3 font-display text-[clamp(1.8rem,4.4vw,3rem)] font-extrabold leading-[1.05] tracking-tight">
              Nabídka na míru
            </h2>
            <p className="mt-4 text-stake/90">
              Popište, kde a co je potřeba udělat. Formulář nic neodesílá: připraví e-mail ve vašem poštovním programu, který si zkontrolujete a odešlete sami. Často je nejrychlejší rovnou zavolat.
            </p>
            <ul className="mt-6 grid gap-3">
              {PHONES.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="inline-flex items-center gap-3 py-1 text-lg font-semibold text-stake no-underline">
                    <PhoneIcon /> <span className="font-mono">{p.full}</span>
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${EMAIL}`} className="inline-flex items-center gap-3 py-1 text-lg font-semibold text-stake no-underline">
                  <MailIcon /> <span className="font-mono">{EMAIL}</span>
                </a>
              </li>
            </ul>
            <figure className="mt-8 hidden lg:block">
              <img
                src="/section-2.webp"
                alt="Ilustrační obrázek stavby inženýrských sítí (vytvořeno AI)"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full rounded-lg object-cover"
              />
              <figcaption className="mt-2 text-sm text-stake/75">Ilustrační obrázek vytvořený AI — nejde o snímek z realizace firmy.</figcaption>
            </figure>
          </div>

          <form
            action={`mailto:${EMAIL}`}
            method="post"
            encType="text/plain"
            onSubmit={onSubmit}
            className="min-w-0 rounded-xl bg-stake p-5 text-loam sm:p-8"
            aria-describedby={f('note')}
          >
            <p id={f('note')} className="text-sm text-loam/80">
              Všechna pole jsou nepovinná. Údaje zůstávají ve vašem prohlížeči, dokud e-mail sami neodešlete.
            </p>
            <div className="mt-5 grid gap-5">
              <div>
                <label htmlFor={f('place')} className="field-label">Místo stavby</label>
                <input id={f('place')} name="misto" className="field" autoComplete="address-level2" placeholder="obec, ulice" value={place} onChange={(e) => setPlace(e.target.value)} />
              </div>
              <div>
                <label htmlFor={f('type')} className="field-label">Druh práce</label>
                <select id={f('type')} name="druh" className="field" value={workType} onChange={(e) => setWorkType(e.target.value)}>
                  <option value="">Vyberte…</option>
                  {SERVICES.map((s) => (
                    <option key={s.id} value={s.title}>{s.title}</option>
                  ))}
                  <option value={OTHER}>{OTHER}</option>
                </select>
              </div>
              <div>
                <label htmlFor={f('desc')} className="field-label">Popis</label>
                <textarea id={f('desc')} name="popis" rows={5} className="field min-h-[8rem]" placeholder="Co je potřeba udělat, přístup na pozemek, terén…" value={desc} onChange={(e) => setDesc(e.target.value)} />
              </div>
              <div>
                <label htmlFor={f('name')} className="field-label">Jméno</label>
                <input id={f('name')} name="jmeno" className="field" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label htmlFor={f('contact')} className="field-label">Telefon nebo e-mail pro odpověď</label>
                <input id={f('contact')} name="kontakt" className="field" autoComplete="tel" value={contact} onChange={(e) => setContact(e.target.value)} />
              </div>
              <button type="submit" className="btn btn-cta w-full !min-h-14 text-lg sm:w-auto sm:justify-self-start">
                <MailIcon /> Připravit e-mail s poptávkou
              </button>
            </div>
            <p aria-live="polite" className="mt-4 text-sm text-loam/85">
              {prepared
                ? `Pokusili jsme se otevřít váš e-mailový program s předvyplněnou zprávou. Zprávu zkontrolujte a odešlete. Pokud se nic neotevřelo, napište na ${EMAIL} nebo zavolejte.`
                : ''}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
