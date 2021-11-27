import {
  Container, Divider, Flex, VStack, Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

export default function Footer() {
  return (
    <Flex as="footer" pt="20px" w="100%" bg="white">
      <Container w="100%" centerContent>
        <VStack w="100%" spacing="5px">
          <Image src="/icon-headphone.png" alt="icon-headphone" width="32" height="32" />;

          <Divider />
          <Text size="xs">
            Music vector created by rawpixel.com - www.freepik.com
          </Text>
        </VStack>
      </Container>
    </Flex>
  );
}
