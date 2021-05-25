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

const Footer = ({ items }) => {
  const {
    footerSubscriptionTitle,
    footerSubText,
    footerLogoText,
    footerAllRightReserved,
    contact,
    help,
    location,
    instagram,
    facebook,
    youTube,
    aboutKiwiflip,
    careers,
    investors,
  } = items.fields;

  return (
    <FooterContainer>
      <FooterSubscription>
        <FooterSubHeading>{footerSubscriptionTitle}</FooterSubHeading>
        <FooterSubText>{footerSubText}</FooterSubText>
        <Form>
          <FormInput />
          <FooterButtonWrapper>
            <FooterButton>Join</FooterButton>
          </FooterButtonWrapper>
        </Form>
      </FooterSubscription>
      <FooterLinksContainer>
        <FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLink>{contact}</FooterLink>

            <FooterLink>{help}</FooterLink>

            <FooterLink>{location}</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLink>{aboutKiwiflip}</FooterLink>

            <FooterLink>{careers}</FooterLink>

            <FooterLink>{investors}</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLink>{instagram}</FooterLink>

            <FooterLink>{facebook}</FooterLink>

            <FooterLink>{youTube}</FooterLink>
          </FooterLinkItems>
        </FooterLinksWrapper>
      </FooterLinksContainer>
      <UnderFooter>
        <Logo>{footerLogoText}</Logo>
        <WebsiteRights>{footerAllRightReserved}</WebsiteRights>
      </UnderFooter>
    </FooterContainer>
  );
};

export default Footer;
