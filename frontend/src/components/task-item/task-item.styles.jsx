import styled from "styled-components";


export const TaskDiv = styled.div`
    @media screen and (min-width: 320px) {
    width:100%;
    border-bottom: 1px solid #BCC5D3;
    padding: 1em;
    box-sizing: border-box;

    display: flex;
    flex-direction: row;
  }
`

export const LeftDiv = styled.div`
    @media screen and (min-width: 320px) {
    flex:2
  }
`

export const RightDiv = styled.div`
    @media screen and (min-width: 320px) {
    flex:1;
    display:flex;
    flex-direction:row;
    justify-content:flex-end;
    align-items:center;
  }
`
export const BigText = styled.p`
    @media screen and (min-width: 320px) {
    margin:0;
    font-size:1.2em;
    color: #666666;
    
  }
`

export const SmallText = styled.p`
    @media screen and (min-width: 320px) {
    font-size:0.8em;
    color: #666666;
    font-weight: bolder;
    
  }
`

export const Circle = styled.div`
    @media screen and (min-width: 320px) {
    height:44px;
    width: 44px;
    border: 1.5px solid #BCC5D3;
    border-radius:44px;
  }
`
export const ProgressDiv = styled.div`
  @media screen and (min-width:320px){
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content:space-between;
}`

export const ProgressBar = styled.div`
  @media screen and (min-width:320px){
    height: 5px;
    width: 70%;
    background-color:#e2e2e2;
    border-radius:4px;
}`

export const Progress = styled.div`
  @media screen and (min-width:320px){
    height: 5px;
    background-color:#429629;
    border-radius:4px;
}`

export const SmallCircle = styled.div`
    background-color:#AFBDD1;
    height:0.3em;
    width:0.3em;
    border-radius:0.3em;
    margin: 0.2em 0;
`;
