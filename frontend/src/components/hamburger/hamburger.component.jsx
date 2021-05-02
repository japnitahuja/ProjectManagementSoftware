import react from 'react';
import {HamburgerDiv,HamburgerLine} from "./hamburger.styles";

export const Hamburger = () => {
    return (
        <HamburgerDiv>
            <HamburgerLine/>
            <HamburgerLine/>
            <HamburgerLine/>
        </HamburgerDiv>
    )
}