import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  BookOpen,
  Check,
  Eye,
  Heart,
  MessageCircleWarning,
  ShieldCheck,
  Siren,
  Sparkles,
  Users,
  X,
} from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";
import { GlassCard } from "@/components/glass-card";
import { GlassButton } from "@/components/glass-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Imersão Bullying – Realidade não Editada" },
      {
        name: "description",
        content:
          "Comece a imersão: entenda o que é bullying, como identificar, prevenir, agir, denunciar e apoiar quem sofre.",
      },
      { property: "og:title", content: "Imersão Bullying – Realidade não Editada" },
      {
        property: "og:description",
        content: "Uma experiência interativa de conscientização sobre bullying nas escolas.",
      },
    ],
  }),
  component: Imersao,
});

const ease = [0.32, 0.72, 0, 1] as const;

const topics = [
  { label: "O que é Bullying", Icon: BookOpen },
  { label: "Tipos de Bullying", Icon: Users },
  { label: "Como identificar", Icon: Eye },
  { label: "Como prevenir", Icon: ShieldCheck },
  { label: "Como agir", Icon: Sparkles },
  { label: "Como denunciar", Icon: Siren },
  { label: "Como apoiar uma vítima", Icon: Heart },
  { label: "Como reverter uma situação de bullying", Icon: MessageCircleWarning },
];

type Option = { id: string; label: string; good: boolean; feedback: string };

const options: Option[] = [
  {
    id: "coordenacao",
    label: "Reportaria à coordenação da escola",
    good: true,
    feedback:
      "Escolha adequada. Zombar de raça, etnia ou religião é injúria racial e intolerância — a escola tem o dever legal de registrar, apurar e proteger você.",
  },
  {
    id: "professor",
    label: "Conversaria com um professor",
    good: true,
    feedback:
      "Escolha adequada. Um adulto de confiança ajuda a documentar o ocorrido e encaminha o caso para quem pode agir formalmente.",
  },
  {
    id: "ignorar",
    label: "Ignoraria",
    good: false,
    feedback:
      "Escolha inadequada. O silêncio costuma normalizar a agressão: sem registro, a prática se repete e se intensifica com outras vítimas.",
  },
  {
    id: "ofensas",
    label: "Retrucaria com ofensas",
    good: false,
    feedback:
      "Escolha inadequada. Responder com ofensas mantém o ciclo de violência e pode transformar você em parte do conflito, dificultando a apuração.",
  },
  {
    id: "incentivar",
    label: "Incentivaria outros colegas",
    good: false,
    feedback:
      "Escolha inadequada. Mobilizar colegas para retaliar cria um novo grupo agressor — o caminho é apoio institucional, não vingança coletiva.",
  },
];

