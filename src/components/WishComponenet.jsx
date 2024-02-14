import React from "react";
import BagItem from "./BagItem";

const WishComponenet = () => {
  const data = [
    {
      title: "Necklace set with jhumki with diamond within it",
      image: "./asset/item-1.jpg",
      price: "1,00,000",
    },
    {
      title: "Necklace set with jhumki with diamond within it",
      image: "./asset/item-1.jpg",
      price: "1,00,000",
    },
    {
      title: "Necklace set with jhumki with diamond within it",
      image: "./asset/item-1.jpg",
      price: "1,00,000",
    },
    {
      title: "Necklace set with jhumki with diamond within it",
      image: "./asset/item-1.jpg",
      price: "1,00,000",
    },
    {
      title: "Necklace set with jhumki with diamond within it",
      image: "./asset/item-1.jpg",
      price: "65,00,000",
    },
    {
      title: "Necklace set with jhumki with diamond within it",
      image: "./asset/item-1.jpg",
      price: "6,00,000",
    },
  ];

  const vals = 1;
  return data.length === 0 ? (
    <div className="wish-cmp">
      <h2>Wishlist is Empty. Nothing to view here</h2>
    </div>
  ) : (
    <div className="wish-data">
      <span className="wishh">WishList</span>
      <span className="wish-item">
        {data.map((item, index) => {
          if (index % 2 !== 0) {
            return <BagItem key={index} items={item} val={vals} />;
          }
        })}
      </span>
      <span className="wish-item">
        {data.map((item, ind) => {
          if (ind % 2 === 0) {
            return <BagItem key={ind} items={item} val={vals} />;
          }
        })}
      </span>
    </div>
  );
};

export default WishComponenet;
