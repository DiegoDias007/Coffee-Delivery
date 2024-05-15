import styled from "styled-components";
import Box from "../components/Box";
import HomeGrid from "../components/Home/HomeGrid";
import HomeMainTitle from "../components/Home/HomeMainTitle";
import HomeLogo from "../components/Home/HomeLogo";

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
  return (
    <StyledHome>
      <HeadContainer>
        <Box
          direction="column"
          gap="40px"
        >
          <HomeMainTitle />
          <HomeGrid />
        </Box>
        <HomeLogo />
      </HeadContainer>
      <MainContainer>
        <h1>Nossos Cafés</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla id lorem mi. Quisque luctus mollis lacus, vitae volutpat libero iaculis sed. Praesent felis ipsum, pretium sed commodo hendrerit, varius a quam. Duis eget lobortis massa. Donec et imperdiet magna. Donec eu sapien semper, faucibus sem quis, lacinia dolor. Duis at mattis nisl.

Mauris et fringilla justo. Morbi sit amet sagittis sapien. Ut sit amet suscipit diam. Mauris tristique tortor eu volutpat euismod. Curabitur vel mi ipsum. Sed sed eros id velit sollicitudin interdum. Maecenas nec malesuada diam.

Nam a feugiat ex. Nam iaculis mauris vel odio ultrices, vel rutrum metus accumsan. Aliquam placerat enim quis eleifend ullamcorper. In convallis nec nunc vitae scelerisque. In ut velit nunc. Donec hendrerit ligula quis nulla molestie, ac ullamcorper felis ultrices. Mauris iaculis nisl turpis, a eleifend odio euismod varius. Sed imperdiet in risus sed ultricies. Donec venenatis, lectus eget aliquet aliquam, eros ipsum tincidunt urna, quis pulvinar leo augue in tortor. Mauris mollis sed dui nec interdum. Proin placerat, enim nec laoreet pellentesque, elit lectus tristique sapien, at vehicula dui nunc eget leo. Nulla vulputate consequat odio, sit amet tristique nisi feugiat ut. Proin et libero elit. Aenean fermentum aliquam turpis. Cras feugiat ornare massa sit amet dapibus. Curabitur orci sapien, hendrerit ut metus condimentum, maximus laoreet nisi.

Vestibulum et lacus eget odio euismod auctor bibendum ac odio. Morbi congue augue finibus nulla porta, ac dignissim metus pulvinar. Ut bibendum mattis nunc, id egestas erat. Cras suscipit posuere justo, non semper urna volutpat vel. Sed laoreet ultrices laoreet. Nam congue ex non erat consequat, sed ullamcorper turpis lacinia. In sodales consectetur accumsan. Aenean at consectetur mi.

Etiam sollicitudin, nulla eget fermentum condimentum, orci diam hendrerit nisi, in facilisis justo dui eget dolor. Suspendisse sollicitudin justo at sapien consequat eleifend. Praesent vitae luctus tortor. Aliquam quis tristique purus. Pellentesque vel faucibus dolor. Maecenas sodales, dui id scelerisque dapibus, nunc ex fringilla lectus, at scelerisque libero lacus quis est. Fusce vel nunc eget massa pulvinar faucibus. Donec rutrum convallis tellus, eget fringilla mauris volutpat ut. Morbi aliquam convallis elit, id blandit nisi fringilla in. In hac habitasse platea dictumst. Suspendisse hendrerit interdum velit. Maecenas in convallis eros. Proin a risus eget enim accumsan venenatis. Ut ex nisl, placerat quis egestas in, egestas non diam.

Duis fermentum fringilla nisl ac maximus. Cras iaculis metus eu auctor tristique. Aliquam dictum quam non ex rhoncus, ac hendrerit ipsum aliquam. Sed congue leo mi, vitae tempus lacus mattis eu. Suspendisse eget nisi vel enim feugiat convallis vitae in dolor. Maecenas dignissim libero dui, in vestibulum ex tempus vel. Duis ut nibh vitae diam dictum sagittis.

Vivamus ut ipsum ac libero molestie congue in scelerisque elit. Nullam volutpat erat metus, ut mattis velit faucibus quis. Donec non nunc libero. Duis leo neque, pretium eget magna eget, imperdiet luctus leo. Integer quam turpis, iaculis ac tincidunt vel, porta id diam. Praesent id sem dapibus risus condimentum aliquet blandit in nisl. Donec eu tempus est, nec faucibus erat. Ut vehicula purus laoreet ante tristique viverra et a purus. Mauris commodo tellus vel magna convallis, ac aliquam nibh pharetra.

In sed aliquet lectus. Morbi in massa ut sapien posuere porttitor non aliquam velit. Nullam dapibus, sapien a ornare consectetur, diam eros ullamcorper turpis, non pulvinar dui orci eleifend arcu. Suspendisse venenatis metus elit, sed aliquam enim pharetra a. Duis mollis iaculis velit, at dignissim justo ullamcorper ut. Sed ornare dictum pellentesque. Nam a scelerisque purus, ac dapibus erat. Etiam vel efficitur lacus, tristique pulvinar est. Etiam ut quam id est pellentesque efficitur.

Suspendisse porta sed mauris nec porttitor. Pellentesque vitae mauris semper neque pulvinar gravida eget malesuada nisl. Maecenas efficitur urna et tortor scelerisque, non placerat lorem efficitur. Aliquam elementum enim vitae nulla cursus, et sagittis urna posuere. Vivamus placerat aliquet mauris, eget mollis ipsum lacinia non. Curabitur vestibulum lobortis quam eget laoreet. Pellentesque ornare molestie quam, a tincidunt enim molestie commodo. Mauris et luctus urna, eu bibendum augue. Aliquam erat volutpat.

Aenean nec convallis sapien. Vestibulum ac augue lacus. Phasellus maximus nulla in consequat convallis. Aliquam id mollis metus. Ut nec nunc elementum, euismod nulla consectetur, blandit erat. Ut posuere tincidunt auctor. Suspendisse in sagittis lacus. Mauris aliquet ligula sed suscipit pretium. Maecenas semper lectus nec velit vehicula, nec bibendum neque convallis. Sed eleifend interdum ipsum, id sodales enim ultrices eget. Ut varius sem tincidunt hendrerit lobortis. Suspendisse eleifend pretium odio, at pharetra nunc mattis vel.

Sed vel nulla urna. Suspendisse finibus viverra ligula nec facilisis. Ut tincidunt cursus dui, vitae vehicula leo aliquet vel. In vulputate lacus sollicitudin magna semper, nec mattis urna fermentum. Proin ultrices aliquet elementum. In ultrices luctus libero, quis porta nisi sagittis auctor. Aenean in felis ac mauris aliquam tempus nec eu risus. Aliquam at tristique magna. Vivamus felis lacus, luctus nec nisl id, placerat lobortis est. Donec auctor posuere gravida. Proin mattis dui vel velit porttitor porttitor. Pellentesque lorem nulla, varius id metus nec, finibus aliquet augue. Donec elit urna, rhoncus et magna sed, tincidunt egestas nunc. Quisque et turpis congue, elementum nunc sit amet, dictum purus. Suspendisse eleifend, mi non congue malesuada, massa metus placerat quam, at faucibus nunc sem scelerisque tellus.</p>
      </MainContainer>
    </StyledHome>
  );
}

export default Home;