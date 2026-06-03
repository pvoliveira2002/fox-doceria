import { Heart, School, Sparkles, Users } from "lucide-react";
import SiteChrome, { PageHero } from "../SiteChrome";

const timeline = [
  ["Ideia", "A Fox Doceria nasceu da vontade de vender doces bem feitos dentro da rotina escolar."],
  ["Primeiras vendas", "As primeiras fornadas mostraram quais sabores chamavam mais atenção no intervalo."],
  ["Marca", "A identidade ganhou logo, vitrine digital e uma comunicação mais profissional."],
  ["Futuro", "O próximo passo é ampliar encomendas, fidelidade e presença nas redes sociais."],
];

const values = [
  { Icon: Heart, title: "Carinho", text: "Cada doce precisa ter gosto de cuidado." },
  { Icon: School, title: "Escola", text: "A marca nasceu no MAARA e conversa com esse público." },
  { Icon: Sparkles, title: "Capricho", text: "Visual, sabor e atendimento caminham juntos." },
  { Icon: Users, title: "Comunidade", text: "Clientes, amigos e colegas ajudam a marca crescer." },
];

export default function HistoriaPage() {
  return (
    <SiteChrome>
      <main>
        <PageHero
          eyebrow="Nossa história"
          title="Uma doceria escolar com atitude de marca."
          text="A Fox Doceria começou pequena, mas com uma ideia clara: transformar o intervalo em um momento mais gostoso."
          image="/imagens/hero-fox-doceria.jpg"
        />
        <section className="section story-section">
          <div className="story-copy reveal">
            <p className="eyebrow">Como surgiu</p>
            <h2>Feita por estudantes, para uma rotina que merece mais sabor.</h2>
            <p>A Fox Doceria nasceu dentro do Centro Educacional MAARA como um projeto de venda de doces artesanais. O objetivo é unir sabor, organização e atendimento próximo, criando uma experiência simples, bonita e confiável.</p>
          </div>
          <div className="value-grid">
            {values.map(({ Icon, title, text }) => (
              <article className="reason-card reveal" key={title}>
                <span><Icon size={28} /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
        <section className="section white-band">
          <div className="timeline">
            {timeline.map(([title, text]) => (
              <article className="timeline-item reveal" key={title}>
                <span>{title}</span>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
    </SiteChrome>
  );
}
