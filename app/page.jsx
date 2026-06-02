import { CakeSlice, Cookie, Flame, Heart, School, Star } from "lucide-react";
import FoxInteractions from "./FoxInteractions";

const featuredImage =
  "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=1200&q=85";

const products = [
  {
    name: "Torta de Limão (Sem Chantili)",
    price: "R$ 4,00",
    description: "Base crocante, creme cítrico e final delicado para quem ama frescor.",
    details: ["Creme de limão", "Base crocante", "Sabor leve"],
    image:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=900&q=85",
    alt: "Torta de limão artesanal",
  },
  {
    name: "Torta de Limão (Com Chantili)",
    price: "R$ 4,50",
    description: "O azedinho clássico com uma camada leve e cremosa de chantili.",
    details: ["Chantili cremoso", "Limão equilibrado", "Final delicado"],
    image: "/imagens/torta-limao-chantili.png",
    alt: "Torta de limão com cobertura de chantili",
  },
  {
    name: "Bolo de Chocolate",
    price: "R$ 5,00",
    description: "Chocolate intenso, massa macia e cobertura generosa em cada pedaço.",
    details: ["Massa fofinha", "Cobertura cremosa", "Ideal para o intervalo"],
    image: featuredImage,
    alt: "Bolo de chocolate com cobertura",
  },
  {
    name: "Bolo de Cenoura",
    price: "R$ 5,00",
    description: "Clássico caseiro com cobertura de chocolate e aquele gosto de afeto.",
    details: ["Receita caseira", "Calda de chocolate", "Textura macia"],
    image: "https://cdn.pixabay.com/photo/2018/05/08/14/31/carrot-cake-3383170_1280.jpg",
    alt: "Bolo de cenoura com calda de chocolate",
  },
  {
    name: "Brownie",
    price: "R$ 4,00",
    description: "Crocante por fora, molhadinho por dentro e perfeito para adoçar o dia.",
    details: ["Chocolate marcante", "Interior molhadinho", "Porção prática"],
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=88",
    alt: "Brownies de chocolate",
  },
];

const reasons = [
  {
    Icon: CakeSlice,
    title: "Ingredientes selecionados",
    text: "Doces pensados para entregar sabor e cuidado em cada pedaço.",
  },
  {
    Icon: Cookie,
    title: "Produção artesanal",
    text: "Receitas preparadas em pequenas fornadas, com atenção aos detalhes.",
  },
  {
    Icon: School,
    title: "Venda presencial no MAARA",
    text: "Você encontra os produtos no intervalo de quinta e sexta.",
  },
  {
    Icon: Heart,
    title: "Feito com dedicação",
    text: "Uma doceria jovem, carinhosa e feita para adoçar a rotina escolar.",
  },
];

