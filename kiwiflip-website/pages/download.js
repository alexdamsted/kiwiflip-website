import Head from "next/head";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Download_Body from "../components/Download/Download_Body";
import { createClient } from "contentful";
import GlobalStyle from "../styles/globals";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESSKEY,
  });

  const downloadBodyRes = await client.getEntries({
    content_type: "downloadBody",
  });
  const footerRes = await client.getEntries({ content_type: "footer" });

  return {
    props: {
      downloadBody: downloadBodyRes.items,
      footer: footerRes.items,
    },
  };
}

export default function Download({ downloadBody, footer }) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {downloadBody.map((downloadBody) => (
        <Download_Body key={downloadBody.sys.id} items={downloadBody} />
      ))}

      {footer.map((footer) => (
        <Footer key={footer.sys.id} items={footer} />
      ))}
    </>
  );
}
