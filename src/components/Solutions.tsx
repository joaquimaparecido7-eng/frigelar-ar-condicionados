import { siteConfig, whatsappUrl } from "../lib/site-config";
import { Reveal } from "./Reveal";

export function Solutions() {
  const primeiro = siteConfig.solucoes[0];

  return (
    <section id="solucoes" className="bg-[#F7F9FC] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11px] font-medium tracking-[0.1em] text-slate-500">SOLUÇÕES</p>
              <h2 className="mt-2 font-display text-[24px] font-bold leading-[1.05] tracking-[-0.02em] text-slate-900 sm:text-[28px]">
                Soluções para sua
                <span className="block font-display font-bold text-brand-800">climatização</span>
              </h2>
            </div>
            <p className="max-w-[400px] text-[14px] leading-6 text-slate-600">
              Conte o seu caso e a equipe ajuda você a encontrar o que precisa — sem complicação.
            </p>
          </div>
        </Reveal>

        {/* Editorial layout */}
        <div className="mt-8 grid gap-4 lg:mt-9 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <article className="group relative h-full overflow-hidden rounded-[12px] border border-slate-200 bg-white p-6 sm:p-6 lg:p-7 transition-shadow duration-300 hover:shadow-sm">
              <div className="absolute left-0 top-0 h-full w-[3px] bg-brand-900" aria-hidden="true" />
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="inline-flex rounded-full bg-slate-50 px-2.5 py-1 text-[11px] font-medium tracking-[0.06em] text-slate-600">
                    {primeiro.detalhe.toUpperCase()}
                  </span>
                  <h3 className="mt-3 font-display text-[20px] font-bold tracking-[-0.02em] text-slate-900">{primeiro.nome}</h3>
                </div>
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-brand-900">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6 12H18M18 12L13 7M18 12L13 17" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
              <p className="mt-3 max-w-[480px] text-[14px] leading-6 text-slate-600">{primeiro.descricao}</p>
              <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-4">
                <span className="text-[13px] font-medium text-slate-600">Informe seu ambiente</span>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-auto inline-flex min-h-[44px] items-center justify-center rounded-full bg-brand-900 px-4 py-2 text-[13px] font-semibold text-white transition-colors duration-200 hover:bg-brand-800 active:bg-brand-950"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </article>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-5">
            <article className="relative h-full overflow-hidden rounded-[12px] bg-brand-900 p-6 text-white sm:p-6 lg:p-7">
              <div className="absolute inset-0 bg-brand-900" aria-hidden="true" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.06] to-transparent" aria-hidden="true" />
              <div className="relative">
                <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-2.5 py-1 text-[11px] font-medium tracking-[0.06em] text-white/85">
                  {siteConfig.solucoes[1].detalhe.toUpperCase()}
                </span>
                <h3 className="mt-3 font-display text-[19px] font-bold tracking-[-0.02em]">{siteConfig.solucoes[1].nome}</h3>
                <p className="mt-3 text-[14px] leading-6 text-white/75">{siteConfig.solucoes[1].descricao}</p>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-full bg-white px-4 py-2 text-[13px] font-semibold text-brand-900 transition-colors duration-200 hover:bg-slate-100 active:bg-slate-200"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </article>
          </Reveal>

          <Reveal delay={150} className="lg:col-span-6">
            <article className="relative h-full overflow-hidden rounded-[12px] border border-slate-200 bg-white p-6 sm:p-6 lg:p-7 transition-shadow duration-300 hover:shadow-sm">
              <div className="flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 3V21M8 7H16M8 17H16" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
                <span className="text-[11px] font-medium tracking-[0.08em] text-slate-500">{siteConfig.solucoes[2].detalhe.toUpperCase()}</span>
              </div>
              <h3 className="mt-3.5 font-display text-[18px] font-bold tracking-[-0.02em] text-slate-900">{siteConfig.solucoes[2].nome}</h3>
              <p className="mt-2 text-[14px] leading-6 text-slate-600">{siteConfig.solucoes[2].descricao}</p>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex min-h-[44px] items-center gap-1.5 py-2 text-[13.5px] font-semibold text-brand-700 transition-colors hover:text-brand-900"
              >
                Falar no WhatsApp
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M7 12H17M17 12L13 8M17 12L13 16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </article>
          </Reveal>

          <Reveal delay={200} className="lg:col-span-6">
            <article className="relative h-full overflow-hidden rounded-[12px] border border-slate-200 bg-slate-50 p-6 sm:p-6 lg:p-7">
              <span className="text-[11px] font-medium tracking-[0.08em] text-slate-500">{siteConfig.solucoes[3].detalhe.toUpperCase()}</span>
              <h3 className="mt-3 font-display text-[18px] font-bold tracking-[-0.02em] text-slate-900">{siteConfig.solucoes[3].nome}</h3>
              <p className="mt-2 text-[14px] leading-6 text-slate-600">{siteConfig.solucoes[3].descricao}</p>
              <div className="mt-4 flex gap-2">
                <span className="h-1 w-12 rounded-full bg-brand-900" aria-hidden="true" />
                <span className="h-1 w-5 rounded-full bg-slate-300" aria-hidden="true" />
                <span className="h-1 w-5 rounded-full bg-slate-200" aria-hidden="true" />
              </div>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-[44px] items-center justify-center rounded-full border border-slate-300 bg-white px-4 py-2 text-[13px] font-semibold text-slate-800 transition-colors duration-200 hover:bg-white hover:border-slate-400 active:bg-slate-50"
              >
                Falar no WhatsApp
              </a>
            </article>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <p className="mt-6 text-center text-[12.5px] leading-5 text-slate-500">
            Descrições gerais — para saber o ideal para o seu ambiente, fale com a loja.
          </p>
        </Reveal>
      </div>
    </section>
  );
}