import React from "react";

const Club = () => {
  return (
    <>
      <div className="w-full  flex flex-col lg:w-4/5 lg:mx-auto lg:rounded-xl md:flex-row bg-sky-600 my-3">
        <div className="flex justify-between mx-3 tiems-center my-auto">
          <a href="#">
            <img
              className="h-14  w-32"
              src="https://www.digikala.com/statics/img/svg/club/digiclub-logo-white.svg"
              alt=""
            />
          </a>
          <div className="flex flex-row items-center m-2">
            <p className="text-xs mx-1">امتیاز شما ۶۲</p>
            <img
              className="h-5 w-5"
              src="https://www.digikala.com/statics/img/svg/club-point.svg"
              alt=""
            />
          </div>
        </div>
        {/* images */}
        <div className="mx-auto flex ">
          <div className="mx-1 my-3 rounded-lg flex-col md:flex-row bg-white flex items-center">
            <p className="text-xs items-center mx-2 my-1">چرخ و بخت</p>
            <a href="#">
              <img
                className="h-14"
                src="https://www.digikala.com/statics/img/png/digiclub/wheel-spinner.jpg"
                alt=""
              />
            </a>
          </div>
          <div className="mx-1 my-3 rounded-lg flex-col md:flex-row bg-white flex items-center">
            <p className="text-xs items-center mx-2 my-1">ماموریت ها</p>

            <a href="#">
              <img
                className="h-14"
                src="https://www.digikala.com/statics/img/png/digiclub/missions.png"
                alt=""
              />
            </a>
          </div>
          <div className="mx-1 my-3 rounded-lg flex-col md:flex-row bg-white flex items-center">
            <p className="text-xs items-center mx-2 my-1">جایزه ها</p>
            <a href="#">
              <img
                className="h-14"
                src="https://www.digikala.com/statics/img/png/digiclub/awards.png"
                alt=""
              />
            </a>
          </div>
        </div>
        {/* end of images */}
      </div>
    </>
  );
};

export default Club;

