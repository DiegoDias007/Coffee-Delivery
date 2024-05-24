import styled from "styled-components";
import Box from "../Reusable/Box";
import OrderLocationIcon from "../icons/OrderLocationIcon.tsx";
import ClockIcon from "../icons/ClockIcon.tsx";
import CashIcon from "../icons/CashIcon.tsx";
import { useOrder } from "../../hooks/useOrder.tsx";

const OuterCard = styled.div`
  padding: 1px;
  border-radius: 6px 36px; 
  background: linear-gradient(102.89deg, #DBAC2C 2.61%, #8047F8 98.76%);
  overflow: hidden;
`;

const InnerCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 25px;
  border-radius: 6px 36px; 
  padding: 40px;
  background-color: white;
`;

const TextBold = styled.span`
  font-size: 16px;
  font-weight: 700;
  line-height: 20.8px;
`

function OrderCard() {
  const { order } = useOrder();
  const payment = order?.payment;
  const showPayment = payment === "credit" ? "Cartão de Crédito" : payment === "debit" ?
                    "Cartão de Débito" : "Dinheiro"
  
  return (
    <OuterCard>
      <InnerCard>
        <Box direction="row" gap="10px" align="center">
          <OrderLocationIcon />
          <span>Entrega em <TextBold>{order?.street}, {order?.number}</TextBold></span>
        </Box>
        <Box direction="row" gap="10px" align="center">
          <ClockIcon />
          <Box direction="column" gap="" align="start">
            <span>Previsão de entrega</span>
            <TextBold>20 min - 30 min </TextBold>
          </Box>
        </Box>
        <Box direction="row" gap="10px" align="center">
          <CashIcon />
          <Box direction="column" gap="" align="start">
            <span>Pagamento na entrega</span>
            <TextBold>
              {showPayment}
            </TextBold>
          </Box>
        </Box>
      </InnerCard>
    </OuterCard>
  );
}

export default OrderCard;
