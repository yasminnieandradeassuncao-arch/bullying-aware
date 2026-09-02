/* Imersão Bullying – Realidade não Editada
   React (UMD) + JavaScript puro, sem build. Rotas por hash. */
(function () {
  "use strict";

  const { createElement: h, useState, useEffect, useRef, useCallback, Fragment } = React;
  const D = window.APP_DATA;

  /* ---------------- Ícones (SVG minimalista) ---------------- */
  const PATHS = {
    book: "M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5V5a2 2 0 0 1 2-2h14v18H6.5A2.5 2.5 0 0 1 4 19.5Z",
    users: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8ZM22 21v-2a4 4 0 0 0-3-3.87",
    eye: "M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7-10-7-10-7ZM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z",
    shield: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10ZM9 12l2 2 4-4",
    sparkles: "M12 3l1.9 4.6L18.5 9.5 13.9 11.4 12 16l-1.9-4.6L5.5 9.5l4.6-1.9L12 3ZM19 15l.9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z",
    siren: "M7 18v-5a5 5 0 0 1 10 0v5M4 18h16v3H4zM12 3v2M4.5 6.5 6 8M19.5 6.5 18 8",
    heart: "M12 20s-7-4.3-7-9.3A4 4 0 0 1 12 8a4 4 0 0 1 7 2.7c0 5-7 9.3-7 9.3Z",
    message: "M21 15a3 3 0 0 1-3 3H8l-5 4V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v9Z",
    alert: "M12 3 2 21h20L12 3ZM12 9v6M12 18h.01",
    hand: "M7 11V6a1.5 1.5 0 0 1 3 0v5M10 11V4.5a1.5 1.5 0 0 1 3 0V11M13 11V6a1.5 1.5 0 0 1 3 0v6M16 12a1.5 1.5 0 0 1 3 0v3a6 6 0 0 1-6 6h-1a7 7 0 0 1-7-7v-3",
    brain: "M9 3a3 3 0 0 0-3 3 3 3 0 0 0-1 5.8V15a3 3 0 0 0 4 2.8V21M15 3a3 3 0 0 1 3 3 3 3 0 0 1 1 5.8V15a3 3 0 0 1-4 2.8V21M9 3h6",
    globe: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3 12h18M12 3c2.5 3 2.5 15 0 18M12 3c-2.5 3-2.5 15 0 18",
    ban: "M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM5.6 5.6l12.8 12.8",
    check: "M20 6 9 17l-5-5",
    x: "M18 6 6 18M6 6l12 12",
    arrowUp: "M12 19V5M5 12l7-7 7 7",
    menu: "M4 7h16M4 12h16M4 17h16",
    close: "M18 6 6 18M6 6l12 12",
    chevron: "m6 9 6 6 6-6",
    trophy: "M8 4h8v4a4 4 0 0 1-8 0V4ZM6 5H4v2a3 3 0 0 0 3 3M18 5h2v2a3 3 0 0 1-3 3M10 15h4M9 20h6M12 15v5",
    instagram: "M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4ZM12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM17.5 6.5h.01",
    youtube: "M2 12c0-2.6.2-4 .6-4.8.4-.8 1.2-1.2 2.3-1.3C7 5.7 9.4 5.6 12 5.6s5 .1 7.1.3c1.1.1 1.9.5 2.3 1.3.4.8.6 2.2.6 4.8s-.2 4-.6 4.8c-.4.8-1.2 1.2-2.3 1.3-2.1.2-4.5.3-7.1.3s-5-.1-7.1-.3c-1.1-.1-1.9-.5-2.3-1.3C2.2 16 2 14.6 2 12ZM10 9.5l5 2.5-5 2.5v-5Z",
    x_social: "M4 4l16 16M20 4 4 20",
  };

  function Icon({ name, size = 18, className }) {
    const d = PATHS[name] || PATHS.sparkles;
    return h(
      "svg",
      {
        width: size,
        height: size,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 1.7,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        "aria-hidden": "true",
        className,
      },
      h("path", { d }),
    );
  }

  /* ---------------- Componentes base ---------------- */
  function cx() {
    return Array.prototype.filter.call(arguments, Boolean).join(" ");
  }

  function Button(props) {
    const { variant, size, className, children, ...rest } = props;
    return h(
      "button",
      { className: cx("btn", variant, size, className), ...rest },
      children,
    );
  }

  function GlassCard(props) {
    const { className, interactive, children, ...rest } = props;
    return h(
      "div",
      { className: cx("glass", "card", interactive && "interactive", className), ...rest },
      children,
    );
  }

  function IconBadge({ name, accent }) {
    return h("span", { className: cx("icon-badge", accent && "accent") }, h(Icon, { name, size: 20 }));
  }

  function AnimatedBackground() {
    return h(
      "div",
      { className: "bg-wrap", "aria-hidden": "true" },
      h("div", { className: "bg-glow" }),
      h("span", { className: "blur-circle one" }),
      h("span", { className: "blur-circle two" }),
      h("span", { className: "blur-circle three" }),
    );
  }

  /* Scroll reveal simples via IntersectionObserver */
  function Reveal({ children, className }) {
    const ref = useRef(null);
    const [visible, setVisible] = useState(false);
    useEffect(() => {
      const el = ref.current;
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              setVisible(true);
              io.disconnect();
            }
          });
        },
        { threshold: 0.2 },
      );
      io.observe(el);
      return () => io.disconnect();
    }, []);
    return h("div", { ref, className: cx("reveal", visible && "visible", className) }, children);
  }

  function SectionTitle({ eyebrow, title, description, left }) {
    return h(
      "div",
      { className: cx("section-head", left && "left") },
      eyebrow ? h("p", { className: "eyebrow" }, eyebrow) : null,
      h("h2", null, title),
      description ? h("p", null, description) : null,
    );
  }

  /* ---------------- Router por hash ---------------- */
  function useHashRoute() {
    const get = () => window.location.hash.replace(/^#/, "") || "/";
    const [route, setRoute] = useState(get);
    useEffect(() => {
      const onHash = () => {
        setRoute(get());
        window.scrollTo({ top: 0 });
      };
      window.addEventListener("hashchange", onHash);
      return () => window.removeEventListener("hashchange", onHash);
    }, []);
    return route;
  }

  const go = (path) => {
    window.location.hash = path;
  };

  /* ---------------- Navbar ---------------- */
  const NAV_LINKS = [
    { label: "Início", href: "#/home" },
    { label: "Sobre", href: "#/home#sobre" },
    { label: "Aprender", href: "#/home#aprender" },
    { label: "Minigames", href: "#/minigames" },
    { label: "IA Educacional", href: "#/ia" },
    { label: "Contato", href: "#/home#contato" },
  ];

  function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);
    useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 12);
      onScroll();
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onLink = (e, href) => {
      e.preventDefault();
      setOpen(false);
      const parts = href.split("#").filter(Boolean);
      const route = "#" + parts[0];
      const anchor = parts[1];
      if (window.location.hash.replace(/^#/, "") !== parts[0]) {
        window.location.hash = parts[0];
      }
      requestAnimationFrame(() => {
        if (anchor) {
          const el = document.getElementById(anchor);
          if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      });
      void route;
    };

    return h(
      "header",
      { className: "navbar" },
      h(
        "nav",
        { className: cx("navbar-inner", scrolled && "scrolled"), "aria-label": "Navegação principal" },
        h(
          "a",
          { className: "brand", href: "#/home", onClick: (e) => onLink(e, "#/home") },
          h(Icon, { name: "shield", size: 18 }),
          h("span", null, "Imersão Bullying"),
        ),
        h(
          "div",
          { className: "nav-links" },
          NAV_LINKS.map((l) =>
            h("a", { key: l.label, href: l.href, onClick: (e) => onLink(e, l.href) }, l.label),
          ),
        ),
        h(
          "div",
          { className: "nav-actions" },
          h(Button, { onClick: () => go("/minigames") }, "Começar Agora"),
          h(
            Button,
            {
              className: "icon glass-btn menu-toggle",
              "aria-label": open ? "Fechar menu" : "Abrir menu",
              "aria-expanded": open,
              onClick: () => setOpen((o) => !o),
            },
            h(Icon, { name: open ? "close" : "menu", size: 18 }),
          ),
        ),
      ),
      open
        ? h(
            "div",
            { className: "glass nav-mobile" },
            NAV_LINKS.map((l) =>
              h("a", { key: l.label, href: l.href, onClick: (e) => onLink(e, l.href) }, l.label),
            ),
          )
        : null,
    );
  }

  /* ---------------- Footer ---------------- */
  function Footer() {
    return h(
      "footer",
      { className: "footer", id: "contato" },
      h(
        "div",
        { className: "footer-grid" },
        h(
          "div",
          null,
          h("div", { className: "brand" }, h(Icon, { name: "shield", size: 18 }), "Imersão Bullying"),
          h(
            "p",
            { className: "muted", style: { marginTop: 12, fontSize: 14, lineHeight: 1.6, maxWidth: "34em" } },
            "Uma experiência educativa sobre bullying: identificar, prevenir, agir, denunciar e apoiar. Em caso de violação de direitos, ligue 100 (Disque Direitos Humanos).",
          ),
          h(
            "div",
            { className: "socials" },
            h("a", { href: "#/home", "aria-label": "Instagram (fictício)" }, h(Icon, { name: "instagram", size: 18 })),
            h("a", { href: "#/home", "aria-label": "YouTube (fictício)" }, h(Icon, { name: "youtube", size: 18 })),
            h("a", { href: "#/home", "aria-label": "X (fictício)" }, h(Icon, { name: "x_social", size: 18 })),
          ),
        ),
        h(
          "div",
          null,
          h("h2", null, "Navegação"),
          h(
            "ul",
            null,
            NAV_LINKS.slice(0, 4).map((l) => h("li", { key: l.label }, h("a", { href: l.href }, l.label))),
          ),
        ),
        h(
          "div",
          null,
          h("h2", null, "Ajuda"),
          h(
            "ul",
            null,
            h("li", null, "Disque 100 – Direitos Humanos"),
            h("li", null, "Conselho Tutelar da sua cidade"),
            h("li", null, "Coordenação da escola"),
            h("li", null, "CVV – 188"),
          ),
        ),
      ),
      h(
        "p",
        { className: "copy" },
        "© " + new Date().getFullYear() + " Imersão Bullying – Realidade não Editada. Projeto educativo. Todos os direitos reservados.",
      ),
    );
  }

  /* ---------------- Tela 1–4: Wizard ---------------- */
  function Wizard() {
    const [step, setStep] = useState(0);
    const [selected, setSelected] = useState(null);
    const [name, setName] = useState("");
    const [turma, setTurma] = useState("");
    const next = () => setStep((s) => s + 1);

    const dots = h(
      "div",
      { className: "dots", "aria-hidden": "true" },
      [0, 1, 2, 3].map((i) => h("span", { key: i, className: step === i ? "on" : undefined })),
    );

    let content = null;

    if (step === 0) {
      content = h(
        "section",
        { className: "stack fade-in", key: "s0" },
        h("h1", { className: "title-xl text-gradient" }, "Olá!"),
        h(
          "p",
          { className: "lead", style: { marginTop: 18 } },
          "Seja bem-vindo à Imersão Bullying – Realidade não Editada",
        ),
        h(Button, { className: "lg", style: { marginTop: 28 }, onClick: next }, "Começar"),
      );
    } else if (step === 1) {
      content = h(
        "section",
        { className: "stack fade-in", key: "s1" },
        h("h1", { className: "title-lg text-gradient" }, "Aqui vamos aprender:"),
        h(
          "ul",
          { className: "grid two", style: { marginTop: 22 } },
          D.topics.map((t, i) =>
            h(
              "li",
              { key: t.label, className: "fade-in", style: { animationDelay: 0.08 * i + "s" } },
              h(
                "div",
                { className: "glass topic" },
                h(IconBadge, { name: t.icon, accent: i % 2 === 1 }),
                h("span", null, t.label),
              ),
            ),
          ),
        ),
        h(Button, { className: "lg", style: { marginTop: 24 }, onClick: next }, "Continuar"),
      );
    } else if (step === 2) {
      content = h(
        "section",
        { className: "stack fade-in", key: "s2", style: { textAlign: "left" } },
        h("p", { className: "eyebrow" }, "Questão Teste"),
        h(
          "h1",
          { className: "title-md", style: { marginTop: 8 } },
          "Se algum colega de classe zomba de você por questões relacionadas à raça, etnia ou religião, você:",
        ),
        h(
          "div",
          { style: { marginTop: 18, display: "grid", gap: 8 } },
          D.quizOptions.map((o, i) => {
            const active = selected && selected.id === o.id;
            return h(
              "button",
              {
                key: o.id,
                type: "button",
                "aria-pressed": !!active,
                onClick: () => setSelected(o),
                className: cx("option", active && (o.good ? "good" : "bad")),
                style: { animationDelay: 0.06 * i + "s" },
              },
              h(
                "span",
                { className: cx("bullet", active && (o.good ? "good" : "bad")), "aria-hidden": "true" },
                active ? h(Icon, { name: o.good ? "check" : "x", size: 14 }) : null,
              ),
              h("span", null, o.label),
            );
          }),
        ),
        selected
          ? h(
              "div",
              { className: cx("glass feedback", selected.good ? "good" : "bad"), "aria-live": "polite" },
              h("p", { className: "status" }, selected.good ? "Escolha adequada" : "Escolha inadequada"),
              h("p", null, selected.feedback),
            )
          : null,
        h(
          Button,
          { className: "lg", style: { marginTop: 20 }, disabled: !selected, onClick: next },
          "Continuar",
        ),
      );
    } else {
      content = h(
        "section",
        { className: "login-grid fade-in", key: "s3" },
        h(
          "form",
          {
            className: "glass card",
            onSubmit: (e) => {
              e.preventDefault();
              go("/home");
            },
          },
          h("p", { className: "eyebrow" }, "Acesso visual"),
          h("h1", { className: "title-md", style: { marginTop: 8 } }, "Entrar"),
          h(
            "p",
            { className: "muted", style: { marginTop: 8, fontSize: 14 } },
            "Sem cadastro e sem senha — apenas para continuar a experiência.",
          ),
          h(
            "label",
            { className: "field" },
            h("span", null, "Nome"),
            h("input", {
              value: name,
              onChange: (e) => setName(e.target.value),
              placeholder: "Seu nome",
              autoComplete: "name",
            }),
          ),
          h(
            "label",
            { className: "field" },
            h("span", null, "Turma (opcional)"),
            h("input", {
              value: turma,
              onChange: (e) => setTurma(e.target.value),
              placeholder: "Ex.: 9º B",
            }),
          ),
          h(Button, { className: "lg", type: "submit", style: { marginTop: 22, width: "100%" } }, "Entrar"),
        ),
        h(
          "div",
          { className: "side-cards", "aria-hidden": "true" },
          D.loginCards.map((c, i) =>
            h(
              "div",
              {
                key: c.title,
                className: "glass card interactive fade-in",
                style: { animationDelay: 0.08 * i + "s" },
              },
              h(IconBadge, { name: c.icon, accent: i % 2 === 1 }),
              h("h3", null, c.title),
              h("p", null, c.desc),
            ),
          ),
        ),
      );
    }

    return h(
      Fragment,
      null,
      h(AnimatedBackground),
      h(
        "main",
        { className: "screen" },
        h("p", { className: "sr-only", "aria-live": "polite" }, "Etapa " + (step + 1) + " de 4"),
        content,
        dots,
      ),
    );
  }

  /* ---------------- Landing page ---------------- */
  function Chart() {
    const [on, setOn] = useState(false);
    useEffect(() => {
      const t = setTimeout(() => setOn(true), 200);
      return () => clearTimeout(t);
    }, []);
    const max = Math.max.apply(null, D.dados.map((d) => d.value));
    return h(
      "ul",
      { className: "chart", role: "img", "aria-label": "Gráfico fictício de distribuição por tipo de bullying" },
      D.dados.map((d) =>
        h(
          "li",
          { key: d.label },
          h("span", { className: "value" }, d.value + "%"),
          h("i", { className: "bar", style: { height: on ? (d.value / max) * 100 + "%" : "0%" } }),
          h("span", null, d.label),
        ),
      ),
    );
  }

  function Faq() {
    const [open, setOpen] = useState(-1);
    return h(
      "ul",
      { className: "faq" },
      D.faq.map((item, i) =>
        h(
          "li",
          { key: item.q, className: "glass" },
          h(
            "button",
            {
              type: "button",
              "aria-expanded": open === i,
              onClick: () => setOpen(open === i ? -1 : i),
            },
            h("span", null, item.q),
            h(Icon, { name: "chevron", size: 18, className: cx("chev", open === i && "open") }),
          ),
          h("div", { className: cx("answer", open === i && "open") }, h("p", null, item.a)),
        ),
      ),
    );
  }

  function Home() {
    return h(
      Fragment,
      null,
      h(AnimatedBackground),
      h(Navbar),
      h(
        "main",
        { className: "page" },
        h(
          "section",
          { className: "hero", id: "inicio" },
          h(
            "div",
            { className: "hero-grid" },
            h(
              "div",
              { className: "fade-in" },
              h("p", { className: "eyebrow" }, "Realidade não Editada"),
              h("h1", { className: "text-gradient" }, "Bullying não é brincadeira."),
              h(
                "p",
                { className: "lead" },
                "Cada palavra tem peso e cada silêncio tem consequência. Aqui você aprende a identificar, prevenir, agir e transformar a convivência na sua escola — sem filtros e sem edição.",
              ),
              h(
                "div",
                { className: "hero-actions" },
                h(Button, { className: "lg", onClick: () => go("/ia") }, "Conversar com IA"),
                h(
                  Button,
                  { className: "lg glass-btn", onClick: () => go("/minigames") },
                  "Minigames",
                ),
              ),
            ),
            h("div", { className: "hero-art", "aria-hidden": "true" }, h("i"), h("i"), h("i")),
          ),
        ),

        h(
          "section",
          { className: "section", id: "sobre" },
          h(SectionTitle, {
            eyebrow: "Sobre o projeto",
            title: "Uma imersão que educa pela experiência",
            description:
              "Construído para escolas: linguagem direta, conteúdo confiável e interação que faz o estudante refletir antes de agir.",
          }),
          h(
            "div",
            { className: "container cards three" },
            D.sobre.map((c) =>
              h(
                Reveal,
                { key: c.title },
                h(
                  "div",
                  { className: "glass card interactive" },
                  h(IconBadge, { name: c.icon }),
                  h("h3", null, c.title),
                  h("p", null, c.desc),
                ),
              ),
            ),
          ),
        ),

        h(
          "section",
          { className: "section", id: "aprender" },
          h(SectionTitle, {
            eyebrow: "Aprender",
            title: "Tipos de Bullying",
            description: "Reconhecer o formato da violência é o primeiro passo para interrompê-la.",
          }),
          h(
            "ul",
            { className: "container cards three" },
            D.tipos.map((t, i) =>
              h(
                "li",
                { key: t.title },
                h(
                  Reveal,
                  null,
                  h(
                    "div",
                    { className: "glass card interactive" },
                    h(IconBadge, { name: t.icon, accent: i % 2 === 1 }),
                    h("h3", null, t.title),
                    h("p", null, t.desc),
                  ),
                ),
              ),
            ),
          ),
        ),

        h(
          "section",
          { className: "section", id: "identificar" },
          h(
            "div",
            { className: "split" },
            h(
              "div",
              null,
              h(SectionTitle, {
                left: true,
                eyebrow: "Como identificar",
                title: "Sinais de alerta",
                description:
                  "Nem sempre a vítima fala. Observar mudanças de rotina e comportamento é o caminho para perceber cedo.",
              }),
            ),
            h(
              "ul",
              { style: { display: "grid", gap: 12 } },
              D.sinais.map((s) =>
                h(
                  "li",
                  { key: s },
                  h(
                    Reveal,
                    null,
                    h("div", { className: "glass check" }, h(Icon, { name: "check", size: 18 }), h("span", null, s)),
                  ),
                ),
              ),
            ),
          ),
        ),

        h(
          "section",
          { className: "section", id: "prevenir" },
          h(SectionTitle, {
            eyebrow: "Como prevenir",
            title: "Prevenção que funciona no dia a dia",
            description: "Prevenir é rotina, não campanha isolada.",
          }),
          h(
            "div",
            { className: "container cards two" },
            D.prevencao.map((p, i) =>
              h(
                Reveal,
                { key: p.title },
                h(
                  "div",
                  { className: "glass card interactive" },
                  h(IconBadge, { name: p.icon, accent: i % 2 === 1 }),
                  h("h3", null, p.title),
                  h("p", null, p.desc),
                ),
              ),
            ),
          ),
        ),

        h(
          "section",
          { className: "section", id: "agir" },
          h(SectionTitle, {
            eyebrow: "Como agir",
            title: "Do relato à solução",
            description: "Cinco passos que protegem a vítima e responsabilizam quem agride.",
          }),
          h(
            "ol",
            { className: "timeline" },
            D.timeline.map((t) =>
              h(
                "li",
                { key: t.step },
                h(
                  Reveal,
                  null,
                  h("span", { className: "step", "aria-hidden": "true" }, t.step),
                  h("h3", null, t.title),
                  h("p", null, t.desc),
                ),
              ),
            ),
          ),
        ),

        h(
          "section",
          { className: "section", id: "dados" },
          h(SectionTitle, {
            eyebrow: "Dados importantes",
            title: "Distribuição por tipo (exemplo visual)",
            description: "Números fictícios, usados apenas para ilustrar a proporção entre os tipos de bullying.",
          }),
          h("div", { className: "container", style: { marginTop: 40 } }, h("div", { className: "glass card" }, h(Chart))),
        ),

        h(
          "section",
          { className: "section", id: "faq" },
          h(SectionTitle, { eyebrow: "FAQ", title: "Perguntas Frequentes" }),
          h(Faq),
        ),
      ),
      h(Footer),
    );
  }

  /* ---------------- Chat IA (somente interface) ---------------- */
  function IA() {
    const [messages, setMessages] = useState([
      {
        id: 1,
        role: "assistant",
        text: "Olá! Sou o assistente educacional da Imersão Bullying. Faça uma pergunta sobre bullying, prevenção ou como ajudar alguém. (Interface de demonstração — pronta para integração futura.)",
      },
    ]);
    const [value, setValue] = useState("");
    const [typing, setTyping] = useState(false);
    const endRef = useRef(null);

    useEffect(() => {
      if (endRef.current) endRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
    }, [messages, typing]);

    const send = useCallback((raw) => {
      const content = (raw || "").trim();
      if (!content) return;
      setMessages((prev) => prev.concat({ id: Date.now(), role: "user", text: content }));
      setValue("");
      setTyping(true);
      // PONTO DE INTEGRAÇÃO: substituir por chamada real à IA no futuro.
      setTimeout(() => {
        setTyping(false);
        setMessages((prev) =>
          prev.concat({
            id: Date.now() + 1,
            role: "assistant",
            text: "Esta é uma resposta de demonstração. A interface já está preparada para receber respostas de uma IA educacional. Enquanto isso: registre o ocorrido, fale com um adulto de confiança e acione a coordenação da escola.",
          }),
        );
      }, 900);
    }, []);

    return h(
      Fragment,
      null,
      h(AnimatedBackground),
      h(Navbar),
      h(
        "main",
        { className: "chat" },
        h(
          "div",
          { className: "chat-inner fade-in" },
          h("h1", { className: "chat-title" }, h(Icon, { name: "sparkles", size: 20 }), "IA Educacional"),
          h(
            "div",
            { className: "chat-log", role: "log", "aria-live": "polite", "aria-label": "Histórico da conversa" },
            messages.map((m) => h("div", { key: m.id, className: cx("msg", m.role) }, h("p", null, m.text))),
            typing ? h("div", { className: "msg assistant" }, h("p", { className: "muted" }, "Digitando…")) : null,
            h("div", { ref: endRef }),
          ),
          h(
            "div",
            { className: "chat-suggestions" },
            D.chatSuggestions.map((s) =>
              h("button", { key: s, type: "button", onClick: () => send(s) }, s),
            ),
          ),
          h(
            "form",
            {
              className: "glass chat-form",
              onSubmit: (e) => {
                e.preventDefault();
                send(value);
              },
            },
            h("textarea", {
              rows: 1,
              value,
              placeholder: "Escreva sua pergunta…",
              "aria-label": "Mensagem",
              onChange: (e) => setValue(e.target.value),
              onKeyDown: (e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send(value);
                }
              },
            }),
            h(
              Button,
              { className: "icon", type: "submit", "aria-label": "Enviar mensagem", disabled: !value.trim() },
              h(Icon, { name: "arrowUp", size: 18 }),
            ),
          ),
        ),
      ),
    );
  }

  /* ---------------- Minigames ---------------- */
  function GameBoard({ game, onExit }) {
    const [index, setIndex] = useState(0);
    const [chosen, setChosen] = useState(null);
    const [score, setScore] = useState(0);
    const [done, setDone] = useState(false);
    const q = game.questions[index];

    const pick = (i) => {
      if (chosen !== null) return;
      setChosen(i);
      if (i === q.correct) setScore((s) => s + 1);
    };

    const next = () => {
      if (index + 1 >= game.questions.length) {
        setDone(true);
        return;
      }
      setIndex(index + 1);
      setChosen(null);
    };

    const restart = () => {
      setIndex(0);
      setChosen(null);
      setScore(0);
      setDone(false);
    };

    if (done) {
      return h(
        "div",
        { className: "glass board" },
        h(
          "div",
          { className: "result" },
          h(IconBadge, { name: "trophy" }),
          h("p", { className: "big" }, score + "/" + game.questions.length),
          h(
            "p",
            { className: "muted", style: { marginTop: 8, fontSize: 14 } },
            score === game.questions.length
              ? "Perfeito! Você sabe como proteger e apoiar."
              : "Bom começo. Releia as explicações e tente novamente.",
          ),
          h(
            "div",
            { className: "actions", style: { justifyContent: "center" } },
            h(Button, { onClick: restart }, "Jogar novamente"),
            h(Button, { className: "glass-btn", onClick: onExit }, "Escolher outro jogo"),
          ),
        ),
      );
    }

    return h(
      "div",
      { className: "glass board fade-in" },
      h(
        "div",
        { className: "board-head" },
        h("h2", null, game.title),
        h("span", { className: "score" }, h(Icon, { name: "trophy", size: 16 }), score + " pts"),
      ),
      h(
        "div",
        { className: "progress", role: "progressbar", "aria-valuemin": 0, "aria-valuemax": game.questions.length, "aria-valuenow": index + 1 },
        h("i", { style: { width: ((index + (chosen !== null ? 1 : 0)) / game.questions.length) * 100 + "%" } }),
      ),
      h(
        "p",
        { className: "muted", style: { marginTop: 16, fontSize: 13 } },
        "Pergunta " + (index + 1) + " de " + game.questions.length,
      ),
      h("h3", { className: "title-md", style: { marginTop: 6 } }, q.prompt),
      h(
        "div",
        { style: { marginTop: 16, display: "grid", gap: 8 } },
        q.options.map((opt, i) => {
          const isCorrect = i === q.correct;
          const state = chosen === null ? null : isCorrect ? "good" : chosen === i ? "bad" : null;
          return h(
            "button",
            {
              key: opt,
              type: "button",
              className: cx("option", state),
              disabled: chosen !== null,
              onClick: () => pick(i),
              style: { animationDelay: 0.05 * i + "s" },
            },
            h(
              "span",
              { className: cx("bullet", state), "aria-hidden": "true" },
              state ? h(Icon, { name: state === "good" ? "check" : "x", size: 14 }) : String.fromCharCode(65 + i),
            ),
            h("span", null, opt),
          );
        }),
      ),
      chosen !== null
        ? h(
            "div",
            { className: cx("glass feedback", chosen === q.correct ? "good" : "bad"), "aria-live": "polite" },
            h("p", { className: "status" }, chosen === q.correct ? "Resposta correta" : "Resposta incorreta"),
            h("p", null, q.explanation),
            h(
              "div",
              { className: "actions" },
              h(
                Button,
                { onClick: next },
                index + 1 >= game.questions.length ? "Ver resultado" : "Próxima",
              ),
              h(Button, { className: "ghost", onClick: onExit }, "Sair"),
            ),
          )
        : null,
    );
  }

  function Minigames() {
    const [active, setActive] = useState(null);
    const game = D.games.find((g) => g.id === active) || null;

    return h(
      Fragment,
      null,
      h(AnimatedBackground),
      h(Navbar),
      h(
        "main",
        { className: "games-screen" },
        game
          ? h(GameBoard, { game, onExit: () => setActive(null) })
          : h(
              Fragment,
              null,
              h(SectionTitle, {
                eyebrow: "Minigames",
                title: "Aprender jogando",
                description: "Pontuação local, sem cadastro. Escolha um desafio e teste suas atitudes.",
              }),
              h(
                "div",
                { className: "games-grid" },
                D.games.map((g, i) =>
                  h(
                    "div",
                    {
                      key: g.id,
                      className: "glass card interactive game-card fade-in",
                      style: { animationDelay: 0.08 * i + "s" },
                    },
                    h(IconBadge, { name: i % 2 ? "sparkles" : "trophy", accent: i % 2 === 1 }),
                    h("h3", null, g.title),
                    h("p", null, g.description),
                    h(Button, { onClick: () => setActive(g.id) }, "Jogar"),
                  ),
                ),
              ),
            ),
      ),
    );
  }

  /* ---------------- App ---------------- */
  function App() {
    const route = useHashRoute();
    const path = route.split("#")[0];

    useEffect(() => {
      const titles = {
        "/": "Imersão Bullying – Realidade não Editada",
        "/home": "Bullying não é brincadeira | Imersão Bullying",
        "/ia": "IA Educacional | Imersão Bullying",
        "/minigames": "Minigames | Imersão Bullying",
      };
      document.title = titles[path] || titles["/"];
      document.body.classList.toggle("locked", path !== "/home");
    }, [path]);

    if (path === "/home") return h(Home);
    if (path === "/ia") return h(IA);
    if (path === "/minigames") return h(Minigames);
    return h(Wizard);
  }

  ReactDOM.createRoot(document.getElementById("root")).render(h(App));
})();
