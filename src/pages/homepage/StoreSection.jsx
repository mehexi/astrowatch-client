import { Outlet } from "react-router-dom";
import Products from "../../componant/Products";
import SIdeNav from "../../componant/SIdeNav";
import Pagination from "../../componant/Pagination";

const StoreSection = () => {
  return (
    <section className="mt-20 mb-20 border-b">
      <div className="flex flex-col justify-center items-center gap-3">
        <h1 className="text-2xl text-center font-galine">New Release</h1>
        <h1 className="text-base max-w-4xl text-center text-gray-600">
          Check out our vast Men's Watch collection of Trending to Niche watch
          brands including Emporio Armani, Fossil, Tommy Hilfiger, Hugo Boss,
          Micheal Kors, Tissot and many more. Shop your desired watches within
          the watch brands from our latest collections.
        </h1>
      </div>
      {/* card section  */}
      <div className="mt-20 grid grid-cols-4 mx-24 max-sm:mx-4 ">
        <div className="col-span-1 max-sm:hidden sm:hidden md:hidden lg:hidden xl:block relative">
          <SIdeNav></SIdeNav>
        </div>
        <Outlet></Outlet>
      </div>
      
    </section>
  );
};

export default StoreSection;
