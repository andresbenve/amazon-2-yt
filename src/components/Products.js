import React from "react";
import Image from "next/image";
import { useState } from "react";
import { StarIcon } from "@heroicons/react/solid";
//import Currency from "react-currency-formatter"; ----> import npm i react-currency-formatter

const MIN_RATING = 1;
const MAX_RATING = 5;

function Products({ id, title, price, description, category, image }) {
  const [rating] = useState(
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING)
  );
  const [hasPrime] = useState(Math.random() < 0.5);

  return (
    <div className="relative  flex flex-col m-5 bg-white z-30 p-10">
      <div>
        <p className="absolute top-2 right-2 text-xs italic text-gray-400 right-0">
          {category}
        </p>
        <Image src={image} height={200} width={200} objectFit="contain" />
        <h4 className="my-3">{title}</h4>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon className="h-5 " />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-2">{description}</p>
        <div>
          {hasPrime && (
            <div className="flex items-center space-x-2 -mt-5 pb-4 pt-4">
              <img
                className="w-12"
                src="https://raw.githubusercontent.com/andresbenve/BancoDeImagenes/master/benveba1.png"
                height={50}
                width={50}
                alt=""
              />
              <p>FREE Next-day Delivery</p>
            </div>
          )}
        </div>
        <button className="mt-auto button">Add To Basket</button>
      </div>
    </div>
  );
}
//<Currency quantity={price} currency="GBP" />

export default Products;
