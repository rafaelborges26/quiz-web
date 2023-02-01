import GlobalStyle from '../styles/global'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ContextsProvider } from '../contexts/QuestionsContext'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ContextsProvider>
      <ChakraProvider>
      <Component {...pageProps} />
      </ChakraProvider>
      </ContextsProvider>
    </>
  )
}
