import React, { useState, useContext } from "react";
import { Logo } from "@/components/shared-components";
import { CustomInPut, InputFieldProps } from "@/components/shared-components";
import { PrimaryButton } from "@/components/shared-components";
import Link from "next/link";
import { MyAppContext } from "@/pages/_app";
import { inputFields } from "./login.defaults";
import { LoginDetailsProps } from "./login.types";
import Cookies from "js-cookie";

const Login = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [loginDetails, setLoginDetails] = useState<LoginDetailsProps>({
    email: "",
    password: "",
  });
  const { setAlert } = useContext(MyAppContext);

  const inputFieldItems = inputFields.map((inputField) => {
    return {
      ...inputField,
      value: loginDetails?.[inputField.name as keyof LoginDetailsProps],
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value }),
      required: true,
      autoComplete: "on",
    };
  });

  const loginUser = async () => {
    const { email, password } = loginDetails;
    if (!email || !password)
      return setAlert({ msg: "Please fill in all fields", type: "warning" });

    try {
      setIsLoading(true);
      const res = await fetch("/api/call-external-api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data: loginDetails, endPoint: "auth/login" }),
      });
      setIsLoading(false);

      const response = await res.json();

      // save token to cookie
      if (response.token) Cookies.set("token", response.token);
      console.log("Response from logging in user", response);

      if (response.errors) return setAlert({ msg: response.errors, type: "error" });

      setAlert({ msg: response.success, type: "success" });
      setLoginDetails({
        email: "",
        password: "",
      });
    } catch (error) {
      console.error("Error logging in user", error);
      setAlert({ msg: "An error occurred. Please try again", type: "error" });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <article className="lg:pt-[7rem] py-3 bg-gray-50 h-screen ">
      <section className="md:grid grid-cols-5 gap-6 w-[92%] mx-auto my-auto max-w-7xl">
        <div className="hidden md:block col-span-3">
          <img
            src="https://softpower.ug/wp-content/uploads/2023/05/6220323B-3DE6-4DAC-B842-1A61C85307FC.jpeg"
            alt="kampala events hub logo"
            className="w-full h-screen max-h-[750px] object-cover object-center rounded-xl"
          />
        </div>
        <section className="flex flex-col items-start col-span-2">
          <Logo />
          <h1 className="font-bold text-2xl xl:text-3xl text-gray-900 py-3">
            Login into your Account
          </h1>
          <CustomInPut inputFieldItems={inputFieldItems as InputFieldProps[]} />
          <p className="text-xs text-gray-500 pb-1 font-medium cursor-pointer hover:text-gray-600 hover:font-semibold">Forgot password?</p>
          <PrimaryButton
            label="Create a free account"
            buttonClasses=""
            onAction={loginUser}
            isLoading={isLoading}
          />
          <div>
            <p className="text-sm text-gray-500 py-3">
              Don't have an account?{" "}
              <Link
                href="/auth/register"
                className="text-primary-500 hover:text-primary-600 font-semibold"
              >
                Register here
              </Link>
            </p>
          </div>
        </section>
      </section>
    </article>
  );
};

export default Login;
