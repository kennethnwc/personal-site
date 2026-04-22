import { PropsWithChildren } from "react";

export function MyHeading({ children }: PropsWithChildren) {
  return (
    <h2 className="mt-8 text-xl font-semibold text-slate-900 sm:text-2xl">
      {children}
    </h2>
  );
}
