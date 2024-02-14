import React from "react";
import { useNavigate } from "react-router-dom";

const PriceItems = () => {
  const navigateTo = useNavigate();
  const handleClick = () => {
    navigateTo("/thanks");
  };

  return (
    <div className="total-bag">
      <h3 className="item-head">Price Details</h3>
      <div className="price-main">
        <div className="base">
          <span>Base Price</span>
          <span>Rs. 2,00,000</span>
        </div>
        <div className="base">
          <span>GST</span>
          <span>Rs. 2,00,000</span>
        </div>
        <div className="base">
          <span>Wastage</span>
          <span>Rs. 2,00,000</span>
        </div>
        <div className="base">
          <span>Processing</span>
          <span>Rs. 2,00,000</span>
        </div>
        <div className="discount">
          <span>Discount*</span>
          <span>Rs. -2,00,000</span>
        </div>
        <hr />
        <div className="total">
          <span>Total</span>
          <span>Rs. 2,00,000</span>
        </div>
        <div className="button-div">
          <button className="place-order" onClick={handleClick}>
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceItems;
