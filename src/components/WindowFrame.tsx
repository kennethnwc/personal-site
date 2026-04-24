"use client";

import { ReactNode, useState } from "react";
import { cn } from "../lib/utils";

interface WindowFrameProps {
  title: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  inactive?: boolean;
}

export function WindowFrame({
  title,
  children,
  className,
  bodyClassName,
  inactive = false,
}: WindowFrameProps) {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  const showBody = !isMinimized && !isClosed;

  return (
    <section
      className={cn(
        "retro-window overflow-hidden",
        isMaximized &&
          "fixed left-3 right-3 top-3 z-[80] max-h-[calc(100vh-5.5rem)] w-auto max-w-none",
        className
      )}
    >
      <div className={cn("retro-titlebar", inactive && "retro-titlebar--inactive")}>
        <span>{title}</span>
        <div className="retro-titlebar-lights">
          <button
            type="button"
            aria-label={isMinimized ? `Restore ${title}` : `Minimize ${title}`}
            onClick={() => {
              setIsClosed(false);
              setIsMinimized((value) => !value);
            }}
          >
            _
          </button>
          <button
            type="button"
            aria-label={isMaximized ? `Restore ${title}` : `Maximize ${title}`}
            onClick={() => {
              setIsClosed(false);
              setIsMinimized(false);
              setIsMaximized((value) => !value);
            }}
          >
            {isMaximized ? "❐" : "□"}
          </button>
          <button
            type="button"
            className="retro-titlebar-close"
            aria-label={`Close ${title}`}
            onClick={() => {
              setIsClosed(true);
              setIsMinimized(false);
              setIsMaximized(false);
            }}
          >
            ×
          </button>
        </div>
      </div>

      {isClosed ? (
        <div className="p-4 sm:p-5 lg:p-6">
          <div className="retro-status-field flex flex-wrap items-center justify-between gap-3">
            <span className="text-sm text-slate-900">{title} was closed.</span>
            <button
              type="button"
              className="retro-button"
              onClick={() => setIsClosed(false)}
            >
              Reopen Window
            </button>
          </div>
          <span className="retro-corner-grip" aria-hidden="true" />
        </div>
      ) : null}

      {showBody ? (
        <div
          className={cn(
            "p-4 sm:p-5 lg:p-6",
            isMaximized && "max-h-[calc(100vh-8rem)] overflow-y-auto",
            bodyClassName
          )}
        >
          {children}
          <span className="retro-corner-grip" aria-hidden="true" />
        </div>
      ) : null}

      {!isClosed && isMinimized ? (
        <div className="px-4 pb-4 pt-2 text-xs text-slate-900 sm:px-5 lg:px-6">
          Window minimized. Click the `_` button to restore.
        </div>
      ) : null}
    </section>
  );
}
