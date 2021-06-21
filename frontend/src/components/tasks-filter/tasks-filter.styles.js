import styled from 'styled-components'

export const Container = styled.div`
  
    transition: all 0.1s;
    width:70%;
    height:90%;
    border-radius:4px;
    background-color:white;
    box-sizing:border-box;

    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const Heading = styled.div`
    width:100%;
    font-size: 1.25em;
    box-sizing: border-box;
    color: #666666;
    background-color: #EEEEEE;
    border-radius:4px;
    padding: 0.5em 1em;

    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content: space-between;
`;

export const FormDiv = styled.div`
    width: 70%;

    display: flex;
    flex-direction: column;
    
  
`;

export const FormLabel = styled.div`
    font-size: 1em;
    color: #666666;
    margin: 1em 0em;
`;

export const FormButtonsDiv = styled.div`
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 2em;
`;


export const FormButton = styled.button`
    border: ${props => props.border}; 
    box-sizing:border-box;
    height: 3em;
    width:${props=>props.width};
    border-radius:4px;

    margin-top: 1em;
    font-size: 1em;
    color:${props => props.color};
    background-color: ${props => props.bgcolor};

    padding: 0.5em;
`;


