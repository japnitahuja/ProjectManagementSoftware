import styled from "styled-components";

export const POItemMenuDiv = styled.div`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid #d3d3d3;
`;

export const POItemMenuItem = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-bottom: ${(props) => (props.active ? "2px solid #3F8CFF" : "none")};
  color: ${(props) => (props.active ? "black" : "none")};
  box-sizing: border-box;
  font-weight: 600;
  padding: 0.5em;
`;
