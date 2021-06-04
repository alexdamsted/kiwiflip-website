import React from "react";
import Image from "next/image";
import { ImageWrap } from "./SignUpImage.elements";

const SignUpImage = ({ items }) => {
  const { signUpImage } = items.fields;

  return (
    <>
      <ImageWrap>
        <Image
          src={"https:" + signUpImage.fields.file.url}
          width={signUpImage.fields.file.details.image.width}
          height={signUpImage.fields.file.details.image.height}
        />
      </ImageWrap>
    </>
  );
};

export default SignUpImage;
