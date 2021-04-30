import styled from 'styled-components'

export const SearchBarDiv = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 0.2em 0;
`;

export const SearchInput = styled.input`
    width: 75vw;
    border: none; 
    border-right: 1px solid grey;
    background-color: #f7f7f7; 
    height: 3.5vh;
`;

export const SearchIcon = styled.img`
    height: 1.4em;
`;

export const SearchText = styled.div`
`;