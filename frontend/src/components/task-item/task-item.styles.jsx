import styled from "styled-components";


export const ProjectDiv = styled.div`
    @media screen and (min-width: 320px) {
    width:100%;
    border: 1px solid #d3d3d3;
    border-left: 5px solid #FF3366;
    padding: 15px 25px;
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
    justify-content:space-evenly;
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

export const Circle = styled.div`
    @media screen and (min-width: 320px) {
    height:20px;
    width: 20px;
    border: 1px solid #d3d3d3;
    border-radius:20px;
  }
`
export const ProgressDiv = styled.div`
  @media screen and (min-width:320px){
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content:space-between;
    margin:5px 0;
}`

export const ProgressBar = styled.div`
  @media screen and (min-width:320px){
    height: 5px;
    width: 80%;
    background-color:#e2e2e2;
}`

export const Progress = styled.div`
  @media screen and (min-width:320px){
    height: 5px;
    background-color:#5887F9;
}`