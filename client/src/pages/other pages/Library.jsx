import React from "react";
import sharperRed from "../../assets/sharper.png";
import framerGreen from "../../assets/framer.png";
import bridgerBlue from "../../assets/bridger.png";
import amplifierYellow from "../../assets/amplifier.png";
import ArticlesList from "../../components/ArticlesList";
import AppButton100 from "../../components/reuseable/AppButtons";
import harvard from "../../assets/harvard.png";
import MIT from "../../assets/MIT.png";
import Wiley from "../../assets/Wiley.png";

export default function Library() {
  return (
    <div className="bg-Greyscale mx-auto grid lg:overflow-y-hidden">
      <section className="bg-Greyscale">
        <div className="w-[min(90rem,100%)] mx-auto px-4 md:px-12 lg:px-32 pt-12 pb-16 grid gap-12 relative overflow-hidden">
          <p className="text-[44px] md:text-[56px] font-bold">Library</p>
          <div className="grid gap-8">
            <p className="text-[30px] md:text-[44px]  font-bold">Books</p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              <div className="grid">
                <div className="relative grid h-full py-10">
                  <img
                    src={sharperRed}
                    alt="Sharper"
                    className=" z-[1] w-3/5 mx-auto"
                  />
                  <div className="h-[266px] w-[266px] rounded-full absolute bg-Red500 -top-0 justify-self-center"></div>
                </div>
                <AppButton100
                  className="bg-Red500 w-full text-Greyscale self-end"
                  label="Take FREE Assessment"
                  onClick={() => navigate("overview/mindset")}
                />
              </div>
              <div className="grid">
                <div className="relative grid h-full py-10">
                  <img
                    src={framerGreen}
                    alt="Sharper"
                    className=" z-[1] w-3/5 mx-auto"
                  />
                  <div className="h-[266px] w-[266px] rounded-full absolute bg-Green500 -top-0 justify-self-center"></div>
                </div>
                <AppButton100
                  className="bg-Green500 w-full text-Greyscale self-end"
                  label="Take FREE Assessment"
                  onClick={() => navigate("overview/strategy")}
                />
              </div>
              <div className="grid">
                <div className="relative grid h-full py-10">
                  <img
                    src={bridgerBlue}
                    alt="Sharper"
                    className=" z-[1] w-3/5 mx-auto"
                  />
                  <div className="h-[266px] w-[266px] rounded-full absolute bg-Blue500 -top-0 justify-self-center"></div>
                </div>
                <AppButton100
                  className="bg-Blue500 w-full text-Greyscale self-end"
                  label="Take FREE Assessment"
                  onClick={() => navigate("overview/innovation")}
                />
              </div>
              <div className="grid">
                <div className="relative grid h-full py-10">
                  <img
                    src={amplifierYellow}
                    alt="Sharper"
                    className=" z-[1] w-3/5 mx-auto"
                  />
                  <div className="h-[266px] w-[266px] rounded-full absolute bg-Yellow500 -top-0 justify-self-center"></div>
                </div>
                <AppButton100
                  className="bg-Yellow500 w-full text-Greyscale self-end"
                  label="Take FREE Assessment"
                  onClick={() => navigate("overview/execution")}
                />
              </div>
            </div>
          </div>
          <div className="grid gap-8">
            <p className="text-[30px] md:text-[44px] font-bold">
              Articles & Cases
            </p>
            <ArticlesList />
          </div>
          <div className="grid gap-6 py-8 md:grid-cols-3 items-center">
            <img src={harvard} alt="" className="w-[40%] md:w-[50%] mx-auto" />
            <img src={MIT} alt="" className="w-full" />
            <img src={Wiley} alt="" className="w-full" />
          </div>
        </div>
      </section>
    </div>
  );
}
