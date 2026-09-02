import { siteConfig, whatsappUrl, rotaUrl } from "../lib/site-config";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-[#0B1E35] text-slate-200">
      <div className="mx-auto max-w-[1200px] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.9fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-white text-brand-900">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="M5 12.5C5 8.5 7.8 5.5 12 5.5C16.2 5.5 19 8.5 19 12.5C19 16.5 16.2 19.5 12 19.5C7.8 19.5 5 16.5 5 12.5Z" stroke="#0B2A4A" strokeWidth="1.7" />
                  <path d="M6.5 20C8.1 21 10 21.7 12 21.7C14 21.7 15.9 21 17.5 20" stroke="#1E5A8A" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M10 12.5H14M12 10.5V14.5" stroke="#0B2A4A" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              </span>
              <span className="leading-none">
                <span className="block font-display text-[14px] font-bold tracking-[-0.02em] text-white">FRIGELAR</span>
                <span className="block text-[11px] tracking-[0.1em] text-slate-400">AR CONDICIONADOS</span>
              </span>
            </div>
            <p className="mt-4 max-w-[360px] text-[13.5px] leading-6 text-slate-300">
              Soluções relacionadas a ar-condicionado, climatização e refrigeração em Cícero Dantas — BA.
            </p>
            <div className="mt-5 space-y-1.5 text-[13.5px]">
              <p className="text-slate-200">
                <a href={rotaUrl()} target="_blank" rel="noopener noreferrer" className="hover:text-white hover:underline">
                  {siteConfig.endereco.logradouro}
                </a>
                <br />
                <span className="text-slate-400">{siteConfig.endereco.cidade} · CEP {siteConfig.endereco.cep}</span>
              </p>
              <p>
                <a href={`tel:+${siteConfig.contato.telefoneDigits}`} className="font-medium text-white hover:underline">
                  {siteConfig.contato.telefone}
                </a>
                <span className="text-slate-400"> · </span>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="font-medium text-white hover:underline">
                  WhatsApp
                </a>
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.12em] text-slate-400">NAVEGAÇÃO</h3>
            <ul className="mt-4 space-y-2.5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-[14px] text-slate-300 hover:text-white hover:underline">
                    {item.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className="text-[14px] text-slate-300 hover:text-white hover:underline">
                  Falar no WhatsApp
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-[11px] font-semibold tracking-[0.12em] text-slate-400">ATENDIMENTO</h3>
            <p className="mt-4 text-[13.5px] leading-6 text-slate-300">
              Fale por WhatsApp para saber sobre produtos e disponibilidade na loja.
            </p>
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex min-h-[44px] items-center justify-center rounded-full bg-white px-5 py-2 text-[13.5px] font-semibold text-brand-900 transition-colors duration-200 hover:bg-slate-100 active:bg-slate-200"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-[12.5px] text-slate-400 sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Frigelar Ar Condicionados · Cícero Dantas — BA</p>
          <p className="text-slate-500">Site institucional · Informações sujeitas a atualização pela loja.</p>
        </div>
      </div>
    </footer>
  );
}
