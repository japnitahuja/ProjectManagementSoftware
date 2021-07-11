import styled from "styled-components";

export const BigCircle = styled.div`
   height:3.5em;
   width:3.5em;
   border-radius:3.5em;
   background-color:#205284;
   box-sizing:border-box;

   bottom: 5em;
   right: 2em;
   z-index:2;
   position:fixed;

   display:flex;
   flex-direction:row;
   justify-content:center;
   align-items:center;

   color:#ffffff;

   box-shadow:0px 8px 10px rgba(0,0,0,0.15)
`

export const CreateDiv = styled.div`
   display:flex;
   flex-direction:column;
   background-color:#ffffff;
   width: 100%;
   position:fixed;
   bottom:0;
 
`

export const CreateOptionsDiv = styled.div`
    flex:1;
    color:#6C7B8A;
    font-size:1em;
    font-weight: bold;
    border-bottom: 1px solid #BCC5D3;
    width:100%;
    padding: 1em;
    display:flex;
    flex-direction:row;
    justify-content:${props=>props.justify?"center":"flex-start"};
    align-items:center;
    box-sizing:border-box;

`

export const CreateOptionsImg = styled.img`
    height: 1.5em;
    width: 1.5em;
    margin:0.5em;

`


