import { Box, Link, Stack } from "@chakra-ui/react";

const section = ["home", "experience", "projects", "skills"];

export const RightSideBar = () => {
  return (
    <Box position="sticky" top="0" color="white" zIndex="10">
      <Stack spacing={4} direction="row" bg="teal.700">
        {section.map((link) => (
          <Link
            key={link}
            href={`#${link}`}
            textTransform="capitalize"
            py={1}
            px={2}
          >
            {link}
          </Link>
        ))}
      </Stack>
    </Box>
  );
};
