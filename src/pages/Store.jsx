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
    <div className="w-full h-full text-black flex  justify-center gap-8  flex-wrap ">
      <button onClick={openclosecart} className="absolute top-0 ">
        open
      </button>
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
