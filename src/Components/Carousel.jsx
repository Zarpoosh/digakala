import React from "react";
import Card from "./Card";
// icons
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
// image
import Amazings from "../image/commodity/Amazings.svg";
// import box from "../image/commodity/box.png";

const Carousel = () => {
  const scrollLeft = () => {
    document.getElementById("content").scrollLeft -= 400;
  };
  const scrollRight = () => {
    document.getElementById("content").scrollLeft += 400;
  };

  
  return (
    <div className="relative">
      {/* amazing */}
      <div className="absolute">
        <div className="items-center  mt-[60px] flex flex-col mx-auto mr-5">
          <img src={Amazings} className="h-20 w-20" alt="Amazings" />
          <img src="https://www.digikala.com/statics/img/png/specialCarousel/box.png" alt="box" className="h-20 w-20" />
          <div className="flex flex-row items-center text-white">
            <a className="" href="#">
              مشاهده همه
            </a>
            <i>
              <MdKeyboardArrowLeft />
            </i>
          </div>
          {/* button */}
          <div className=" hidden md:flex">
            <button onClick={scrollRight} className="focus:outline-none">
              <i className="">
                <MdKeyboardArrowRight className="bg-white m-2 rounded-full h-9 w-9 border-1 text-gray-300 border-gray-300 group-hover:block hidden" />
              </i>
            </button>
            <button onClick={scrollLeft} className="focus:outline-none">
              <i className="">
                <MdKeyboardArrowLeft className="bg-white m-2 rounded-full h-9 w-9 border-1 text-gray-300 border-gray-300 group-hover:block hidden" />
              </i>
            </button>
          </div>
          {/* end of button */}
        </div>
      </div>
      {/* end of amazing */}
      <div
        id="content"
        className="scroll-smooth carousel scrollbar-hide flex items-center justify-start overflow-x-auto mr-[130px]"
      >
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
        <div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
