import { CakeSlice, Gift, PartyPopper, Users } from "lucide-react";
import SiteChrome, { PageHero } from "../SiteChrome";
import QuoteBox from "./QuoteBox";

const occasions = [
  { Icon: PartyPopper, title: "Festas", text: "Doces para deixar comemorações mais completas." },
  { Icon: Gift, title: "Aniversários", text: "Opções individuais ou combinações para presentear." },
  { Icon: Users, title: "Reuniões", text: "Pedidos pensados para grupos e encontros." },
  { Icon: CakeSlice, title: "Eventos escolares", text: "Sabores que combinam com a rotina do MAARA." },
];

export default function EncomendasPage() {
  return (
    <SiteChrome>
      <main>
        <PageHero
          eyebrow="Encomendas"
          title="Doces para festas, aniversários e eventos."
          text="Uma página preparada para receber pedidos futuros e mostrar possibilidades de orçamento."
          image="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&w=1600&q=84"
        />
        <section className="section">
          <div className="occasion-grid">
            {occasions.map(({ Icon, title, text }) => (
              <article className="reason-card reveal" key={title}>
                <span><Icon size={28} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
          <div className="order-box reveal">
            <p className="eyebrow">Solicite orçamento</p>
            <h2>Conte o tipo de evento, quantidade e data desejada.</h2>
            <p>A equipe retorna com disponibilidade, sugestões de produtos e valores.</p>
            <QuoteBox />
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
