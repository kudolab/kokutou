import {
  Center, Container, Heading, VStack,
} from '@chakra-ui/react';
import StartButton from 'components/start-button';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

export default function Hero() {
  const router = useRouter();
  useEffect(() => {
    router.prefetch('/experiment-practice');
  }, []);

  return (
    <Container maxW="container.lg" height="100vh" centerContent>
      <Center h="100vh">
        <VStack spacing="2.5rem">
          <Image src="/icon-headphone.png" alt="icon-headphone" width="300" height="300" />
          <Heading as="h1" size="xl">オンライン音像定位実験</Heading>
          <StartButton size="lg" onClick={() => router.push('/experiment-practice')} />
        </VStack>
      </Center>
    </Container>
  );
}
