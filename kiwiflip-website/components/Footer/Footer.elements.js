import styled from "styled-components";

export const FooterContainer = styled.div`
  background: #191919;
  padding: 4rem 0 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FooterSubscription = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 24px;
  padding: 24px;
  color: white;
`;

export const FooterSubHeading = styled.p`
  margin-bottom: 24px;
  font-size: 24px;
`;

export const FooterSubText = styled.p`
  margin-bottom: 24px;
  font-size: 20px;
`;

export const FooterButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FooterButton = styled.button`
  border-radius: 3px;
  background: #74c947;
  white-space: nowrap;
  padding: 10px 30px;
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
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 820px) {
    flex-direction: column;
    width: 80%;
  }
`;

export const FormInput = styled.input`
  padding: 10px 50px;
  border-radius: 2px;
  margin-right: 10px;
  outline: none;
  border: none;
  font-size: 16px;
  border: 1px solid white;

  &::placeholder {
    color: grey;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
    margin: 0 0 16px 0;
  }
`;

export const FooterLinksContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 820px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-align: left;
  box-sizing: border-box;
  padding: 0 50px 0 50px;

  @media screen and (max-width: 820px) {
    margin: 0;
    padding: 10px;
    width: 100%;
    align-items: center;
  }
`;

export const FooterLink = styled.a`
  color: white;
  text-decoration: none;
  margin-bottom: 0.5rem;

  &:hover {
    color: #74c947;
    transition: 0.3s ease-out;
  }
`;

export const UnderFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  max-width: 1000px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const Logo = styled.a`
  color: #74c947;
  font-weight: 600;
  justify-self: start;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;

export const WebsiteRights = styled.small`
  color: white;
  margin-bottom: 16px;
`;
