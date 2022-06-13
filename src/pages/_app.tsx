import { Header } from '../components/header'
import { ToastContainer } from 'react-nextjs-toast'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
