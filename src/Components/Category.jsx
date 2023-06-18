import React, { useState } from "react";

const Category = () => {
  const imagecards = [
    {
      title: "موبایل",
      url: "https://dkstatics-public.digikala.com/digikala-categories/aba1e5dca8958ac1176e25cd194ff8ac622cd383_1662362431.png?x-oss-process=image/format,webp",
    },
    {
      title: "کالای دیجیتال",
      url: "https://dkstatics-public.digikala.com/digikala-categories/8f80e75e4c2dca42ee0538e100c7a7b05455aa88_1662360265.png?x-oss-process=image/format,webp",
    },
    {
      title: "اخنه و آشپزخانه",
      url: "https://dkstatics-public.digikala.com/digikala-categories/0c3cc1cb589df1c74c4ad95a742bb6df967956a8_1656161119.png?x-oss-process=image/format,webp",
    },
    {
      title: "مد و پوشاک",
      url: "https://dkstatics-public.digikala.com/digikala-categories/5795b31a635f1e23df96a908c009f31744ede38f_1656160928.png?x-oss-process=image/format,webp",
    },
    {
      title: "کالاهای سوپرمارکتی",
      url: "https://dkstatics-public.digikala.com/digikala-categories/da24c42172585abb0c328accf85d071049c4253e_1656161034.png?x-oss-process=image/format,webp",
    },
    {
      title: "کتاب لوازم و التحریر و هنر",
      url: "https://dkstatics-public.digikala.com/digikala-categories/3582bbed0a53318c2332d2c79b051b226f02a3bb_1656161134.png?x-oss-process=image/format,webp",
    },
    {
      title: "اسباب بازی کودک و نوزاد",
      url: "https://dkstatics-public.digikala.com/digikala-categories/0c46d2532d61dd3a5b6a3afc17552c23c1b4d39e_1656160976.png?x-oss-process=image/format,webp",
    },
    {
      title: "زیبایی و سلامت",
      url: "https://dkstatics-public.digikala.com/digikala-categories/0cefa48f5c58adbbde8c5a76b22ee49de0e667f5_1656161101.png?x-oss-process=image/format,webp",
    },
    {
      title: "ورزش و سفر",
      url: "https://dkstatics-public.digikala.com/digikala-categories/1c44d5964f259e0725ec86ca9739de888f1862c7_1656161158.png?x-oss-process=image/format,webp",
    },
    {
      title: "ابزار لوازم ساختمانی و صنعتی",
      url: "https://dkstatics-public.digikala.com/digikala-categories/5d89d5b168e5ed079d619181e849cc737ec42c8d_1678698730.png?x-oss-process=image/format,webp",
    },
    {
      title: "خودرو موتورسیکلت",
      url: "https://dkstatics-public.digikala.com/digikala-categories/4e985adcf61dd54d4d8abe725a62ba3990ea1eb1_1678698550.png?x-oss-process=image/format,webp",
    },
    {
      title: "محصولات بومی و محلی",
      url: "https://dkstatics-public.digikala.com/digikala-categories/af02140ea60e0fd478b09b279976a095c95615b6_1656161174.png?x-oss-process=image/format,webp",
    },
  ];
  const [cards, setCards] = useState([]);
  const shuffledCards = () => {
    const shuffledCards = [...imagecards, ...imagecards].map((card) => ({
      ...card,
      id: Math.random(),
    }));
    setCards(shuffledCards);
  };
  return (
    <>
      <div className=" flex items-center justify-center my-4">
        <h1 className="font-bold">دسته بندی های دیجی کالا</h1>
      </div>
      <div className="w-full h- lg:w-4/5 lg:mx-auto grid grid-cols-3 lg:grid-cols-6  items-center justify-center">
        {imagecards.map((cards) => (
          <div key={cards.id} className="items-center my-2 p-3 flex flex-col">
            <a
              className=" h-20 w-20 lg:w-40 lg:h-40 items-center flex flex-col "
              href="#"
            >
              <img className="items-center" src={cards.url} alt="" />
            </a>
            <p className="text-xs">{cards.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Category;
