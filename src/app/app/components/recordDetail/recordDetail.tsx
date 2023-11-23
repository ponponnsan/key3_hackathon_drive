import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Map } from "./map";
import { Marker } from "./marker";
import style from "./recordDetail.module.css"
import IconLocation from "../recordItem/IconLocation/IconLocation";
import IconHandshakeOutline from "../recordItem/IconHandshakeOutline/IconHandshakeOutline";

interface Props {
  from: string;
  message: string;
  ammount: string;
  timestamp: string;
  lat: number;
  lng: number;
  children?: React.ReactNode;
  issend: boolean;
  onClose?: () => void;
}
export default function RecordDetail(props: Props) {
  const render = (status: Status) => {
    return <div>{status}</div>;
  };
  const position = {
    lat: props.lat,
    lng: props.lng,
  } as google.maps.LatLngLiteral;

  return (
    <>
      <div className={style.container}>
        <div onClick={() => { if (props.onClose) props?.onClose() }} >
          <Wrapper
            apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_APIKEY as string}
            render={render}
          >
            <Map
              style={{ width: "100%", aspectRatio: "16 / 14" }}
              center={position}
            >
              <Marker key={""} position={{ lat: props.lat, lng: props.lng }} />
            </Map>
          </Wrapper>
        </div>
      </div>
      <div className={style.detailContainer}>
        <div style={{ textAlign: 'center', justifyContent: 'center', flexDirection: 'row', display: 'flex' }}>
          <img src={"icon.png"}></img>
        </div>

        <div style={{ display: "flex", textAlign: 'center' }}>
          <span >{props.from}さん</span>
          <span >{props.message}</span>
          {props.issend ?
            <span >を贈りました</span> :
            <span >が届きました</span>

          }

        </div>
        <div style={{ textAlign: 'center' }}>
          <span>{props.timestamp}</span>
        </div>

        <div style={{ display: "flex", textAlign: 'center' }}>
          <IconLocation />
          <span >
            東京都渋谷区代々木神園町２−１
          </span>
        </div>

        <div style={{ display: "flex", justifyContent: 'center' }}>
          <div >{props.ammount}</div>
          <div className={style.tokenicon}>
            <IconHandshakeOutline />
          </div>
        </div>

      </div>


    </>

  )

}
