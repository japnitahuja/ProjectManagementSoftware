import styled from "styled-components";

export const FormDiv = styled.form`
 @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.5em;
    
  }
`;

export const FormLabel= styled.label`
 @media screen and (min-width: 320px) {
    font-size:0.9em;
    color: #666666;
    
  }
`;

export const FormInput = styled.input`
    border: 0.5px solid #BCC5D3; 
    height: 2.5em;
    width:100%;
    border-radius:4px;
    box-sizing:border-box;

    margin: 0.5em 0;
    font-size: 1em;
    color:#BCC5D3;
    padding: 0.5em;
    
`;

export const FormSelect = styled.select`
    border: 0.5px solid #BCC5D3; 
    box-sizing:border-box;
    height: 2.5em;
    width:100%;
    border-radius:4px;

    margin: 0.5em 0;
    font-size: 1em;
    color:#BCC5D3;

    padding: 0.5em;

    -webkit-appearance: none;
    -moz-appearance: none;
    background-repeat: no-repeat;
    background-position-x: 95%;
    background-position-y: 50%;
    
`;

export const FormButton = styled.button`
    border: 0.5px solid #BCC5D3; 
    box-sizing:border-box;
    height: 3em;
    width:100%;
    border-radius:4px;

    margin-top: 1em;
    font-size: 1em;
    color:#ffffff;
    background-color: #6C7B8A;

    padding: 0.5em;
`;

