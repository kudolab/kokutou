import {
  Box,
  Button,
  Center,
  Container,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Progress,
  Text,
  useDisclosure,
  VStack,
} from '@chakra-ui/react';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

function P1() {
  return (
    <Container mergin="1rem" minH="25rem" centerContent>
      <Center minH="25rem">
        <VStack spacing="1.5rem">
          return <Image src="/icon-headphone.png" alt="icon-headphone" width="150" height="150" />;
          <Box>
            <Text fontSize="lg" align="center">実験が始まると音が流れます。</Text>
            <Text fontSize="lg" align="center">
              必ず
              <b>ヘッドホン</b>
              {' '}
              or
              {' '}
              <b>イヤホン</b>
              で聴いてください。
            </Text>
          </Box>
        </VStack>
      </Center>
    </Container>
  );
}

function P2() {
  return (
    <Container mergin="1rem" minH="25rem" centerContent>
      <Center minH="25rem">
        <VStack spacing="1.5rem">
          <HStack spacing="2rem">
            <Box>
              <Image
                src="/thinking-rotation.png"
                alt="thinking-rotation"
                width="150"
                height="150"
              />
            </Box>
            <Box>
              <Image
                src="/image-experiment-page-thin.png"
                alt="image-experiment-page-thin"
                width="120"
                height="170"
              />
            </Box>
          </HStack>
          <Box>
            <Text fontSize="lg" align="center">
              音は
              <b>時計回り</b>
              または
              <b>反時計回り</b>
              に移動します。
            </Text>
            <Text fontSize="lg" align="center">ボタンを押して回答してください。</Text>
          </Box>
          <Text fontSize="lg" align="center">わからない場合は当てずっぽうで構いません。</Text>
        </VStack>
      </Center>
    </Container>
  );
}

export default function Usage() {
  const {
    isOpen,
    onOpen,
    onClose,
  } = useDisclosure();

  useEffect(() => {
    onOpen();
  }, []);

  const [currentPage, setCurrentPage] = useState(1);

  const els = {
    1: <P1 />,
    2: <P2 />,
  };

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onClose} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          実験説明
          {' '}
          {currentPage}
          <Progress colorScheme="teal" size="xs" value={currentPage * 25} />
        </ModalHeader>
        <ModalBody>
          {els[currentPage] as Element ?? (<Text>error</Text>)}
        </ModalBody>
        <ModalFooter>
          <HStack spacing="1rem">
            {currentPage > 1 && currentPage <= 4
              ? <Button colorScheme="teal" variant="outline" onClick={() => setCurrentPage(currentPage - 1)}>前へ</Button> : ''}
            {currentPage >= 1 && currentPage < 4
              ? <Button colorScheme="teal" onClick={() => setCurrentPage(currentPage + 1)}>次へ</Button> : ''}
            {currentPage === 4 ? <Button colorScheme="teal" onClick={onClose}>はじめる</Button> : '' }
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
