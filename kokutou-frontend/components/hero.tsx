import {
  Center, Container, Heading, VStack,
} from '@chakra-ui/react';
import IconHeadphone from 'components/icon-headphone';
import StartButton from 'components/start-button';
import Image from 'next/image';
import React from 'react';

export default function Hero() {
  return (
    <Container maxW="container.lg" height="100vh" centerContent>
      <Center h="100vh">
        <VStack spacing="40px">
          <Image src="/icon-headphone.png" alt="icon-headphone" width="300" height="300" />;
          <Heading as="h1" size="xl">オンライン音像定位実験</Heading>
          <StartButton size="lg" />
        </VStack>
      </Center>
    </Container>
  );
}
