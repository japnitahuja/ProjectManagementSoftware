import styled from "styled-components";

export const Heading = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    color: black;
    font-size: 1.4em;
  }
`;

export const Description = styled.div`
  @media screen and (min-width: 320px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgba(0, 0, 0, 0.8);
    font-size: 1em;
  }
`;

export const TemplateScrollDiv = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 60vh;
    overflow-x: scroll;
    -webkit-overflow-scrolling: touch;
    overflow-y: hidden;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;

    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const TemplateDivContainer = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 100%;
  }
`;

export const TemplateDiv = styled.div`
  @media screen and (min-width: 320px) {
    width: 70vw;
    height: 60%;
    background-color: white;
    box-shadow: 3px 0px 6px rgba(0, 0, 0, 0.18);
    margin: 1em;
    border-radius: 10px;
  }
`;

export const TemplateHeading = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: space-between;
    padding: 0 1em;
    align-items: center;
    box-sizing: border-box;
    font-weight: 600;
  }
`;

export const TemplateButton = styled.button`
  @media screen and (min-width: 320px) {
    padding: 0.5em 1em;
    color: whitesmoke;
    font-size: 1em;
    background-color: #3f8cff;
    border-radius: 20px;
    border: none;
  }
`;

export const TemplateDescription = styled.div`
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 40%;
    padding: 0em 1em;
    box-sizing: border-box;
  }
`;

export const TemplateDescriptionPoint = styled.div`
  @media screen and (min-width: 320px) {
    margin: 0.5em 0em;
  }
`;

export const Img = styled.img`
  @media screen and (min-width: 320px) {
    width: 100%;
    height: 70%;
    border-radius: 10px 10px 0 0;
  }
`;
