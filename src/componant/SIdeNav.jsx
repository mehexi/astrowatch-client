import { Link } from "react-router-dom";
import "../animationcss/animation.css";
const SIdeNav = () => {
  return (
    <div className="col-span-1 flex flex-col  gap-7 sticky right-0 top-40">
      <div className="flex flex-col gap-3">
        <h1 className="text-base uppercase font-Questrial tracking-widest">
          sidebar menu
        </h1>
        <ul className="text-base text-gray-500 capitalize flex flex-col gap-2">
         <Link to={'/mansCollection'}> <li>mens watch</li></Link>
         <Link to={'/womansCollection'}> <li>Woman watch</li></Link>
          
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-base uppercase font-Questrial tracking-widest">
          avebility
        </h1>
        <ul className="text-base text-gray-500 capitalize flex flex-col gap-2">
          <li>out of stock</li>
          <li>out of stock</li>
        </ul>
      </div>
      <div className="flex flex-col gap-3">
        <h1 className="text-base uppercase font-Questrial tracking-widest">
          price
        </h1>
        <div className="flex w-9/12 justify-between items-center">
          <label className="border px-6 py-2 " htmlFor="">
            <span>$</span>
            <input
              type="number"
              name=""
              id=""
              className="outline-none text-end w-20"
              min={0}
              max={22000}
            />
          </label>
          <span>-</span>
          <label className="border px-6 py-2" htmlFor="">
            <span>$</span>
            <input
              type="number"
              name=""
              id=""
              className="outline-none text-end w-20"
              pattern="[0-9]+"
            />
          </label>
        </div>
      </div>
    </div>
  );
};

export default SIdeNav;