const gallery = [
  {
    src: featuredImage,
    alt: "Bolo de chocolate artesanal",
  },
  {
    src: "/imagens/torta-limao-chantili.png",
    alt: "Torta de limão com chantili",
  },
  {
    src: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=88",
    alt: "Brownies de chocolate",
  },
  {
    src: "https://cdn.pixabay.com/photo/2018/05/08/14/31/carrot-cake-3383170_1280.jpg",
    alt: "Bolo de cenoura com calda",
  },
  {
    src: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=900&q=85",
    alt: "Torta artesanal",
  },
  {
    src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85",
    alt: "Doces artesanais variados",
  },
];

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M19.05 4.91A9.76 9.76 0 0 0 12.08 2C6.66 2 2.25 6.41 2.25 11.83c0 1.73.45 3.42 1.32 4.91L2.16 22l5.38-1.37a9.8 9.8 0 0 0 4.54 1.15h.01c5.42 0 9.83-4.41 9.83-9.83a9.78 9.78 0 0 0-2.87-7.04ZM12.09 20.1h-.01a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.19.81.85-3.1-.2-.32a8.13 8.13 0 0 1-1.25-4.34c0-4.55 3.7-8.25 8.25-8.25a8.18 8.18 0 0 1 5.84 2.43 8.2 8.2 0 0 1 2.42 5.94c0 4.55-3.7 8.15-8.25 8.15Zm4.52-6.17c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.17-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.17 1.75 2.67 4.24 3.74.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.08.14-1.18-.06-.1-.23-.16-.48-.28Z"
        fill="currentColor"
      />
    </svg>
  );
}

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function TwitterIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M18.9 2.75h3.25l-7.1 8.11 8.35 10.39h-6.54l-5.12-6.31-5.86 6.31H2.63l7.59-8.66L2.2 2.75h6.7l4.63 5.78 5.37-5.78Zm-1.14 16.67h1.8L7.92 4.48H5.98l11.78 14.94Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      <FoxInteractions />

      <header className="site-header" aria-label="Cabeçalho">
        <a className="brand" href="#inicio" aria-label="Fox Doceria">
          <img src="/imagens/FOXDOCERIA.png" alt="Logo Fox Doceria" />
        </a>
        <button className="menu-toggle" type="button" data-menu-toggle aria-label="Abrir menu">
          <span />
          <span />
          <span />
        </button>
        <nav className="nav-links" data-nav aria-label="Navegação principal">
          <a href="#destaque">Destaque</a>
          <a href="#produtos">Produtos</a>
          <a href="#por-que">Por que escolher</a>
          <a href="#onde-comprar">Onde comprar</a>
        </nav>
      </header>

      <main>
        <section id="inicio" className="hero">
          <div className="hero-bg" aria-hidden="true" />
          <div className="hero-shade" aria-hidden="true" />
          <div className="hero-content reveal">
            <h1>Doces feitos com carinho para adoçar seus dias.</h1>
            <p className="hero-text">Conheça nossos produtos e acompanhe os destaques da semana.</p>
            <p className="trust-line">
              Produzidos artesanalmente e vendidos toda quinta e sexta no Centro Educacional MAARA.
            </p>
            <div className="hero-actions">
              <a className="primary-button" href="#produtos">
                Ver Cardápio
              </a>
              <a className="secondary-button" href="#onde-comprar">
                Onde Comprar
              </a>
            </div>
          </div>
        </section>

        <section id="destaque" className="section weekly-section">
          <div className="section-heading reveal">
            <p className="eyebrow">Destaque da Semana</p>
            <h2>Bolo de Chocolate Especial</h2>
          </div>

          <article className="featured-card reveal">
            <div className="featured-image">
              <img src={featuredImage} alt="Fatia de bolo de chocolate artesanal" />
            </div>
            <div className="featured-copy">
              <span className="tag">
                <Flame size={18} strokeWidth={2.6} aria-hidden="true" />
                Mais Vendido
              </span>
              <h3>Bolo de Chocolate Especial</h3>
              <p>
                Nosso bolo mais vendido da semana: massa fofinha, cobertura cremosa e sabor
                de chocolate na medida certa.
              </p>
              <div className="featured-meta">
                <span>Apenas nesta semana.</span>
                <span className="rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={14} fill="currentColor" strokeWidth={2.4} aria-hidden="true" />
                  ))}
                  4.9/5
                </span>
              </div>
              <strong>R$ 5,00</strong>
            </div>
          </article>
        </section>

        <section id="produtos" className="section products-section">
          <div className="products-top reveal">
            <div className="section-heading">
              <p className="eyebrow">Conheça nossos produtos</p>
              <h2>Delícias artesanais para deixar o seu intervalo mais gostoso.</h2>
            </div>
          </div>

          <div className="product-grid reveal" aria-label="Produtos da Fox Doceria">
            {products.map((product) => (
              <article className="product-card" key={product.name}>
                <img src={product.image} alt={product.alt} />
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>
                  <ul>
                    {product.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  <div className="product-bottom">
                    <strong>{product.price}</strong>
                    <a href="#onde-comprar">Saiba Mais</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="por-que" className="section reasons-section">
          <div className="section-heading reveal">
            <p className="eyebrow">Por que escolher a Fox Doceria</p>
            <h2>Feito com carinho para cada intervalo.</h2>
          </div>
          <div className="reason-grid">
            {reasons.map(({ Icon, title, text }) => (
              <article className="reason-card reveal" key={title}>
                <span>
                  <Icon size={28} strokeWidth={2.2} aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section gallery-section">
          <div className="section-heading reveal">
            <p className="eyebrow">Galeria</p>
            <h2>Um gostinho visual do que passa pela nossa cozinha.</h2>
          </div>
          <div className="gallery-grid reveal">
            {gallery.map((photo) => (
              <figure key={photo.alt}>
                <img src={photo.src} alt={photo.alt} />
              </figure>
            ))}
          </div>
        </section>

        <section id="onde-comprar" className="location-experience">
          <div className="location-inner">
            <div className="location-intro reveal">
              <p className="eyebrow">Onde Comprar</p>
              <h2>Seu doce da semana te espera no MAARA.</h2>
              <p>
                Todos os produtos da Fox Doceria são vendidos presencialmente no Colégio
                Centro Educacional MAARA, com fornadas preparadas para o intervalo de
                quinta e sexta.
              </p>
              <a className="ghost-button" href="#produtos">
                Escolher meu doce
              </a>
            </div>

            <div className="store-locator reveal" aria-label="Informações de compra">
              <div className="search-panel">
                <span>Local de venda</span>
                <strong>Colégio Centro Educacional MAARA</strong>
                <p>Procure a Fox Doceria nos dias de venda e veja os destaques disponíveis.</p>
              </div>

              <div className="schedule-grid">
                <article>
                  <span>Quinta-feira</span>
                  <strong>Intervalo Escolar</strong>
                  <p>Tortas, bolos e brownie para adoçar o intervalo.</p>
                </article>
                <article>
                  <span>Sexta-feira</span>
                  <strong>Intervalo Escolar</strong>
                  <p>As opções mais pedidas voltam para fechar a semana bem.</p>
                </article>
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

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-brand">
            <img src="/imagens/FOXDOCERIA.png" alt="Logo Fox Doceria" />
            <p>Feito com carinho pela Fox Doceria.</p>
          </div>
          <div className="footer-column">
            <h3>Links rápidos</h3>
            <a href="#destaque">Destaques</a>
            <a href="#produtos">Produtos</a>
            <a href="#onde-comprar">Onde Comprar</a>
          </div>
          <div className="footer-column">
            <h3>Horários</h3>
            <p>
              Quinta-feira
              <br />
              Intervalo Escolar
            </p>
            <p>
              Sexta-feira
              <br />
              Intervalo Escolar
            </p>
          </div>
          <div className="footer-column">
            <h3>Redes sociais</h3>
            <div className="social-links" aria-label="Redes sociais">
              <a href="#" aria-label="Instagram">
                <InstagramIcon width={20} height={20} />
              </a>
              <a href="#" aria-label="Twitter">
                <TwitterIcon width={20} height={20} />
              </a>
              <a href="#" aria-label="WhatsApp">
                <WhatsAppIcon width={20} height={20} />
              </a>
            </div>
          </div>
        </div>
        <small>© 2026 Fox Doceria. Todos os direitos reservados.</small>
      </footer>
    </>
  );
}
