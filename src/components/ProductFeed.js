import React from "react";
import Products from "./Products.js";

function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 md:-mt-52 mx-auto">
      {products
        .slice(0, 4)
        .map(({ id, title, price, description, category, image }) => (
          <Products
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
      <img
        className="md:col-span-full"
        src="https://links.papareact.com/dyz"
        alt=""
      />
      <div className="md:col-span-2">
        {products
          .slice(4, 5)
          .map(({ id, title, price, description, category, image }) => (
            <Products
              key={id}
              id={id}
              title={title}
              price={price}
              description={description}
              category={category}
              image={image}
            />
          ))}
      </div>
      {products
        .slice(5, products.length)
        .map(({ id, title, price, description, category, image }) => (
          <Products
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
          />
        ))}
    </div>
  );
}

export default ProductFeed;
