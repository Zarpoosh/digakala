import React, { useState } from "react";
import dot from "../image/icons/Annotation 2023-05-25 124448.png";
import MoreDown from "./MoreDown";
import MoreRows from "./MoreRows";
// image
import smile from "../image/icons/smile.png";
import box from "../image/icons/box.png";
import mounth from "../image/icons/mounth.png";

const More = () => {
  const imagecards = [
    {
      title: "دیجی کالا جت",
      desc: "خرید فوری از سوپرمارکت های اطراف",
      url: "https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc31c892be8cf1408e4e14580b3f479da66bd1_1648897133.png",
    },
    {
      title: "حراج استایل",
      desc: "فروشگاه آنلاین مد  پوشاک",
      url: "https://dkstatics-public.digikala.com/digikala-bellatrix/625d8883f37944f3f0c4af5fe39435600931ab22_1664309850.png",
    },
    {
      title: "خرید قسطی",
      desc: "خرید قسطی گوشی موبایل لپ تاب و لوازم خانگی",
      url: "https://dkstatics-public.digikala.com/digikala-bellatrix/ac127167132653d14c758748b07824a6a7643a31_1663444619.png",
    },
    {
      title: "خرید عمده و سازمانی",
      desc: "خرید عمده و سازمانی انواع کالا",
      url: "https://dkstatics-public.digikala.com/digikala-bellatrix/555ad3336a60bbd1433dd7a999f4d487e96602d8_1680678388.png",
    },
    {
      title: "دیجی کالا سرویس",
      desc: "گارانتی و خدمات پس از فروش دیجی کالا",
      url: "https://dkstatics-public.digikala.com/digikala-bellatrix/6c69096a524add2d4646cd162dfa5f66d4ddceac_1668952039.png",
    },
    {
      title: "پیندو",
      desc: "ثبت آگهی برای کالا و خدمات",
      url: "https://dkstatics-public.digikala.com/digikala-bellatrix/934a12850c05efdec1969aff883d107cc600a7b3_1648896993.png",
    },
    {
      title: "فیدبو",
      desc: "خرید کتاب و دانلود کتاب الکترونیک",
      url: "https://dkstatics-public.digikala.com/digikala-bellatrix/3e870ff8c78bd76061a920c29e346027809817f8_1648896950.png",
    },
    {
      title: "دیجی کالا مهر",
      desc: "به مسیر تازه مهربانی بیا",
      url: "https://dkstatics-public.digikala.com/digikala-bellatrix/17bb6daa07ae2ec11867fb7320ed6f79b26f1f4b_1666724993.png",
    },
    {
      title: "بومی و محلی",
      desc: "عرضه محصولات محلی و دست ساز",
      url: "https://dkstatics-public.digikala.com/digikala-bellatrix/b9f37d8283afd3a309e30756a38c3f879453262a_1668942073.png",
    },
  ];
  const [showMore, setShowMore] = useState(false);

  const [cards, setCards] = useState([]);
  const shuffledCards = () => {
    const shuffledCards = [...imagecards, ...imagecards].map((card) => ({
      ...card,
      id: Math.random(),
    }));
    setCards(shuffledCards);
  };
  return (
    <div className="">
      {/* modal */}
      {/* more */}
      <a
        onClick={() => setShowMore(!showMore)}
        className="flex flex-col items-center my-2 cursor-pointer"
        href="#"
      >
        <div className="h-12 w-12 rounded-full bg-gray-200 justify-center">
          <img src={dot} alt="" />
        </div>
        <span className="items-center mt-1 text-xs">بیشتر</span>
      </a>
      {/* end of more */}
      <div
        className={` bg-black/50 h-screen fixed top-0 left-0 right-0 z-50  w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 max-h-full ${
          !showMore ? "hidden" : ""
        }`}
      >
        <div className="relative w-full max-w-2xl max-h-full mx-auto top-32">
          <div id="more" className="relative bg-white rounded-lg shadow ">
            <div className="flex items-start p-4 border-b ">
              <img src={smile} className="ml-1" alt="" />
              <div className="felx w-full items-center">
                <p className="">خدمات دیجی کالا</p>
              </div>
              <button
                onClick={() => setShowMore(!showMore)}
                type="button"
                className="text-gray-400 rounded-lg text-sm p-1.5 mr-auto inline-flex items-center"
                data-modal-hide="defaultModal"
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>

            <div className="w-full lg:w-4/5  px-2 grid grid-cols-3 lg:flex lg:mx-auto lg:justify-between">
              <MoreRows Image={box} title="لاکی باکس" />
              <MoreRows
                Image="https://dkstatics-public.digikala.com/digikala-bellatrix/44f0cf40d5aa1c433866d47976cc0c6e82c86823_1648896970.png"
                title="دیجی کلاب"
              />
              <MoreRows
                Image="https://dkstatics-public.digikala.com/digikala-bellatrix/78ccd40cbf305fb067de78ddab5be84f69589c8d_1648897009.png"
                title="دیجی پلاس"
              />
              <MoreRows
                Image="https://dkstatics-public.digikala.com/digikala-bellatrix/967cbaa25713ca4d0e58cb5aaf0e486ab986d460_1648898393.png"
                title="ماموریت ها"
              />
              <MoreRows
                Image="https://dkstatics-public.digikala.com/digikala-bellatrix/258db5bf0ff7b28dbae1bfb3dfaa71bfff32faf9_1686642108.png"
                title="دیجی کلاب"
              />
              <MoreRows
                Image="https://dkstatics-public.digikala.com/digikala-bellatrix/6b21cc5a4ebe6332b778a2f4725ed3fdaa78e014_1673693837.png"
                title="کارت هدیه"
              />
            </div>

            <div className="flex p-6 border-t  rounded-b flex-col">
              <div>
                <p className="text-xs mr-5">سرویس های گروه دیجی کالا</p>
              </div>
              <div className=" w-full lg:w-full lg:grid grid-cols-2 lg:mx-auto lg:justify-between">
                {imagecards.map((cards) => (
                  <MoreDown
                    Image={cards.url}
                    key={cards.id}
                    desc={cards.desc}
                    title={cards.title}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of modal */}
    </div>
  );
};

export default More;
