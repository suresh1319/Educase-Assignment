import React, { useState } from "react";
import Input from "../components/Input";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const [signupData, setSignupData] = useState({
    fullname: "",
    phoneNumber: "",
    email: "",
    password: "",
    companyName: "",
  });

  const navigate = useNavigate();

  function handleChange(e) {
    setSignupData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate("/account-settings");
  }
  return (
    <div
      className="min-h-screen flex flex-col "
      style={{ backgroundColor: "#F7F8F9" }}
    >
      <section className=" px-4 pt-8 flex flex-col flex-grow">
        <form onSubmit={handleSubmit} className="flex flex-col flex-grow">
          <div className="flex flex-col flex-grow ">
            <div className="mb-6 leading-10">
              <h1 className="text-[28px] font-medium">Create your</h1>
              <h1 className="text-[28px] font-medium">PopX account</h1>
            </div>
            <div className="flex flex-col gap-6">
              <Input
                label={"Full Name"}
                placeholder={"Enter full name"}
                type={"text"}
                id={"fullname"}
                value={"Marry Doe"}
                isRequired={true}
              />
              <Input
                label={"Phone number"}
                placeholder={"Enter Phone number"}
                type={"text"}
                id={"phoneNumber"}
                value={"Marry Doe"}
                isRequired={true}
              />
              <Input
                label={"Email Address"}
                placeholder={"Enter email address"}
                type={"text"}
                id={"email"}
                value={"Marry Doe"}
                isRequired={true}
              />
              <Input
                label={"Password"}
                placeholder={"Enter password"}
                type={"text"}
                id={"password"}
                value={"Marry Doe"}
                isRequired={true}
              />
              <Input
                label={"Company Name"}
                placeholder={"Enter company name"}
                type={"text"}
                id={"companyName"}
                value={"Marry Doe"}
              />
            </div>
            <div className="mt-4 ">
              <h1 className="text-sm text-gray-600">
                Are you an Agency?<span className="text-red-600">*</span>
              </h1>
              <div className="flex gap-12 mt-2 text-sm text-gray-600">
                <div className="flex items-center justify-center">
                  <input
                    type="radio"
                    id="yes"
                    value={"yes"}
                    className="mr-2 w-5 h-5 accent-purple-600"
                    name="agency"
                  />
                  <label htmlFor="yes">Yes</label>
                </div>
                <div className="flex items-center justify-center">
                  <input
                    type="radio"
                    id="no"
                    value={"no"}
                    className=" w-5 h-5 mr-2 accent-purple-600 "
                    name="agency"
                  />
                  <label htmlFor="no">No</label>
                </div>
              </div>
            </div>
            <div
              style={{ backgroundColor: "#6C25FF" }}
              className="px-2 py-3 rounded-md mt-auto mb-4"
            >
              <button className="text-center w-full text-white font-medium ">
                Create Account
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
};
export default SignupPage;
