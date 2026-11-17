import type { Metadata } from "next";
import Guia from "@/components/Guia";
import { comissoes } from "@/lib/conteudo";

const c = comissoes.solicitantes;
export const metadata: Metadata = { title: c.titulo, description: c.descricao, openGraph: { title: c.titulo, description: c.descricao, images: ["/share.jpg"] } };

export default function Page() {
  return <Guia c={c} />;
}
