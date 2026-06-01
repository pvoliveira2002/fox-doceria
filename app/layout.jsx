import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  title: "Fox Doceria",
  description:
    "Doces artesanais da Fox Doceria vendidos no Colégio Centro Educacional MAARA.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${poppins.variable}`}>
      <body>{children}</body>
    </html>
  );
}
