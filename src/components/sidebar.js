import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGripHorizontal, faList,faSearch } from '@fortawesome/free-solid-svg-icons'
import { SearchText , FilteredProducts, FilterSelect} from '../recoil/recoil'
import { useRecoilState, useRecoilValue} from 'recoil'
function Sidebar() {
    
    const [searchValue,setSearchvalue] = useRecoilState(SearchText)
    const products = useRecoilValue(FilteredProducts)
    const [Filter,setFilter] = useRecoilState(FilterSelect)

  return (
    <Container>
        <Main>
            <p className='products'>( {products.length} )products</p>
            <div className='search'>
                <p>search</p>
                <div>
                    <input type={'text'} placeholder='search' onChange={e=>{setSearchvalue(e.target.value);}} value={searchValue}></input>
                </div>
            </div>

            <select value={Filter} onChange={e=>{setFilter(e.target.value)}}>
                <option value=''>show all</option>
                <option value='fruits'>friuts</option>
                <option value='vegetables'>vegetables</option>
                <option value='meals'>meals</option>
                <option value='beverages'>beverages</option>
                <option value='utensils'>utensils</option>
            </select>
        </Main>
    </Container>
  )
}

export default Sidebar
const Container = styled.div`
display:grid;height:100vh;
padding:5rem;

@media screen and (max-width:931px){
    height:max-content;
} 
`
const Main = styled.div`
font-size:18px;
p{font-weight:bolder;}
.products{
    font-size:23px;
}
.view-changer{
    margin:1rem 0; overflow:hidden;display:flex;border-radius:10px;width:80px;height:40px;
}
.view-changer > div:nth-child(1){
    background:rgb(60, 60, 60);
}
.view-changer > div{
    display:grid;place-items:center;
    width:100%;height:100%;padding:.3rem

}
.list,.tile{height:60%;}
.tile{color:white;}

.search input{
    width:13rem;
    height:2rem;
    outline:none;
    padding:1rem ;
    font-size:17px;
    margin:0 0 1rem 0;
}
select{
    width:10rem;
    height:2rem;
    padding:.2rem;
    font-size:17px;
}
.search input:focus,select:focus{
    outline:1px solid cyan;

}
`
