import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "./ProductCard";
import CartProductline from "./CartProductline";
import { ClearCart, DeleteFromCart } from "../utils/Slices";

const ShoppingCart = ({ open }) => {
  const Cart = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  const handleclearcart = () => {
    dispatch(ClearCart());
  };
  return (
    <div className="w-full h-full fixed top-0 bg-white z-20 flex flex-col   flex-wrap overflow-scroll">
      <div className="flex justify-between w-full px-4 mb-28 mt-4 items-center">
        {" "}
        <img
          onClick={() => {
            open();
          }}
          className="aboslute top-8 left-4  h-[50px] w-[50px] cursor-pointer"
          src="/Multiply.svg"
          alt="close"
        />
        <h1
          onClick={() => {
            handleclearcart();
          }}
          className="aboslute top-8 left-4 text-nowrap font-extrabold text-xl cursor-pointer "
        >
          {" "}
          Clear Cart
        </h1>
      </div>
      {Cart.map((item, index) => (
        <CartProductline
          {...item}
          handleAddToCart={() => {
            handleAddToCart(item);
          }}
          key={index}
        />
      ))}
    </div>
  );
};

export default ShoppingCart;
