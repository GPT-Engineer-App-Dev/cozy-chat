import { Box, Button, Container, Heading, Input, VStack } from "@chakra-ui/react";
import { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");

  const handleLogin = () => {
    if (username.trim()) {
      onLogin(username);
    }
  };

  return (
    <Container centerContent>
      <VStack spacing={4} mt={20}>
        <Heading>Login</Heading>
        <Input
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <Button onClick={handleLogin} colorScheme="teal">
          Login
        </Button>
      </VStack>
    </Container>
  );
};

export default Login;