import * as React from "react";

import { cn } from "@/lib/utils";

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-14 w-full rounded-full border border-black/10 bg-white/70 px-6 py-3 text-base outline-none transition-colors placeholder:text-[#7b7b7b] focus:border-black/20",
        className
      )}
      {...props}
    />
  );
}

export { Input };
