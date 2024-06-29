import React, { useEffect, useState } from "react";
import { productlist } from "../utils/Data";
import ProductCard from "../components/ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../utils/Slices";
import ShoppingCart from "../components/ShoppingCart";

const Store = () => {
  const [shoppingcartstate, setcartstate] = useState(false);
  const openclosecart = () => {
    setcartstate(!shoppingcartstate);
  };
  const dispatch = useDispatch();
  const handleAddToCart = (item) => {
    dispatch(AddToCart(item));
  };

  return (
    <div className="w-full h-full text-black flex  justify-center gap-8  flex-wrap py-4 ">
      <img
        src="/ShoppingCart11.svg"
        onClick={openclosecart}
        className="absolute top-0 h-[40px] w-[40px] cursor-pointer"
      />

      {shoppingcartstate && <ShoppingCart open={openclosecart} />}
      {productlist.map((item, index) => (
        <ProductCard
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

export default Store;
