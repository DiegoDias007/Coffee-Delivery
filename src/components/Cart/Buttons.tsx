import { useState } from "react";
import BankIcon from "../icons/BankIcon";
import CardIcon from "../icons/CardIcon";
import MoneyIcon from "../icons/MoneyIcon";
import PaymentButton from "./PaymentButton";

function Buttons() {
	const [active, setActive] = useState<string>("");

  return (
		<>
			<PaymentButton 
        active={active === "credit"} handleClick={() => setActive("credit")}
      >
				<CardIcon />
				<span>CARTÃO DE CRÉDITO</span>
			</PaymentButton>
			<PaymentButton 
        active={active === "debit"} handleClick={() => setActive("debit")}
      >
				<BankIcon />
				<span>CARTÃO DE DÉBITO</span>
			</PaymentButton>
			<PaymentButton 
        active={active === "money"} handleClick={() => setActive("money")}
      >
				<MoneyIcon />
				<span>DINHEIRO</span>
			</PaymentButton>
		</>
	);
}

export default Buttons;
