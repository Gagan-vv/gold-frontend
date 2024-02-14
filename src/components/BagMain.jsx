import React from "react";

import BagItem from "./BagItem";
import PriceItems from "./PriceItems";

const BagMain = () => {
  const bagItem = [
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
      price: "1,00,000",
    },
    {
      title: "Necklace set with jhumki with diamond within it",
      image: "./asset/item-1.jpg",
      price: "1,00,000",
    },
  ];
  return (
    <div className="bag-main">
      <div className="item-bag">
        <h3 className="item-head">Cart Details</h3>
        {bagItem.map((item) => (
          <BagItem key={item} items={item} />
        ))}
      </div>
      <PriceItems/>
    </div>
  );
};

export default BagMain;
