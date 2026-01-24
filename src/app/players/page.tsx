"use client";

import FloatItemsMenu from "@/components/FloatItemsMenu";
import OctagonButton from "@/components/OctagonButton";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// Contact Section Component
interface ContactSectionProps {
  isVisible?: boolean;
  className?: string;
}

function ContactSection({
  isVisible = true,
  className = "",
}: ContactSectionProps) {
  const router = useRouter();

  return (
    <div
      className={`flex flex-col-reverse gap-3 lg:h-[665px] lg:gap-0 lg:flex-row ${
        !isVisible ? "opacity-0 pointer-events-none" : ""
      } ${className}`}
    >
      <div className="relative flex justify-center lg:w-[53%] xl:w-1/2">
        <Image
          src="/icons/mark2.svg"
          alt="Mark"
          width={445}
          height={247}
          className="absolute top-1/2 left-1/2 w-[242px] h-[135px] -translate-x-1/2 -translate-y-1/2 lg:left-[60px] lg:w-[445px] lg:h-[247px] lg:translate-x-0"
        />
        <Image
          src="/images/for_players/image4.png"
          alt="Player"
          width={650}
          height={716}
          className="absolute bottom-0 hidden lg:block"
        />
        <Image
          src="/images/for_players/image4_2.png"
          alt="Player"
          width={281}
          height={310}
          className="relative block lg:hidden"
        />
      </div>
      <div className="flex flex-col justify-center items-center pt-[57px] lg:w-[47%] lg:items-start lg:py-8 xl:w-1/2">
        <div className="flex flex-col items-center px-3 text-center lg:px-0">
          <Image
            src="/icons/mark1.svg"
            alt="Mark"
            width={48}
            height={26.67}
            className="mb-[33px]"
          />
          <h1 className="mb-[22px] !text-[30px] !leading-[36px] Reedo_black_bold_44 xs:!text-[44px] xs:!leading-[53px] xs:w-[472px]">
            READY TO MAKE YOUR MOVE?
          </h1>
          <p className="mb-5 !text-[21px] Reedo_black_bold_22 xs:!text-[22px] xs:w-[446px] lg:mb-8">
            Join us. Grow your game. Build your brand. Live your legacy.
          </p>
          <p className="mb-[44px] Wanted_sans_black_light_16 xs:w-[430px]">
            Whether you&apos;re changing agents or starting your journey,
            FittFind welcomes world-class and rising talent ready to build
            something great.
          </p>
          <OctagonButton
            variant="solid"
            className="mb-4 w-full xs:w-auto xs:px-[44px]"
            onClick={() =>
              (window.location.href = "mailto:partnerships@fittfind.com")
            }
          >
            Apply for Representation
          </OctagonButton>
          <OctagonButton
            variant="outline"
            borderColor="#000000"
            className="px-[59px]"
            onClick={() => router.push("/contact")}
          >
            Contact Fittfind
          </OctagonButton>
        </div>
      </div>
    </div>
  );
}

