import { Poppins } from "next/font/google";
import { SessionProvider } from "next-auth/react";

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
    <>
      <SessionProvider session={session}>
        <main className={`${poppins}`}>
          <Component {...pageProps} />
        </main>
      </SessionProvider>
    </>
  );
}
