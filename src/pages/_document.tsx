import Document, { Html, Head, Main, NextScript } from 'next/document'
import { NextSeo } from 'next-seo'

export default class MyDocument extends Document {
    static async getInitialProps(ctx: any) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps };
      }
    render() {
        return (
            
            <Html lang="pt-BR">
            <Head>
                <meta charSet="UTF-8" />
                <meta name="description" content="Quiz divertido para descobrir o quanto vocês realmente se conhecem!" />
                  {/* Meta tags para redes sociais (incluindo o WhatsApp) */}
                    <meta property="og:title" content="Quiz" />
                    <meta property="og:description" content="Quiz divertido para descobrir o quanto vocês realmente se conhecem!" />
                {/*
                    <meta property="og:url" content="https://www.example.com" />
                  {/* Adicione uma imagem representativa do seu site para pré-visualizações nas redes sociais */}
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
            </Html>
        )
    }
}