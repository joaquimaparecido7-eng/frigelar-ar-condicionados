import { useState, useEffect } from "react";
import { siteConfig, whatsappUrl } from "../lib/site-config";

export function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/85">
      <div className="mx-auto flex h-[64px] max-w-[1200px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-3 shrink-0" aria-label="Frigelar Ar Condicionados - início">
          <span className="flex h-9 w-9 items-center justify-center rounded-[8px] bg-brand-900 text-white">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M5 12.5C5 8.5 7.8 5.5 12 5.5C16.2 5.5 19 8.5 19 12.5C19 16.5 16.2 19.5 12 19.5C7.8 19.5 5 16.5 5 12.5Z" stroke="white" strokeWidth="1.7" />
              <path d="M6.5 20C8.1 21 10 21.7 12 21.7C14 21.7 15.9 21 17.5 20" stroke="#6BA8DD" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M10 12.5H14M12 10.5V14.5" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </span>
          <span className="leading-none">
            <span className="block font-display text-[15.5px] font-bold tracking-[-0.02em] text-brand-900">FRIGELAR</span>
            <span className="block text-[11px] font-medium tracking-[0.12em] text-slate-500">AR CONDICIONADOS</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 md:flex" aria-label="Navegação principal">
          {siteConfig.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-[14px] font-medium text-slate-700 underline-offset-4 hover:text-brand-900 hover:underline"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center justify-center rounded-full bg-brand-900 px-5 py-2 text-[13.5px] font-semibold text-white transition-colors duration-200 hover:bg-brand-800 active:bg-brand-950 focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            Falar no WhatsApp
          </a>
        </div>

        {/* Mobile button */}
        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-[44px] w-[44px] items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-colors hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-brand-500 focus-visible:ring-offset-2 md:hidden"
        >
          <span aria-hidden="true" className="relative block h-3.5 w-[18px]">
            <span className={`absolute left-0 top-0 h-0.5 w-full bg-current transition ${open ? "translate-y-[6px] rotate-45" : ""}`} />
            <span className={`absolute left-0 top-[6px] h-0.5 w-full bg-current transition ${open ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 top-[12px] h-0.5 w-full bg-current transition ${open ? "-translate-y-[6px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`border-t border-slate-200 bg-white md:hidden ${open ? "block" : "hidden"}`}
      >
        <nav className="mx-auto max-w-[1200px] px-4 py-4 sm:px-6" aria-label="Navegação mobile">
          <ul className="flex flex-col">
            {siteConfig.nav.map((item) => (
              <li key={item.href} className="border-b border-slate-100 last:border-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex py-4 text-[15px] font-medium text-slate-800 hover:text-brand-900"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex h-12 items-center justify-center rounded-full bg-brand-900 text-[15px] font-semibold text-white"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="mr-2">
              <path d="M12 22C17 22 21 17.5 21 12C21 6.5 17 2 12 2C7 2 3 6.5 3 12C3 13.8 3.5 15.5 4.4 16.9L3 21L7.2 19.6C8.5 20.4 10.2 21 12 21V22Z" stroke="white" strokeWidth="1.5" />
              <path d="M8.5 10.2C8.7 9.5 9.2 9.5 9.6 9.5H10.4C10.7 9.5 11 9.8 11.2 10.4L11.7 11.7C11.9 12.2 11.7 12.6 11.2 13L10.6 13.7C11.3 14.9 12.6 16 14 16.7L14.6 16.1C15 15.7 15.4 15.6 15.9 15.8L17.2 16.3C17.7 16.5 18 16.8 18 17.1V17.9C18 18.3 17.8 18.8 17 19.1C16.3 19.4 15 19.2 13.5 18.4C11.9 17.5 10.5 16 9.6 14.4C8.7 12.8 8.3 11.3 8.5 10.2Z" stroke="white" strokeWidth="1.2" strokeLinejoin="round" />
            </svg>
            Falar no WhatsApp
          </a>
          <p className="mt-3 text-center text-[13px] text-slate-500">
            <a href={`tel:+${siteConfig.contato.telefoneDigits}`} className="font-medium text-slate-700 underline-offset-2 hover:underline">
              {siteConfig.contato.telefone}
            </a>
            {" · "}Av. Antônio Carlos Magalhães, 1264
          </p>
        </nav>
      </div>
    </header>
  );
}
