import { Link } from "react-router-dom";
import NOTFOUND from "../Assets/not-found.gif";
const NotFoundPage = () => {
  return (
    <div className="my-32 m-auto flex flex-col items-center gap-10 justify-center">
      <img className="w-80 h-64" src={NOTFOUND} alt="پیدا نشد" />
      <p>صفحه مورد نظر پیدا نشد!</p>
      <Link
        className="mt-4 block text-center text-indigo-700 duration-300 p-3 rounded-md font-bold hover:bg-indigo-700 hover:text-white"
        to="/products"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
};

export default NotFoundPage;
