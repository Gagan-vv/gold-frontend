import React from "react";
import { MdDeleteOutline } from "react-icons/md";
const BagItem = ({ items, val }) => {
  return (
    <div className="product-single">
      <div className="detail-bag">
        <span className="title-bag">{items.title}</span>
        <span className="price-bag">Rs {items.price}</span>
        <span className="quantity">
          <div className="quantity buttons_added">
            <div className="qt-bag">Quantity: </div>
            <input type="button" value="-" className="minus" />
            <input
              type="number"
              step="1"
              min="1"
              max=""
              name="quantity"
              value="1"
              title="Qty"
              className="input-text qty text"
              size="4"
              pattern=""
              inputmode=""
            />
            <input type="button" value="+" className="plus" />
            {val ? (
              <button className="move-to">Move to Cart</button>
            ) : (
              <button className="move-to">Move to WishList</button>
            )}
          </div>
        </span>
      </div>
      <img src={items.image} alt="" className="image-bag" />
      <button className="delete-bag">
        <MdDeleteOutline
          size="30px"
          style={{
            position: "relative",
            margin: "10px",
            bottom: "10px",
            left: "10px",
          }}
        />
      </button>
    </div>
  );
};

export default BagItem;
