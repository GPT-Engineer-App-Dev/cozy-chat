import { Box, Flex, Heading, Avatar } from "@chakra-ui/react";

const NavBar = ({ username }) => {
  return (
    <Flex
      as="nav"
      align="center"
      justify="space-between"
      padding="1.5rem"
      bg="teal.500"
      color="white"
    >
      <Heading as="h1" size="lg" letterSpacing={"tighter"}>
        ChatApp
      </Heading>
      <Avatar name={username} />
    </Flex>
  );
};

export default NavBar;