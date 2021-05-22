import Head from "next/head";
import Image from "next/image";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import { createClient } from "contentful";
import GlobalStyle from "../styles/globals";

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESSKEY,
  });

  const res = await client.getEntries({ content_type: "hero" });

  return {
    props: {
      hero: res.items,
    },
  };
}

export default function Home({ hero }) {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      {hero.map((hero) => (
        <Hero key={hero.sys.id} video={hero} />
      ))}
    </>
  );
}
