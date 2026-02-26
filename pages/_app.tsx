import 'styles/globals.css';
import { PlasmicRootProvider } from '@plasmicapp/react-web';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  useEffect(() => {
    // Import react-facebook-pixel dynamically on the client side
    import('react-facebook-pixel')
      .then((ReactPixelModule) => {
        const ReactPixel = ReactPixelModule.default;
        if (META_PIXEL_ID) {
          ReactPixel.init(META_PIXEL_ID);
          ReactPixel.pageView();

          const handleRouteChange = () => {
            ReactPixel.pageView();
          };

          router.events.on('routeChangeComplete', handleRouteChange);
          return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
          };
        } else {
          console.error('Meta Pixel ID is not defined');
        }
      })
      .catch((err) => console.error('Meta Pixel failed to load:', err));
  }, [router.events]);

  return (
    <PlasmicRootProvider disableLoadingBoundary={true}>
      <Component {...pageProps} />
    </PlasmicRootProvider>
  );
}
