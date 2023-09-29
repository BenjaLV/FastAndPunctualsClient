import React, { ReactNode } from "react";
import Navbar from "../ui/Navbar";
import { SessionProvider } from "next-auth/react";

interface Props {
  children: ReactNode;
  title: string;
  className?: string;
}

const Layout = ({ children, title, className }: Props) => {
  return (
    <>
      <title>{title || "fazt&punctuals"}</title>
      <SessionProvider>
        <Navbar></Navbar>
        <main
          className={`${className} container mx-auto flex items-center h-screen justify-center p-4 md:p-24`}
        >
          {children}
        </main>
      </SessionProvider>
    </>
  );
};

export default Layout;
