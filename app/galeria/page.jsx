import SiteChrome, { PageHero } from "../SiteChrome";
import { gallery } from "../siteData";
import GalleryLightbox from "./GalleryLightbox";

export default function GaleriaPage() {
  return (
    <SiteChrome>
      <main>
        <PageHero
          eyebrow="Galeria completa"
          title="A vitrine visual da Fox Doceria."
          text="Fotos em estilo feed, com zoom ao clicar para ver cada detalhe dos doces."
          image="/imagens/torta-limao-chantili.png"
        />
        <section className="section">
          <GalleryLightbox photos={gallery} />
        </section>
      </main>
    </SiteChrome>
  );
}
