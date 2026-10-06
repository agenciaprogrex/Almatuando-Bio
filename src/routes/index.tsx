import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/almatuando-logo.png.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ALMATUANDO — Lista de espera e contato" },
      { name: "description", content: "Entre na lista de espera da ALMATUANDO ou fale conosco pelo WhatsApp." },
      { property: "og:title", content: "ALMATUANDO — Lista de espera e contato" },
      { property: "og:description", content: "Entre na lista de espera da ALMATUANDO ou fale conosco pelo WhatsApp." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="brand-page">
      <a className="skip-link" href="#main">Ir para o conteúdo</a>
      <main id="main" className="brand-main">
        <header className="brand-header">
          <div className="brand-logo-frame">
            <img className="brand-logo" src={logo.url} alt="Logo ALMATUANDO" fetchPriority="high" />
          </div>
        </header>
        <nav className="brand-links" aria-label="Links da ALMATUANDO">
          <Button asChild variant="brandLink">
            <a href="https://formularioalmatuando.vercel.app/" target="_blank" rel="noopener noreferrer">
              <span>Lista de espera</span><ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="brandLink">
            <a href="https://wa.me/5565992347338?text=Ol%C3%A1!%20Vim%20do%20Instagram%20da%20AlmAtuando.%20Gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es..." target="_blank" rel="noopener noreferrer">
              <span>Contato</span><ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        </nav>
        <footer className="brand-footer">
          <p>Posicionamos marcas com estratégia, direção criativa e eventos.</p>
        </footer>
      </main>
    </div>
  );
}
