import {
  Flex, HStack, Link, Spacer,
} from '@chakra-ui/react';
import StartButton from 'components/start-button';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';

export default function Header() {
  const router = useRouter();
  return (
    <Flex as="header" position="fixed" w="100%" boxShadow="base" bg="white" zIndex={2}>
      <HStack p="0.625rem" pl="1.25rem" spacing="1.25rem" align="center" justify="center">
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
        p="0.625rem"
        pr="1.25rem"
        spacing="1.25rem"
        align="center"
        justify="center"
        justifySelf="flex-end"
      >
        <StartButton size="md" onClick={() => router.push('/experiment-practice')} />
      </HStack>
    </Flex>
  );
}
