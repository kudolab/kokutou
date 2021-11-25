import {
  Box, Flex, Container, Heading, HStack, Stack, Text,
} from '@chakra-ui/react';
import ThinkingRotation from 'components/thinking-rotation';

export default function WhatIsThis() {
  return (
    <Box bg="gray.50">
      <Container maxW="container.lg" centerContent>
        <HStack spacing="40px">
          <Stack spacing="12px">
            <Heading as="h2" size="md">この実験はなに？</Heading>
            <Text>
              「ヒトはどれくらい音を動かせば音の移動方向がわかるのか」を調べるための実験です。
              研究結果はVRコンテンツのリアリティ向上などに役立つことが期待されています。
            </Text>
          </Stack>
          <Flex p="50px" align="center" justify="center">
            <ThinkingRotation width="400px" height="408px" />
          </Flex>
        </HStack>
      </Container>
    </Box>
  );
}