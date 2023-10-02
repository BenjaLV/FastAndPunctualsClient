import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import {
  UserIcon,
  LockClosedIcon,
  EyeIcon,
  EyeSlashIcon,
} from "@heroicons/react/24/outline";
import Button from "./Button";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Link from "next/link";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  passwordRepeat: Yup.string()
    .oneOf([Yup.ref("password"), undefined], "Passwords must match")
    .required("Password confirmation is required") as Yup.StringSchema<string>,
});

const FormRegister = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (values: {
    email: string;
    password: string;
    passwordRepeat: string;
  }) => {
    try {
      const res = await axios.post(
        "http://localhost:8080/api/users/register",
        values
      );
      if (res.status === 200) {
        const responseData = res.data;
        if (responseData.message) {
          toast.success(responseData.message);
        }
      }
      router.push("/login");
    } catch (error: any) {
      if (error.response) {
        const { data } = error.response;
        toast.error(data.message);
      }
    }
  };

  return (
    <div className="flex flex-col items-center text-center p-4 mx-auto">
      <Formik
        initialValues={{
          email: "",
          password: "",
          passwordRepeat: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-4 mt-24 relative">
            <div className="relative rounded-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <UserIcon className="h-5 w-5 text-textColor" />
              </span>
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="email@contraseña.com"
                className="pl-10 focus:outline-none text-textColor w-full pr-3 py-2 border rounded-md border-colorText placeholder-textColor sm:w-full md:w-full lg:w-full"
              />
            </div>
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4 relative">
            <div className="relative rounded-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-textColor" />
              </span>
              <Field
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                placeholder="**********"
                className="pl-10 focus:outline-none text-textColor w-full pr-3 py-2 border rounded-md border-colorText placeholder-textColor sm:w-full md:w-full lg:w-full"
              />
              <span className="absolute inset-y-0 right-0 flex items-center pr-3">
                {showPassword ? (
                  <EyeSlashIcon
                    className="h-5 w-5 text-textColor cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                ) : (
                  <EyeIcon
                    className="h-5 w-5 text-textColor cursor-pointer"
                    onClick={togglePasswordVisibility}
                  />
                )}
              </span>
            </div>
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500"
            />
          </div>
          <div className="mb-4 relative">
            <div className="relative rounded-md">
              <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-textColor" />
              </span>
              <Field
                type={showPassword ? "text" : "password"}
                id="passwordRepeat"
                name="passwordRepeat"
                placeholder="Confirmar contraseña"
                className="pl-10 focus:outline-none text-textColor w-full pr-3 py-2 border rounded-md border-colorText placeholder-textColor sm:w-full md:w-full lg:w-full"
              />
            </div>
            <ErrorMessage
              name="passwordRepeat"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mt-24 flex justify-between items-center">
            <Button
              text="Crear"
              className="bg-secondary text-textColor"
            ></Button>
          </div>
        </Form>
      </Formik>
      <div className="mt-2">
        <a
          className="my-2 text-textColor hover:underline text-sm"
          href="/login"
        >
          ¿Ya tenés una cuenta?
        </a>
        <div className="mt-4">
          <Link href="/login">
            <Button
              text="Iniciar sesión"
              className="bg-white border border-secondary text-textColor hover:bg-secondary"
            ></Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
