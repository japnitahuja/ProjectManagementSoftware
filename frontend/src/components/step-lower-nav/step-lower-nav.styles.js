import styled from "styled-components";

export const StepNavDiv = styled.div`
    width:100%;
    height:3.5em;
    margin: 0;
    box-sizing:border-box;
    color:rgba(102,102,102,0.7);
   
    display:flex;
    flex-direction:row;
    align-items: center;
    box-shadow: 0px 5px 8px 0px rgba(0,0,0,0.08);

    
`;

export const OneThirdDiv = styled.div`
    flex:calc(1/3);
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-bottom: ${props=>props.active?"2px solid #3F8CFF":"none"};
    color: ${props=>props.active?"black":"none"};
    box-sizing: border-box;
    font-weight: 600;

`;
