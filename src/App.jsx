import { useState } from "react";
import TopNav from "./components/TopNav.jsx";
import { Outlet } from "react-router-dom";

export default function App() {
  let [cart, setCart] = useState([]);

  function updateCart(item) {
    setCart([...item]);
  }
  return (
    <>
      <TopNav cart={cart} />
      <Outlet />
    </>
  );
}
