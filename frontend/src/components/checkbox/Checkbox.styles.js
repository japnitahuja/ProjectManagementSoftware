import styled from 'styled-components'

export const CheckMark = styled.span`
    display:inline-block;
    width: 44px;
    height:44px;
    -ms-transform: rotate(45deg); 
    -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
    transform: rotate(45deg);
`

export const CheckMarkCircle = styled.div`
    position: absolute;
    width:44px;
    height:44px;
    background-color: #429629;
    border-radius:22px;
    left:0;
    top:0;
`

export const CheckMarkStem = styled.div`
    position: absolute;
    width:2px;
    height:22px;
    background-color:#fff;
    left:22px;
    top:10px;
`

export const CheckMarkKick = styled.div`
    position: absolute;
    width:6px;
    height:2px;
    background-color:#fff;
    left:16px;
    top:30px;
`