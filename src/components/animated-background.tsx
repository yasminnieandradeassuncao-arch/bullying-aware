import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type BlurCircleProps = {
  className?: string;
  delay?: number;
};

/** Soft luminous orb used to build depth behind glass surfaces. */
export function BlurCircle({ className, delay = 0 }: BlurCircleProps) {
  return (
    <motion.div
      aria-hidden="true"
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 0.55, scale: 1 }}
      transition={{ duration: 2.4, delay, ease: [0.32, 0.72, 0, 1] }}
      className={cn("pointer-events-none absolute rounded-full blur-[110px]", className)}
    />
  );
}

/** Slowly drifting organic shapes. */
export function FloatingShapes() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ y: [0, -28, 0], x: [0, 18, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[8%] top-[18%] size-40 rounded-[40%] bg-primary/20 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, 32, 0], x: [0, -22, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[10%] top-[45%] size-56 rounded-[45%] bg-accent/20 blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[10%] left-[45%] size-64 rounded-[50%] bg-primary/10 blur-3xl"
      />
    </div>
  );
}

/** Full-bleed ambient background: gradient glow + orbs + shapes. */
export function AnimatedBackground({ className }: { className?: string }) {
  return (
    <div aria-hidden="true" className={cn("pointer-events-none fixed inset-0 -z-10", className)}>
      <div className="absolute inset-0 bg-background" />
      <div className="hero-glow absolute inset-0" />
      <BlurCircle className="left-[-10%] top-[-10%] size-[38rem] bg-primary/25" />
      <BlurCircle className="right-[-15%] top-[30%] size-[32rem] bg-accent/20" delay={0.4} />
      <FloatingShapes />
      <div className="absolute inset-0 bg-[radial-gradient(oklch(1_0_0/0.05)_1px,transparent_1px)] [background-size:22px_22px] opacity-40" />
    </div>
  );
}
