import SiteChrome, { PageHero } from "../SiteChrome";
import { featuredImage, products } from "../siteData";
import FilteredMenu from "./FilteredMenu";

export default function CardapioPage() {
  return (
    <SiteChrome>
      <main>
        <PageHero
          eyebrow="Cardápio completo"
          title="Todos os doces da Fox Doceria em uma página."
          text="Veja fotos, preços, ingredientes e disponibilidade antes de escolher seu favorito."
          image={featuredImage}
        />
        <FilteredMenu products={products} />
      </main>
    </SiteChrome>
  );
}
