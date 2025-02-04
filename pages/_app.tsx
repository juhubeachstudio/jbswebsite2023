import 'styles/globals.css';
import { PlasmicRootProvider } from '@plasmicapp/react-web';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    if (META_PIXEL_ID) {
      ReactPixel.init(META_PIXEL_ID);
      ReactPixel.pageView(); // Track first page load

      const handleRouteChange = () => {
        ReactPixel.pageView(); // Track page views on route change
      };

      router.events.on('routeChangeComplete', handleRouteChange);
      return () => {
        router.events.off('routeChangeComplete', handleRouteChange);
      };
    }
  }, [router.events]);

  return (
    <PlasmicRootProvider disableLoadingBoundary={true}>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}
