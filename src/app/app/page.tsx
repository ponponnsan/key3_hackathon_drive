import Image from "next/image";
import Records from "./components/records";
import classes from './page.module.css';
import resets from './components/_resets.module.css';

export default function Home() {
  return (
    <>
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <Records />{" "}
      </div>
    </>
  );
}
