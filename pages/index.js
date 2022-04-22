import { AwesomeButton } from "react-awesome-button";
import "../styles/Button.module.css";
export default function Home() {
  return (
    <div className="bg-slate-700 h-[100vh] w-[100w] flex justify-center items-center">
      <div className="font-pixel">aniket</div>
      <div>Aniket</div>
      <AwesomeButton type="primary" size="large" ripple={true}>
        <div className="">Find Excuse</div>
      </AwesomeButton>
    </div>
  );
}
