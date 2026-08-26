import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import {
  Accessibility,
  AlertTriangle,
  Ban,
  Brain,
  CheckCircle2,
  Globe,
  Hand,
  Heart,
  MessageSquare,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { AnimatedBackground } from "@/components/animated-background";
import { Footer } from "@/components/footer";
import { GlassButton } from "@/components/glass-button";
import { GlassCard } from "@/components/glass-card";
import { Navbar } from "@/components/navbar";
import { PageTransition } from "@/components/page-transition";
import { SectionTitle } from "@/components/section-title";

export const Route = createFileRoute("/home")({
  head: () => ({
    meta: [
      { title: "Bullying não é brincadeira | Imersão Bullying" },
      {
        name: "description",
        content:
          "Conheça os tipos de bullying, sinais de alerta, formas de prevenção, como agir e como denunciar. Conteúdo educativo para estudantes e escolas.",
      },
      { property: "og:title", content: "Bullying não é brincadeira | Imersão Bullying" },
      {
        property: "og:description",
        content: "Tipos de bullying, sinais, prevenção, ação e denúncia em uma jornada interativa.",
      },
    ],
  }),
  component: Home,
});

const ease = [0.32, 0.72, 0, 1] as const;

const tipos = [
  { title: "Físico", Icon: Hand, desc: "Empurrões, socos, chutes e qualquer agressão ao corpo." },
  { title: "Verbal", Icon: MessageSquare, desc: "Apelidos, insultos, humilhações e ameaças." },
  { title: "Psicológico", Icon: Brain, desc: "Chantagem, manipulação, intimidação e perseguição." },
  { title: "Virtual", Icon: Globe, desc: "Cyberbullying: prints, memes, exposição e ataques on-line." },
  { title: "Social", Icon: Users, desc: "Isolamento proposital, boatos e exclusão do grupo." },
  { title: "Racial", Icon: Accessibility, desc: "Ofensas ligadas à cor, raça ou etnia — é crime." },
  { title: "Religioso", Icon: ShieldCheck, desc: "Zombaria e intolerância contra crenças e práticas." },
];

const sinais = [
  "Queda repentina nas notas ou faltas frequentes",
  "Objetos e materiais escolares que desaparecem ou aparecem danificados",
  "Machucados sem explicação convincente",
  "Isolamento, tristeza persistente ou irritabilidade nova",
  "Medo de intervalos, educação física ou do caminho para a escola",
  "Alterações de sono, apetite e queixas físicas antes das aulas",
];

const prevencao = [
  {
    title: "Cultura do respeito",
    desc: "Combinados de convivência construídos com a turma, revisados a cada bimestre.",
    Icon: Heart,
  },
  {
    title: "Escuta ativa",
    desc: "Canais anônimos e horários fixos de acolhimento com a coordenação.",
    Icon: MessageSquare,
  },
  {
    title: "Protagonismo",
    desc: "Formação de estudantes mediadores que interrompem situações de agressão.",
    Icon: Sparkles,
  },
  {
    title: "Tolerância zero",
    desc: "Protocolo claro, registrado e aplicado igualmente para todos os casos.",
    Icon: Ban,
  },
];

const timeline = [
  { step: "01", title: "Registre", desc: "Anote datas, locais, pessoas envolvidas e salve prints." },
  { step: "02", title: "Fale", desc: "Procure um adulto de confiança: professor, família, coordenação." },
  { step: "03", title: "Acione a escola", desc: "A coordenação deve abrir apuração formal e proteger a vítima." },
  { step: "04", title: "Denuncie", desc: "Casos graves: Disque 100, Conselho Tutelar ou delegacia." },
  { step: "05", title: "Acompanhe", desc: "Cobre retorno, apoio psicológico e mediação entre as partes." },
];

const dados = [
  { label: "Verbal", value: 38 },
  { label: "Virtual", value: 27 },
  { label: "Social", value: 16 },
  { label: "Físico", value: 12 },
  { label: "Outros", value: 7 },
];

const faq = [
  {
    q: "Qual a diferença entre briga e bullying?",
    a: "Bullying é intencional, repetido e marcado por desequilíbrio de poder. Um conflito isolado entre iguais não é bullying, mas também precisa de mediação.",
  },
  {
    q: "Brincadeira pode virar bullying?",
    a: "Sim. Quando alguém pede para parar e a conduta continua, deixa de ser brincadeira e passa a ser violência.",
  },
  {
    q: "Denunciar é o mesmo que ser dedo-duro?",
    a: "Não. Denunciar é proteger alguém de uma violência que se repete — inclusive você mesmo.",
  },
  {
    q: "Como apoiar uma vítima?",
    a: "Acredite no relato, não minimize, ofereça companhia nos intervalos e ajude a levar o caso a um adulto responsável.",
  },
  {
    q: "É possível reverter uma situação de bullying?",
    a: "Sim, com protocolo escolar, responsabilização, apoio psicológico e trabalho contínuo de convivência com a turma.",
  },
];

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.7, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

function Home() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <PageTransition>
          {/* Hero */}
          <section className="relative flex min-h-dvh items-center px-4 pb-20 pt-32 sm:px-6">
            <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                  Realidade não Editada
                </p>
                <h1 className="mt-5 text-4xl font-semibold text-balance text-gradient sm:text-6xl lg:text-7xl">
                  Bullying não é brincadeira.
                </h1>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
                  Cada palavra tem peso e cada silêncio tem consequência. Aqui você aprende a
                  identificar, prevenir, agir e transformar a convivência na sua escola — sem
                  filtros e sem edição.
                </p>
                <div className="mt-10 flex flex-wrap gap-3">
                  <GlassButton asChild size="lg">
                    <Link to="/ia">Conversar com IA</Link>
                  </GlassButton>
                  <GlassButton asChild size="lg" variant="glass">
                    <Link to="/minigames">Minigames</Link>
                  </GlassButton>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, scale: 0.92, filter: "blur(18px)" }}
                animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.1, ease }}
                className="relative aspect-square w-full"
                aria-hidden="true"
              >
                <div className="absolute inset-0 rounded-[40%] bg-primary/30 blur-3xl" />
                <div className="absolute inset-8 rounded-[45%] bg-accent/25 blur-2xl" />
                <div className="glass-surface absolute inset-10 rounded-[42%]" />
              </motion.div>
            </div>
          </section>

          {/* Sobre */}
          <section id="sobre" className="scroll-mt-28 px-4 py-24 sm:px-6">
            <SectionTitle
              eyebrow="Sobre o projeto"
              title="Uma imersão que educa pela experiência"
              description="Construído para escolas: linguagem direta, conteúdo confiável e interação que faz o estudante refletir antes de agir."
            />
            <div className="mx-auto mt-14 grid max-w-6xl gap-5 md:grid-cols-3">
              {[
                {
                  title: "Conscientizar",
                  desc: "Mostrar o impacto real do bullying na saúde mental e no aprendizado.",
                  Icon: AlertTriangle,
                },
                {
                  title: "Capacitar",
                  desc: "Ensinar rotas concretas de ação, denúncia e apoio à vítima.",
                  Icon: ShieldCheck,
                },
                {
                  title: "Transformar",
                  desc: "Criar cultura de empatia e respeito que se sustenta depois da aula.",
                  Icon: Heart,
                },
              ].map((item, i) => (
                <Reveal key={item.title} delay={i * 0.1}>
                  <GlassCard interactive className="h-full">
                    <span className="grid size-11 place-items-center rounded-2xl bg-primary/15 text-primary">
                      <item.Icon aria-hidden="true" className="size-5" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Tipos */}
          <section id="aprender" className="scroll-mt-28 px-4 py-24 sm:px-6">
            <SectionTitle
              eyebrow="Aprender"
              title="Tipos de Bullying"
              description="Reconhecer o formato da violência é o primeiro passo para interrompê-la."
            />
            <ul className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {tipos.map((tipo, i) => (
                <li key={tipo.title}>
                  <Reveal delay={(i % 3) * 0.08}>
                    <GlassCard interactive className="h-full">
                      <span className="grid size-11 place-items-center rounded-2xl bg-accent/15 text-accent">
                        <tipo.Icon aria-hidden="true" className="size-5" />
                      </span>
                      <h3 className="mt-5 text-lg font-semibold">{tipo.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {tipo.desc}
                      </p>
                    </GlassCard>
                  </Reveal>
                </li>
              ))}
            </ul>
          </section>

          {/* Identificar */}
          <section className="px-4 py-24 sm:px-6">
            <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2">
              <SectionTitle
                align="left"
                eyebrow="Como identificar"
                title="Sinais que pedem atenção"
                description="Nenhum item isolado confirma bullying, mas a combinação deles é um alerta sério."
              />
              <ul className="space-y-3">
                {sinais.map((sinal, i) => (
                  <li key={sinal}>
                    <Reveal delay={i * 0.06}>
                      <GlassCard className="flex items-start gap-3 rounded-2xl p-4">
                        <CheckCircle2
                          aria-hidden="true"
                          className="mt-0.5 size-5 shrink-0 text-success"
                        />
                        <span className="min-w-0 text-sm leading-relaxed">{sinal}</span>
                      </GlassCard>
                    </Reveal>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Prevenir */}
          <section className="px-4 py-24 sm:px-6">
            <SectionTitle
              eyebrow="Como prevenir"
              title="Prevenção é rotina, não campanha"
            />
            <div className="mx-auto mt-14 grid max-w-6xl gap-5 sm:grid-cols-2">
              {prevencao.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.08}>
                  <GlassCard interactive className="h-full">
                    <span className="grid size-11 place-items-center rounded-2xl bg-primary/15 text-primary">
                      <item.Icon aria-hidden="true" className="size-5" />
                    </span>
                    <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </section>

          {/* Agir - timeline */}
          <section className="px-4 py-24 sm:px-6">
            <SectionTitle eyebrow="Como agir" title="Do relato à solução" />
            <ol className="mx-auto mt-14 max-w-3xl">
              {timeline.map((item, i) => (
                <li key={item.step} className="relative pb-8 pl-12 last:pb-0">
                  <span
                    aria-hidden="true"
                    className="absolute left-[15px] top-9 h-[calc(100%-1.75rem)] w-px bg-border"
                  />
                  <span className="glass-surface absolute left-0 top-0 grid size-8 place-items-center rounded-full text-xs font-semibold text-primary">
                    {item.step}
                  </span>
                  <Reveal delay={i * 0.06}>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                      {item.desc}
                    </p>
                  </Reveal>
                </li>
              ))}
            </ol>
          </section>

          {/* Dados */}
          <section className="px-4 py-24 sm:px-6">
            <SectionTitle
              eyebrow="Dados importantes"
              title="Panorama ilustrativo"
              description="Números fictícios, usados apenas como exemplo visual em sala de aula."
            />
            <Reveal>
              <GlassCard className="mx-auto mt-14 max-w-4xl p-6 sm:p-8">
                <h3 className="text-sm font-medium text-muted-foreground">
                  Distribuição dos relatos por tipo (%)
                </h3>
                <div className="mt-6 h-72 w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={dados}>
                      <CartesianGrid stroke="oklch(1 0 0 / 8%)" vertical={false} />
                      <XAxis
                        dataKey="label"
                        stroke="oklch(0.68 0.005 260)"
                        tickLine={false}
                        axisLine={false}
                        fontSize={12}
                      />
                      <YAxis
                        stroke="oklch(0.68 0.005 260)"
                        tickLine={false}
                        axisLine={false}
                        fontSize={12}
                      />
                      <Tooltip
                        cursor={{ fill: "oklch(1 0 0 / 5%)" }}
                        contentStyle={{
                          background: "oklch(0.16 0.005 260)",
                          border: "1px solid oklch(1 0 0 / 12%)",
                          borderRadius: 16,
                          color: "oklch(0.98 0 0)",
                        }}
                      />
                      <Bar dataKey="value" radius={[10, 10, 4, 4]}>
                        {dados.map((_, i) => (
                          <Cell key={i} fill={`var(--chart-${i + 1})`} />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </GlassCard>
            </Reveal>
          </section>

          {/* FAQ */}
          <section className="px-4 py-24 sm:px-6">
            <SectionTitle eyebrow="Dúvidas" title="Perguntas frequentes" />
            <Reveal>
              <GlassCard className="mx-auto mt-14 max-w-3xl p-4 sm:p-6">
                <Accordion type="single" collapsible>
                  {faq.map((item, i) => (
                    <AccordionItem key={item.q} value={`item-${i}`} className="border-border/60">
                      <AccordionTrigger className="text-left text-base">{item.q}</AccordionTrigger>
                      <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                        {item.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </GlassCard>
            </Reveal>
          </section>
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}
