import styled from "styled-components"
import CartItem from "../components/CartItem"
import {useSelector,useDispatch} from "react-redux"
import {
currentState,
increaseQua,
decreaseQua,
deleteProduct,
deleteAllProducts,
} 
from "../features/cart/cartSlice"

function Cart() {
  const data = useSelector(currentState)
  const cartData = data.data
  const dispatch = useDispatch()
  const deleteAll = ()=>{
    dispatch(deleteAllProducts())
  }
  return (
    <>
      <Container>
      
        {cartData && cartData.map(product =>(
          <CartItem product={product} />
        ))}
        
        <Total>
          <TotalPrice>
            <span>Price: </span>
            {data.totalPrice}
          </TotalPrice>
          <TotalQuantity>
            <span>Quantity: </span>
            {data.totalQuantity}
          </TotalQuantity>
          <button onClick={deleteAll}>Delete All</button>
        </Total>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-top:50px;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
  gap:1rem;
  padding:10px;
`

const Total = styled.div`
  background:#f2f2f2;
  padding:5px;
  display:flex;
  align-items:center;
  justify-content:space-between;
  width:400px;
  button{
    border:1px solid black;
    border-radius:25px;
    padding:0.5rem 1rem;
    background:white;
    max-width:150px;
    display:flex;
    align-items:center;
    :hover{
      background:#d95858;
      transition:.5s;
    }
  }
`
const TotalPrice = styled.div`
  border:1px solid black;
  border-radius:3px;
  padding:0.5rem 1rem;
  background:white;
  max-width:150px;
  display:flex;
  align-items:center;
`

const TotalQuantity = styled(TotalPrice)``

export default Cart;