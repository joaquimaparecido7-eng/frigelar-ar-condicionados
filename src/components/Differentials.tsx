import { siteConfig } from "../lib/site-config";

export function Differentials() {
  return (
    <section className="border-y border-slate-200 bg-white">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 py-10 sm:py-12 lg:flex-row lg:items-start lg:justify-between lg:py-12">
          <div className="shrink-0 lg:max-w-[300px]">
            <h2 className="font-display text-[18px] font-bold tracking-[-0.02em] text-slate-900">
              Atendimento direto, aqui na cidade
            </h2>
            <p className="mt-2.5 text-[13.5px] leading-6 text-slate-600">
              Você resolve com quem está perto, com atenção ao seu ambiente.
            </p>
          </div>

          <div className="grid flex-1 gap-0 divide-y divide-slate-100 border-t border-slate-100 lg:ml-10 lg:grid-cols-2 lg:divide-y-0 lg:border-t-0">
            {siteConfig.diferenciais.map((item, i) => (
              <div
                key={item.titulo}
                className={`py-5 lg:px-6 lg:py-5 ${i % 2 === 0 ? "lg:border-r lg:border-slate-100" : ""} ${i < 2 ? "lg:border-b lg:border-slate-100" : ""}`}
              >
                <div className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M6 12L10 16L18 8" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <div>
                    <h3 className="text-[13.5px] font-semibold text-slate-900">{item.titulo}</h3>
                    <p className="mt-1 text-[13px] leading-5 text-slate-600">{item.texto}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
