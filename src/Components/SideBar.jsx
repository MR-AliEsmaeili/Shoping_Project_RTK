import { BiCategory } from "react-icons/bi";
import { createQueryObject } from "../helpers/helper";

const SideBar = ({ setQuery }) => {
  const categoryHandler = (e) => {
    const category = e.target.dataset.name; // استفاده از ویژگی data-name
    setQuery((query) => createQueryObject(query, { category }));
  };

  return (
    <div className="flex flex-col align-baseline w-full md:w-1/4 h-fit bg-gray-100 p-4 py-10 rounded-lg shadow-md ">
      <div className="flex align-baseline place-items-center mb-2">
        <BiCategory size={20} />
        <h2 className="text-lg font-semibold mr-3">دسته بندی ها</h2>
      </div>
      <ul className="mt-4" onClick={categoryHandler}>
        <li
          className="font-normal pb-3 duration-1000  hover:text-blue-600 cursor-pointer"
          data-name="All"
        >
          همه
        </li>
        <li
          className="font-normal pb-3 duration-1000 hover:text-blue-600 cursor-pointer"
          data-name="men's clothing"
        >
          پوشاک مردانه
        </li>
        <li
          className="font-normal pb-3 duration-1000 hover:text-blue-600 cursor-pointer"
          data-name="women's clothing"
        >
          پوشاک زنانه
        </li>
        <li
          className="font-normal pb-3 duration-1000 hover:text-blue-600 cursor-pointer"
          data-name="jewelery"
        >
          جواهرات
        </li>
        <li
          className="font-normal pb-3 duration-1000 hover:text-blue-600 cursor-pointer"
          data-name="electronics"
        >
          لوازم الکترونیکی
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
