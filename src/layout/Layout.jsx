import { Link } from "react-router-dom";
import { SlBasket } from "react-icons/sl";
import { useCart } from "../Context/cartProvider";

const Layout = ({ children }) => {
  const [state] = useCart();
  return (
    <>
      <div className="flex fixed right-0 top-0 z-10   w-full  shadow-md shadow-gray-300 ">
        <header className="flex    justify-between  w-full place-items-center  text-indigo-700  px-8 py-3  rounded-b-lg bg-gray-200">
          <Link className="text-xl font-bold" to="./products">
            فروشگاه اینترنتی
          </Link>
          <div
            className={
              "flex text-white bg-indigo-500 p-2 rounded-md font-extrabold duration-300 hover:bg-indigo-700 "
            }
          >
            <Link className="font-extrabold flex" to="./checkout">
              <span className="text-yellow-400">
                {state.selectedItems.length > 0 && state.itemCounter}
              </span>
              <SlBasket className="text-2xl" />
            </Link>
          </div>
        </header>
      </div>
      {children}
      <footer className="text-center my-6  p-6  rounded-lg text-white  bg-indigo-500">
        طراحی با عشق توسط علی اسماعیلی 💜
      </footer>
    </>
  );
};

export default Layout;
