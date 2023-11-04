import { memo, SVGProps } from "react";

export default function VectorIcon2(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      preserveAspectRatio="none"
      viewBox="0 0 16 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M15.5 7.5C15.5 14.642 8 18.75 8 18.75C8 18.75 0.5 14.642 0.5 7.5C0.5 5.51088 1.29018 3.60322 2.6967 2.1967C4.10322 0.790176 6.01088 0 8 0C9.98912 0 11.8968 0.790176 13.3033 2.1967C14.7098 3.60322 15.5 5.51088 15.5 7.5Z"
        stroke="black"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
// const Memo = memo(VectorIcon2);
// export { Memo as VectorIcon2 };
