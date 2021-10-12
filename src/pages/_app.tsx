import type { AppProps } from 'next/app';
import Head from 'next/head';
import { getBaseUrl } from '../utils/getBaseUrl';

import '../index.css';

export default function _App({ Component, pageProps }: AppProps) {
    const baseUrl = getBaseUrl();

    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.png" />
                <meta name="viewport" content="width=device-width,initial-scale=1.0,user-scalable=0" />
                <meta key="og:site_name" property="og:site_name" content="snippidy" />
                <meta key="og:url" property="og:url" content={baseUrl} />
                <meta key="og:title" property="og:title" content="snippidy" />
                <meta key="og:type" property="og:type" content="website" />
                <meta key="article:author" property="article:author" content="https://twitter.com/yegairio" />
                <meta key="og:description" property="og:description" content="yegair.io" />
                <meta key="og:image" property="og:image" content={`${baseUrl}/card-1200x675.png`} />
                <meta key="og:image:width" property="og:image:width" content="1200" />
                <meta key="og:image:height" property="og:image:height" content="675" />
            </Head>
            <Component {...pageProps} />
        </>
    );
}
