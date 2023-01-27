import styled from "styled-components"
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart"
import {useDispatch} from "react-redux"
import {addTo} from "../features/cart/cartSlice"

function CardItem({id,name,img,price}) {
  const dispatch = useDispatch()
  const addToCart = ()=>{
    dispatch(addTo({
      id,
      name,
      price,
      img
    }))
  }
  return (
    <Card>
      <ProductImg src={img} />
      <ProductDescription>
        <p>{name}</p>
        <span> Lorem ipsum dolor sit amet </span>
        <Price><span>{price}</span>$</Price>
      </ProductDescription>
      <Buttons>
        <button onClick={addToCart}>
          <AddToCartIcon />
          Add
        </button>
      </Buttons>
    </Card>
  );
}

const Card = styled.div`
  max-width:180px;
  min-height:280px;
  padding:10px;
  background:white;
  background:#f2f2f2;
  border-radius:5px;
  display:flex;
  flex-direction:column;
  align-items:center;
`

const ProductImg = styled.img`
  max-width:170px;
  border-radius:2px;
  background-size:cover;
  background-position:center;
`

const ProductDescription = styled.div`
  width:100%;
  p{
    font-weight:400;
    margin-top:10px;
  }
  span{
    font-weight:100;
  }
`

const Buttons = styled.div`
  display:flex;
  justify-content:space-between;
  width:100%;
  button{
    border:1px solid black;
    border-radius:25px;
    padding:0.5rem 1rem;
    background:white;
    max-width:150px;
    display:flex;
    align-items:center;
    :hover{
      background:black;
      color:white;
      transition:.5s;
    }
  }
`
const Price = styled.div`
  span{
    font-weight:500;
  }
`
const AddToCartIcon = styled(AddShoppingCartIcon)``

export default CardItem;