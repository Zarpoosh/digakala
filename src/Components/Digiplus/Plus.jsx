import React from "react";
// icons
import { BsArrowLeftShort } from "react-icons/bs";
import { BsRocket } from "react-icons/bs";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Plus = () => {
  return (
    <>
      <div className="w-full my-3 grid grid-cols-1 lg:grid-cols-2 lg:w-4/5 lg:mx-auto lg:rounded-xl bg-purple-700">
        {/* title */}
        <div className="flex flex-col p-3 lg:mx-5">
          <div className="my-2">
            <a href="#">
              <img
                src="https://www.digikala.com/statics/img/svg/digiplus-logo.svg"
                alt=""
              />
            </a>
          </div>
          <div className="my-2 flex flex-row">
            <div>
              <p className="text-white text-xs my-2">
                خدمات ویژه برای اعضای دیجی‌پلاس
              </p>
              <button className="p-2 text-white flex flex-row items-center border-white border rounded-lg">
                عضویت
                <i>
                  <BsArrowLeftShort className="h-7 w-7" />
                </i>
              </button>
            </div>
            <div>
              <img className=" w-96" src="https://www.digikala.com/statics/img/png/digiplus/plus-widget.png" alt="" />
            </div>
          </div>
        </div>
        {/* title */}
        <div className=" bg-white rounded-lg m-3">
          <div className="flex justify-between">
            <div className="flex items-center p-2">
              <i className="text-purple-700 mx-2">
                <BsRocket />
              </i>
              <p className="text-sm">ارسال فوری رایگان</p>
            </div>
            <div className="flex items-center text-purple-700 p-2">
              <a href="#">
                <p className="text-sm">مشاهده همه</p>
              </a>
              <i>
                <MdKeyboardArrowLeft />
              </i>
            </div>
          </div>
          <div className="grid md:grid-cols-2">
            <div className="grid grid-cols-3 my-1 items-center">
              <a href="#">
                <img
                  className="h-24 w-24 items-center"
                  src="https://dkstatics-public.digikala.com/digikala-products/e4b2145a5e77bdc30aafff78bba4734798ac8d68_1620202335.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="h-24 w-24 items-center"
                  src="https://dkstatics-public.digikala.com/digikala-products/e06e98875ad5947e50811d75ae940a9a38aaa15f_1678627573.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="h-24 w-24 items-center"
                  src="https://dkstatics-public.digikala.com/digikala-products/7c8b49cb2c0a122de901c48cbeac24887288e36d_1684671932.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </a>
            </div>
            <div className="md:grid grid-cols-3 hidden my-1 items-center">
              <a href="#">
                <img
                  className="h-24 w-24 items-center"
                  src="https://dkstatics-public.digikala.com/digikala-products/a5378fbc6005e817658c4a683a20b354a0bc569a_1642601024.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="h-24 w-24 items-center"
                  src="https://dkstatics-public.digikala.com/digikala-products/41ac8b85c8f27d369e939dc4c2f84c97d8c0691a_1650858427.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="h-24 w-24 items-center"
                  src="https://dkstatics-public.digikala.com/digikala-products/110832681.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </a>
            </div>
            <div className="md:grid grid-cols-3 hidden my-1 items-center">
              <a href="#">
                <img
                  className="h-24 w-24 items-center"
                  src="https://dkstatics-public.digikala.com/digikala-products/d2e1434a3846b06a6296e7ad430dd84ad1a3fc65_1641899344.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="h-24 w-24 items-center"
                  src="https://dkstatics-public.digikala.com/digikala-products/e9873c25446c062f58bec67fd4f554c62fb5063c_1605450427.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="h-24 w-24 items-center"
                  src="https://dkstatics-public.digikala.com/digikala-products/9b2371cbb8c8ca77c20efbbb79974b9adfa0bd1b_1612706809.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </a>
            </div>
            <div className="md:grid grid-cols-3 hidden my-1 items-center">
              <a href="#">
                <img
                  className="h-24 w-24 items-center"
                  src="https://dkstatics-public.digikala.com/digikala-products/e61958991d5905572f1a5385af53ef57376a0cb6_1656406171.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="h-24 w-24 items-center"
                  src="https://dkstatics-public.digikala.com/digikala-products/a0f2b9c7c15f5356b0b40294fc6dd0ab1e969d07_1670417725.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="h-24 w-24 items-center"
                  src="https://dkstatics-public.digikala.com/digikala-products/81352ba9318e353596ef9c0ce52717ad044606f1_1668511732.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Plus;
