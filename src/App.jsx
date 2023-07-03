import "./App.css";
import AutoSlider from "./Components/AutoSlider";
import Circles from "./Components/Circles";
import Header from "./Components/Header";
import Selected from "./Components/Selected/Selected.jsx";
import Slider from "./Components/Slider1/Slider";
import SuperMarket from "./Components/SuperMarket";
import Support from "./Components/support/Support";
import Off from "./Components/Off";
import Category from "./Components/Category";
import Suggest from "./Components/Slider2/Suggest";
import Brand from "./Components/Popular/Brand";
import Product from "./Components/Products/Product";
import Plus from "./Components/Digiplus/Plus";
import Club from "./Components/DigiClub/Club";
import Footer from "./Components/Footer/Footer";

function App() {
 
  return (
    <>
      <div className="flex flex-col w-full ">
        {/* header */}
        <div className=" border-b fixed bg-white" style={{ zIndex: "1" }}>
          <Header />
        </div>

        {/* slider */}
        <div className="">
          <Slider />
        </div>

        {/* circles */}
        <div className="lg:mt-[200px]">
          <Circles />
        </div>

        {/* support */}
        <div style={{ zIndex: "1" }}>
          <Support />
        </div>

        {/* carousel */}
        <div>
          <AutoSlider />
        </div>

        {/* supermarket */}
        <div>
          <SuperMarket />
        </div>

        {/* off */}
        <div>
          <Off />
        </div>

        {/* category */}
        <div>
          <Category />
        </div>

        {/* suggest */}
        <div>
          <Suggest />
        </div>

        {/* Popular brands */}
        <div>
          <Brand />
        </div>

        {/* content */}
        <div>
          <Product />
        </div>

         {/* suggest */}
         <div>
          <Suggest />
        </div>

        {/* digiplus */}
        <div>
          <Plus />
        </div>
        {/* digiclub */}
        <div>
          <Club />
        </div>

        {/* selected */}
        <div>
          <Selected />
        </div>
        {/* footer */}
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
