"use client";

import FloatItemsMenu from "@/components/FloatItemsMenu";
import OctagonButton from "@/components/OctagonButton";
import Image from "next/image";
import { useRouter } from "next/navigation";

// Reusable contact content component
function ContactContent({ isVisible = true }: { isVisible?: boolean }) {
  const router = useRouter();

  return (
    <div
      className={`relative flex flex-col items-center justify-center px-4 pb-80 pt-14 text-center md:pt-[82px] ${
        !isVisible ? "opacity-0" : ""
      }`}
    >
      <Image
        src="/icons/mark1.svg"
        alt="Mark"
        width={48}
        height={26.67}
        className="mb-[33px]"
      />
      <h1 className="Reedo_black_bold_44 mb-[22px] md:w-[602px]">
        Let&apos;s Build the Future of Football
      </h1>
      <p className="Reedo_black_bold_22 mb-5 xs:w-[446px] md:mb-8">
        Partner with FittFind. Sign smarter. Grow globally. Win consistently.
      </p>
      <p className="Wanted_sans_black_light_16 mb-[44px] md:w-[662px]">
        FittFind transforms how clubs scout, sign, and scale their talent
        strategies. We offer professionalism, vision, and a hands-on approach
        that delivers. From the local pitch to the global stage, we help you
        build a stronger team and a bigger brand — every time.
      </p>
      <OctagonButton
        className="w-full xs:w-auto xs:px-[93px]"
        cornerSize={16}
        onClick={() => router.push("/contact")}
      >
        Contact Fittfind
      </OctagonButton>
    </div>
  );
}

// Reusable partnerships content component
function PartnershipsContent({ isVisible = true }: { isVisible?: boolean }) {
  return (
    <div
      className={`flex flex-col gap-6 px-4 py-5 xs:px-10 xs:py-6 md:flex-row lg:gap-[63px] lg:px-[85px] lg:pb-12 lg:pt-[50px] ${
        !isVisible ? "opacity-0" : ""
      }`}
    >
      <h1 className="Reedo_black_bold_32 xs:w-[344px]">
        Partnerships That Go Beyond the Pitch.
      </h1>
      <p className="Wanted_sans_black_light_16 xs:w-[314px]">
        From sleeve sponsors and training kit deals to naming rights and
        content-driven activations, we turn club visibility into scalable,
        long-term value.
        <br />
        <br />
        With deep networks across Europe, Africa, Asia, and the Americas, our
        commercial-first approach brings the right partners to your table — and
        the right results to your bottom line.
      </p>
    </div>
  );
}

