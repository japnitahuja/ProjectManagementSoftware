import styled from "styled-components";

export const ManageTeamDiv = styled.div`
  @media screen and (min-width: 320px) {
    background-color: #ffffff;
    padding: 2em;
    box-sizing: border-box;
    margin-top: 20%;
    width: 100%;
  }
`;

export const FormHeading = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    color: #666666;
    font-size: 1.4em;
  }
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
`;

export const ManageTeamHeaderIcon = styled.div``;

export const ManageTeamNavDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 1.5em;
`;

export const ManageTeamNavItem = styled.button`
  flex: 1;
  background-color: white;
  border: none;
  font-size: 1em;
  color: rgba(102, 102, 102, 0.75);
  padding: 0.5em 0em;
`;
