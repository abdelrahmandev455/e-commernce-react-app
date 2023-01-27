import React from 'react';
import {BrowserRouter,  Routes , Route } from "react-router-dom"
import Header from "./components/Header.js"
import Home from "./pages/Home.js"
import Shop from "./pages/Shop.js"
import Cart from "./pages/Cart.js"

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<Header />}>
          <Route index element={<Home />} />
          <Route path="/shop/:search" element={<Shop />}/>
          <Route path="/cart" element={<Cart />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
