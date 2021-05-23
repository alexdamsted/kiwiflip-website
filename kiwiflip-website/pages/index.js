import Head from "next/head";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Body from "../components/Body/Body";
import { createClient } from "contentful";
import GlobalStyle from "../styles/globals";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESSKEY,
  });

  const heroRes = await client.getEntries({ content_type: "hero" });
  const bodyRes = await client.getEntries({ content_type: "body" });
  const footerRes = await client.getEntries({ content_type: "footer" });

  return {
    props: {
      hero: heroRes.items,
      body: bodyRes.items,
      footer: footerRes.items,
    },
  };
}

export default function Home({ hero, body, footer }) {
  console.log(hero, body);
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {hero.map((hero) => (
        <Hero key={hero.sys.id} items={hero} />
      ))}
      {body.map((body) => (
        <Body key={body.sys.id} items={body} />
      ))}
    </>
  );
}
