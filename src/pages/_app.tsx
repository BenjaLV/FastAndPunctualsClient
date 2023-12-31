import { Poppins } from 'next/font/google'

import '@/styles/globals.css'
import type { AppProps } from 'next/app'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"]
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <main className={`${poppins}`}>
        <Component {...pageProps} />
      </main>
    </>
  )
}
