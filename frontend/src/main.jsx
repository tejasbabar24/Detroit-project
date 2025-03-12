import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './components/store/store.js';

import LandingPage from './LandingPage.jsx';
import ProductsPage from './components/Products/ProductsPage';
import DetailedProduct from './components/Products/DetailedProduct.jsx';
import AdminPage from './components/Admin/AdminPage.jsx';
import AuthLayout from './components/AuthLayout.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/category/:name",
    element: <ProductsPage />
  },
  {
    path: "/product/:id",
    element: <DetailedProduct />
  },
  {
    path: "/AdminPanel",
    element: (
      <AuthLayout authentication>
        <AdminPage />
      </AuthLayout>
    )
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={router} />
      </PersistGate>
    </Provider>
  </StrictMode>
);
