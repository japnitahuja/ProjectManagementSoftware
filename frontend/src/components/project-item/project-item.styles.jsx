import styled from "styled-components";


export const ProjectDiv = styled.div`
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
    flex:0.7;
    display:flex;
    flex-direction:column; 
  }
`

export const RightDiv = styled.div`
    @media screen and (min-width: 320px) {
    flex:0.3;
    display:flex;
    flex-direction:column; 
    align-items:flex-end;
  }
`

export const UpperDiv = styled.div`
    @media screen and (min-width: 320px) {
      flex:0.9;
      
  }
`;


export const LowerDiv = styled.div`
    @media screen and (min-width: 320px) {
      display:flex;
      flex-direction:row;
      align-items: center;
      flex:0.1;

      font-weight: bold;
      font-size: 0.9em;
      color: #666666;
      padding-top: 1.5em;
  }
`;


export const BigText = styled.p`
    @media screen and (min-width: 320px) {
    margin:0;
    font-size: 1.2em;
    color: #333333;
    
  }
`

export const SmallText = styled.p`
    @media screen and (min-width: 320px) {
    margin: 0.5em 0;
    font-size: 1em;
    color: rgba(120,120,120,0.7);
    
  }
`


export const Image = styled.img`
    margin-right: 0.3em;
`;

export const ProgressCircle = styled.div`
    @media screen and (min-width: 320px) {
      width:5em;
  }
`