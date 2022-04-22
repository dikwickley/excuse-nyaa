import "../styles/globals.css";
import { AwesomeButton } from "react-awesome-button";
import "react-awesome-button/dist/styles.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-slate-700 h-[100vh] w-[100w] flex flex-col justify-center items-center">
      <AwesomeButton
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
        <div className="font-pixel">find excuse</div>
      </AwesomeButton>
    </div>
  );
}

export default MyApp;
