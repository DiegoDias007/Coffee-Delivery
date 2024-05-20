import CardIcon from "../icons/CardIcon";
import PaymentButton from "./PaymentButton";

function Buttons() {
	return (
		<>
			<PaymentButton>
				<CardIcon />
				<span>CARTÃO DE CRÉDITO</span>
			</PaymentButton>
			<PaymentButton>
				<CardIcon />
				<span>CARTÃO DE DÉBITO</span>
			</PaymentButton>
			<PaymentButton>
				<CardIcon />
				<span>DINHEIRO</span>
			</PaymentButton>
		</>
	);
}

export default Buttons;
