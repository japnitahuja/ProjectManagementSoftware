import styled from "styled-components";

export const NavBar = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 3.5em;
    margin: 0;
    box-sizing: border-box;
    padding: 0em 1em;
    color: black;
    font-weight: 600;
    border-bottom: 1px solid #bcc5d3;
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
    justify-content: ${(props) => {
      if (props.justify == "start") {
        return "flex-start";
      }
      if (props.justify == "end") {
        return "flex-end";
      } else {
        return "center";
      }
    }};
    align-items: center;
  }
`;

export const Heading = styled.p`
  @media screen and (min-width: 320px) {
    font-size: 1.2em;
    margin: 0;
    text-align: center;
  }
`;

export const SearchDiv = styled.img`
  height: 24px;
  width: 24px;
  justify-self: flex-end;
`;
