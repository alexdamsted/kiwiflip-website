import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import BodyTop from "../components/Body/BodyTop";
import BodyMiddle from "../components/Body/BodyMiddle";
import { createClient } from "contentful";
import GlobalStyle from "../styles/globals";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESSKEY,
  });

  const heroRes = await client.getEntries({ content_type: "hero" });
  const bodyTopRes = await client.getEntries({ content_type: "body" });
  const bodyMiddleRes = await client.getEntries({ content_type: "bodyMiddle" });
  const footerRes = await client.getEntries({ content_type: "footer" });

  return {
    props: {
      hero: heroRes.items,
      bodyTop: bodyTopRes.items,
      bodyMiddle: bodyMiddleRes.items,
      footer: footerRes.items,
    },
  };
}

export default function Home({ hero, bodyTop, bodyMiddle, footer }) {
  console.log(bodyMiddle);
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {hero.map((hero) => (
        <Hero key={hero.sys.id} items={hero} />
      ))}
      {bodyTop.map((bodyTop) => (
        <BodyTop key={bodyTop.sys.id} items={bodyTop} />
      ))}
      {bodyMiddle.map((bodyMiddle) => (
        <BodyMiddle key={bodyMiddle.sys.id} items={bodyMiddle} />
      ))}
    </>
  );
}
