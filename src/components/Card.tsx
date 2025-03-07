import { AiFillGithub } from "react-icons/ai";
import {
  Card as ShadcnCard,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { cn } from "../lib/utils";
import Image from "next/image";

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
  sourceCode,
  className,
}: Props) => {
  return (
    <ShadcnCard
      className={cn(
        "w-[350px] overflow-hidden transition-all hover:shadow-lg",
        className
      )}
    >
      <a href={url} className="block">
        <div className="relative h-48 w-full">
          <Image
            src={`/${thumbnail}`}
            alt={title}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {sourceCode && (
          <CardFooter>
            <a
              href={sourceCode}
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground"
            >
              Source Code <AiFillGithub className="ml-1" />
            </a>
          </CardFooter>
        )}
      </a>
    </ShadcnCard>
  );
};
