import React from 'react'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";


const ScrollBtn = () => {
    const scrollLeft = () => {
        document.getElementById("content").scrollLeft -= 400;
      };
      const scrollRight = () => {
        document.getElementById("content").scrollLeft += 400;
      };
    
  return (
    <div>
         {/* button */}
         <div className="bg-red-200">
            <button onClick={scrollRight} className="focus:outline-none">
              <i className="">
                <MdKeyboardArrowRight className="bg-white m-2 rounded-full h-9 w-9 border-1 text-gray-300 border-gray-300 " />
              </i>
            </button>
            <button onClick={scrollLeft} className="focus:outline-none">
              <i className="">
                <MdKeyboardArrowLeft className="bg-white m-2 rounded-full h-9 w-9 border-1 text-gray-300 border-gray-300 " />
              </i>
            </button>
          </div>
          {/* end of button */}
      
    </div>
  )
}

export default ScrollBtn
