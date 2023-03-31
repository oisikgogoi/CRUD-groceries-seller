import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHome, faShop } from '@fortawesome/free-solid-svg-icons'
function Navbar() {
  return (
    <Container>
        <FontAwesomeIcon className='icon' icon={faShop} />
        <Link to='/add-product'><button>add product</button></Link>
    </Container>
  )
}

export default Navbar

const Container = styled.div`
width:100%;
background:white;
left:0;
display:flex;
height:4rem;
box-shadow:1px 1px 10px 2px rgb(200, 201, 201);
align-items:center;
justify-content:space-between;
  button{
    padding:.8rem 1rem;
    border-radius:1px;
    font-size:15px;
    border:none;
    background:aqua;
    margin-right:5rem;
  }
  .icon{
    margin-left:5rem;
    font-size:30px;
  }
`