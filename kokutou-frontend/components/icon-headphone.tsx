import React from 'react';
import Image from 'next/image';

type IconHeadphoneProps = {
  width: string,
  height: string
}

export default function IconHeadphone({
  width,
  height,
}: IconHeadphoneProps) {
  return <Image src="/icon-headphone.png" alt="icon-headphone" width={width} height={height} />;
}
