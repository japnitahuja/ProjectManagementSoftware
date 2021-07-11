import styled from "styled-components";

export const NavBar = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 3.5em;
    margin: 0;
    box-sizing: border-box;
    padding: 0em 1.5em;
    color: black;
    border: 1px solid #d3d3d3;

    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const OneThirdDiv = styled.div`
  @media screen and (min-width: 320px) {
    flex: 1;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${(props) => props.align};
    color: ${(props) => props.color};
  }
`;

export const FormDiv = styled.form`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
`;

export const FormHeading = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    color: #666666;
    font-size: 1.4em;
  }
`;

export const FormLabel = styled.label`
  @media screen and (min-width: 320px) {
    font-size: 0.9em;
    color: #666666;
  }
`;

export const FormInput = styled.input`
  border: 0.5px solid #bcc5d3;
  height: 2.5em;
  width: 100%;
  border-radius: 4px;
  box-sizing: border-box;

  margin: 0.5em 0;
  font-size: 1em;
  color: #bcc5d3;
  padding: 0.5em;
`;

export const FormSelect = styled.select`
  border: 0.5px solid #bcc5d3;
  box-sizing: border-box;
  height: 2.5em;
  width: 100%;
  border-radius: 4px;

  margin: 0.5em 0;
  font-size: 1em;
  color: #bcc5d3;

  padding: 0.5em;

  -webkit-appearance: none;
  -moz-appearance: none;
  background-repeat: no-repeat;
  background-position-x: 95%;
  background-position-y: 50%;
`;

export const FormButton = styled.button`
  border: 0.5px solid #bcc5d3;
  box-sizing: border-box;
  height: 3em;
  width: 100%;
  border-radius: 4px;

  margin-top: 1em;
  font-size: 1em;
  color: #ffffff;
  background-color: #6c7b8a;

  padding: 0.5em;
`;
