import React from "react";
import {
  HeadingContainer,
  HeadingWrap,
  SubHeadingWrap,
} from "./Heading.elements";

const Heading = ({ items }) => {
  const { heading, subheading } = items.fields;

  return (
    <>
      <HeadingContainer>
        <HeadingWrap>{heading}</HeadingWrap>
        <SubHeadingWrap>{subheading}</SubHeadingWrap>
      </HeadingContainer>
    </>
  );
};

export default Heading;
