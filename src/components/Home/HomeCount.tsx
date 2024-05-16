import styled from "styled-components"
import MinusIcon from "../icons/MinusIcon";
import PlusIcon from "../icons/PlusIcon";

const StyledHomeCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 8px;
  border-radius: 6px;  
  height: 38px;
  background-color: #E6E5E5;
`

interface HomeCountProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}

function HomeCount({ count, setCount }: HomeCountProps) {
  
  function changeCount(type: string) {
    if (type === "minus") {
      count > 1 ? setCount(count -1) : "";
    } else if (type === "plus") {
      count < 9 ? setCount(count + 1) : "";
    } 

  }
  
  return (
    <StyledHomeCount>
        <MinusIcon onClick={() => changeCount("minus")}/>
        <span>{count}</span>
        <PlusIcon onClick={() => changeCount("plus")}/>
    </StyledHomeCount>
  )
}

export default HomeCount;