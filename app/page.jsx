import FoxInteractions from "./FoxInteractions";

const products = [
  {
    name: "Torta de Limão (Sem Chantili)",
    price: "R$ 4,00",
    description: "Base crocante, creme cítrico e final delicado para quem ama frescor.",
    image:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=900&q=85",
    alt: "Torta de limão artesanal",
  },
  {
    name: "Torta de Limão (Com Chantili)",
    price: "R$ 4,50",
    description: "O azedinho clássico com uma camada leve e cremosa de chantili.",
    image: "/imagens/torta-limao-chantili.png",
    alt: "Torta de limão com cobertura de chantili",
  },
  {
    name: "Bolo de Chocolate",
    price: "R$ 5,00",
    description: "Chocolate intenso, massa macia e cobertura generosa em cada pedaço.",
    image:
      "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=1200&q=85",
    alt: "Bolo de chocolate com cobertura",
  },
  {
    name: "Bolo de Cenoura",
    price: "R$ 5,00",
    description: "Clássico caseiro com cobertura de chocolate e aquele gosto de afeto.",
    image: "https://cdn.pixabay.com/photo/2018/05/08/14/31/carrot-cake-3383170_1280.jpg",
    alt: "Bolo de cenoura com calda de chocolate",
  },
  {
    name: "Brownie",
    price: "R$ 4,00",
    description: "Crocante por fora, molhadinho por dentro e perfeito para adoçar o dia.",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=88",
    alt: "Brownies de chocolate",
  },
];

export default function Home() {
  return (
    <>
      <FoxInteractions />

      <header className="site-header" aria-label="Cabeçalho">
        <a className="brand" href="#inicio" aria-label="Fox Doceria">
          <img src="/imagens/FOXDOCERIA.png" alt="Logo Fox Doceria" />
        </a>
        <nav className="nav-links" aria-label="Navegação principal">
          <a href="#destaque">Destaque</a>
          <a href="#produtos">Produtos</a>
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
            <a className="primary-button" href="#produtos">
              Ver Produtos
            </a>
          </div>
        </section>

        <section id="destaque" className="section weekly-section">
          <div className="section-heading reveal">
            <p className="eyebrow">Destaque da Semana</p>
            <h2>Bolo de Chocolate Especial</h2>
          </div>

          <article className="featured-card reveal">
            <div className="featured-image">
              <img
                src="https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=1200&q=85"
                alt="Fatia de bolo de chocolate artesanal"
              />
            </div>
            <div className="featured-copy">
              <span className="tag">Mais pedido</span>
              <h3>Bolo de Chocolate Especial</h3>
              <p>
                Nosso bolo mais vendido da semana: massa fofinha, cobertura cremosa e sabor
                de chocolate na medida certa.
              </p>
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
            <div className="carousel-controls" aria-label="Controles do carrossel de produtos">
              <button
                className="carousel-button"
                type="button"
                data-carousel-prev
                aria-label="Produto anterior"
              >
                &lsaquo;
              </button>
              <button
                className="carousel-button"
                type="button"
                data-carousel-next
                aria-label="Próximo produto"
              >
                &rsaquo;
              </button>
            </div>
          </div>

          <div className="product-carousel reveal" aria-label="Carrossel de produtos">
            <div className="product-track" data-product-track>
              {products.map((product) => (
                <article className="product-card" key={product.name}>
                  <img src={product.image} alt={product.alt} />
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <p>{product.description}</p>
                    <strong>{product.price}</strong>
                  </div>
                </article>
              ))}
            </div>
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
                  <strong>Produtos fresquinhos</strong>
                  <p>Tortas, bolos e brownie para adoçar o intervalo.</p>
                </article>
                <article>
                  <span>Sexta-feira</span>
                  <strong>Destaques da semana</strong>
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
        <img src="/imagens/FOXDOCERIA.png" alt="Logo Fox Doceria" />
        <p>Feito com carinho pela Fox Doceria.</p>
        <div className="social-links" aria-label="Redes sociais">
          <a href="#" aria-label="Instagram">
            IG
          </a>
          <a href="#" aria-label="TikTok">
            TT
          </a>
          <a href="#" aria-label="WhatsApp">
            WA
          </a>
        </div>
        <small>© 2026 Fox Doceria. Todos os direitos reservados.</small>
      </footer>
    </>
  );
}
