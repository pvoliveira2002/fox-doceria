import { Flame, Sparkles, Star } from "lucide-react";

export default function ProductCards({ products }) {
  return (
    <div className="product-grid reveal" aria-label="Produtos da Fox Doceria">
      {products.map((product) => (
        <article className="product-card" key={product.name}>
          <div className="product-photo">
            <img src={product.image} alt={product.alt} />
            <div className="product-badges">
              {product.badges.map((badge) => (
                <span key={badge}>
                  {badge === "Mais vendido" ? <Flame size={13} aria-hidden="true" /> : <Sparkles size={13} aria-hidden="true" />}
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <div className="product-info">
            <div className="product-rating">
              <Star size={15} fill="currentColor" aria-hidden="true" />
              {product.rating}
            </div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <ul>
              {product.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
            <div className="product-bottom">
              <strong>{product.price}</strong>
              <a href="/onde-comprar">Comprar</a>
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
