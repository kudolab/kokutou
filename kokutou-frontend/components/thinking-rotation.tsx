import React from 'react';
import Image from 'next/image';

type ThinkingRotationProps = {
  width: string,
  height: string
}

export default function ThinkingRotation({
  width,
  height,
}: ThinkingRotationProps) {
  return (
    <Image
      src="/thinking-rotation.png"
      alt="thinking-rotation"
      width={width}
      height={height}
    />
  );
}
