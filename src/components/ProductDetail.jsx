import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import SingleItem from "./SingleItem";

const ProductDetail = ({ item }) => {
  const navigate = useNavigate();

  const handlewish = () => {
    navigate("/wish");
  };

  let [imageLocation, setImageLocation] = useState(1);

  const handleImageClick = (index) => {
    setImageLocation(index);
  };

  const handleBag = () => {
    navigate("/bag");
  };

  const repetitions = [1, 2, 3, 4, 5];

  const newItem = [
    {
      id: "1",
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
      id: "2",
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
      id: "3",
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
      id: "4",
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
      id: "5",
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
  return (
    <>
      <div className="product-detail">
        <div className="product-image">
          <img
            src={`/asset/bangle/1/${imageLocation}.png`}
            alt="image"
            className="img-prt"
          />
          <span className="slide-img">
            {repetitions.map((index) => (
              <img
                src={`/asset/bangle/1/${index}.png`}
                alt=""
                className="sl-img"
                onClick={() => handleImageClick(index)}
                key={index}
              />
            ))}
          </span>
          <button className="wish" onClick={handlewish}>
            Add to Wishlist
          </button>
          <button className="cart" onClick={handleBag}>
            Add to Bag
          </button>
        </div>
        <div className="product-desc">
          <span className="id-pdt">Product ID: 45217265881</span>
          <span className="title-pdt">{item.title}</span>
          <span className="desc">
            Bengali bangles come in many shapes and designs, including: Chur,
            Ratanchur, Baala, Mantasha, Beloyari Churi, Noboratna Baala, Shona
            Badhano Loha, Konkon, Bauti, Shankha. One type of traditional bangle
            is the Shaka Pola, which is worn by married Bengali women in West
            Bengal. Shaka Pola bangles are usually made of red and white coral
            or conch shells and are typically worn in odd numbers, such as
            three, five, or seven on each wrist.
          </span>
          <div className="data-qt">
            <div className="qt-data" style={{ paddingRight: "40px" }}>
              <h3>Quantity</h3>
              <div className="data-detail">
                <p>Gold</p>
                <p>100 gram</p>
              </div>
              <div className="data-detail">
                <p>Diamond</p>
                <p>5 gram</p>
              </div>
              <div className="data-detail">
                <p>Wastage</p>
                <p>10 gram</p>
              </div>
              <div className="data-detail">
                <p>Beads</p>
                <p>25 gram</p>
              </div>
            </div>
            <div className="qt-data">
              <h3>Price</h3>
              <div className="base-prc-detail">
                <p>Base Price (with tax)</p>
                <p>Rs 59,900</p>
              </div>
              <div className="wst-detail">
                <p>Wastage Price</p>
                <p>Rs 10,000</p>
              </div>
              <hr />
              <div className="final-prc">
                <p>Final Price</p>
                <p>Rs 1,00,000</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="similar-product">
        <span className="title-similar">Similar Products........</span>
        {newItem.map(
        (item, index) =>
          index < 5 && <SingleItem key={item} item={item} />
      )}
      </div>
    </>
  );
};

export default ProductDetail;
