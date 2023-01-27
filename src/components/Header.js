import styled from "styled-components"
import {Outlet,Link} from "react-router-dom"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ShopOutlinedIcon from '@mui/icons-material/ShopOutlined';

function Header() {
  return (
    <>
      <Container>
        <Link to="/">
          <Logo src="/img/Logo.svg" alt="logo" />
        </Link>
        <Menu>
           <Link to="/cart">
            <CartIcon />
           </Link>
           <Link to="/shop/all">
            <ShopIcon />
           </Link>
        </Menu>
      </Container>
      <Outlet/>
    </>
  );
}

const Container = styled.div`
  min-height:40px;
  border-bottom:1px solid black;
  position:fixed;
  top:0;
  left:0;
  right:0;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 20px;
  background:white;
  z-index:100;
`

const Logo = styled.img`
  width:3rem;
`

const Menu = styled.div`
  display:flex;
  align-items:center;
  justify-content:flex-end;
  flex:1;
  gap:1rem;
  a{
    font-weight:600;
    text-transform:captalize;
    font-size:20px;
  }
`

const CartIcon = styled(ShoppingCartOutlinedIcon)``
const ShopIcon = styled(ShopOutlinedIcon)``

export default Header;