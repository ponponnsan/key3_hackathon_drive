import { Wrapper, Status } from "@googlemaps/react-wrapper";
import { Map } from "./map";
import { Marker } from "./marker";
interface Props {
  from: string;
  message: string;
  ammount: number;
  timestamp: string;
  lat: number;
  lng: number;
  children?: React.ReactNode;
  onClose?: () => void;
}
export default function RecordDetail(props: Props) {
  const render = (status: Status) => {
    return <h1>{status}</h1>;
  };
  const position = {
    lat: props.lat,
    lng: props.lng,
  } as google.maps.LatLngLiteral;

  return (
    <>
      <div onClick={() => { if (props.onClose) props.onClose() }}>
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


    </>

  )

}
