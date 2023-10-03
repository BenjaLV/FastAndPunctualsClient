import React, { ReactNode } from "react";
import Navbar from "../ui/Navbar";
import { SessionProvider } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useEffect } from "react";
import { useRouter } from "next/router";

interface Props {
  children: ReactNode;
  title: string;
  className?: string;
}

const Layout = ({ children, title, className }: Props) => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status !== "authenticated") {
      router.push("/login");
    }
  }, [status, router]);

  return (
    <>
      {status === "authenticated" ? (
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
      ) : (
        <>
          <img src="/error.jpg" alt="Error" />
        </>
      )}
    </>
  );
};

export default Layout;
