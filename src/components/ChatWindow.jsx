import { Box, Flex, Input, Button, VStack, Text } from "@chakra-ui/react";
import { useState } from "react";

const ChatWindow = ({ selectedContact }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { text: newMessage, sender: "me" }]);
      setNewMessage("");
    }
  };

  return (
    <Flex direction="column" height="100%">
      <Box flex="1" p={4} overflowY="auto">
        <VStack spacing={4} align="start">
          {messages.map((msg, index) => (
            <Box key={index} alignSelf={msg.sender === "me" ? "flex-end" : "flex-start"}>
              <Text>{msg.text}</Text>
            </Box>
          ))}
        </VStack>
      </Box>
      <Box p={4} borderTop="1px solid #e2e8f0">
        <Flex>
          <Input
            placeholder="Type a message"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <Button onClick={handleSendMessage} colorScheme="teal" ml={2}>
            Send
          </Button>
        </Flex>
      </Box>
    </Flex>
  );
};

export default ChatWindow;