import { Box, Flex, Heading } from "@chakra-ui/react";
export const Experiences: React.FC = () => {
  return (
    <Flex
      id="experience"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      height="100vh"
    >
      <Heading fontSize="6xl">Experience</Heading>
      <Box fontSize="2xl" mt="10" mx="10">
        <Box>2019 - Present</Box>
        <Box>Full Stack developer</Box>
        <Box>
          Developed and maintained various websites and data managment system
        </Box>
      </Box>
    </Flex>
  );
};
