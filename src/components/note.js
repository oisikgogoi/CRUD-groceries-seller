import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'
function Note({title,paragraph}) {
    const newParagraph = paragraph.slice(0,150)
  return (
    
   <Main>
        <h3 className='title'>{title.substring(0,60)}</h3>
        <p className='paragraph'>{newParagraph}<Link>...read more </Link></p>
        <div className='buttons'>
        <Link to={''} className='edit'>Edit</Link>
        <a className='delete'><FontAwesomeIcon icon={faTrash}/></a>
        </div>     
    </Main>

  )
}

export default Note

const Main = styled.div`
  width:100%;
  height:max-content;
  padding:5px;
  box-shadow:1px 1px 6px 2px rgba(173, 173, 173, 0.733);
  margin:1rem 0;
  background:rgba(192, 168, 135 , .3);

  h3{
    font-family:Poppins,sans-serif;
    font-size:2rem;
    text-transform:capitalize;
  }
  p{
    margin-top:1rem;
    text-align:left;
    font-family:Inter,sans-serif;
  }

  .buttons{
    width:100%;
    height:max-content;
    display:flex;
    align-items:center;
    justify-content:right;
  }
  .delete, .edit{
    width:5rem;
    height:2rem;
    display:grid;
    place-items:center;
    margin:.5rem;
    cursor:pointer;
  }
  .delete{
    color:white;
    background:red;
  }
  .edit{
    background:yellow;
  }
  

  cursor:pointer;
  :hover{
    transform:translateY(-5px);
  }
`