import React from "react";
import axios from "axios";

const PaymentBtn = ({ totalAmt }) => {
  const handleCheckout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/create-checkout-session",
        {
          totalAmt,
        }
      );
      window.location.href = response.data.url;
    } catch (error) {
      console.error("Error creating checkout session:", error);
    }
  };

  return (
    <div>
      <button
        onClick={handleCheckout}
        className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
      >
        Proceed to Checkout
      </button>
    </div>
  );
};

export default PaymentBtn;
