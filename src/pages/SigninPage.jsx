import React, { useState } from "react";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setLoginData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginData);
    navigate("/account-settings");
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#F7F8F9" }}>
      <form onSubmit={handleSubmit}>
        <section className=" px-4 pt-8">
          <div className="mb-3 leading-9">
            <h1 className="text-[28px] font-medium">Signin to your</h1>
            <h1 className="text-[28px] font-medium">PopX account</h1>
          </div>
          <div className="mb-8">
            <p className="text-[17px] text-gray-500">
              Lorem ipsum dolor sit amet.
            </p>
            <p className="text-[17px] text-gray-500">
              Lorem ipsum dolor sit amet.
            </p>
          </div>
          <div className="mb-3 flex flex-col gap-6">
            <Input
              type={"email"}
              placeholder={"Enter email address"}
              label={"Email Address"}
              id={"email"}
              value={loginData.email}
              onchange={handleChange}
            />
            <Input
              type={"password"}
              placeholder={"Enter password"}
              label={"Password"}
              id={"password"}
              value={loginData.password}
              onchange={handleChange}
            />
          </div>
          <div>
            <button
              className=" w-full rounded-md px-2 py-3 text-center text-white"
              style={{ backgroundColor: "#CBCBCB" }}
            >
              Login
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default SigninPage;
