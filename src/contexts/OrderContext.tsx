import { createContext, useState } from "react";
import { NewOrderWithPayment } from "../@types/new-order-with-payment";

type OrderContextType = {
  order: NewOrderWithPayment | null;
  setOrder: React.Dispatch<React.SetStateAction<NewOrderWithPayment | null>>
}

export const OrderContext = createContext<OrderContextType>({
  order: null,
  setOrder: () => {},
});

interface OrderProviderProps {
  children: React.ReactNode
}

export function OrderProvider({ children }: OrderProviderProps) {
  const [order, setOrder] = useState<NewOrderWithPayment | null>(null);

  const ProviderValues = {
    order,
    setOrder,
  }

  return (
    <OrderContext.Provider value={ProviderValues}>
      {children}
    </OrderContext.Provider>
  );
}