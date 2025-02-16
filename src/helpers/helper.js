const ShortenText = (text) => {
  return text.split(" ").slice(0, 3).join(" ");
};

const searchProducts = (products, search) => {
  if (!search) return products;
  const searchedProducts = products.filter((p) =>
    p.title.toLowerCase().includes(search)
  );

  return searchedProducts;
};
const filterProducts = (products, category) => {
  if (!category) return products;
  const filteredProducts = products.filter((p) => p.category === category);
  return filteredProducts;
};

const createQueryObject = (currentQuery, newQuery) => {
  if (newQuery.category === "All") {
    const { category, ...rest } = currentQuery;
    return rest;
  }
  if (newQuery.search === "") {
    const { search, ...rest } = currentQuery;
    return rest;
  }
  return { ...currentQuery, ...newQuery };
};

const getinitialQuery = (searchParams) => {
  const Query = {};
  const category = searchParams.get("category");
  const search = searchParams.get("search");
  if (category) Query.category = category;
  if (search) Query.search = search;
  return Query;
};

const sumProducts = (products) => {
  const itemCounter = products.reduce((acc, cur) => acc + cur.quantity, 0);
  const total = products
    .reduce((acc, cur) => acc + cur.price * cur.quantity, 0)
    .toFixed(2);
  return { itemCounter, total };
};
const productsQuantity = (state, id) => {
  const index = state.selectedItems.findIndex((item) => item.id === id);

  if (index === -1) {
    return 0;
  } else {
    return state.selectedItems[index].quantity;
  }
};
export {
  ShortenText,
  searchProducts,
  filterProducts,
  createQueryObject,
  getinitialQuery,
  sumProducts,
  productsQuantity,
};
