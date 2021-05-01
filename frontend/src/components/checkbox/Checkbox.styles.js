import styled from 'styled-components'

export const CheckMark = styled.span`
    display:inline-block;
    width: 22px;
    height:22px;
    -ms-transform: rotate(45deg); /* IE 9 */
    -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
    transform: rotate(45deg);
`

export const CheckMarkCircle = styled.div`
    position: absolute;
    width:22px;
    height:22px;
    background-color: #429629;
    border-radius:11px;
    left:0;
    top:0;
`

export const CheckMarkStem = styled.div`
    position: absolute;
    width:2px;
    height:11px;
    background-color:#fff;
    left:11px;
    top:5px;
`

export const CheckMarkKick = styled.div`
    position: absolute;
    width:3px;
    height:2px;
    background-color:#fff;
    left:8px;
    top:14px;
`