import styled from "styled-components";

export const NavBar = styled.div`
 @media screen and (min-width: 320px) {
    width:100vw;
    height:4em;
    margin: 0;
    box-sizing:border-box;
    padding: 0em 1.5em;
    background-color: #6C7B8A;
    color: white;
   
    display:flex;
    flex-direction:row;
    align-items: center;
    
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

export const AddProjectDiv = styled.div`
 @media screen and (min-width: 320px) {
  font-size: 1em;
  text-align:right;

  }
`;

export const Overlay = styled.div`
 @media screen and (min-width: 320px) {
  width: 100%;
  height:0;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  bottom: 0;
  background-color: #FFFFFF; /* Black fallback color */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.2s;  

  display:flex;
  flex-direction:column;
  box-sizing: border-box;
  }
`;

export const FormHeading = styled.div`
 @media screen and (min-width: 320px) {
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    
    color: #666666;
    font-size:1.4em;
 }
`;