import { Button } from '@chakra-ui/react';

type StartButtonProps = {
  size: string
}

export default function StartButton({ size }: StartButtonProps) {
  return (
    <Button colorScheme="teal" size={size}>
      はじめる
    </Button>
  );
}
