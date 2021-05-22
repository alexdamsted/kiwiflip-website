import React from "react";
import { HeroBg, HeroContainer, VideoBg } from "./Hero.elements";

const Hero = ({ video }) => {
  const { heroVideo } = video.fields;

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
    </HeroContainer>
  );
};

export default Hero;
