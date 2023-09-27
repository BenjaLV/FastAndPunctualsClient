import FormLogin from "@/components/ui/FormLogin";
import Button from "@/components/ui/Button";

import React from "react";
import LayoutLoginRegister from "@/components/layouts/LayoutLoginRegister";

const Login = () => {
  return (
    <LayoutLoginRegister title="Login">
      <FormLogin>
        <div className="mb-4">
          <Button
            text="Crear cuenta"
            className="bg-inherit	text-white border border-secondary hover:bg-secondary hover:text-primary"
          ></Button>
        </div>
      </FormLogin>
    </LayoutLoginRegister>
  );
};

export default Login;
