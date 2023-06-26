import React from "react";
import { useState } from "react";
// images
import logo from "../image/logo.svg";

// icons
import { RxHamburgerMenu } from "react-icons/rx";
import { GiMilkCarton } from "react-icons/gi";
import { AiOutlineFire } from "react-icons/ai";
import { MdOutlineDiscount } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { BsQuestionCircle } from "react-icons/bs";
import { MdOutlineStorefront } from "react-icons/md";
import Search from "./Search";
import Sidebar from "./Sidebar";
import MegaMenu from "./MegaMenu/MegaMenu";

const Header = (props) => {
  const [showSide, setShowSide] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* banner */}
      <div className="w-full cursor-pointer">
        <img
          src="https://dkstatics-public.digikala.com/digikala-adservice-banners/aa11c9fcd1a061b171fab7e3865fe8033095be70_1686666584.jpg?x-oss-process=image/quality,q_95/format,webp"
          alt=""
        />
      </div>
      {/* end of banner */}

      {/* header */}
      <header className="flex lg:w-5/5 bg-white lg:container mx-auto flex-col pb-1 px-4">
        {/* logo */}
        <div className=" border-b lg:border-none p-1 w-full items-center flex">
          <a className=" lg:hidden mx-auto my-1" href="#">
            <img className="h-6 mt-2" src={logo} alt="" />
          </a>
        </div>
        {/* end of logo */}
        <Search />
        {/* nav */}
        <nav className="w-full relative  pt-1 mt-1">
          <div className="w-full flex container-4xl-w mx-auto px-4-md justify-between">
            {/* menu */}

            {/* sidbar */}
            <div
              className={`h-screen lg:inline lg:h-auto p-4 lg:p-0  transition-transform hidden bg-gray-200 lg:bg-white w-80 lg:w-full ${
                !showSide ? "hidden" : ""
              }`}
              tabIndex="-1"
              aria-labelledby="drawer-navigation-label"
            >
              <div className="py-4 lg:py-0">
                <ul className="space-y-2 flex lg:flex-row">
                  <li
                    className={`py-5 hidden lg:inline ${
                      !showMenu ? "hidden" : ""
                    }`}
                  >
                    <a
                      onMouseOver={() => setShowMenu(!showMenu)}
                      className="flex lg:hover:border-b-2 lg:border-red-600 duration-75 font-bold cursor-pointer mx-1"
                    >
                      <i className="flex mx-1">
                        <RxHamburgerMenu />
                      </i>
                      <p className="mx-1 text-sm">دسته بندی کالاها</p>
                    </a>
                  </li>
                  <li className="text-gray-800 py-3 ">
                    <a className="flex mx-1 cursor-pointer lg:hover:border-b-2 lg:border-red-600 duration-75">
                      <i className="flex mx-1">
                        <GiMilkCarton className="text-gray-500 h-5 w-5 lg:w-4" />
                      </i>
                      <p className=" mx-1 text-xs lg:xs">سوپرمارکت</p>
                    </a>
                  </li>
                  <li className="text-gray-800 py-3 ">
                    <a className="flex mx-1 cursor-pointer lg:hover:border-b-2 lg:border-red-600 duration-75">
                      <i className="flex mx-1">
                        <AiOutlineFire className="text-gray-500 h-5 w-5 lg:w-4" />
                      </i>
                      <p className=" mx-1 text-xs lg:xs">پرفروش ترین ها</p>
                    </a>
                  </li>
                  <li className="text-gray-800 py-3 ">
                    <a className="flex mx-1 cursor-pointer lg:hover:border-b-2 lg:border-red-600 duration-75">
                      <i className="flex mx-1">
                        <MdOutlineDiscount className="text-gray-500 h-5 w-5 lg:w-4" />
                      </i>
                      <p className=" mx-1 text-xs lg:xs">
                        تخفیف ها و پیشنهاد ها
                      </p>
                    </a>
                  </li>
                  <li className="text-gray-800 py-3 ">
                    <a className="flex mx-1 cursor-pointer lg:hover:border-b-2 lg:border-red-600 duration-75">
                      <i className="flex mx-1">
                        <CiDiscount1 className="text-gray-500 h-5 w-5 lg:w-4" />
                      </i>
                      <p className="mx-1 text-xs lg:xs">شگفت انگیز ها</p>
                    </a>
                  </li>
                  <li className="text-gray-800 py-3 ">
                    <a className="flex mx-1 cursor-pointer lg:hover:border-b-2 lg:border-red-600 duration-75">
                      <i className="flex mx-1">
                        <BsQuestionCircle className="text-gray-500 h-5 w-5 lg:w-4" />
                      </i>
                      <p className="text-xs mx-1">سوالی دارید؟</p>
                    </a>
                  </li>
                  <li className="text-gray-800 py-3 ">
                    <a className="flex mx-1 cursor-pointer lg:hover:border-b-2 lg:border-red-600 duration-75">
                      <i className="flex mx-1">
                        <MdOutlineStorefront className="text-gray-500 h-5 w-5 lg:w-4" />
                      </i>
                      <p className="text-xs mx-1">در دیجی کالا بفروشید!</p>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/*end of sidbar */}

            {/* end of menu */}

            {/* gps */}
            <div>
              <Sidebar />
            </div>

            <div className="flex felx-row justify-between mr-auto lg:w-20 my-auto">
              <div className="flex flex-nowrap">
                <i className="text-orange-400">
                  <HiOutlineLocationMarker />
                </i>
                {/* <p className="text-xs">ارسال به اردبیل اردبیل</p> */}
                <p className="text-xs">انتخاب شهر</p>
              </div>
              <i className="lg:hidden">
                <MdOutlineKeyboardArrowLeft className="h-5 w-5" />
              </i>
            </div>
            {/* end of gps */}
          </div>
        </nav>
        {/* end of nav */}
      </header>
      {/* en dof header */}
      <MegaMenu setShowMenu={setShowMenu} showMenu={showMenu} />
    </>
  );
};

export default Header;
