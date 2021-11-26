import {
  Container, Divider, Flex, VStack, Text,
} from '@chakra-ui/react';
import IconHeadphone from 'components/icon-headphone';

export default function Footer() {
  return (
    <Flex as="footer" pt="20px" w="100%" bg="white">
      <Container w="100%" centerContent>
        <VStack w="100%" spacing="5px">
          <IconHeadphone width="32px" height="32px" />
          <Divider />
          <Text size="xs">
            Music vector created by rawpixel.com - www.freepik.com
          </Text>
        </VStack>
      </Container>
    </Flex>
  );
}
