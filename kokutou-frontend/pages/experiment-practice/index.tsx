import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import Usage from 'components/experiment-practice/usage';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>音像定位実験システム - 実験ページ</title>
        <meta name="description" content="Created by Tetsu Takizawa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Usage />
      </main>
    </Box>
  );
}
