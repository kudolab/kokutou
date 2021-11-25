import {
  Box, Flex, Container, Heading, HStack, Stack, Text,
} from '@chakra-ui/react';
import ExperimentPage from 'components/experiment-page';

export default function Method() {
  return (
    <Box bg="white">
      <Container maxW="container.lg" centerContent>
        <HStack spacing="40px">
          <Flex p="50px" align="center" justify="center">
            <ExperimentPage width="400px" height="266px"/>
          </Flex>
          <Stack spacing="12px">
            <Heading as="h2" size="md">実験方法</Heading>
            <Text>
              1. 時計回りまたは反時計回りに移動する音が再生されます。
              <br/>
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
