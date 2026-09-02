export const siteConfig = {
  nome: "Frigelar Ar Condicionados",
  nomeCurto: "Frigelar",
  tagline: "Climatização em Cícero Dantas — BA",
  descricaoSEO:
    "Frigelar Ar Condicionados em Cícero Dantas - BA. Soluções relacionadas a ar-condicionado, climatização e refrigeração. Entre em contato pelo WhatsApp ou visite nossa loja.",

  endereco: {
    logradouro: "Av. Antônio Carlos Magalhães, 1264 - Centro",
    cidade: "Cícero Dantas - BA",
    cep: "48410-000",
    completo: "Av. Antônio Carlos Magalhães, 1264 - Centro, Cícero Dantas - BA, 48410-000",
  },

  contato: {
    telefone: "(75) 99853-8643",
    telefoneDigits: "5575998538643",
    whatsapp: "5575998538643",
    mensagemPadrao: "Olá! Encontrei a Frigelar Ar Condicionados pelo site e gostaria de mais informações.",
  },

  nav: [
    { label: "Início", href: "#inicio" },
    { label: "Soluções", href: "#solucoes" },
    { label: "Sobre", href: "#sobre" },
    { label: "Localização", href: "#localizacao" },
  ],

  solucoes: [
    {
      id: "ar-condicionado",
      nome: "Ar-condicionado",
      descricao:
        "Opções para diferentes ambientes e tamanhos. Ajudamos você a escolher o equipamento adequado ao seu espaço.",
      detalhe: "Residencial e comercial",
    },
    {
      id: "climatizacao",
      nome: "Climatização",
      descricao:
        "Orientação para deixar o ambiente mais confortável, considerando o uso no dia a dia.",
      detalhe: "Conforto no dia a dia",
    },
    {
      id: "refrigeracao",
      nome: "Refrigeração",
      descricao:
        "Produtos e suporte para conservação e bom funcionamento do seu sistema.",
      detalhe: "Conservação e funcionamento",
    },
    {
      id: "acessorios",
      nome: "Produtos e acessórios",
      descricao:
        "Peças e acessórios para instalação e manutenção, com orientação na escolha.",
      detalhe: "Instalação e manutenção",
    },
  ],

  diferenciais: [
    {
      titulo: "Atendimento local",
      texto: "Equipe em Cícero Dantas, pronta para atender na loja ou por mensagem.",
    },
    {
      titulo: "Contato direto",
      texto: "Fale por WhatsApp ou telefone e tire suas dúvidas sem rodeios.",
    },
    {
      titulo: "Loja no centro",
      texto: "Endereço de fácil acesso na Av. Antônio Carlos Magalhães, 1264.",
    },
    {
      titulo: "Conversa objetiva",
      texto: "Entendemos seu ambiente e indicamos o que faz sentido para você.",
    },
  ],
} as const;

export function whatsappUrl(mensagem = siteConfig.contato.mensagemPadrao): string {
  return `https://wa.me/${siteConfig.contato.whatsapp}?text=${encodeURIComponent(mensagem)}`;
}

export function rotaUrl(): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(siteConfig.endereco.completo)}`;
}

export function mapsEmbedUrl(): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(siteConfig.endereco.completo)}&z=16&output=embed`;
}
