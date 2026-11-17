"use client";

import { useState } from "react";
import { achadinho, brl, ganho, produtos } from "@/lib/conteudo";

// Vendas por dia de 1 a 10 (mês de 30 dias), mais os atalhos de ganhos-20.md §2.
const atalhos = [
  { rotulo: "1 por semana", vendasMes: 4 },
  { rotulo: "1 por dia útil", vendasMes: 20 },
];

const fotos: Record<string, string> = {
  kit: "/img/suave-1kg.jpg",
  "1kg": "/img/classico-1kg.jpg",
  "500": "/img/suave-500-moido.jpg",
  "250": "/img/suave-250-lado.jpg",
};

export default function Calculadora({ pct }: { pct: number }) {
  const [prodId, setProdId] = useState("1kg");
  const [vendasMes, setVendasMes] = useState(30);
  const produto = produtos.find((p) => p.id === prodId)!;
  const porVenda = ganho(produto.preco, pct);
  const total = porVenda * vendasMes;
  const porDia = vendasMes % 30 === 0 ? vendasMes / 30 : null;
  const achadinhos = Math.floor(total / achadinho.ganho);

  return (
    <div className="calc grid">
      <div className="calc__in span-6">
        <fieldset className="calc__set">
          <legend className="t-label">O que você vende</legend>
          <div className="calc__opts">
            {produtos.map((p) => (
              <button key={p.id} type="button" className="calc__opt" aria-pressed={p.id === prodId} onClick={() => setProdId(p.id)}>
                <span className="calc__opt-name">{p.nome}</span>
                <span className="calc__opt-val">{brl(ganho(p.preco, pct))} por venda</span>
              </button>
            ))}
          </div>
        </fieldset>
        <fieldset className="calc__set">
          <legend className="t-label">
            <label htmlFor="calc-dia">Vendas por dia</label>
          </legend>
          <div className="calc__slider">
            <input
              id="calc-dia"
              type="range"
              min={1}
              max={10}
              step={1}
              value={porDia ?? 1}
              onChange={(e) => setVendasMes(Number(e.target.value) * 30)}
            />
            <output htmlFor="calc-dia" className="calc__dia">{porDia ?? "–"}</output>
          </div>
          <div className="calc__opts calc__opts--row">
            {atalhos.map((a) => (
              <button key={a.rotulo} type="button" className="calc__opt calc__opt--sm" aria-pressed={vendasMes === a.vendasMes} onClick={() => setVendasMes(a.vendasMes)}>
                {a.rotulo}
              </button>
            ))}
          </div>
        </fieldset>
      </div>
      <div className="calc__out span-6 start-7" aria-live="polite">
        <img className="calc__img" src={fotos[produto.id]} alt={`Pacote de ${produto.nome} do Café Canastra`} width="600" height="750" />
        <p className="t-label">No seu bolso, por mês</p>
        <p className="calc__total">{brl(total)}</p>
        <p>
          {vendasMes} vendas de {produto.nome} × {brl(porVenda)}.
          {achadinhos > 1 ? ` O mesmo que ${achadinhos.toLocaleString("pt-BR")} achadinhos de R$ ${achadinho.preco} a ${achadinho.comissao}%.` : ""}
        </p>
      </div>
    </div>
  );
}
