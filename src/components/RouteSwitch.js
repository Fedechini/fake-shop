import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Shop from "./pages/shop/Shop";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import { useEffect, useState } from "react";

// API URL
const url = "https://fakestoreapi.com/products";

const RouteSwitch = () => {
  const [products, setProducts] = useState([]);

  const getCartData = () => {
    const cartData = JSON.parse(localStorage.getItem("cart"));
    return cartData;
  };

  const removeCartItem = (id) => {
    const cart = getCartData();
    const newCart = cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(newCart));
    return newCart;
  };

  // API CALL
  const getProducts = async () => {
    try {
      const response = await fetch(url);
      const productsList = await response.json();
      setProducts(productsList);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/shop"
          element={<Shop products={products} getCartData={getCartData} />}
        />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={
            <Cart getCartData={getCartData} removeCartItem={removeCartItem} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
