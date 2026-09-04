import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ShieldCheck, RotateCcw } from "lucide-react";
import { GlassButton } from "@/components/glass-button";
import { cn } from "@/lib/utils";

type NavItem = { label: string; to: string; hash?: string };

const items: NavItem[] = [
  { label: "Início", to: "/home" },
  { label: "Sobre", to: "/home", hash: "sobre" },
  { label: "Aprender", to: "/home", hash: "aprender" },
  { label: "Minigames", to: "/minigames" },
  { label: "IA Educacional", to: "/ia" },
  { label: "Contato", to: "/home", hash: "contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
      <nav
        aria-label="Navegação principal"
        className={cn(
          "mx-auto flex max-w-6xl items-center gap-4 rounded-3xl px-4 py-3 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] sm:px-6",
          scrolled ? "glass-surface" : "border border-transparent",
        )}
      >
        <Link
          to="/home"
          className="flex min-w-0 items-center gap-2 rounded-full text-sm font-semibold tracking-tight"
        >
          <ShieldCheck aria-hidden="true" className="size-5 shrink-0 text-primary" />
          <span className="truncate">Imersão Bullying</span>
        </Link>

        <ul className="mx-auto hidden items-center gap-1 lg:flex">
          {items.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                {...(item.hash ? { hash: item.hash } : {})}
                className="rounded-full px-3 py-2 text-sm text-muted-foreground transition-colors duration-300 hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="ml-auto flex items-center gap-2 lg:ml-0">
          <GlassButton asChild size="sm" variant="glass" className="hidden sm:inline-flex">
            <Link to="/">
              <RotateCcw aria-hidden="true" />
              Recomeçar
            </Link>
          </GlassButton>
          <GlassButton asChild size="sm" className="hidden sm:inline-flex">
            <Link to="/ia">Começar Agora</Link>
          </GlassButton>
          <GlassButton
            variant="glass"
            size="icon"
            className="lg:hidden"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X /> : <Menu />}
          </GlassButton>
        </div>

      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
            transition={{ duration: 0.35, ease: [0.32, 0.72, 0, 1] }}
            className="glass-surface mx-auto mt-2 max-w-6xl rounded-3xl p-3 lg:hidden"
          >
            <ul className="flex flex-col">
              {items.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.to}
                    {...(item.hash ? { hash: item.hash } : {})}
                    onClick={() => setOpen(false)}
                    className="flex min-h-11 items-center rounded-2xl px-4 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
