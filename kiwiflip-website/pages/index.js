import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar/Navbar";
import GlobalStyle from "../styles/globals";

export default function Home() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
    </>
  );
}
