import React from "react";
import "./Cart.css";
const Cart = (props) => {
  console.log(props);
  const { name, imageUrl, price } = props.data;
  return (
    <div className="cart">
      <i class="fas fa-times-circle close"></i>
      <h4>name:{name}</h4>
      <span className="cart-price">Price:{price}</span>
      <img className="cart-img" src={imageUrl} alt="" />
    </div>
  );
};

export default Cart;
