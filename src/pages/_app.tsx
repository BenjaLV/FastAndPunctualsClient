<<<<<<< HEAD
import { Poppins } from "next/font/google";
import { SessionProvider } from "next-auth/react";
=======
import { Poppins } from 'next/font/google'
import { NextUIProvider } from "@nextui-org/react";

>>>>>>> f1611fdcafad899b93cfde9b6101a1c312e092e2

import "@/styles/globals.css";
import type { AppProps } from "next/app";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
<<<<<<< HEAD
    <>
      <SessionProvider session={session}>
        <main className={`${poppins}`}>
          <Component {...pageProps} />
        </main>
      </SessionProvider>
    </>
  );
=======
    <NextUIProvider>
      <main className={`${poppins}`}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  )
>>>>>>> f1611fdcafad899b93cfde9b6101a1c312e092e2
}
