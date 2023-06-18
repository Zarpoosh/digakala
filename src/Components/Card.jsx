import React from "react";
// Image
import { HiOutlinePlusSm } from "react-icons/hi";

const Card = () => {
  return (
    <>
      <div className="card bg-white w-[] h-[] rounded-lg shadow-lg m-1">
        <a className="top cursor-pointer">
          <img
            className="w-[150px] h-[150px] object-cover m-5 p-1"
            src="https://dkstatics-public.digikala.com/digikala-products/0b7375eb6b194d6a0e87e5287fcad2c4fbd1b87f_1680700483.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80"
            alt=""
          />
        </a>
        <div className="bottom flex justify-center items-end flex-col p-2">
          <a className="title cursor-pointer font-semibold pl-2">لپ تاب لنوو</a>
          <div className="category text-xs font-light my-1 pl-2">لپ تاب </div>

          <div className="bottom flex my-2 justify-between items-center flex-row w-[180px]">
            <div className="flex items-center flex-col">
              <span className="rounded-full border-red-600 border my-1">
                <i>
                  <HiOutlinePlusSm className="text-red-600 h-6 w-6" />
                </i>
              </span>
              <span className=" text-xs rounded-full bg-red-600 my-1 text-white px-2 items-center">
                ۲۰٪
              </span>
            </div>
            <div>
              <div className="price mx-2 text-sm">۹۴۹,۰۰۰ تومان</div>
              <del className=" text-gray-300 mx-2 text-xs">۱,۵۰۰,۰۰۰ تومان</del>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
