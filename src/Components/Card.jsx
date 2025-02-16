import { TbListDetails } from "react-icons/tb";
import { Link } from "react-router-dom";
import { productsQuantity, ShortenText } from "../helpers/helper";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { useCart } from "../Context/cartProvider";
import { FaShoppingBasket } from "react-icons/fa";

const Card = ({ data }) => {
  const { id, title, image, price } = data;
  const [state, dispatch] = useCart();

  const clickHandler = (type) => {
    dispatch({ type, payload: data });
  };
  const quantity = productsQuantity(state, id);

  return (
    <div className="bg-white  shadow-md rounded-lg overflow-hidden flex flex-col  p-4 duration-300 cursor-pointer transition-transform transform hover:scale-105">
      <img
        className="w-full h-40 object-contain mb-4"
        src={image}
        alt={title}
        loading="lazy"
      />
      <h3 className="text-lg font-semibold  text-gray-800 text-center mb-2">
        {ShortenText(title)}
      </h3>
      <p className="text-gray-600 text-end ml-12 text-sm mb-4">{price} تومان</p>
      <div className="flex justify-around items-center py-2 w-full mt-auto">
        <Link
          to={`/products/${id}`}
          className="text-orange-500 duration-300 hover:text-orange-700 text-lg"
          title="جزئیات محصول"
        >
          <TbListDetails />
        </Link>
        {/* <div className="flex justify-evenly items-center"> */}
        {quantity === 0 ? (
          <button
            className="bg-indigo-500 font-semibold duration-300 text-white px-3 py-2 rounded-lg  hover:bg-indigo-700 "
            title="اضافه به سبد خرید"
            onClick={() => clickHandler("ADD_ITEM")}
          >
            <FaShoppingBasket />
          </button>
        ) : (
          <button
            className="bg-slate-200 text-green-600 duration-300 py-1 px-3 rounded-lg hover:text-green-700"
            title="اضافه کردن تعداد سبد خرید"
            onClick={() => clickHandler("INCREASE")}
          >
            <FaCirclePlus />
          </button>
        )}
        {!!quantity && <span>{quantity}</span>}
        {quantity === 1 && (
          <button
            className="bg-slate-200 text-red-500 duration-300 py-1 px-3 rounded-lg hover:text-red-600"
            title="حذف از سبد خرید"
            onClick={() => clickHandler("REMOVE_ITEM")}
          >
            <RiDeleteBin6Line />
          </button>
        )}
        {quantity > 1 && (
          <button
            className="bg-slate-200 text-red-500 py-1 px-3 duration-300 rounded-lg hover:text-red-600"
            title="کاهش تعداد سبد خرید"
            onClick={() => clickHandler("DECREASE")}
          >
            <FaCircleMinus />
          </button>
        )}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Card;
