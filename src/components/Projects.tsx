import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
import { Card } from "./Card";

export const Projects: React.FC = () => {
  return (
    <Flex
      id="projects"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      height="100vh"
    >
      <Heading fontSize="6xl" my="10">
        Projects
      </Heading>
      <Flex flexDir="row" flexWrap="wrap">
        <Card
          mx="10"
          my="5"
          title="Digital Repostiory"
          description="To browse all the digital collections"
          url="https://digitalrepository.lib.hku.hk"
          thumbnail="DR.PNG"
        />
        <Card
          my="5"
          mx="10"
          title="GIS Project"
          description="Interactive map for Hong Kong"
          url="https://hkh-gis.lib.hku.hk"
          thumbnail="GIS.PNG"
          sourceCode="https://github.com/kennethnwc/hk-directory-gis-frontend"
        ></Card>
      </Flex>
    </Flex>
  );
};
