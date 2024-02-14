import React from "react";
import { Link } from "react-router-dom";

const SingleItem = ({ item }) => {
  const dataToSend = item;
  return (
    <Link
      to={`/product/${item.id}`}
      state={{ data: item }}
      className="item-single"
    >
      {item.new ? <span className="notify-badge">NEW</span> : null}
      <img src={item.image} alt={item.title} />
      <div className="title">{item.title}</div>
      <div className="extra">
        <p>Rs. {item.price}</p>
        <p>
          {item.review.rating} ⭐ ({item.review.no_review}){" "}
        </p>
      </div>
    </Link>
  );
};

export default SingleItem;
