import { Button } from '@chakra-ui/react';

type StartButtonProps = {
  size: string,
  onClick: ()=>void,
}

export default function StartButton({ size, onClick }: StartButtonProps) {
  return (
    <Button colorScheme="teal" size={size} onClick={onClick}>
      はじめる
    </Button>
  );
}
