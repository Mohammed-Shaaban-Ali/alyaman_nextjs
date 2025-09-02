import React from "react";

const TLArrowCircleTopRight = ({
  size = "20",
  className,
}: {
  size?: string;
  className?: string;
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="9.99999" cy="10.5001" r="8.33333" stroke="white" />
      <path
        d="M8.8215 8.14301H12.357M12.357 8.14301V11.6785M12.357 8.14301L7.64299 12.8571"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default TLArrowCircleTopRight;
