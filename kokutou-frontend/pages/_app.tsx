import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

function MyApp({
  Component,
  pageProps,
}: AppProps) {
  const [cookies, setCookie] = useCookies();
  useEffect(() => {
    if (cookies.uid === null || cookies.uid === undefined || cookies.uid === '') {
      const uid = uuidv4();
      const dt = new Date();
      dt.setFullYear(dt.getFullYear() + 1);
      setCookie('uid', uid, { expires: dt });
    }
  }, []);

  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
