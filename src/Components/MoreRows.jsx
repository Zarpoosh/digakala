import React from "react";


const MoreRows = ({ Image, title }) => {
  return (
    <div>
      <a className="flex flex-col items-center my-3 cursor-pointer" href="#">
        <div className="h-12 w-12">
          <img className="w-full" src={Image} alt="" />
        </div>
        <span className="items-center mt-1 text-xs">{title} </span>
      </a>
    </div>
  );
};

export default MoreRows;
