import React, { useState, useContext, useEffect } from "react";
import { inputFields } from "./register.defaults";
import {
  CustomInPut,
  InputFieldProps,
} from "../../shared-components/inputs"; // Add the missing import statement for InputFieldItemsProps
import { PersonalDetailsProps } from "./register.types"; // Add the missing import statement for PersonalDetailsProps
import { PrimaryButton } from "@/components/shared-components";
import { Logo } from "@/components/shared-components"; // Add the missing import statement for Logo
import Link from "next/link";
import { MyAppContext } from "@/pages/_app";

const RegisterComponent = () => {
  const { setAlert } = useContext(MyAppContext);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [personalDetails, setPersonalDetails] = useState<PersonalDetailsProps>({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    repeat_password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPersonalDetails({ ...personalDetails, [e.target.name]: e.target.value });

  const inputFieldItems = inputFields.map((inputField) => {
    return {
      ...inputField,
      value: personalDetails?.[inputField.name as keyof PersonalDetailsProps], // Use keyof to access the property
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChange(e),
      required: true,
      autoComplete: "on",
    };
  });

  const registerUser = async () => {
    const { first_name, last_name, email, password, repeat_password } = personalDetails;
    if (!first_name || !last_name || !email || !password || !repeat_password) return setAlert({ msg: "Please fill in all fields", type: "warning" });

    if (password !== repeat_password) return setAlert({ msg: "Passwords do not match", type: "error" });
    
    try {
      setIsLoading(true);
      const res = await fetch("/api/call-external-api", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({data: personalDetails, endPoint: "auth/register"}),
      });

      const response = await res.json();
      console.log('Response from registering user', response);

      if (response.errors) return setAlert({ msg: response.errors, type: "error" });

        setAlert({ msg: response.success, type: "success" });
        setPersonalDetails({
          first_name: "",
          last_name: "",
          email: "",
          password: "",
          repeat_password: "",
        });

    } catch (error) {
      setAlert({ msg: "Error creating account", type: "error" });
    } finally {
      setIsLoading(false);
    }

  };

  // console.log('Personal Details', personalDetails);

  return (
    <article className="lg:pt-[7rem] py-3 bg-gray-50">
      <section className="flex gap-6 w-[92%] mx-auto my-auto max-w-7xl">
        <div className="w-1/2 hidden md:block">
          <img
            src="https://softpower.ug/wp-content/uploads/2023/05/6220323B-3DE6-4DAC-B842-1A61C85307FC.jpeg"
            alt="kampala events hub logo"
            className="w-full h-screen max-h-[750px] object-cover object-center rounded-xl"
          />
        </div>
        <section className="flex flex-col items-start">
          <Logo />
          <h1 className="font-bold text-2xl xl:text-3xl text-gray-900 py-3">
            Create An Account For Kampala Events Hub
          </h1>
          <CustomInPut inputFieldItems={inputFieldItems as InputFieldProps[]} />
          <p className="text-xs text-gray-500 py-3">
            By clicking Create an account below, you agree to our terms of
            service and privacy statement.
          </p>
          <PrimaryButton
            label="Create a free account"
            buttonClasses=""
            onAction={registerUser}
            isLoading={isLoading}
          />
          <div>
            <p className="text-sm text-gray-500 py-3">
              Already have an account?{" "}
              <Link href="/auth/login" className="text-primary-500 hover:text-primary-600 font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </section>
      </section>
    </article>
  );
};

export default RegisterComponent;
