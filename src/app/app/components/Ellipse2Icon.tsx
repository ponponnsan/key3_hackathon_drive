import { memo, SVGProps } from "react";

export default function Ellipse2Icon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 32 33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx={16} cy={16.5} r={16} fill="#D9D9D9" />
    </svg>
  );
}
// const Memo = memo(Ellipse2Icon);
// export { Memo as Ellipse2Icon };
