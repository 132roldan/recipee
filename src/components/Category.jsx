import {FaPizzaSlice, FaHamburger} from 'react-icons/fa'
import {GiNoodles} from 'react-icons/gi'
import {ImSpoonKnife} from 'react-icons/im'
import styled from "styled-components";
import React from 'react'
import {NavLink} from "react-router-dom"

function Category() {
  return (
    <List>
        <SLink to={'/cuisine/italian'}>
           <FaPizzaSlice/>
           <h4>Italian</h4>
        </SLink>
        <SLink to={'/cuisine/american'}>
           <FaHamburger/>
           <h4>American</h4>
        </SLink>
        <SLink to={'/cuisine/thai'}>
           <ImSpoonKnife/>
           <h4>Thai</h4>
        </SLink>
        <SLink to={'/cuisine/japanese'}>
           <GiNoodles/>
           <h4>Japanese</h4>
        </SLink>
    </List>
  )
}
const SLink= styled(NavLink)`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
border-radius:10%;
margin-right:2rem;
text-decoration:none;
background:linear-gradient(35deg,#a91313,#ff670f);
width:6rem;
height:6rem;
cursor:pointer;
 transform:scale(0.8);

 h4{
    color:white;
    font-size: 0.8rem;
    text-align: center;
 } 
 svg{
    color:white;
    font-size:1.5rem;
    
 }
 &.active{
    background:linear-gradient(to right, #f27121, #e94057);
    svg{
       color:white;

    }
    h4{
       color:white;
    }
 }
`;
const List=styled.div`
display:column;
justify-content:center;
margin:2rem 0rem;
`;
export default Category