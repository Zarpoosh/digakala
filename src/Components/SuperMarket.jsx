import React, { useState } from "react";
// isons
import { BsArrowLeftShort } from "react-icons/bs";

const SuperMarket = () => {
  const images = [
    {
      url: "https://dkstatics-public.digikala.com/digikala-products/a69cf42fbe6be681488ce11c3c763ce575b4842e_1619336001.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      off: "۲۲٪",
    },
    {
      url: "https://dkstatics-public.digikala.com/digikala-products/d4ff637e174f6df2606af2c90a15322ae09b2032_1612353876.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      off: "۳۲٪",
    },
    {
      url: "https://dkstatics-public.digikala.com/digikala-products/e634c91eb80c4ba8e38ffc02f7085a863c002d24_1597660284.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
      off: "۲۱٪",
    },
  ];
  const [cards, setCards] = useState([]);
  const shuffledCards = () => {
    const shuffledCards = [...images, ...images].map((card) => ({
      ...card,
      id: Math.random(),
    }));
    setCards(shuffledCards);
  };
  return (
    <>
      <div className="lg:w-4/5 lg:mx-auto mx-4 rounded-lg my-4 bg-slate-300 h-auto flex felx-col">
        <div className="w-full p-2 sm:flex lg:flex-row">
          <div className=" flex w-3/5">
            <img className="h-13 w-13 p-2" src="https://www.digikala.com/statics/img/png/amazing/fresh.png" alt="" />
            <img className="" src="https://www.digikala.com/statics/img/svg/typography/fresh.svg" alt="" />
            <p className="bg-green-500 text-white my-auto p-1 mx-2 hidden lg:flex rounded-full">
              تا ۶۸٪ تخفیف
            </p>
          </div>

          <div className="flex flex-row">
            {/* circles */}
            {images.map((card) => (
              <div key={card.url} className="flex my-auto">
                <img
                  className="rounded-full h-14 w-14 mx-2"
                  src={card.url}
                  alt=""
                />
                <span className="bg-red-500 absolute mt-5 text-white text-xs rounded-full p-1 my-auto">
                  {card.off}
                </span>
              </div>
            ))}
            {/* end of the circles */}
            <div className="flex items-center">
              <div className="flex bg-white rounded-full p-2 items-center">
                <p className="text-green-500 text-sm hidden lg:flex">
                  بیش از ۹۰ کالا
                </p>
                <i className="mr-auto my-auto lg:mx-2 rounded-full">
                  <BsArrowLeftShort className="text-green-500 h-7 w-7" />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SuperMarket;
