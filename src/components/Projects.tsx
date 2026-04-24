import React from "react";
import { Card } from "./Card";
import { WindowFrame } from "./WindowFrame";

export const Projects = () => {
  return (
    <section id="projects" className="scroll-mt-32">
      <WindowFrame title="works.htm" bodyClassName="space-y-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="retro-kicker mb-2">selected work</p>
            <h2 className="text-2xl font-semibold text-slate-900 sm:text-3xl">
              Projects
            </h2>
          </div>
          <span className="retro-pill">double click to open</span>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <Card
            title="Digital Repository"
            description="A browsing experience for digital collections, designed for discovery and long-form content exploration."
            url="https://digitalrepository.lib.hku.hk"
            thumbnail="DR.PNG"
            status="archive interface"
            stack={["Next.js", "TypeScript", "Collections UI"]}
          />
          <Card
            title="GIS Project"
            description="An interactive mapping experience focused on navigating and understanding Hong Kong through spatial context."
            url="https://hkh-gis.lib.hku.hk"
            thumbnail="GIS.PNG"
            status="map product"
            stack={["Next.js", "GIS", "Interactive UI"]}
            sourceCode="https://github.com/kennethnwc/hk-directory-gis-frontend"
          />
        </div>
      </WindowFrame>
    </section>
  );
};
