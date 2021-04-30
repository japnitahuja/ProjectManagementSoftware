import styled from 'styled-components'

export const AccessForm = styled.form`
    height: 50vh;
    overflow: scroll;
`

export const AccessDivItem = styled.div`
    padding: 0.5em;
    border-bottom: 0.2px solid black;
`;

export const LowerDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center; 
    height: auto;
`

export const SaveButton = styled.button`
    width: 60vw;
    border-radius: 5px;
    background-color: #6C7B8A;
    color: white;
    padding: 0.4em 0;
    border: none;   
    margin: 1vh 0;

`;

export const ExitButton = styled.button`
width: 60vw;
border-radius: 5px;
background-color: #f7f7f7;

color: black;
padding: 0.4em 0;
border: 1px solid black;   
margin: 1vh 0;
`;