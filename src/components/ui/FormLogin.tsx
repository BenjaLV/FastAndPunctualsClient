import React, { ReactNode, useState } from "react";
import { LogoIcon } from "../common";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import {
  LockClosedIcon,
  UserIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import Button from "./Button";
import { useFormik } from "formik";
import * as Yup from "yup";

interface Props {
  children: ReactNode;
}

const FormLogin = ({ children }: Props) => {
  const router = useRouter();

  // Define el esquema de validación Yup
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("El correo electrónico no es válido")
      .required("El correo electrónico es requerido"),
    password: Yup.string()
      .min(6, "La contraseña debe tener al menos 8 caracteres")
      .matches(
        /(?=.*[A-Z])/,
        "La contraseña debe contener al menos una letra mayúscula"
      )
      .required("La contraseña es requerida"),
  });

  // Define el formulario con Formik
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const responseNextAuth = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      router.push("/start-delivery");
    },
  });

  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    formik;

  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="text-center w-full items-center text-sm">
      <form
        className="rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={formik.handleSubmit}
      >
        <div className="mb-8 flex items-center justify-center md:justify-start">
          <div className="max-w-[300px]">
            <LogoIcon />
          </div>
        </div>
        <div className=" relative">
          <div className="relative rounded-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <UserIcon className="h-5 w-5 text-white" />
            </span>
            <input
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              type="email"
              id="email"
              name="email"
              placeholder="email@contraseña.com"
              className={`pl-10 focus:outline-none h-[45px]  bg-inherit text-white w-full pr-3 py-2 border rounded-md ${
                touched.email && errors.email ? "border-red-500" : ""
              } border-white placeholder-white sm:w-full md:w-full lg:w-full`}
            />
          </div>
        </div>
        {touched.email && errors.email ? (
          <div className="text-red-500 text-xs">{errors.email}</div>
        ) : null}
        <div className=" mt-4 relative">
          <div className="relative rounded-md">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <LockClosedIcon className="h-5 w-5 text-white" />
            </span>
            <input
              required
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="**********"
              className={`pl-10 focus:outline-none h-[45px]  bg-inherit text-white w-full pr-3 py-2 border rounded-md ${
                touched.email && errors.email ? "border-red-500" : ""
              } border-white placeholder-white sm:w-full md:w-full lg:w-full`}
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <span className="absolute inset-y-0 right-0 flex items-center pr-3">
              {showPassword ? (
                <EyeSlashIcon
                  className="h-5 w-5 text-white cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              ) : (
                <EyeIcon
                  className="h-5 w-5 text-white cursor-pointer"
                  onClick={togglePasswordVisibility}
                />
              )}
            </span>
          </div>
        </div>
        <>
          {touched.password && errors.password ? (
            <div className="text-red-500 text-xs mt-0 ">{errors.password}</div>
          ) : null}
        </>

        <div className="mb-4 mt-5">
          <Button
            text="Ingresar"
            className="bg-secondary text-primary text-sm"
          ></Button>
        </div>
        <>{children}</>
        <div className="">
          <a
            className="font-sans text-xs placeholder: text-white hover:text-alternative"
            href="/register"
          >
            OLVIDÉ MI CONTRASEÑA
          </a>
        </div>
      </form>
    </div>
  );
};

export default FormLogin;
