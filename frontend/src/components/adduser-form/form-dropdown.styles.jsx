import styled from "styled-components";

export const DropDownDiv = styled.div`
  @media screen and (min-width: 320px) {
    position: relative;
    display: inline-block;
    width: 100%;
    margin: 1em 0;
  }
`;

export const DropDownButton = styled.button`
  @media screen and (min-width: 320px) {
    background-color: white;
    color: rgba(102, 102, 102, 0.6);
    border: #bcc5d3 solid 1px;
    border-radius: 4px;
    width: 100%;
    padding: 0.5em 1em;
    font-size: 1em;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;

    background-image: ${(props) => `url(${props.img})`};
    background-repeat: no-repeat;
    background-position-x: 90%;
    background-position-y: 50%;
  }
`;

export const DropDownContent = styled.div`
  @media screen and (min-width: 320px) {
    display: ${(props) => props.display};
    position: absolute;
    border-radius: 6px;
    background-color: #ffffff;
    min-width: 180px;
    border: #666666 solid 1px;
    z-index: 100;

    left: 0;
    margin-top: 0.2em;
  }
`;

export const DropDownOption = styled.button`
  @media screen and (min-width: 320px) {
    width: 100%;
    background-color: ${(props) =>
      props.backgroundFlag ? "#e4e3e3" : "#FFFFFF"};
    border: none;
    padding: 1em;
    z-index: 5;
  }

  &:hover {
    background-color: #f9f9f9;
  }
`;

export const DropDownOptionHeading = styled.p`
  font-size: 1em;
  color: #666666;
  font-weight: bold;
  text-align: left;
  z-index: 5;
  margin: 0;
`;

export const DropDownOptionDescription = styled.p`
  font-size: 0.8em;
  color: #666666;
  text-align: left;
  margin: 0;
  margin-top: 0.3em;
  z-index: 5;
`;