export default function PlayersPage() {
  const [marginBottom, setMarginBottom] = useState(32); // Default margin in pixels

  useEffect(() => {
    const calculateMargin = () => {
      const screenWidth = window.innerWidth;

      // Calculate margin based on screen width
      // Linear interpolation between different screen sizes
      let margin;
      if (screenWidth < 1024) {
        // Medium tablets: 48-64px
        margin = 51;
      } else if (screenWidth < 1280) {
        // Large tablets/small desktops: 64-96px
        margin = 48 + ((screenWidth - 1024) / (1280 - 1024)) * 32;
      } else if (screenWidth < 1536) {
        // Desktops: 96-128px
        margin = 96 + ((screenWidth - 1280) / (1536 - 1280)) * 32;
      } else {
        // Large desktops: 128-200px
        margin = 128 + ((screenWidth - 1536) / (1920 - 1536)) * 72;
      }

      setMarginBottom(Math.round(margin));
    };

    // Calculate initial margin
    calculateMargin();

    // Recalculate on window resize
    window.addEventListener("resize", calculateMargin);

    return () => window.removeEventListener("resize", calculateMargin);
  }, []);

  return (
    <main className="w-full overflow-hidden">
      <div className="relative w-full">
        <Image
          src="/images/for_players/image1.png"
          alt="Players Background"
          width={1440}
          height={880}
          className="w-full h-[500px] object-cover object-bottom md:scale-200 lg:h-auto"
        />

        <div className="absolute top-[117px] left-1/2 w-full -translate-x-1/2 md:-mt-4">
          <h1
            className="text-center Reedo_black_bold_34"
            style={{ marginBottom: `${marginBottom}px` }}
          >
            for players
          </h1>
          <div className="relative flex justify-center w-full">
            <Image
              src="/images/for_players/image2.png"
              alt="Player"
              width={191}
              height={334}
              className="w-auto h-[228px] md:h-[334px] 2xl:h-[440px]"
            />
            <Image
              src="/images/home/image2.png"
              alt="Ball"
              width={96}
              height={95}
              className="absolute top-[calc(50%+20px)] left-1/2 w-[200px] h-[200px] -translate-x-1/2 md:top-1/2 md:w-[96px] md:h-[95px]"
            />
          </div>
        </div>

        <div className="absolute -bottom-[270px] flex flex-col items-center justify-between w-full gap-5 px-3 text-center md:-bottom-50 lg:-bottom-16 lg:flex-row lg:items-start lg:text-left xs:px-8 xl:px-16">
          <h1 className="!text-[30px] !leading-[36px] Reedo_white_bold_36 xs:!text-[36px] xs:!leading-[43px] xs:w-[420px]">
            AGENCY. ADVOCATE. BRAND BUILDER.
          </h1>
          <p className="Wanted_sans_white_light_16 xs:w-[431px]">
            Whether you&apos;re an undiscovered talent, a young pro ready for
            the next step, or a world-class athlete, FittFind is built to
            elevate your football career and your commercial appeal.
          </p>
        </div>
      </div>

      <div className="relative flex flex-col justify-center items-center mt-[366px] px-[11px] text-center z-10 xs:px-8">
        <h1 className="mb-[25px] !text-[30px] !leading-[36px] Reedo_yellow_bold_32 xs:!text-[32px] xs:!leading-[39px]">
          Build Your Legacy
        </h1>
        <h3 className="mb-[34px] !text-[21px] Reedo_white_bold_22 xs:!text-[22px] xs:w-[420px] md:w-[607px]">
          With us, you&apos;re not just represented. You&apos;re{" "}
          <span className="text-[#CFF419]">protected, promoted,</span> and{" "}
          <span className="text-[#CFF419]">positioned</span> for greatness.
        </h3>
        <p className="Wanted_sans_white_light_16 xs:w-[382px]">
          We combine elite-level management, global scouting, and full-scope
          brand support to help you win - on and off the pitch.
        </p>
      </div>

      <div className="relative w-full -mt-10 md:mt-[187px]">
        <Image
          src="/images/for_players/image3.png"
          alt="Players Background"
          width={1440}
          height={778}
          className="w-full h-[520px] object-cover object-top md:h-[778px] xl:h-auto"
        />

        {/* FloatItemsMenu Container */}
        <div className="absolute top-10 left-6 xl:left-[81px] z-20">
          <FloatItemsMenu
            className="hidden lg:block"
            items={[
              "GLOBAL SCOUTING & REPRESENTATION",
              "BRAND BUILDING & COMMERCIAL GROWTH",
              "CREATIVE & CONTENT TEAM",
              "PERSONAL SUPPORT & LIFE SERVICES",
              "CAREER MANAGEMENT",
              "POST-CAREER TRANSITION",
              "CONTACT",
            ]}
            sectionIds={[
              "global-scouting",
              "brand-building",
              "creative-content",
              "personal-support",
              "career-management",
              "post-career-transition",
              "contact",
            ]}
          />
        </div>

        <div
          id="global-scouting"
          className="absolute top-80 right-3 w-80 z-10 md:top-0 md:right-6 xs:w-auto xl:right-[168px]"
        >
          <div className="flex flex-col gap-8 md:gap-[42px]">
            <p className="!text-[30px] !leading-[36px] Reedo_gray_bold_36 xs:!text-[36px] xs:!leading-[43px] xs:w-[420px] md:w-[545px]">
              GLOBAL SCOUTING & REPRESENTATION
            </p>
            <div className="flex flex-col gap-8 md:flex-row md:gap-10 xl:gap-[77px]">
              <p className="Wanted_sans_gray_light_16 xs:w-[382px]">
                Talent knows no borders, and neither do we. Our international
                network spans 5 continents and identifies emerging stars from
                favelas to elite academies.
                <br />
                <br />
                Whether you&apos;re 16 or 26, if you&apos;ve got the ability,
                we&apos;ll find you — and get you seen.
              </p>
              <div className="xs:w-[307px]">
                <div className="flex flex-col w-full gap-4 border-l-2 border-[#CFF419] pl-4">
                  <h3 className="Reedo_white_bold_16">
                    From Raw Talent to Global Icons.
                  </h3>
                  <p className="Wanted_sans_white_light_16 xs:w-[242px]">
                    Our experienced agents negotiate deals with transparency,
                    strategy, and your long-term growth in mind. You bring the
                    game; we bring the access, relationships, and results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="brand-building"
          className="flex justify-end mt-90 mr-3 z-10 md:absolute md:-bottom-[290px] md:mt-0 md:mr-0 md:right-6 xl:right-[168px]"
        >
          <div className="flex flex-col gap-8 w-80 md:gap-[42px] xs:w-auto">
            <p className="!text-[30px] !leading-[36px] Reedo_gray_bold_36 xs:!text-[36px] xs:!leading-[43px] xs:w-[429px] md:w-[545px]">
              BRAND BUILDING & COMMERCIAL GROWTH
            </p>
            <div className="flex flex-col gap-8 md:flex-row md:gap-10 xl:gap-[77px]">
              <div className="flex flex-col xs:w-[382px] gap-[25px]">
                <p className="Reedo_yellow_bold_16">
                  Your name is a brand. Your story is a business.
                </p>
                <div className="Wanted_sans_gray_light_16 flex flex-col gap-4">
                  <p>FittFind helps you build commercial value with:</p>
                  <ol className="list-disc pl-6">
                    <li className="mb-3">Endorsements & sponsorship deals</li>
                    <li className="mb-3">
                      Content strategy & social media management
                    </li>
                    <li className="mb-3">
                      Media training & public image coaching
                    </li>
                    <li className="mb-3">
                      Personal logo design & IP licensing
                    </li>
                    <li>Verified accounts & fanbase growth</li>
                  </ol>
                </div>
              </div>
              <div className="xs:w-[307px]">
                <div className="flex flex-col w-full gap-4 border-l-2 border-[#CFF419] pl-4">
                  <h3 className="Reedo_white_bold_16">
                    From Scouted to Sponsored — We Build More Than Players.
                  </h3>
                  <p className="Wanted_sans_white_light_16 xs:w-[246px]">
                    We align your values with the right partners, turning
                    cultural relevance into commercial power.
                    <br />
                    <br />
                    Athletes represented by FittFind can significantly increase
                    their market value through brand alignment, digital
                    presence, and off-pitch appeal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="creative-content"
        className="relative flex justify-end mt-24 mr-0 md:mt-[405px] md:mr-6 xl:mr-11"
      >
        <div className="flex flex-col gap-8 w-90 bg-[#D9D9D9] px-7 py-8 md:gap-[42px] md:px-8 md:py-9 xs:w-auto xl:px-15 xl:pt-[75px] xl:pb-[91px] 2xl:pl-[116px] 2xl:pr-[124px]">
          <p className="!text-[30px] !leading-[36px] Reedo_black_bold_36 xs:!text-[36px] xs:!leading-[43px] xs:w-[330px] xl:w-[382px]">
            CREATIVE & CONTENT TEAM
          </p>
          <div className="flex flex-col gap-8 md:flex-row md:gap-6 xl:gap-[77px]">
            <div className="flex flex-col gap-[25px] w-[330px] Wanted_sans_black_light_16 xl:w-[382px]">
              <p>Our in-house creative team builds:</p>
              <ol className="list-disc pl-6">
                <li className="mb-3">Personal content & visuals</li>
                <li className="mb-3"> Campaign decks for collaborations</li>
                <li className="mb-3">Social post design & rollout</li>
                <li>Brand IP & identity assets</li>
              </ol>
            </div>
            <div className="xs:w-[307px]">
              <div className="flex flex-col w-full gap-4 border-l-2 border-[#CFF419] pl-4">
                <p className="Reedo_black_bold_16 xs:w-[287px]">
                  You own your narrative - and we help you tell it with style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        id="personal-support"
        className="relative flex justify-end mt-[91px] mr-3 md:mr-6 xl:mr-[168px]"
      >
        <div className="flex flex-col gap-8 w-80 md:gap-[42px] xs:w-auto">
          <p className="!text-[30px] !leading-[36px] Reedo_gray_bold_36 xs:!text-[36px] xs:!leading-[43px] xs:w-[429px] md:w-[500px]">
            PERSONAL SUPPORT & LIFE SERVICES
          </p>
          <div className="flex flex-col gap-[25px] xs:w-[420px] md:w-[730px] xl:w-[766px]">
            <p className="Reedo_yellow_bold_16">
              You&apos;re never alone. We&apos;re by your side, every step of
              the way.
            </p>
            <div className="Wanted_sans_gray_light_16 flex flex-col gap-4">
              <p>
                Let us handle the off-field pressures so you can focus on
                performance.
              </p>
              <ol className="list-disc pl-6">
                <li className="mb-3">Relocation & housing logistics</li>
                <li className="mb-3">Visas, contracts, and legal support</li>
                <li className="mb-3">
                  Financial planning & investment strategy
                </li>
                <li className="mb-3">Mental health & wellness guidance</li>
                <li>Reputation & crisis management</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div
        id="career-management"
        className="relative flex justify-end mt-[78px] mr-3 md:mt-[100px] md:mr-6 xl:mr-[168px]"
      >
        <div className="flex flex-col gap-8 w-80 md:gap-[42px] xs:w-auto">
          <p className="!text-[30px] !leading-[36px] Reedo_gray_bold_36 xs:!text-[36px] xs:!leading-[43px] xs:w-[429px] md:w-[545px]">
            CAREER MANAGEMENT
          </p>
          <div className="flex flex-col gap-[25px] xs:w-[420px] md:w-[730px] xl:w-[766px]">
            <p className="Reedo_yellow_bold_16">
              We don&apos;t just manage your career - we curate it for long-term
              success.
            </p>
            <div className="flex flex-col gap-4 Wanted_sans_gray_light_16 xs:w-[400px]">
              <p>
                Every stage of your career deserves expert guidance. We support
                your journey from debut to retirement:
              </p>
              <ol className="list-disc pl-6">
                <li className="mb-3">First pro contract</li>
                <li className="mb-3">Transfer strategy</li>
                <li className="mb-3">Contract extensions</li>
                <li>Mentorship and family support</li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div
        id="post-career-transition"
        className="relative w-full mt-30 mb-40 md:mt-20 lg:mb-0"
      >
        <Image
          src="/images/for_players/image5.png"
          alt="Players Background"
          width={1440}
          height={1337}
          className="w-full h-[1337px] object-cover object-top xl:h-auto"
        />

        <div className="absolute -top-[50px] right-0 md:top-[26px] md:right-6 xl:right-11">
          <div className="flex flex-col gap-8 w-90 bg-[#D9D9D9] px-7 py-8 md:gap-[42px] md:px-8 md:py-9 xs:w-auto xl:px-15 xl:pt-[75px] xl:pb-[72px] 2xl:pl-[116px] 2xl:pr-[124px]">
            <p className="!text-[30px] !leading-[36px] Reedo_black_bold_36 xs:!text-[36px] xs:!leading-[43px] xs:w-[330px] xl:w-[382px]">
              POST-CAREER TRANSITION
            </p>
            <div className="flex flex-col gap-8 md:flex-row md:gap-6 xl:gap-[77px]">
              <div className="flex flex-col gap-[25px] Wanted_sans_black_light_16 xs:w-[330px] xl:w-[382px]">
                <p>
                  When football ends, your story doesn&apos;t. We help you plan
                  for the next chapter:
                </p>
                <ol className="list-disc pl-6">
                  <li className="mb-4">
                    Coaching licenses & executive training
                  </li>
                  <li className="mb-4">
                    Media opportunities & commentary roles
                  </li>
                  <li className="mb-4">
                    Product development & brand ownership
                  </li>
                  <li>Community initiatives & ambassador programs</li>
                </ol>
              </div>
              <div className="xs:w-[307px]">
                <div className="flex flex-col w-full gap-4 border-l-2 border-[#CFF419] pl-4">
                  <p className="Reedo_black_bold_16 xs:w-[287px]">
                    Your legacy is a long game. Let&apos;s play it right.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Blend mode div - same level as background image */}
        <div className="absolute -bottom-15 left-1/2 w-full bg-[#D9D9D9] -translate-x-1/2 [mix-blend-mode:plus-lighter] lg:bottom-0 xl:bottom-6 xl:w-[1353px] 2xl:bottom-12">
          <ContactSection isVisible={false} />
        </div>

        {/* Content div - visible content */}
        <div
          id="contact"
          className="absolute -bottom-15 left-1/2 w-full -translate-x-1/2 lg:bottom-0 xl:bottom-6 xl:w-[1353px] 2xl:bottom-12"
        >
          <ContactSection />
        </div>
      </div>
    </main>
  );
}
