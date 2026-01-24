"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect, useRef } from "react";

interface FloatingMenuProps {
  cornerSize?: number;
}

export default function FloatingMenu({ cornerSize = 12 }: FloatingMenuProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [dimensions, setDimensions] = useState({ width: 430, height: 66 });
  const router = useRouter();

  const menus = [
    { label: "FOR BRANDS", link: "brands" },
    { label: "FOR PLAYERS", link: "players" },
    { label: "FOR CLUBS", link: "clubs" },
  ];

  useEffect(() => {
    if (contentRef.current) {
      const updateDimensions = () => {
        const rect = contentRef.current!.getBoundingClientRect();
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

  // Calculate corner percentages based on actual component dimensions
  const cornerPercentageX = (cornerSize / dimensions.width) * 100;
  const cornerPercentageY = (cornerSize / dimensions.height) * 100;

  return (
    <div className="relative">
      {/* Main content */}
      <div
        ref={contentRef}
        className="relative overflow-hidden bg-[#FFFFFF10] backdrop-blur-md px-6 py-7 md:pl-[34px] md:pr-[45px]"
        style={{
          clipPath: `polygon(${cornerSize}px 0, calc(100% - ${cornerSize}px) 0, 100% ${cornerSize}px, 100% calc(100% - ${cornerSize}px), calc(100% - ${cornerSize}px) 100%, ${cornerSize}px 100%, 0 calc(100% - ${cornerSize}px), 0 ${cornerSize}px)`,
        }}
      >
        {/* Ellipse background that moves on hover */}
        <div
          className={`absolute inset-0 w-full h-full transition-all duration-300 ease-out ${
            hoveredIndex !== null ? "opacity-100" : "opacity-0"
          }`}
          style={{
            transform:
              hoveredIndex !== null
                ? `translateX(${(hoveredIndex - 1) * 130}px)`
                : "translateX(0px)",
          }}
        >
          <Image
            width={264}
            height={66}
            alt="Ellipse background"
            src="/icons/ellipse.svg"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Menu items */}
        <div className="relative z-10 flex gap-4 md:gap-10 text-center text-xs font-bold uppercase tracking-[0.36px] text-white font-[family-name:var(--font-family-reedo)]">
          {menus.map((menu, index) => (
            <span
              key={index}
              className="relative h-[11px] cursor-pointer whitespace-nowrap transition-all duration-200 hover:text-[#CFF419]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => router.push(menu.link)}
            >
              {menu.label}
            </span>
          ))}
        </div>
      </div>

      {/* Border overlay - exact same polygon with only border */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="-0.2 0 100.4 100"
        preserveAspectRatio="none"
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
          stroke="#404040"
          strokeWidth="1"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
