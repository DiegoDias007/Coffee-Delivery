import BankIcon from "../icons/BankIcon";
import CardIcon from "../icons/CardIcon";
import MoneyIcon from "../icons/MoneyIcon";
import PaymentButton from "./PaymentButton";

interface ButtonsProps {
  activePayment: string;
  setActivePayment: React.Dispatch<React.SetStateAction<string>>;
}

function Buttons({ activePayment, setActivePayment }: ButtonsProps) {

  return (
		<>
			<PaymentButton 
        active={activePayment === "credit"} handleClick={() => setActivePayment("credit")}
      >
				<CardIcon />
				<span>CRÉDITO</span>
			</PaymentButton>
			<PaymentButton 
        active={activePayment === "debit"} handleClick={() => setActivePayment("debit")}
      >
				<BankIcon />
				<span>DÉBITO</span>
			</PaymentButton>
			<PaymentButton 
        active={activePayment === "money"} handleClick={() => setActivePayment("money")}
      >
				<MoneyIcon />
				<span>DINHEIRO</span>
			</PaymentButton>
		</>
	);
}

export default Buttons;
