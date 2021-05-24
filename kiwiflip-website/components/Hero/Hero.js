import React from "react";
import {
  HeroBg,
  HeroButton,
  HeroButtonWrapper,
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  VideoBg,
} from "./Hero.elements";

const Hero = ({ items }) => {
  const { heroVideo, heroHeading, heroParagraph, heroButtonText } =
    items.fields;

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg
          autoPlay
          loop
          muted
          src={"https:" + heroVideo.fields.file.url}
          type={heroVideo.fields.file.contentType}
        />
      </HeroBg>
      <HeroContent>
        <HeroH1>{heroHeading}</HeroH1>
        <HeroP>{heroParagraph}</HeroP>
        <HeroButtonWrapper>
          <HeroButton>{heroButtonText}</HeroButton>
        </HeroButtonWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;