import { Routes, Route } from "react-router-dom";
import { Suspense, lazy, memo } from "react";
const Error = lazy(() => import("../views/Error"));
const Index = lazy(() => import("../views/Index"));
const Fashion = lazy(() => import('../views/Fashion'));
const Accessory = lazy(() => import("../views/Accessory"))
const Digital = lazy(() => import("../views/Digital"))
const Cart = lazy(() => import("../views/Cart"))
const ProductsDetail = lazy(() => import("../components/products/ProductsDetail"))


const Router = (): JSX.Element => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="*" element={<Error />} />
        <Route path="/" element={<Index />} />
        <Route path="/product/:id" element={<ProductsDetail />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/accessory" element={<Accessory />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Suspense>
  );
};

export default memo(Router);
