import styled from "styled-components"
import CardItem from "../components/Card"
import {currentState} from "../features/products/productSlice"
import {useSelector} from "react-redux"

function Shop() {
  const data = useSelector(currentState)
  return (
    <>
      <Container>
        {data && data.map((product,index)=>(
          <CardItem key={product.id} id={product.id} name={product.name} img={`../img/${product.img}`} price={product.price}/>
        ))}
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-top:60px;
  display:flex;
  flex-wrap:wrap;
  gap:0.5rem;
  align-items:center;
  justify-content:center;
`

export default Shop;