import { memo } from "react";
import type { FC, ReactNode } from "react";

import resets from "../_resets.module.css";
import classes from "./IconLocation.module.css";
interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vector?: ReactNode;
    vector2?: ReactNode;
  };
}
/* @figmaId 501:136 */
export default function IconLocation(props: Props) {
  return (
    <div
      className={`${resets.storybrainResets}  ${props.classes?.root || ""} ${
        props.className || ""
      } ${classes.root}`}
    >
      <img src={"location.png"}></img>
    </div>
  );
}
