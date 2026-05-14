import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-[180px] w-full rounded-[28px] border border-black/10 bg-white/70 px-6 py-5 text-base outline-none transition-colors placeholder:text-[#7b7b7b] focus:border-black/20",
        className
      )}
      {...props}
    />
  );
}

export { Textarea };
