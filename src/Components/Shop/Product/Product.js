import React from "react";
import "./Product.css";
import Rating from "react-rating";
const Product = (props) => {
  //   console.log(props);
  const { id, price, rate, imageUrl, name, content } = props.pro;
  return (
    <div className="display-product container">
      <img className="img" src={imageUrl} alt="" />
      <h4>ID: {id} </h4>
      <h5>Name: {name}</h5>
      <h3>Price: {price}</h3>
      <h4>Rating: {rate}</h4>
      <p className="about">About: {content}</p>
      <Rating
        emptySymbol="far fa-star color"
        fullSymbol="fas fa-star color"
        initialRating={rate}
        readonly
      />
      <br />
      <br />
      <button onClick={() => props.Addcart(props.pro)} className="purchase">
        <span className="">
          <i class="fas fa-cart-plus bt-icon"></i>
        </span>
        Purchase
      </button>
    </div>
  );
};

export default Product;
