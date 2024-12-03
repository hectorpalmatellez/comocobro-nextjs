import React from 'react';

interface AppProps {
  Component: React.ComponentType<React.Component>;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
