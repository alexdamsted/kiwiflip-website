import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SignUp_Body from "../components/SignUp/SignUp_Body";
import { createClient } from "contentful";
import GlobalStyle from "../styles/globals";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESSKEY,
  });

  const footerRes = await client.getEntries({ content_type: "footer" });

  return {
    props: {
      footer: footerRes.items,
    },
  };
}

export default function SignUp({ footer }) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <SignUp_Body />
      {footer.map((footer) => (
        <Footer key={footer.sys.id} items={footer} />
      ))}
    </>
  );
}
