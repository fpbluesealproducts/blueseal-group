import React from "react";

interface TornEdgeProps {
  color: string;
  position: "top" | "bottom";
  className?: string;
  flip?: boolean;
}

export const TornEdge: React.FC<TornEdgeProps> = ({
  color,
  position,
  className = "",
  flip = false,
}) => {
  // A more detailed "jagged" path for the torn effect
  const path =
    "M0,10 Q5,0 10,8 T20,10 T30,5 T40,12 T50,8 T60,15 T70,5 T80,10 T90,12 T100,5 L100,20 L0,20 Z";

  return (
    <div
      className={`relative w-full overflow-hidden leading-[0] ${className} ${position === "top" ? "rotate-180" : ""}`}
      style={{ height: "40px" }}
    >
      <svg
        viewBox="0 0 100 20"
        preserveAspectRatio="none"
        className={`w-full h-full fill-current ${flip ? "scale-x-[-1]" : ""}`}
        style={{ color }}
      >
        <path d={path} />
      </svg>
    </div>
  );
};
