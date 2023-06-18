import React from 'react'
import { HiOutlinePlusSm } from "react-icons/hi";


const SelectedItem = ({image ,off , price , Decrease}) => {
  return (
    <>
      <div className="card bg-white">
        <a className="top cursor-pointer">
          <img
            className=" object-cover m-5 p-1 h-24 w-24 mx-auto"
            src={image}
            alt=""
          />
        </a>
        <div className="bottom flex justify-center items-end flex-col p-2">
          <div className="bottom flex my-2 justify-between items-center flex-row w-[180px]">
            <div className="flex items-center flex-col">
              <span className="rounded-full border-red-600 border my-1">
                <i>
                  <HiOutlinePlusSm className="text-red-600 h-6 w-6" />
                </i>
              </span>
              <span className=" text-xs rounded-full bg-red-600 my-1 text-white px-2 items-center">
                {off}
              </span>
            </div>
            <div>
              <div className="price mx-2 text-sm">{price}</div>
              <del className=" text-gray-300 mx-2 text-xs">{Decrease}</del>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SelectedItem
