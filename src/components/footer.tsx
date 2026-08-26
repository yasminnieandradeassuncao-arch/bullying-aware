import { Link } from "@tanstack/react-router";
import { Instagram, Youtube, Twitter, ShieldCheck } from "lucide-react";

export function Footer() {
  return (
    <footer id="contato" className="border-t border-border/60 px-4 py-16 sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="flex items-center gap-2 text-base font-semibold">
            <ShieldCheck aria-hidden="true" className="size-5 text-primary" />
            Imersão Bullying
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Realidade não Editada. Um projeto educativo para transformar escolas em ambientes de
            respeito, empatia e convivência.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            Emergência escolar? Fale com a coordenação. Disque 100 – Direitos Humanos.
          </p>
        </div>

        <nav aria-label="Navegação do rodapé">
          <h2 className="text-sm font-semibold">Navegar</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/home" className="transition-colors hover:text-foreground">
                Início
              </Link>
            </li>
            <li>
              <Link to="/home" hash="sobre" className="transition-colors hover:text-foreground">
                Sobre o projeto
              </Link>
            </li>
            <li>
              <Link to="/minigames" className="transition-colors hover:text-foreground">
                Minigames
              </Link>
            </li>
            <li>
              <Link to="/ia" className="transition-colors hover:text-foreground">
                IA Educacional
              </Link>
            </li>
          </ul>
        </nav>

        <div>
          <h2 className="text-sm font-semibold">Redes (fictícias)</h2>
          <ul className="mt-4 flex gap-3">
            {[
              { Icon: Instagram, label: "Instagram" },
              { Icon: Youtube, label: "YouTube" },
              { Icon: Twitter, label: "X" },
            ].map(({ Icon, label }) => (
              <li key={label}>
                <a
                  href="#contato"
                  aria-label={`${label} do projeto (link fictício)`}
                  className="glass-surface grid size-11 place-items-center rounded-2xl text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Icon aria-hidden="true" className="size-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <p className="mx-auto mt-12 max-w-6xl text-xs text-muted-foreground">
        © {new Date().getFullYear()} Imersão Bullying – Realidade não Editada. Todos os direitos
        reservados. Projeto educativo sem fins comerciais.
      </p>
    </footer>
  );
}
