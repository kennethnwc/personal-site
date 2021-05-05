import { Box, Flex, Heading, Icon } from "@chakra-ui/react";
import React from "react";
import { FaDocker, FaReact } from "react-icons/fa";
import {
  SiApachesolr,
  SiMongodb,
  SiPostgresql,
  SiPython,
  SiRails,
  SiTypescript,
} from "react-icons/si";
import { nextjsIcon } from "../utils/icon";

export const Skills: React.FC = () => {
  return (
    <Flex
      id="skills"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      height="100vh"
    >
      <Heading fontSize="6xl" mb="2">
        Core skills
      </Heading>
      <Box id="language">
        <Icon as={SiTypescript} boxSize={20} color="white" />
        <Icon as={SiPython} boxSize={20} color="white" ml="2" />
      </Box>

      <Flex
        id="framework"
        flexDir="row"
        justifyContent="center"
        alignItems="center"
      >
        <Icon as={FaReact} boxSize={20} color="white" />
        <Icon viewBox="0 0 148 90" width="200px" height="100px" color="white">
          <path d={nextjsIcon} fill="currentColor" />
        </Icon>
      </Flex>

      <Icon as={FaDocker} boxSize={20} color="white" />
      <Icon as={SiPostgresql} boxSize={20} color="white" />
      <Heading fontSize="4vw" mt="2">
        Skills
      </Heading>
      <Flex flexDir="row" justifyContent="center" alignItems="center">
        <Icon as={SiRails} w="100px" h="70px" color="white" />
        <Icon as={SiApachesolr} w="50px" h="50px" ml="2" color="white" />
        <Icon as={SiMongodb} w="50px" h="50px" ml="2" color="white" />
      </Flex>
    </Flex>
  );
};
