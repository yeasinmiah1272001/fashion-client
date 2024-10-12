import banner2 from "../assets/banner3.jpg";
import banner3 from "../assets/banner4.webp";
import Button from "./Button";
import Container from "./Container";

const EcommerceItem = () => {
  return (
    <Container>
      <div className="flex p-6 border rounded-lg  items-center">
        {/* Left Side: Image */}
        <div className="flex-shrink-0">
          <img
            src={banner2}
            alt="Product"
            className="w-[700px] h-[400px] p-5 object-cover rounded-md"
          />
        </div>

        {/* Right Side: Title, Description, and Button */}
        <div className="ml-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200">
              Eid Collection
            </h2>
            <p className="mt-2 text-gray-600 text-xl leading-relaxed ">
              95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter
              Print,V-Neck,Fashion Tees, The fabric is soft and has some
              stretch., Occasion: Casual/Office/Beach/School/Home/Street.
              Season: Spring,Summer,Autumn,Winter.", "category": "women's
              clothing
            </p>
          </div>
          <Button className={"w-full mt-4"} />
        </div>
      </div>
      <div className="flex p-6 border rounded-lg  items-center">
        {/* Left Side: Image */}

        {/* Right Side: Title, Description, and Button */}
        <div className="ml-6 flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors duration-200">
              Eid Collection Discount <span className="text-red-500">50%</span>
            </h2>
            <p className="mt-2 text-gray-600 text-xl leading-relaxed ">
              95%Cotton,5%Spandex, Features: Casual, Short Sleeve, Letter
              Print,V-Neck,Fashion Tees, The fabric is soft and has some
              stretch., Occasion: Casual/Office/Beach/School/Home/Street.
              Season: Spring,Summer,Autumn,Winter.", "category": "women's
              clothing
            </p>
          </div>
          <Button className={"w-full mt-4"} />
        </div>
        <div className="flex-shrink-0">
          <img
            src={banner3}
            alt="Product"
            className="w-[700px] h-[400px] p-5 object-cover rounded-md"
          />
        </div>
      </div>
    </Container>
  );
};

export default EcommerceItem;
