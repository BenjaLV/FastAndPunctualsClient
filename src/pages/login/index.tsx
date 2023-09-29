import FormLogin from "@/components/ui/FormLogin";
import Button from "@/components/ui/Button";

import React from "react";
import LayoutLoginRegister from "@/components/layouts/LayoutLoginRegister";
import Link from "next/link";

const Login = () => {
  return (
    <LayoutLoginRegister title="Login">
      <FormLogin>
        <div className="mb-4">
          <Link href='/register'>
            <Button
              text="Crear cuenta"
              className="bg-inherit	text-white border border-secondary hover:bg-secondary hover:text-primary"
            ></Button>

          </Link>
        </div>
      </FormLogin>
    </LayoutLoginRegister>
  );
};

export default Login;
