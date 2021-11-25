import {
  Button, Center, Container, Heading, VStack,
} from '@chakra-ui/react';
import IconHeadphone from 'components/icon-headphone';

export default function Hero() {
  return (
    <Container maxW="container.lg" height="100vh" centerContent>
      <Center h="100vh">
        <VStack spacing="40px">
          <IconHeadphone width="300px" height="300px" />
          <Heading as="h1" size="xl">オンライン音像定位実験</Heading>
          <Button colorScheme="teal" size="lg">
            はじめる
          </Button>
        </VStack>
      </Center>
    </Container>
  );
}
