import React from "react";
import { GrApple, GrAndroid } from "react-icons/gr";
import Image from "next/image";
import {
  DownloadContainer,
  DownloadWrapper,
  Col1Row,
  Column1,
  TextWrapper,
  SubHeading,
  Heading,
  Paragraph,
  Col2Row,
  Column2,
  ImgWrap,
  TermsAndConditions,
  DownloadButtonWrapper,
  DownloadButtonIos,
  DownloadButtonAndroid,
} from "./Download_Body.elements";

const Download_Body = ({ items }) => {
  const {
    heading,
    subHeading,
    paragraph,
    androidButtonText,
    iPhoneButtonText,
    termsAndConditions,
    image,
  } = items.fields;

  return (
    <DownloadContainer>
      <DownloadWrapper>
        <Col1Row>
          <Column1>
            <TextWrapper>
              <SubHeading>{subHeading}</SubHeading>
              <Heading>{heading}</Heading>
              <Paragraph>{paragraph}</Paragraph>
              <DownloadButtonWrapper>
                <DownloadButtonIos>
                  {iPhoneButtonText}
                  &nbsp;
                  <GrApple />
                </DownloadButtonIos>
                <DownloadButtonAndroid>
                  {androidButtonText}
                  &nbsp;
                  <GrAndroid />
                </DownloadButtonAndroid>
              </DownloadButtonWrapper>
              <TermsAndConditions>{termsAndConditions}</TermsAndConditions>
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
      </DownloadWrapper>
    </DownloadContainer>
  );
};

export default Download_Body;
