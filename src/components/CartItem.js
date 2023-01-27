import styled from "styled-components"
import {useDispatch} from "react-redux"
import {
currentState,
increaseQua,
decreaseQua,
deleteProduct,
} 
from "../features/cart/cartSlice"

function CartItem({product}) {
  const dispatch = useDispatch()
  const increaseQuantity = ()=>{
    dispatch(increaseQua({
      id:product.id,
      price:product.price
    }))
  }
  const decreaseQuantity = ()=>{
    dispatch(decreaseQua({
      id:product.id,
      price:product.price
    }))
  }
  const deleteCurrentProduct = ()=>{
    dispatch(deleteProduct({
      id:product.id,
      price:product.price
    }))
  }
  return(
    <Section>
      <Img>
        <ProductImg src={`../img/${product.img}`} />
      </Img>
      <Info>
        <Descripton>
          <Text>
          <p>{product.name}</p>
          <span>{product.price}$</span>
          </Text>
          <Quantity>
            <button onClick={increaseQuantity}>+</button>
            <input value={product.quantity} type="number" readOnly />
            <button onClick={decreaseQuantity}>-</button>
          </Quantity>
        </Descripton>
        <ButtonGroup>
          <button onClick={deleteCurrentProduct}>Delete</button>
        </ButtonGroup>
      </Info>
    </Section>
  );
}

const Section = styled.div`
  background:#f2f2f2;
  display:flex;
  padding:5px;
  gap:1rem;
  width:400px;
  align-items:center;
`

const Img = styled.div`
`

const ProductImg = styled.img`
  max-width:170px;
  max-height:250px;
`

const Info = styled.div`
  display:flex;
  width:100%;
  height:100%;
  flex-direction:column;
  align-items:center;
`

const Descripton = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  gap:0.5rem;
  padding:5px;
  p{
    font-weight:400;
    margin-top:10px;
  }
  span{
    font-weight:100;
  }
`
const Text = styled.div``

const Quantity = styled.div`
  padding:2px;
  display:flex;
  align-items:center;
  justify-content:center;
  button,input{
    width:2rem;
    height:2rem;
    background:#000000;
    color:white;
    border:none;
  }
  input{
    background:white;
    color:black;
    outline:none;
  }
`

const ButtonGroup = styled.div`
  width:100%;
  display:flex;
  align-items:center;
  justify-content:space-evenly;
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

export default CartItem;