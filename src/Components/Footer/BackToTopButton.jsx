import React from "react";
import { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";

const BackToTopButton = () => {
  const [backToTopButton, setBackToTopButton] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTopButton(true);
      }else{
        setBackToTopButton(false)
      }
    });
  }, []);

  const scrollUp=()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth",
    })
  }

  return (
    <>
     {backToTopButton &&
      (<button
        onClick={scrollUp} 
      className="p-1 ml-5 border-gray-400 border rounded-lg text-gray-500 flex flex-row items-center">
        <a className="flex items-center">
          بازگشت به بالا
          <i className="">
            <MdOutlineKeyboardArrowUp className="h-5 w-5" />
          </i>
        </a>
      </button>
      )}
    </>
  );
};

export default BackToTopButton;
