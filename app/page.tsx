import type { Metadata } from "next";

// Porta de entrada do QR da cartilha. A UTM decide a página:
//   ...?utm_content=convidados-20  → /convidados/  (20%, criadores que a gente convidou)
//   ...?utm_content=solicitantes-10 → /solicitantes/ (10%, criadores que pediram a amostra)
// Vale qualquer parâmetro utm_* com "20", "convid", "10" ou "solicit". A UTM segue junto no redirecionamento.
// Sem UTM, a pessoa escolhe nos dois botões.
const desvio = `(function(){try{
var q=location.search,p=new URLSearchParams(q),v=[];
p.forEach(function(val,k){if(/^utm_/i.test(k))v.push(val.toLowerCase())});
var s=v.join(' '),d=null;
if(/convid|(^|[^0-9])20([^0-9]|$)/.test(s))d='/convidados/';
else if(/solicit|(^|[^0-9])10([^0-9]|$)/.test(s))d='/solicitantes/';
if(d)location.replace(d+q);
}catch(e){}})();`;

export const metadata: Metadata = {
  title: "Time Canastra: guia dos criadores do Café Canastra",
  description: "Escolha o seu convite e veja o guia do criador do Café Canastra no TikTok Shop.",
};

export default function Entrada() {
  return (
    <main id="top" className="entrada">
      <script dangerouslySetInnerHTML={{ __html: desvio }} />
      <section className="section entrada__s" aria-labelledby="entrada-h">
        <div className="wrap">
          <img className="entrada__logo" src="/img/logo-preta.png" alt="Café Canastra" width="600" height="389" />
          <h1 id="entrada-h">Guia do criador do Time Canastra</h1>
          <p className="t-lead">Qual é a sua comissão no TikTok Shop?</p>
          <div className="btn-row">
            <a className="btn btn--primary" href="/convidados/">Recebi o convite de 20%</a>
            <a className="btn btn--secondary" href="/solicitantes/">Pedi a amostra, 10%</a>
          </div>
        </div>
      </section>
    </main>
  );
}
