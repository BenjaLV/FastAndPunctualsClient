import React from "react";
import Link from "next/link";
import { LogOutButton, SmallLogo } from "../common";
import { motion } from "framer-motion";
import { signOut } from "next-auth/react";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const handleSignOut = async () => {
    try {
      await signOut();
      console.log("llegue");
      router.push("/login");
    } catch (error) {
      console.error("Error al cerrar sesión:", error);
    }
  };
  return (
    <nav className="bg-primary shadow-md p-4 flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/start-delivery" legacyBehavior>
          <motion.a whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
            <SmallLogo className="cursor-pointer" />
          </motion.a>
        </Link>
      </div>

      <div>
        <Link href="/" legacyBehavior>
          <motion.a whileHover={{ scale: 1.1, transition: { duration: 0.2 } }}>
            <LogOutButton
              onClick={handleSignOut}
              className="cursor-pointer shadow-xl transform transition-transform hover:translate-y-[-2px] rounded-md"
            />
          </motion.a>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
