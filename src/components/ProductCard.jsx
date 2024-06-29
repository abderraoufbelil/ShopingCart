import React from "react";
import ShoppingCart11 from "/ShoppingCart11.svg";

const ProductCard = ({
  handleAddToCart,
  name,
  description,
  price,
  img,
  id,
}) => {
  return (
    <div className=" relative p-2 bg-blend-lighten rounded-md border-[1px] w-[310px] h-[470px]">
      <img
        className=" bg-[#F7F7F7]  h-[75%] w-full"
        src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8fb34fe2-cc91-4865-9fa6-79b3b26b8ac7/pegasus-41-mens-road-running-shoes-7S90QB.png"
        alt=""
      />
      <h2 className=" font-semibold tracking-tighter text-[#C9C9C9]">
        {description}
      </h2>
      <h1 className="font-bold tracking-tightest text-black">{name} </h1>
      <h1 className="font-bold tracking-tightest text-[#2D56FF]">{price}$</h1>

      <img
        onClick={() => {
          handleAddToCart();
        }}
        className=" hover:shadow-lg cursor-pointer rounded-full flex  items-center justify-center absolute top-3 right-3 bg-white  h-[30px] w-[30px]"
        src={ShoppingCart11}
        alt=""
      />
    </div>
  );
};

export default ProductCard;
