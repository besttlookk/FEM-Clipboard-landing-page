import type { NextPage } from "next";
import Head from "next/head";
import {
  BottomSection,
  FeatureOneSection,
  FeatureTwoSection,
  LogosSection,
} from "../layouts";
import HeroSection from "../layouts/HeroSection";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title> Clipboard | FEM</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HeroSection />
      <FeatureOneSection />
      <FeatureTwoSection />
      <LogosSection />
      <BottomSection />
    </>
  );
};

export default Home;
