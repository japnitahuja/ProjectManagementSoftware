import styled from 'styled-components'

export const ChangeOrderDetailsDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`;

export const ChangeOrderFrom = styled.div`
    padding: 5px;
    margin: 0 0 1vh 0;
`;

export const COItemAttribute = styled.p`
font-weight: 600;
margin: 0;
`

export const COItemValue = styled.p`
    font-weight: 700;
    margin: 0;
`

export const ChangeOrderTotalAmount = styled.div`
width: 40vw;
font-size: 0.8rem;
align-self: center;
border-radius: 20px;
display: flex;
flex-direction: row;
justify-content: space-around;
background-color: #e6e6e6;
padding: 5px;
color: #6C7B8A;
margin: 1vh;
`;

export const ChangeOrderPaidAmount = styled.div`
width: 40vw;
font-size: 0.8rem;
align-self: center;
border-radius: 20px;
display: flex;
flex-direction: row;
justify-content: space-around;
padding: 5px;
color: #41bd64;
background-color: #41BD641C;
`;

export const ItemsTableDiv = styled.table`
    width: 100vw;
    margin: 2vh 0;
    color: #222222;
    padding: 5px;
`;

export const ItemsTableRow = styled.tr`
    border: 1px solid black;
    text-align: left;
`;

export const ItemsTableHeading = styled.th`
    font-size: 0.7rem;
    font-weight: 500;
`;

export const ItemsTableRowData = styled.td`
    font-size: 0.8rem;
    margin: 0;
    padding: 0;
`;

