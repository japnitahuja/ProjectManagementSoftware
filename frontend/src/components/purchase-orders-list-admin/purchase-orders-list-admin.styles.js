import styled from "styled-components";

export const POGreyHeading = styled.div`
  @media screen and (min-width: 320px) {
    background-color: #f4f5f8;
    color: #666666;
    font-size: 0.8em;
    font-weight: 600;
    padding: 0.5em 1em;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const POSummaryDiv = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const PODiv = styled.div`
  @media screen and (min-width: 320px) {
    border: 1px solid #d3d3d3;
    padding: 0.5em 1em;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const PONameDiv = styled.div``;

export const PODetailsDiv = styled.div`
  @media screen and (min-width: 320px) {
    align-self: center;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const TinyText = styled.p`
  @media screen and (min-width: 320px) {
    margin: 0.5em 0;
    font-size: 0.8em;
    color: rgba(120, 120, 120, 0.7);
  }
`;

export const BigText = styled.p`
  @media screen and (min-width: 320px) {
    margin: 0.25em 0em;
    font-size: 1em;
    color: #333333;
    font-weight: ${(props) => props.weight};
  }
`;

export const Tick = styled.img`
  @media screen and (min-width: 320px) {
    height: 1.1em;
    width: 1.1em;
    margin-right: 0.5em;
  }
`;

export const Circle = styled.div`
  @media screen and (min-width: 320px) {
    height: 1em;
    width: 1em;
    border-radius: 1em;
    border: 1px solid #666666;
    margin-right: 0.5em;
  }
`;
