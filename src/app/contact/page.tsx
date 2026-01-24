"use client";

import Image from "next/image";
import OctagonButton from "@/components/OctagonButton";

export default function ContactPage() {
  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full">
        <Image
          src="/images/contact/image1.png"
          alt="Contact Background"
          width={1440}
          height={792}
          className="w-full h-[792px] object-cover object-top 2xl:h-auto"
        />
        <Image
          src="/images/contact/image2.png"
          alt="Contact Background"
          width={1440}
          height={1634}
          className="w-full h-[1634px] object-cover object-top 2xl:h-auto"
        />

        <video
          autoPlay
          loop
          muted
          playsInline
          width={1440}
          height={792}
          className="absolute left-0 top-0 w-full h-[792px] object-cover rotate-180 scale-x-[-1] [mix-blend-mode:plus-lighter] 2xl:h-auto"
        >
          <source src="/images/home/dust.mp4" type="video/mp4" />
        </video>

        <div className="absolute left-1/2 top-[117px] w-[calc(100%-24px)] -translate-x-1/2 md:-mt-4">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="Reedo_yellow_bold_34 mb-[81px]">contact us</h1>
            <h1 className="Reedo_white_bold_32 mb-[52px] w-full xs:w-[448px]">
              Let&apos;s Build the Future of Football
              <span className="bg-[#CFF419] text-black"> Together</span>
            </h1>
            <p className="Wanted_sans_white_light_16 mb-[60px] w-full text-left !leading-[22px] xs:w-[430px] lg:mb-[113px]">
              Whether you&apos;re a club seeking global talent and commercial
              growth, a brand looking to connect with the world&apos;s most
              influential sport, or a player ready to elevate your career —{" "}
              <span className="text-[#CFF419]">
                FittFind is your strategic partner.
              </span>
              <br />
              <br />
              We work across borders, time zones, and cultures to deliver
              tailored solutions with impact. Every conversation starts with
              potential. Let&apos;s unlock yours.
            </p>
            <h1 className="Reedo_yellow_bold_32 mb-7 w-[273px]">
              Who Should Reach Out?
            </h1>
            <div className="flex flex-wrap justify-center gap-4 mb-[60px] text-left lg:mb-[120px] lg:flex-nowrap">
              <div className="flex flex-col justify-between w-[160px] h-[260px] bg-[#D9D9D9] p-7.5 xs:w-[212px]">
                <h3 className="Reedo_black_bold_22">Clubs</h3>
                <p className="Wanted_sans_black_light_16">
                  Ready to activate sponsorships, find talent, or globalize your
                  brand
                </p>
              </div>
              <div className="flex flex-col justify-between w-[160px] h-[260px] bg-[#D9D9D9] p-7.5 xs:w-[212px]">
                <h3 className="Reedo_black_bold_22">brands</h3>
                <p className="Wanted_sans_black_light_16">
                  Want to collaborate with top players, clubs, or emerging
                  markets.
                </p>
              </div>
              <div className="flex flex-col justify-between w-[160px] h-[260px] bg-[#D9D9D9] p-7.5 xs:w-[212px]">
                <h3 className="Reedo_black_bold_22">players</h3>
                <p className="Wanted_sans_black_light_16">
                  Looking for elite representation or ready to make a strategic
                  move.
                </p>
              </div>
              <div className="flex flex-col justify-between w-[160px] h-[260px] bg-[#D9D9D9] p-7.5 xs:w-[212px]">
                <h3 className="Reedo_black_bold_22">
                  Media, Agents & Rights Holders
                </h3>
                <p className="Wanted_sans_black_light_16">
                  Seeking smart partnerships or creative collaboration.
                </p>
              </div>
            </div>
            <h3 className="Reedo_white_bold_22 mb-6 w-[256px]">
              Not Sure Where to Start?
            </h3>
            <p className="Wanted_sans_white_light_16 mb-[60px] w-full xs:w-[430px] lg:mb-[120px]">
              Drop us a message anyway. Whether you&apos;re looking to scout,
              scale, or sponsor — we&apos;ll help you make it happen.
            </p>
            <h1 className="Reedo_yellow_bold_32 mb-5">Let&apos;s Talk</h1>
            <div className="mb-[77px] w-full xs:w-auto">
              <OctagonButton
                variant="blur"
                cornerSize={12}
                borderColor="#CFF419"
                backgroundColor="rgba(255, 255, 255, 0.08)"
                className="Wanted_sans_white_light_24 w-full py-7.5 xs:w-auto xs:px-[70px]"
                onClick={() =>
                  (window.location.href = "mailto:partnerships@fittfind.com")
                }
              >
                partnerships@fittfind.com
              </OctagonButton>
            </div>
            <h3 className="Reedo_white_bold_16 mb-[26px]">Offices</h3>
            <p className="Wanted_sans_white_light_16 mb-[60px] !leading-6 lg:mb-[120px]">
              London <br />
              São Paulo
              <br /> Madrid (by appointment)
            </p>
            <div className="relative w-full h-full">
              <Image
                src="/images/home/image2.png"
                alt="Ball"
                width={136}
                height={136}
                className="absolute left-1/2 -translate-x-1/2 object-contain"
              />
              <Image
                src="/images/home/image1.png"
                alt="Player"
                width={376}
                height={1284}
                className="absolute left-1/2 top-[68px] -translate-x-1/2 object-contain"
              />
              <div className="absolute left-1/2 top-[65px] flex w-full -translate-x-1/2 flex-col items-center gap-7.5 text-center">
                <Image
                  src="/icons/mark2.svg"
                  alt="Player"
                  width={48}
                  height={26.67}
                />
                <h1 className="Reedo_white_bold_44 w-full !text-[32px] !leading-[39px] xs:w-[480px] md:w-[602px] md:!text-[44px] md:!leading-[53px]">
                  <span className="text-[#CFF419]">FittFind</span> <br />
                  Built for ambition. Driven by results.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
