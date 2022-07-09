import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Shop from "./Shop";
import About from "./About";
import { useEffect, useState } from "react";
import Cart from "./Cart";
import { app, database } from "./firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

// API URL
const url = "https://fakestoreapi.com/products";

const RouteSwitch = () => {
  const [products, setProducts] = useState([]);

  //  CREATE DATA COLLECTION IN FIREBASE
  const cartData = collection(database, "cart");

  // ADD TO CART FUNCITON
  const addToCart = (product) => {
    // add item to cart collection in database
    addDoc(cartData, {
      item: product,
    });
  };

  // REMOVE ITEM FROM CART
  const removeCartItem = (id) => {
    const itemToRemove = doc(database, "cart", id);
    deleteDoc(itemToRemove);
  };

  // READ FIREBASE DATA
  const getCartData = async () => {
    const response = await getDocs(cartData);
    const data = response.docs.map((item) => {
      return { ...item.data(), id: item.id };
    });
    return data;
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
        <Route path="/" element={<App />} />
        <Route
          path="/shop"
          element={<Shop products={products} addToCart={addToCart} />}
        />
        <Route path="/about" element={<About />} />
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
