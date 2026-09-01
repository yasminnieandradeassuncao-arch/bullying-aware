import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUp, Sparkles } from "lucide-react";
import { AnimatedBackground } from "@/components/animated-background";
import { GlassButton } from "@/components/glass-button";
import { Navbar } from "@/components/navbar";
import { PageTransition } from "@/components/page-transition";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/ia")({
  head: () => ({
    meta: [
      { title: "IA Educacional | Imersão Bullying" },
      {
        name: "description",
        content:
          "Converse com o assistente educacional da Imersão Bullying: dúvidas sobre identificar, prevenir e denunciar situações de bullying.",
      },
      { property: "og:title", content: "IA Educacional | Imersão Bullying" },
      {
        property: "og:description",
        content: "Interface de conversa educativa sobre bullying, empatia e convivência escolar.",
      },
    ],
  }),
  component: ChatIA,
});

const ease = [0.32, 0.72, 0, 1] as const;

type Message = { id: number; role: "user" | "assistant"; text: string };

const suggestions = [
  "O que é bullying?",
  "Como identificar sinais na turma?",
  "Como denunciar com segurança?",
  "Como apoiar uma vítima?",
];

const initialMessages: Message[] = [
  {
    id: 0,
    role: "assistant",
    text: "Olá! Sou o assistente educacional da Imersão Bullying. Faça uma pergunta sobre bullying, prevenção ou como ajudar alguém. (Interface de demonstração — pronta para integração futura.)",
  },
];

function ChatIA() {
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [value, setValue] = useState("");
  const [thinking, setThinking] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages, thinking]);

  const send = (text: string) => {
    const content = text.trim();
    if (!content) return;
    setMessages((prev) => [...prev, { id: Date.now(), role: "user", text: content }]);
    setValue("");
    setThinking(true);
    // Ponto de integração futura: substituir por chamada real ao modelo.
    window.setTimeout(() => {
      setThinking(false);
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          role: "assistant",
          text: "Esta é uma resposta de demonstração. A interface já está preparada para receber respostas de uma IA educacional. Enquanto isso: registre o ocorrido, fale com um adulto de confiança e acione a coordenação da escola.",
        },
      ]);
    }, 900);
  };

  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main className="flex h-dvh flex-col overflow-hidden px-4 pb-6 pt-28 sm:px-6">
        <PageTransition className="mx-auto flex w-full max-w-3xl flex-1 flex-col">
          <h1 className="flex items-center gap-2 text-lg font-semibold">
            <Sparkles aria-hidden="true" className="size-5 text-primary" />
            IA Educacional
          </h1>

          <div
            className="mt-6 flex-1 space-y-4 overflow-y-auto pb-4"
            role="log"
            aria-live="polite"
            aria-label="Histórico da conversa"
          >
            <AnimatePresence initial={false}>
              {messages.map((m) => (
                <motion.div
                  key={m.id}
                  initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.45, ease }}
                  className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}
                >
                  <p
                    className={cn(
                      "max-w-[85%] rounded-3xl px-5 py-3 text-sm leading-relaxed",
                      m.role === "user"
                        ? "bg-primary text-primary-foreground"
                        : "glass-surface text-foreground",
                    )}
                  >
                    {m.text}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>

            {thinking ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="glass-surface inline-flex items-center gap-1.5 rounded-3xl px-5 py-4"
              >
                {[0, 1, 2].map((i) => (
                  <motion.span
                    key={i}
                    animate={{ opacity: [0.3, 1, 0.3] }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.15 }}
                    className="size-1.5 rounded-full bg-muted-foreground"
                  />
                ))}
                <span className="sr-only">Digitando</span>
              </motion.div>
            ) : null}
            <div ref={endRef} />
          </div>

          <ul className="mb-3 flex flex-wrap gap-2">
            {suggestions.map((s) => (
              <li key={s}>
                <GlassButton variant="glass" size="sm" onClick={() => send(s)}>
                  {s}
                </GlassButton>
              </li>
            ))}
          </ul>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(value);
            }}
            className="glass-surface sticky bottom-4 flex items-end gap-2 rounded-3xl p-2"
          >
            <label htmlFor="mensagem" className="sr-only">
              Escreva sua mensagem
            </label>
            <textarea
              id="mensagem"
              rows={1}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  send(value);
                }
              }}
              placeholder="Escreva sua dúvida sobre bullying…"
              className="max-h-40 min-h-11 flex-1 resize-none bg-transparent px-4 py-3 text-sm outline-none placeholder:text-muted-foreground"
            />
            <GlassButton type="submit" size="icon" aria-label="Enviar mensagem" disabled={!value.trim()}>
              <ArrowUp />
            </GlassButton>
          </form>
        </PageTransition>
      </main>
    </>
  );
}
