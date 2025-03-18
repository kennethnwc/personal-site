import Image from "next/image";
import Link from "next/link";
import { cn } from "../lib/utils";
import {
  CardDescription,
  CardHeader,
  CardTitle,
  Card as ShadcnCard,
} from "./ui/card";

interface Props {
  title: string;
  description: string;
  url: string;
  thumbnail: string;
  sourceCode?: string;
  className?: string;
}

export const Card = ({
  title,
  description,
  url,
  thumbnail,
  className,
}: Props) => {
  const cardContent = (
    <>
      <div className="relative h-48 w-full overflow-hidden">
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-transparent via-transparent to-background/80" />
        <Image
          src={`/${thumbnail}`}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold tracking-tight text-glow">
          {title}
        </CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
    </>
  );

  return (
    <ShadcnCard
      className={cn(
        "group relative w-[350px] overflow-hidden transition-all duration-500",
        "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent",
        "hover:glow",
        "bg-secondary/30 backdrop-blur-xl border-white/10",
        className
      )}
    >
      <Link href={url} className="block">
        {cardContent}
      </Link>
    </ShadcnCard>
  );
};
