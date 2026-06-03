import { Award, BadgeCheck, Gift, Star } from "lucide-react";
import SiteChrome, { PageHero } from "../SiteChrome";

const benefits = [
  ["Compre 5 doces", "Ganhe 1 brownie em uma próxima compra."],
  ["10 pontos", "Troque por 1 doce grátis, conforme disponibilidade."],
  ["Destaques extras", "Clientes frequentes ficam sabendo das novidades primeiro."],
];

export default function FidelidadePage() {
  return (
    <SiteChrome>
      <main>
        <PageHero
          eyebrow="Programa de fidelidade"
          title="Quanto mais você compra, mais doce fica."
          text="Uma proposta divertida para transformar clientes frequentes em clientes favoritos."
          image="https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=1400&q=85"
        />
        <section className="section loyalty-layout">
          <div className="loyalty-card reveal">
            <Award size={34} />
            <span>Cartão Fox</span>
            <h2>5 doces = 1 brownie</h2>
            <div className="stamp-row" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((stamp) => <i key={stamp}><Star size={18} fill="currentColor" /></i>)}
            </div>
          </div>
          <div className="benefit-list">
            {benefits.map(([title, text]) => (
              <article className="info-panel reveal" key={title}>
                <BadgeCheck size={24} />
                <h2>{title}</h2>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="section white-band favorite-section">
          <div className="section-heading reveal">
            <p className="eyebrow">Clientes favoritos</p>
            <h2>Um placar divertido dos campeões da Fox.</h2>
          </div>
          <div className="favorite-grid">
            <article className="info-panel reveal"><Gift size={24} /><h2>Produto mais amado</h2><p>Brownie Tradicional</p></article>
            <article className="info-panel reveal"><Award size={24} /><h2>Campeão de vendas</h2><p>Bolo de Chocolate: 342 unidades vendidas</p></article>
            <article className="info-panel reveal"><Star size={24} /><h2>Mais avaliado</h2><p>Torta de Limão com Chantili</p></article>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
