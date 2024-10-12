import {
  decressQuantity,
  incressQuantity,
  singleDelete,
} from "../../Redux/shoppingSlice";
import toast from "react-hot-toast";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTitle from "../SectionTitle";
import axios from "axios";
import { IoMdAdd, IoMdRemove, IoMdClose } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import { AuthContext } from "../Provider/AuthProvider";

const MyCart = () => {
  const { user } = useContext(AuthContext);
  const selector = useSelector((state) => state.shopping.cart);
  const dispatch = useDispatch();
  const [totalAmt, setTotalAmt] = useState(0);

  // Calculate total amount whenever cart changes
  useEffect(() => {
    const amt = selector.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotalAmt(amt);
  }, [selector]);

  // Payment function to handle checkout
  const handleCheckout = async () => {
    try {
      const cartItems = selector.map((item) => ({
        name: item.title, // Must match with the backend key
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      }));

      const response = await axios.post(
        "http://localhost:5000/create-checkout-session",
        {
          cartItems,
        }
      );
      window.location.href = response.data.url;
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };
  // end

  // Handle quantity decrease
  const handleDecreaseQuantity = (itemId) => {
    try {
      dispatch(decressQuantity(itemId));
      toast.success("Quantity decreased");
    } catch (error) {
      console.error("Error decreasing quantity:", error);
    }
  };

  // Handle quantity increase
  const handleIncreaseQuantity = (itemId) => {
    try {
      dispatch(incressQuantity(itemId));
      toast.success("Quantity increased");
    } catch (error) {
      console.error("Error increasing quantity:", error);
    }
  };

  // Handle item removal
  const handleRemoveItem = (itemId) => {
    try {
      dispatch(singleDelete(itemId));
      toast.success("Item removed from cart");
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  return (
    <div>
      {selector.length ? (
        <div className="container mx-auto p-6">
          <SectionTitle
            title="Your Shopping Cart"
            subtitle="Continue your shopping here"
            center
          />

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border">
              <thead>
                <tr className="text-left bg-gray-100 border-b">
                  <th className="py-3 px-4">#</th>
                  <th className="py-3 px-4">Product</th>
                  <th className="py-3 px-4">Quantity</th>
                  <th className="py-3 px-4">Price</th>
                  <th className="py-3 px-4">Remove</th>
                </tr>
              </thead>
              <tbody>
                {selector.map((item, index) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-4 px-4">{index + 1}</td>
                    <td className="py-4 px-4 flex items-center">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-16 h-16 object-cover rounded mr-4"
                      />
                      <span>{item.name}</span>
                    </td>
                    <td className="py-4 px-4">
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleDecreaseQuantity(item.id)}
                          className="p-2 bg-gray-200 rounded"
                        >
                          <IoMdRemove />
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => handleIncreaseQuantity(item.id)}
                          className="p-2 bg-gray-200 rounded"
                        >
                          <IoMdAdd />
                        </button>
                      </div>
                    </td>
                    <td className="py-4 px-4">
                      ${(item.price * item.quantity).toFixed(2)}
                    </td>
                    <td className="py-4 px-4">
                      <button
                        onClick={() => handleRemoveItem(item.id)}
                        className="text-red-500"
                      >
                        <IoMdClose size={24} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Payment Section */}
          <div className="flex justify-between items-center mt-8 p-6 bg-gray-100 rounded-lg shadow-lg">
            <div>
              <h3 className="text-2xl font-semibold">
                Total: ${totalAmt.toFixed(2)}
              </h3>
              <p className="text-gray-600">
                Taxes and shipping calculated at checkout.
              </p>
            </div>
            <div>
              <button
                onClick={handleCheckout}
                className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
          <h2 className="text-3xl font-semibold text-center text-gray-700 mb-4">
            Your Shopping Cart is Empty
          </h2>
          <p className="text-lg text-gray-500 mb-8">
            Add items to your cart to view them here.
          </p>
          <Link
            to="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-md shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Go to Home Page
          </Link>
        </div>
      )}
    </div>
  );
};

export default MyCart;
