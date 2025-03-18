import React from "react";
import { FaDocker, FaReact } from "react-icons/fa";
import {
  SiApachesolr,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiRubyonrails,
  SiTypescript,
} from "react-icons/si";
import { nextjsIcon } from "../utils/icon";

export const Skills = () => {
  return (
    <section id="skills" className="min-h-screen py-20">
      <div className="container mx-auto flex flex-col items-center">
        <h2 className="mb-12 text-4xl font-bold tracking-tight">Core Skills</h2>

        <div className="mb-8 flex items-center justify-center space-x-4">
          <SiTypescript className="h-16 w-16 text-foreground" />
          <SiPython className="h-16 w-16 text-foreground" />
        </div>

        <div className="mb-8 flex items-center justify-center space-x-4">
          <FaReact className="h-16 w-16 text-foreground" />
          <svg viewBox="0 0 148 90" className="h-24 w-32 text-foreground">
            <path d={nextjsIcon} fill="currentColor" />
          </svg>
        </div>

        <div className="mb-8 flex items-center justify-center space-x-4">
          <FaDocker className="h-16 w-16 text-foreground" />
          <SiPostgresql className="h-16 w-16 text-foreground" />
        </div>

        <h3 className="mb-8 text-3xl font-semibold tracking-tight">
          Additional Skills
        </h3>

        <div className="flex items-center justify-center space-x-4">
          <SiRubyonrails className="h-14 w-14 text-foreground" />
          <SiApachesolr className="h-12 w-12 text-foreground" />
          <SiMongodb className="h-12 w-12 text-foreground" />
        </div>
      </div>
    </section>
  );
};
