import { siteConfig } from "../lib/site-config";

export function About() {
  return (
    <section id="sobre" className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 xl:gap-14">
          {/* Text */}
          <div>
            <p className="text-[11px] font-medium tracking-[0.1em] text-slate-500">SOBRE A FRIGELAR</p>
            <h2 className="mt-2 font-display text-[24px] font-bold leading-[1.05] tracking-[-0.02em] text-slate-900 sm:text-[28px]">
              Presença local,
              <br />
              <span className="text-brand-800">atendimento próximo</span>
            </h2>

            <div className="mt-6 space-y-4 text-[14px] leading-7 text-slate-600">
              <p>
                A <span className="font-semibold text-slate-900">Frigelar Ar Condicionados</span> está em Cícero Dantas e atende
                quem procura ar-condicionado, climatização e refrigeração.
              </p>
              <p>
                Aqui você tira dúvidas, compara opções e escolhe com calma, com orientação conforme o seu ambiente — na
                loja física ou por WhatsApp e telefone.
              </p>
              <p>
                A loja fica no centro, na
                <span className="font-medium text-slate-800"> Av. Antônio Carlos Magalhães, 1264</span>, com fácil acesso para
                quem prefere ver os produtos de perto.
              </p>
            </div>

            <div className="mt-8 border-t border-slate-100 pt-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="border-l-2 border-brand-900 pl-4">
                  <p className="text-[13px] font-semibold text-slate-900">Loja no centro</p>
                  <p className="mt-1 text-[13px] leading-5 text-slate-600">Fácil de encontrar, no Centro.</p>
                </div>
                <div className="border-l-2 border-slate-300 pl-4">
                  <p className="text-[13px] font-semibold text-slate-900">Fale com a loja</p>
                  <p className="mt-1 text-[13px] leading-5 text-slate-600">WhatsApp e telefone à disposição.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual placeholder */}
          <div className="relative">
            <div className="overflow-hidden rounded-[12px] border border-slate-200 bg-white">
              {/* top label */}
              <div className="flex items-center justify-between border-b border-slate-100 bg-slate-50 px-4 py-3 sm:px-5">
                <span className="text-[11px] font-medium tracking-[0.08em] text-slate-500">FOTO DA LOJA</span>
                <span className="text-[11px] text-slate-400">Espaço reservado</span>
              </div>

              {/* placeholder area */}
              <div className="relative aspect-[4/3] bg-slate-50 p-6 sm:p-7 lg:aspect-[1.15/1]">
                <div className="flex h-full flex-col justify-center rounded-[10px] border border-slate-200 bg-white p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-white">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M4 16L8.5 10.5L12 14L15 11L20 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="15.5" cy="8.5" r="2" stroke="white" strokeWidth="1.5" />
                        <rect x="4" y="5" width="16" height="13" rx="2" stroke="white" strokeWidth="1.5" />
                      </svg>
                    </span>
                    <p className="text-[13px] font-semibold text-slate-900">Espaço reservado para foto da loja</p>
                  </div>
                  <p className="mt-3 text-[13px] leading-5 text-slate-600">
                    Fachada, interior ou equipe — assim que a foto chegar, ela entra aqui.
                  </p>
                </div>
              </div>
            </div>

            {/* side card */}
            <div className="mt-4 flex items-center gap-3 rounded-[10px] border border-slate-200 bg-slate-50 px-4 py-3">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z" stroke="white" strokeWidth="1.6" />
                  <path d="M12 21C14.5 17.5 18 13.2 18 10.5C18 7.18629 15.3137 4.5 12 4.5C8.68629 4.5 6 7.18629 6 10.5C6 13.2 9.5 17.5 12 21Z" stroke="white" strokeWidth="1.6" />
                </svg>
              </span>
              <p className="text-[13px] font-medium text-slate-800">
                {siteConfig.endereco.logradouro} <span className="font-normal text-slate-500">· {siteConfig.endereco.cidade}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
