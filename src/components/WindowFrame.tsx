import { ReactNode } from "react";
import { cn } from "../lib/utils";

interface WindowFrameProps {
  title: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
}

export function WindowFrame({
  title,
  children,
  className,
  bodyClassName,
}: WindowFrameProps) {
  return (
    <section className={cn("retro-window overflow-hidden", className)}>
      <div className="retro-titlebar">
        <span>{title}</span>
        <div className="retro-titlebar-lights" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      </div>
      <div className={cn("p-4 sm:p-5 lg:p-6", bodyClassName)}>{children}</div>
    </section>
  );
}
