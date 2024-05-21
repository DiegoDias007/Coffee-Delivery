import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function useCart() {
  const { cart, total, addCoffee, updateCount , removeCoffee } = useContext(CartContext);
  return { cart, total, addCoffee, updateCount , removeCoffee };
}

export { useCart };