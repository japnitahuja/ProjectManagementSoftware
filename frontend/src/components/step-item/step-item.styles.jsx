import styled from "styled-components";

export const StepDiv = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;

    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    border-bottom: 5px solid #eeeeee;
  }
`;
export const PartitionDiv = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    padding: 10px 25px;
  }
`;

export const LeftDiv = styled.div`
  @media screen and (min-width: 320px) {
    width: 70%;
  }
`;

export const RightDiv = styled.div`
  @media screen and (min-width: 320px) {
    width: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
  }
`;

export const RowContainer = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: row;
    align-items: center;
  }
`;

export const BigText = styled.p`
  @media screen and (min-width: 320px) {
    margin: 0.5em 0;
    font-size: 20px;
    color: #000000;
    font-weight: bold;
  }
`;

export const SmallText = styled.p`
  @media screen and (min-width: 320px) {
    margin: 1em 0.25em;
    font-size: 15px;
    color: #969595;
  }
`;

export const SmallBoldText = styled.p`
  @media screen and (min-width: 320px) {
    margin-top: 1em;
    font-size: 0.9em;
    color: black;
  }
`;

export const Circle = styled.div`
  @media screen and (min-width: 320px) {
    height: 20px;
    width: 20px;
    border: 1px solid #d3d3d3;
    border-radius: 15px;
    margin-right: 0.25em;
  }
`;

export const ArrowDiv = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 5px;
    color: #d3d3d3;
    font-size: 1em;
    margin: 10px 0px;
  }
`;

export const ArrowDown = styled.i`
  @media screen and (min-width: 320px) {
    border: solid #d3d3d3;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 5px;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
`;

export const ArrowUp = styled.i`
  @media screen and (min-width: 320px) {
    border: solid #d3d3d3;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 5px;
    transform: rotate(225deg);
    -webkit-transform: rotate(225deg);
  }
`;

export const CompleteStepButtons = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  margin: 1em 0;
`;

export const CompleteStepButton = styled.div`
  width: 50%;
  padding: 1em 0em;
  border: ${(props) => (props.border ? "1px solid #6C7B8A" : "none")};
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  font-size: 0.9em;
`;
