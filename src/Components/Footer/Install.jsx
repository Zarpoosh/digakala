import React, { useState } from "react";

const Install = () => {
  const imagecards = [
    {
      url: "https://www.digikala.com/statics/img/svg/appStores/google-play.svg",
    },
    {
      url: "https://www.digikala.com/statics/img/svg/appStores/coffe-bazzar.svg",
    },
    { url: "https://www.digikala.com/statics/img/svg/appStores/myket.svg" },
    { url: "https://www.digikala.com/statics/img/svg/appStores/sib-app.svg" },
  ];
  const [cards, setCards] = useState([]);
  const shuffelcards = () => {
    const shuffeledcards = [...imagecards, ...imagecards].map((card) => ({
      ...card,
      id: Math.random(),
    }));
    setCards(shuffeledcards);
  };
  return (
    <div className="flex flex-col my-4 lg:flex-row bg-blue-900 rounded-lg">
      <div className="mx-auto items-center my-2 flex flex-row">
        <a href="#">
          <img
            className="h-9 w-9"
            src="https://www.digikala.com/statics/img/png/footerlogo2.png"
            alt=""
          />
        </a>
        <p className="text-white mx-2 font-bold">دانلود اپلیکیشن دیجی‌کالا</p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4  mx-auto">
        {imagecards.map((card) => (
          <a key={card.url} className="mx-2 my-2" href="#">
            <img src={card.url} alt="" />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Install;
