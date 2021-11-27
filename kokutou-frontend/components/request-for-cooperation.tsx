import {
  Box, Container, Flex, Heading, VStack,
} from '@chakra-ui/react';
import PrayingHands from 'components/praying-hands';

export default function RequestForCooperation() {
  return (
    <Box bg="white" p="2.5rem">
      <Container maxW="container.lg" centerContent>
        <VStack spacing="1.25rem">
          <Heading as="h2" size="lg">ご協力よろしくお願いします。</Heading>
          <Flex align="center" justify="center">
            <PrayingHands />
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
}
