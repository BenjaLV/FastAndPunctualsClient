import { Poppins } from 'next/font/google'
import { NextUIProvider } from "@nextui-org/react";


import '@/styles/globals.css'
import type { AppProps } from 'next/app'

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"]
})


export default function App({ Component, pageProps }: AppProps) {
  return (
    <NextUIProvider>
      <main className={`${poppins}`}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  )
}
