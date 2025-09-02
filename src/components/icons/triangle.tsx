import React from "react";

const Triangle = ({
  className,
  size = "75",
}: {
  className?: string;
  size?: string;
}) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 73 75"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M56.4247 1.26126C65.1204 -1.85628 73.93 5.60857 72.282 14.698L63.1668 64.9739C61.5188 74.0633 50.6493 77.9602 43.6016 71.9883L4.61901 38.9564C-2.42868 32.9845 -0.368732 21.6227 8.32691 18.5052L56.4247 1.26126Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default Triangle;
