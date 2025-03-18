import Duration from "duration";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

export const Introduction = ({
  title = "Ng Wing Chung",
}: {
  title?: string;
}) => {
  const duration = new Duration(new Date("2019-10-01"), new Date());

  return (
    <section
      id="home"
      className="flex min-h-screen flex-col items-center justify-center px-4"
    >
      <h1 className="flex items-center text-5xl font-bold tracking-tight sm:text-6xl">
        {title}
        <a
          href="https://github.com/kennethnwc"
          className="ml-2 inline-flex text-muted-foreground transition-colors hover:text-foreground"
        >
          <AiFillGithub className="h-10 w-10" />
        </a>
      </h1>
      <h2 className="mt-6 text-xl text-muted-foreground sm:text-2xl">
        Developer for
        {duration.year === 1 && " 1 year "}
        {duration.year > 1 && ` ${duration.year} years `}
        {duration.month > 1 && `and ${duration.month} months`}
        {duration.month === 1 && "and a month"}
      </h2>
    </section>
  );
};
