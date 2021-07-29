import styled from "styled-components";

export const AdminPanelDiv = styled.div`
  width: 100%;
  border-top: 1px solid #bcc5d3;
  border-bottom: 1px solid #bcc5d3;
  padding: 1em;
  box-sizing: border-box;
`;

export const AdminPanelProjectDetailsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-size: 0.9em;
  color: #666666;
  padding: 0.5em 0em;
  font-weight: bold;
`;

export const AdminPanelProjectDetailsHeading = styled.div``;

export const AdminPanelProjectsDetailsValue = styled.div``;

export const AdminPanelTeamDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1em 2em;
  border-bottom: 1px solid #bcc5d3;
  box-sizing: border-box;

  font-size: 0.9em;
  color: #666666;
  font-weight: bold;
`;

export const AdminPanelButtons = styled.button`
  border: 1px solid #6c7b8a;
  border-radius: 5px;
  font-size: 1em;
  padding: 0.5em;
  width: 10em;
  background-color: white;
  color: #6c7b8a;
`;

export const Text = styled.p`
  margin: 0;
  padding-bottom: 0.5em;
`;

export const Overlay = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 0;
    position: fixed;
    z-index: 5;
    left: 0;
    bottom: -100;
    background-color: ${(props) => props.backgroundcolor};
    overflow-x: hidden;
    transition: 0.2s;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
`;
