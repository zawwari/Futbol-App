"use client";

import Image from "next/image";
import OctagonButton from "../OctagonButton";
import { useRouter } from "next/navigation";

export default function ForClubs() {
  const router = useRouter();

  return (
    <main className="relative w-full">
      <div className="relative w-full mb-[375px]">
        <Image
          src="/images/for_clubs/image7.png"
          alt="Home Background"
          width={1440}
          height={1056}
          className="relative w-full h-[1056px] object-cover object-top xl:h-auto"
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

        <Image
          src="/images/home/image2.png"
          alt="Player"
          width={115}
          height={115}
          className="absolute top-[210px] left-[calc(50%-25px)] -translate-x-1/2 z-10"
        />

        <div className="absolute top-[155px] flex justify-between left-[161px] right-[224px]">
          <div className="relative w-[550px]">
            <Image
              src="/icons/f-mark.svg"
              alt="F-Mark"
              width={74}
              height={84}
              className="absolute inset-x-0 top-0 z-10"
            />
            <h1 className="absolute inset-x-0 top-5 font-bold text-[146px] leading-[140px] uppercase text-[#869596] font-[family-name:var(--font-family-reedo)]">
              for clubs
            </h1>
          </div>
          <p className="Reedo_yellow_bold_22 w-[304px]">
            Your Commercial Growth Partner
          </p>
        </div>

        <Image
          src="/images/for_clubs/image9.png"
          alt="Home Background"
          width={1440}
          height={568}
          className="absolute w-full h-[568px] left-0 bottom-0 object-cover object-top xl:h-auto"
        />

        <div className="absolute left-1/2 -translate-x-1/2 -bottom-[400px] flex flex-col gap-[26px] z-10">
          <Image src="/icons/mark3.svg" alt="Mark" width={35} height={40} />
          <h3 className="Reedo_yellow_bold_32 w-[362px]">
            We help clubs generate new revenue streams through:
          </h3>
          <div className="flex flex-wrap gap-9 w-[900px]">
            <div className="w-[431px] h-[180px] bg-[#D9D9D9] pt-14 pl-[55px] pr-[89px]">
              <h3 className="Reedo_black_bold_22">Sponsorship brokering</h3>
              <p className="Wanted_sans_black_light_16">
                sleeve, venue, training kit, etc.
              </p>
            </div>
            <div className="w-[431px] h-[180px] bg-[#D9D9D9] pt-14 pl-[55px] pr-[89px]">
              <h3 className="Reedo_black_bold_22 w-[228px]">
                Brand partnership activation
              </h3>
            </div>
            <div className="w-[431px] h-[180px] bg-[#D9D9D9] pt-14 pl-[55px] pr-[89px]">
              <h3 className="Reedo_black_bold_22 w-[320px]">
                Creative Commercial asset packaging and valuation
              </h3>
            </div>
            <div className="w-[431px] h-[180px] bg-[#D9D9D9] pt-14 pl-[55px] pr-[89px]">
              <h3 className="Reedo_black_bold_22 w-[320px]">
                Cultural Placement & Entertainment Integration
              </h3>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full mb-[122px]">
        <Image
          src="/images/for_clubs/image8.png"
          alt="Home Background"
          width={1440}
          height={1713}
          className="relative w-full h-[1713px] object-cover object-top 2xl:h-auto"
        />

        <div className="absolute left-1/2 -translate-x-1/2 top-[138px] flex gap-[150px]">
          <h3 className="Reedo_yellow_bold_22 w-[273px]">
            Your Global Talent and Sponsorship Partner.
          </h3>
          <p className="Wanted_sans_gray_light_16 w-[462px] !leading-[23px]">
            From emerging teams to global giants, we scale your off-pitch
            success. Tap into emerging markets. Discover the next superstar.
            Execute flawless deals.
          </p>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-[337px] flex flex-col justify-center gap-10 items-center">
          <h3 className="Reedo_yellow_bold_32 w-[290px] text-center">
            FittFind helps clubs
          </h3>
          <div className="flex flex-wrap gap-7.5 w-[1010px] justify-start">
            <div className="w-[316px] h-40 bg-[#FFFFFF10] flex justify-center items-center rounded-2xl backdrop-blur-xl size text-center">
              <p className="Wanted_sans_white_light_16 w-[186px]">
                Generate Comprehensive Critical insights to monetize commercial
                assets{" "}
              </p>
            </div>
            <div className="w-[316px] h-40 bg-[#FFFFFF10] flex justify-center items-center rounded-2xl backdrop-blur-xl size text-center">
              <p className="Wanted_sans_white_light_16 w-[186px]">
                Region Specific Sponsorship data{" "}
              </p>
            </div>
            <div className="w-[316px] h-40 bg-[#FFFFFF10] flex justify-center items-center rounded-2xl backdrop-blur-xl size text-center">
              <p className="Wanted_sans_white_light_16 w-[186px]">
                Adopt a data-driven approach to sponsorship strategy{" "}
              </p>
            </div>
            <div className="w-[316px] h-40 bg-[#FFFFFF10] flex justify-center items-center rounded-2xl backdrop-blur-xl size text-center">
              <p className="Wanted_sans_white_light_16 w-[186px]">
                Activate commercial & branded campaigns
              </p>
            </div>
            <div className="w-[316px] h-40 bg-[#FFFFFF10] flex justify-center items-center rounded-2xl backdrop-blur-xl size text-center">
              <p className="Wanted_sans_white_light_16 w-[186px]">
                Secure talent with Sporting & commercial potential{" "}
              </p>
            </div>
            <div className="w-[316px] h-40 bg-[#FFFFFF10] flex justify-center items-center rounded-2xl backdrop-blur-xl size text-center">
              <p className="Wanted_sans_white_light_16 w-[186px]">
                Leverage a global scouting and talent network{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-[905px] flex flex-col justify-center items-center text-center">
          <Image
            src="/icons/mark2.svg"
            alt="Mark"
            width={48}
            height={26.67}
            className="mb-[33px]"
          />
          <h1 className="Reedo_white_bold_44 mb-[22px] w-[602px]">
            From
            <br /> scouting
            <br /> to sponsorships
          </h1>
          <h3 className="Reedo_yellow_bold_22 mb-8 w-[382px]">
            FittFind is your competitive edge
          </h3>
          <OctagonButton
            className="w-full xs:w-auto xs:px-[43px]"
            onClick={() => router.push("/clubs")}
          >
            See Club Solutions
          </OctagonButton>
        </div>
      </div>
    </main>
  );
}
