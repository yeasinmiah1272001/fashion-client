import { useDispatch, useSelector } from "react-redux";
import { twMerge } from "tailwind-merge";
import { addToCart } from "../Redux/shoppingSlice";
import toast from "react-hot-toast";
import { FaLeftRight } from "react-icons/fa6";

const Button = ({ className, item }) => {
  // const selector = useSelector((state) => state.shopping.cart);
  const dispatch = useDispatch();
  const handleAddToCart = () => {
    if (item) {
      dispatch(addToCart(item));
      toast.success(`product ${item.title.slice(0, 20)} added`);
    } else {
    }
  };
  return (
    <div>
      <button
        onClick={handleAddToCart}
        className={twMerge(
          `py-2 px-4 rounded-md bg-bg-[#F3EDD5] border border-gray-400 bg-transparent hover:bg-bottonnav/70 duration-300`,
          className
        )}
      >
        Add To Cart
      </button>
    </div>
  );
};

export default Button;
