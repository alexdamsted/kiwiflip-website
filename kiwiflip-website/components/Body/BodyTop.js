import React from "react";
import Image from "next/image";
import {
  BodyContainer,
  Col1Row,
  Col2Row,
  BodyWrapper,
  Column1,
  Column2,
  Heading,
  Img,
  ImgWrap,
  Subtitle,
  TextWrapper,
  SubHeading,
} from "./BodyTop.elements";

const BodyTop = ({ items }) => {
  const { bodyHeading, bodyParagraph, image } = items.fields;

  return (
    <BodyContainer>
      <BodyWrapper>
        <Col1Row>
          <Column1>
            <TextWrapper>
              <SubHeading>Easy to list</SubHeading>
              <Heading>{bodyHeading}</Heading>

              <Subtitle>{bodyParagraph}</Subtitle>
            </TextWrapper>
          </Column1>
        </Col1Row>
        <Col2Row>
          <Column2>
            <ImgWrap>
              <Image
                src={"https:" + image.fields.file.url}
                width={image.fields.file.details.image.width}
                height={image.fields.file.details.image.height}
              />
            </ImgWrap>
          </Column2>
        </Col2Row>
      </BodyWrapper>
    </BodyContainer>
  );
};

export default BodyTop;
