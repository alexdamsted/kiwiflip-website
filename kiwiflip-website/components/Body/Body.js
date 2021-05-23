import React from "react";
import Image from "next/image";
import {
  BodyContainer,
  BodyRow,
  BodyWrapper,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  Subtitle,
  TextWrapper,
} from "./Body.elements";

const Body = ({ items }) => {
  const { bodyHeading, bodyParagraph, image } = items.fields;

  return (
    <BodyContainer>
      <BodyWrapper>
        <BodyRow>
          <Column1>
            <TextWrapper>
              <Heading>Heading</Heading>
              <Subtitle>Subtitle</Subtitle>
            </TextWrapper>
          </Column1>
          <Column2>
            <ImgWrap>
              <Image
                src={"https:" + image[0].fields.file.url}
                width={image[0].fields.file.details.image.width}
                height={image[0].fields.file.details.image.height}
              />
            </ImgWrap>
          </Column2>
        </BodyRow>
      </BodyWrapper>
    </BodyContainer>
  );
};

export default Body;
