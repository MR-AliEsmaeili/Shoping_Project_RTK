import { ShortenText } from "../helpers/helper";

import { FaCircleMinus, FaCirclePlus } from "react-icons/fa6";
import { RiDeleteBin6Line } from "react-icons/ri";

const CardCheckout = ({ p, clickHandler }) => {
  return (
    <ul
      key={p.id}
      className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md gap-3 text-center"
    >
      <li>
        <img className="h-16 object-cover" src={p.image} alt={p.title} />
      </li>
      <li className="flex-1 text-gray-800 font-medium">
        {ShortenText(p.title)}
      </li>

      <li className="text-indigo-700 font-semibold">{p.price} تومان</li>
      <li>
        <div className="flex items-center gap-3">
          <button
            className="bg-slate-200 text-green-600 duration-300 py-1 px-3 rounded-lg hover:text-green-700"
            onClick={() => clickHandler("INCREASE", p)}
          >
            <FaCirclePlus />
          </button>
          {p.quantity}
          {p.quantity === 1 ? (
            <button
              className="bg-slate-200 text-red-500 py-1 px-3 duration-300 rounded-lg hover:text-red-600"
              onClick={() => clickHandler("REMOVE_ITEM", p)}
            >
              <RiDeleteBin6Line />
            </button>
          ) : (
            <button
              className="bg-slate-200 text-red-500 py-1 px-3 duration-300 rounded-lg hover:text-red-600"
              onClick={() => clickHandler("DECREASE", p)}
            >
              <FaCircleMinus />
            </button>
          )}
        </div>
      </li>
    </ul>
  );
};

export default CardCheckout;
