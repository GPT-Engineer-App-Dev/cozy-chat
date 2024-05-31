import { Box, VStack, Text, Avatar, Flex } from "@chakra-ui/react";

const ContactList = ({ contacts, onSelectContact }) => {
  return (
    <VStack spacing={4} align="stretch" p={4} borderRight="1px solid #e2e8f0">
      {contacts.map((contact, index) => (
        <Flex
          key={index}
          p={2}
          align="center"
          _hover={{ bg: "gray.100", cursor: "pointer" }}
          onClick={() => onSelectContact(contact)}
        >
          <Avatar name={contact.name} src={contact.avatar} />
          <Text ml={4}>{contact.name}</Text>
        </Flex>
      ))}
    </VStack>
  );
};

export default ContactList;