import { FaTshirt, FaShoePrints, FaHatCowboy } from "react-icons/fa";
import { MdOutlineLocalOffer } from "react-icons/md";

const ProductCategory = () => {
  const categories = [
    {
      id: 1,
      name: "Clothing",
      description: "Stylish and modern apparel",
      icon: <FaTshirt className="text-4xl text-blue-600 mx-auto" />,
    },
    {
      id: 2,
      name: "Footwear",
      description: "Trendy shoes for all seasons",
      icon: <FaShoePrints className="text-4xl text-green-600 mx-auto" />,
    },
    {
      id: 3,
      name: "Accessories",
      description: "Hats, belts, and more",
      icon: <FaHatCowboy className="text-4xl text-purple-600 mx-auto" />,
    },
    {
      id: 4,
      name: "Special Offers",
      description: "Get the best deals!",
      icon: <MdOutlineLocalOffer className="text-4xl text-red-600 mx-auto" />,
    },
  ];
  return (
    <section className="py-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Shop By Category
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="bg-[#F3EDD5]  shadow-md rounded-lg p-6 text-center hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{category.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
              <p className="text-gray-500 mb-4">{category.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductCategory;
