import styled from "styled-components";

export const NavBar = styled.div`
 @media screen and (min-width: 320px) {
    width:100%;
    height:3.5em;
    margin: 0;
    box-sizing:border-box;
    padding: 0em 1.5em;
    color: black;
    font-weight: 600;
    border-bottom: 1px solid #BCC5D3;
    display:flex;
    flex-direction:row;
    align-items: center;
    
  }
`;

export const OneThirdDiv = styled.div`
 @media screen and (min-width: 320px) {
    
    flex:1;

    display: flex;
    flex-direction: row;
    justify-content: ${props=>{
      if(props.justify == "start"){
        return "flex-start"
      }
      if(props.justify == "end"){
        return "flex-end"
      }
      else{
        return "center"
      }
    }};
    align-items: center;
   
 }
`;


export const Heading = styled.p`
 @media screen and (min-width: 320px) {
    font-size:1.2em;
    margin:0;
    text-align:center;
   
  }
`;

export const SearchDiv = styled.img`
  height: 24px;
  width: 24px;
  justify-self: flex-end;

`;

export const Overlay = styled.div`
 @media screen and (min-width: 320px) {
  width: 100%;
  height:0;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  bottom: -100;
  background-color: #FFFFFF; /* Black fallback color */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.2s;  
  display:flex;
  flex-direction:column;
  box-sizing: border-box;
  
  }
`;

