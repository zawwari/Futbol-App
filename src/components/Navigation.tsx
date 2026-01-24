"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import Menu from "./Menu";
import OctagonButton from "./OctagonButton";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const onMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleBackToHome = () => {
    router.push("/");
  };

  // Show back to home button when not on home page
  const showBackToHome = pathname !== "/";

  return (
    <nav className="fixed inset-x-0 top-0 z-[9999] w-full bg-transparent">
      <div className="relative flex h-[117px] w-full items-center justify-between">
        {/* Back to Home Button - left side */}
        {showBackToHome && (
          <div className="absolute left-3 top-[50px] md:left-4 md:top-[28px] lg:left-8 xl:left-16">
            <OctagonButton
              variant="blur"
              cornerSize={8}
              borderColor="#CCCCCC80"
              backgroundColor="rgba(255, 255, 255, 0.08)"
              className="Reedo_white_bold_12 px-4 py-4 md:px-8 md:py-[27px]"
              onClick={handleBackToHome}
            >
              <div className="flex items-center gap-2">
                <Image
                  src="/icons/back.svg"
                  alt="Back"
                  width={19}
                  height={10}
                />
                <span className="hidden md:inline">Back to home</span>
              </div>
            </OctagonButton>
          </div>
        )}

        {/* Logo - centered */}
        <div className="absolute left-1/2 top-12 -translate-x-1/2 transform md:top-[35px]">
          <Image
            src="/icons/nav_logo1.svg"
            alt="FITTFIND Logo"
            width={104.88}
            height={52.34}
            className="cursor-pointer"
            onClick={handleBackToHome}
          />
        </div>

        {/* Menu - right side */}
        <div className="absolute right-3 top-[66px] md:right-4 md:top-[53px] lg:right-8 xl:right-16">
          <Image
            src="/icons/menu_open.svg"
            alt="Menu"
            width={57}
            height={16}
            className="cursor-pointer"
            onClick={onMenuOpen}
          />
        </div>
      </div>
      <Menu isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </nav>
  );
}
