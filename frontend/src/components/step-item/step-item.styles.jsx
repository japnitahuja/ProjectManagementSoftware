import styled from "styled-components";


export const StepDiv = styled.div`
    @media screen and (min-width: 320px) {
    width:100%;
    border: 1px solid #d3d3d3;
    box-sizing: border-box;
    display:flex;
    flex-direction:column;
  }
`
export const PartitionDiv = styled.div`
    @media screen and (min-width: 320px) {
    width:100%;
    box-sizing: border-box;
    display:flex;
    flex-direction:row;
    padding: 15px 25px;
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
    justify-content:center;
    align-items:flex-end;
  }
`

export const RowContainer = styled.div`
    @media screen and (min-width: 320px) {
    display:flex;
    flex-direction:row;
  }
`

export const BigText = styled.p`
    @media screen and (min-width: 320px) {
    margin:5px 0;
    font-size:20px;
    color: #000000;
    font-weight:bold;
    
  }
`

export const SmallText = styled.p`
    @media screen and (min-width: 320px) {
    margin:5px;
    font-size:15px;
    color: #969595;
    
  }
`

export const Circle = styled.div`
    @media screen and (min-width: 320px) {
    height:15px;
    width: 15px;
    border: 1px solid #d3d3d3;
    border-radius:15px;
    margin:4px 0px;
  }
`

export const ArrowDiv = styled.div`
    @media screen and (min-width: 320px) {
    width:100%;
    box-sizing: border-box;
    display:flex;
    flex-direction:row;
    justify-content:center;
    padding:5px;
    color: #d3d3d3;
    font-size:15px;
    border-bottom: 5px solid #d3d3d3;
  }
`

