import { z } from "zod";

export const newOrderSchema = z.object({
  postalCode: z.string().min(8, { message: "CEP inválido" }),
  street: z.string().min(4, { message: "Rua inválida" }),
  number: z.string().min(1, { message: "Número inválido" }),
  complement: z.string().min(4, { message: "Complemento inválido" }),
  neighborhood: z.string().min(4, { message: "Bairro inválido" }),
  fullName: z.string().min(2, { message: "Nome inválido" }),
});

export type NewOrder = z.infer<typeof newOrderSchema>;