import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-top: 1px solid #bcc5d3;
  margin-bottom: 1em;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  padding: 0.5em 1em;
  border-bottom: 1px solid #bcc5d3;
`;

export const ItemDescription = styled.div``;

export const ItemName = styled.div`
  margin: 0.25em 0em;
`;

export const ItemValue = styled.div`
  color: rgba(102, 102, 102, 0.7);
  font-size: 0.9em;
`;

export const ItemTotalValue = styled.div`
  margin: 0.25em 0em;
`;
