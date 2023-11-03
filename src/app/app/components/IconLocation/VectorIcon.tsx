import { memo, SVGProps } from "react";

export default function VectorIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 6 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 3.5C6 4.29565 5.68393 5.05871 5.12132 5.62132C4.55871 6.18393 3.79565 6.5 3 6.5C2.20435 6.5 1.44129 6.18393 0.878679 5.62132C0.31607 5.05871 0 4.29565 0 3.5C0 2.70435 0.31607 1.94129 0.878679 1.37868C1.44129 0.81607 2.20435 0.5 3 0.5C3.79565 0.5 4.55871 0.81607 5.12132 1.37868C5.68393 1.94129 6 2.70435 6 3.5Z"
        stroke="black"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
// const Memo = memo(VectorIcon);
// export { Memo as VectorIcon };
