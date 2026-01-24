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
      className={`flex w-full flex-col items-start justify-center px-3.5 pb-10 pt-42 lg:w-1/2 lg:py-[45px] xl:py-[70px] 2xl:py-[130px] ${
        !isVisible ? "pointer-events-none opacity-0" : ""
      }`}
    >
      <div className="flex flex-col items-center text-center">
        <Image
          src="/icons/mark1.svg"
          alt="Mark"
          width={48}
          height={26.67}
          className="mb-[33px]"
        />
        <h1 className="Reedo_black_bold_44 mb-[22px] !text-[30px] !leading-[36px] md:!text-[44px] md:!leading-[53px] xl:w-[602px]">
          Ready to build a culturally driven, ROI-focused partnership?{" "}
        </h1>
        <p className="Reedo_black_bold_22 mb-8 xl:w-[446px]">
          Let&apos;s talk{" "}
        </p>
        <OctagonButton
          className="mb-4 w-full xs:w-auto xs:px-[93px]"
          onClick={() => router.push("/contact")}
        >
          Contact Fittfind
        </OctagonButton>
      </div>
    </div>
  );
}

// Reusable contact section content component
function ContactSectionContent({ isVisible = true }: { isVisible?: boolean }) {
  return (
    <div
      className={`flex flex-col lg:flex-row ${
        !isVisible ? "pointer-events-none opacity-0" : ""
      }`}
    >
      <div className="relative w-full lg:w-1/2">
        <Image
          src="/icons/mark2.svg"
          alt="Mark"
          width={560}
          height={311}
          className="absolute left-1/2 top-1/2 h-auto w-[393px] -translate-x-1/2 -translate-y-1/3 md:w-[460px] md:-translate-y-1/2 lg:left-8 lg:w-[calc(100%-48px)] lg:translate-x-0 2xl:left-[60px] 2xl:w-[560px]"
        />
        <Image
          src="/images/for_brands/player.png"
          alt="Player"
          width={581}
          height={601}
          className="absolute bottom-0 hidden h-auto w-[calc(100%-48px)] lg:block 2xl:w-[581px]"
        />
        <Image
          src="/images/for_brands/player_2.png"
          alt="Player"
          width={581}
          height={601}
          className="absolute -bottom-[200px] left-[calc(50%-24px)] block h-auto w-[363px] -translate-x-1/2 md:left-1/2 md:w-[481px] lg:left-0 lg:hidden lg:translate-x-0"
        />
      </div>
      <ContactContent isVisible={isVisible} />
    </div>
  );
}

