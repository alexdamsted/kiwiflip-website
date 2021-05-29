import styled from "styled-components";

export const HeroContainer = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
`;

export const HeroBg = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const VideoBg = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  object-fit: cover;
  background: white;
`;

export const HeroContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
  }

  @media screen and (max-width: 480px) {
  }
`;

export const HeroH1 = styled.h1`
  color: white;
  font-size: 48px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const HeroP = styled.p`
  margin-top: 24px;
  color: white;
  font-size: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 24px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const HeroButtonWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const HeroButton = styled.button`
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
    font-size: 1.2rem;
    width: 100%;
  }
`;
