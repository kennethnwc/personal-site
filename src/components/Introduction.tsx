import { Flex, Heading } from "@chakra-ui/react";

export const Introduction = ({
  title = "Ng Wing Chung",
}: {
  title?: string;
}) => (
  <Flex
    justifyContent="center"
    // alignItems="center"
    flexDir="column"
    height="100vh"
    bgGradient="linear-gradient(to left, #ffffff, #81ff5f)"
    bgClip="text"
  >
    <Heading fontSize="6vw">{title}</Heading>
    <Heading fontSize="3vw">I am a full stack developer</Heading>
  </Flex>
);
