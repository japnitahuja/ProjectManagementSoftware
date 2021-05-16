import styled from 'styled-components'

export const AddRoleDiv = styled.div`
  
    transition: all 0.1s;
    width:80%;
    height:70%;
    border-radius:4px;
    background-color:white;
    margin-top:5%;
    padding:2em;
    box-sizing:border-box;

`;

export const UsersDiv = styled.div`
  
    border-radius: 4px;
    border: #666666 solid 1px;
    height: 8em;
    //overflow-y:scroll;

`;

export const UsersDivContent = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-size:0.9em;
    color:#666666;
`;

export const CheckBox = styled.input.attrs(
    props=>({
        type: "checkbox"
    })
)`

    margin-right: 1em;
    margin-top:0.5em;
    height:1.2em;
    width: 1.2em;
 
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


