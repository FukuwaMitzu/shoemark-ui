import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { MasterLayout } from '../views/layouts/master'
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <MasterLayout>
        <Component {...pageProps} />
      </MasterLayout>
    </ChakraProvider>
  )
}

export default MyApp
