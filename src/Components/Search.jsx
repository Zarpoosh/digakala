import React from "react";
// imsge
import logo from "../image/logo.svg";
// icons
import { BiSearch } from "react-icons/bi";
import { TbLogin } from "react-icons/tb";
import { BsCart } from "react-icons/bs";

const Search = () => {
  return (
    <>
      <div className="w-full border-b lg:border-none">
        <div className="w-full flex flex-col mx-auto px-4-md ">
          <div className="w-full flex relative justify-between">
            <div className="flex flex-1 items-center">
              {/* logo */}
              <a className="hidden lg:flex" href="#">
                <img src={logo} alt="" />
              </a>
              {/* end of logo */}
              {/* input */}
              <div className="ml-auto w-full ">
                <div className="mr-3 bg-gray-100 w-full lg:w-2/5  rounded-lg flex">
                  <i className="p-3 text-gray-400 focus:black">
                    <BiSearch />
                  </i>
                  <input
                    type="text"
                    className="bg-transparent p-2 w-full outline-none"
                    placeholder="جستوجو"
                  />
                </div>
              </div>
              {/* end of input */}
            </div>
            {/* login */}
            <div className="flex items-center">
              <div className="mx-1 border-l-2 ">
                {/* <i className="p-3 flex">
                    <BsPerson className=" h-5 w-5" />
                    <MdOutlineArrowDropDown className=" h-5 w-5" />
                  </i> */}
                <button className="lg:border flex flex-row items-center  m-2 p-2 rounded">
                  <span className="flex flex-row text-xs items-center">
                    <span className="ml-1">
                      <i>
                        <TbLogin className="h-6 w-6" />
                      </i>
                    </span>
                    <span className="mx-1">ورود</span>
                  </span>
                  <span className="mx-1 text-xs hidden lg:flex"> | ثبت نام</span>
                </button>
              </div>
              <div className="mx-1 ">
                <i className="p-3">
                  <BsCart className="h-5 w-5" />
                </i>
              </div>
            </div>
            {/* end of login */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
