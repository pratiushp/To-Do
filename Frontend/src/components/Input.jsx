import React from "react";
import { AiOutlinePlus } from "react-icons/Ai";

const Input = () => {
  return (
    <div className=" p-2 flex justify-around">
      <input
        type="text"
        placeholder=" Enter your Tasks"
        className=" p-3 focus:outline-none w-[90%] border border-slate-400"
      />
      <div className=" cursor-pointer w-[50px] h-[50px] bg-red-500 text-white text-3xl rounded-[50%] flex justify-center items-center">
        <AiOutlinePlus />
      </div>
    </div>
  );
};

export default Input;
