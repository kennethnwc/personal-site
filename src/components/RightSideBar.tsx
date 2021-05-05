import { Box, Link } from "@chakra-ui/react";
export const RightSideBar = () => {
  return (
    <Box position="sticky" top="5" color="white" ml="5">
      <Box>
        <Link href="#intro">Home</Link>
      </Box>
      <Box>
        <Link href="#experiences">Experience</Link>
      </Box>
      <Box>
        <Link href="#projects">Projects</Link>
      </Box>
      <Box>
        <Link href="#skills">Skills</Link>
      </Box>
    </Box>
  );
};
