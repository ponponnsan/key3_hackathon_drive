/// <reference types="@types/googlemaps" />

import { Children, isValidElement, useEffect, useRef, useState, cloneElement } from "react";

type MapProps = google.maps.MapOptions & {
  style: { [key: string]: string };
  children?:
    | React.ReactElement<google.maps.MarkerOptions>[]
    | React.ReactElement<google.maps.MarkerOptions>;
};

export const Map: React.FC<MapProps> = ({ children, style, ...options }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    if (ref.current && !map) {
      const option = {
        center: options.center,
        zoom: 16,
      };
      setMap(new window.google.maps.Map(ref.current, option));
    }
  }, [ref, map]);

  return (
    <>
      <div ref={ref} style={style} />
      {Children.map(children, (child) => {
        if (isValidElement(child)) {
          // set the map prop on the child component
          // @ts-ignore
          return cloneElement(child, { map });
        }
      })}
    </>
  );
};
