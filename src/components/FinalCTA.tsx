import { whatsappUrl } from "../lib/site-config";

export function FinalCTA() {
  return (
    <section className="bg-white py-12 sm:py-14 lg:py-16">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[14px] bg-brand-900 px-6 py-8 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
          {/* subtle texture */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: "radial-gradient(white 1px, transparent 1px)",
              backgroundSize: "24px 24px",
            }}
            aria-hidden="true"
          />

          <div className="relative grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h2 className="font-display text-[22px] font-bold leading-tight tracking-[-0.02em] text-white sm:text-[24px]">
                Precisa de mais informações?
              </h2>
              <p className="mt-3 max-w-[480px] text-[14px] leading-6 text-white/70">
                Mande uma mensagem no WhatsApp e conte como é o seu ambiente. A equipe te orienta.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:justify-end">
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-[46px] items-center justify-center rounded-full bg-white px-7 text-[14.5px] font-semibold text-brand-900 transition-colors duration-200 hover:bg-slate-100 active:bg-slate-200"
              >
                Falar com a Frigelar
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="ml-2">
                  <path d="M7 12H17M17 12L13 8M17 12L13 16" stroke="#0B2A4A" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <span className="hidden text-[13px] font-medium text-white/60 sm:inline">ou ligue</span>
              <a
                href="tel:+5575998538643"
                className="inline-flex h-[46px] items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 text-[14px] font-semibold text-white transition-colors duration-200 hover:bg-white/10 active:bg-white/10"
              >
                (75) 99853-8643
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
