import { siteConfig, whatsappUrl, rotaUrl, mapsEmbedUrl } from "../lib/site-config";

export function Location() {
  return (
    <section id="localizacao" className="bg-[#F7F9FC] py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:gap-8 xl:gap-10">
          {/* Info */}
          <div>
            <p className="text-[11px] font-medium tracking-[0.1em] text-slate-500">LOCALIZAÇÃO</p>
            <h2 className="mt-2 font-display text-[24px] font-bold leading-[1.05] tracking-[-0.02em] text-slate-900 sm:text-[28px]">
              Visite nossa loja
            </h2>
            <p className="mt-3 max-w-[440px] text-[14px] leading-6 text-slate-600">
              Venha ver os produtos de perto. Estamos no centro, com acesso fácil.
            </p>

            <div className="mt-6 rounded-[12px] border border-slate-200 bg-white p-5 sm:p-6">
              <div className="flex gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-900 text-white">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M12 13.5C13.6569 13.5 15 12.1569 15 10.5C15 8.84315 13.6569 7.5 12 7.5C10.3431 7.5 9 8.84315 9 10.5C9 12.1569 10.3431 13.5 12 13.5Z" stroke="white" strokeWidth="1.6" />
                    <path d="M12 21C14.5 17.5 18 13.2 18 10.5C18 7.18629 15.3137 4.5 12 4.5C8.68629 4.5 6 7.18629 6 10.5C6 13.2 9.5 17.5 12 21Z" stroke="white" strokeWidth="1.6" />
                  </svg>
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-slate-900">Endereço</p>
                  <address className="mt-1 not-italic text-[14px] leading-6 text-slate-700">
                    {siteConfig.endereco.logradouro}
                    <br />
                    {siteConfig.endereco.cidade}
                    <br />
                    <span className="text-slate-600">CEP {siteConfig.endereco.cep}</span>
                  </address>
                </div>
              </div>

              <div className="mt-5 flex gap-3 border-t border-slate-100 pt-5">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-slate-900 text-white">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M6 10C6 13 8.5 16 12 18C15.5 16 18 13 18 10C18 6.5 15.3 3.5 12 3.5C8.7 3.5 6 6.5 6 10Z" stroke="white" strokeWidth="1.5" />
                    <path d="M12 11.5C12.8284 11.5 13.5 10.8284 13.5 10C13.5 9.17157 12.8284 8.5 12 8.5C11.1716 8.5 10.5 9.17157 10.5 10C10.5 10.8284 11.1716 11.5 12 11.5Z" stroke="white" strokeWidth="1.3" />
                  </svg>
                </span>
                <div>
                  <p className="text-[13px] font-semibold text-slate-900">Telefone e WhatsApp</p>
                  <a href={`tel:+${siteConfig.contato.telefoneDigits}`} className="mt-1 block text-[15px] font-semibold text-brand-900 hover:underline">
                    {siteConfig.contato.telefone}
                  </a>
                  <p className="text-[12.5px] text-slate-600">Toque para ligar ou chamar no WhatsApp</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  href={rotaUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-brand-900 text-[13.5px] font-semibold text-white transition-colors duration-200 hover:bg-brand-800 active:bg-brand-950"
                >
                  Traçar rota
                </a>
                <a
                  href={whatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center justify-center rounded-full border border-slate-300 bg-white text-[13.5px] font-semibold text-slate-800 transition-colors duration-200 hover:bg-slate-50 active:bg-slate-100"
                >
                  Falar no WhatsApp
                </a>
              </div>
            </div>

            <p className="mt-4 text-[12.5px] leading-5 text-slate-500">
              Abre no Google Maps com o endereço exato da loja.
            </p>
          </div>

          {/* Map */}
          <div className="overflow-hidden rounded-[12px] border border-slate-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-100 bg-white px-4 py-3 sm:px-5">
              <span className="text-[11px] font-medium tracking-[0.08em] text-slate-500">MAPA</span>
              <a
                href={rotaUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[12.5px] font-medium text-slate-600 underline-offset-2 hover:text-brand-900 hover:underline"
              >
                Abrir no Google Maps →
              </a>
            </div>
            <div className="relative aspect-[4/3] bg-slate-100 sm:aspect-[16/10] lg:aspect-[1.05/1]">
              <iframe
                title="Mapa - Frigelar Ar Condicionados, Cícero Dantas - BA"
                src={mapsEmbedUrl()}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full border-0"
                allowFullScreen
              />
            </div>
            <div className="bg-slate-50 px-4 py-3 text-[12px] text-slate-600 sm:px-5">
              Av. Antônio Carlos Magalhães, 1264 — Centro.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
