import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";
import About from "./About";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import { app, database } from "./firebaseConfig";
import { collection, addDoc, getDoc } from "firebase/firestore";

// API URL
const url = "https://fakestoreapi.com/products";

const RouteSwitch = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  // create data collection in firebase
  const cartData = collection(database, "cart");

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

  // ADD TO CART FUNCITON
  const addToCart = (product) => {
    setCart((current) => [...current, product]);
    addDoc(cartData, ...cart);
  };

  console.log(...cart);

  // api call when page renders
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="/shop"
          element={<Shop products={products} addToCart={addToCart} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;
