import { appWithTranslation } from 'next-i18next';
import { Analytics } from '@vercel/analytics/react';
import '@/styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default appWithTranslation(MyApp);