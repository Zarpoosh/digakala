import React, { useState } from "react";
import SelectedItem from "./SelectedItem";


const Selected = () => {
  const imagecards = [
    {
      off: "۲۰٪",
      price: "۲۳۰۰۰",
      Decrease: "۱۲۰۰۰",
      url: "https://dkstatics-public.digikala.com/digikala-products/e06e98875ad5947e50811d75ae940a9a38aaa15f_1678627573.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    },
    {
      off: "۳۲٪",
      price: "۵۴۰۰۰",
      Decrease: "",
      url: "https://dkstatics-public.digikala.com/digikala-products/3572192.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    },
    {
      off: "۴۵٪",
      price: "۱۳۲۰۰۰",
      Decrease: "۵۴۹۰۰",
      url: "https://dkstatics-public.digikala.com/digikala-products/7c8b49cb2c0a122de901c48cbeac24887288e36d_1684671932.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    },
    {
      off: "۲۱٪",
      price: "۴۳۰۰۰",
      Decrease: "۲۱۰۰۰",
      url: "https://dkstatics-public.digikala.com/digikala-products/ba11cd2f6770f20aec9222a95dcf75d7f4c9a2c2_1625896416.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    },
    {
      off: "۱۳٪",
      price: "۱۲۰۰۰",
      Decrease: "۷۶۰۰۰",
      url: "https://dkstatics-public.digikala.com/digikala-products/9f47245fe80e369f6e336fe9fc967ad05dfdfcb2_1669442363.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    },
    {
      off: "۱۸٪",
      price: "۳۲۰۰۰",
      Decrease: "۲۱۰۰۰",
      url: "https://dkstatics-public.digikala.com/digikala-products/114467146.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    },
    {
      off: "۳۴٪",
      price: "۷۶۰۰۰",
      Decrease: "۶۵۰۰",
      url: "https://dkstatics-public.digikala.com/digikala-products/9b2371cbb8c8ca77c20efbbb79974b9adfa0bd1b_1612706809.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    },
    {
      off: "۸۷٪",
      price: "۵۴۰۰۰",
      Decrease: "۳۲۰۰۰",
      url: "https://dkstatics-public.digikala.com/digikala-products/e61958991d5905572f1a5385af53ef57376a0cb6_1656406171.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    },
    {
      off: "۱۲٪",
      price: "۴۰۰۰۰",
      Decrease: "۳۲۴۰۰",
      url: "https://dkstatics-public.digikala.com/digikala-products/120114763.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    },
    {
      off: "‍۹٪",
      price: "۷۶۰۰۰",
      Decrease: "۴۳۹۰۰",
      url: "https://dkstatics-public.digikala.com/digikala-products/8d208dd52debc12c61216cf99fbd856b8031da71_1625308692.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    },
    {
      off: "۵٪",
      price: "۳۲۵۰۰",
      Decrease: "۵۴۰۰۰",
      url: "https://dkstatics-public.digikala.com/digikala-products/c9d680a6f435a00bb66ce8829c19a40ef5fe4678_1620820609.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
    },
    {
      off: "۱۹٪",
      price: "۴۵۶۰۰",
      Decrease: "۱۲۰۰۰",
      url: "https://dkstatics-public.digikala.com/digikala-products/7853ee9038eb09345e56475bcd7dc5a76f48deb3_1682340715.jpg?x-oss-process=image/resize,m_lfit,h_300,w_300/format,webp/quality,q_80",
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
        <h1 className="font-bold">منتخب محصولات تخفیف و حراج</h1>
      </div>
      <div className="w-full lg:w-4/5 lg:rounded-xl lg:mx-auto grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 lg:border">
        {imagecards.map((card) => (
          <div
            key={card.url}
            className="flex border my-2 items-ceter mx-auto justify-center"
          >
            <SelectedItem
              image={card.url}
              off={card.off}
              price={card.price}
              Decrease={card.Decrease}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default Selected;
