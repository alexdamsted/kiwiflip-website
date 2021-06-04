import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Heading from "../components/SignUp/Heading";
import Form from "../components/SignUp/Form";
import SignUpImage from "../components/SignUp/SignUpImage";
import Footer from "../components/Footer/Footer";
import {
  SignUpPageContainer,
  SignUpPageBackground,
} from "../styles/signup.elements";
import GlobalStyle from "../styles/globals";
import { createClient } from "contentful";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESSKEY,
  });

  const signUpPageRes = await client.getEntries({ content_type: "signUpPage" });
  const footerRes = await client.getEntries({ content_type: "footer" });

  return {
    props: {
      heading: signUpPageRes.items,
      form: signUpPageRes.items,
      image: signUpPageRes.items,
      footer: footerRes.items,
    },
  };
}

export default function SignUp({ heading, form, image, footer }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Sign Up</title>
      </Head>
      <Navbar />
      <SignUpPageBackground>
        <SignUpPageContainer>
          {heading.map((heading) => (
            <Heading key={heading.sys.id} items={heading} />
          ))}

          {form.map((form) => (
            <Form key={form.sys.id} items={form} />
          ))}

          {image.map((image) => (
            <SignUpImage key={image.sys.id} items={image} />
          ))}
        </SignUpPageContainer>
      </SignUpPageBackground>
      {footer.map((footer) => (
        <Footer key={footer.sys.id} items={footer} />
      ))}
    </>
  );
}
