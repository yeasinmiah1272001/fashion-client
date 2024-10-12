import AllProduct from "../AllProduct";
import Banner from "../Banner";
import Category from "../Category";
import EcommerceItem from "../EcommerceItem";
import Electronic from "../Electronic";
import ManCloth from "../ManCloth";
import ManJacket from "../ManJacket";
import Newsletter from "../Newsletter";
import PopularSection from "../PopularSection";

import ProductCategory from "../ProductCategory";
import Women from "../Women";

const Home = () => {
  return (
    <div className="bg-bodyColor/30 min-h-screen">
      <Banner />
      <Category />
      <ProductCategory />
      <AllProduct />
      <ManCloth />
      <PopularSection />
      <ManJacket />
      <Electronic />
      <Women />
      <EcommerceItem />
      <Newsletter />
    </div>
  );
};

export default Home;
