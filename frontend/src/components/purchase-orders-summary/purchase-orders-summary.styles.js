import styled from "styled-components";

export const POSummaryDiv = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2em;
    box-sizing: border-box;
  }
`;

export const Text = styled.p`
  @media screen and (min-width: 320px) {
    padding: 0;
    margin: 0;
    margin-top: 0.5em;
    font-size: ${(props) => props.fontSize};
    color: ${(props) => props.color};
  }
`;
