import React from 'react'
import Product from './sub-components/product'
import styled from 'styled-components'
import {FilteredProducts, productState} from '../recoil/recoil'
import {useRecoilValue,useRecoilState} from 'recoil'
function Products() {


    const Products = useRecoilValue(FilteredProducts)
    const [Item,setItem] = useRecoilState(productState)
    function deleteItem(id){
        setItem(Item.filter(productId => productId.id != id ))
    }
  return (
    <Container>
        {
            Products.map(e=>{
                return(
                    <Product className='product' img={e.img} name={e.name} price={e.price} key={e.id} func={()=>deleteItem(e.id)} IDprops={e.id}/>
                )
            })
        }
    </Container>
  )
}

export default Products
const Container = styled.div`
display:grid;place-items:center;column-gap:1rem;grid-template-columns:repeat(3,270px);row-gap:1rem;margin-top:3rem;width:100%;
@media screen and (max-width:1223px){
    grid-template-columns:repeat(2,270px);
} 
@media screen and (max-width:931px){
    place-items:center;grid-template-columns:repeat(3,33%);width:100%;
 } 

 @media screen and (max-width:775px){
    place-items:center;grid-template-columns:repeat(2,1fr);width:100%;
    column-gap:5px;
 } 

 @media screen and (max-width:450px){
    grid-template-columns:1fr;
  } 
`