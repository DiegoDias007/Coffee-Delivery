import { createContext, useState } from "react";
import { CoffeeWithCount } from "../@types/coffee-with-count.type";
import { useLocalStorage } from "../hooks/useLocalStorage";

type CartContextType = {
	cart: CoffeeWithCount[];
  total: number;
	addCoffee: (coffee: CoffeeWithCount) => void;
  updateCount: (coffeeId: number, newCount: number) => void;
	removeCoffee: (coffeeId: number) => void;
};

const CartContext = createContext<CartContextType>({
	cart: [],
  total: 0,
	addCoffee: () => {},
  updateCount: () => {},
	removeCoffee: () => {},
});

interface CartProviderProps {
	children: React.ReactNode;
}

function CartProvider({ children }: CartProviderProps) {
	const { value, updateLocalStorage } = useLocalStorage<CoffeeWithCount[]>("cart");
	const [cart, setCart] = useState<CoffeeWithCount[]>(value);
  let total = 0; cart.forEach(c => total += c.count);

	function addCoffee(coffee: CoffeeWithCount) {
		const isCoffeeInCart = cart.find((c) => c.id === coffee.id);
    let newCart: CoffeeWithCount[];
    if (!isCoffeeInCart) {
      newCart = [...cart, coffee];
    } else {
      newCart = cart.map((c) => {
        return c.id === coffee.id ? {...c, count: c.count + coffee.count} : c;
      })
    }
    setCart(newCart);
    updateLocalStorage(newCart);
	}

  function updateCount(coffeeId: number, newCount: number) {
    const newCart = cart.map((c) => {
      return c.id === coffeeId ? {...c, count: newCount} : c;
    })
    setCart(newCart);
		updateLocalStorage(newCart);
  }

	function removeCoffee(coffeeId: number) {
		const newCart = cart.filter((coffee) => coffee.id != coffeeId);
		setCart(newCart);
		updateLocalStorage(newCart);
	}

	const providerValue = {
		cart,
    total,
		addCoffee,
    updateCount,
		removeCoffee,
	};

	return (
		<CartContext.Provider value={providerValue}>
			{children}
		</CartContext.Provider>
	);
}

export { CartContext, CartProvider };
