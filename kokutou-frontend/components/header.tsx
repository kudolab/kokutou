import {
  Flex, HStack, Link, Spacer,
} from '@chakra-ui/react';
import StartButton from 'components/start-button';
import Image from 'next/image';
import React from 'react';

export default function Header() {
  return (
    <Flex as="header" position="fixed" w="100%" boxShadow="base" bg="white" zIndex={2}>
      <HStack p="10px" pl="20px" spacing="20px" align="center" justify="center">
        <Image src="/icon-headphone.png" alt="icon-headphone" width="32" height="32" />
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
