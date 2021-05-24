import styled from "styled-components";

export const BodyContainer = styled.div`
  color: white;
  background: #bed6ba;

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;

export const BodyWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;

  @media screen and (max-width: 480px) {
    padding-top: 150px;
  }
`;

export const Col1Row = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
  }
`;

export const Col2Row = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    position: absolute;
    margin-top: 300px;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
    margin-top: -400px;
  }
`;

export const Heading = styled.h1`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #191919;

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: grey;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const Img = styled.div`
  width: 100%;
  margin: 0 0 10px 0;
  padding-right: 0;
`;

export const BodySignUpButtonWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const BodySignUpButton = styled.button`
  border-radius: 50px;
  background: #74c947;
  white-space: nowrap;
  padding: 20px 30px;
  color: white;
  font-size: 20px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-in;
    background: #66b83b;
  }

  @media screen and (max-width: 960px) {
    padding: 12px 64px;
    width: 100%;
  }
`;
