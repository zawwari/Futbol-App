import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";

interface MenuProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
}

export default function Menu({ isMenuOpen, setIsMenuOpen }: MenuProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [loadingItem, setLoadingItem] = useState<string | null>(null);

  const onMenuClose = () => {
    setIsMenuOpen(false);
  };

  const handleNavigation = (path: string) => {
    if (pathname !== path) {
      setLoadingItem(path);
      router.push(path);
    } else {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      setLoadingItem(null);
    }
  }, [pathname]);

  return (
    <div
      className={`fixed overflow-y-auto inset-0 h-screen w-full bg-cover bg-center bg-[url('/images/menu/bg.png')] transition-all duration-300 ${
        isMenuOpen
          ? "pointer-events-auto opacity-100"
          : "pointer-events-none opacity-0"
      }`}
    >
      <div className="relative flex h-[190px] w-full items-center justify-between md:h-[117px]">
        {/* Logo - centered */}
        <div className="absolute left-1/2 top-[88px] -translate-x-1/2 transform md:top-[35px]">
          <Image
            src="/icons/nav_logo2.svg"
            alt="FITTFIND Logo"
            width={104.88}
            height={52.34}
            className="cursor-pointer"
            onClick={onMenuClose}
          />
        </div>

        {/* Menu - right side */}
        <div className="absolute right-10 top-[90px] md:top-[45px] xl:right-16">
          <Image
            src="/icons/menu_close.svg"
            alt="Menu"
            width={32.53}
            height={32.53}
            className="cursor-pointer"
            onClick={onMenuClose}
          />
        </div>
      </div>

      {/* Menu content with images */}
      <div className="absolute left-1/2 w-full -translate-x-1/2 lg:pt-[43px] pb-[76px] lg:pb-[24px] flex flex-col items-center justify-center gap-2 xs:gap-4 xl:gap-8 lg:flex-row">
        <div className="flex gap-2 xs:gap-4 xl:gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            <Image
              src="/images/menu/brands.png"
              alt="Brands"
              width={315}
              height={496}
              className="h-[268px] w-auto cursor-pointer xs:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[450px] 2xl:h-[496px]"
              onClick={() => handleNavigation("/brands")}
            />
            {loadingItem === "/brands" && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin bg-transparent p-2"></div>
              </div>
            )}
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            <Image
              src="/images/menu/players.png"
              alt="Players"
              width={315}
              height={496}
              className="h-[268px] w-auto cursor-pointer xs:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[450px] 2xl:h-[496px]"
              onClick={() => handleNavigation("/players")}
            />
            {loadingItem === "/players" && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin bg-transparent p-2"></div>
              </div>
            )}
          </motion.div>
        </div>
        <div className="flex gap-2 xs:gap-4 xl:gap-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            <Image
              src="/images/menu/clubs.png"
              alt="Clubs"
              width={315}
              height={496}
              className="h-[268px] w-auto cursor-pointer xs:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[450px] 2xl:h-[496px]"
              onClick={() => handleNavigation("/clubs")}
            />
            {loadingItem === "/clubs" && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin bg-transparent p-2"></div>
              </div>
            )}
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="relative"
          >
            <Image
              src="/images/menu/contact.png"
              alt="Contact"
              width={315}
              height={496}
              className="h-[268px] w-auto cursor-pointer xs:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[450px] 2xl:h-[496px]"
              onClick={() => handleNavigation("/contact")}
            />
            {loadingItem === "/contact" && (
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin bg-transparent p-2"></div>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
