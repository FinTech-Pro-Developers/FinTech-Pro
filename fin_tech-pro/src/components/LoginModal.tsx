"use client";

import { X } from "lucide-react";
import Link from "next/link";
import { useState, ChangeEvent, FormEvent } from "react";


interface LoginModalProps {
  OpenLogin: boolean;
  onClose: () => void;
  openRegisterModal: () => void;
}

export default function LoginModal({ OpenLogin, onClose, openRegisterModal }: LoginModalProps) {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });



  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValues((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = { email: "", password: "" };

    if (!values.email) {
      newErrors.email = "Email is required";
      isValid = false;
    }

    if (!values.password) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    if (values.email && values.email !== "chiscookeke11@gmail.com") {
      newErrors.email = "Incorrect Email";
      isValid = false;
    }
    if (values.password && values.password !== "nedu001") {
      newErrors.password = "Incorrect password";
      isValid = false;
    }

    setErrors(newErrors);

    if (isValid) {
      alert(`Form values: ${JSON.stringify(values)}`);
      setValues({
        email: "",
        password: "",
      });
    }
  };

  return (
    <>
      {OpenLogin && (
        <div
          className={`w-full h-screen overflow-hidden fixed top-0 left-0 backdrop-blur-md bg-black/30 items-center justify-center ${
            OpenLogin ? "flex" : "hidden"
          }`}
        >
          <form
            onSubmit={handleSubmit}
            className="relative w-full max-w-[380px] min-w-[300px] flex flex-col items-start justify-center gap-6 bg-white border-[1px] border-gray-500 rounded-lg py-7 px-5 transform duration-500 transition ease-in-out"
          >
            <div className="flex flex-col items-start gap-1">
              <h1 className="text-2xl text-[#000000] font-bold">Login</h1>
              <p className="text-sm text-[gray] font-medium">
                Enter your credentials to access your account
              </p>
            </div>

            <div className="flex flex-col items-start w-full gap-4">
              <label htmlFor="email" className="flex flex-col w-full">
                <span className="text-sm text-[#000000] font-medium">Email</span>
                <input
                  value={values.email}
                  type="email"
                  placeholder="name@example.com"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  autoComplete="email"
                  className="w-full py-2 px-4 text-sm rounded-sm outline-none border-[1px] border-[gray]"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm font-medium ml-auto">{errors.email}</p>
                )}
              </label>

              <label htmlFor="password" className="flex flex-col w-full">
                <div className="w-full flex items-center justify-between gap-5">
                  <span className="text-sm text-[#000000] font-medium">Password</span>
                  <Link href="#" className="text-sm text-[gray] font-medium">
                    Forgot password?
                  </Link>
                </div>
                <input
                  value={values.password}
                  type="password"
                  placeholder=""
                  name="password"
                  id="password"
                  onChange={handleChange}
                  autoComplete="current-password"
                  className="w-full py-2 px-4 text-sm rounded-sm outline-none border-[1px] border-[gray]"
                />
                {errors.password && (
                  <p className="text-red-500 text-sm font-medium ml-auto">{errors.password}</p>
                )}
              </label>
              <button
                type="submit"
                className="w-full bg-[#000000] text-[#ffffff] py-2 px-4 text-sm cursor-pointer rounded-sm transform transition hover:scale-90 duration-300"
              >
                Login
              </button>
            </div>

            <p className="text-sm text-[#000000] font-medium self-center">
              Don&apos;t have an account?{" "}
              <span className="text-[gray] cursor-pointer" onClick={openRegisterModal}>
                Register
              </span>
            </p>

            <div onClick={onClose} className="absolute top-4 right-4 cursor-pointer">
              <X />
            </div>
          </form>
        </div>
      )}
    </>
  );
}
