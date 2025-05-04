// pages/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document'

const GTM_ID = process.env.GMT_ID;

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        {/* Google Tag Manager (noscript) - placed immediately after opening body tag */}
        <noscript dangerouslySetInnerHTML={{
          __html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `,
        }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}