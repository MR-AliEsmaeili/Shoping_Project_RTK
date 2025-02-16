import Card from "../Components/Card";
import { useProducts } from "../Context/ProductProvider";
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

const ProductsPage = () => {
  const [search, setSearch] = useState("");
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});

  const Products = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    setDisplayed(Products);
    setSearch(query.search || "");
    // const Query =
    setQuery(getinitialQuery(searchParams));
  }, [Products]);

  useEffect(() => {
    setSearchParams(query);
    let finalProducts = searchProducts(Products, query.search);
    finalProducts = filterProducts(finalProducts, query.category);
    setDisplayed(finalProducts);
  }, [query]);

  return (
    <>
      <SearchBox search={search} setSearch={setSearch} setQuery={setQuery} />
      <div className="flex flex-col md:flex-row mt-10 gap-6">
        {Products.length === 0 ? (
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
