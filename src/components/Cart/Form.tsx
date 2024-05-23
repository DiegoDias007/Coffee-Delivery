import styled from "styled-components";
import Input from "./Input";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

const FormGrid = styled.form`
  display: grid;
  grid-template-columns: minmax(200px, 1fr) minmax(350px, 1fr);
  gap: 10px;
  width: 100%;

  @media (max-width: 1120px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const ErrorText = styled.span`
  color: #de1437;
  margin-top: 4px;
  font-size: 12px;
`;

const newOrderSchema = z.object({
  postalCode: z.string().min(8, { message: "CEP inválido" }),
  street: z.string().min(4, { message: "Rua inválida" }),
  number: z.string().min(1, { message: "Número inválido" }),
  complement: z.string().min(4, { message: "Complemento inválido" }),
  neighborhood: z.string().min(4, { message: "Bairro inválido" }),
  fullName: z.string().min(2, { message: "Nome inválido" }),
});

type NewOrder = z.infer<typeof newOrderSchema>;

interface FormProps {
  activePayment: string;
}

function Form({ activePayment }: FormProps) {
  const { register, handleSubmit, formState: { errors } } = useForm<NewOrder>({
    resolver: zodResolver(newOrderSchema),
  });

  function onSubmit(data: NewOrder) {
    if (!activePayment) {
      toast.error("Nenhum método de pagamento selecionado.");
      return;
    } 
    
    const newOrder = {
      ...data,
      payment: activePayment
    }
    console.log(newOrder);
  }

  return (
    <FormGrid
      id="order"
      onSubmit={handleSubmit(onSubmit)}
    >
      <FormGroup>
        <Input 
          placeholder="CEP"
          type="text"
          {...register("postalCode")} 
        />
        {errors.postalCode && <ErrorText>{errors.postalCode.message}</ErrorText>}
      </FormGroup>
      <FormGroup>
        <Input 
          placeholder="Rua"
          type="text"
          {...register("street")}
        />
        {errors.street && <ErrorText>{errors.street.message}</ErrorText>}
      </FormGroup>
      <FormGroup>
        <Input 
          placeholder="Número"
          type="text"
          {...register("number")}
        />
        {errors.number && <ErrorText>{errors.number.message}</ErrorText>}
      </FormGroup>
      <FormGroup>
        <Input 
          placeholder="Complemento"
          type="text"
          {...register("complement")}
        />
        {errors.complement && <ErrorText>{errors.complement.message}</ErrorText>}
      </FormGroup>
      <FormGroup>
        <Input 
          placeholder="Bairro"
          type="text"
          {...register("neighborhood")}
        />
        {errors.neighborhood && <ErrorText>{errors.neighborhood.message}</ErrorText>}
      </FormGroup>
      <FormGroup>
        <Input 
          placeholder="Nome completo"
          type="text"
          {...register("fullName")}
        />
        {errors.fullName && <ErrorText>{errors.fullName.message}</ErrorText>}
      </FormGroup>
    </FormGrid>
  );
}

export default Form;
