import {
  Box, Container, Flex, Heading, VStack,
} from '@chakra-ui/react';
import PrayingHands from 'components/praying-hands';
import StartButton from 'components/start-button';
import React from 'react';
import { useRouter } from 'next/router';

export default function RequestForCooperation() {
  const router = useRouter();
  return (
    <Box bg="white" p="2.5rem">
      <Container maxW="container.lg" centerContent>
        <VStack spacing="1.25rem">
          <Heading as="h2" size="lg">ご協力よろしくお願いします。</Heading>
          <Flex align="center" justify="center">
            <PrayingHands />
          </Flex>
          <StartButton size="lg" onClick={() => router.push('/experiment-practice')} />
        </VStack>
      </Container>
    </Box>
  );
}
