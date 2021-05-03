import { Box, Flex } from "@chakra-ui/react";
import Duration from "duration";
import React from "react";

export const About: React.FC = () => {
  const duration = new Duration(new Date("2019-10-01"), new Date());
  return (
    <Flex bgGradient="linear-gradient(to left, #ffffff, #81ff5f)" bgClip="text">
      <Box>
        I am working as a full stack developer for about {duration.year} years{" "}
        {duration.month > 1 && `and ${duration.month} months`}
        {duration.month === 1 && "and a month"}
      </Box>
    </Flex>
  );
};
