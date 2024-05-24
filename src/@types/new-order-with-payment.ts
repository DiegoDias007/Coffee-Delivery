import { NewOrder } from "./new-order.type";

export type NewOrderWithPayment = NewOrder & {
  payment: string;
}