import FoxInteractions from "./FoxInteractions";

function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="none" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M16.2 3c.33 2.18 1.57 3.55 3.8 3.69v3.16a7.25 7.25 0 0 1-3.72-1.13v5.66c0 2.86-1.72 5.14-4.54 5.62-2.64.45-5.18-.87-6.15-3.13-1.1-2.58.03-5.55 2.56-6.74a5.77 5.77 0 0 1 2.86-.53v3.32c-.35-.05-.67-.03-.97.07-1.05.34-1.68 1.32-1.51 2.36.16 1.02 1 1.78 2.05 1.85 1.28.09 2.28-.83 2.29-2.22.03-3.84 0-7.69 0-11.54V3h3.33Z" />
    </svg>
  );
}

function WhatsAppIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor" {...props}>
      <path d="M19.05 4.91A9.76 9.76 0 0 0 12.08 2C6.66 2 2.25 6.41 2.25 11.83c0 1.73.45 3.42 1.32 4.91L2.16 22l5.38-1.37a9.8 9.8 0 0 0 4.54 1.15h.01c5.42 0 9.83-4.41 9.83-9.83a9.78 9.78 0 0 0-2.87-7.04ZM12.09 20.1h-.01a8.16 8.16 0 0 1-4.16-1.14l-.3-.18-3.19.81.85-3.1-.2-.32a8.13 8.13 0 0 1-1.25-4.34c0-4.55 3.7-8.25 8.25-8.25a8.18 8.18 0 0 1 5.84 2.43 8.2 8.2 0 0 1 2.42 5.94c0 4.55-3.7 8.15-8.25 8.15Zm4.52-6.17c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.12-.16.25-.64.8-.78.96-.14.17-.29.18-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.35-.77-1.85-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.87.85-.87 2.07s.89 2.4 1.01 2.57c.12.17 1.75 2.67 4.24 3.74.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.46-.6 1.67-1.18.21-.58.21-1.08.14-1.18-.06-.1-.23-.16-.48-.28Z" />
    </svg>
  );
}

export function SiteHeader() {
  return (
    <header className="site-header" aria-label="Cabeçalho">
      <a className="brand" href="/" aria-label="Fox Doceria">
        <img src="/imagens/FOXDOCERIA1.png" alt="Logo Fox Doceria" />
      </a>
      <button className="menu-toggle" type="button" data-menu-toggle aria-label="Abrir menu">
        <span />
        <span />
        <span />
      </button>
      <nav className="nav-links" data-nav aria-label="Navegação principal">
        <a href="/cardapio">Cardápio</a>
        <a href="/historia">História</a>
        <a href="/onde-comprar">Onde comprar</a>
        <a href="/galeria">Galeria</a>
        <a href="/destaques">Destaques</a>
        <a href="/encomendas">Encomendas</a>
        <a href="/fidelidade">Fidelidade</a>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src="/imagens/FOXDOCERIA1.png" alt="Logo Fox Doceria" />
          <p>Feito com carinho pela Fox Doceria.</p>
        </div>
        <div className="footer-column">
          <h3>Links rápidos</h3>
          <a href="/cardapio">Cardápio</a>
          <a href="/destaques">Destaques</a>
          <a href="/onde-comprar">Onde comprar</a>
        </div>
        <div className="footer-column">
          <h3>Horários</h3>
          <p>Segunda a sexta<br />Intervalo escolar</p>
          <p>Sábado<br />Intervalo escolar</p>
        </div>
        <div className="footer-column">
          <h3>Redes sociais</h3>
          <div className="social-links" aria-label="Redes sociais">
            <a href="#" aria-label="Instagram"><InstagramIcon width={20} height={20} /></a>
            <a href="#" aria-label="TikTok"><TikTokIcon width={20} height={20} /></a>
            <a href="#" aria-label="WhatsApp"><WhatsAppIcon width={20} height={20} /></a>
          </div>
        </div>
      </div>
      <small>© 2026 Fox Doceria. Todos os direitos reservados.</small>
    </footer>
  );
}

export default function SiteChrome({ children }) {
  return (
    <>
      <FoxInteractions />
      <SiteHeader />
      {children}
      <SiteFooter />
    </>
  );
}

export function PageHero({ eyebrow, title, text, image }) {
  return (
    <section className="page-hero">
      <div className="page-hero-bg" style={{ backgroundImage: `url("${image}")` }} aria-hidden="true" />
      <div className="page-hero-shade" aria-hidden="true" />
      <div className="page-hero-content reveal">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}
