import styled from "styled-components";
import Box from "../components/Box";
import HomeHeadGrid from "../components/Home/HomeHeadGrid";
import HomeMainTitle from "../components/Home/HomeMainTitle";
import HomeLogo from "../components/Home/HomeLogo";
import HomeMainGrid from "../components/Home/HomeMainGrid";
import { useEffect, useState } from "react";
import { Coffee } from "../@types/coffee.type";
import { getData } from "../data/api";
import HomeCoffeeCard from "../components/Home/HomeCoffeeCard";

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 32px;
  width: 100%;
  flex: 1;
`

const HeadContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1120px;
  min-height: 544px;
  width: 100%;
  gap: 30px;
  margin: 0 auto;

  @media (max-width: 1150px) {
    flex-direction: column;
  }
`

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1120px;
  width: 100%;
  height: 100%;
  align-items: start;
  margin: 0 auto;
`

function Home() {
  const [data, setData] = useState<Coffee[]>();
  
  useEffect(() => {
    async function getTempData() {
      const tempData = await getData();
      setData(tempData);
    }
    getTempData();
  }, [data])
  
  return (
    <StyledHome>
      <HeadContainer>
        <Box
          direction="column"
          gap="40px"
        >
          <HomeMainTitle />
          <HomeHeadGrid />
        </Box>
        <HomeLogo />
      </HeadContainer>
      <MainContainer>
        <h1>Nossos Cafés</h1>
        <HomeMainGrid>
          {data?.map((coffee) => {
            return <HomeCoffeeCard 
                      id={coffee.id}
                      name={coffee.name}
                      description={coffee.description}
                      src={coffee.src}
                      price={coffee.price}
                    />
          })}
        </HomeMainGrid>
      </MainContainer>
    </StyledHome>
  );
}

export default Home;