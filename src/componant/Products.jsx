import React, { useState, useEffect } from "react";
import { useTrail, animated } from "react-spring";
import ProductCard from "./ProductCard";
import { useLoaderData } from "react-router-dom";
import { useInView } from "react-intersection-observer";

const Products = () => {
  const products = useLoaderData();
  const [isVisible, setIsVisible] = useState(false);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);

  const trail = useTrail(products.length, {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0px)" : "translateY(50px)",
    from: { opacity: 0, transform: "translateY(50px)" },
    delay: 300
  });

  return (
    <div ref={ref} className="col-span-3 grid grid-cols-3 gap-3">
      {trail.map((style, index) => (
        <animated.div key={products[index]._id} style={style}>
          <ProductCard item={products[index]} />
        </animated.div>
      ))}
      <div className="join col-span-3 mx-auto flex gap-10 mb-10">
        <button className="join-item w-full border-b-red-800 ">1</button>
        <button className="join-item ">2</button>
        <button className="join-item ">3</button>
        <button className="join-item ">4</button>
      </div>
    </div>
  );
};

export default Products;
