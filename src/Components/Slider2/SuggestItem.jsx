import React from "react";

const SuggestItem = ({ Image, title }) => {
  return (
    <>
      <a className="h-32 w-32 my-4 flex flex-col items-center m-2" href="#">
        <img src={Image} alt="" />
        <p className="border-b">{title}</p>
      </a>
    </>
  );
};

export default SuggestItem;

