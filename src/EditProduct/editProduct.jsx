import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { productState } from '../recoil/recoil'
import { useRecoilState,useSetRecoilState } from 'recoil'
import shortid from 'shortid'
function EditProduct() {

    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [picture,setPicture] = useState('')
    const [type,setType] = useState('')
    const navigate = useNavigate()

    const [product,setProduct] = useRecoilState(productState)

    
    let {id} = useParams()

    const submit = e =>{
         let newProduct = {
            name:name,
            price:price,
            img:picture,
            type:type,
            id:id
        }

        const ubdatedProduct = product.map(item=>
            (item.id == id)? newProduct : item
        )
        setProduct(ubdatedProduct)
        navigate('/')
  }

    useEffect(()=>{
        //set products in the form when loaded
        let CurrentProduct = product.find(e => e.id == id)
        setName(CurrentProduct.name)
        setPicture(CurrentProduct.img)
        setPrice(CurrentProduct.price)
        setType(CurrentProduct.type)
    },[])
  return (
    <Container>
        <div>
        <h2>Edit Product</h2>
        <Form>
         <input type={'text'} placeholder='enter product name' onChange={e=>{setName(e.target.value)}}  value={name}  />
         <input type={'text'} placeholder='enter product price' onChange={e=>{setPrice(e.target.value);}}  value={price} />
         <input type={'text'} placeholder='product picture' onChange={e=>{setPicture(e.target.value)}}  value={picture} />
         <select placeholder='enter product type' onChange={e=>{setType(e.target.value)}}  value={type} >
                <option>select product value</option>
                <option value='fruits' >friuts</option>
                <option value='vegetables' >vegetables</option>
                <option value='meals' >meals</option>
                <option value='beverages' >beverages</option>
                <option value='utensils' >utensils</option>
            </select>            
        </Form>
        <button onClick={e=>{submit()}}> Ubdate</button>
        </div>
    </Container>
    )
}

export default EditProduct

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
