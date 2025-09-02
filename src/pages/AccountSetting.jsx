import React from "react";
import { Camera } from "lucide-react";

const AccountSetting = () => {
  return (
    <div className="min-h-screen flex flex-col ">
      <header className="bg-white py-5 px-3 text-xl ">
        <h1>Account Settings</h1>
      </header>
      <section
        className="flex flex-col flex-1"
        style={{ backgroundColor: "#F7F8F9" }}
      >
        <div
          className="flex  ml-4 gap-6 p-2 mt-4
        "
        >
          <div className="relative ">
            <div className="w-18 h-18  rounded-full overflow-hidden ">
              <img
                className="w-full h-full object-cover"
                src="https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <input type="file" className="hidden" id="imageupload" />
            <div
              className="rounded-full flex items-center justify-center p-[4px] absolute right-[-5px] bottom-1 "
              style={{ backgroundColor: "#6C25FF" }}
            >
              <Camera fill="white" size={18} />
            </div>
          </div>
          <div className="text-[15px]">
            <h1 className="font-bold ">Marry Doe</h1>
            <h1>Marry@Gmail.com</h1>
          </div>
        </div>
        <div className="px-6 mt-6 text-gray-600 pb-3 text-[15px]">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem
          corporis veniam impedit! Possimus velit corrupti aut nobis .
        </div>
        <div className=" flex-1 mt-2 mb-8 border-y border-dashed border-gray-300 "></div>
      </section>
    </div>
  );
};

export default AccountSetting;
