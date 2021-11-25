import { Box } from '@chakra-ui/react';
import Head from 'next/head';
import Hero from 'components/hero';
import Header from 'components/header';
import WhatIsThis from 'components/what-is-this';
import Method from 'components/method';
import Privacy from 'components/privacy';

export default function Home() {
  return (
    <Box>
      <Head>
        <title>音像定位実験システム</title>
        <meta name="description" content="Created by Tetsu Takizawa" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <Hero />
        <WhatIsThis />
        <Method />
        <Privacy />
      </main>
    </Box>
  );
}
