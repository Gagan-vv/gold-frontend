import React from "react";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SingleItem from "../components/SingleItem";

const Category = () => {
  const location = useLocation();
  const item = location.state.data;
  const newItem = [
    {
      id: "1",
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

  const scale = 0.4;
  return (
    <>
      <Header />

      <div className="search-pg">
        <div className="search-filter">
          <h4 className="srch-title">Search Filter</h4>
          <h5 className="subtitle">Sort:</h5>
          <div className="sort-input">
            <input type="radio" checked="checked" name="radio" className="radio" />
            Price low to high
          </div>
          <div class="container">
            <input type="radio" name="radio" className="radio"/>
            Price high to low
          </div>
          <h5 className="subtitle">Filter by price:</h5>
        </div>
        <div className="search-result">
          <h4 className="srch-title">Search Result for {item}</h4>
          {newItem.map((item, index) => (
            <SingleItem
              key={index}
              item={item}
              style={{ transform: `scale(${scale})` }}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Category;
