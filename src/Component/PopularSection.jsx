import { CiStar } from "react-icons/ci";
import { FaGoogle, FaLocationArrow } from "react-icons/fa";
import { PiDiamondsFourLight } from "react-icons/pi";
import img1 from "../assets/download (2).png";
import img2 from "../assets/download (3).png";
import img3 from "../assets/download (4).png";
const PopularSection = () => {
  return (
    <div className=" flex flex-col md:flex-row justify-between items-center p-6 md:p-36">
      {/* left-side */}
      <div className="text-white md:w-1/2 mb-8 md:mb-0">
        <h1 className="text-4xl font-bold mb-4 text-black">
          Specials Eid <span className="text-[#EAE34A]">Offer</span>
        </h1>
        <p className="mb-6 text-black">
          95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter
          Print,V-Neck,Fashion Tees, The fabric is soft and has some stretch.,
          Occasion: Casual/Office/Beach/School/Home/Street. Season:
          Spring,Summer,Autumn,Winter.", "category": "women's clothing
        </p>
        <div className="flex items-center gap-4 mb-4">
          <button className="bg-[#EAE34A] text-[#160A3A] px-6 py-2 rounded-md hover:bg-[#d8d047] transition-colors duration-300">
            View Details
          </button>
          <button className="bg-[#37266E] text-white px-6 py-2 rounded-md hover:bg-[#2d2059] transition-colors duration-300">
            Confirm
          </button>
        </div>
        <div className="flex items-center mb-2">
          <span className="text-black">
            <CiStar />
          </span>
          <span className="ml-2 text-black">Based on 10,000+ reviews on</span>
        </div>
        <div className="flex space-x-8 mt-4 text-black">
          <div className="flex items-center">
            <FaGoogle className="text-black" />
            <span className="text-black ml-2">CROWD</span>
          </div>
          <div className="flex items-center">
            <FaLocationArrow className="text-black" />
            <span className="text-black ml-2">Capterra</span>
          </div>
          <div className="flex items-center">
            <PiDiamondsFourLight className="text-black" />
            <span className="text-black ml-2">GetApp</span>
          </div>
        </div>
      </div>
      {/* right-side */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:w-1/2">
        {/* First Image */}
        <div className="bg-gradient-to-r from-[#98FDE3] to-[#3E3761] flex flex-col items-center rounded-full h-96 shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
          <div className="mt-10 text-center">
            <h1 className="text-white text-lg font-semibold">Discount</h1>
            <span className="text-bottonnav text-3xl mb-4">40%</span>
          </div>
          <img
            src={img1}
            alt="Zillio 3"
            className="rounded-lg  h-52 mt-20 object-cover"
          />
        </div>

        {/* Second Image */}
        <div className="bg-gradient-to-r from-[#DCB1FB] to-[#3E3761] flex flex-col rounded-full h-96 mt-16 items-center shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
          <div className="mt-10 text-center">
            <h1 className="text-white text-lg font-semibold">Discount</h1>
            <span className="text-green-400 text-3xl mb-4">60%</span>
          </div>
          <img
            src={img2}
            alt="Zillio 3"
            className="rounded-lg  h-52 mt-20 object-cover"
          />
        </div>

        {/* Third Image */}
        <div className="bg-gradient-to-r from-[#85ADFF] to-[#3E3761] flex flex-col rounded-full h-96 items-center shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
          <div className="mt-10 text-center">
            <h1 className="text-white text-lg font-semibold">Discount</h1>
            <span className="text-amber-400 text-3xl mb-4">70%</span>
          </div>
          <img
            src={img3}
            alt="Zillio 3"
            className="rounded-lg  h-52 mt-20 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default PopularSection;
