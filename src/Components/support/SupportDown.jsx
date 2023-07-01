import React ,{useState} from "react";
import { RiArrowDownSLine } from "react-icons/ri";

const SupportDown = ({ name, desc }) => {
  const [showDesc, setshowDesc] = useState(false);
  return (
    <div>
      <li className=" my-2 border rounded-lg">
        <button
          onClick={() => setshowDesc(!showDesc)}
          type="button"
          className="flex w-full p-2 items-center text-base text-gray-900 transition duration-75 rounded-lg group "
        >
          <p className=" text-sm font-semibold">{name}</p>
          <i className="mr-auto p-2">
            <RiArrowDownSLine className="h-5 w-5" />
          </i>
        </button>
        <p className={` border-t text-sm p-2  ${!showDesc ?"hidden" :""}`}>{desc}</p>
      </li>
    </div>
  );
};

export default SupportDown;
