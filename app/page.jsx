import {
  CakeSlice,
  CircleHelp,
  Clock,
  Cookie,
  Flame,
  Heart,
  MapPin,
  PackageCheck,
  School,
  Star,
} from "lucide-react";
import ProductCards from "./ProductCards";
import SiteChrome from "./SiteChrome";
import { faqs, featuredImage, gallery, products } from "./siteData";

const stats = [
  { label: "Doces vendidos", value: 780, prefix: "+", suffix: "" },
  { label: "Clientes semanais", value: 85, prefix: "+", suffix: "" },
  { label: "Produtos disponíveis", value: 5, prefix: "", suffix: "" },
  { label: "Produção artesanal", value: 100, prefix: "", suffix: "%" },
];

const reasons = [
  { Icon: CakeSlice, title: "Ingredientes selecionados", text: "Doces pensados para entregar sabor e cuidado em cada pedaço." },
  { Icon: Cookie, title: "Produção artesanal", text: "Receitas preparadas em pequenas fornadas, com atenção aos detalhes." },
  { Icon: School, title: "Venda presencial no MAARA", text: "Você encontra os produtos de segunda a sábado no intervalo escolar." },
  { Icon: Heart, title: "Feito com dedicação", text: "Uma doceria jovem, carinhosa e feita para adoçar a rotina escolar." },
];

const reviews = [
  ["Maria", "Os melhores brownies da escola!"],
  ["João", "A torta de limão é perfeita."],
  ["Pedro", "Compro toda semana."],
];

