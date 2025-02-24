import { Link } from "react-router-dom";

import NOTFOUND from "../Assets/not-found.gif";

import CardCheckout from "../Components/CardCheckout";
import { useDispatch, useSelector } from "react-redux";
import { Checkout } from "../Features/cartSlice";

const CheckoutPage = () => {
  const state = useSelector((state) => state.Cart);
  const dispatch = useDispatch();
  const { selectedItems, itemCounter, total, checkout } = state;

  if (!itemCounter) {
    return (
      <>
        <nav className="flex gap-6 mt-28 mb-10 font-bold text-indigo-700">
          <Link to="/products">محصولات </Link>
          <span>{">"}</span>
          <Link to="#">سبد خرید</Link>
        </nav>
        <div className="h-[70vh] flex flex-col justify-center items-center">
          <img className="w-80 h-64 m-auto" src={NOTFOUND} alt="پیدا نشد" />
          <p className="text-center my-10">سبد خرید شما خالی است !</p>
          <Link
            className="my-16  text-white bg-indigo-500 duration-300 p-3 rounded-md font-bold hover:bg-indigo-700"
            to="/products"
          >
            بازگشت به صفحه اصلی
          </Link>
        </div>
      </>
    );
  }
  return (
    <div className="min-h-screen pb-12">
      <nav className="container mx-auto flex gap-6 mt-28 font-bold text-indigo-700">
        <Link to="/products">محصولات </Link>
        <span>{">"}</span>
        <Link to="#">سبد خرید</Link>
      </nav>
      <div className="container mx-auto mt-8 flex flex-col md:flex-row gap-8 px-4 max-w-5xl">
        <div className="flex-1 flex flex-col gap-4">
          {selectedItems.map((p) => (
            <CardCheckout key={p.id} p={p} />
          ))}
        </div>
        <aside className="w-full h-fit md:w-1/3 bg-white rounded-lg p-6 shadow-lg">
          <p className="text-lg font-semibold text-gray-800">
            تعداد اقلام سبد:
            <span className="text-indigo-700">{itemCounter}</span>
          </p>
          <p className="text-lg font-semibold text-gray-800">
            قیمت نهایی: <span className="text-indigo-700">{total} تومان</span>
          </p>
          <p className="text-lg font-semibold text-gray-800">
            وضعیت:
            <span className={checkout ? "text-green-600" : "text-orange-500"}>
              {checkout ? "پرداخت شده" : "در انتظار پرداخت"}
            </span>
          </p>
          <button
            className="p-3 bg-green-400 rounded-xl my-5 font-bold shadow-gray-300  shadow-lg"
            onClick={() => dispatch(Checkout(selectedItems))}
          >
            تسویه حساب
          </button>
        </aside>
      </div>
    </div>
  );
};

export default CheckoutPage;
