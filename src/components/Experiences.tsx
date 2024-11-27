import { Box, Flex, Heading } from "@chakra-ui/react";
export const Experiences = () => {
  return (
    <Flex
      id="experience"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      height="100vh"
    >
      <Heading fontSize="6xl">Experiences</Heading>
      <Box fontSize="2xl" mt="10" mx="10">
        <Box>2019 - 2021</Box>
        <Box>Full Stack developer</Box>

        <Box>2022 - Present</Box>
        <Box>Software Engineer</Box>
      </Box>
    </Flex>
  );
};
