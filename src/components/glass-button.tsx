import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const glassButtonVariants = cva(
  "inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-[var(--shadow-depth)] hover:brightness-110",
        glass:
          "glass-surface text-foreground hover:border-white/30 hover:bg-white/10 backdrop-blur-2xl",
        subtle: "bg-secondary text-secondary-foreground hover:bg-secondary/70",
        ghost: "text-muted-foreground hover:bg-white/5 hover:text-foreground",
      },
      size: {
        sm: "h-9 px-4 text-sm",
        md: "h-11 px-6 text-[0.95rem]",
        lg: "h-14 px-9 text-base",
        icon: "size-11",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  },
);

export type GlassButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof glassButtonVariants> & { asChild?: boolean };

export function GlassButton({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: GlassButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(glassButtonVariants({ variant, size }), className)} {...props} />
  );
}

export { glassButtonVariants };
