import React from "react";

const ProductCard = ({ item }) => {
  const {
    Price,
    "Product Name": productName,
    "Product Images": productImg
    } = item;
    
    console.log(Price)

  return (
    <div className="col-span-1  flex flex-col gap-6 pb-6">
      <img src="https://via.placeholder.com/280x150" alt="" />
      <div className="flex flex-col gap-3">
        <h1 className="text-base font-Questrial uppercase text-center tracking-widest">
          {productName}
        </h1>
        <h1 className="text-base font-Questrial uppercase text-center tracking-widest text-red-500">
          {Price.Original}
        </h1>
      </div>
    </div>
  );
};

export default ProductCard;
