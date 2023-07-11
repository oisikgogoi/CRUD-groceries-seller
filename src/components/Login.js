import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
function Login() {
  return (
    <Wrap>
        <Main >
            <div className='signup-logo'> login </div>
            <input placeholder='Enter Your Email'/>
            <input placeholder='Enter Your Password'/>
            <button>login</button>
            <p>Dont have an account ? <Link to='/signup'>sign up</Link></p>
        </Main>
    </Wrap>
  )
}

export default Login 

const Wrap = styled.div`
 display:flex;
 align-items:center;
 justify-content:center;
 width:100%;
 height:100vh;
`

const Main = styled.div`
  height:400px;
  width:350px;
  border-radius:.1rem ;
  box-shadow:2px 2px 20px rgba(119, 119, 119, 0.694);
  display:grid;
  grid-template-rows: 2fr 1fr 1fr 1.5fr;
  padding-bottom: 3rem;


  input{
    width:80%;
    height:2rem;
    font-size:1.05rem;
    padding:0 0 0 1rem;
    margin:auto;
    outline:none;
  }

  .signup-logo{
    width:100%;
    height:5rem;
    background: cyan;
    display:grid;
    place-items:center;
    font-size:1.5rem;
    text-transform:capitalize;
  }

  button{
    height:2rem;
    width:80%;
    margin:auto;
    text-transform:capitalize;
    border:2px solid cyan;
    background:cyan;
    color: black;
    cursor:pointer;
    border-radius:0;
  }
  button:hover{
    background:white;
  }
  p{
    margin:auto;
  }

`