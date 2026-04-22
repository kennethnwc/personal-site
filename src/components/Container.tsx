import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <main
      className={cn(
        "relative z-10 mx-auto flex max-w-6xl flex-col gap-6 px-4 pb-10 pt-4 sm:px-6 sm:pb-14 sm:pt-6 lg:px-8",
        className
      )}
    >
      {children}
    </main>
  );
}
