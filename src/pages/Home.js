import styled from "styled-components"
import More from "../components/Trends"
import Moves from "../components/Moves"
import Banner from "../components/Banner.js"

function Home() {
  return (
    <>
      <Container>
        <Banner />
        <More />
        <Moves />
      </Container>
    </>
  );
}

const Container = styled.div`
`


export default Home;