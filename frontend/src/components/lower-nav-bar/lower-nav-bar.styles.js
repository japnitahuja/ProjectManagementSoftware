import styled from "styled-components";

export const LowerNav = styled.div`
    width: 100%;
    height: 4em;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
    position: fixed;
    bottom: 0;
    overflow: hidden;
    z-index:1;

    /* box-sizing: border-box; */
    color: white;
    background-color: #6C7B8A;
    
`;

export const LowerNavEntity = styled.div`
    height:100%;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
`;


export const LowerNavImage = styled.img`
    height: 1.5em;
    width: 1.5em;
`;


export const LowerNavText = styled.div`
    color:#FFFFFF;
    font-size:0.9em;
    margin-top: 0.3em;
`;