export default function Home() {
  return (
    <SiteChrome>
      <main>
        <section id="inicio" className="hero">
          <div className="hero-bg" aria-hidden="true" />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-content reveal">
            <div className="hero-badges" aria-label="Diferenciais da Fox Doceria">
              <span><CakeSlice size={17} aria-hidden="true" /> Produção artesanal</span>
              <span><MapPin size={17} aria-hidden="true" /> Vendido no MAARA</span>
            </div>
            <h1>Doces feitos com carinho para adoçar seus dias.</h1>
            <p className="hero-text">Conheça nossos produtos, acompanhe os destaques da semana e reserve seu doce favorito.</p>
            <p className="trust-line">Produzidos artesanalmente e vendidos de segunda a sábado no Centro Educacional MAARA.</p>
            <div className="hero-actions">
              <a className="primary-button" href="/cardapio">
                <PackageCheck size={20} aria-hidden="true" />
                Ver cardápio
              </a>
              <a className="secondary-button" href="/onde-comprar">
                <MapPin size={20} aria-hidden="true" />
                Onde comprar
              </a>
            </div>
          </div>
        </section>

        <section className="stats-section white-band">
          <div className="stats-grid reveal">
            {stats.map((stat) => (
              <article key={stat.label}>
                <strong>{stat.prefix}<span data-count-to={stat.value}>0</span>{stat.suffix}</strong>
                <p>{stat.label}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="destaque" className="section weekly-section">
          <div className="section-heading reveal">
            <p className="eyebrow">Destaque da semana</p>
            <h2>Bolo de Chocolate Especial</h2>
          </div>
          <article className="featured-card reveal">
            <div className="featured-image">
              <img src={featuredImage} alt="Fatia de bolo de chocolate artesanal" />
            </div>
            <div className="featured-copy">
              <span className="tag"><Flame size={18} strokeWidth={2.6} aria-hidden="true" />Mais vendido</span>
              <h3>Bolo de Chocolate Especial</h3>
              <p>Nosso bolo mais vendido da semana: massa fofinha, cobertura cremosa e sabor de chocolate na medida certa.</p>
              <div className="featured-meta">
                <span><Clock size={14} aria-hidden="true" /> Apenas nesta semana</span>
                <span className="rating">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={14} fill="currentColor" aria-hidden="true" />)} 4.9/5</span>
              </div>
              <strong>R$ 5,00</strong>
            </div>
          </article>
        </section>

        <section id="produtos" className="section products-section white-band">
          <div className="products-top reveal">
            <div className="section-heading">
              <p className="eyebrow">Conheça nossos produtos</p>
              <h2>Delícias artesanais para deixar o seu intervalo mais gostoso.</h2>
            </div>
          </div>
          <ProductCards products={products} />
        </section>

        <section id="por-que" className="section reasons-section">
          <div className="section-heading reveal">
            <p className="eyebrow">Por que escolher a Fox Doceria</p>
            <h2>Feito com carinho para cada intervalo.</h2>
          </div>
          <div className="reason-grid">
            {reasons.map(({ Icon, title, text }) => (
              <article className="reason-card reveal" key={title}>
                <span><Icon size={28} strokeWidth={2.2} aria-hidden="true" /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="reviews-section white-band">
          <div className="reviews-inner">
            <div className="reviews-spotlight reveal">
              <p className="eyebrow">Avaliações</p>
              <h2>Quem prova, volta.</h2>
              <p>Comentários curtos, sinceros e com aquele clima de intervalo: rápido, animado e cheio de vontade de repetir.</p>
              <div className="review-score">
                <strong>4.9</strong>
                <span>{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={18} fill="currentColor" aria-hidden="true" />)}</span>
              </div>
            </div>
            <div className="review-grid">
              {reviews.map(([name, text], index) => (
                <article className="review-card reveal" key={name}>
                  <div className="review-avatar" aria-hidden="true">{name.slice(0, 1)}</div>
                  <div className="rating">{[1, 2, 3, 4, 5].map((star) => <Star key={star} size={15} fill="currentColor" aria-hidden="true" />)}</div>
                  <p>{text}</p>
                  <strong>{name}</strong>
                  <small>{index === 0 ? "Cliente fã do brownie" : index === 1 ? "Time torta de limão" : "Compra toda semana"}</small>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section gallery-section">
          <div className="section-heading reveal">
            <p className="eyebrow">Galeria</p>
            <h2>Um gostinho visual do que passa pela nossa cozinha.</h2>
          </div>
          <div className="gallery-grid reveal">
            {gallery.slice(0, 6).map((photo) => (
              <figure key={photo.alt}>
                <img src={photo.src} alt={photo.alt} />
                <figcaption><span>{photo.title}</span><strong>{photo.label}</strong></figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="faq-section white-band">
          <div className="faq-shell reveal">
            <div className="faq-aside">
              <span><CircleHelp size={22} aria-hidden="true" /></span>
              <p className="eyebrow">Perguntas frequentes</p>
              <h2>Compra simples, sem dúvida no caminho.</h2>
              <p>Um resumo direto das perguntas que mais aparecem antes de garantir o doce.</p>
            </div>
            <div className="faq-accordion">
              {faqs.map(([question, answer], index) => (
                <details key={question} open={index === 0}>
                  <summary>
                    <span>{question}</span>
                    <i aria-hidden="true" />
                  </summary>
                  <p>{answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section id="onde-comprar" className="location-experience">
          <div className="location-inner">
            <div className="location-intro reveal">
              <p className="eyebrow">Onde comprar</p>
              <h2>Seu doce da semana te espera no MAARA.</h2>
              <p>Todos os produtos são vendidos presencialmente no Centro Educacional MAARA, com fornadas preparadas para o intervalo de segunda a sábado.</p>
              <a className="ghost-button" href="/onde-comprar">Ver detalhes</a>
            </div>
            <div className="store-locator reveal" aria-label="Informações de compra">
              <div className="search-panel">
                <span>Local de venda</span>
                <strong>Colégio Centro Educacional MAARA</strong>
                <p>Procure a Fox Doceria nos dias de venda e veja os destaques disponíveis.</p>
              </div>
              <div className="schedule-grid">
                <article><span>Segunda a sexta</span><strong>Intervalo escolar</strong><p>Tortas, bolos e brownie para adoçar o intervalo.</p></article>
                <article><span>Sábado</span><strong>Intervalo escolar</strong><p>As opções mais pedidas continuam disponíveis para fechar a semana bem.</p></article>
              </div>
              <div className="mini-map" aria-hidden="true">
                <div className="map-pin map-pin-main" />
                <div className="map-pin map-pin-soft" />
                <div className="route-line" />
                <span className="map-label">MAARA</span>
                <span className="map-badge">Doces aqui</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
