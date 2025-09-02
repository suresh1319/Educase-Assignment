import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-end "
      style={{ backgroundColor: "#F7F8F9" }}
    >
      <section className=" px-4 pb-8 ">
        <div className="mb-6">
          <h1 className="text-[28px] font-medium mb-2">Welcome to PopX</h1>
          <p className="text-[17px] text-gray-500">
            Lorem ipsum dolor sit amet.
          </p>
          <p className="text-[17px] text-gray-500">Lorem, ipsum dolor sit.</p>
        </div>
        <div className="flex flex-col gap-2">
          <Link
            to={"/signup"}
            className="px-2 py-3 rounded-md text-white font-medium cursor-pointer text-center"
            style={{ backgroundColor: "#6C25FF" }}
          >
            Create Account
          </Link>
          <Link
            to={"/login"}
            className="px-2 py-3 rounded-md font-medium cursor-pointer text-center"
            style={{ backgroundColor: "#CEBAFC" }}
          >
            Already Registerd?Login
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;



