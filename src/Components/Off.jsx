import React, { useState } from "react";

const Off = () => {
  const imagecards = [
    {
      url: "https://dkstatics-public.digikala.com/digikala-adservice-banners/9ee9d49fb91c875ca390d29d45decd25d7d1097b_1679745917.jpg?x-oss-process=image/quality,q_95/format,webp",
    },
    {
      url: "https://dkstatics-public.digikala.com/digikala-adservice-banners/68c6a7a74140ff0a8bc145d3c1140d5403e3a0b3_1685525789.jpg?x-oss-process=image/quality,q_95/format,webp",
    },
    {
      url: "https://dkstatics-public.digikala.com/digikala-adservice-banners/b9b006b6fe4277b07140519788c632e933d19f21_1685530685.jpg?x-oss-process=image/quality,q_95/format,webp",
    },
    {
      url: "https://dkstatics-public.digikala.com/digikala-adservice-banners/a853fb9f2878899cd1b30cc6cf5e03bb1fb4930f_1686045914.jpg?x-oss-process=image/quality,q_95/format,webp",
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
    <div className="w-full h-auto mx-auto p-1">
      <div className="w-full lg:w-4/5 grid grid-cols-2 lg:flex lg:mx-auto">
        {imagecards.map((card) => (
          <a
            key={card.url}
            className="flex flex-col items-center my-2  mx-2"
            href="#"
          >
            <div className="">
              <img
                className="w-full cursor-pointer rounded-xl"
                src={card.url}
                alt=""
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Off;
