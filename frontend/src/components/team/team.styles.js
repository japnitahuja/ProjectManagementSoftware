import styled from "styled-components";

export const TeamDiv = styled.div`
  max-height: 60%;
`;

export const TeamDivItem = styled.div`
  padding: 1em 0em;
  font-size: 1em;
  color: #666666;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-bottom: #bcc5d3 solid 0.5px;
`;

export const BigCircle = styled.div`
  background-color: #6c7b8a;
  height: 2.8em;
  width: 2.8em;
  border-radius: 2.8em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: white;
`;

export const DropDownContent = styled.div`
  @media screen and (min-width: 320px) {
    display: ${(props) => props.display};
    position: absolute;
    border-radius: 4px;
    background-color: #ffffff;
    border: #666666 solid 1px;
    z-index: 100;

    right: 1em;
    margin-top: 0.2em;
  }
`;
export const DropDownOption = styled.button`
  @media screen and (min-width: 320px) {
    width: 100%;
    background-color: ${(props) =>
      props.backgroundFlag ? "#e4e3e3" : "#FFFFFF"};
    border: none;
    padding: 1em 1.5em;
    z-index: 5;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    color: #666666;
  }

  &:hover {
    background-color: #f9f9f9;
  }
`;
export const Image = styled.img`
  margin-right: 0.5em;
`;

export const SmallCircle = styled.div`
  background-color: #afbdd1;
  height: 0.3em;
  width: 0.3em;
  border-radius: 0.3em;
  margin: 0.2em 0;
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
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

export const FormInverseButton = styled.button`
  border: 0.5px solid #bcc5d3;
  box-sizing: border-box;
  height: 3em;
  width: 100%;
  border-radius: 4px;

  margin-top: 1em;
  font-size: 1em;
  color: #6c7b8a;
  background-color: #ffffff;

  padding: 0.5em;
`;

export const LowerDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: auto;
`;

export const Overlay = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 0;
    position: fixed;
    z-index: 1;
    left: 0;
    bottom: -100;
    background-color: ${(props) => props.backgroundcolor};
    overflow-x: hidden;
    transition: 0.2s;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
  }
`;
