import styled from "styled-components";

export const DropDownButton = styled.button`
    @media screen and (min-width: 320px) {
        background-color: #F9F9F9;
        color: #666666;
        border: #BCC5D3 solid 1px;
        border-radius: 4px;

        padding: 0.5em 1em;
        font-size: 1em;
        display:flex;
        flex-direction:row;
        justify-content:flex-start;
        align-items:center;
        width:9em;

        background-image:${props=> `url(${props.img})` };
        background-repeat: no-repeat;
        background-position-x: 90%;
        background-position-y: 50%;
    
    }
`

export const DropDownDiv = styled.div`
    @media screen and (min-width: 320px) {
        position: relative;
        display: inline-block;
    }
`
export const DropDownContent = styled.div`
    @media screen and (min-width: 320px) {
        display: ${props => props.display};
        position: absolute;
        border-radius:6px;
        background-color: #FFFFFF;
        min-width: 180px;
        border: #666666 solid 1px;
        z-index: 100;

        right:0;
        margin-top:0.2em;

    }

`

export const DropDownOption = styled.button`
    @media screen and (min-width: 320px) {
        width:100%;
        background-color:${props=>props.backgroundFlag?"#e4e3e3":"#FFFFFF"};
        border:none;
        padding:1em;
        z-index: 5;
    }

    &:hover{
        background-color: #F9F9F9;
    }
`

export const DropDownOptionHeading = styled.p`
    font-size:1em;
    color:#666666;
    font-weight: bold;
    text-align: left;
    z-index: 5;
    margin:0;
`

export const DropDownOptionDescription= styled.p`
    font-size:0.8em;
    color:#666666;
    text-align: left;
    margin:0;
    margin-top:0.3em;
    z-index: 5;

`
