import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/btn relative inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-[transform,background-color,border-color,box-shadow,color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] disabled:pointer-events-none disabled:opacity-50 active:translate-y-0",
  {
    variants: {
      variant: {
        primary:
          "bg-[color:var(--accent)] text-[color:var(--accent-contrast)] shadow-[0_10px_24px_-8px_var(--accent)] hover:-translate-y-0.5 hover:bg-[color:var(--accent-hover)] hover:shadow-[0_16px_34px_-10px_var(--accent)]",
        subtle:
          "border border-[color:var(--line-strong)] bg-[color:var(--surface)] text-[color:var(--ink)] hover:-translate-y-0.5 hover:border-[color:var(--accent-line)] hover:shadow-[var(--shadow-soft)]",
        ghost:
          "text-[color:var(--ink-soft)] hover:bg-[color:var(--bg-sunken)] hover:text-[color:var(--ink)]",
      },
      size: {
        sm: "h-10 px-4 text-[13px]",
        default: "h-11 px-5",
        lg: "h-12 px-6 text-[15px] sm:h-13 sm:px-7",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  )
);
Button.displayName = "Button";

export { Button, buttonVariants };
