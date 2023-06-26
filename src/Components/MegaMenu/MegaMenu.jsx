import React, { useState } from "react";
// icons
import { BsPhone } from "react-icons/bs";
import { AiOutlineLaptop } from "react-icons/ai";
import { TbSofa } from "react-icons/tb";
import { RiTShirtLine } from "react-icons/ri";
import { GiMilkCarton } from "react-icons/gi";
import { RiPencilRuler2Line } from "react-icons/ri";
import { TbBabyCarriage } from "react-icons/tb";
import { RiHeartAddLine } from "react-icons/ri";
import { FaCampground } from "react-icons/fa";
import { BiWrench } from "react-icons/bi";
import { FaCarSide } from "react-icons/fa";
import { SiIheartradio } from "react-icons/si";
import MenuContent from "./MenuContent";

const MegaMenu = (props) => {
  const listitems = [
    { id: 1, title: "موبایل", icon: <BsPhone className="h-4 w-4" /> },
    {
      id: 2,
      title: "کالای دیجیتال",
      icon: <AiOutlineLaptop className="h-4 w-4" />,
    },
    { id: 3, title: "خانه و آشپزخانه", icon: <TbSofa className="h-4 w-4" /> },
    { id: 4, title: "مد و پوشاک", icon: <RiTShirtLine className="h-4 w-4" /> },
    {
      id: 5,
      title: "کالاهای سوپرمارکتی",
      icon: <GiMilkCarton className="h-4 w-4" />,
    },
    {
      id: 6,
      title: "کتاب لوازم و التحریر هنر",
      icon: <RiPencilRuler2Line className="h-4 w-4" />,
    },
    {
      id: 7,
      title: "اسباب بازی کودک و نوزاد",
      icon: <TbBabyCarriage className="h-4 w-4" />,
    },
    {
      id: 8,
      title: "زیبایی و سلامت",
      icon: <RiHeartAddLine className="h-4 w-4" />,
    },
    { id: 9, title: "ورزش و سفر", icon: <FaCampground className="h-4 w-4" /> },
    {
      id: 10,
      title: "ابزار و لوازم ساختمانی",
      icon: <BiWrench className="h-4 w-4" />,
    },
    {
      id: 11,
      title: "خودرو و موتورسیکلت",
      icon: <FaCarSide className="h-4 w-4" />,
    },
    {
      id: 12,
      title: "محصولات بومی محلی",
      icon: <SiIheartradio className="h-4 w-4" />,
    },
  ];
  const [showItem, setShowItem] = useState(true);

  const [items, setItems] = useState([]);
  const listitem = () => {
    const listitem = [...listitems, ...listitems].map((item) => ({
      ...item,
      id: Math.random(),
    }));
    setItems(listitem);
  };
  return (
    <>
      <div
        id="black"
        style={{ zIndex: "-1" }}
        onMouseOver={() => props.setShowMenu(!props.showMenu)}
        className={`bg-black/50 h-screen sm:mt-[170px] lg:mt-[200px] fixed top-0  w-full overflow-x-hidden overflow-y-auto md:inset-0  max-h-full ${
          !props.showMenu ? "hidden" : ""
        }`}
      ></div>
      <div
        className={`mx-auto w-4/5 shadow-xl flex flex-row bg-white border h-auto ${
          !props.showMenu ? "hidden" : ""
        }`}
      >
        <div className="felx flex-col lg:w-1/4 xl:w-1/5  border-l">
          <ul className="h-auto flex flex-col ">
            {listitems.map((items) => (
              <li
                onMouseOver={() => setShowItem(!showItem)}
                className=" my-1 p-4 flex flex-row items-center hover:bg-gray-100 hover:text-red-600 text-xs xl:text-sm cursor-pointer"
                key={items.id}
                title={items.name}
              >
                <i className="ml-2">{items.icon}</i>
                <a href="">{items.title}</a>
              </li>
            ))}
          </ul>
        </div>

        <MenuContent
          showItem={showItem}
          setShowItem={setShowItem}
          items={items}
        />
      </div>
    </>
  );
};

export default MegaMenu;
