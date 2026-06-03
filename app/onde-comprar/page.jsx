import { CalendarDays, Clock, House, MapPin, School } from "lucide-react";
import SiteChrome, { PageHero } from "../SiteChrome";

export default function OndeComprarPage() {
  return (
    <SiteChrome>
      <main>
        <PageHero
          eyebrow="Onde comprar"
          title="Encontre a Fox Doceria no MAARA."
          text="Veja dias de venda, horário, localização e como encontrar os doces no intervalo escolar."
          image="https://images.unsplash.com/photo-1517433367423-c7e5b0f35086?auto=format&fit=crop&w=1800&q=84"
        />
        <section className="section location-page-grid">
          <article className="info-panel reveal">
            <MapPin size={26} />
            <h2>Centro Educacional MAARA</h2>
            <p>As vendas acontecem presencialmente dentro da escola, durante o intervalo.</p>
          </article>
          <article className="info-panel reveal">
            <CalendarDays size={26} />
            <h2>Dias de venda</h2>
            <p>Segunda a sábado, com disponibilidade conforme a fornada da semana.</p>
          </article>
          <article className="info-panel reveal">
            <Clock size={26} />
            <h2>Horário</h2>
            <p>Intervalo escolar. Chegue cedo para garantir os itens mais pedidos.</p>
          </article>
          <div className="mini-map location-map reveal" aria-hidden="true">
            <div className="route-line" />
            <div className="map-node map-node-start">
              <span><House size={24} /></span>
              <strong>Entrada</strong>
            </div>
            <div className="map-node map-node-end">
              <span><School size={26} /></span>
              <strong>MAARA</strong>
            </div>
            <span className="map-badge">Fox Doceria</span>
            <span className="map-note">Siga a rota até o ponto de venda</span>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
