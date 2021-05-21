import React from "react";
import Video from "../../public/video.mp4";
import { HeroBg, HeroContainer, VideoBg } from "./Hero.elements";

const Hero = () => {
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
    </HeroContainer>
  );
};

export default Hero;
