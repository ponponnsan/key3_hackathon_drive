import { memo } from "react";
import type { FC } from "react";

// import resets from '../_resets.module.css';
import classes from "./Frame625697.module.css";
import IconLocation from "./IconLocation/IconLocation";
import IconHandshakeOutline from "./IconHandshakeOutline/IconHandshakeOutline";
interface Props {
  className?: string;
  from: string;
  message: string;
  ammount: number;
  timestamp: string;
  issend: boolean;
}
/* @figmaId 501:148 */
export default function RecordItem(props: Props) {
  return (
    <div className={` ${classes.root}`}>
      <div className={classes.frame625643}>
        <div className={classes.ellipse2}>
          <img src={"icon.png"}></img>
        </div>
        <div className={classes.frame625640}>
          <div className={classes._1453}>{props.timestamp}</div>
          <div className={classes.unnamed}>
            <p className={classes.labelWrapper}>
              <span className={classes.label}>{props.from}さん</span>
              <span className={classes.label2}>{props.message}</span>
              {props.issend ?
                <span className={classes.label3}>が届きました</span> :
                <span className={classes.label3}>を贈りました</span>

              }
            </p>
          </div>
          <div className={classes.frame625639}>
            <IconLocation className={classes.iconLocation} />
            <div className={classes.unnamed2}>
              東京都渋谷区代々木神園町２−１
            </div>
          </div>
        </div>
      </div>
      <div className={classes.frame625641}>
        <div className={classes._1}>{props.ammount}</div>
        <div className={classes.frame625638}>
          <IconHandshakeOutline className={classes.iconHandshakeOutline} />
        </div>
      </div>
    </div>
  );
}
