import styled from 'styled-components'

export const TeamDiv = styled.div`
    
`;

export const TeamDivItem = styled.div`
    padding: 1em 0em;
    font-size: 1em;
    color: #666666;
    display: flex;
    flex-direction:row;
    justify-content:space-between;
    align-items: center;
    border-bottom: #BCC5D3 solid 0.5px;
`;

export const BigCircle = styled.div`
    background-color:#6C7B8A;
    height:2.8em;
    width:2.8em;
    border-radius:2.8em;
    display:flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
    color:white;

`;

export const SmallCircle = styled.div`
    background-color:#AFBDD1;
    height:0.3em;
    width:0.3em;
    border-radius:0.3em;
    margin: 0.2em 0;
`;


export const Text = styled.p`
    margin:0;
    padding:0;
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

export const FormInverseButton = styled.button`
    border: 0.5px solid #BCC5D3; 
    box-sizing:border-box;
    height: 3em;
    width:100%;
    border-radius:4px;

    margin-top: 1em;
    font-size: 1em;
    color:#6C7B8A;
    background-color: #ffffff;

    padding: 0.5em;
`;

export const LowerDiv = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center; 
    height: auto;
`

export const Overlay = styled.div`
 @media screen and (min-width: 320px) {
  width: 100%;
  height:0;
  position: fixed; /* Stay in place */
  z-index: 100; /* Sit on top */
  left: 0;
  bottom: -100;
  background-color:rgba(0, 0, 0,0.3); /* Black fallback color */
  overflow-x: hidden; /* Disable horizontal scroll */
  transition: 0.2s;  
  display:flex;
  flex-direction:column;
  box-sizing: border-box;
  
  }
`;
