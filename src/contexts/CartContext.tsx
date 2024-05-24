import React, { createContext, useState, useEffect } from "react";
import { CoffeeWithCount } from "../@types/coffee-with-count.type";
import { useLocalStorage } from "../hooks/useLocalStorage";

type CartContextType = {
  cart: CoffeeWithCount[];
  total: number;
  addCoffee: (coffee: CoffeeWithCount) => void;
  updateCount: (coffeeId: number, newCount: number) => void;
  removeCoffee: (coffeeId: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType>({
  cart: [],
  total: 0,
  addCoffee: () => {},
  updateCount: () => {},
  removeCoffee: () => {},
  clearCart: () => {},
});

interface CartProviderProps {
  children: React.ReactNode;
}

function CartProvider({ children }: CartProviderProps) {
  const { value, updateLocalStorage } = useLocalStorage<CoffeeWithCount[]>("cart");
  const [cart, setCart] = useState<CoffeeWithCount[]>(value || []);

  useEffect(() => {
    updateLocalStorage(cart);
  }, [cart, updateLocalStorage]);

  const addCoffee = (coffee: CoffeeWithCount) => {
    const isCoffeeInCart = cart.find((c) => c.id === coffee.id);
    if (!isCoffeeInCart) {
      setCart([...cart, coffee]);
    } else {
      const newCart = cart.map((c) =>
        c.id === coffee.id ? { ...c, count: c.count + coffee.count } : c
    );
    setCart(newCart);
  }
};

const calculateTotal = () => {
  return cart.reduce((acc, coffee) => acc + coffee.count, 0);
};
  const updateCount = (coffeeId: number, newCount: number) => {
    const newCart = cart.map((c) =>
      c.id === coffeeId ? { ...c, count: newCount } : c
    );
    setCart(newCart);
  };

  const removeCoffee = (coffeeId: number) => {
    const newCart = cart.filter((coffee) => coffee.id !== coffeeId);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const providerValue = {
    cart,
    total: calculateTotal(),
    addCoffee,
    updateCount,
    removeCoffee,
    clearCart,
  };

  return (
    <CartContext.Provider value={providerValue}>
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
