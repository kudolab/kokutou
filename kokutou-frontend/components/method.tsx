import {
  Box, Container, Flex, Heading, HStack, Stack, Text,
} from '@chakra-ui/react';
import Image from 'next/image';
import React from 'react';

export default function Method() {
  return (
    <Box bg="white">
      <Container maxW="container.lg" centerContent>
        <HStack spacing="2.5rem">
          <Flex p="3.125rem" align="center" justify="center">
            <Image
              src="/experiment-page.png"
              alt="experiment-page"
              width="400"
              height="300"
            />
          </Flex>
          <Stack spacing="0.75rem">
            <Heading as="h2" size="md">実験方法</Heading>
            <Text>
              1. 時計回りまたは反時計回りに移動する音が再生されます。
              <br />
              2. どちらに移動したか回答します。
            </Text>
            <Text>
              詳細は開始前のページで説明します。
            </Text>
          </Stack>
        </HStack>
      </Container>
    </Box>
  );
}
