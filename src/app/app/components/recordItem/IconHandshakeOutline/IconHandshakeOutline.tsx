import { memo } from "react";
import type { FC, ReactNode } from "react";

import resets from "../_resets.module.css";
import classes from "./IconHandshakeOutline.module.css";

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    vector?: ReactNode;
  };
}
/* @figmaId 501:139 */
export default function IconHandshakeOutline(props: Props) {
  return (
    <div
      className={`${resets.storybrainResets} ${props.classes?.root || ""} ${props.className || ""
        } ${classes.root}`}
    >
      <div className={classes.vector}>
        <img src={"token.png"}></img>
      </div>
    </div>
  );
}
