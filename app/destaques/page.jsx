import { Flame, Medal, Sparkles } from "lucide-react";
import SiteChrome, { PageHero } from "../SiteChrome";
import { featuredImage, weeklyHighlights } from "../siteData";

export default function DestaquesPage() {
  return (
    <SiteChrome>
      <main>
        <PageHero
          eyebrow="Destaques da semana"
          title="Os doces mais pedidos desta semana."
          text="Uma vitrine rápida para saber o que está em alta, o que chegou agora e o que pode acabar primeiro."
          image="https://images.unsplash.com/photo-1488477304112-4944851de03d?auto=format&fit=crop&w=1400&q=85"
        />
        <section className="section rankings-section">
          <div className="section-heading reveal">
            <p className="eyebrow">Esta semana</p>
            <h2>Ranking Fox Doceria</h2>
          </div>
          <div className="ranking-grid">
            {weeklyHighlights.map((item) => (
              <article className="ranking-card reveal" key={item.name}>
                <img src={item.image} alt={item.name} />
                <div>
                  <span className="rank"><Medal size={18} /> {item.rank}</span>
                  <h2>{item.name}</h2>
                  <strong><Flame size={18} /> {item.badge}</strong>
                </div>
              </article>
            ))}
          </div>
        </section>
        <section className="section highlight-month white-band">
          <div className="featured-card reveal">
            <div className="featured-image">
              <img src={featuredImage} alt="Bolo de chocolate especial" />
            </div>
            <div className="featured-copy">
              <span className="tag"><Sparkles size={18} /> Produto do mês</span>
              <h3>Junho: Bolo de Chocolate Especial</h3>
              <p>Receita escolhida pela combinação de massa macia, cobertura cremosa e presença forte nas vendas da semana.</p>
              <strong>R$ 5,00</strong>
            </div>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
