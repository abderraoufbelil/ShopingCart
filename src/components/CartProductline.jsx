import React from "react";
import { useDispatch } from "react-redux";
import { Decrementqte, DeleteFromCart, incrementyqte } from "../utils/Slices";

const CartProductline = ({ name, description, price, id, qte }) => {
  const dispatch = useDispatch();
  const handleincrementqte = (id, number) => {
    dispatch(incrementyqte({ id: id, amount: number }));
  };
  const handledecrementqte = (id, number) => {
    dispatch(Decrementqte({ id: id, amount: number }));
  };
  const handledelete = (id) => {
    dispatch(DeleteFromCart(id));
  };
  return (
    <div className="w-full flex justify-between items-center px-6 border-b-[1px]">
      <img
        className=" bg-[#F7F7F7] h-[100px] w-[150px] "
        src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/8fb34fe2-cc91-4865-9fa6-79b3b26b8ac7/pegasus-41-mens-road-running-shoes-7S90QB.png"
        alt=""
      />

      <h1 className="font-bold tracking-tightest text-black">{name} </h1>
      <h1 className="font-bold tracking-tightest text-[#2D56FF]">
        {price * qte}$
      </h1>
      <div className="flex justify-end gap-4 items-center">
        <h1 className="font-bold tracking-tightest text-[#2D56FF]">
          quantity :{qte}
        </h1>
        <h1
          onClick={() => {
            handleincrementqte(id, 1);
          }}
          className="text-xl font-bold cursor-pointer"
        >
          +
        </h1>
        <h1
          onClick={() => {
            handledecrementqte(id, 1);
          }}
          className="text-xl font-bold cursor-pointer"
        >
          -
        </h1>
        <img
          onClick={() => {
            handledelete(id);
          }}
          className="h-[40px] w-[40px] cursor-pointer"
          src="/Delete.svg"
          alt=""
        />
      </div>
    </div>
  );
};

export default CartProductline;
