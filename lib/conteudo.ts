// Tudo o que muda no site mora aqui.
// Preços: ../Agentes AI/Canastra-Content-Creator/tiktokshop/colaboracao-direcionada-2026-11-04.md.
// Ganhos a 20%: tiktokshop/cartilha-criadores/time-canastra/ganhos-20.md. A 10% é a mesma conta com 10%.
// Nunca invente número: o que não estiver confirmado fica "[confirmar: ...]" (o kit marca em vermelho).

export type Grupo = { nome: string; linha: string; href: string | null };

export type Comissao = {
  slug: "convidados" | "solicitantes";
  pct: 20 | 10;
  titulo: string; // <title>
  descricao: string; // meta description
  h1: string; // até 40 caracteres
  lead: string;
  quem: string; // como a pessoa chegou
  passo1: { titulo: string; texto: string };
  // Níveis Semente → Mestre de Torra (comunidade-whatsapp.md §6): proposta, sem ok do Rafael.
  // "em-breve" mostra com o selo; "ativo" mostra valendo; "oculto" tira.
  niveis: "em-breve" | "ativo" | "oculto";
  // Botões do fim. href null = "em breve" (sem link). Regra da Comunidade: link só para quem é do Time.
  grupos: Grupo[];
};

const gruposPadrao = (): Grupo[] => [
  { nome: "Comunidade Time Canastra", linha: "Avisos, desafio da semana e ranking", href: null },
  { nome: "Café com o Time", linha: "Conversa, dúvidas e primeiras vendas", href: null },
  { nome: "LIVE do Time", linha: "Quem vai fazer LIVE avisa o horário aqui", href: null },
];

export const comissoes: Record<"convidados" | "solicitantes", Comissao> = {
  convidados: {
    slug: "convidados",
    pct: 20,
    titulo: "Time Canastra: guia do criador convidado, 20% por venda",
    descricao:
      "O guia de quem recebeu o convite de 20% do Café Canastra no TikTok Shop: quanto dá pra ganhar, o kit, os vídeos e as LIVES.",
    h1: "Time Canastra: 20% em cada venda",
    lead: "Café de família de Pratinha/MG, desde 1985. Cada kit de 2 kg que você vende deixa R$ 37,98 com você.",
    quem: "Você recebeu o nosso convite de 20%.",
    passo1: {
      titulo: "Aceite o convite e monte a vitrine",
      texto: "Aceite o convite de 20% na Central de Afiliados e ponha os nossos cafés na sua vitrine. A amostra a gente aprova e despacha.",
    },
    niveis: "em-breve",
    grupos: gruposPadrao(),
  },
  solicitantes: {
    slug: "solicitantes",
    pct: 10,
    titulo: "Time Canastra: guia do criador, 10% por venda",
    descricao:
      "O guia de quem pediu a amostra do Café Canastra no TikTok Shop: quanto dá pra ganhar com 10%, o kit, os vídeos e as LIVES.",
    h1: "Time Canastra: 10% em cada venda",
    lead: "Café de família de Pratinha/MG, desde 1985. Cada kit de 2 kg que você vende deixa R$ 18,99 com você.",
    quem: "Você pediu a nossa amostra.",
    passo1: {
      titulo: "Ponha os cafés na vitrine",
      texto: "Com a amostra aprovada, ponha os nossos cafés na sua vitrine pela Central de Afiliados. Toda venda pelo seu link paga 10%.",
    },
    niveis: "oculto",
    grupos: gruposPadrao(),
  },
};

export const contato = { email: "comercial@cafecanastra.com" };

// Capacidade produtiva: AINDA NÃO EXISTE. Troque quando o Rafael confirmar.
export const capacidade = {
  fazenda: "[confirmar: área ou safra da fazenda]",
  torrefacao: "[confirmar: kg torrados por mês]",
  estoque: "[confirmar: estoque / safra]",
};

export type Produto = { id: string; nome: string; detalhe: string; preco: number };

export const produtos: Produto[] = [
  { id: "kit", nome: "Kit 2 × 1 kg", detalhe: "Suave, Clássico ou misto", preco: 189.9 },
  { id: "1kg", nome: "1 kg em grão", detalhe: "Suave ou Clássico", preco: 99.9 },
  { id: "500", nome: "500 g moído", detalhe: "Suave ou Clássico", preco: 59.9 },
  { id: "250", nome: "250 g moído", detalhe: "Suave ou Clássico", preco: 37.9 },
];

export const ganho = (preco: number, pct: number) => Math.round(preco * pct) / 100;

export const achadinho = { preco: 50, comissao: 8, ganho: 4 };

export const ritmos = [
  { rotulo: "1 por semana", vendasMes: 4 },
  { rotulo: "1 por dia útil", vendasMes: 20 },
  { rotulo: "1 por dia", vendasMes: 30 },
  { rotulo: "2 por dia", vendasMes: 60 },
  { rotulo: "5 por dia", vendasMes: 150 },
];

// ganhos-20.md §3: R$ 38 em vendas a cada mil views; no 1 kg, 0,38 venda a cada mil.
// A 20% isso dá ≈ R$ 7,59 a cada mil views; a 10%, ≈ R$ 3,80.
export const views = [
  { views: "10 mil", n: 10_000, vendas: 4 },
  { views: "50 mil", n: 50_000, vendas: 19 },
  { views: "100 mil", n: 100_000, vendas: 38 },
  { views: "500 mil", n: 500_000, vendas: 190 },
  { views: "1 milhão", n: 1_000_000, vendas: 380 },
];
// valores a 20% de ganhos-20.md §3; a 10% é a metade
export const ganhoViews20: Record<number, number> = { 10_000: 76, 50_000: 380, 100_000: 759, 500_000: 3796, 1_000_000: 7592 };
export const ganhoViews = (n: number, pct: number) => Math.round((ganhoViews20[n] * pct) / 20);

export const rodapeEstimativa =
  "Estimativas com a média de criadores de café e alimentos do TikTok Shop (painel de afiliados, out/2026). Não são garantia de ganho: cada perfil vende diferente.";

// roteiro-video-orientacao.md: 5 capítulos. Quando gravar, preencha `src`
// (YouTube não listado, Vimeo ou /videos/arquivo.mp4 em public/videos/).
export type Capitulo = { n: number; titulo: string; duracao: string; src: string | null };
export const capitulos: Capitulo[] = [
  { n: 1, titulo: "Bem-vindo ao Time", duracao: "1min30", src: null },
  { n: 2, titulo: "Quanto dá pra ganhar", duracao: "2 min", src: null },
  { n: 3, titulo: "Aqui não falta café", duracao: "1min30", src: null },
  { n: 4, titulo: "O que vende café", duracao: "2 min", src: null },
  { n: 5, titulo: "Como funciona e o que não pode", duracao: "1min30", src: null },
];

export const niveis = [
  { nome: "Semente", meta: "Entrou no Time", premio: "Cartilha, amostra e Comunidade" },
  { nome: "Grão", meta: "20 vendas no mês", premio: "1 kg de presente e destaque na sexta" },
  { nome: "Torra", meta: "60 vendas no mês", premio: "3 kg de presente e as ofertas antes" },
  { nome: "Mestre de Torra", meta: "100 vendas no mês", premio: "5 kg, lote exclusivo e uma visita à fazenda" },
];

export const brl = (v: number, casas = 2) =>
  v.toLocaleString("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: casas, maximumFractionDigits: casas });
