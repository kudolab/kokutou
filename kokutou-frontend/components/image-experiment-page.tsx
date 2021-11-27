import React from 'react';
import Image from 'next/image';

type ImageExperimentPageProps = {
  width: string,
  height: string
}

export default function ImageExperimentPage({
  width,
  height,
}: ImageExperimentPageProps) {
  return (
    <Image
      src="/experiment-page.png"
      alt="experiment-page"
      width={width}
      height={height}
    />
  );
}
