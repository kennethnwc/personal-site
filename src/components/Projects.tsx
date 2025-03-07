import React from "react";
import { Card } from "./Card";

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen py-20">
      <div className="container mx-auto">
        <h2 className="mb-10 text-center text-4xl font-bold tracking-tight">
          Projects
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          <Card
            title="Digital Repository"
            description="To browse all the digital collections"
            url="https://digitalrepository.lib.hku.hk"
            thumbnail="DR.PNG"
          />
          <Card
            title="GIS Project"
            description="Interactive map for Hong Kong"
            url="https://hkh-gis.lib.hku.hk"
            thumbnail="GIS.PNG"
            sourceCode="https://github.com/kennethnwc/hk-directory-gis-frontend"
          />
        </div>
      </div>
    </section>
  );
};
