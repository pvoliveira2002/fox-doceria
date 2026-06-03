"use client";

import { CalendarDays, CheckCircle2, MessageCircle, Send, X } from "lucide-react";
import { useMemo, useState } from "react";

const productOptions = [
  "Bolo de Chocolate",
  "Bolo de Cenoura",
  "Brownie Tradicional",
  "Torta de Limão",
  "Mix de doces",
];

export default function QuoteBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    contact: "",
    eventType: "Aniversário",
    date: "",
    quantity: "",
    product: "Mix de doces",
    delivery: "Retirar no MAARA",
    notes: "",
  });

  const summary = useMemo(() => {
    const quantity = form.quantity || "quantidade a definir";
    const date = form.date || "data a combinar";
    return `${form.product} para ${form.eventType.toLowerCase()}, ${quantity} unidades, ${date}.`;
  }, [form]);

  const updateField = (field, value) => {
    setForm((currentForm) => ({ ...currentForm, [field]: value }));
  };

  return (
    <>
      <button className="primary-button" type="button" onClick={() => setIsOpen(true)}>
        <MessageCircle size={20} />
        Solicitar orçamento
      </button>

      <div className={isOpen ? "quote-box is-open" : "quote-box"} aria-hidden={!isOpen}>
        <div className="quote-card" role="dialog" aria-modal="false" aria-label="Solicitar orçamento">
          <div className="quote-top">
            <span><CalendarDays size={18} /> Orçamento Fox</span>
            <button type="button" onClick={() => setIsOpen(false)} aria-label="Fechar orçamento">
              <X size={19} />
            </button>
          </div>

          <div className="quote-intro">
            <h3>Monte seu pedido</h3>
            <p>Preencha os dados principais para a equipe entender o evento e calcular melhor.</p>
          </div>

          <form className="quote-form">
            <label>
              Nome
              <input
                type="text"
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder="Seu nome"
              />
            </label>
            <label>
              WhatsApp
              <input
                type="tel"
                value={form.contact}
                onChange={(event) => updateField("contact", event.target.value)}
                placeholder="(00) 00000-0000"
              />
            </label>
            <label>
              Tipo de evento
              <select value={form.eventType} onChange={(event) => updateField("eventType", event.target.value)}>
                <option>Aniversário</option>
                <option>Festa</option>
                <option>Reunião</option>
                <option>Evento escolar</option>
                <option>Presente</option>
              </select>
            </label>
            <label>
              Data desejada
              <input type="date" value={form.date} onChange={(event) => updateField("date", event.target.value)} />
            </label>
            <label>
              Quantidade
              <input
                type="number"
                min="1"
                value={form.quantity}
                onChange={(event) => updateField("quantity", event.target.value)}
                placeholder="Ex: 20"
              />
            </label>
            <label>
              Produto
              <select value={form.product} onChange={(event) => updateField("product", event.target.value)}>
                {productOptions.map((product) => <option key={product}>{product}</option>)}
              </select>
            </label>
            <label>
              Retirada ou entrega
              <select value={form.delivery} onChange={(event) => updateField("delivery", event.target.value)}>
                <option>Retirar no MAARA</option>
                <option>Combinar entrega</option>
                <option>Ainda não sei</option>
              </select>
            </label>
            <label>
              Observações
              <textarea
                value={form.notes}
                onChange={(event) => updateField("notes", event.target.value)}
                placeholder="Tema, sabores, horário..."
              />
            </label>
          </form>

          <div className="quote-summary">
            <CheckCircle2 size={18} />
            <p>{summary}</p>
          </div>

          <button className="quote-submit" type="button">
            <Send size={18} />
            Enviar solicitação
          </button>
        </div>
      </div>
    </>
  );
}
