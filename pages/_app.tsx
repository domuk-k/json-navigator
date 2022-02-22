import type { AppProps } from 'next/app';

import { UIContextProvider } from '@/context/ui';
import { LoadedJSONProvider } from '@/context/loadedJSON';

import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <UIContextProvider>
      <LoadedJSONProvider>
        <Component {...pageProps} />
      </LoadedJSONProvider>
    </UIContextProvider>
  );
}

export default MyApp;
