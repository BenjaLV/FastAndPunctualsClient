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
         className={`${className} container mx-auto flex items-center justify-center p-10 xl:p-24 lg:p-18 md:p-16`}
        >
          {children}
        </main>
      </SessionProvider>
    </>
  );
};

export default Layout;
