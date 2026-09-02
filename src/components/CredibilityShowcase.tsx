import { Reveal } from "./Reveal";

export function CredibilityShowcase() {
  return (
    <section className="bg-white py-10 sm:py-12" aria-label="Nossos serviços">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[12px] border border-slate-200 bg-white shadow-sm">
            <img
              src="/credibilidade.jpg"
              alt="Frigelar Ar Condicionados — Nossos serviços: Instalação, Manutenção, Assistência Técnica e Higienização. Trabalhamos com as melhores marcas: Midea, Philco, Gree, TCL, Hitachi, Samsung, Carrier, LG, Agratto."
              width={1200}
              height={600}
              loading="lazy"
              decoding="async"
              className="h-auto w-full object-cover"
            />
          </div>
        </Reveal>
        <div className="mx-auto mt-6 max-w-[720px] text-center">
          <Reveal delay={120}>
            <p className="text-[13px] leading-6 text-slate-600">
              Atendimento local em Cícero Dantas com equipe própria — instalação com segurança, manutenção preventiva e
              corretiva, assistência para todas as marcas e higienização completa.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
