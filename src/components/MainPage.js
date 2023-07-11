import React from 'react'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPencil, faSearch , faPlus} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import Note from './note'
function MainPage() {
  const arr = [12,12,34,4,43,54,534,546,56,567,67,67,67,867,867,867,6,6]
  return (
    <>
    <NavBar>
            <h3 className='logo'>E-Diary <FontAwesomeIcon className='logo-icon' icon={faPencil} /></h3> 

        <div className='main-nav-right'>
            <div className='search'>
                <input />
                <Link to={''}>
                    <FontAwesomeIcon className="search-icon" icon={faSearch} />
                </Link>
            </div>

            <button className='create-button'>create <FontAwesomeIcon className='plus-icon' icon={faPlus} /></button>
        </div>
    </NavBar>


      <Main>
        {
          arr.map(()=>{
            return (
            <Note 
            title={'yoho'}
            paragraph={'hjfk fkgh fk gkfkgdfkdf gkdgfgkdfgk dfhgkdfg dfkgldf gdfklg dfkgdf gdfgdf gdfkg dfgdfkg dfghdfg dfgkdfh gf gdfghdfk gdhfkghdf gdfkjgh kghdfkghdf kghdfkg dfkghkdf gdfkghdf khfgk dfgkdfhgk dfgkdf gkkgdfklgkf dgkg fgkdf gkfgfgkdfgdfgkl dfsklghdfsggk dfkgkfg dfdfgkf gk k dfkdfkgk fkdfg kdfgkdf gkdfgkdfkfg kf hgkdf gkf hgkhfgk hfkg kf k'}
            />
            )
          })
        }
        
  
      </Main>
    </>
  )
}

export default MainPage
const NavBar = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding:1rem;
    box-shadow:1px 1px 10px 3px rgba(173, 173, 173, 0.733);
    position:fixed;
    width:100vw;
    background:white;

      .main-nav-right{
        display:flex;
        align-items:center;
        flex-direction:row;
      }

      .search{
        margin-right:2rem;
        height:2rem;
        width:18rem;
        background:white;
        border:1px solid grey;
        overflow:hidden;
      }
      .search input{
        width:80%;
        height:100%;
        border:none;
        border-right:1px solid grey;
        outline:none;
        padding: 0 0 0  1rem ;
      }

      .search-icon{
        width:20%;
        cursor:pointer;
        color:black;
      }

      .create-button{
        padding:0 1.5rem;
        height:2rem;
        font-size:15px;
        background:cyan;
        border:none;
        cursor:pointer;
      }
      .create-button:hover{
        background:  rgb(82, 197, 255);
      }

      @media all and (max-width:630px){
        .search{
          display:none;
        }
      }
`

const Main = styled.div`
width:min( 1300px , 80% );
height:100vh;
margin:auto;
padding-top:5rem;
display:grid;
grid-template-columns: repeat(3,1fr);
row-gap:1rem;
column-gap:1rem;

@media all and (max-width:790px){
grid-template-columns: repeat(2,1fr);
}

@media all and (max-width:450px){
  grid-template-columns: 1fr;
  }
  

@media all and (max-width:630px){
  width:95%;
}
`

