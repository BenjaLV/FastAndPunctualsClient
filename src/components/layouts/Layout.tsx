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
          className={`${className} container min-h-screen pt-20 flex flex-col items-center  `}
        >
          {children}
        </main>
      </SessionProvider>
    </>
  );
};

export default Layout;
