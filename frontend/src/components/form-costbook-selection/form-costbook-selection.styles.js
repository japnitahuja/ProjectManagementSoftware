import styled from "styled-components";

export const ContainerDiv = styled.div`
  transition: all 1s;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  background-color: #f5f5f5;
`;

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

export const ItemDiv = styled.div`
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
    background-color: ${(props) => (props.selected ? "#d3d3d3" : "#fff")};
  }
`;

export const LongDiv = styled.div`
  font-size: 0.9em;
  flex: 0.5;
  border-radius: 5px;
  border-top: 1px solid #d3d3d3;
  border-bottom: 1px solid #d3d3d3;
  padding: 1em 1em;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  color: rgba(0, 0, 0, 0.8);
  background-color: white;
`;

export const Input = styled.input`
  width: 3em;
  border: none;
  display: flex;
  text-align: right;

  &:focus {
    outline: none;
  }
`;
