import {
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  Progress,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';
import Head from 'next/head';
import Usage from 'components/experiment-practice/usage';
import Image from 'next/image';
import React, { useState } from 'react';
import CW from 'components/experiment-practice/cw';
import CCW from 'components/experiment-practice/ccw';
import { CloseIcon, CheckIcon } from '@chakra-ui/icons';

const PageStates = {
  DisplayingDescription: 'DisplayingDescription',
  PlayingSound: 'PlayingSound',
  WaitingAnswer: 'WaitingAnswer',
  AnswerSubmitted: 'AnswerSubmitted',
} as const;
type PageState = typeof PageStates[keyof typeof PageStates];

export default function ExperimentPractice() {
  const maxSoundNumber = 10;

  const [soundNumber, setSoundNumber] = useState(1);
  const [pageState, setPageState] = useState<PageState>(PageStates.DisplayingDescription);
  const [isCollectAnswer, setIsCollectAnswer] = useState(true);
  const soundList = [];

  const onClickRotationButton = (isClockWise: boolean) => {
    // TODO if isCollect
    // setIsAnswerSubmitted(true);
    setPageState(PageStates.AnswerSubmitted);
    // TODO
    setIsCollectAnswer(true);
    console.log('page state: ', pageState);
  };

  // TODO play sound
  setTimeout(() => { setPageState(PageStates.WaitingAnswer); }, 5000);

  console.log('page state: ', pageState);

  return (
    <Box>
      <Head>
        <title>音像定位実験システム - 実験ページ</title>
        <meta name="description" content="Created by Tetsu Takizawa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Usage
          isOpen={pageState === PageStates.DisplayingDescription}
          onClose={() => setPageState(PageStates.PlayingSound)}
        />
        <Container maxW="container.lg" height="100vh" centerContent>
          <Center h="100vh">
            <VStack spacing="2.5rem">
              <Image src="/icon-headphone.png" alt="icon-headphone" width="200" height="200" />
              <Box minW="16rem">
                <Text fontSize="lg" align="center">
                  {soundNumber}
                  /
                  {maxSoundNumber}
                </Text>
                <Box>
                  <Progress colorScheme="teal" size="xs" value={soundNumber} />
                </Box>
              </Box>
              <Box minW="16rem" minH="6rem">
                <Center>
                  {
                    (() => {
                      console.log('arrow');
                      if (pageState !== PageStates.AnswerSubmitted) {
                        return '';
                      }
                      if (isCollectAnswer) {
                        console.log('collect');
                        return (
                          <HStack spacing="0.5rem">
                            <CheckIcon boxSize="2rem" color="green.500" />
                            <Text fontSize="2xl">正解</Text>
                          </HStack>
                        );
                      }
                      console.log('incollect');
                      return (
                        <HStack spacing="0.5rem">
                          <CloseIcon boxSize="2rem" color="red.500" />
                          <Text fontSize="2xl">不正解</Text>
                        </HStack>
                      );
                    })()
                  }
                </Center>
              </Box>
              <ButtonGroup size="lg" spacing="2rem">
                <Button
                  colorScheme="teal"
                  width="9rem"
                  leftIcon={<CCW width="1.5rem" height="1.5rem" />}
                  onClick={() => onClickRotationButton(false)}
                  isDisabled={pageState !== PageStates.WaitingAnswer}
                >
                  反時計回り
                </Button>
                <Button
                  colorScheme="teal"
                  width="9rem"
                  rightIcon={<CW width="1.5rem" height="1.5rem" />}
                  onClick={() => onClickRotationButton(true)}
                  isDisabled={pageState !== PageStates.WaitingAnswer}
                >
                  時計回り
                </Button>
              </ButtonGroup>
              <ButtonGroup size="lg" spacing="2rem">
                <Button size="lg" variant="outline" width="9rem" onClick={() => setPageState(PageStates.PlayingSound)}>
                  {' '}
                  {/* TODO play same sound */}
                  もう一度再生
                </Button>
                {
                  pageState === PageStates.AnswerSubmitted
                    ? (
                      <Button colorScheme="teal" size="lg" width="9rem">
                        次の音を再生
                      </Button>
                    )
                    : ''
                }
              </ButtonGroup>
            </VStack>
          </Center>
        </Container>
      </main>
    </Box>
  );
}
