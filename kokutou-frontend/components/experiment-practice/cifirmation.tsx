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
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import Link from 'next/link';
import IconGood from 'components/experiment-practice/icon-good';
import IconRocket from 'components/experiment-practice/icon-rocket';
import IconClock from 'components/experiment-practice/icon-clock';

function P1() {
  return (
    <Container mergin="1rem" minH="25rem" centerContent>
      <Center minH="25rem">
        <VStack spacing="1.5rem">
          <IconGood />
          <Box>
            <Text fontSize="lg" align="center">イメージはつかめましたか？</Text>
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
          <IconClock />
          <Box>
            <Text fontSize="lg" align="center">
              音は全部で100回流れます。
            </Text>
            <Text fontSize="lg" align="center">
              所要時間は
              <b>15分</b>
              ほどです。
            </Text>
          </Box>
        </VStack>
      </Center>
    </Container>
  );
}

function P3() {
  return (
    <Container mergin="1rem" minH="25rem" centerContent>
      <Center minH="25rem">
        <VStack spacing="1.5rem">
          <IconRocket />
          <Box>
            <Text fontSize="lg" align="center">
              音は全部で100回流れます。
            </Text>
            <Text fontSize="lg" align="center">
              所要時間は
              <b>15分</b>
              ほどです。
            </Text>
          </Box>
        </VStack>
      </Center>
    </Container>
  );
}

type ConfirmationProps = {
  isOpen: boolean,
  onCloseWithReset: () => void,
}

export default function Confirmation({ isOpen, onCloseWithReset }:ConfirmationProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const els = {
    1: <P1 />,
    2: <P2 />,
    3: <P3 />,
  };

  return (
    <Modal closeOnOverlayClick={false} isOpen={isOpen} onClose={onCloseWithReset} size="lg">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          実験説明
          <Progress colorScheme="teal" size="xs" value={currentPage * (100 / Object.keys(els).length)} />
        </ModalHeader>
        <ModalBody>
          {els[currentPage] as Element ?? (<Text>error</Text>)}
        </ModalBody>
        <ModalFooter>
          <HStack spacing="1rem">
            {currentPage === 1 ? <Button variant="outline" onClick={onCloseWithReset}>もう一度練習する</Button> : ''}
            {currentPage >= 2 && currentPage <= 3
              ? (
                <Button
                  colorScheme="teal"
                  variant="outline"
                  onClick={() => setCurrentPage(currentPage - 1)}
                >
                  前へ
                </Button>
              ) : ''}
            {currentPage >= 1 && currentPage < 3
              ? (
                <Button
                  colorScheme="teal"
                  onClick={() => setCurrentPage(currentPage + 1)}
                >
                  次へ
                </Button>
              ) : ''}
            {currentPage === 3 ? (<Link href="/experiment"><Button colorScheme="teal">はじめる</Button></Link>) : ''}
          </HStack>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
