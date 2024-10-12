import Container from "./Container";
import img1 from "../assets/baby (13).png";
import img2 from "../assets/p_img28.png";
import img3 from "../assets/p_img11.png";
import img4 from "../assets/man (16).png";
import img5 from "../assets/man (13).png";
import img6 from "../assets/man (12).png";

const Category = () => {
  return (
    <Container className="my-10">
      {/* Header */}
      <div className="text-center mb-8">
        <button className="text-2xl text-white bg-yellow-400 py-3 px-6 mx-auto block rounded-md shadow-lg hover:bg-[#F3EDD5] transition duration-300 ease-in-out">
          Special Offers
        </button>
      </div>

      {/* Category Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mx-auto duration-300">
        {/* Category Card */}
        <div
          className="bg-bottonnav p-4 rounded-lg flex flex-col items-center justify-center hover:shadow-xl hover:bg-[#F3EDD5] transition duration-500 ease-in-out"
          data-aos="fade-up"
        >
          <div className="w-24 h-24 mb-4">
            <img
              src={img1}
              alt="Category"
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-lg font-semibold">Baby Onesie</h1>
        </div>

        <div
          className="bg-bottonnav p-4 rounded-lg flex flex-col items-center justify-center hover:shadow-xl hover:bg-[#F3EDD5] transition duration-300 ease-in-out"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="w-24 h-24 mb-4">
            <img
              src={img2}
              alt="Category"
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-lg font-semibold">Men's T-Shirt</h1>
        </div>

        <div
          className="bg-bottonnav p-4 rounded-lg flex flex-col items-center justify-center hover:shadow-xl hover:bg-[#F3EDD5] transition duration-300 ease-in-out"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="w-24 h-24 mb-4">
            <img
              src={img3}
              alt="Category"
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-lg font-semibold">Men's Jacket</h1>
        </div>

        <div
          className="bg-bottonnav p-4 rounded-lg flex flex-col items-center justify-center hover:shadow-xl hover:bg-[#F3EDD5] transition duration-300 ease-in-out"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="w-24 h-24 mb-4">
            <img
              src={img4}
              alt="Category"
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-lg font-semibold">Women's Dress</h1>
        </div>

        <div
          className="bg-bottonnav p-4 rounded-lg flex flex-col items-center justify-center hover:shadow-xl hover:bg-[#F3EDD5] transition duration-300 ease-in-out"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <div className="w-24 h-24 mb-4">
            <img
              src={img5}
              alt="Category"
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-lg font-semibold">Men's T-Shirt</h1>
        </div>

        <div
          className="bg-bottonnav p-4 rounded-lg flex flex-col items-center justify-center hover:shadow-xl hover:bg-[#F3EDD5] transition duration-300 ease-in-out"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <div className="w-24 h-24 mb-4">
            <img
              src={img6}
              alt="Category"
              className="rounded-full object-cover"
            />
          </div>
          <h1 className="text-lg font-semibold">Baby Onesie</h1>
        </div>
      </div>
    </Container>
  );
};

export default Category;
