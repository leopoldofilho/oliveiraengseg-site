import type { Metadata } from "next";
import "./../styles/globals.css";

export const metadata: Metadata = {
  title: "Oliveira Engenharia – Consultoria, Treinamento e Projetos",
  description: "Segurança do Trabalho para obras e indústria – homologação, checklists NR, PT/RDO, treinamentos e KPIs.",
  openGraph: { title: "Oliveira Engenharia", description: "Segurança que acelera a sua obra — compliance sem fricção.", images: ["/assets/og-hero.png"] },
  icons: [{ rel: "icon", url: "/assets/favicon-32.png" }]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="pt-BR"><body>{children}</body></html>;
}
