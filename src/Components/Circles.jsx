import React, { useState } from "react";
import More from "./More";
// icons
// images
import CircleRows from "./CircleRows";

const Circles = () => {
  const [cards, setCards] = useState([]);
  const shuffelcards = () => {
    const shuffeledcards = [...imagecards, ...imagecards].map((card) => ({
      ...card,
      id: Math.random(),
    }));
    setCards(shuffeledcards);
  };
  const imagecards = [
    {
      name: "دیجی کالا جت",
      url: "https://dkstatics-public.digikala.com/digikala-bellatrix/d0dc31c892be8cf1408e4e14580b3f479da66bd1_1648897133.png",
    },
    {
      name: "حراج استایل",
      url: "https://dkstatics-public.digikala.com/digikala-bellatrix/625d8883f37944f3f0c4af5fe39435600931ab22_1664309850.png",
    },
    {
      name: "خرید اقساطی",
      url: "https://dkstatics-public.digikala.com/digikala-bellatrix/ac127167132653d14c758748b07824a6a7643a31_1663444619.png",
    },
    {
      name: "خرید عمده و سازمانی",
      url: "https://dkstatics-public.digikala.com/digikala-bellatrix/6c69096a524add2d4646cd162dfa5f66d4ddceac_1668952039.png",
    },
    {
      name: "قرعه کشی بهار",
      url: "https://dkstatics-public.digikala.com/digikala-bellatrix/28a6ef720244892accbcf8da7b9ebb7262d3172b_1670930099.png",
    },
    {
      name: "دیجی پلاس",
      url: "https://dkstatics-public.digikala.com/digikala-bellatrix/78ccd40cbf305fb067de78ddab5be84f69589c8d_1648897009.png",
    },
    {
      name: "ماموریت ها",
      url: "https://dkstatics-public.digikala.com/digikala-bellatrix/967cbaa25713ca4d0e58cb5aaf0e486ab986d460_1648898393.png",
    },
  ];

  return (
    <>
      <div className="w-full lg:w-3/5  px-2 grid grid-cols-4 lg:flex lg:mx-auto lg:justify-between">
        {imagecards.map((card) => (
          <CircleRows key={card.url} title={card.name} Image={card.url} />
        ))}
        <More />
      </div>
    </>
  );
};

export default Circles;