export default function ClubsPage() {
  return (
    <main className="w-full overflow-hidden">
      <div className="relative w-full">
        <Image
          src="/images/for_clubs/image1.png"
          alt="Clubs Background"
          width={1440}
          height={936}
          className="w-full h-[720px] object-cover object-top lg:h-auto"
        />

        <div className="absolute left-1/2 top-[117px] w-full -translate-x-1/2 px-3 md:-mt-4">
          <div className="flex flex-col items-center justify-center gap-5 md:gap-8">
            <h1 className="Reedo_yellow_bold_34 mb-6 text-center">for clubs</h1>
            <h1 className="Reedo_white_bold_32 text-center xs:w-[432px]">
              COMMERCIAL GROWTH STARTS HERE
            </h1>
            <div className="Wanted_sans_white_light_16 flex flex-col gap-4 md:flex-row md:gap-[60px] lg:gap-[91px]">
              <p className="xs:w-[432px] md:w-[315px]">
                Elite clubs need more than great players — they need revenue
                growth, brand alignment, and untapped market access. FittFind
                delivers all three.
              </p>
              <p className="xs:w-[432px] md:w-[315px]">
                We help clubs unlock new income streams through strategic
                sponsorships, smart brand partnerships, and innovative
                commercial assets.
              </p>
            </div>
          </div>
        </div>

        <div className="absolute -bottom-[300px] left-1/2 block w-full -translate-x-1/2 px-6 md:hidden xs:-bottom-[200px]">
          <div className="flex flex-col items-center justify-center gap-8">
            <h1 className="Reedo_white_bold_32 text-center text-left xs:text-center w-full xs:w-[432px]">
              GLOBAL <br />
              SCOUTING &<br /> REPRESENTATION
            </h1>
            <div className="Wanted_sans_white_light_16 flex gap-4 flex-col">
              <p className="xs:w-[432px] md:w-[315px]">
                FittFind also provides sales and commercial consultancy to
                globally recognised brands and elite rights holders. We become
                an embedded extension of your commercial team, managing the full
                sales process from market analysis to execution.
              </p>
              <p className="xs:w-[432px] md:w-[315px]">
                With a data-led approach, we map the brand universe, identify
                untapped revenue streams, and navigate the evolving sports
                sponsorship landscape — helping you make smarter, faster, and
                more profitable decisions.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full mt-[620px] xs:mt-[520px] md:mt-40 lg:mt-20 xl:-mt-[90px]">
        <Image
          src="/images/for_clubs/image2.png"
          alt="Clubs Background"
          width={1440}
          height={810}
          className="w-full h-[645px] object-cover object-top lg:h-auto"
        />

        {/* Blend mode div for partnerships - same level as background image */}
        <div className="absolute -top-[280px] md:-top-[136px] left-1/2 -translate-x-1/2 z-10 px-3 w-full xs:w-auto bg-[#D9D9D9] [mix-blend-mode:plus-lighter]">
          <PartnershipsContent isVisible={false} />
        </div>

        {/* Content div for partnerships */}
        <div className="absolute -top-[280px] md:-top-[136px] left-1/2 -translate-x-1/2 z-20 px-3 w-full xs:w-auto">
          <PartnershipsContent isVisible={true} />
        </div>

        <div className="absolute top-3/4 xs:top-1/2 left-1/2 -translate-1/2 px-3 w-full md:w-auto">
          <h1 className="Reedo_white_bold_32 md:w-[530px] text-center">
            Let&apos;s{" "}
            <span className="bg-[#CFF419] text-black">
              monetize your potential.
            </span>{" "}
            Build stronger partnerships. And grow smarter together.
          </h1>
        </div>

        {/* FloatItemsMenu Container */}
        <div className="absolute -bottom-30 xl:-bottom-[166px] left-6 xl:left-[81px] z-20">
          <FloatItemsMenu
            className="hidden lg:block"
            items={[
              "COMMERCIAL PARTNERSHIPS & REVENUE GROWTH",
              "Access Emerging-Market Talent",
              "Commercial Partnerships & Branded Content",
              "Long-Term Strategic Partnership",
              "Contact",
            ]}
            sectionIds={[
              "commercial-partnerships",
              "emerging-market-talent",
              "branded-content",
              "strategic-partnership",
              "contact",
            ]}
          />
        </div>

        <div
          id="commercial-partnerships"
          className="absolute -bottom-[1200px] xs:-bottom-[1000px] md:-bottom-[600px] xl:-bottom-[650px] right-0 md:right-6 xl:right-[44px] z-10 w-90 xs:w-auto [mix-blend-mode:plus-lighter]"
        >
          <div className="flex flex-col gap-8 md:gap-[42px] px-7 py-8 md:px-8 md:py-9 xl:px-15 2xl:px-[116px] xl:py-[75px] bg-[#D9D9D9]">
            <p className="Reedo_black_bold_32 xs:w-[420px]">
              COMMERCIAL PARTNERSHIPS & REVENUE GROWTH
            </p>
            <div className="flex gap-8 md:gap-6 xl:gap-[77px] flex-col md:flex-row">
              <div className="flex flex-col xs:w-[382px] gap-[25px]">
                <p className="Reedo_black_bold_16">
                  We connect you with brands that align with your identity and
                  ambitions - forging impactful, long-term partnerships that go
                  beyond logos and into legacy.
                </p>
                <div className="Wanted_sans_black_light_16 flex flex-col gap-4">
                  <p>Assets We Help Commercialize:</p>
                  <ol className="list-disc pl-6">
                    <li className="mb-4">
                      Official Club Partnerships in Individual Categories
                    </li>
                    <li className="mb-4">
                      Cultural Placement & Entertainment Integration
                    </li>
                    <li className="mb-4">Front & Back of Shirt</li>
                    <li className="mb-4">Stadium Naming Rights</li>
                    <li className="mb-4">Sleeve Sponsors</li>
                    <li className="mb-4">Training Kit Sponsorship</li>
                    <li className="mb-4">Training Ground Naming Rights</li>
                    <li>Official Lead & Regional Partners</li>
                  </ol>
                  <p>
                    Our creative and commercial teams turn your players into
                    brand ambassadors, activate cultural relevance in key
                    markets, and generate real commercial returns.
                  </p>
                </div>
              </div>
              <div className="xs:w-[307px]">
                <div className="flex flex-col w-full gap-4 border-l-2 border-[#CFF419] pl-4">
                  <p className="Reedo_black_bold_16">Build Your Legacy</p>
                  <p className="Wanted_sans_black_light_16 xs:w-[246px]">
                    From front-of-shirt sponsorships to stadium naming rights
                    and official partnerships, we work across every commercial
                    touchpoint to help you unlock the full value of your
                    club&apos;s assets.
                    <br />
                    <br />
                    Whether you&apos;re a top-flight team or an elite academy,
                    our strategic outreach and global brand network become your
                    competitive edge.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full mt-[1150px] xs:mt-[958px] md:mt-[558px]">
        <Image
          src="/images/for_clubs/image3.png"
          alt="Clubs Background"
          width={1440}
          height={810}
          className="w-full h-[500px] xs:h-[810px] object-cover object-top xl:h-auto"
        />

        <div
          id="emerging-market-talent"
          className="absolute -bottom-110 xs:-bottom-60 md:-bottom-10 right-3 md:right-6 xl:right-[168px] z-10 w-80 xs:w-auto"
        >
          <div className="flex flex-col gap-8 md:gap-[42px]">
            <p className="Reedo_white_bold_36 xs:w-[440px]">
              Access Emerging-Market Talent
            </p>
            <div className="flex gap-8 md:gap-10 xl:gap-[77px] flex-col md:flex-row">
              <p className="Wanted_sans_white_light_16 xs:w-[382px]">
                FittFind scouts elite prospects from regions often overlooked —
                from Africa&apos;s academies to Asia&apos;s fast-rising youth
                systems.
                <br />
                <br />
                Our 60+ scouts in 40+ countries give clubs early access to a
                global pipeline of talent, with detailed player insights and
                proven potential. <br />
                <br />
                Whether it&apos;s a standout U17 or a ready-made pro, we match
                your needs with world-class precision.
              </p>
              <div className="xs:w-[307px]">
                <div className="flex flex-col w-full gap-4 border-l-2 border-[#CFF419] pl-4">
                  <h3 className="Reedo_white_bold_16">
                    Skip the infrastructure build — we&apos;ve got it covered.
                  </h3>
                  <p className="Wanted_sans_white_light_16 xs:w-[246px]">
                    Our reach becomes your reach.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full mt-[1110px] xs:mt-[790px] md:mt-[590px]">
        <Image
          src="/images/for_clubs/image4.png"
          alt="Clubs Background"
          width={1440}
          height={592}
          className="w-full h-[400px] xs:h-[592px] object-cover object-top xl:h-auto"
        />

        <div
          id="branded-content"
          className="absolute -top-[600px] xs:-top-[473px] right-0 md:right-6 xl:right-[44px] z-10 w-90 xs:w-auto [mix-blend-mode:plus-lighter]"
        >
          <div className="flex flex-col gap:8 md:gap-[42px] px-7 py-8 md:px-8 md:py-9 xl:px-15 2xl:px-[116px] xl:py-[88px] bg-[#D9D9D9]">
            <p className="Reedo_black_bold_32 xs:w-[420px]">
              Commercial Partnerships & Branded Content
            </p>
            <div className="flex gap-6 xl:gap-[77px] flex-col md:flex-row">
              <div className="flex flex-col xs:w-[382px] gap-[25px]">
                <p className="Reedo_black_bold_16">
                  In modern football, a smart signing is also a commercial
                  asset.
                </p>
                <p className="Wanted_sans_black_light_16">
                  We help clubs turn players into brand ambassadors — unlocking
                  sponsorships, creating digital content, and expanding your
                  reach into new markets.
                  <br />
                  <br />
                  Our creative and commercial team builds authentic campaigns
                  that align club and player goals — boosting revenue,
                  visibility, and fan engagement on and off the pitch.
                </p>
              </div>
              <div className="xs:w-[307px]">
                <div className="flex flex-col w-full gap-4 border-l-2 border-[#CFF419] pl-4">
                  <p className="Reedo_black_bold_16">
                    Signed a star from Brazil?
                  </p>
                  <p className="Wanted_sans_black_light_16 xs:w-[246px]">
                    We&apos;ll help you leverage their following at home.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="strategic-partnership"
          className="absolute -bottom-90 md:-bottom-6 right-3 md:right-6 xl:right-[168px] z-10 w-80 xs:w-auto"
        >
          <div className="flex flex-col gap-8 md:gap-[42px]">
            <p className="Reedo_white_bold_36 xs:w-[420px]">
              Long-Term Strategic Partnership
            </p>
            <div className="flex gap-8 md:gap-10 xl:gap-[77px] flex-col md:flex-row">
              <div className="flex flex-col xs:w-[382px] gap-6">
                <p className="Reedo_yellow_bold_16">
                  FittFind is more than a service — we&apos;re your strategic
                  partner.
                </p>
                <p className="Wanted_sans_white_light_16">
                  We learn your club&apos;s DNA and proactively deliver value:
                  from bringing in talent that suits your style to helping run
                  tours or content campaigns that expand your reach.
                </p>
              </div>
              <div className="xs:w-[307px]">
                <div className="flex flex-col w-full gap-4 border-l-2 border-[#CFF419] pl-4">
                  <h3 className="Reedo_white_bold_16">
                    Need PR support during a tough moment?
                  </h3>
                  <p className="Wanted_sans_white_light_16 xs:w-[246px]">
                    Looking to tap into a new region? We&apos;re there. Because
                    we work at the intersection of talent, content, and
                    commerce, we offer a full-circle solution few agencies can
                    match.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full mt-80 md:-mt-[33px]">
        <Image
          src="/images/for_clubs/image5.png"
          alt="Clubs Background"
          width={1440}
          height={1082}
          className="w-full h-[1082px] object-cover object-top xl:h-auto"
        />

        {/* Blend mode div - same position and size as contact div */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full lg:w-[calc(100%-80px)] xl:w-[calc(100%-160px)] md:px-8 2xl:w-[1353px] bg-[#D8D8D8] [mix-blend-mode:plus-lighter]">
          <ContactContent isVisible={false} />
        </div>

        {/* Content div - no background, just content */}
        <div
          id="contact"
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full md:px-8 2xl:w-[1353px]"
        >
          <ContactContent isVisible={true} />
        </div>
      </div>

      <div className="relative w-full -mt-[300px] z-10">
        <Image
          src="/images/for_clubs/image6.png"
          alt="Clubs Background"
          width={1440}
          height={440}
          className="w-full h-[250px] xs:h-[440px] object-cover object-top xl:h-auto"
        />
      </div>
    </main>
  );
}
