import React from "react";
import Image from "next/image";
import { useState } from "react";

//import Currency from "react-currency-formatter"; ----> import npm i react-currency-formatter

function Products({ id, title, price, description, image }) {
  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative  flex flex-flex items-center  m-5 bg-white z-30 p-10">
      <div>
        <Image src={image} height={350} width={300} objectFit="contain" />
        <h4 className="my-3">{title}</h4>
        <div>
          {hasPrime && (
            <div className="flex items-center space-x-2 -mt-5 pb-1 pt-4">
              <p>ON-Stock</p>
            </div>
          )}
          <p className="pb-2">{price + "$"}</p>
        </div>
        <button className=" flex items-center mt-auto button">
          Add To Basket
        </button>
      </div>
    </div>
  );
}
//<Currency quantity={price} currency="GBP" />
//  <p className="text-xs my-2 line-clamp-2">{description}</p>
export default Products;
