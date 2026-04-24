import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2 } from "lucide-react";
import { cn } from "../lib/utils";

interface Props {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  status: string;
  stack: string[];
  sourceCode?: string;
  className?: string;
}

export const Card = ({
  title,
  description,
  url,
  thumbnail,
  status,
  stack,
  sourceCode,
  className,
}: Props) => {
  return (
    <article className={cn("retro-project-card", className)}>
      <Link
        href={url}
        target="_blank"
        rel="noreferrer"
        className="group block"
        aria-label={`Visit ${title}`}
      >
        <div className="retro-project-thumb">
          <Image
            src={`/${thumbnail}`}
            alt={title}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
          <span className="retro-project-ribbon">{status}</span>
        </div>
      </Link>

      <div className="space-y-4 p-4 sm:p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg leading-snug text-slate-900 sm:text-xl">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-900">
              {description}
            </p>
          </div>
          <span className="retro-stamp shrink-0">.exe</span>
        </div>

        <div className="flex flex-wrap gap-2">
          {stack.map((item) => (
            <span key={item} className="retro-mini-tag">
              {item}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          <Link
            href={url}
            target="_blank"
            rel="noreferrer"
            className="retro-button"
          >
            Open
            <ArrowUpRight className="h-4 w-4" />
          </Link>
          {sourceCode ? (
            <Link
              href={sourceCode}
              target="_blank"
              rel="noreferrer"
              className="retro-button retro-button--secondary"
            >
              Source
              <Code2 className="h-4 w-4" />
            </Link>
          ) : null}
        </div>
      </div>
    </article>
  );
};
