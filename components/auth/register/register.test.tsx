import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { MyAppContext } from "@/pages/_app";
import RegisterComponent from "./Register";
import React from "react";
import { inputFields } from "./register.defaults";
import { CustomInPut, InputFieldProps } from "@/components/shared-components";

const handleInputChangeMock = jest.fn();
type PersonalDetailsProps = {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    repeat_password: string;
};

const personalDetails: PersonalDetailsProps = {
    first_name: "John",
    last_name: "Doe",
    email: "",
    password: "password1",
    repeat_password: "password2",
};

const inputFieldItems = inputFields.map((inputField) => {
    return {
        ...inputField,
        value: personalDetails[inputField.name as keyof PersonalDetailsProps], // Use keyof to access the property
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => handleInputChangeMock(e),
        required: true,
        autoComplete: "on",
    };
});


// eslint-disable-next-line react/display-name
jest.mock("next/link", () => ({ children }: { children: React.ReactNode }) => (
    <a>{children}</a>
)); // Mock Next.js Link component

describe("RegisterComponent", () => {
  it("renders without crashing", () => {
    const { getByText } = render(
      <MyAppContext.Provider value={{ setAlert: jest.fn() }}>
        <RegisterComponent />
      </MyAppContext.Provider>
    );
    expect(
      getByText("Create An Account For Kampala Events Hub")
    ).toBeInTheDocument();
  });

  it("shows an error when passwords do not match", async () => {
    const setAlert = jest.fn();
    const { getByLabelText, getByText } = render(
      <MyAppContext.Provider value={{ setAlert }}>
        <RegisterComponent />
      </MyAppContext.Provider>
    );

    render (<CustomInPut inputFieldItems={inputFieldItems as InputFieldProps[]} />);
    fireEvent.change(screen.getByLabelText("First Name"), { 
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText("Last Name"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "asuman@gmail.com" },
    });
    fireEvent.change(screen.getByLabelText("password"), {
      target: { value: "password1" },
    });
    fireEvent.change(screen.getByLabelText("Repeat Password"), {
      target: { value: "password2" },
    });
    fireEvent.click(screen.getByText("Create a free account"));

    await waitFor(() =>
      expect(setAlert).toHaveBeenCalledWith({
        msg: "Passwords do not match",
        type: "error",
      })
    );
  });


  it("shows an error when some fields are empty", async () => {
    const setAlert = jest.fn();
    const { getByLabelText, getByText } = render(
      <MyAppContext.Provider value={{ setAlert }}>
        <RegisterComponent />
      </MyAppContext.Provider>
    );

    render (<CustomInPut inputFieldItems={inputFieldItems as InputFieldProps[]} />);
    fireEvent.change(screen.getByLabelText("First Name"), { 
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText("Last Name"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "" },
    });
    fireEvent.change(screen.getByLabelText("password"), {
      target: { value: "password1" },
    });
    fireEvent.change(screen.getByLabelText("Repeat Password"), {
      target: { value: "password1" },
    });
    fireEvent.click(screen.getByText("Create a free account"));
  
    await waitFor(() =>
      expect(setAlert).toHaveBeenCalledWith({
        msg: "Please fill in all fields",
        type: "warning",
      })
    );
  });

  it("shows an error when the account creation fails", async () => {
    const setAlert = jest.fn();
    const { getByLabelText, getByText } = render(
      <MyAppContext.Provider value={{ setAlert }}>
        <RegisterComponent />
      </MyAppContext.Provider>
    );

    render (<CustomInPut inputFieldItems={inputFieldItems as InputFieldProps[]} />);
    fireEvent.change(screen.getByLabelText("First Name"), { 
      target: { value: "John" },
    });
    fireEvent.change(screen.getByLabelText("Last Name"), {
      target: { value: "Doe" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "asuman@gmail.com" },
    });
    fireEvent.change(screen.getByLabelText("password"), {
      target: { value: "password1" },
    });
    fireEvent.change(screen.getByLabelText("Repeat Password"), {
      target: { value: "password1" },
    });
    fireEvent.click(screen.getByText("Create a free account"));

    await waitFor(() =>
      expect(setAlert).toHaveBeenCalledWith({
        msg: "Error creating account",
        type: "error",
      })
    );
  });
});
