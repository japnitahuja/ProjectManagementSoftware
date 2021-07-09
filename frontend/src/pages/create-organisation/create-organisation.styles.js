import styled from "styled-components";
export const NavBar = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 3.5em;
    margin: 0;
    box-sizing: border-box;
    padding: 0em 1.5em;
    color: black;
    border: 1px solid #d3d3d3;

    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const OneThirdDiv = styled.div`
  @media screen and (min-width: 320px) {
    flex: 1;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${(props) => props.align};
    color: ${(props) => props.color};
  }
`;

export const LongInput = styled.input`
  width: 100%;
  height: 2.5em;
  font-size: 1em;
  border: none;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  margin-top: 1em;
  padding: 0em 1em;

  &:focus {
    outline: none;
  }
`;
