import React from 'react';
import Image from 'next/image';

type ExperimentPageProps = {
  width: string,
  height: string
}

export default function ExperimentPage({
  width,
  height,
}: ExperimentPageProps) {
  return (
    <Image
      src="/experiment-page.png"
      alt="experiment-page"
      width={width}
      height={height}
    />
  );
}
