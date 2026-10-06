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
            <a href="https://docs.google.com/forms/d/1daZHK-SxPAHp9lXV1QBp6AVVOt7m68XgoAEzU22ixvY/viewform?pli=1&edit_requested=true&edit_requested=true" target="_blank" rel="noopener noreferrer">
              <span>Lista de espera</span><ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
          <Button asChild variant="brandLink">
            <a href="https://wa.me/5565981191120" target="_blank" rel="noopener noreferrer">
              <span>Contato</span><ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        </nav>
        <footer className="brand-footer">
          <p>Posicionamos marcas com estratégia, direção criativa e eventos</p>
        </footer>
      </main>
    </div>
  );
}
