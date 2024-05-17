import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function useCart() {
  const { cart, total, addCoffee, removeCoffee } = useContext(CartContext);
  return { cart, total, addCoffee, removeCoffee };
}

export { useCart };