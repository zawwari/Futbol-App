"use client";

import Image from "next/image";
import OctagonButton from "../OctagonButton";
import { useRouter } from "next/navigation";

export default function ForBrands() {
  const router = useRouter();

  return (
    <main className="relative w-full">
      <div className="relative w-full overflow-hidden">
        <Image
          src="/images/for_brands/image_2.png"
          alt="Home Background"
          width={1440}
          height={1083}
          className="relative w-full h-[1083px] object-cover object-top mb-[2000px] xl:h-auto"
        />

        <video
          autoPlay
          loop
          muted
          playsInline
          width={1440}
          height={811}
          className="absolute inset-x-0 top-0 w-full h-[811px] object-cover rotate-180 scale-x-[-1] [mix-blend-mode:plus-lighter] xl:h-auto"
        >
          <source src="/images/home/dust.mp4" type="video/mp4" />
        </video>

        <div className="absolute top-[220px] left-[calc(50%-75px)] -translate-x-1/2 z-10">
          <div className="relative w-full h-full">
            <Image
              src="/images/for_brands/player_2.png"
              alt="Player"
              width={510}
              height={458}
              className="-rotate-10"
            />
            <Image
              src="/images/home/image2.png"
              alt="Player"
              width={80}
              height={80}
              className="absolute top-[90px] -right-8"
            />
          </div>
        </div>

        <div className="absolute top-[158px] flex justify-between left-[165px] right-[218px]">
          <div className="relative w-[692px]">
            <Image
              src="/icons/f-mark.svg"
              alt="F-Mark"
              width={74}
              height={84}
              className="absolute inset-x-0 top-0 z-10"
            />
            <h1 className="absolute inset-x-0 top-5 font-bold text-[146px] leading-[140px] uppercase text-[#869596] font-[family-name:var(--font-family-reedo)]">
              for brands
            </h1>
          </div>
          <p className="Reedo_yellow_bold_22 w-[224px]">
            Culture Meets Commerce
          </p>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-[900px] flex gap-10">
          <h3 className="Reedo_yellow_bold_22 w-[390px]">
            We build athlete-led campaigns that shift perception, drive emotion,
            and boost shareholder value.
          </h3>
          <p className="Wanted_sans_gray_light_16 w-[462px] !leading-[23px]">
            Where Culture Meets ROI — and Marketing Moves the Market.
            <br />
            <br />
            We help brands harness the power of football to drive real business
            outcomes: increased stock performance, elevated brand equity, and
            stronger sales pipelines.
            <br />
            <br />
            FittFind connects you with clubs, players, and platforms that align
            with your brand&apos;s identity, values, and growth strategy — then
            we turn those partnerships into performance.
          </p>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-[1400px] flex flex-wrap gap-7.5 w-[1010px] justify-start">
          <div className="flex justify-center w-[316px]">
            <h3 className="Reedo_yellow_bold_32 w-[200px] mt-5">
              FittFind helps brands:
            </h3>
          </div>
          <div className="w-[316px] h-40 bg-[#FFFFFF10] flex justify-center items-center rounded-2xl backdrop-blur-xl size text-center">
            <p className="Wanted_sans_white_light_16 w-[186px]">
              Leverage the world&apos;s most watched sport to tell brand stories
              that sell
            </p>
          </div>
          <div className="w-[316px] h-40 bg-[#FFFFFF10] flex justify-center items-center rounded-2xl backdrop-blur-xl size text-center">
            <p className="Wanted_sans_white_light_16 w-[186px]">
              Launch athlete- and club-led campaigns that drive conversion
            </p>
          </div>
          <div className="w-[316px] h-40 bg-[#FFFFFF10] flex justify-center items-center rounded-2xl backdrop-blur-xl size text-center">
            <p className="Wanted_sans_white_light_16 w-[186px]">
              Increase shareholder value through emotionally connected consumers
            </p>
          </div>
          <div className="w-[316px] h-40 bg-[#FFFFFF10] flex justify-center items-center rounded-2xl backdrop-blur-xl size text-center">
            <p className="Wanted_sans_white_light_16 w-[186px]">
              Enter new markets through culturally resonant partnerships
            </p>
          </div>
          <div className="w-[316px] h-40 bg-[#FFFFFF10] flex justify-center items-center rounded-2xl backdrop-blur-xl size text-center">
            <p className="Wanted_sans_white_light_16 w-[186px]">
              Strengthen brand relevance with emerging, Gen Z, and global
              audiences
            </p>
          </div>
          <div className="w-[316px] h-40 bg-[#FFFFFF10] flex justify-center items-center rounded-2xl backdrop-blur-xl size text-center">
            <p className="Wanted_sans_white_light_16 w-[186px]">
              Strategy that turns influence into commercial return
            </p>
          </div>
          <div className="w-[316px] h-40 bg-[#FFFFFF10] flex justify-center items-center rounded-2xl backdrop-blur-xl size text-center">
            <p className="Wanted_sans_white_light_16 w-[186px]">
              Align with clubs whose growth boosts your brand visibility and
              value
            </p>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-[2100px] flex flex-col justify-center items-center text-center">
          <Image
            src="/icons/mark2.svg"
            alt="Mark"
            width={48}
            height={26.67}
            className="mb-[33px]"
          />
          <h1 className="Reedo_white_bold_44 mb-[22px] w-[450px]">
            From storytelling to stock price
          </h1>
          <h3 className="Reedo_yellow_bold_22 mb-8 w-[446px]">
            we deliver brand impact with measurable return.
          </h3>
          <p className="Wanted_sans_white_light_16 mb-[50px] w-[326px]">
            FittFind aligns your brand with the right talent, the right story,
            and the right audience — for measurable business impact.
          </p>
          <OctagonButton
            className="w-full xs:w-auto xs:px-[29px]"
            onClick={() => router.push("/brands")}
          >
            View Brand Marketing
          </OctagonButton>
        </div>
      </div>
    </main>
  );
}
