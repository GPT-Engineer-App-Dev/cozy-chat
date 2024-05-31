import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";
import Login from "../components/Login";
import NavBar from "../components/NavBar";
import ContactList from "../components/ContactList";
import ChatWindow from "../components/ChatWindow";

const Index = () => {
  const [user, setUser] = useState(null);
  const [selectedContact, setSelectedContact] = useState(null);

  const contacts = [
    { name: "Alice", avatar: "https://bit.ly/dan-abramov" },
    { name: "Bob", avatar: "https://bit.ly/ryan-florence" },
  ];

  if (!user) {
    return <Login onLogin={setUser} />;
  }

  return (
    <Flex direction="column" height="100vh">
      <NavBar username={user} />
      <Flex flex="1" overflow="hidden">
        <Box width="30%" borderRight="1px solid #e2e8f0">
          <ContactList contacts={contacts} onSelectContact={setSelectedContact} />
        </Box>
        <Box flex="1">
          {selectedContact ? (
            <ChatWindow selectedContact={selectedContact} />
          ) : (
            <Box p={4}>Select a contact to start chatting</Box>
          )}
        </Box>
      </Flex>
    </Flex>
  );
};

export default Index;