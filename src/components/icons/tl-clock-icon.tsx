import React from "react";

const TLClock = ({
  size = "16",
  className,
}: {
  className?: string;
  size?: string;
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.99998 14.6667C11.6819 14.6667 14.6666 11.6819 14.6666 8C14.6666 4.3181 11.6819 1.33333 7.99998 1.33333C4.31808 1.33333 1.33331 4.3181 1.33331 8C1.33331 11.6819 4.31808 14.6667 7.99998 14.6667ZM8.49998 4.66667C8.49998 4.39052 8.27612 4.16667 7.99998 4.16667C7.72384 4.16667 7.49998 4.39052 7.49998 4.66667V8C7.49998 8.21521 7.63769 8.40628 7.84187 8.47434L9.84187 9.14101C10.1038 9.22833 10.387 9.08675 10.4743 8.82478C10.5616 8.56281 10.4201 8.27965 10.1581 8.19232L8.49998 7.63962V4.66667Z"
        fill="#4E75FF"
      />
    </svg>
  );
};

export default TLClock;
