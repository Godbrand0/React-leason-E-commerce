import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import CardPage from "./pages/CardPage";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { store } from "./App/Store";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<ProductDetails />} />
          <Route path="/cart" element={<CardPage />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
