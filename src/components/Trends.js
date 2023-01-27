import styled from "styled-components"
import {Link} from "react-router-dom"
function More() {
  const data = [
    {name:"Women",img:"women.jpg"},
    {name:"Men",img:"men.jpg"},
    {name:"Kids",img:"kids.jpg"}
  ]
  return (
    <>
      <Container>
        <Header>
          <p>See More </p>
        </Header>
        <Wrap>
          {data.map((el,index)=>(
          <Section>
            <SectionImg src={`/img/${el.img}`} />
            <ButtonWrap>
              <button>
                <Link to={`/shop/filter@${el.name}`}>
                  {el.name}
                </Link>
              </button>
            </ButtonWrap>
          </Section>
          ))}
        </Wrap>
      </Container>
    </>
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

export default More