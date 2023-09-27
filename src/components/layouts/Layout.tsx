<<<<<<< HEAD
import React, { ReactNode } from "react";
import Navbar from "../ui/Navbar";
import { SessionProvider } from "next-auth/react";
=======
import React, { ReactNode } from 'react'
import Navbar from '../ui/Navbar';
>>>>>>> f1611fdcafad899b93cfde9b6101a1c312e092e2

interface Props {
    children: ReactNode;
    title: string;
    className?: string;
}

const Layout = ({ children, title, className }: Props) => {
<<<<<<< HEAD
  return (
    <>
      <title>{title || "fazt&punctuals"}</title>
      <SessionProvider>
        <Navbar></Navbar>
        <main
          className={`${className} container mx-auto flex items-center justify-center p-4 md:p-24`}
        >
          {children}
        </main>
      </SessionProvider>
    </>
  );
};
=======
    return (
        <>
            <title>{title || 'fazt&punctuals'}</title>

            <Navbar></Navbar>
            <main className={`${className} container mx-auto flex items-center h-screen justify-center p-4 md:p-24`}>
                {children}
            </main>
        </>
    )
}
>>>>>>> f1611fdcafad899b93cfde9b6101a1c312e092e2

export default Layout