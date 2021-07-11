import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Container = styled.div`
  background: #3f51b5;
  width: 100%;
  height: 70px;
  position: relative;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 20%),
    0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%);

  nav {
    display: flex;
    align-items: center;
    max-width: 1120px;
    margin: 0 auto;
    padding: 20px;
  }
  .cartbasket {
    margin-right: 15px;
  }
  .link_nav {
    padding: 8px 15px;
    text-decoration: none;
    color: #fff;
  }

  .link_nav + .link_nav {
    margin-left: 20px;
  }
`

export const Cart = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  position: absolute;
  top: 22px;
  right: 0;
  color: #fff;
  background: #f1ae5e;
  padding: 7px 12px;
  border-radius: 10px 0 0 10px;
  font-size: 13px;

  span {
    font-weight: bold;
    padding-left: 10px;
  }
`
