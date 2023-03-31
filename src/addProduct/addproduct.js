import React, {useState} from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { productState } from '../recoil/recoil'
import {useSetRecoilState} from 'recoil'
import shortid from 'shortid'

function Addproduct() {
    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [picture,setPicture] = useState('')
    const [type,setType] = useState('')
    const navigate = useNavigate()
    const Product_State = useSetRecoilState(productState)

    
    const submit = e =>{
        const id = shortid.generate()
        const newProduct={
            name:name,
            price:price,
            img:picture,
            type:type,
            id:id
        }

        console.log(newProduct.id)
        Product_State((oldProduct)=>[newProduct,...oldProduct])
        navigate('/')
    }

    const caseCheck = e =>{
        if(price.trim().length < 1 || name.trim().length < 1 || picture.trim().length < 1 || type.trim().length<1){
            alert('form not filled as expected')
        }

        else {
            if(isNaN(price)){
                alert('enter a number as price')
                setPrice('')
            }
            else{
                submit() 
            }
        }
    }
  return (
    <Container>
        <div>
        <h2>Add Product</h2>
        <Form>
            <input type={'text'} placeholder='enter product name' onChange={e=>{setName(e.target.value)}} />
            <input type={'text'} placeholder='enter product price' value={price} onChange={e=>{setPrice(e.target.value);}}/>
            <input type={'text'} placeholder='product picture' onChange={e=>{setPicture(e.target.value)}}/>
            <select placeholder='enter product type' onChange={e=>{setType(e.target.value)}}>
                <option>select product value</option>
                <option value='fruits' >friuts</option>
                <option value='vegetables' >vegetables</option>
                <option value='meals' >meals</option>
                <option value='beverages' >beverages</option>
                <option value='utensils' >utensils</option>
            </select>            
        </Form>
        <button onClick={e=>{caseCheck();}}> add product</button>
        </div>
    </Container>
    )
}

export default Addproduct

const Container = styled.div`
>div{
    display:flex;
    align-items:flex-start;
    justify-content:center;
    flex-direction:column;
    gap:2rem;
}

display:flex;
align-items:center;
justify-content:center;
width:100%;
height:22rem;
box-shadow:1px 1px 20px 6px rgb(200, 201, 201);
button{
    padding:.8rem 1rem;
    border-radius:1px;
    font-size:15px;
    border:none;
    background:aqua;
    margin-right:5rem;
  }

select{
    height:2rem;
    font-size:14px;
    width:15rem;
}  

input{
    width:15rem;
    height:2rem;
    outline:none;
    padding:1rem;
}

.search input:focus,select:focus{
    outline:1px solid cyan;

}
`
const Form = styled.div`
display:grid;row-gap:1rem;
`
