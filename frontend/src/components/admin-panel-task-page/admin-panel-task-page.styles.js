import styled from 'styled-components'

export const AdminPanelDiv = styled.div`
    width: 100%;
    border-top:  1px solid #BCC5D3;
    border-bottom: 1px solid #BCC5D3; 
    padding: 1em;
    box-sizing:border-box;

`;

export const AdminPanelProjectDetailsDiv = styled.div`
    display: flex;
    flex-direction:row;
    justify-content:space-between;

    font-size:0.9em;
    color:#666666;
    padding: 0.5em 0em;
    font-weight:bold;

`;

export const AdminPanelProjectDetailsHeading = styled.div`

`;

export const AdminPanelProjectsDetailsValue = styled.div`

`;

export const AdminPanelTeamDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1em 2em;
    border-bottom: 1px solid #BCC5D3;
    box-sizing:border-box;

    font-size:0.9em;
    color:#666666;
    font-weight:bold;
`;

export const AdminPanelButtons = styled.button`
    border: 1px solid #6C7B8A;
    border-radius: 5px;
    font-size: 1em;
    padding: 0.5em;
    width:10em;
    background-color: #f7f7f7;
    color: #6C7B8A;
`;

export const Text = styled.p`
    margin:0;
    padding-bottom:0.5em;

`;

export const Overlay = styled.div`
 @media screen and (min-width: 320px) {
  width: 100%;
  height:0;
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  left: 0;
  bottom: -100;
  background-color: #FFFFFF; /* Black fallback color */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.2s;  
  display:flex;
  flex-direction:column;
  box-sizing: border-box;
  
  }
`;