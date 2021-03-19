import styled from "styled-components";


export const NavBar = styled.div`
 @media screen and (min-width: 320px) {
    width:100vw;
    height:40px;
    font-family: 'Roboto', sans-serif;
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const Heading = styled.p`
 @media screen and (min-width: 320px) {
    margin:0;
  }
`;

export const NotifDiv = styled.div`
 @media screen and (min-width: 320px) {
    padding-right:5%;
    text-align:center;
  }
`;

export const Back = styled.div`
 @media screen and (min-width: 320px) {
    padding-left:5%;
    color: #000;
    text-align:center;
    font-size:10px;
    font-weight:bold;
  }
`;