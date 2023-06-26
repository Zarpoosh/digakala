import React, { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";

const Product = () => {
  const imagecards1 = [
    {
      url: "https://dkstatics-public.digikala.com/digikala-products/ec9a962187e1f82cc47e7a148ef99ec1c6fd024d_1656423336.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      url: "https://dkstatics-public.digikala.com/digikala-products/373cf0add6b2964b30a9a59b2ce2f5f2c8ea976f_1678188426.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      url: "https://dkstatics-public.digikala.com/digikala-products/c59fe305749abd18d772b86333f30699fc6fafbe_1674976102.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      url: "https://dkstatics-public.digikala.com/digikala-products/efb1074a4de149264cae33a802f949d2e86ed052_1661177904.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      url: "https://dkstatics-public.digikala.com/digikala-products/e4b2145a5e77bdc30aafff78bba4734798ac8d68_1620202335.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      url: "https://dkstatics-public.digikala.com/digikala-products/c2ca6b8c3cb72b5db2d6c7fa7eba2cb868659200_1660392399.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      url: "https://dkstatics-public.digikala.com/digikala-products/6ca3f4bc8fb197d2ffcdf152f6864722f60c2d1b_1675316803.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      url: "https://dkstatics-public.digikala.com/digikala-products/ae89019edc2610778b2bf86c6773205272038528_1684411966.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      url: "https://dkstatics-public.digikala.com/digikala-products/1f8bb150b142112d1f7560d5313d1d73ca67aa28_1677060264.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      url: "https://dkstatics-public.digikala.com/digikala-products/4af1bad23ab1945fa5cef6a333792196e0fe850e_1656426417.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      url: "https://dkstatics-public.digikala.com/digikala-products/f0f85d81fca6cbb969d46e4b633925d49d5a66c7_1674976179.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      url: "https://dkstatics-public.digikala.com/digikala-products/b53c1b236791087e57978d91dd12db0e89ccb292_1674975848.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      url: "https://dkstatics-public.digikala.com/digikala-products/a5378fbc6005e817658c4a683a20b354a0bc569a_1642601024.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      url: "https://dkstatics-public.digikala.com/digikala-products/084182096961859d97f9897fc4479ec55ee92c2d_1662209886.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      url: "https://dkstatics-public.digikala.com/digikala-products/79baa6d7e3dfd20eb0caba1ac505809c3ebf585c_1683407047.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
    {
      url: "https://dkstatics-public.digikala.com/digikala-products/7672ff6c0028bc9bbd30d572be0a499c7f9635d5_1675016003.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/quality,q_80",
    },
  ];

  const [cards, setCards] = useState([]);

  useState(() => {}, []);
  const shuffledCards = () => {
    const shuffledCards = [...imagecards1, ...imagecards1].map((card) => ({
      ...card,
      id: Math.random(),
    }));
    setCards(shuffledCards);
  };

  return (
    <>
      <div className="grid grid-cols-1 border lg:w-4/5 lg:mx-auto border-gray-200 rounded-lg lg:grid-cols-1 my-5">
        {/* col1 */}

        <div className="flex flex-col w-full border-l p-2 ">
          {/* titles */}
          <div className="grid grid-cols-4 mr-5">
            <div className="flex flex-col">
              <p>گوشی موبایل</p>
              <p className="text-xs text-gray-500">بر اساس بازدیدهای شما</p>
            </div>
            <div className="lg:flex flex-col hidden">
              <p>کیف و کاور گوشی</p>
              <p className="text-xs text-gray-500">بر اساس بازدیدهای شما</p>
            </div>
            <div className="lg:flex flex-col hidden">
              <p>هدفون، هدست و هندزفری</p>
              <p className="text-xs text-gray-500">بر اساس بازدیدهای شما</p>
            </div>
            <div className="lg:flex flex-col hidden">
              <p>ساعت هوشمند</p>
              <p className="text-xs text-gray-500">بر اساس بازدیدهای شما</p>
            </div>
          </div>
          {/* end of titles */}
          {/* images */}
          <div className="grid grid-cols-2 lg:grid-cols-8">
            {imagecards1.map((card) => (
              <div key={card.url} className="p-3">
                <a href="#">
                  <img src={card.url} alt="" />
                </a>
              </div>
            ))}
          </div>
          {/* ned of images */}
          {/* see all */}
          <div className="grid lg:grid-cols-4 grid-cols-1 w-full mx-auto my-1 text-blue-500">
            <div className="flex flex-row items-center justify-center">
              <a className="" href="#">
                مشاهده همه
              </a>
              <i>
                <MdKeyboardArrowLeft />
              </i>
            </div>
            <div className="lg:flex flex-row items-center justify-center hidden">
              <a className="" href="#">
                مشاهده همه
              </a>
              <i>
                <MdKeyboardArrowLeft />
              </i>
            </div>
            <div className="lg:flex flex-row items-center justify-center hidden">
              <a className="" href="#">
                مشاهده همه
              </a>
              <i>
                <MdKeyboardArrowLeft />
              </i>
            </div>
            <div className="lg:flex flex-row items-center justify-center hidden">
              <a className="" href="#">
                مشاهده همه
              </a>
              <i>
                <MdKeyboardArrowLeft />
              </i>
            </div>
          </div>
          {/* end of see all */}
        </div>
      </div>
    </>
  );
};

export default Product;
