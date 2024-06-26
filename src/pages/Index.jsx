import { Container, Text, VStack, Heading, Box, Button, Flex, IconButton } from "@chakra-ui/react";
import { FaCalendarPlus, FaListAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">Event Management Platform</Heading>
        <Text fontSize="lg" textAlign="center">Manage your events efficiently and effortlessly.</Text>
        <Flex direction="row" justifyContent="center" alignItems="center" gap={4}>
          <Button as={Link} to="/create-event" leftIcon={<FaCalendarPlus />} colorScheme="teal" size="lg">
            Create Event
          </Button>
          <Button leftIcon={<FaListAlt />} colorScheme="blue" size="lg">
            View Events
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;