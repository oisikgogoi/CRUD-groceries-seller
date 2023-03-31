import React from 'react'
import styled from 'styled-components'
import '../../css/index.css'
import {useSetRecoilState} from 'recoil'
import { Link } from 'react-router-dom'
function Product({img,name,price,func,IDprops}) {
  return (
    <Container>
      <Link to={`/edit-product/${IDprops}`} className='edit'>edit</Link>
      <a className='delete' onClick={func}>delete</a>
      <a>{img}</a>
      <h2>{name}</h2>
      <p>price : {price}</p>
    </Container>
  )
}

export default Product

const Container = styled.div`

@media screen and (max-width:931px){
  width:100%;
} 
@media screen and (max-width:775px){
  width:100%;
} 

overflow:hidden;
position:relative;
width:250px;height:200px;display:flex;
align-items:center;justify-content:center;flex-direction:column;border-radius:1rem 1rem 0 0;
a{font-size:50px}
h2{margin-bottom:2rem;}
cursor:pointer;
:hover{
  box-shadow:1px 1px 40px 7px rgb(179, 179, 179);
  .edit{animation : edit_button_animation .5s linear;}
  .edit{left:0}

  .delete{animation : delete_button_animation .5s linear;}
  .delete{right:0}
}
.edit,.delete{
  position:absolute;
  width:5rem;
  height:2.5rem;
  font-size:18px;
  text-align:center;
  padding:.3rem;
}

.edit{
  top:0;
  left:-120px;
  background:yellow;
  border-bottom-right-radius:5rem;
}
.delete{
  background:red;
  top:0;
  right:-120px;
  color:white;
  border-bottom-left-radius:5rem;
}
`