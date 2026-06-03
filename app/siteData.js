export const featuredImage =
  "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?auto=format&fit=crop&w=1200&q=85";

export const products = [
  {
    name: "Torta de Limão sem Chantili",
    category: "Tortas",
    price: "R$ 4,00",
    description: "Base crocante, creme cítrico e final delicado para quem ama frescor.",
    ingredients: ["Limão", "Leite condensado", "Base crocante"],
    availability: "Segunda a sábado",
    badges: ["Artesanal", "Cítrica"],
    rating: "4.8",
    image:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?auto=format&fit=crop&w=900&q=85",
    alt: "Torta de limão artesanal",
  },
  {
    name: "Torta de Limão com Chantili",
    category: "Tortas",
    price: "R$ 4,50",
    description: "O azedinho clássico com uma camada leve e cremosa de chantili.",
    ingredients: ["Limão", "Chantili", "Base crocante"],
    availability: "Últimas unidades da semana",
    badges: ["Artesanal", "Cremosa"],
    rating: "4.9",
    image: "/imagens/torta-limao-chantili.png",
    alt: "Torta de limão com cobertura de chantili",
  },
  {
    name: "Bolo de Chocolate",
    category: "Bolos",
    price: "R$ 5,00",
    description: "Chocolate intenso, massa macia e cobertura generosa em cada pedaço.",
    ingredients: ["Chocolate", "Massa fofinha", "Cobertura cremosa"],
    availability: "Mais vendido da semana",
    badges: ["Mais vendido", "Artesanal"],
    rating: "4.9",
    image: featuredImage,
    alt: "Bolo de chocolate com cobertura",
  },
  {
    name: "Bolo de Cenoura",
    category: "Bolos",
    price: "R$ 5,00",
    description: "Clássico caseiro com cobertura de chocolate e aquele gosto de afeto.",
    ingredients: ["Cenoura", "Calda de chocolate", "Massa caseira"],
    availability: "Disponível por fornada",
    badges: ["Caseiro", "Artesanal"],
    rating: "4.8",
    image: "https://cdn.pixabay.com/photo/2018/05/08/14/31/carrot-cake-3383170_1280.jpg",
    alt: "Bolo de cenoura com calda de chocolate",
  },
  {
    name: "Brownie Tradicional",
    category: "Brownies",
    price: "R$ 4,00",
    description: "Crocante por fora, molhadinho por dentro e perfeito para adoçar o dia.",
    ingredients: ["Chocolate", "Massa densa", "Porção individual"],
    availability: "Segunda a sábado",
    badges: ["Favorito", "Artesanal"],
    rating: "4.9",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=88",
    alt: "Brownies de chocolate",
  },
];

export const weeklyHighlights = [
  { rank: "1º", name: "Bolo de Chocolate", badge: "Mais vendido", image: featuredImage },
  { rank: "2º", name: "Torta de Limão com Chantili", badge: "Últimas unidades", image: "/imagens/torta-limao-chantili.png" },
  {
    rank: "3º",
    name: "Brownie Tradicional",
    badge: "Favorito",
    image:
      "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=900&q=88",
  },
];

export const gallery = [
  ...products.map((product) => ({
    src: product.image,
    alt: product.alt,
    title: product.name,
    label: product.price,
  })),
  {
    src: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85",
    alt: "Doces artesanais variados",
    title: "Destaques da Semana",
    label: "Seleção",
  },
  {
    src: "https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=900&q=85",
    alt: "Doces em vitrine",
    title: "Vitrine Fox",
    label: "MAARA",
  },
  {
    src: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85",
    alt: "Sobremesa artesanal",
    title: "Fornada Especial",
    label: "Artesanal",
  },
];

export const faqs = [
  ["Aceita Pix?", "Sim. Você pode pagar por Pix no momento da compra."],
  ["Tem encomenda?", "As encomendas podem ser solicitadas para festas, aniversários e eventos escolares."],
  ["Faz bolos inteiros?", "Sim, sob orçamento e disponibilidade da equipe."],
  ["Quais dias vende?", "De segunda a sábado, durante o intervalo escolar."],
  ["Onde fica?", "No Centro Educacional MAARA, nos dias de venda da Fox Doceria."],
  ["Posso reservar?", "Sim. Fale com a equipe para verificar o estoque da semana."],
];
