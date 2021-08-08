import React from "react";

import { Heading } from "@chakra-ui/react";

export const MyHeading: React.FC = ({ children }) => {
  return (
    <Heading fontSize="2xl" mt="5">
      {children}
    </Heading>
  );
};
