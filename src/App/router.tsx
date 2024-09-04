import { createBrowserRouter, createRoutesFromElements, Navigate, Route } from 'react-router-dom';
import MainLayout from './components/layouts/MainLayout';
import HomePage from './pages/HomePage';
import ProductDetails from './pages/ProductDetails';
import NotFound from './pages/NotFound';
import CartPage from './pages/CartPage';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route index element={<HomePage />} />
      <Route path="product-details/:id" element={<ProductDetails />} />
      <Route path="cart" element={<CartPage />} />

      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate replace to="/404" />} />
    </Route>,
  ),
);
