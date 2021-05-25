import React from "react";
import Link from "next/link";
import {
  FooterButton,
  FooterButtonWrapper,
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterSubHeading,
  FooterSubscription,
  FooterSubText,
  Form,
  FormInput,
  Logo,
  UnderFooter,
  WebsiteRights,
} from "./Footer.elements";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>Footer Subheading</FooterSubHeading>
        <FooterSubText>You can unsubscribe at any time.</FooterSubText>
        <Form>
          <FormInput />
          <FooterButtonWrapper>
            <FooterButton>Sign Up</FooterButton>
          </FooterButtonWrapper>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLink>Contact</FooterLink>

            <FooterLink>Contact</FooterLink>

            <FooterLink>Contact</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLink>Contact</FooterLink>

            <FooterLink>Contact</FooterLink>

            <FooterLink>Contact</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLink>Contact</FooterLink>

            <FooterLink>Contact</FooterLink>

            <FooterLink>Contact</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <UnderFooter>
        <Logo>Kiwiflip</Logo>
        <WebsiteRights>Kiwiflip © 2021</WebsiteRights>
      </UnderFooter>
    </FooterContainer>
  );
};

export default Footer;
