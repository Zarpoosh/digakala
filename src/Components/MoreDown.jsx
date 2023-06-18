import React from "react";
// icons
import { FiArrowLeft } from "react-icons/fi";


const MoreDown = ({ Image, title,desc }) => {
  return (
    <>
      <a
        className="flex  items-center my-5 lg:my-2 lg:mx-2 p-2 cursor-pointer border-b-2 lg:border lg:border-gray-200 lg:rounded-lg border-gray-100"
        href="#"
      >
        <div className="h-12 w-12">
          <img className="w-full" src={Image} alt="" />
        </div>
        <div className="flex flex-col">
          <span className="items-center mt-1 mx-2 text-xs">{title} </span>
          <span className="items-center text-gray-400 mt-1 mx-2" style={{fontSize:"11px"}}>{desc}</span>
        </div>
        <div className="mr-auto">
            <i >
                <FiArrowLeft className="h-6 w-6 text-gray-400"/>
            </i>
        </div>
      </a>
    </>
  );
};

export default MoreDown;
