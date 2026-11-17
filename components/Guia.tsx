import Calculadora from "@/components/Calculadora";
import {
  achadinho,
  brl,
  capacidade,
  capitulos,
  contato,
  ganho,
  ganhoViews,
  niveis,
  produtos,
  ritmos,
  rodapeEstimativa,
  views,
  type Comissao,
} from "@/lib/conteudo";

const MAIN = "Entrar na Comunidade";

function Arrow() {
  return (
    <svg className="m-arrow" viewBox="0 0 12 12" aria-hidden="true">
      <path className="m-arrow__stem" d="M1 6h8" />
      <path className="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5" />
    </svg>
  );
}

export default function Guia({ c }: { c: Comissao }) {
  const p = c.pct;
  const kit = produtos.find((x) => x.id === "kit")!;
  const umKg = produtos.find((x) => x.id === "1kg")!;
  const kitGanho = ganho(kit.preco, p);
  const nAchadinhos = Math.floor(kitGanho / achadinho.ganho);
  const comNiveis = c.niveis !== "oculto";

  return (
    <>
      <header className="nav nav--split">
        <div className="wrap nav__bar">
          <a className="skip-link" href="#top">Pular para o conteúdo</a>
          <a className="nav__logo" href="#top" aria-label="Café Canastra, início">
            <img className="nav__brand" src="/img/logo-preta.png" alt="Café Canastra" width="600" height="389" />
          </a>
          <nav className="nav__links" aria-label="Seções">
            <div className="nav__item"><a className="nav__link" href="#ganhos">Ganhos</a></div>
            <div className="nav__item"><a className="nav__link" href="#conteudo">Conteúdo</a></div>
            <div className="nav__item"><a className="nav__link" href="#kit">Kit</a></div>
            <div className="nav__item"><a className="nav__link" href="#videos">Vídeos</a></div>
            <div className="nav__item"><a className="nav__link" href="#regras">Regras</a></div>
          </nav>
          <div className="nav__actions">
            <a className="btn btn--primary" href="#comunidade">{MAIN}</a>
          </div>
          <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
            <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </button>
        </div>
      </header>

      <main id="top">
        {/* HERO: os três cafés de 250 g que vão na caixa */}
        <section className="hero hero--product" data-enter aria-labelledby="hero-h">
          <div className="wrap">
            <div className="hero-text hero__in">
              <div className="hero__head">
                <div>
                  <h1 id="hero-h">{c.h1}</h1>
                  <p className="hero__lead">{c.lead}</p>
                </div>
                <div className="btn-row">
                  <a className="btn btn--primary" href="#comunidade">{MAIN}<Arrow /></a>
                  <a className="btn btn--secondary" href="#conta">Calcular meu ganho</a>
                </div>
              </div>
              <picture className="hero__stage">
                <source media="(max-width: 639px)" srcSet="/img/hero-canela-celular.jpg" />
                <img
                  src="/img/hero-tres-cafes.jpg"
                  alt="Os três cafés Canastra de 250 gramas lado a lado: Suave no pacote kraft, Clássico no preto e Canela no vermelho"
                  fetchPriority="high"
                  style={{ ["--ly-pos" as string]: "50% 50%" }}
                />
              </picture>
            </div>
          </div>
        </section>

        {/* GANHOS: quanto cai em cada venda */}
        <section className="section" id="ganhos" aria-labelledby="ganhos-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="ganhos-h">
                {p}% em cada venda.{" "}
                <span className="muted">{p === 20 ? "Mais que o dobro dos 8% de alimentos." : "Acima dos 8% de alimentos."}</span>
              </h2>
            </div>
            <div className="grid grid--top">
              <div className="span-6">
                <ul className="rows">
                  {produtos.map((x) => (
                    <li key={x.id}>
                      <span className="rows__name">
                        {x.nome}
                        <small>{x.detalhe} · {brl(x.preco)}</small>
                      </span>
                      <span className="rows__value ganho">{brl(ganho(x.preco, p))}</span>
                    </li>
                  ))}
                </ul>
                <p className="ganhos__nota">
                  Um achadinho de R$ {achadinho.preco} a {achadinho.comissao}% paga {brl(achadinho.ganho)}.{" "}
                  <strong>Um kit de 2 kg paga o mesmo que {nAchadinhos} achadinhos.</strong> E café acaba: quem prova, volta.
                </p>
              </div>
              <div className="span-6 start-7">
                <div className="versus" role="img" aria-label={`Um kit de 2 kg a ${p}% paga ${brl(kitGanho)}; um achadinho de R$ 50 a 8% paga R$ 4,00`}>
                  <p className="versus__lbl">Kit 2 kg da Canastra</p>
                  <p className="versus__big">{brl(kitGanho)}</p>
                  <div className="versus__dots" aria-hidden="true">{Array.from({ length: nAchadinhos }).map((_, i) => <i key={i} />)}</div>
                  <p className="versus__lbl">Achadinho de R$ 50 a 8%</p>
                  <p className="versus__small">{brl(achadinho.ganho)}</p>
                  <div className="versus__dots" aria-hidden="true"><i /></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CALCULADORA (faixa escura) */}
        <section className="section ground-inverse" id="conta" aria-labelledby="conta-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="conta-h">
                Faça a sua conta do mês. <span className="muted">Escolha o café e as vendas por dia.</span>
              </h2>
            </div>
            <Calculadora pct={p} />
            <p className="t-small calc__foot">{rodapeEstimativa}</p>
          </div>
        </section>

        {/* TABELAS: ritmo e views */}
        <section className="section" id="ritmo" aria-labelledby="ritmo-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="ritmo-h">
                Ganhos do mês por ritmo e por views. <span className="muted">No kit, quase o dobro.</span>
              </h2>
            </div>
            <div className="grid grid--top">
              <div className="span-6">
                <table className="tabela">
                  <caption className="t-label">Seu ritmo de vendas</caption>
                  <thead>
                    <tr><th scope="col">Ritmo</th><th scope="col">Só 1 kg</th><th scope="col">Só kit 2 kg</th></tr>
                  </thead>
                  <tbody>
                    {ritmos.map((r) => (
                      <tr key={r.rotulo}>
                        <th scope="row">{r.rotulo}</th>
                        <td>{brl(ganho(umKg.preco, p) * r.vendasMes)}</td>
                        <td>{brl(kitGanho * r.vendasMes)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="span-6 start-7">
                <table className="tabela">
                  <caption className="t-label">De views a venda, no 1 kg</caption>
                  <thead>
                    <tr><th scope="col">Views no mês</th><th scope="col">Vendas</th><th scope="col">Você ganha</th></tr>
                  </thead>
                  <tbody>
                    {views.map((v) => (
                      <tr key={v.views}>
                        <th scope="row">{v.views}</th>
                        <td>{v.vendas}</td>
                        <td>{brl(ganhoViews(v.n, p), 0)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="t-small ritmo__foot">
              Nos criadores de café e alimentos, mil views viram em média R$ 38 em vendas: no 1 kg, uma venda a cada 2.600 views. {rodapeEstimativa}
            </p>
          </div>
        </section>

        {/* CONTEÚDO E LIVES */}
        <section className="section g2" id="conteudo" aria-labelledby="conteudo-h">
          <div className="wrap">
            <div className="group">
              <div className="section-head">
                <h2 id="conteudo-h">
                  Vídeo e LIVE toda semana. <span className="muted">Constância vende mais que vídeo perfeito.</span>
                </h2>
              </div>
              <div className="grid">
                <article className="card card--open span-6">
                  <h3>20 vídeos no 1º mês</h3>
                  <p>Num estudo com 1,5 milhão de amostras do TikTok Shop, quem postou 20 vídeos ou mais ganhou 10 vezes mais por vídeo do que quem postou 1 só.</p>
                  <div className="panel"><img className="frame__img" src="/img/cereja-verde.jpg" alt="Galho de café carregado de frutos verdes" loading="lazy" /></div>
                </article>
                <article className="card card--open span-6">
                  <h3>Uma LIVE por semana</h3>
                  <p>Num criador de café que a gente olhou, a LIVE vendeu 7 vezes mais por mil views que o vídeo. Passe um café ao vivo, com o produto fixado.</p>
                  <div className="panel"><img className="frame__img" src="/img/cafeeiro-mao.jpg" alt="Uma mão segurando um pé de café alto na lavoura" loading="lazy" /></div>
                </article>
              </div>
            </div>
            <div className="grid grid--top">
              <div className="span-6">
                <h3 className="ideias__h">5 ideias que vendem café</h3>
                <ol className="rows ideias">
                  <li><span className="rows__name">A primeira prova<small>Abra, passe e prove na câmera. A sua cara provando vende.</small></span></li>
                  <li><span className="rows__name">O som do café<small>Grão caindo no moedor, água no pó, café pingando. Sem falar nada.</small></span></li>
                  <li><span className="rows__name">O seu método<small>Coado, prensa, italiana. Do pacote até a xícara.</small></span></li>
                  <li><span className="rows__name">Suave ou Clássico?<small>Prove os dois e peça pro público votar nos comentários.</small></span></li>
                  <li><span className="rows__name">A LIVE do café da manhã<small>Cenário montado, café passando ao vivo, produto fixado na tela.</small></span></li>
                </ol>
              </div>
              <div className="span-6 start-7">
                <div className="frame frame--photo ph ph--43 so-desktop">
                  <img className="frame__img" src="/img/folhagem.jpg" alt="Folhas de um pé de café de perto" loading="lazy" />
                </div>
                <p className="t-small ideias__dica">Em todo vídeo: sabor, textura e uso. E o produto vinculado, senão não tem comissão.</p>
              </div>
            </div>
          </div>
        </section>

        {/* O KIT */}
        <section className="section g2 ground-surface" id="kit" aria-labelledby="kit-h">
          <div className="wrap">
            <div className="group">
              <div className="section-head">
                <h2 id="kit-h">
                  O kit que veio na caixa. <span className="muted">Café pra provar e embalagem vazia pra cenário.</span>
                </h2>
              </div>
              <div className="grid">
                <div className="tile span-6">
                  <div className="tile__media"><img src="/img/canela-250-lado.jpg" alt="Pacote vermelho do Café Canastra com Canela, 250 gramas, de lado" loading="lazy" /></div>
                  <h3>Café de verdade, pra provar</h3>
                  <p>3 pacotes de 250 g moído (Suave, Clássico e Canela), 2 drips avulsos e 2 cápsulas avulsas.</p>
                </div>
                <div className="tile span-6">
                  <div className="tile__media"><img src="/img/classico-250-lado.jpg" alt="Pacote preto do Café Canastra Clássico, 250 gramas, de lado" loading="lazy" /></div>
                  <h3>Embalagens vazias, pra cenário</h3>
                  <p>250 g Suave, Clássico e Canela, 500 g e 1 kg Suave e Clássico, mais um display de cápsula e um de drip pra montar.</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="sub-h">Por que a gente manda embalagem vazia</h3>
              <div className="grid grid--top">
                <div className="tile span-4 porque"><div className="tile__media"><img src="/img/porque-linha.jpg" alt="Verso do pacote kraft do Café Canastra Suave" loading="lazy" /></div><h4>A linha toda no quadro</h4><p>O público vê o 1 kg, o 500 g, o 250 g, a cápsula e o drip juntos. Vê a Canastra inteira.</p></div>
                <div className="tile span-4 porque"><div className="tile__media"><img src="/img/porque-live.jpg" alt="Verso do pacote preto do Café Canastra Clássico" loading="lazy" /></div><h4>Cenário pronto pra LIVE</h4><p>Bancada arrumada, display montado. Você liga a câmera e já tem cara de loja de café.</p></div>
                <div className="tile span-4 porque"><div className="tile__media"><img src="/img/porque-fresco.jpg" alt="Verso do pacote vermelho do Café Canastra com Canela" loading="lazy" /></div><h4>Café é pra tomar fresco</h4><p>Pacote cheio só pra enfeite seria desperdício. O café vem na medida pra provar.</p></div>
              </div>
              <p className="kit__aviso"><strong>As embalagens de cenário são vazias.</strong> O café de verdade são os 3 pacotes de 250 g, os 2 drips e as 2 cápsulas.</p>
            </div>
          </div>
        </section>

        {/* MOMENTO: frase que acende palavra por palavra */}
        <section className="section statement" id="origem" data-moment="word-highlight" aria-label="A família">
          <div className="wrap">
            <p className="t-label">A família</p>
            <p className="mo-wh__text">
              A gente planta café em Pratinha, na Serra da Canastra, desde 1985, e torra na nossa torrefação em Uberlândia. Se o seu vídeo explodir, <strong>aqui não falta café</strong>.
            </p>
          </div>
        </section>

        {/* FAZENDA E TORREFAÇÃO: faixa de foto */}
        <section className="section photo-band photo-band--bleed photo-band--left" id="fazenda" aria-labelledby="fazenda-h">
          <img className="layer" src="/img/serra-canastra.jpg" alt="" aria-hidden="true" loading="lazy" />
          <div className="photo-band__text">
            <h2 id="fazenda-h">Fazenda e torrefação próprias</h2>
            <ul className="rows fazenda__rows">
              <li><span className="rows__name">Fazenda em Pratinha/MG, a 1.250 m<small>{capacidade.fazenda}</small></span></li>
              <li><span className="rows__name">Torrefação em Uberlândia/MG<small>{capacidade.torrefacao}</small></span></li>
              <li><span className="rows__name">Estoque<small>{capacidade.estoque}</small></span></li>
              <li><span className="rows__name">Despacho em 1 dia útil<small>Pelo próprio TikTok. Pode focar na Canastra.</small></span></li>
            </ul>
          </div>
        </section>

        {/* VÍDEOS DE ORIENTAÇÃO: slot do arquivo do cliente */}
        <section className="section" id="videos" aria-labelledby="videos-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="videos-h">
                Oito minutos com a família. <span className="muted">Cinco capítulos curtos. Em gravação.</span>
              </h2>
            </div>
            <div className="grid grid--top">
              <ol className="rows span-6 caps">
                {capitulos.map((k) => (
                  <li key={k.n}>
                    <span className="rows__name">
                      {k.src ? <a className="link" href={k.src} target="_blank" rel="noopener noreferrer">{k.n}. {k.titulo}</a> : <>{k.n}. {k.titulo}</>}
                    </span>
                    <span className="rows__value">{k.duracao}</span>
                  </li>
                ))}
              </ol>
              {/* slot dos vídeos (roteiro-video-orientacao.md): troque pela capa do capítulo 1 quando gravar */}
              <div className="span-6 start-7">
                <div className="frame frame--photo ph ph--43">
                  <img className="frame__img" src="/img/videos-lavoura.jpg" alt="Ruas de café da fazenda sob o céu claro" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* MOMENTO: capítulos fixos do passo a passo */}
        <section className="section" id="passos" style={{ ["--h" as string]: 2 }} data-moment="pinned-chapters" aria-labelledby="passos-h">
          <div className="wrap mo-pc__grid">
            <div className="mo-pc__text">
              <h2 id="passos-h">Do convite à primeira venda</h2>
              <ol className="mo-pc__steps">
                <li className="mo-pc__step">
                  <h3>{c.passo1.titulo}</h3>
                  <p>{c.passo1.texto}</p>
                  <figure className="mo-pc__visual"><img src="/img/cafeeiro-mao-2.jpg" alt="Mão no pé de café, na lavoura" width="1600" height="1200" /></figure>
                </li>
                <li className="mo-pc__step">
                  <h3>Grave com o produto vinculado</h3>
                  <p>Abra o kit, monte o cenário e grave. Vincule o produto em todo vídeo e ligue o selo de conteúdo de marca: ele não derruba o alcance.</p>
                  <figure className="mo-pc__visual"><img src="/img/cereja-galho.jpg" alt="Galho de café com frutos verdes entre as folhas" width="1600" height="1200" /></figure>
                </li>
                <li className="mo-pc__step">
                  <h3>Poste, faça LIVE e entre no Time</h3>
                  <p>Vinte vídeos no primeiro mês e uma LIVE por semana. Na Comunidade, a gente conta o que está vendendo.</p>
                  <figure className="mo-pc__visual"><img src="/img/cafezal-largo.jpg" alt="O cafezal da fazenda, ruas de café até as árvores" width="2400" height="1350" /></figure>
                </li>
              </ol>
            </div>
            <div className="mo-pc__visuals frame"></div>
          </div>
        </section>

        {/* REGRAS (FAQ aberto) */}
        <section className="section" id="regras" aria-labelledby="regras-h">
          <div className="wrap">
            <div className="section-head">
              <h2 id="regras-h">
                Pode e não pode. <span className="muted">Pra cuidar da sua conta e da nossa marca.</span>
              </h2>
            </div>
            <div className="grid grid--top">
              <div className="faq span-6">
                <div className="faq__item"><h3>Posso falar do meu jeito?</h3><p>Pode e deve. Fale de sabor, aroma, origem e preparo, conte que é café de fazenda familiar, mostre o preço da semana.</p></div>
                <div className="faq__item"><h3>Preciso vincular o produto e ligar o selo?</h3><p>Sempre. Sem produto vinculado não tem comissão. O selo de conteúdo de marca a lei pede, e ele não derruba o alcance.</p></div>
                <div className="faq__item"><h3>O que não pode?</h3><p>Promessa de saúde (&ldquo;emagrece&rdquo;, &ldquo;cura&rdquo;), mandar comprar fora do TikTok, comprar pelo próprio link e grupo de troca de curtidas.</p></div>
                <div className="faq__item"><h3>Levei uma infração. E agora?</h3><p>Chame a gente na Comunidade. A gente olha com você o que aconteceu.</p></div>
              </div>
              <div className="span-6 start-7">
                <div className="frame frame--photo ph ph--43">
                  <img className="frame__img" src="/img/regras-lavoura.jpg" alt="Lavoura de café com árvores ao fundo" loading="lazy" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* COMUNIDADE: botões dos grupos de WhatsApp */}
        <section className={`section${comNiveis ? " g2" : ""}`} id="comunidade" aria-labelledby="comunidade-h">
          <div className="wrap">
            <div className="group">
            <div className="section-head">
              <h2 id="comunidade-h">
                A Comunidade do Time Canastra. <span className="muted">{c.quem} Agora entre no Time.</span>
              </h2>
            </div>
            <ul className="grid grupos">
              {c.grupos.map((g) => {
                const corpo = (
                  <>
                    <img className="ic ic-40 grupo__ic" src="/assets/icons/whatsapp.svg" alt="WhatsApp" width="40" height="40" />
                    <span className="grupo__nome">{g.nome}</span>
                    <span className="grupo__linha">{g.linha}</span>
                    <span className="grupo__acao">{g.href ? "Entrar no WhatsApp" : "Link em breve"}</span>
                  </>
                );
                return (
                  <li className="span-4" key={g.nome}>
                    {g.href ? (
                      <a className="grupo" href={g.href} target="_blank" rel="noopener noreferrer">{corpo}</a>
                    ) : (
                      <div className="grupo grupo--breve">{corpo}</div>
                    )}
                  </li>
                );
              })}
            </ul>
            <p className="grupos__nota">Ninguém vê o seu número: na Comunidade, o telefone de todo mundo fica protegido. Dúvidas: {contato.email}</p>
            </div>
            {comNiveis && (
              <div className="niveis">
                <p className="t-label">{c.niveis === "em-breve" ? "Em breve" : "Valendo"}</p>
                <h3 className="sub-h">Níveis do Time, de Semente a Mestre de Torra</h3>
                <div className="grid">
                  {niveis.map((n, i) => (
                    <div className="span-3 nivel" key={n.nome}>
                      <p className="nivel__n">{i + 1}</p>
                      <h4>{n.nome}</h4>
                      <p className="nivel__meta">{n.meta}</p>
                      <p>{n.premio}</p>
                    </div>
                  ))}
                </div>
                <p className="t-small niveis__nota">Conta as vendas do mês no painel de afiliados. O prêmio vem além dos {p}% e é por meta, nunca por sorteio.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="footer closing" id="contact" aria-labelledby="close-h">
        <div className="wrap">
          <div className="closing__cta close--type">
            <div className="section-head">
              <h2 id="close-h">{MAIN}</h2>
              <p>Desafio da semana, ranking e as ofertas antes de todo mundo.</p>
            </div>
            <a className="btn btn--primary btn--xl btn--wide" href="#comunidade">{MAIN}<Arrow /></a>
          </div>
          <div className="closing__links">
            <div className="grid">
              <div className="span-4 stack-4">
                <a className="nav__logo" href="#top" aria-label="Café Canastra, início">
                  <img className="nav__brand" src="/img/logo-preta.png" alt="Café Canastra" width="600" height="389" />
                </a>
                <p className="footer__lede">Família produtora em Pratinha/MG desde 1985, torrefação em Uberlândia/MG.</p>
              </div>
              <div className="span-2 start-7 footer__col"><h3>Ganhos</h3><ul><li><a href="#ganhos">Por venda</a></li><li><a href="#conta">Calculadora</a></li><li><a href="#ritmo">Por ritmo</a></li></ul></div>
              <div className="span-2 footer__col"><h3>Conteúdo</h3><ul><li><a href="#conteudo">Vídeo e LIVE</a></li><li><a href="#kit">O kit</a></li><li><a href="#videos">Vídeos</a></li></ul></div>
              <div className="span-2 footer__col"><h3>Time</h3><ul><li><a href="#passos">Passo a passo</a></li><li><a href="#regras">Regras</a></li><li><a href="#comunidade">Comunidade</a></li></ul></div>
            </div>
            <div className="footer__legal">
              <span>&copy; 2026 Café Canastra</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
