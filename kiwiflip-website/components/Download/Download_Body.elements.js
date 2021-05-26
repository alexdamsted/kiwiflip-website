import styled from "styled-components";

export const DownloadContainer = styled.div`
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const DownloadWrapper = styled.div`
  display: flex;
  z-index: 1;
  height: 860px;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const Col1Row = styled.div`
  display: flex;
  align-items: center;
  order: 2;
  @media screen and (max-width: 768px) {
  }
`;

export const Col2Row = styled.div`
  display: flex;
  align-items: center;
  order: 1;
  @media screen and (max-width: 768px) {
    position: absolute;
    margin-top: 350px;
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 60px;

  @media screen and (max-width: 768px) {
  }
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: #191919;

  @media screen and (max-width: 600px) {
    font-size: 32px;
  }
`;

export const SubHeading = styled.p`
  max-width: 440px;
  font-weight: 500;
  margin-bottom: 25px;
  font-size: 24px;
  line-height: 24px;
  color: #74c947;
`;

export const Paragraph = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: grey;
`;

export const ImgWrap = styled.div`
  max-width: 555px;
  height: 100%;

  @media screen and (max-width: 960px) {
    display: none;
  }
`;

export const TermsAndConditions = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: grey;
`;

export const DownloadButtonWrapper = styled.div`
  margin: 32px 32px 32px 0px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const DownloadButtonAndroid = styled.button`
  border-radius: 50px;
  background: #a4c639;
  white-space: nowrap;
  padding: 12px 64px;
  width: 100%;
  color: white;
  font-size: 20px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-in;
    background: #9ab835;
  }

  @media screen and (max-width: 600px) {
    margin-top: 10px;
  }
`;

export const DownloadButtonIos = styled.button`
  margin-right: 20px;
  border-radius: 50px;
  background: #237bd9;
  white-space: nowrap;
  padding: 12px 64px;
  width: 100%;
  color: white;
  font-size: 20px;
  font-weight: 600;
  outline: none;
  border: none;
  cursor: pointer;

  &:hover {
    transition: all 0.3s ease-in;
    background: #1566d6;
  }
`;
