import { Poppins } from "next/font/google";
import { SessionProvider } from "next-auth/react";
import { NextUIProvider } from "@nextui-org/react";
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css'; 

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
      <NextUIProvider>
        <SessionProvider session={session}>
          <main className={`${poppins}`}>
            <Component {...pageProps} />
          </main>
        </SessionProvider>
        <ToastContainer /> 
      </NextUIProvider>
    </>
  );
}
