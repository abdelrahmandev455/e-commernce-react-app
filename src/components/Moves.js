import styled from "styled-components"
import {Link} from "react-router-dom"

function Moves() {
  const data = [
    {name:"Learn More",img:"Move1.jpg"},
    {name:"Try it",img:"Move2.jpg"}
  ]
  return (
   <Container>
      <Header>
        <p>New Year, New Move</p>
      </Header>
      <Wrap>
        {data.map((el,index)=>(
        <Section>
          <SectionImg src={`/img/${el.img}`} />
          <SectionDes>
            <h2>lorem ipsum sit lorem ipsum <br/> sitlorem.</h2>
          </SectionDes>
          <ButtonWrap>
            <button>
              <Link to="/">
                {el.name}
              </Link>
            </button>
          </ButtonWrap>
        </Section>
        ))}
      </Wrap>
    </Container>
  );
}


const Container = styled.div`
  padding:20px;
  display:flex;
  justify-content:center;
  flex-direction:column;
`

const Header = styled.div`
  width:100%;
  p{
    font-size:25px;
  }
`

const Wrap = styled.div`
  display:flex;
  align-items:center;
  flex-wrap:wrap;
  gap:1rem;
  justify-content:space-evenly;
`

const Section = styled.div`
  position:relative;
  background:white;
  max-width:300px;
  max-height:450px;
  border:2px solid gray;
  border-radius:5px;
  display:flex;
  flex-direction:column;
  align-items:center;
`

const SectionImg = styled.img`
  width:100%;
  height:100%;
  border-radius:2px;
  background-size:cover;
  background-position:center;
`

const ButtonWrap = styled.div`
  position:absolute;
  left:20px;
  bottom:20px;
  width:100%;
  button{
    border:1px solid black;
    border-radius:25px;
    padding:0.5rem 1rem;
    background:black;
    max-width:150px;
    margin:20px;
    a{
      color:white;
    }
  }
`

const SectionDes = styled.div`
  position:absolute;
  left:20px;
  top:80px;
  font-weight:600;
  color:white;
  width:100%;
`
export default Moves;