import React , {useState} from "react";
// icon
import { RiArrowDownSLine } from "react-icons/ri";

const SidebarDown = ({ name }) => {
  const [showDropDown, setShowDropDown] = useState(false);

  return (
    <div>
      <li className="">
        <button
          onClick={() => setShowDropDown(!showDropDown)}
          type="button"
          className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group "
        >
          <p className="mr-2 pr-2 text-sm">{name}</p>
          <i className="mr-auto p-2">
            <RiArrowDownSLine className="h-5 w-5" />
          </i>
        </button>
        <ul
          
          className={`py-2 w-full bg-gray-200  ${!showDropDown ? "hidden" : ""}`}
        >
          <li className="items-center flex mr-5">
            <a
              href="#"
              className="hover:text-red-500  text-sm p-2 text-gray-900 transition duration-75 rounded-lg group "
            >
              برندهای مختلف گوشی موبایل
            </a>
          </li>
          <li className="items-center flex mr-5">
            <a
              href="#"
              className="hover:text-red-500 text-sm p-2 text-gray-900 transition duration-75 rounded-lg group "
            >
              گوشی براساس قیمت
            </a>
          </li>
          <li className="items-center flex mr-5">
            <a
              href="#"
              className="hover:text-red-500 text-sm p-2 text-gray-900 transition duration-75 rounded-lg group "
            >
              گوشی براساس حافظه داخلی
            </a>
          </li>
          <li className="items-center flex mr-5">
            <a
              href="#"
              className="hover:text-red-500 text-sm p-2 text-gray-900 transition duration-75 rounded-lg group "
            >
              رزولوشن عکس
            </a>
          </li>
          <li className="items-center flex mr-5">
            <a
              href="#"
              className="hover:text-red-500 text-sm p-2 text-gray-900 transition duration-75 rounded-lg group "
            >
              برندهای مختلف گوشی موبایل
            </a>
          </li>
          
        </ul>
      </li>
    </div>
  );
};

export default SidebarDown;
