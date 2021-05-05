import React from "react";
import { IconProps, Icon } from "@chakra-ui/icons";
import { gitHubIcon } from "../utils/icon";

export const GitHubIcon: React.FC<IconProps> = ({ children, ...props }) => {
  return (
    <Icon color="green.500" viewBox="0 0 500 500" boxSize={8} {...props}>
      <path fill="currentColor" d={gitHubIcon} />
    </Icon>
  );
};
