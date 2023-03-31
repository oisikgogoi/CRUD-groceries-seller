import React from 'react'
import Navbar from './navbar'
import Sidebar from './sidebar'
import Products from './products'
import styled from 'styled-components'
function Home() {
  return (
    <>
        <Navbar />
        <MainHomeContentsContainer>
            <Sidebar  />
            <Products />
        </MainHomeContentsContainer>
    </>
  )
}

export default Home

const MainHomeContentsContainer = styled.div`
display:grid;grid-template-columns:4fr 10fr;margin:0 2rem;

@media screen and (max-width:931px){
  display:flex;align-items:center;justify-content:center;flex-direction:column;
} 
`