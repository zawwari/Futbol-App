"use client";

import { useEffect, useState, useRef, useCallback } from "react";

interface FloatItemsMenuProps {
  items: string[];
  className?: string;
  stickyOffset?: number; // Distance from top when sticky
  leftPosition?: number; // Left position when sticky (will be overridden by responsive logic)
  sectionIds?: string[]; // IDs of sections to scroll to
}

export default function FloatItemsMenu({
  items,
  className = "",
  stickyOffset = 130,
  leftPosition, // This will be calculated responsively
  sectionIds = [],
}: FloatItemsMenuProps) {
  const [isSticky, setIsSticky] = useState(false);
  const [responsiveLeftPosition, setResponsiveLeftPosition] = useState(81);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isStickyRef = useRef(false);

  // Calculate responsive left position
  const updateLeftPosition = useCallback(() => {
    if (leftPosition !== undefined) {
      // Use provided leftPosition if explicitly set
      setResponsiveLeftPosition(leftPosition);
    } else {
      // Responsive logic: 81px for screens > 1280px, 24px for smaller screens
      const newLeftPosition = window.innerWidth > 1280 ? 81 : 24;
      setResponsiveLeftPosition(newLeftPosition);
    }
  }, [leftPosition]);

  // Smooth scroll to section with fade effect
  const scrollToSection = useCallback(
    (sectionId: string) => {
      const element = document.getElementById(sectionId);
      if (!element) return;

      setIsScrolling(true);

      // Add fade out effect
      document.body.style.opacity = "0.8";
      document.body.style.transition = "opacity 0.2s ease-out";

      // Calculate scroll position more accurately
      const elementRect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset;
      const elementTop = elementRect.top + scrollTop;
      const offsetPosition = elementTop - stickyOffset - 50; // Extra padding

      // Smooth scroll
      window.scrollTo({
        top: Math.max(0, offsetPosition), // Ensure we don't scroll to negative values
        behavior: "smooth",
      });

      // Remove fade effect after scroll
      setTimeout(() => {
        document.body.style.opacity = "1";
        setTimeout(() => {
          setIsScrolling(false);
        }, 100);
      }, 600);
    },
    [stickyOffset]
  );

  // Handle menu item click
  const handleItemClick = useCallback(
    (index: number) => {
      if (sectionIds[index]) {
        scrollToSection(sectionIds[index]);
      }
    },
    [sectionIds, scrollToSection]
  );

  // Handle keyboard navigation
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, index: number) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleItemClick(index);
      }
    },
    [handleItemClick]
  );

  const checkStickyPosition = useCallback(() => {
    if (!containerRef.current || !menuRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const scrollTop = window.pageYOffset;
    const containerTop = containerRect.top + scrollTop;
    const triggerPoint = containerTop - stickyOffset;

    if (scrollTop > triggerPoint && !isStickyRef.current) {
      isStickyRef.current = true;
      setIsSticky(true);
    } else if (scrollTop <= triggerPoint && isStickyRef.current) {
      isStickyRef.current = false;
      setIsSticky(false);
    }
  }, [stickyOffset]);

  useEffect(() => {
    let isComponentMounted = true;

    const handleScroll = () => {
      if (!isComponentMounted) return;

      // Always check sticky position, even during programmatic scrolling
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        if (isComponentMounted) {
          checkStickyPosition();
        }
      }, 16);
    };

    const handleResize = () => {
      if (isComponentMounted) {
        updateLeftPosition();
        checkStickyPosition();
      }
    };

    const initialCheck = () => {
      if (isComponentMounted) {
        setTimeout(() => {
          if (isComponentMounted) {
            updateLeftPosition();
            checkStickyPosition();
          }
        }, 0);
      }
    };

    // Add event listeners
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });

    // Initial position check
    if (document.readyState === "complete") {
      initialCheck();
    } else {
      window.addEventListener("load", initialCheck, { once: true });
    }

    return () => {
      isComponentMounted = false;
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", initialCheck);

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [checkStickyPosition, updateLeftPosition]); // Removed isScrolling dependency

  // Calculate menu height for spacer
  const menuHeight = menuRef.current?.offsetHeight || 200;

  return (
    <div ref={containerRef} className={className}>
      <div
        ref={menuRef}
        className={`transition-all duration-300 ease-out ${
          isSticky ? `fixed top-[${stickyOffset}px] z-50` : "relative"
        }`}
        style={
          isSticky
            ? {
                position: "fixed",
                top: `${stickyOffset}px`,
                left: `${responsiveLeftPosition}px`,
                zIndex: 50,
              }
            : {}
        }
      >
        <ul className="space-y-5 list-none" role="menu">
          {items.map((item, index) => (
            <li
              key={`${item}-${index}`}
              role="menuitem"
              tabIndex={0}
              onClick={() => handleItemClick(index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className={`Reedo_gray_bold_12 group relative w-[200px] cursor-pointer pl-6 transition-all duration-300 ease-out hover:w-[224px] hover:pl-12 hover:!text-[#CFF419] focus:outline-none focus:ring-2 focus:ring-[#CFF419] focus:ring-opacity-50 before:absolute before:left-0 before:top-0 before:text-md before:text-current before:content-['—'] before:transition-all before:duration-300 before:ease-out hover:before:scale-x-[3] hover:before:origin-left hover:before:!text-[#CFF419] ${
                isScrolling ? "pointer-events-none" : ""
              }`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Spacer to maintain layout when fixed */}
      {isSticky && (
        <div style={{ height: `${menuHeight}px` }} aria-hidden="true" />
      )}
    </div>
  );
}
