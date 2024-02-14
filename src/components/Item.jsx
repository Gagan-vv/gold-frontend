import React from "react";
import SingleItem from "./SingleItem";

const newItem = [
  {
    id:"1",
    title: "Bangle with Bengali Design",
    image: "/asset/bangle/1/1.png",
    price: "60,000",
    review: {
      rating: "4.9",
      no_review: "150",
    },
    new: "1",
  },
  {
    id:"2",
    title: "Necklace set with jhumki with diamond within it",
    image: "/asset/item-1.jpg",
    price: "1,00,000",
    review: {
      rating: "4.5",
      no_review: "1500",
    },
    new: "1",
  },
  {
    id:"3",
    title: "Necklace set with jhumki with diamond within it",
    image: "/asset/item-1.jpg",
    price: "1,00,000",
    review: {
      rating: "4.5",
      no_review: "1500",
    },
    like: "1",
    new: "1",
  },
  {
    id:"4",
    title: "Necklace set with jhumki with diamond within it",
    image: "/asset/item-1.jpg",
    price: "1,00,000",
    review: {
      rating: "4.5",
      no_review: "1500",
    },
    new: "1",
  },
  {
    id:"5",
    title: "Necklace set with jhumki with diamond within it",
    image: "/asset/item-1.jpg",
    price: "1,00,000",
    review: {
      rating: "4.5",
      no_review: "1500",
    },
    featured: "1",
  },
];

const Item = () => {
  return (
    <div className="items">
      <h3 className="heading-text">New Items</h3>
      {newItem.map(
        (item, index) =>
          index < 5 && item.new && <SingleItem key={item} item={item} />
      )}
      <h3 className="heading-text">Featured Items</h3>
      {newItem.map(
        (item, index) =>
          index < 5 && item.featured && <SingleItem key={item} item={item} />
      )}
      <h3 className="heading-text">Products you may like</h3>
      {newItem.map(
        (item, index) =>
          index < 5 && item.like && <SingleItem key={item} item={item} />
      )}
    </div>
  );
};

export default Item;
