import React from "react";
import tom from "../../assets/tom.png";
import harvard from "../../assets/harvard.png";
import MIT from "../../assets/MIT.png";

export default function About() {
  return (
    <div className="bg-Greyscale mx-auto grid lg:overflow-y-hidden">
      <section className="bg-Greyscale200">
        <div className="w-[min(90rem,100%)] mx-auto px-4 md:px-12 lg:px-32 pt-12 pb-16 grid gap-12">
          <p className="text-[44px] lg:text-[56px] font-bold lg:font-medium">
            About Dr Tom
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-[32px_0]">
            <p className="text-[18px] lg:text-[30px] font-bold md:col-span-2 lg:[grid-column:2/4] lg:ml-4">
              Dr. Tom Hunsaker is an international bestselling author and senior
              advisor whose work has influenced management practice worldwide.
            </p>
            <img
              src={tom}
              alt="tom"
              className="w-full rounded-[20px] lg:[grid-row:1/3] lg:pr-4"
            />
            <p className="text-[18px] pt-8 border-t-[1px] border-t-Greyscale700 lg:ml-4 lg:pr-4">
              Tom's research and related concepts are widely recommended in
              leading universities, featured in popular press globally, and he
              is among the most published authors in the world's top two
              management practice outlets Harvard Business Review and MIT Sloan
              Review.
            </p>
            <div className="pt-8 border-t-[1px] border-t-Greyscale700 grid md:flex gap-8 md:col-span-2 lg:[grid-column:3/4] lg:pl-4">
              <p className="text-[30px] font-bold lg:hidden">
                Speaker
                <br /> Advisor
                <br /> Investor
              </p>
              <p className="text-[18px]">
                Tom is regularly asked to advise Fortune 500 and emerging
                enterprise leaders and their teams and is a sought-after speaker
                who has delivered keynotes to audiences on five continents from
                a range of sectors.
              </p>
            </div>
            <p className="text-[18px] pt-8 border-t-[1px] border-t-Greyscale700 md:col-span-2 lg:col-span-1 lg:pr-4">
              Tom has held leadership positions or been a principal investor for
              growth firms in the performance technology and analytical sciences
              industries, among others. Tom and his family enjoy serving in
              their community, traveling, and exploring the outdoors with a
              particular love for mountain regions.
            </p>
            <p className="text-[18px] pt-8 border-t-[1px] border-t-Greyscale700 md:col-span-2 lg:col-span-1 lg:px-4">
              He previously served as Associate Dean of Innovation for the
              Thunderbird School of Global Management (then top-ranked worldwide
              in its field) and helped to pioneer its Global Challenge Lab.
            </p>
            <p className="text-[30px] lg:text-[44px] font-bold hidden lg:grid border-t-[1px] border-t-Greyscale700 lg:pl-4">
              Speaker
              <br /> Advisor
              <br /> Investor
            </p>
            <div className="pt-8 border-t-[1px] border-t-Greyscale700 grid gap-8 md:flex md:col-span-2 lg:col-span-3">
              <p className="text-[30px] lg:text-[44px] font-bold md:order-2 w-[235px] lg:w-[368px] md:shrink-0 lg:order-[0]">
                Award-Winning Learning Expert
              </p>
              <p className="text-[18px]">
                Dr. Tom is among the select few in Thunderbird's history to
                receive the distinguished teaching award for best professor in
                each graduate-level program: Executive, Full-time, and Online.
                He has also been a top executive education expert for some of
                the world's leading companies in the various tech, energy,
                advanced chemicals, and aerospace sectors, to name a few.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-Blue700 text-Greyscale">
        <div className="w-[min(90rem,100%)] mx-auto px-4 md:px-12 lg:px-32 pt-12 pb-16 grid gap-12">
          <p className="text-[44px] font-bold">
            The Difference is in the Research
          </p>
          <p className="text-[18px] font-bold">
            Concepts that stand the test of time are grounded in rigorous
            research. Dr. Tom Hunsaker's research into sustainable growth
            practices sets the standard.
          </p>
          <div className="grid">
            <div className="grid lg:flex justify-between gap-6 border-y-[1px] border-y-Greyscale700 py-10">
              <div className="">
                <p className="text-[14px] leading-tight">GEOGRAPHY</p>
                <p className="text-[80px] leading-tight">5</p>
                <p className="text-[16px] leading-tight">5 continents</p>
              </div>
              <div className="flex gap-[8.11px] lg:gap-4">
                {[...Array(5)].map((val, index) => (
                  <div
                    key={index}
                    className="w-[62px] md:w-[127] h-[62px] md:h-[127] lg:w-[144px] lg:h-[144px] bg-Red700 rounded-full"
                  ></div>
                ))}
              </div>
            </div>
            <div className="grid  lg:flex justify-between gap-6 border-y-[1px] border-y-Greyscale700 py-10">
              <div className="">
                <p className="text-[14px] leading-tight">DURATION</p>
                <p className="text-[80px] leading-tight">10</p>
                <p className="text-[16px] leading-tight">
                  Over 10years (and counting)
                </p>
              </div>
              <div className="grid gap-[8.11px] md:gap-[4.046px] lg:gap-[8px] grid-cols-5 md:grid-cols-10 ">
                {[...Array(10).keys()].map((val, index) => (
                  <div
                    key={index}
                    className="w-[62px] md:w-[63px] lg:w-[71px] h-[62px] md:h-[63px] lg:h-[71px] bg-Yellow700 rounded-full"
                  ></div>
                ))}
              </div>
            </div>
            <div className="grid  lg:flex justify-between gap-6 border-y-[1px] border-y-Greyscale700 py-10">
              <div className="">
                <p className="text-[14px] leading-tight">PERIOD</p>
                <p className="text-[80px] leading-tight">100</p>
                <p className="text-[16px] leading-tight">
                  Over 100years of practice
                </p>
              </div>
              <div className="grid gap-[1.2px] md:gap-[1.011px] lg:gap-[2px] [grid-template-columns:repeat(13,minmax(0,1fr))] md:[grid-template-columns:repeat(26,minmax(0,1fr))]">
                {[...Array(100).keys()].map((val, index) => (
                  <div
                    key={index}
                    className="w-[25px] md:w-[24px] lg:w-[28px] h-[25px] md:h-[24px] lg:h-[28px] bg-Green500 rounded-full"
                  ></div>
                ))}
              </div>
            </div>
            <div className="grid  lg:flex justify-between gap-6 border-y-[1px] border-y-Greyscale700 py-10">
              <div className="">
                <p className="text-[14px] leading-tight">BREADTH</p>
                <p className="text-[80px] leading-tight">1,000</p>
                <p className="text-[16px] leading-tight">
                  1,000s of enterprises
                </p>
              </div>
              <div className="grid gap-[1.1px] lg:gap-[2px] [grid-template-columns:repeat(48,minmax(0,1fr))] md:[grid-template-columns:repeat(95,minmax(0,1fr))] lg:[grid-template-columns:repeat(77,minmax(0,1fr))]">
                {[...Array(1000).keys()].map((val, index) => (
                  <div
                    key={index}
                    className="w-[6px] lg:w-[8px] h-[6px] lg:h-[8px] bg-Blue500 rounded-full"
                  ></div>
                ))}
              </div>
            </div>
            <div className="grid  lg:flex justify-between gap-6 border-y-[1px] border-y-Greyscale700 py-10">
              <div className="">
                <p className="text-[14px] leading-tight">BREADTH</p>
                <p className="text-[80px] leading-tight">10,000</p>
                <p className="text-[16px] leading-tight">10,000s of managers</p>
              </div>
              <div className="grid gap-[1px] [grid-template-columns:repeat(114,minmax(0,1fr))] md:[grid-template-columns:repeat(224,minmax(0,1fr))] lg:[grid-template-columns:repeat(258,minmax(0,1fr))]">
                {[...Array(10000).keys()].map((val, index) => (
                  <div
                    key={index}
                    className="w-[2px] h-[2px] bg-Greyscale400 rounded-full"
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div className="grid gap-8 py-8">
            <div className="grid gap-8 lg:flex lg:justify-between">
              <div className="grid gap-8 lg:self-start">
                <p
                  className="text-[30px] font-bold h-min
                "
                >
                  Impact
                </p>
                <p className="text-[18px]">
                  Dozens of dedicated features and cases in Harvard Business
                  Review and MIT Sloan Management Review and multiple
                  bestselling books.
                </p>
              </div>
              <div className="flex gap-4">
                <div className="py-12 px-4 bg-Greyscale rounded-[20px] w-full grid justify-center items-center">
                  <img src={harvard} alt="Harvard" className="w-full" />
                </div>
                <div className="py-12 px-4 bg-Greyscale rounded-[20px] w-full grid place-items-center">
                  <img src={MIT} alt="MIT" className="w-full" />
                </div>
              </div>
            </div>
            <div className="grid gap-8 mt-16">
              <p
                className="text-[24px] font-bold
            "
              >
                Standard-setting practices in the four sustainable growth
                pillars:
              </p>
              <div className="grid lg:flex lg:gap-0 gap-6 md:gap-5 w-full mt-2">
                <div className="w-full h-36 [background:linear-gradient(88deg,#CB4A22_2.1%,#672713_97.98%),#CB4A22] grid place-items-center md:place-items-start md:items-center md:pl-10 skew-y-2 lg:-skew-y-2 z-[4]">
                  <p className="text-[24px] md:text-[30px] font-bold mb-4 -skew-y-2 lg:skew-y-2">
                    Mindset & Culture
                  </p>
                </div>
                <div className="w-full h-36 [background:linear-gradient(272deg,#425740_1.72%,#202F1E_98.26%),#425740] grid place-items-center md:place-items-start md:items-center md:pl-10 -skew-y-2 lg:skew-y-2 z-[3] -mt-4 lg:-mt-0">
                  <p className="text-[24px] md:text-[30px] font-bold mb-4 skew-y-2 lg:-skew-y-2">
                    Strategy & Change
                  </p>
                </div>
                <div className="w-full h-36 [background:linear-gradient(86deg,#325D92_2.34%,#172B43_97.03%),#325D92] grid place-items-center md:place-items-start md:items-center md:pl-10 skew-y-2 lg:-skew-y-2 z-[2] -mt-4 lg:-mt-0">
                  <p className="text-[24px] md:text-[30px] font-bold mb-4 -skew-y-2 lg:skew-y-2">
                    Innovation & Analytics
                  </p>
                </div>
                <div className="w-full h-36 [background:linear-gradient(93deg,#7B6A1F_2.47%,#DFBF34_97.9%),#DFBF34] grid place-items-center md:place-items-start md:items-center md:pl-10 -skew-y-2 lg:skew-y-2 z-[1] -mt-4 lg:-mt-0">
                  <p className="text-[24px] md:text-[30px] font-bold mb-4 skew-y-2 lg:-skew-y-2">
                    Execution & Agility
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
