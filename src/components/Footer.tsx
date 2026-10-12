import { EMAIL, PEOPLE } from "../data";
import StratumDivider from "./StratumDivider";

export default function Footer() {
  return (
    <footer className="on-dark bg-ink text-loess">
      <StratumDivider id="paticka" variant="ink" from="#D3C6AE" to="#1F2124" stroke="#8A6A4A" hatch="#4A4C50" />
      <div className="mx-auto max-w-[1440px] px-5 pb-10 pt-6 md:px-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-display wide-125 text-4xl font-extrabold">ZVČ</p>
            <p className="mt-2 text-loess/85">
              zemní a vodohospodářská činnost · demolice · autodoprava
            </p>
            <p className="mt-2 text-loess/85">Sídlo: Za Škodovkou 898, 503 11 Hradec Králové</p>
          </div>
          <nav aria-label="Patička">
            <ul className="space-y-2">
              <li><a href="#cinnosti" className="underline-offset-4 hover:underline">Činnosti</a></li>
              <li><a href="#prehled" className="underline-offset-4 hover:underline">Řez nabídkou</a></li>
              <li><a href="#poptavka" className="underline-offset-4 hover:underline">Poptávka</a></li>
              <li><a href="#kontakty" className="underline-offset-4 hover:underline">Kontakty</a></li>
            </ul>
          </nav>
          <div className="space-y-1">
            {PEOPLE.map((p) => (
              <p key={p.tel}>
                {p.name}:{" "}
                <a href={p.tel} className="tabular whitespace-nowrap underline">{p.phone}</a>
              </p>
            ))}
            <p>
              <a href={`mailto:${EMAIL}`} className="underline">{EMAIL}</a>
            </p>
          </div>
        </div>
        <div className="mt-10 border-t border-loess/25 pt-6 text-[14px] leading-relaxed text-loess/80">
          <p>
            <strong className="text-loess">Neoficiální koncept redesignu.</strong> Nejde o oficiální web ZVČ, s.r.o.
            Texty vycházejí pouze z veřejně uvedené nabídky činností a kontaktů firmy.
          </p>
          <p className="mt-2">
            Obrázky jsou ilustrační, vytvořené umělou inteligencí, a nezobrazují skutečné zakázky, techniku ani
            pracovníky firmy. Wordmark „ZVČ“ je typografický návrh, nikoli logo firmy.
          </p>
        </div>
      </div>
    </footer>
  );
}
