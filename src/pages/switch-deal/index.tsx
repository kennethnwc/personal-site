import { Flex, Heading } from "@chakra-ui/react";

import { Container } from "../../components/Container";

const SwitchDealPage = () => (
  <>
    <Container color="teal.300">
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDir="column"
        height="100vh"
        mx="3"
      >
        <Heading fontSize="6xl">Switch Deal</Heading>
      </Flex>
    </Container>
  </>
);

export default SwitchDealPage;
