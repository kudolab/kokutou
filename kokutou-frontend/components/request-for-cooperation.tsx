import {
  Box, Container, Flex, Heading, VStack,
} from '@chakra-ui/react';
import PrayingHands from 'components/praying-hands';

export default function RequestForCooperation() {
  return (
    <Box bg="white" p="40px">
      <Container maxW="container.lg" centerContent>
        <VStack spacing="20px">
          <Heading as="h2" size="lg">ご協力よろしくお願いします。</Heading>
          <Flex align="center" justify="center">
            <PrayingHands />
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
}
