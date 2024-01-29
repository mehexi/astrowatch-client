import React from "react";
import ProductCard from "./ProductCard";
import { useLoaderData } from "react-router-dom";

const Products = () => {

    const products = useLoaderData()
    console.log(products)

  return (
    <div className="col-span-3 grid grid-cols-3 gap-3">
          {
              products.map(product=><ProductCard key={product._id} item={product}></ProductCard>)
      }
    </div>
  );
};

export default Products;
