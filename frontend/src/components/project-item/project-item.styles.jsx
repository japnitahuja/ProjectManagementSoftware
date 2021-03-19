import styled from "styled-components";


export const ProjectDiv = styled.div`
    @media screen and (min-width: 320px) {
    width:100vw;
    border: 1px solid #d3d3d3;
    border-left: 5px solid #5887F9;
    padding: 25px;
    box-sizing: border-box;
    display:flex;
    flex-direction:row;
  }
`

export const LeftDiv = styled.div`
    @media screen and (min-width: 320px) {
    width:70%;
  }
`

export const RightDiv = styled.div`
    @media screen and (min-width: 320px) {
    width:30%;
    display:flex;
    flex-direction:column;
    align-items:flex-end;
  }
`
export const BigText = styled.p`
    @media screen and (min-width: 320px) {
    margin:0;
    font-size:15px;
    color: #606060;
    font-weight:bold;
    
  }
`

export const SmallText = styled.p`
    @media screen and (min-width: 320px) {
    margin:5px 0;
    font-size:10px;
    color: #969595;
    font-weight:bold;
    
  }
`