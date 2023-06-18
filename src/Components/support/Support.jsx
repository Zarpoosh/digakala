import React, { useState } from "react";
import SupportDown from "./SupportDown";
// icons
import { BiSupport } from "react-icons/bi";
import { HiOutlineArrowLeft } from "react-icons/hi";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Support = () => {
  const [showSupport, setShowSupport] = useState(false);
  return (
    <div className="hidden md:inline">
      {/* support box */}
      <div className="fixed bottom-6 left-6">
        <div
          id="speed-dial-menu-bottom-left"
          className="flex flex-col items-center  mb-4 space-y-2"
        >
          <div className={`my-5  ${!showSupport ? "hidden" : ""}`}>
            <div className="bg-white border-red-600 border rounded-xl w-80 h- m-5 ml-5 ">
              {/* header */}
              <div className="flex flex-row justify-between text-white w-full bg-red-600 p-3 rounded-t-xl">
                <span className="">پشتیبانی آنلاین</span>
                <i
                  onClick={() => setShowSupport(!showSupport)}
                  className="flex mr-auto"
                >
                  <HiOutlineArrowLeft className="h-5 w-5" />
                </i>
              </div>
              {/* end of header */}
              <div className="p-3">
                <p className="font-bold text-xl">سلام</p>
                <p className="text-sm font-semibold">
                  جواب سوال هاتون رو میتونید در کادر زیر پیدا کنید. در غیر
                  اینصورت از ما بپرسید ما همیشه به سوالاتتون جواب می دیم😊
                </p>
              </div>
              {/* supportdown */}
              <ul className=" m-3">
                <SupportDown
                  name="چگونه میتوانم یک پروفایل ایجاد کنم؟"
                  desc="میتوانید با استفاده از شماره موبایل ثبت نام خود را انجام دهید. (کد فعال سازی برایتان پیامک میشود "
                />
                <SupportDown
                  name="چطور در دیجی کالا سفارش خود را ثبت کنم ؟"
                  desc="بعد از ورود به پروفایل ، کالای مدنظر خود را به سبد خرید اضافه کنید ، پس از انتخاب آدرس میتوانید نوع پرداخت خود را انتخاب کنید.بعد از اتمام ثبت سفارش ، سیستم کد سفارش شما را نمایش خواهد داد."
                />
                <SupportDown
                  name="کالایی را که در طرح پیشنهاد شگفت انگیز می باشد می توان با تعداد بیش از یک عدد خریداری کرد؟"
                  desc="به دلیل اینکه طرح پیشنهاد شگفت انگیز یک طرح تشویقی خرید است،"
                />
              </ul>
              {/* wnd of supportdown */}
              <div className=" flex-col items-center my-5 flex justify-center">
                <p className=" text-sm font-semibold my-3">
                  جواب سوالتون رو پیدا نکردید؟
                </p>
                <button className="bg-cyan-400 flex items-center p-3 text-white rounded-full">
                  <a href="#" className="mx-1">
                    گفتگو با پشتیبان آنلاین
                  </a>
                  <i>
                    <MdKeyboardArrowLeft />
                  </i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end f support box */}

      {/* support button */}
      <div className="fixed bottom-6 left-6 ">
        <button
          onClick={() => setShowSupport(!showSupport)}
          type="button"
          className="flex  items-center focus:outline-none justify-center text-white bg-red-600 rounded-full w-11 h-11 "
        >
          <i>
            <BiSupport className="h-6 w-6" />
          </i>
        </button>
      </div>
      {/* end of support button */}
    </div>
  );
};

export default Support;
