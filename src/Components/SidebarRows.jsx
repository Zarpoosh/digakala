import React from "react";

const SidebarRows = ({ Icon, title }) => {
  return (
    <div>
      <li>
        <a href="#" className="flex items-center mr-2 p-2 text-gray-900 rounded-lg ">
          <i>
            <Icon className="h-6 w-6 text-gray-400" />
          </i>
          <p className="mr-2 text-sm">{title}</p>
          
        </a>
      </li>
    </div>
  );
};

export default SidebarRows;
