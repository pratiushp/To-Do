import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/Ai";

export default function Items(props) {
  const [toggle, setToggle] = useState(false);
  return (
    <div
      onClick={() => setToggle(!toggle)}
      className={`select-none cursor-pointer w-full border-b p-2 flex justify-between items-center`}
    >
      <div>
        <span className="pr-3 text-[14px] text-gray-500">{props.time} </span>
        <span
          className={`${toggle === true ? "line-through" : ""} text-[20px]`}
        >
          {props.items}
        </span>
      </div>
      <div onClick={() => props.removeHandler(props.id)}>
        <AiOutlineDelete className="text-red-500" />
      </div>
    </div>
  );
}
