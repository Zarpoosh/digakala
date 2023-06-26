import SidebarRows from "./SidebarRows";
import SidebarDown from "./SidebarDown";
import React, { useState } from "react";
// icons
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";
import { GiMilkCarton } from "react-icons/gi";
import { AiOutlineFire } from "react-icons/ai";
import { MdOutlineDiscount } from "react-icons/md";
import { CiDiscount1 } from "react-icons/ci";
import { BsQuestionCircle } from "react-icons/bs";
// image
import digi from "../image/digi.svg";

const Sidebar = () => {
  const [showSide, setShowSide] = useState(false);

  return (
    <div>
      <button
        onClick={() => setShowSide(!showSide)}
        className="rounded-lg px-5  mr-2 border-0 focus:border-0 lg:hidden"
        type="button"
      >
        <RxHamburgerMenu />
      </button>
      
      {/* slidebar */}
      <div onClick={() => setShowSide(!showSide)}
        id="drawer-navigation"
        className={` bg-black/50 h-screen  lg:hidden fixed top-0  right-0  w-full overflow-x-hidden overflow-y-auto md:inset-0  max-h-full ${
          !showSide ? "hidden" : ""
        }`}
      ></div>
      <div
        style={{ zIndex: "" }}
        className={`py-4 bg-white w-4/5 sm:w-2/5 h-screen ${
          !showSide ? "hidden" : ""
        } lg:hidden fixed top-0  right-0  overflow-x-hidden overflow-y-auto md:inset-0  max-h-full`}
        id="sidebar"
      >
        {/* logo */}
        <div className="border-b justify-between flex pb-4 lg:hidden">
          <div className="flex mr-5">
            <img className="h-6" src={digi} alt="" />
          </div>
          <i
            onClick={() => setShowSide(!showSide)}
            className=" flex mr-auto items-center "
          >
            <GrClose className="h-5 w-5 ml-3 text-gray-400" />
          </i>
        </div>
        {/* end of logo */}
        <ul className="space-y-2 font-medium my-4">
          <SidebarRows Icon={GiMilkCarton} title="سوپرمارکت" />
          <SidebarRows Icon={AiOutlineFire} title="پرفروش ترین ها" />
          <SidebarRows Icon={MdOutlineDiscount} title="تخفیف ها و پیشنهلد ها" />
          <SidebarRows Icon={CiDiscount1} title="شگفت انگیز ها" />
          <SidebarRows Icon={BsQuestionCircle} title="سوالی دارید؟" />
          <SidebarRows Icon={GiMilkCarton} title="در دیجی کالا بفروشید" />
          <p className="mr-4 border-t pt-3">دسته بندی کالا ها</p>
          {/* dropdown menu */}
          <SidebarDown name="موبایل" />
          <SidebarDown name="کالای دیجیتال" />
          <SidebarDown name="خانه و آشپزخانه" />
          <SidebarDown name="مد و پوشاک" />
          <SidebarDown name="کالاهای سوپرمارکتی" />
          <SidebarDown name="کتاب لوازم التحریر و هنر" />
          <SidebarDown name="اسباب بازی کودک و نوزاد" />
          <SidebarDown name="یزبایی و سلامت" />
          <SidebarDown name="ورزش و سفر" />
          <SidebarDown name="ابزار لوازم ساختمانی و صنعتی" />
          <SidebarDown name="خودرو و موتورسیکلت" />
          <SidebarDown name="محصولات بومی و محلی" />
          {/* end of dropdown menu */}
        </ul>
      </div>

      {/* end of slidebar */}
    </div>
  );
};

export default Sidebar;
