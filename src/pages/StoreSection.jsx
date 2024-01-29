import Products from "../componant/Products";
import SIdeNav from "../componant/SIdeNav";

const StoreSection = () => {
  return (
    <section className="mt-20">
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
      <div className="mt-20 grid grid-cols-4 mx-24">
        <div className="col-span-1 relative">
          <SIdeNav></SIdeNav>
        </div>
        <Products></Products>
      </div>
    </section>
  );
};

export default StoreSection;
