import { siteConfig, whatsappUrl, rotaUrl } from "../lib/site-config";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="inicio" className="overflow-hidden border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 py-8 sm:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:py-12 xl:py-16">
          {/* Left */}
          <Reveal>
            <div className="flex flex-col justify-center">
              <p className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-[11px] font-medium tracking-[0.06em] text-slate-600">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-600" aria-hidden="true" />
                CÍCERO DANTAS — BA · LOJA FÍSICA NA AV. ACM, 1264
              </p>

              <h1 className="mt-5 font-display text-[28px] font-bold leading-[0.98] tracking-[-0.03em] text-brand-950 sm:text-[36px] lg:text-[42px] xl:text-[44px]">
                Frigelar
                <span className="block font-display text-[28px] font-medium tracking-[-0.02em] text-slate-700 sm:text-[36px] lg:text-[42px] xl:text-[44px]">Ar Condicionados</span>
              </h1>

              <p className="mt-4 max-w-[520px] text-[14.5px] leading-6 text-slate-600 sm:text-[15.5px] sm:leading-7">
                Ar-condicionado, climatização e refrigeração em Cícero Dantas, com atendimento na loja e orientação para o seu ambiente.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[46px] items-center justify-center rounded-full bg-brand-900 px-7 text-[14.5px] font-semibold text-white transition-colors duration-200 hover:bg-brand-800 active:bg-brand-950 focus-visible:ring-2 focus-visible:ring-brand-500"
                >
                  Falar no WhatsApp
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="ml-2">
                    <path d="M7 12H17M17 12L13 8M17 12L13 16" stroke="white" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a
                  href={rotaUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-[46px] items-center justify-center rounded-full border border-slate-300 bg-white px-7 text-[14.5px] font-semibold text-slate-800 transition-colors duration-200 hover:border-slate-400 hover:bg-slate-50 active:bg-slate-100"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mr-2">
                    <path d="M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z" stroke="#0B2A4A" strokeWidth="1.6" />
                    <path d="M12 21C14.5 17.5 18 13.2 18 10.5C18 7.18629 15.3137 4.5 12 4.5C8.68629 4.5 6 7.18629 6 10.5C6 13.2 9.5 17.5 12 21Z" stroke="#0B2A4A" strokeWidth="1.6" />
                  </svg>
                  Como chegar
                </a>
              </div>

              <div className="mt-6 flex items-center gap-4 border-t border-slate-100 pt-5">
                <div className="flex items-center gap-2 text-[13px] text-slate-600">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-white">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 8.5V12L14.5 14" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                      <path d="M12 20C16 20 20 16 20 12C20 8 16 4 12 4C8 4 4 8 4 12C4 16 8 20 12 20Z" stroke="white" strokeWidth="1.5" />
                    </svg>
                  </span>
                  Atendimento local
                </div>
                <span className="h-4 w-px bg-slate-200" aria-hidden="true" />
                <div className="text-[13px] leading-4 text-slate-600">
                  <span className="block font-semibold text-slate-800">{siteConfig.contato.telefone}</span>
                  <span className="text-[12px]">WhatsApp e telefone</span>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right visual */}
          <Reveal delay={150}>
            <div className="relative">
            <div className="relative overflow-hidden rounded-[14px] border border-slate-200 bg-brand-900 p-6 sm:p-7 lg:min-h-[400px]">
              {/* subtle texture */}
              <div
                className="pointer-events-none absolute inset-0 opacity-[0.04]"
                style={{
                  backgroundImage:
                    "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
                  backgroundSize: "28px 28px",
                }}
                aria-hidden="true"
              />
              <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/5 blur-2xl" aria-hidden="true" />
              {/* top bar */}
              <div className="relative flex items-center justify-between">
                <span className="text-[11px] font-medium tracking-[0.1em] text-white/60">CLIMATIZAÇÃO · REFRIGERAÇÃO</span>
                <span className="hidden rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-white/80 sm:inline-flex">Cícero Dantas — BA</span>
              </div>

              <div className="relative mt-8 sm:mt-9">
                <p className="font-display text-[21px] font-semibold leading-tight text-white sm:text-[24px]">
                  Atendimento na loja
                  <br />
                  <span className="font-normal text-white/75">e também por mensagem</span>
                </p>
                <p className="mt-3 max-w-[320px] text-[13px] leading-5 text-white/65">
                  Venha conhecer os produtos ou tire suas dúvidas com a equipe local.
                </p>
              </div>

              {/* Technical illustration - CSS only */}
              <div className="relative mt-7 rounded-[12px] bg-white p-4 sm:mt-8 sm:p-4">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-[0.08em] text-slate-500">SOLUÇÕES</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                </div>
                <div className="mt-3.5 grid grid-cols-3 gap-2.5">
                  {[
                    { k: "Ar", v: "condicionado", c: "bg-brand-900" },
                    { k: "Clima", v: "tização", c: "bg-brand-600" },
                    { k: "Refri", v: "geração", c: "bg-slate-800" },
                  ].map((it) => (
                    <div key={it.k} className="rounded-lg border border-slate-200 bg-slate-50 p-3">
                      <div className={`h-1 w-7 rounded-full ${it.c}`} aria-hidden="true" />
                      <div className="mt-3 text-[13px] font-semibold leading-none text-slate-900">
                        {it.k}
                        <span className="font-normal text-slate-600">{it.v}</span>
                      </div>
                      <div className="mt-1.5 flex gap-1">
                        <span className="h-1 w-6 rounded-full bg-slate-300" />
                        <span className="h-1 w-3 rounded-full bg-slate-200" />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-3.5 flex items-center gap-2 rounded-full bg-slate-50 px-3 py-2">
                  <span className="flex h-5 w-5 items-center justify-center rounded-full bg-brand-900 text-white">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M12 7V12L15 14" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
                      <circle cx="12" cy="12" r="8" stroke="white" strokeWidth="1.4" />
                    </svg>
                  </span>
                  <span className="text-[12px] font-medium text-slate-700">Produtos e acessórios · linha complementar</span>
                </div>
              </div>
            </div>

            {/* floating address card */}
            <div className="relative z-10 -mt-3 mx-3 flex items-center gap-3 rounded-[12px] border border-slate-200 bg-white px-4 py-3 shadow-sm sm:mx-4">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-50 text-brand-900">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z" stroke="#0B2A4A" strokeWidth="1.6" />
                  <path d="M12 21C14.5 17.5 18 13.2 18 10.5C18 7.18629 15.3137 4.5 12 4.5C8.68629 4.5 6 7.18629 6 10.5C6 13.2 9.5 17.5 12 21Z" stroke="#0B2A4A" strokeWidth="1.6" />
                </svg>
              </span>
              <div className="min-w-0">
                <p className="text-[13px] font-semibold leading-none text-slate-900">Loja física</p>
                <p className="mt-1 truncate text-[12.5px] leading-none text-slate-600">Av. ACM, 1264 — Centro · Cícero Dantas</p>
              </div>
              <a
                href={rotaUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto hidden shrink-0 rounded-full bg-slate-900 px-3.5 py-1.5 text-[12px] font-semibold text-white sm:inline-flex"
              >
                Rota
              </a>
            </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