function Imersao() {
  const [step, setStep] = useState(0);
  const navigate = useNavigate();
  const [selected, setSelected] = useState<Option | null>(null);
  const [name, setName] = useState("");
  const [group, setGroup] = useState("");

  const next = () => setStep((s) => s + 1);

  return (
    <>
      <AnimatedBackground />
      <main className="relative flex min-h-dvh flex-col items-center justify-center px-4 py-20 sm:px-6">
        <p className="sr-only" aria-live="polite">
          Etapa {step + 1} de 4
        </p>

        <AnimatePresence mode="wait">
          {step === 0 ? (
            <motion.section
              key="welcome"
              initial={{ opacity: 0, filter: "blur(14px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(14px)", y: -20 }}
              transition={{ duration: 0.8, ease }}
              className="mx-auto max-w-2xl text-center"
            >
              <h1 className="text-4xl font-semibold text-gradient sm:text-6xl">Olá!</h1>
              <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-muted-foreground sm:text-2xl">
                Seja bem-vindo à Imersão Bullying – Realidade não Editada
              </p>
              <GlassButton size="lg" className="mt-12" onClick={next}>
                Começar
              </GlassButton>
            </motion.section>
          ) : null}

          {step === 1 ? (
            <motion.section
              key="learn"
              initial={{ opacity: 0, filter: "blur(14px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(14px)", y: -20 }}
              transition={{ duration: 0.7, ease }}
              className="mx-auto w-full max-w-3xl text-center"
            >
              <h1 className="text-3xl font-semibold text-gradient sm:text-5xl">
                Aqui vamos aprender:
              </h1>
              <ul className="mt-10 grid gap-3 text-left sm:grid-cols-2">
                {topics.map((topic, i) => (
                  <motion.li
                    key={topic.label}
                    initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, delay: 0.12 * i, ease }}
                  >
                    <GlassCard className="flex items-center gap-3 rounded-2xl p-4">
                      <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary">
                        <topic.Icon aria-hidden="true" className="size-4" />
                      </span>
                      <span className="min-w-0 text-sm sm:text-base">{topic.label}</span>
                    </GlassCard>
                  </motion.li>
                ))}
              </ul>
              <GlassButton size="lg" className="mt-10" onClick={next}>
                Continuar
              </GlassButton>
            </motion.section>
          ) : null}

          {step === 2 ? (
            <motion.section
              key="quiz"
              initial={{ opacity: 0, filter: "blur(14px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(14px)", y: -20 }}
              transition={{ duration: 0.7, ease }}
              className="mx-auto w-full max-w-3xl"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
                Questão Teste
              </p>
              <h1 className="mt-3 text-2xl font-semibold text-balance sm:text-4xl">
                Se algum colega de classe zomba de você por questões relacionadas à raça, etnia ou
                religião, você:
              </h1>

              <fieldset className="mt-8 space-y-3">
                <legend className="sr-only">Escolha uma alternativa</legend>
                {options.map((option, i) => {
                  const active = selected?.id === option.id;
                  return (
                    <motion.button
                      key={option.id}
                      type="button"
                      aria-pressed={active}
                      onClick={() => setSelected(option)}
                      initial={{ opacity: 0, y: 16 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.08 * i, ease }}
                      whileHover={{ scale: 1.01 }}
                      className={cn(
                        "glass-surface flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left transition-colors duration-300",
                        active && option.good && "border-success/50 bg-success/10",
                        active && !option.good && "border-destructive/50 bg-destructive/10",
                      )}
                    >
                      <span
                        aria-hidden="true"
                        className={cn(
                          "grid size-6 shrink-0 place-items-center rounded-full border border-white/25",
                          active && option.good && "border-success bg-success text-black",
                          active &&
                            !option.good &&
                            "border-destructive bg-destructive text-destructive-foreground",
                        )}
                      >
                        {active ? (
                          option.good ? (
                            <Check className="size-3.5" />
                          ) : (
                            <X className="size-3.5" />
                          )
                        ) : null}
                      </span>
                      <span className="min-w-0 text-sm sm:text-base">{option.label}</span>
                    </motion.button>
                  );
                })}
              </fieldset>

              <AnimatePresence mode="wait">
                {selected ? (
                  <motion.div
                    key={selected.id}
                    initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -8, filter: "blur(8px)" }}
                    transition={{ duration: 0.45, ease }}
                    aria-live="polite"
                    className="mt-6"
                  >
                    <GlassCard
                      className={cn(
                        "rounded-2xl",
                        selected.good ? "border-success/40" : "border-destructive/40",
                      )}
                    >
                      <p
                        className={cn(
                          "text-sm font-semibold",
                          selected.good ? "text-success" : "text-destructive",
                        )}
                      >
                        {selected.good ? "Atitude adequada" : "Atitude inadequada"}
                      </p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {selected.feedback}
                      </p>
                    </GlassCard>
                  </motion.div>
                ) : null}
              </AnimatePresence>

              <GlassButton size="lg" className="mt-8" disabled={!selected} onClick={next}>
                Continuar
              </GlassButton>
            </motion.section>
          ) : null}

          {step === 3 ? (
            <motion.section
              key="login"
              initial={{ opacity: 0, filter: "blur(14px)", y: 20 }}
              animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
              exit={{ opacity: 0, filter: "blur(14px)", y: -20 }}
              transition={{ duration: 0.7, ease }}
              className="mx-auto grid w-full max-w-6xl items-center gap-10 lg:grid-cols-2"
            >
              <GlassCard className="p-8 sm:p-10">
                <h1 className="text-3xl font-semibold sm:text-4xl">Entrar</h1>
                <p className="mt-3 text-sm text-muted-foreground">
                  Acesso simbólico — nenhum dado é enviado ou armazenado.
                </p>
                <form
                  className="mt-8 space-y-5"
                  onSubmit={(e) => {
                    e.preventDefault();
                    void navigate({ to: "/home" });
                  }}
                >
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome</Label>
                    <Input
                      id="nome"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Seu nome"
                      autoComplete="name"
                      className="h-12 rounded-2xl border-white/15 bg-white/5"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="turma">Turma (opcional)</Label>
                    <Input
                      id="turma"
                      value={group}
                      onChange={(e) => setGroup(e.target.value)}
                      placeholder="Ex.: 9º ano B"
                      className="h-12 rounded-2xl border-white/15 bg-white/5"
                    />
                  </div>
                  <GlassButton type="submit" size="lg" className="w-full">
                    Entrar
                  </GlassButton>
                </form>
              </GlassCard>

              <ul className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: "Tipos de Bullying", Icon: Users },
                  { label: "Como Identificar", Icon: Eye },
                  { label: "Como Denunciar", Icon: Siren },
                  { label: "Empatia", Icon: Heart },
                  { label: "Respeito", Icon: ShieldCheck },
                  { label: "Convivência Escolar", Icon: BookOpen },
                ].map((card, i) => (
                  <motion.li
                    key={card.label}
                    initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, delay: 0.1 * i, ease }}
                  >
                    <GlassCard interactive className="h-full rounded-2xl p-5">
                      <span className="grid size-10 place-items-center rounded-2xl bg-primary/15 text-primary">
                        <card.Icon aria-hidden="true" className="size-5" />
                      </span>
                      <p className="mt-4 text-sm font-medium">{card.label}</p>
                    </GlassCard>
                  </motion.li>
                ))}
              </ul>
            </motion.section>
          ) : null}
        </AnimatePresence>

        <div className="mt-14 flex items-center gap-2" aria-hidden="true">
          {[0, 1, 2, 3].map((i) => (
            <span
              key={i}
              className={cn(
                "h-1.5 rounded-full transition-all duration-500",
                i === step ? "w-8 bg-primary" : "w-1.5 bg-white/20",
              )}
            />
          ))}
        </div>
      </main>
    </>
  );
}
