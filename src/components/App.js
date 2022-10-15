import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import { useEffect, useState } from "react";

// API URL
const url = "https://fakestoreapi.com/products";

const App = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [uniqueItems, setUniqueItems] = useState([]);

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

  const getCartData = () => {
    setCart(JSON.parse(localStorage.getItem("cart")));
  };

  const removeCartItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // ADD TO CART FUNCITON
  const addToCart = (item) => {
    setCart([...cart, item]);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const getItemQty = (id) => {
    const itemQty = cart.filter((item) => item.id === id);
    return itemQty.length;
  };

  // REMOVE ONE ITEM IN CART
  const handleDeleteItem = (index) => {
    setCart([...cart.slice(0, index), ...cart.slice(index + 1, cart.length)]);
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  useEffect(() => {
    getProducts();
    getCartData();
  }, []);

  return (
    <div className="app-container">
      <Header cart={cart} />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/shop"
          element={
            <Shop
              cart={cart}
              setCart={setCart}
              products={products}
              getCartData={getCartData}
              addToCart={addToCart}
            />
          }
        />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/cart"
          element={
            <Cart
              cart={cart}
              setCart={setCart}
              getCartData={getCartData}
              addToCart={addToCart}
              removeCartItem={removeCartItem}
              getItemQty={getItemQty}
              handleDeleteItem={handleDeleteItem}
              uniqueItems={uniqueItems}
              setUniqueItems={setUniqueItems}
            />
          }
        />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
