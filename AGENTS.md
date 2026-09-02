# AGENTS.md

## Repo State (verified 2026-09-02)
- Vite + React 19 + TypeScript + Tailwind CSS 3.4. Projeto inicializado em `Default Project/` (antes vazio). `package.json:scripts` → `dev` / `build` (`tsc --noEmit && vite build`) / `preview` / `typecheck`.
- Single-page institucional (sem Next.js). Build estático → `dist/`. Fonte via Google Fonts em `index.html` (Inter + Instrument Sans), sem `next/font`.
- Info centralizada em `src/lib/site-config.ts:1` (endereço, telefone `5575998538643`, WhatsApp, `whatsappUrl()`/`rotaUrl()`/`mapsEmbedUrl()`). Editar só ali para trocar contatos.
- Não é git repo ainda — `git init` se for versionar.

## OneDrive / Filesystem Gotcha
- Path `C:\Users\Joaquim Aparecido\OneDrive\Documentos\Default Project` é reparse point OneDrive Files On-Demand (`0x9000e01a`). Listagem vazia é placeholder cloud, não bug. Writable verificado.
- Path contém espaço + `í` — sempre `-LiteralPath` e aspas: `Get-ChildItem -LiteralPath "..."`, `& "path with spaces\exe" args`. Usar `workdir` param, não `Set-Location`.

## Comandos Verificados
- `npm install` (Node 24.16 / npm 11.13) → `npx tsc --noEmit` (ok) → `npm run build` → `dist/` (1.09 kB html + 26.6 kB css + 236 kB js, gzip 5.6/69.6 kB)
- `npm run dev` → http://localhost:5173 (Vite)

## Estrutura
- `src/components/{Header,Hero,Solutions,About,Differentials,Location,FinalCTA,Footer,WhatsAppButton}.tsx` + `src/App.tsx:1` + `src/main.tsx:1` + `src/index.css:1` + `tailwind.config.ts:1` + `vite.config.ts:1`
- SEO: `index.html:1` Title/Meta fornecidos, 1× H1 (Hero), H2 por seção, HTML semântico. WhatsApp `+55 75 99853-8643` msg `Olá! Visitei o site da Frigelar...`.
- Paleta `brand-950..50` (#0B1E35..#F1F6FC), sem dependências de UI/animação, SVGs inline.

## Reference (não parte do repo)
- Sibling `C:\Claude\elev-co` (Next.js 14 static export) é repo separado — não copiar config.