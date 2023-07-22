import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            
            <Html lang="pt-BR">
            <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com"/>
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
                <link rel="shortcut icon" href="/favicon.png" type="image/png" />
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta name="description" content="Quiz divertido para descobrir o quanto vocês realmente se conhecem!" />
          {}         
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
            </Html>
        )
    }
}