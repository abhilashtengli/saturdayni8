import React from "react";
import { list } from "../Utils/Constants";

const ProfileList = () => {
  return (
    <>
      <div className="flex justify-end ">
        <ul className="border  shadow-slate-400 rounded-xl border-gray-300 shadow-lg w-60">
          {list.map((li, index) => (
            <li
              key={index}
              className="py-2 text-start my-10 pl-10 hover:text-black hover:font-semibold cursor-pointer text-gray-700"
            >
              {li}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ProfileList;
