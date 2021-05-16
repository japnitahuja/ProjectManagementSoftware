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
    padding: 2em;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const PONameDiv = styled.div`
    display:flex;
    flex-direction:row;
    align-items:center;
`;

export const PODetailsDiv = styled.div`
@media screen and (min-width: 320px) {
  align-self: center;
}
`;

export const Image = styled.img`
    height: 1.5em;
    width: 1.5em;
    margin-right: 2em;
`;

