import { ImSearch } from "react-icons/im";
import { createQueryObject } from "../helpers/helper";

const SearchBox = ({ search, setSearch, setQuery }) => {
  const searchHandler = () => {
    setQuery((query) => createQueryObject(query, { search }));
  };

  return (
    <div className="mt-24 flex align-baseline">
      <input
        className="p-3 rounded-lg shadow-sm shadow-gray-400 outline-none"
        type="text"
        placeholder="جستجو محصول ..."
        value={search}
        onChange={(e) => setSearch(e.target.value.toLowerCase().trim())}
      />
      <button
        className="p-3 mx-3 shadow-sm shadow-gray-400 rounded-lg bg-indigo-700"
        onClick={searchHandler}
      >
        <ImSearch color="white" />
      </button>
    </div>
  );
};

export default SearchBox;
