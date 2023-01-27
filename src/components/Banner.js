import styled from "styled-components"
import {Link,Outlet} from "react-router-dom"

function Banner() {
  return (
    <>
      <Container>
        <ItemText>
          <h2>Feel Fit.</h2>
        </ItemText>
        <ButtonWrap>
          <button>
            <Link to="/shop">
              Shop now
            </Link>
          </button>
        </ButtonWrap>
      </Container>
      <Outlet />
    </>
  );
}

const Container = styled.div`
  display:flex;
  flex-direction:column;
  align-items:center;
  min-height:25vh;
  background:url("/img/banner.jpg");
  background-size:cover;
  background-position:center;
  margin-top:40px;
  div{
    width:100%
  }
  @media (max-width:786px){
    height:60vh;
  }
`

const ButtonWrap = styled.div`
  button{
    border:1px solid black;
    border-radius:25px;
    padding:0.5rem 1rem;
    background:white;
    max-width:150px;
    margin:20px;
    a{
      color:black;
    }
  }
`

const ItemText = styled.div`
  flex:1;
  display:flex;
  align-items:flex-end;
  h2{
    position:relative;
    font-size:40px;
    font-weight:600;
    margin-left:20px;
    color:white;
  }
`

export default Banner;