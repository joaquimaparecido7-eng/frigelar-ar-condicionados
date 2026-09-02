export function TopBar() {
  return (
    <div className="hidden border-b border-slate-200 bg-slate-50 text-[12px] text-slate-600 sm:block">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-4 py-2 sm:px-6 lg:px-8">
        <span className="flex items-center gap-2">
          <span className="hidden sm:inline">Residencial, Automotivo e Elétrica em Geral</span>
          <span className="hidden sm:inline text-slate-300">•</span>
          <a href="https://www.instagram.com/frigelar_cd" target="_blank" rel="noopener noreferrer" className="font-medium text-slate-700 hover:text-brand-900 hover:underline">
            @frigelar_cd
          </a>
        </span>
        <span className="flex items-center gap-3">
          <a href="tel:+5575998538643" className="font-medium text-slate-700 hover:text-brand-900 hover:underline">
            75 99815-7308 | 75 99853-8643
          </a>
          <span className="hidden h-3 w-px bg-slate-300 sm:block" aria-hidden="true" />
          <span className="hidden sm:inline text-slate-500">Av. ACM, 1264 — Centro</span>
        </span>
      </div>
    </div>
  );
}
