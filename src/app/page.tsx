"use client";

import Image from "next/image";
import FloatingMenu from "@/components/FloatingMenu";
import OctagonButton from "@/components/OctagonButton";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative w-full min-h-screen">
      {/* Floating Menu */}
      <div className="fixed bottom-15 left-1/2 z-30 -translate-x-1/2">
        <FloatingMenu />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-x-0 top-44 w-full md:top-32">
        <div className="relative w-full h-full">
          <div className="absolute left-1/2 z-10 w-[85px] h-[85px] -translate-x-1/2 md:w-[136px] md:h-[136px]">
            <Image
              src="/images/home/image2.png"
              alt="Ball"
              fill
              className="object-contain"
            />
          </div>

          <div className="absolute left-1/2 top-[43px] z-10 w-[236px] h-[806px] -translate-x-1/2 md:top-[68px] md:w-[376px] md:h-[1284px]">
            <Image
              src="/images/home/image1.png"
              alt="Player"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative w-full overflow-hidden">
        <Image
          src="/images/contact/image1.png"
          alt="Home Background"
          width={1440}
          height={792}
          className="absolute inset-x-0 top-0 w-full h-[512px] object-cover object-top sm:h-[792px] xl:h-auto"
        />

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-x-0 top-0 w-full h-[512px] object-cover mix-blend-overlay scale-100 xs:scale-125 sm:h-[792px] lg:scale-150 xl:h-auto"
        >
          <source src="/images/home/video (1).mp4" type="video/mp4" />
        </video>

        <video
          autoPlay
          loop
          muted
          playsInline
          width={1440}
          height={792}
          className="absolute inset-x-0 top-0 w-full h-[812px] object-cover rotate-180 scale-x-[-1] [mix-blend-mode:plus-lighter] md:relative xl:h-auto"
        >
          <source src="/images/home/dust.mp4" type="video/mp4" />
        </video>

        <div className="relative left-1/2 z-20 flex w-full -translate-x-1/2 flex-col items-center justify-between gap-[108px] px-3 pb-[110px] pt-[500px] xs:px-12 md:absolute md:top-[250px] md:flex-row md:items-start md:py-0 lg:px-25 xl:px-40 2xl:px-60">
          <div className="flex flex-col gap-5 md:gap-9">
            <h1 className="Reedo_white_bold_56 !pt-2 xs:w-[303px]">
              GLOBAL FOOTBALL AGENCY
            </h1>
            <h4 className="Reedo_yellow_bold_14 w-[168px]">
              built for clubs, brands & players who want more
            </h4>
          </div>
          <div className="flex flex-col gap-8 xs:w-[316px]">
            <p className="Wanted_sans_gray_light_14">
              We specialize in brokering high-impact sponsorships, building
              strategic partnerships, and activating untapped revenue
              opportunities across football&apos;s most valuable assets. <br />
              <br />
              From stadium naming rights and kit deals to culturally aligned
              brand campaigns, FittFind helps turn influence into income.
            </p>
            <OctagonButton
              variant="outline"
              className="Reedo_yellow_bold_12 block w-full py-6 md:hidden"
              onClick={() => router.push("/contact")}
            >
              Contact Fittfind
            </OctagonButton>
          </div>
        </div>
      </div>

      {/* Player Section */}
      <div className="relative hidden w-full overflow-hidden md:block">
        <Image
          src="/images/home/stadium_all.png"
          alt="Home Background"
          width={1440}
          height={2286}
          className="w-full h-[1920px] object-cover object-top lg:h-auto"
        />

        <div className="absolute inset-x-10 top-[284px] flex flex-col gap-[84px] lg:inset-x-20 xl:left-[163px] xl:right-[241px]">
          <div className="flex justify-end">
            <p className="Reedo_yellow_bold_22 w-[200px] text-right">
              Your Game. Your Brand. Your Future.
            </p>
          </div>
          <div className="relative w-[692px]">
            <Image
              src="/icons/f-mark.svg"
              alt="F-Mark"
              width={74}
              height={84}
              className="absolute inset-x-0 top-0 z-10"
            />
            <h1 className="absolute inset-x-0 top-5 font-bold text-[146px] leading-[140px] uppercase text-[#869596] font-[family-name:var(--font-family-reedo)]">
              for players
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}
