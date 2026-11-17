# Time Canastra: guia dos criadores do Café Canastra

Site estático (Next.js 16 + React 19, `output: "export"`) com o guia de quem vende o Café Canastra no TikTok Shop.
O QR da cartilha na caixa do kit leva pra cá. **Ainda não está publicado.**

Design feito com a skill `design-taste-frontend` (tasteskill 2.5): tipo *product*, paleta papel quente e nogueira
(o kraft dos pacotes), Besley + Albert Sans, fotos reais da fazenda e dos pacotes (copiadas da `base-curada/`, nada
foi movido), celular primeiro. O kit de design fica em `public/assets/` e carrega depois do React.

## As páginas

| Endereço | Para quem |
|---|---|
| `/convidados/` | 20%: criadores que a Canastra convidou |
| `/solicitantes/` | 10%: criadores que pediram a amostra |
| `/` | porta do QR: lê a UTM e manda para a página certa; sem UTM, mostra os dois botões |

**QR da cartilha (UTM):** qualquer parâmetro `utm_*` com `convid` ou `20` vai para `/convidados/`; com `solicit`
ou `10`, para `/solicitantes/`. A UTM segue junto. Sugestão:

```
https://<domínio>/?utm_source=cartilha&utm_medium=qr&utm_campaign=time-canastra&utm_content=convidados-20
https://<domínio>/?utm_source=cartilha&utm_medium=qr&utm_campaign=time-canastra&utm_content=solicitantes-10
```

As duas páginas são o mesmo guia (`components/Guia.tsx`): ganhos por venda, calculadora, mês por ritmo e por
views, vídeo e LIVE, o kit (café de verdade e embalagens vazias de cenário), a família e a fazenda, os vídeos de
orientação, o passo a passo, pode e não pode, e no fim os botões das Comunidades de WhatsApp.

## Rodar no computador

```bash
npm install
npm run dev      # http://localhost:3000/convidados/
npm run build    # gera a pasta out/ (o site pronto)
```

## O que trocar (tudo em `lib/conteudo.ts`)

| O quê | Onde | Hoje |
|---|---|---|
| Links das Comunidades de WhatsApp | `comissoes.<pagina>.grupos[].href` | `null` → cartão "Link em breve" |
| Vídeos de orientação (5 capítulos) | `capitulos[].src` | `null`. Com link, o capítulo vira um link "assistir" |
| Níveis Semente → Mestre de Torra | `comissoes.convidados.niveis` | `"em-breve"` (20%) e `"oculto"` (10%). `"ativo"` tira o "Em breve" |
| Capacidade produtiva | `capacidade` | `[confirmar: ...]`, marcado em vermelho tracejado no site |
| Preços | `produtos` | os 4 do convite; os ganhos de 20% e 10% saem da conta |

O site tem `noindex` (não aparece no Google), porque é para quem recebeu o kit.

## Subir na Vercel (só com o ok do Rafael)

1. Criar um repositório no GitHub só com esta pasta (`git init`, commit, `git push`).
2. vercel.com → **Add New → Project** → importar o repositório. A Vercel reconhece Next.js e o `output: "export"`
   sozinha: não precisa mudar nada nem pôr variável de ambiente.
3. **Deploy.** Sai um endereço `*.vercel.app`.
4. Domínio próprio (ex.: `time.cafecanastra.com`): **Settings → Domains**, e o CNAME que a Vercel mostrar no DNS.
5. Gerar os dois QR com as URLs de UTM acima e pôr na cartilha.

Sem GitHub: `npx vercel` nesta pasta, logado na conta da Canastra, e `npx vercel --prod`.

## Prints

`prints/celular-20.png` e `prints/celular-10.png` (página inteira a 390 px), `prints/celular-20-telas-*.jpg`
(as telas do celular lado a lado) e `prints/desktop-20.png` (1440 px).
