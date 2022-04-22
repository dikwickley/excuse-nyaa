import "../styles/globals.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";
import Image from "next/image";
import Head from "next/head";
import { useState } from "react";
const getRandomExcuse = require("get-random-excuse");

const content = <div className="content">CALLOUT CONTENT</div>;

function MyApp({ Component, pageProps }) {
  const [excuse, setExcuse] = useState(
    "nyaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
  );

  const findRandomExcuse = () => {
    console.log("random excuse");
    setExcuse(getRandomExcuse());
  };
  return (
    <div className="bg-gradient-to-r from-[#28313b]  to-[#485461] h-[100vh] w-[100w] flex flex-col justify-center items-center">
      <Head>
        <title>Excuse me Nyaaa</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="w-[70%]">
        <div className="font-mono text-sm text-white">nyan cat says:</div>
        <div className="bg-white w-[100%]  text-black font-mono text-sm leading-4 p-2 break-words">
          {excuse}
        </div>
      </div>

      <Image src="/nyan.gif" alt="" title="" width="100%" height="100%" />

      <AwesomeButton
        onPress={() => {
          findRandomExcuse();
        }}
        type="secondary"
        style={{
          "--button-secondary-color": "#fffc6c",
          "--button-secondary-color-dark": "#b9b500",
          "--button-secondary-color-light": "#6c6a00",
          "--button-secondary-color-hover": "#fffb3e",
          "--button-secondary-border": "none",
        }}
        size="large"
        ripple={true}
      >
        <div className="font-mono">excuse</div>
      </AwesomeButton>
    </div>
  );
}

export default MyApp;
