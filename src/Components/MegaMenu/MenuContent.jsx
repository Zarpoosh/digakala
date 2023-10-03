import React, { useState } from "react";
// icons
import { BsChevronLeft } from "react-icons/bs";

const MenuContent = (props) => {
  const [name, setName] = useState([]);
  const shuffelname = () => {
    const shuffeledname = [...brand, ...brand].map((name) => ({
      ...name,
      id: Math.random(),
    }));
    setName(shuffeledname);
  };
  const brand = [
    { name: "اپل" },
    { name: "سامسونگ" },
    { name: "شیائومی" },
    { name: "نوکیا" },
    { name: "هوآوی" },
    { name: "آنر" },
    { name: "جی پلاس" },
    { name: "وان پلاس" },
    { name: "کاترپیلار" },
    { name: "ویوو" },
    { name: "موتورولا" },
    { name: "جی ال ایکس" },
    { name: "بلو" },
  ];
  return (
    <>
    {/* content1 */}
      <div key={props.items.id} className={` flex flex-col  w-4/5 ${!props.showItem ?"hidden" :""}`}>
        <div className="flex text-xs p-4">
          <p>همه محصولات موبایل</p>
          <i>
            <BsChevronLeft />
          </i>
        </div>

        <div className="flex flex-col ">
          <div className="grid grid-cols-3">
            <div className="flex felx-col  p-2">
              <div className="flex flex-col">
                <div className="flex flex-row items-center hover:text-red-500">
                  <a className="flex items-center" href="#">
                    <h1 className="font-bold p-1 border-r-2 border-red-500 ">
                      برند های مختلف گوشی
                    </h1>
                    <i>
                      <BsChevronLeft />
                    </i>
                  </a>
                </div>
                {/* riz manu */}
                {brand.map((name, index) => (
                  <div key={index} className="flex flex-col p-2 ">
                    <a href="#">
                      <h1 className="text-xs text-gray-500 hover:text-red-500">
                        گوشی {name.name}
                      </h1>
                    </a>
                  </div>
                ))}
                {/* riz manu */}
              </div>
            </div>
            <div className="flex flex-col p-2">
              <div className="flex flex-col">
                <div className="flex flex-row items-center hover:text-red-500">
                  <a className="flex items-center" href="#">
                    <h1 className="font-bold p-1 border-r-2 border-red-500 ">
                      گوشی براساس قیمت
                    </h1>
                    <i>
                      <BsChevronLeft />
                    </i>
                  </a>
                </div>
                {/* riz manu */}
                {brand.map((name, index) => (
                  <div key={index} className="flex fle-col p-2 ">
                    <a href="#">
                      <h1 className="text-xs text-gray-500 hover:text-red-500">
                        گوشی {name.name}
                      </h1>
                    </a>
                  </div>
                ))}
                {/* riz manu */}
              </div>
            </div>
            <div className="flex felx-col p-2">
              <div className="flex flex-col">
                <div className="flex flex-row items-center hover:text-red-500">
                  <a className="flex items-center" href="#">
                    <h1 className="font-bold p-1 border-r-2 border-red-500 ">
                      گوشی براساس حافظه
                    </h1>
                    <i>
                      <BsChevronLeft />
                    </i>
                  </a>
                </div>
                {/* riz manu */}
                {brand.map((name, index) => (
                  <div key={index} className="flex fle-col p-2 ">
                    <a href="#">
                      <h1 className="text-xs text-gray-500 hover:text-red-500">
                        گوشی {name.name}
                      </h1>
                    </a>
                  </div>
                ))}
                {/* riz manu */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* content2 */}
      
    </>
  );
};

export default MenuContent;
