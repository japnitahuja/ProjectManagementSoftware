import styled from 'styled-components'

export const SearchDiv = styled.div`
    width: 100%;
    height: 3em;
    padding: 1em;
    margin: 0;
    box-sizing:border-box;
    border-bottom: 1px solid #BCC5D3;

    display: flex;
    flex-direction: row;
    align-items: center;
    
`;

export const SearchBarDiv = styled.div`
    flex:0.9;

    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content:space-between;
    
`;

export const SearchInput = styled.input`
    flex:0.9;
    border: none; 
    background-color: #f7f7f7; 
    height: 3.5vh;

    font-size: 1em;
    color: rgba(108,123,138,0.6);
    
`;

export const SearchIcon = styled.img`
    height: 1.5em;
`;

export const FilterDiv = styled.div`
    flex:0.1;
    height: 1.5em;
    border-left: 1px solid #BCC5D3;
    font-size: 0.9em;
    font-weight:bold;
    color: #56657F;
    text-align:center;
    padding: 0.25em 0em 0.25em 0.5em;
    margin-left:0.2em;

`;