export default function BrandsPage() {
  return (
    <main className="w-full overflow-hidden">
      {/* Hero Section */}
      <div className="relative w-full mt-[117px]">
        <Image
          src="/images/for_brands/image1.png"
          alt="Brands Background"
          width={1920}
          height={2747}
          className="relative hidden md:block w-full h-[2747px] object-cover object-top pt-0 md:pt-0 xs:pt-20 pt-40 2xl:h-auto"
        />

        <div className="relative -z-1 pt-40 xs:pt-0">
          <Image
            src="/images/for_brands/image_1.png"
            alt="Brands Background"
            width={1920}
            height={896}
            className="block md:hidden w-full h-[510px] object-cover object-top xs:h-[640px] md:h-[896px] 2xl:h-auto"
          />
        </div>
        <div className="relative -z-2">
          <Image
            src="/images/for_brands/image_2.png"
            alt="Brands Background"
            width={1920}
            height={1083}
            className="block md:hidden w-full h-[1083px] object-cover object-top -mt-100 2xl:h-auto"
          />
        </div>
        <div className="relative">
          <Image
            src="/images/for_brands/image_3.png"
            alt="Brands Background"
            width={1920}
            height={912}
            className="block md:hidden w-full h-[912px] object-cover object-top 2xl:h-auto"
          />
        </div>

        {/* Main Content */}
        <div className="absolute top-0 left-0 w-full">
          <div className="relative flex flex-col justify-center items-center gap-6 px-3 xs:px-8">
            <h1 className="Reedo_yellow_bold_34 mb-4 text-center md:-mt-4 md:mb-14">
              for brands
            </h1>
            <h1 className="Reedo_white_bold_32 hidden md:block !text-[30px] text-center xs:!text-[32px] md:w-[606px]">
              Drive Sales. Build Loyalty. Shape Culture. Grow Value.
            </h1>
            <p className="Wanted_sans_white_light_16 hidden md:block text-center md:w-[720px] md:text-left">
              FittFind partners with the world&apos;s most ambitious and iconic
              brands to create commercially impactful, culturally relevant, and
              measurably effective campaigns. Our unique position — bridging
              elite athletes, global audiences, and authentic storytelling —
              enables us to drive not only engagement, but real business
              results.
            </p>
            <h1 className="Reedo_white_bold_32 block md:hidden !text-[30px] text-center xs:!text-[32px] md:w-[606px]">
              AGENCY. ADVOCATE. BRAND BUILDER.
            </h1>
            <p className="Wanted_sans_white_light_16 block md:hidden text-center md:w-[720px] md:text-left">
              Whether you&apos;re an undiscovered talent, a young pro ready for
              the next step, or a world-class athlete, FittFind is built to
              elevate your football career and your commercial appeal.
            </p>
          </div>
        </div>

        {/* Secondary Content */}
        <div className="absolute top-[26%] xs:top-[24%] left-0 w-full md:top-[37%]">
          <div className="relative flex flex-col justify-center items-start gap-8 px-6 pb-48 xs:px-8 xs:items-center md:flex-row md:gap-14 md:items-start">
            <h1 className="Reedo_white_bold_32 !text-[30px] xs:!text-[32px] xs:w-[344px] md:block hidden">
              But we <br />
              don&apos;t stop at
              <br /> introductions.
            </h1>
            <p className="Wanted_sans_white_light_16 xs:w-[314px] md:block hidden">
              FittFind also provides sales and commercial consultancy to
              globally recognised brands and elite rights holders. We become an
              embedded extension of your commercial team, managing the full
              sales process from market analysis to execution. <br />
              <br />
              With a data-led approach, we map the brand universe, identify
              untapped revenue streams, and navigate the evolving sports
              sponsorship landscape — helping you make smarter, faster, and more
              profitable decisions.
            </p>
            <h1 className="Reedo_white_bold_32 !text-[30px] xs:!text-[32px] w-[323px] xs:w-[344px] md:hidden block">
              GLOBAL SCOUTING & REPRESENTATION
            </h1>
            <p className="Wanted_sans_white_light_16 xs:w-[314px] md:hidden block">
              FittFind also provides sales and commercial consultancy to
              globally recognised brands and elite rights holders. We become an
              embedded extension of your commercial team, managing the full
              sales process from market analysis to execution.
              <br />
              <br />
              With a data-led approach, we map the brand universe, identify
              untapped revenue streams, and navigate the evolving sports
              sponsorship landscape — helping you make smarter, faster, and more
              profitable decisions.
            </p>
          </div>
        </div>

        {/* Impressions Section */}
        <div className="absolute top-[52%] xs:top-[50%] md:top-[55%] left-0 w-full">
          <div className="relative flex flex-col justify-center items-center gap-3 px-3 xs:px-8">
            <h1 className="Reedo_white_bold_32 !text-[30px] xs:!text-[32px] text-center xs:w-[530px]">
              We deliver more than impressions
            </h1>
            <h3 className="Reedo_yellow_bold_22 text-center !text-[21px] w-[320px] xs:!text-[22px] xs:w-[430px]">
              we deliver results that impact sales, brand equity, and
              shareholder value.
            </h3>
          </div>
        </div>

        {/* Football Section */}
        <div className="absolute top-[65%] xs:top-[63%] left-0 w-full md:top-[72%] lg:top-[71%]">
          <div className="relative flex flex-col justify-center items-center gap-8 px-3 text-center xs:px-8 md:flex-row md:gap-6 md:text-left lg:gap-20">
            <div className="flex flex-col items-center gap-10 md:gap-[57px] md:items-start">
              <div className="flex flex-col gap-3 w-[344px] md:gap-6">
                <h1 className="Reedo_white_bold_32">
                  Why <br />
                  Fútbol?
                </h1>
                <p className="Wanted_sans_white_light_16 w-[326px]">
                  With 6 of the most-watched leagues in global football,
                  football offers unrivalled reach and cultural relevance.
                </p>
              </div>
              <div className="w-[280px]">
                <span className="Reedo_white_bold_22">
                  Unmatched Global Exposure in the{" "}
                  <span className="bg-[#CFF419] text-black">
                    World&apos;s #1 Sport
                  </span>
                </span>
              </div>
            </div>
            <div className="flex flex-col items-center gap-8">
              <div>
                <Image
                  src="/images/for_brands/2.svg"
                  alt="Diagram"
                  width={464}
                  height={437}
                  priority
                  className="!w-[350px] !h-[330px] lg:!w-[464px] lg:!h-[437px]"
                />
              </div>
              <p className="Wanted_sans_gray_light_9 w-[350px] md:w-[360px] text-left">
                Viewership Powerhouse (Cumulative Annual Audience
                Estimates)Source: Nielsen, UEFA, DFL, LaLiga, CONMEBOL, Globo
                Figures represent total impressions, not unique viewers.
                Brazilian Série A cumulative viewership is a conservative
                estimate based on domestic Globo reach and limited international
                coverage. No official global total has been published.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="relative w-full">
        <Image
          src="/images/for_brands/image3.png"
          alt="Brands Background"
          fill
          className="!absolute !top-0 !left-0 !w-full !h-[430px] object-cover mt-[440px] xs:mt-[400px] md:!w-full md:!h-auto md:object-contain md:mt-[300px] lg:mt-[200px] xl:mt-[124px]"
          priority
        />

        <div className="relative flex flex-col items-center px-3 mb-[220px] xs:px-8 2xl:mb-[350px]">
          <h1 className="Reedo_white_bold_32 text-center mb-7.5 xs:w-[400px]">
            Football <br />
            The World&apos;s Most <br />
            Watched Arena
          </h1>
          <h3 className="Reedo_yellow_bold_22 text-center w-[340px] mb-[50px] xs:mb-[72px]">
            Why invest in football sponsorship?
          </h3>
          <p className="Wanted_sans_white_light_16 !leading-[23px] xs:w-[462px]">
            Because it delivers scale, emotion, and commercial return at a
            global level. <br />
            <br />
            Across club leagues and elite international competitions, football
            dominates global viewership — driving the kind of cultural relevance
            and brand exposure that translates directly into business growth.
            <br />
            <br />
            Whether you&apos;re a legacy brand or a rising challenger, football
            places you in front of the largest, most emotionally engaged
            audience on earth.
          </p>
        </div>

        {/* Marketing Engine Section */}
        <div className="flex justify-center">
          <div className="relative bg-[url('/images/for_brands/image4.png')] bg-cover bg-center px-[13px] pt-7.5 py-[51px] md:w-[720px] md:px-10 md:pt-8 lg:w-[891px] lg:px-[86px] lg:pt-[68px] lg:py-25">
            <div className="flex flex-col justify-between items-start gap-9 mb-8 text-left xs:items-center xs:text-center md:flex-row md:gap-12 md:items-start md:text-left md:mb-14 lg:gap-24">
              <div className="flex flex-col items-start gap-6 xs:items-center md:items-start">
                <h1 className="Reedo_black_bold_32 w-[240px]">
                  Football&apos;s Always-On Marketing Engine
                </h1>
                <p className="Wanted_sans_black_light_16 w-[326px]">
                  From matchday drama to training ground moments, gaming
                  crossovers to Netflix docs, football delivers a continuous
                  content cycle that keeps fans engaged and brands in the
                  spotlight.
                </p>
              </div>
              <span className="Reedo_black_bold_22 w-[300px]">
                <span className="bg-[#CFF419]">24/7, 365-day media</span>{" "}
                ecosystem — where your brand never switches off.
              </span>
            </div>
            <div className="flex justify-center border-t-2 border-b-2 border-[#CFF419] py-10 mb-[55px] md:py-12 md:mb-[77px]">
              <h1 className="Reedo_black_bold_32 text-center xs:w-[475px] md:w-[606px]">
                Your sponsorship isn&apos;t just seen — it becomes{" "}
                <span className="bg-[#CFF419]">part of the story.</span>
              </h1>
            </div>
            <div className="flex flex-col items-start gap-[38px] xs:items-center md:flex-row md:gap-8 md:items-start">
              <h1 className="Reedo_black_bold_32 text-left w-[344px] xs:text-center md:text-left">
                From Cultural Impact to Commercial Return — We Deliver Both:
              </h1>
              <div className="flex flex-col justify-center items-center w-full xs:w-auto">
                <ol className="Wanted_sans_black_light_16 list-disc w-[320px] xs:w-[344px] xs:pl-4">
                  <li className="mb-4">
                    Boost stock value through culturally aligned campaigns that
                    deepen consumer connection
                  </li>
                  <li className="mb-4">
                    Enhance Return on Equity (ROE) by activating loyal,
                    emotionally engaged consumer segments
                  </li>
                  <li className="mb-4">
                    Increase marketing efficiency by leveraging talent-driven
                    storytelling with real-time cultural momentum
                  </li>
                  <li className="mb-4">
                    Improve global brand equity by partnering with athletes
                    rooted in emerging and high-growth regions
                  </li>
                  <li className="mb-4">
                    Tap into next-gen audiences through high-trust,
                    influencer-led activation — where sports meets culture
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full mt-[800px] xs:mt-[720px]">
        <Image
          src="/images/for_brands/image5.png"
          alt="Clubs Background"
          width={1440}
          height={977}
          className="w-full h-[460px] md:h-[977px] object-cover object-top lg:h-auto"
        />

        {/* FloatItemsMenu Container */}
        <div className="absolute -top-[485px] left-6 xl:left-[81px] z-20">
          <FloatItemsMenu
            className="hidden lg:block"
            items={[
              "CREATIVE & CONTENT",
              "STRATEGY & CONSULTING",
              "Results That Move Markets",
              "EXPERIENTIAL",
              "Contact",
            ]}
            sectionIds={[
              "creative-content",
              "strategic-partnership",
              "results-that-move-markets",
              "experiential",
              "contact",
            ]}
          />
        </div>

        <div
          id="creative-content"
          className="absolute -top-[740px] xs:-top-[600px] right-0 md:right-6 xl:right-[44px] z-10 w-90 xs:w-auto [mix-blend-mode:plus-lighter]"
        >
          <div className="flex flex-col gap-8 md:gap-[42px] px-7 py-8 md:px-8 md:py-9 xl:px-15 2xl:px-[116px] xl:py-[75px] bg-[#D9D9D9]">
            <p className="Reedo_black_bold_32 xs:w-[420px]">
              CREATIVE & CONTENT
            </p>
            <div className="flex gap-8 md:gap-6 xl:gap-[77px] flex-col md:flex-row">
              <div className="flex flex-col xs:w-[382px] gap-[25px]">
                <p className="Reedo_black_bold_16">
                  Campaigns That Resonate, Activate, and Appreciate in Value.
                </p>
                <div className="Wanted_sans_black_light_16 flex flex-col gap-4">
                  <p>
                    Our creative teams develop stories that aren&apos;t just
                    seen — they&apos;re shared, remembered, and acted upon. From
                    cinematic brand films to viral short-form content, we
                    translate an athlete&apos;s journey into powerful,
                    brand-aligned storytelling.
                    <br />
                    <br />
                    How We Build Relevance:
                  </p>
                  <ol className="list-disc pl-6">
                    <li className="mb-3">
                      Original branded content and mini-docs
                    </li>
                    <li className="mb-3">Athlete-driven social campaigns</li>
                    <li className="mb-3">
                      Story-led influencer and UGC strategies
                    </li>
                    <li className="mb-3">
                      Community-driven storytelling across regions
                    </li>
                    <li>Visual identity and brand refresh concepts</li>
                  </ol>
                </div>
              </div>
              <div className="xs:w-[307px]">
                <div className="flex flex-col w-full gap-4 border-l-2 border-[#CFF419] pl-4">
                  <p className="Reedo_black_bold_16">
                    We don&apos;t just create ads
                  </p>
                  <p className="Wanted_sans_black_light_16 xs:w-[246px]">
                    We create cultural moments that build emotional loyalty and
                    brand lift.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="strategic-partnership"
          className="absolute top-[200px] md:top-[240px] xl:top-[296px] right-3 md:right-6 xl:right-[168px] z-10 w-80 xs:w-auto"
        >
          <div className="flex flex-col gap-8 md:gap-[42px]">
            <p className="Reedo_white_bold_36 xs:w-[420px] md:w-[545px]">
              STRATEGY & CONSULTING
            </p>
            <div className="flex gap-8 md:gap-10 xl:gap-[77px] flex-col md:flex-row">
              <div className="flex flex-col xs:w-[382px] gap-6">
                <p className="Reedo_yellow_bold_16">
                  Campaigns That Move Markets — Not Just Metrics.
                </p>

                <div className="Wanted_sans_white_light_16 flex flex-col gap-4">
                  <p>What We Deliver:</p>
                  <ol className="list-disc pl-6">
                    <li className="mb-3">Brand & Creative Strategy</li>
                    <li className="mb-3">Athlete & Influencer Strategy</li>
                    <li className="mb-3">
                      Sponsorship Valuation & Negotiation
                    </li>
                    <li className="mb-3">
                      Portfolio Management & Optimization
                    </li>
                    <li className="mb-3">
                      Audience Segmentation & Intelligence
                    </li>
                    <li className="mb-3">
                      Social, Digital & Activation Planning
                    </li>
                    <li className="mb-3">ROI & Performance Measurement</li>
                    <li>Trend Mapping & Cultural Analysis</li>
                  </ol>
                </div>
              </div>
              <div className="xs:w-[307px]">
                <div className="flex flex-col w-full gap-4 border-l-2 border-[#CFF419] pl-4">
                  <h3 className="Reedo_white_bold_16">
                    We align brands with athletes who move culture — and
                    consumers who move markets.
                  </h3>
                  <p className="Wanted_sans_white_light_16 xs:w-[246px]">
                    We help brands craft powerful narratives rooted in data,
                    insight, and purpose. <br />
                    <br />
                    Whether it&apos;s a partnership with a rising Brazilian
                    superstar or a campaign built around a player&apos;s local
                    hero story, our strategies deliver cultural capital and
                    commercial upside.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full mt-130 xs:mt-140 md:mt-0 lg:mt-30 xl:mt-0">
        <div
          id="results-that-move-markets"
          className="flex justify-end px-0 md:px-6 xl:px-[44px] z-10 w-full xs:w-auto [mix-blend-mode:plus-lighter]"
        >
          <div className="flex flex-col gap-8 md:gap-[42px] px-7 py-8 md:px-8 md:py-9 xl:px-15 2xl:px-[116px] xl:py-[75px] bg-[#D9D9D9] w-90 xs:w-auto">
            <p className="Reedo_black_bold_32 xs:w-[420px]">
              Results That Move Markets
            </p>
            <div className="flex gap-8 md:gap-6 xl:gap-[77px] flex-col md:flex-row">
              <div className="flex flex-col xs:w-[382px] gap-[25px]">
                <div className="Wanted_sans_black_light_16 flex flex-col gap-4">
                  <p>
                    At FittFind, we don&apos;t just help brands win attention —
                    we help them win trust, market share, and investor
                    confidence. Strategic campaigns built around culturally
                    relevant athletes can directly influence stock performance
                    by:
                  </p>
                  <ol className="list-disc pl-6">
                    <li className="mb-3">
                      Driving top-line growth via new market penetration and
                      consumer acquisition
                    </li>
                    <li className="mb-3">
                      Elevating brand equity, which analysts link to valuation
                      premiums
                    </li>
                    <li className="mb-3">
                      Strengthening emotional loyalty, resulting in higher
                      customer LTV and retention
                    </li>
                    <li className="mb-3">
                      Creating headline-worthy moments that shift public and
                      investor perception
                    </li>
                    <li>
                      Enhancing Return on Equity (ROE) through more efficient,
                      insight-driven marketing spend
                    </li>
                  </ol>
                </div>
              </div>
              <div className="xs:w-[307px]">
                <div className="flex flex-col w-full gap-4 border-l-2 border-[#CFF419] pl-4">
                  <p className="Reedo_black_bold_16">
                    Partnering with athletes who move culture drives commercial
                    returns that move stock price.
                  </p>
                  <p className="Wanted_sans_black_light_16 xs:w-[246px]">
                    Whether launching a product in a new geography or
                    repositioning a brand globally, our campaigns turn cultural
                    traction into shareholder value — through smart
                    partnerships, precise storytelling, and measurable results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="experiential"
          className="relative flex mt-10 md:mt-[74px] justify-end px-3 md:px-6 xl:px-[168px] z-10 w-full xs:w-auto"
        >
          <div className="flex flex-col gap-8 md:gap-[42px] w-80 xs:w-auto">
            <p className="Reedo_white_bold_36 xs:w-[420px]">EXPERIENTIAL</p>
            <div className="flex gap-8 md:gap-10 xl:gap-[77px] flex-col md:flex-row">
              <div className="flex flex-col xs:w-[382px] gap-6">
                <p className="Reedo_yellow_bold_16">
                  From Live Activation to Digital Immersion
                </p>

                <div className="Wanted_sans_white_light_16 flex flex-col gap-4">
                  <p>
                    We design connected experiences that convert fan passion
                    into brand love — and brand love into bottom-line growth.
                    Whether it&apos;s on-the-ground activations, global brand
                    tours, or digitally immersive experiences featuring our
                    athletes, every moment is engineered for impact.
                    <br />
                    <br /> Our Experiential Services:
                  </p>
                  <ol className="list-disc pl-6">
                    <li className="mb-3">Sponsorship Activation</li>
                    <li className="mb-3">Pop-up Brand Moments</li>
                    <li className="mb-3">Athlete-led Brand Tours</li>
                    <li className="mb-3">Interactive Digital Campaigns</li>
                    <li className="mb-3">Fan Experiences & Live Content</li>
                    <li>Gamified Engagement Events</li>
                  </ol>
                </div>
              </div>
              <div className="xs:w-[307px]">
                <div className="flex flex-col w-full gap-4 border-l-2 border-[#CFF419] pl-4">
                  <h3 className="Reedo_white_bold_16">
                    We don&apos;t aim for applause — we aim for attachment.
                  </h3>
                  <p className="Wanted_sans_white_light_16 xs:w-[246px]">
                    Emotionally connected customers are 2.3x more valuable than
                    satisfied ones.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full md:mt-20 lg:-mt-[50px]">
        <Image
          src="/images/for_brands/image6.png"
          alt="Players Background"
          width={1440}
          height={844}
          className="w-full h-[844px] object-cover object-top xl:h-auto"
        />

        {/* Blend mode div - same level as background image */}
        <div className="absolute bottom-0 md:bottom-6 xl:bottom-12 left-1/2 -translate-x-1/2 w-full md:w-[calc(100%-48px)] xl:w-[calc(100%-96px)] 2xl:w-[1353px] bg-[#D9D9D9] [mix-blend-mode:plus-lighter]">
          <ContactSectionContent isVisible={false} />
        </div>

        {/* Content div - visible content */}
        <div
          id="contact"
          className="absolute bottom-0 md:bottom-6 xl:bottom-12 left-1/2 -translate-x-1/2 w-full md:w-[calc(100%-48px)] xl:w-[calc(100%-96px)] 2xl:w-[1353px]"
        >
          <ContactSectionContent />
        </div>
      </div>
    </main>
  );
}
