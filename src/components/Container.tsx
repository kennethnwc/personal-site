import { cn } from "../lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12",
        "bg-background text-foreground",
        className
      )}
    >
      {children}
    </div>
  );
}
