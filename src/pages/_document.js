import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600&display=swap" rel="stylesheet" />
                <meta name="description" content="Premium UK-based pet jewelry and accessories for cats and dogs. Luxury collars, pendants, and more." />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
