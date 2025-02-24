import { Navigate, Route, Routes } from "react-router-dom";

import ProductsPage from "./Pages/ProductsPage";
import ProductDetailsPage from "./Pages/ProductDetailsPage";
import CheckoutPage from "./Pages/CheckoutPage";
import NotFoundPage from "./Pages/NotFoundPage";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<Navigate to="/products" replace />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/products/:id" element={<ProductDetailsPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
