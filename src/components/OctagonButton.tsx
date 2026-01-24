import React, { useRef, useEffect, useState } from "react";

interface OctagonButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  cornerSize?: number;
  variant?: "solid" | "outline" | "blur";
  borderColor?: string;
  backgroundColor?: string;
}

export default function OctagonButton({
  children,
  className = "",
  onClick,
  cornerSize = 14,
  variant = "solid",
  borderColor = "#CFF419",
  backgroundColor,
}: OctagonButtonProps) {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [dimensions, setDimensions] = useState({ width: 300, height: 60 });

  useEffect(() => {
    if (buttonRef.current) {
      const updateDimensions = () => {
        const rect = buttonRef.current!.getBoundingClientRect();
        setDimensions({
          width: rect.width,
          height: rect.height,
        });
      };

      updateDimensions();
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    }
  }, []);

  if (variant === "outline") {
    // Calculate corner percentages based on actual button dimensions
    const cornerPercentageX = (cornerSize / dimensions.width) * 100;
    const cornerPercentageY = (cornerSize / dimensions.height) * 100;

    return (
      <div className="relative">
        {/* Main button content */}
        <button
          ref={buttonRef}
          className={`Reedo_black_bold_16 relative cursor-pointer overflow-hidden bg-transparent py-7.5 ${className}`}
          onClick={onClick}
          style={{
            clipPath: `polygon(${cornerSize}px 0, calc(100% - ${cornerSize}px) 0, 100% ${cornerSize}px, 100% calc(100% - ${cornerSize}px), calc(100% - ${cornerSize}px) 100%, ${cornerSize}px 100%, 0 calc(100% - ${cornerSize}px), 0 ${cornerSize}px)`,
            color: borderColor,
          }}
        >
          {children}
        </button>

        {/* Border overlay - exact same polygon with only border */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="-0.5 -1 101 103"
          preserveAspectRatio="none"
          style={{ zIndex: 20 }}
        >
          <polygon
            points={`${cornerPercentageX},0 ${
              100 - cornerPercentageX
            },0 100,${cornerPercentageY} 100,${100 - cornerPercentageY} ${
              100 - cornerPercentageX
            },100 ${cornerPercentageX},100 0,${
              100 - cornerPercentageY
            } 0,${cornerPercentageY}`}
            fill="none"
            stroke={borderColor}
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    );
  }

  if (variant === "blur") {
    // Calculate corner percentages based on actual button dimensions
    const cornerPercentageX = (cornerSize / dimensions.width) * 100;
    const cornerPercentageY = (cornerSize / dimensions.height) * 100;
    const bgColor = backgroundColor || "rgba(255, 255, 255, 0.08)";

    return (
      <div className="relative">
        {/* Main button content */}
        <button
          ref={buttonRef}
          className={`relative cursor-pointer overflow-hidden backdrop-blur-md px-4 py-2 ${className}`}
          onClick={onClick}
          style={{
            clipPath: `polygon(${cornerSize}px 0, calc(100% - ${cornerSize}px) 0, 100% ${cornerSize}px, 100% calc(100% - ${cornerSize}px), calc(100% - ${cornerSize}px) 100%, ${cornerSize}px 100%, 0 calc(100% - ${cornerSize}px), 0 ${cornerSize}px)`,
            backgroundColor: bgColor,
          }}
        >
          {children}
        </button>

        {/* Border overlay - exact same polygon with only border */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="-0.5 -1 101 102"
          preserveAspectRatio="none"
          style={{ zIndex: 20 }}
        >
          <polygon
            points={`${cornerPercentageX},0 ${
              100 - cornerPercentageX
            },0 100,${cornerPercentageY} 100,${100 - cornerPercentageY} ${
              100 - cornerPercentageX
            },100 ${cornerPercentageX},100 0,${
              100 - cornerPercentageY
            } 0,${cornerPercentageY}`}
            fill="none"
            stroke={borderColor}
            strokeWidth="1"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>
    );
  }

  // Default solid variant
  return (
    <button
      className={`cursor-pointer bg-[#CFF419] py-7.5 Reedo_black_bold_16 relative overflow-hidden ${className}`}
      onClick={onClick}
      style={{
        clipPath: `polygon(${cornerSize}px 0, calc(100% - ${cornerSize}px) 0, 100% ${cornerSize}px, 100% calc(100% - ${cornerSize}px), calc(100% - ${cornerSize}px) 100%, ${cornerSize}px 100%, 0 calc(100% - ${cornerSize}px), 0 ${cornerSize}px)`,
      }}
    >
      {children}
    </button>
  );
}
