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
} from "./BodyMiddle.elements";

const BodyMiddle = ({ items }) => {
  const { heading, paragraph, image } = items.fields;
  return (
    <BodyContainer>
      <BodyWrapper>
        <Col1Row>
          <Column1>
            <TextWrapper>
              <Heading>{heading}</Heading>
              <Subtitle>{paragraph}</Subtitle>
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

export default BodyMiddle;
