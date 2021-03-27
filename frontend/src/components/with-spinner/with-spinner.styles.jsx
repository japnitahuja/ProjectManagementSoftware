import styled from 'styled-components';

export const SpinnerOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  /* border: 3px solid rgba(195, 195, 195, 0.6); */
  /* border: 3px solid rgb(253, 165, 0); */
  border: 3px solid #ffff;
  border-radius: 50%;
  /* border-top-color: #636767; */
  border-top-color: #000000;
  animation: spin 1s ease-in-out infinite;
  -webkit-animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
    }
  }
`;
