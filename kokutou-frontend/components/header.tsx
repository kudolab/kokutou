import {
  Flex, HStack, Link, Spacer,
} from '@chakra-ui/react';
import IconHeadphone from 'components/icon-headphone';
import StartButton from 'components/start-button';

export default function Header() {
  return (
    <Flex as="header" position="fixed" w="100%" boxShadow="base">
      <HStack p="10px" pl="20px" spacing="20px" align="center" justify="center">
        <IconHeadphone width="32px" height="32px" />
        <Link href="/">
          この実験はなに？
        </Link>
        <Link href="/">
          実験方法
        </Link>
        <Link href="/">
          データの取り扱いについて
        </Link>
        <Link href="/">
          コンタクト
        </Link>
      </HStack>
      <Spacer />
      <HStack
        p="10px"
        pr="20px"
        spacing="20px"
        align="center"
        justify="center"
        justifySelf="flex-end"
      >
        <StartButton size="md" />
      </HStack>
    </Flex>
  );
}
