import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, Check, Gamepad2, ListChecks, PenLine, Scale, ToggleLeft, Trophy, X } from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";
import { Footer } from "@/components/footer";
import { GlassButton } from "@/components/glass-button";
import { GlassCard } from "@/components/glass-card";
import { Navbar } from "@/components/navbar";
import { PageTransition } from "@/components/page-transition";
import { SectionTitle } from "@/components/section-title";
import { games, type Game } from "@/data/minigames";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/minigames")({
  head: () => ({
    meta: [
      { title: "Minigames educativos | Imersão Bullying" },
      {
        name: "description",
        content:
          "Quiz, verdadeiro ou falso, melhor atitude e complete a situação: jogue e aprenda a reconhecer e enfrentar o bullying.",
      },
      { property: "og:title", content: "Minigames educativos | Imersão Bullying" },
      {
        property: "og:description",
        content: "Quatro jogos rápidos para praticar atitudes de respeito e empatia na escola.",
      },
    ],
  }),
  component: Minigames,
});

const ease = [0.32, 0.72, 0, 1] as const;

const icons = {
  quiz: ListChecks,
  vf: ToggleLeft,
  atitude: Scale,
  completar: PenLine,
} as const;

function Minigames() {
  const [active, setActive] = useState<Game | null>(null);

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="px-4 pb-24 pt-32 sm:px-6">
        <PageTransition>
          <SectionTitle
            eyebrow="Minigames"
            title="Aprender jogando"
            description="Quatro desafios rápidos. A pontuação fica apenas nesta sessão, no seu dispositivo."
          />

          <AnimatePresence mode="wait">
            {active ? (
              <motion.div
                key={active.id}
                initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -16, filter: "blur(10px)" }}
                transition={{ duration: 0.6, ease }}
                className="mx-auto mt-14 max-w-3xl"
              >
                <GameBoard game={active} onExit={() => setActive(null)} />
              </motion.div>
            ) : (
              <motion.ul
                key="list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.5, ease }}
                className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2"
              >
                {games.map((game, i) => {
                  const Icon = icons[game.id];
                  return (
                    <motion.li
                      key={game.id}
                      initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ duration: 0.55, delay: i * 0.09, ease }}
                    >
                      <GlassCard interactive className="flex h-full flex-col p-6">
                        <span className="grid size-11 place-items-center rounded-2xl bg-primary/15 text-primary">
                          <Icon aria-hidden="true" className="size-5" />
                        </span>
                        <h3 className="mt-5 text-xl font-semibold">{game.title}</h3>
                        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                          {game.description}
                        </p>
                        <GlassButton className="mt-6 self-start" onClick={() => setActive(game)}>
                          <Gamepad2 aria-hidden="true" />
                          Jogar
                        </GlassButton>
                      </GlassCard>
                    </motion.li>
                  );
                })}
              </motion.ul>
            )}
          </AnimatePresence>
        </PageTransition>
      </main>
      <Footer />
    </>
  );
}

function GameBoard({ game, onExit }: { game: Game; onExit: () => void }) {
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const question = game.questions[index]!;
  const total = game.questions.length;

  const choose = (i: number) => {
    if (chosen !== null) return;
    setChosen(i);
    if (i === question.correct) setScore((s) => s + 1);
  };

  const next = () => {
    if (index + 1 >= total) {
      setDone(true);
      return;
    }
    setIndex((i) => i + 1);
    setChosen(null);
  };

  const restart = () => {
    setIndex(0);
    setChosen(null);
    setScore(0);
    setDone(false);
  };

  return (
    <GlassCard className="p-6 sm:p-9">
      <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4">
        <div className="min-w-0">
          <h2 className="truncate text-xl font-semibold">{game.title}</h2>
          <p className="mt-1 text-xs text-muted-foreground">
            {done ? "Resultado" : `Pergunta ${index + 1} de ${total}`}
          </p>
        </div>
        <span className="glass-surface flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm">
          <Trophy aria-hidden="true" className="size-4 text-warning" />
          {score}
        </span>
      </div>

      <div
        aria-hidden="true"
        className="mt-5 h-1.5 w-full overflow-hidden rounded-full bg-white/10"
      >
        <motion.div
          animate={{ width: `${(((done ? total : index) + (done ? 0 : 1)) / total) * 100}%` }}
          transition={{ duration: 0.6, ease }}
          className="h-full rounded-full bg-primary"
        />
      </div>

      {done ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease }}
          className="mt-8 text-center"
          aria-live="polite"
        >
          <p className="text-5xl font-semibold text-gradient">
            {score}/{total}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {score === total
              ? "Perfeito! Você sabe reconhecer e interromper o bullying."
              : "Bom começo. Revise as explicações e jogue novamente para fixar as atitudes corretas."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <GlassButton onClick={restart}>Jogar novamente</GlassButton>
            <GlassButton variant="glass" onClick={onExit}>
              <ArrowLeft aria-hidden="true" />
              Voltar aos jogos
            </GlassButton>
          </div>
        </motion.div>
      ) : (
        <>
          <p className="mt-8 text-lg font-medium text-balance sm:text-2xl">{question.prompt}</p>

          <fieldset className="mt-6 space-y-3">
            <legend className="sr-only">Alternativas</legend>
            {question.options.map((option, i) => {
              const isChosen = chosen === i;
              const isCorrect = i === question.correct;
              const reveal = chosen !== null;
              return (
                <motion.button
                  key={option}
                  type="button"
                  onClick={() => choose(i)}
                  disabled={reveal}
                  aria-pressed={isChosen}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.07, ease }}
                  className={cn(
                    "glass-surface flex w-full items-center gap-4 rounded-2xl px-5 py-4 text-left transition-colors duration-300 disabled:opacity-100",
                    reveal && isCorrect && "border-success/50 bg-success/10",
                    reveal && isChosen && !isCorrect && "border-destructive/50 bg-destructive/10",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "grid size-6 shrink-0 place-items-center rounded-full border border-white/25",
                      reveal && isCorrect && "border-success bg-success text-black",
                      reveal &&
                        isChosen &&
                        !isCorrect &&
                        "border-destructive bg-destructive text-destructive-foreground",
                    )}
                  >
                    {reveal && isCorrect ? <Check className="size-3.5" /> : null}
                    {reveal && isChosen && !isCorrect ? <X className="size-3.5" /> : null}
                  </span>
                  <span className="min-w-0 text-sm sm:text-base">{option}</span>
                </motion.button>
              );
            })}
          </fieldset>

          <AnimatePresence>
            {chosen !== null ? (
              <motion.div
                initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease }}
                aria-live="polite"
                className="mt-6 rounded-2xl border border-border bg-white/5 p-5"
              >
                <p
                  className={cn(
                    "text-sm font-semibold",
                    chosen === question.correct ? "text-success" : "text-destructive",
                  )}
                >
                  {chosen === question.correct ? "Resposta correta" : "Resposta incorreta"}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {question.explanation}
                </p>
              </motion.div>
            ) : null}
          </AnimatePresence>

          <div className="mt-8 flex flex-wrap gap-3">
            <GlassButton disabled={chosen === null} onClick={next}>
              {index + 1 >= total ? "Ver resultado" : "Continuar"}
            </GlassButton>
            <GlassButton variant="ghost" onClick={onExit}>
              <ArrowLeft aria-hidden="true" />
              Sair
            </GlassButton>
          </div>
        </>
      )}
    </GlassCard>
  );
}
