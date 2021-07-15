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

export const Button = styled.button`
  @media screen and (min-width: 320px) {
    width: 90%;
    padding: 0.5em;
    font-size: 1.2em;
    background-color: ${(props) => (props.paid ? "green" : "#205284")};
    border: none;
    color: white;
    border-radius: 5px;
    box-shadow: none;
    margin: 1em 0em;
  }
`;
