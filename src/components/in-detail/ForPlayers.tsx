"use client";

import Image from "next/image";
import OctagonButton from "../OctagonButton";
import { useRouter } from "next/navigation";

export default function ForPlayers() {
  const router = useRouter();

  return (
    <main className="relative w-full">
      {/* Floating Elements */}
      <div className="absolute inset-x-0 top-44 w-full">
        <div className="relative w-full h-full">
          <div className="absolute left-1/2 z-10 -translate-x-1/2 w-[102px] h-[101px]">
            <Image
              src="/images/home/image2.png"
              alt="Ball"
              fill
              className="object-contain"
            />
          </div>
          <div className="absolute left-1/2 z-10 -translate-x-1/2 top-[51px] w-[280px] h-[954px]">
            <Image
              src="/images/home/image1.png"
              alt="Player"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      <div className="relative w-full overflow-hidden">
        <Image
          src="/images/contact/image1.png"
          alt="Home Background"
          width={1440}
          height={792}
          className="absolute inset-x-0 top-0 w-full object-cover object-top h-[792px] xl:h-auto"
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
          src="/images/for_players/stadium_opti.png"
          alt="Home Background"
          width={1440}
          height={2286}
          className="relative mt-24 w-full h-[2286px] object-cover object-top mb-[2000px]"
        />

        <div className="absolute top-[176px] flex justify-between left-[163px] right-[276px]">
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
          <p className="Reedo_yellow_bold_22 w-[200px] text-right">
            Your Game. Your Brand. Your Future.
          </p>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-[773px] flex justify-center items-center gap-[84px] text-center z-20">
          <p className="Reedo_yellow_bold_22 w-[250px]">
            From global scouting to branding
          </p>
          <h1 className="Reedo_white_bold_44 w-[144px]">we do it all</h1>
          <p className="Reedo_yellow_bold_22 w-[250px]">
            lifestyle support to post-career planning
          </p>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-[1100px] w-[891px] h-[569px] z-20 flex bg-[#D9D9D9] px-20 items-center justify-center">
          <div className="flex flex-col z-30">
            <h1 className="Reedo_black_bold_32 w-[344px] mb-5">
              Partnerships That Go Beyond the Pitch.
            </h1>
            <p className="Wanted_sans_black_light_16 w-[326px] mb-[67px]">
              We now focus exclusively on select, high-potential or elite
              players with global commercial appeal. <br />
              <br />
              We represent talent where we can truly add value through brand
              alignment, endorsement deals, and legacy-building partnerships.
            </p>
            <p className="Reedo_black_bold_22 w-[376px]">
              If you&apos;re already established and{" "}
              <span className="bg-[#cff419]">
                looking to scale commercially —{" "}
              </span>
              we can help.{" "}
            </p>
          </div>
          <div className="relative w-full h-full">
            <Image
              src="/icons/mark2.svg"
              alt="Mark"
              width={385}
              height={214}
              className="absolute left-0 top-1/2 -translate-y-1/2"
            />
          </div>
          <Image
            src="/images/for_players/image4_2.png"
            alt="Player"
            width={562}
            height={620}
            className="absolute bottom-0 -right-6 w-[562px] h-[620px] object-contain"
          />
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-[1800px] flex flex-col gap-[26px]">
          <Image src="/icons/mark3.svg" alt="Mark" width={35} height={40} />
          <h3 className="Reedo_yellow_bold_32 w-[273px]">FittFind helps you</h3>
          <div className="flex flex-wrap gap-9 w-[900px]">
            <div className="w-[431px] h-[180px] bg-[#D9D9D9] pt-14 pl-[55px] pr-[89px]">
              <h3 className="Reedo_black_bold_22">
                Grow your image & commercial appeal
              </h3>
              <p className="Wanted_sans_black_light_16">
                sleeve, venue, training kit, etc.
              </p>
            </div>
            <div className="w-[431px] h-[180px] bg-[#D9D9D9] pt-14 pl-[55px] pr-[89px]">
              <h3 className="Reedo_black_bold_22">
                Build a brand that lasts beyond the pitch
              </h3>
            </div>
            <div className="w-[431px] h-[180px] bg-[#D9D9D9] pt-14 pl-[55px] pr-[89px]">
              <h3 className="Reedo_black_bold_22 w-[250px]">
                Secure lucrative endorsement deals
              </h3>
            </div>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-[2500px] flex justify-center gap-[150px]">
          <h3 className="Reedo_yellow_bold_22 w-[273px]">
            We don&apos;t just represent talent — we monetize it.
          </h3>
          <div className="flex flex-col gap-8">
            <p className="Wanted_sans_white_light_16 w-[462px]">
              Whether you&apos;re with an agents or starting your journey, we’re
              ready to help you win.
            </p>
            <OctagonButton
              className="w-full xs:w-[300px] xs:px-[27px]"
              onClick={() => router.push("/players")}
            >
              Check Player Services
            </OctagonButton>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-[2800px] flex flex-wrap gap-7.5 w-[1024px] justify-center">
          <div className="flex justify-center w-[316px]">
            <h3 className="Reedo_yellow_bold_32 w-[200px] mt-5">
              WHY FITTFIND?
            </h3>
          </div>
          <div className="w-[316px] h-40 bg-[#FFFFFF10] flex justify-center items-center rounded-2xl backdrop-blur-xl size text-center">
            <p className="Wanted_sans_white_light_16 w-[186px]">
              Global brand network & commercial sponsors
            </p>
          </div>
          <div className="w-[316px] h-40 bg-[#FFFFFF10] flex justify-center items-center rounded-2xl backdrop-blur-xl size text-center">
            <p className="Wanted_sans_white_light_16 w-[186px]">
              Hands-on dealmakers and strategic operators
            </p>
          </div>
          <div className="w-[316px] h-40 bg-[#FFFFFF10] flex justify-center items-center rounded-2xl backdrop-blur-xl size text-center">
            <p className="Wanted_sans_white_light_16 w-[186px]">
              Commercial-first agency model
            </p>
          </div>
          <div className="w-[316px] h-40 bg-[#FFFFFF10] flex justify-center items-center rounded-2xl backdrop-blur-xl size text-center">
            <p className="Wanted_sans_white_light_16 w-[186px]">
              Trusted by clubs, athletes & brands alike
            </p>
          </div>
          <div className="w-[316px] h-40 bg-[#FFFFFF10] flex justify-center items-center rounded-2xl backdrop-blur-xl size text-center">
            <p className="Wanted_sans_white_light_16 w-[186px]">
              Global network across 40+ countries
            </p>
          </div>
          <div className="w-[316px] h-40 bg-[#FFFFFF10] flex justify-center items-center rounded-2xl backdrop-blur-xl size text-center">
            <p className="Wanted_sans_white_light_16 w-[186px]">
              Hands-on agents & dedicated creative teams
            </p>
          </div>
          <div className="w-[316px] h-40 bg-[#FFFFFF10] flex justify-center items-center rounded-2xl backdrop-blur-xl size text-center">
            <p className="Wanted_sans_white_light_16 w-[186px]">
              Transparent, honest, player-first culture
            </p>
          </div>
          <div className="w-[316px] h-40 bg-[#FFFFFF10] flex justify-center items-center rounded-2xl backdrop-blur-xl size text-center">
            <p className="Wanted_sans_white_light_16 w-[186px]">
              Commercial insight + football intelligence
            </p>
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-[3500px] flex flex-col justify-center items-center text-center">
          <Image
            src="/icons/mark2.svg"
            alt="Mark"
            width={48}
            height={26.67}
            className="mb-[33px]"
          />
          <h1 className="Reedo_white_bold_44 mb-[22px] w-[602px]">
            We&apos;re not here to follow trends.
          </h1>
          <h3 className="Reedo_yellow_bold_22 mb-10 w-[382px]">
            {" "}
            We&apos;re here to shape the future of football.
          </h3>
          <OctagonButton
            className="w-full xs:w-auto xs:px-[44px]"
            onClick={() =>
              (window.location.href = "mailto:partnerships@fittfind.com")
            }
          >
            Apply for Representation
          </OctagonButton>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 top-[4000px] flex gap-[116px] px-[86px] pt-16 pb-[70px] border border-[#979797]">
          <div className="flex flex-col gap-9">
            <h1 className="Reedo_white_bold_44 w-[302px]">READY TO CONNECT?</h1>
            <OctagonButton
              className="w-full xs:w-auto xs:px-[61px]"
              onClick={() => router.push("/players")}
            >
              Partner With Us{" "}
            </OctagonButton>
          </div>
          <div className="flex flex-col gap-8">
            <h3 className="Reedo_yellow_bold_22 w-[302px]">
              Whether you&apos;re a player, club, or brand - we want to hear
              from you.
            </h3>
            <OctagonButton
              variant="outline"
              className="w-full xs:px-[59px]"
              onClick={() => router.push("/contact")}
            >
              Contact FittFind
            </OctagonButton>
          </div>
        </div>
      </div>
    </main>
  );
}
