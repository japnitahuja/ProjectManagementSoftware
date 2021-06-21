import styled from "styled-components";

export const NavBar = styled.div`
 @media screen and (min-width: 320px) {
    width:100%;
    height:3.5em;
    margin: 0;
    box-sizing:border-box;
    padding: 0em 1.5em;
    color:black;
   
    display:flex;
    flex-direction:row;
    align-items: center;
    border: 1px solid #d3d3d3;
    
  }
`;

export const OneThirdDiv = styled.div`
 @media screen and (min-width: 320px) {
    
    flex:1;
    text-align:left;

    
 }
`;


export const Heading = styled.p`
 @media screen and (min-width: 320px) {
    font-size:1.2em;
    margin:0;
    text-align:center;
   
  }
`;


export const Back = styled.div`
 @media screen and (min-width: 320px) {
    padding-left:5%;
    color: #000;
    font-size:1em;
    color:  white;
  }
`;

export const Image = styled.img`
    
`;
