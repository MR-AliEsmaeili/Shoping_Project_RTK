import Card from "../Components/Card";
// import { useProducts } from "../Context/ProductProvider";
import Loader from "../Components/Loader";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  filterProducts,
  getinitialQuery,
  searchProducts,
} from "../helpers/helper";
import SideBar from "../Components/SideBar";
import SearchBox from "../Components/SearchBox";
import { fetchProducts } from "../Features/productsSlice";
import { useDispatch, useSelector } from "react-redux";

const ProductsPage = () => {
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});

  const { products, loading } = useSelector((state) => state.Products);
  const dispatch = useDispatch();
  console.log(products);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  useEffect(() => {
    setDisplayed(products);
    setSearch(query.search || "");

    setQuery(getinitialQuery(searchParams));
  }, [products]);

  useEffect(() => {
    setSearchParams(query);
    let finalProducts = searchProducts(products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className="flex flex-col md:flex-row mt-10 gap-6">
        {loading ? (
          <Loader />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 flex-1">
            {displayed.map((p) => (
              <Card key={p.id} data={p}></Card>
            ))}
          </div>
        )}
        <SideBar setQuery={setQuery} query={query} />
      </div>
    </>
  );
};

export default ProductsPage;
