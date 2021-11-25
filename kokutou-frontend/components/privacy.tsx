import {
  Box, Container, Flex, Heading, HStack, Stack, Text,
} from '@chakra-ui/react';
import Link from 'next/link';
import IconPrivacy from 'components/icon-privacy';

export default function Privacy() {
  return (
    <Box bg="gray.50">
      <Container maxW="container.lg" centerContent>
        <HStack spacing="40px">
          <Stack spacing="12px">
            <Heading as="h2" size="md">データの取り扱いについて</Heading>
            <Text>
              取得したデータや個人情報は、研究目的以外には使用しません。
              データは匿名化するので、専門学会、学術専門誌等を通じて研究発表する際も個人情報は守秘されます。
              詳しくは
              <Link href="/terms-of-participation">参加規約</Link>
              をご確認ください。
            </Text>
          </Stack>
          <Flex p="50px" align="center" justify="center">
            <IconPrivacy />
          </Flex>
        </HStack>
      </Container>
    </Box>
  );
}
