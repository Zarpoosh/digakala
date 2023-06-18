import { useState } from "react";
import React from "react";
// icons
import { MdOutlineArrowBackIos, MdOutlineArrowForwardIos } from "react-icons/md";
import { RxDotFilled } from "react-icons/rx";
const Slider = () => {
  const slides = [
    {
      url: "https://dkstatics-public.digikala.com/digikala-adservice-banners/dc036a195b4b2f4865279f49fd69a2f72e038088_1684775762.jpg?x-oss-process=image/quality,q_95/format,webp",
    },
    {
      url: "https://dkstatics-public.digikala.com/digikala-adservice-banners/fe2491448fa82a761c8e01d3e77b73180f5c9bae_1681544141.jpg?x-oss-process=image/quality,q_95/format,webp",
    },
    {
      url: "https://dkstatics-public.digikala.com/digikala-adservice-banners/1404cd6306252ff4f1ed8bbec908fc76031c8e72_1684920921.jpg?x-oss-process=image/quality,q_95/format,webp",
    },
    {
      url: "https://dkstatics-public.digikala.com/digikala-adservice-banners/cf23387c628de5d0d782457c72c6e792804131c2_1684852175.jpg?x-oss-process=image/quality,q_95/format,webp",
    },
    {
      url: "https://dkstatics-public.digikala.com/digikala-adservice-banners/2c7f19bc3904800a0bfe3a3d543a851eac280276_1684908448.jpg?x-oss-process=image/quality,q_95/format,webp",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(3);
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide=()=> {
    setCurrentIndex(slideIndex)
  }

  return (
    <div className="w-full h-96 m-auto py-32 lg:py-56 relative group lg:px-5">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-full justify-between flex cursor-pointer lg:h-96 h-56 bg-cover bg-center duration-500"
      >
        {/* right arrow */}
        <div className="hidden group-hover:block bottom-0 mt-auto text-center right-5 mx-3 text-2xl rounded-full p-2 bg-white border-3 cursor-pointer">
          <MdOutlineArrowForwardIos onClick={nextSlide} className="h-6 w-6" />
        </div>
        {/* left arrow */}
        <div className="hidden group-hover:block bottom-0 mt-auto text-center left-5 mx-3 text-2xl rounded-full p-2 bg-white border-3 cursor-pointer">
          <MdOutlineArrowBackIos onClick={prevSlide} className="h-6 w-6" />
        </div>
        {/* dot slide */}
      </div>
        <div className="flex justify-center py-2">
            {slides.map((slides, slideIndex) => (
            <div key={slideIndex} onClick={()=>goToSlide(slideIndex)} className="text-2xl cursor-pointer">
                <RxDotFilled />
            </div>
            ))}
        </div>
    </div>
  );
};

export default Slider;
