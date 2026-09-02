import { Reveal } from "./Reveal";

export function BannerShowcase() {
  return (
    <section className="bg-[#F7F9FC] py-8 sm:py-10" aria-label="Banner Frigelar">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="overflow-hidden rounded-[12px] border border-slate-200 bg-white shadow-sm">
            <img
              src="/banner.jpg"
              alt="Frigelar Ar Condicionados — Conforto, qualidade e segurança para o seu ambiente. Soluções completas em ar condicionado para residências, comércios e indústrias. Instalação, manutenção, assistência técnica e higienização."
              width={1200}
              height={575}
              loading="lazy"
              decoding="async"
              className="h-auto w-full object-cover"
            />
          </div>
          <p className="mt-3 text-center text-[12px] text-slate-500">
            Soluções em ar-condicionado para residências, comércios e indústrias — Cícero Dantas, BA
          </p>
        </Reveal>
      </div>
    </section>
  );
}
