import { useState } from "react";
import { Container, Heading, FormControl, FormLabel, Input, Button, VStack, Textarea } from "@chakra-ui/react";

const BookTickets = () => {
  const [numTickets, setNumTickets] = useState(1);
  const [attendeeNames, setAttendeeNames] = useState("");
  const [contactInfo, setContactInfo] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log({
      numTickets,
      attendeeNames,
      contactInfo,
    });
  };

  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={4} as="form" onSubmit={handleSubmit}>
        <Heading as="h1" size="xl">Book Tickets</Heading>
        <FormControl id="num-tickets" isRequired>
          <FormLabel>Number of Tickets</FormLabel>
          <Input type="number" value={numTickets} onChange={(e) => setNumTickets(e.target.value)} min={1} />
        </FormControl>
        <FormControl id="attendee-names" isRequired>
          <FormLabel>Attendee Names</FormLabel>
          <Textarea value={attendeeNames} onChange={(e) => setAttendeeNames(e.target.value)} />
        </FormControl>
        <FormControl id="contact-info" isRequired>
          <FormLabel>Contact Information</FormLabel>
          <Input value={contactInfo} onChange={(e) => setContactInfo(e.target.value)} />
        </FormControl>
        <Button type="submit" colorScheme="teal" size="lg">Submit Booking</Button>
      </VStack>
    </Container>
  );
};

export default BookTickets;