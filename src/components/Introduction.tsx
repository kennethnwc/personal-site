import { Flex, Heading, Icon, Link, Text } from "@chakra-ui/react";
import Duration from "duration";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

export const Introduction = ({
  title = "Ng Wing Chung",
}: {
  title?: string;
}) => {
  const duration = new Duration(new Date("2019-10-01"), new Date());

  return (
    <Flex
      id="intro"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      height="100vh"
      mx="3"
    >
      <Heading fontSize="6xl">
        {title}
        <Link href="https://github.com/kennethnwc">
          <Icon as={AiFillGithub} ml="2" color="white" />
        </Link>
      </Heading>
      <Heading fontSize="2xl" mt="5">
        Developer for
        {duration.year === 1 && " 1 year "}
        {duration.year > 1 && ` ${duration.year} years `}
        {duration.month > 1 && `and ${duration.month} months`}
        {duration.month === 1 && "and a month"}
      </Heading>
    </Flex>
  );
};
