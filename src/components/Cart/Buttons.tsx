import BankIcon from "../icons/BankIcon";
import CardIcon from "../icons/CardIcon";
import MoneyIcon from "../icons/MoneyIcon";
import PaymentButton from "./PaymentButton";

function Buttons() {
	return (
		<>
			<PaymentButton>
				<CardIcon />
				<span>CARTÃO DE CRÉDITO</span>
			</PaymentButton>
			<PaymentButton>
				<BankIcon />
				<span>CARTÃO DE DÉBITO</span>
			</PaymentButton>
			<PaymentButton>
				<MoneyIcon />
				<span>DINHEIRO</span>
			</PaymentButton>
		</>
	);
}

export default Buttons;
