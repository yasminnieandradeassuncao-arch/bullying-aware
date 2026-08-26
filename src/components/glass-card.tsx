import { motion, type HTMLMotionProps } from "motion/react";
import { cn } from "@/lib/utils";

type GlassCardProps = HTMLMotionProps<"div"> & {
  interactive?: boolean;
};

/** Frosted glass surface used across the experience. */
export function GlassCard({ className, interactive = false, ...props }: GlassCardProps) {
  return (
    <motion.div
      {...(interactive ? { whileHover: { scale: 1.02, y: -4 } } : {})}
      transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
      className={cn(
        "glass-surface rounded-3xl p-6",
        interactive && "cursor-pointer hover:border-white/25",
        className,
      )}
      {...props}
    />
  );
}
