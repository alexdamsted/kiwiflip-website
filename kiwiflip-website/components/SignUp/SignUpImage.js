import React from "react";
import Image from "next/image";

function SignUpImage({ items }) {
  const { signUpImage } = items.fields;

  return (
    <>
      <Image
        src={"https:" + signUpImage.fields.file.url}
        width={signUpImage.fields.file.details.image.width}
        height={signUpImage.fields.file.details.image.height}
      />
    </>
  );
}

export default SignUpImage;
