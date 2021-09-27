import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Slider from "../Slider/Slider";
import Product from "./Product/Product";
import "./Shop.css";

const Shop = (props) => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("./Commerce.JSON")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const [cart, setCart] = useState([]);
  const Addcart = (item) => {
    // console.log(item);
    const newCart = [...cart, item];
    setCart(newCart);
  };
  return (
    <div>
      <Slider></Slider>

      <div className="product">
        <div className="show-product">
          {products.map((pro) => (
            <Product pro={pro} Addcart={Addcart}></Product>
          ))}
        </div>
        <div className="order">
          <h1 className="text-white d-flex">
            <i className="fas fa-shopping-cart text-warning mt-1"></i>Order:
            {cart.length}
          </h1>
          {cart.map((data) => (
            <Cart data={data}></Cart>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
