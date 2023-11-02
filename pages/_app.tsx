import 'styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import Head from "next/head";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlasmicRootProvider Head={Head} disableLoadingBoundary={true}>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}
