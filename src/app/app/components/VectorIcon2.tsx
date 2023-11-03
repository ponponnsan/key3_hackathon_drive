import { memo, SVGProps } from 'react';

export default function VectorIcon2(props: SVGProps<SVGSVGElement>) {
    return (
        <svg preserveAspectRatio='none' viewBox='0 0 10 13' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
          <path
            d='M10 5C10 9.76133 5 12.5 5 12.5C5 12.5 0 9.76133 0 5C0 3.67392 0.526784 2.40215 1.46447 1.46447C2.40215 0.526784 3.67392 0 5 0C6.32608 0 7.59785 0.526784 8.53553 1.46447C9.47322 2.40215 10 3.67392 10 5Z'
            stroke='#828282'
            strokeWidth={1.5}
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      );

} 
// const Memo = memo(VectorIcon2);
// export { Memo as VectorIcon2 };
