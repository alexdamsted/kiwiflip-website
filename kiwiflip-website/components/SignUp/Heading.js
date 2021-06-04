import React from "react";
import Link from "next/link";
import {
  HeadingContainer,
  HeadingWrap,
  SubHeadingWrap,
  LinkWrap,
} from "./Heading.elements";

const Heading = ({ items }) => {
  const { heading, subheading, loginInstead } = items.fields;

  return (
    <>
      <HeadingContainer>
        <HeadingWrap>{heading}</HeadingWrap>
        <SubHeadingWrap>
          {subheading}{" "}
          <Link href="/" passHref>
            <LinkWrap>{loginInstead}</LinkWrap>
          </Link>
        </SubHeadingWrap>
      </HeadingContainer>
    </>
  );
};

export default Heading;
