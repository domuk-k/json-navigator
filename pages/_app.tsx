import type { AppProps } from 'next/app';

import { LoadedJSONProvider } from 'context/loadedJSON';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <LoadedJSONProvider>
      <Component {...pageProps} />
    </LoadedJSONProvider>
  );
}

export default MyApp;
