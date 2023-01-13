import GlobalStyle from '../styles/global'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ChakraProvider>
      <Component {...pageProps} />
      </ChakraProvider>
    </>
  )
}
