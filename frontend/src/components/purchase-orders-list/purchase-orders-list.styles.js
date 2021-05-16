import styled from "styled-components";

export const POSummaryDiv = styled.div`
@media screen and (min-width: 320px) {
    
    width:100%;
    height: 20%;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;

  }
`;

export const PODiv = styled.div`
@media screen and (min-width: 320px) {
    
    border: 1px solid #d3d3d3;
    border-left: 5px solid #BCC5D3;
    padding: 15px;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const PONameDiv = styled.div`

`;

export const PODetailsDiv = styled.div`
@media screen and (min-width: 320px) {
  align-self: center;
}
`;
