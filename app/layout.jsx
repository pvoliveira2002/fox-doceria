import "./globals.css";

export const metadata = {
  title: "Fox Doceria",
  description: "Doces artesanais da Fox Doceria vendidos no Colégio Centro Educacional MAARA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
