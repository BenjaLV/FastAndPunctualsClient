import React, { ReactNode, useState } from "react";
import { LogoIcon } from "../common";
import { useRouter } from "next/router";
import { signIn } from "next-auth/react";
import {
  LockClosedIcon,
  LockOpenIcon,
  UserIcon,
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
      .min(6, "La contraseña debe tener al menos 6 caracteres")
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
        <div className=" flex items-center appearance-none bg-inherit border border-white rounded-lg py-0 px-3 text-white leading-tight focus:outline-none h-[45px] w-full">
          <UserIcon className="h-5 w-5 text-white" />
          <input
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className=" pl-2 outline-none border-none bg-inherit w-full placeholder-white"
            type="text"
            name="email"
            id="email"
            placeholder="email@contraseña.com"
            required
          />
        </div>
        {touched.email && errors.email ? (
          <div className="text-red-500 text-xs">{errors.email}</div>
        ) : null}
        <div className="flex items-center mt-3  appearance-none bg-inherit border border-white rounded-lg py-0 px-3 text-white  leading-tight focus:outline-none h-[45px] w-full">
          {showPassword ? (
            <LockOpenIcon
              className="h-5 w-5 text-white cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          ) : (
            <LockClosedIcon
              className="h-5 w-5 text-white cursor-pointer"
              onClick={togglePasswordVisibility}
            />
          )}
          <input
            className="pl-2 outline-none border-none bg-inherit w-full placeholder-white"
            type={showPassword ? "text" : "password"}
            name="password"
            id="password"
            placeholder={showPassword ? "Contraseña" : "**********"}
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            required
          />
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
