"use client";

import { Filter, MessageCircle } from "lucide-react";
import { useMemo, useState } from "react";
import ProductCards from "../ProductCards";

const categories = ["Todos", "Tortas", "Bolos", "Brownies", "Destaques"];

export default function FilteredMenu({ products }) {
  const [selectedCategory, setSelectedCategory] = useState("Todos");

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "Todos") return products;
    if (selectedCategory === "Destaques") {
      return products.filter((product) =>
        product.badges.some((badge) => ["Mais vendido", "Favorito"].includes(badge))
      );
    }
    return products.filter((product) => product.category === selectedCategory);
  }, [products, selectedCategory]);

  return (
    <>
      <section className="section page-section white-band">
        <div className="filter-row reveal" aria-label="Filtros do cardápio">
          <Filter size={18} aria-hidden="true" />
          {categories.map((category) => (
            <button
              className={selectedCategory === category ? "is-active" : ""}
              type="button"
              key={category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="menu-count reveal" aria-live="polite">
          {filteredProducts.length} {filteredProducts.length === 1 ? "produto encontrado" : "produtos encontrados"}
        </div>
        <div className="menu-table reveal">
          {filteredProducts.map((product) => (
            <article key={product.name}>
              <img src={product.image} alt={product.alt} />
              <div>
                <span>{product.category}</span>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <ul>
                  {product.ingredients.map((ingredient) => <li key={ingredient}>{ingredient}</li>)}
                </ul>
              </div>
              <aside>
                <strong>{product.price}</strong>
                <small>{product.availability}</small>
              </aside>
            </article>
          ))}
        </div>
      </section>
      <section className="section">
        <div className="section-heading reveal">
          <p className="eyebrow">Fotos grandes</p>
          <h2>Produtos com presença de cardápio profissional.</h2>
        </div>
        <ProductCards products={filteredProducts} />
        <div className="center-action reveal">
          <a className="primary-button quote-cta" href="/encomendas"><MessageCircle size={20} /> Montar orçamento</a>
        </div>
      </section>
    </>
  );
}
