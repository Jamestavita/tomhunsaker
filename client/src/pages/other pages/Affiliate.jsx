import React from "react";
import AffiliateForm from "../../components/AffiliateForm";
import eclipse from "../../assets/AffEclipse.png";

export default function Affiliate() {
  return (
    <section className="bg-Green700 overflow-hidden">
      <div className="w-[min(90rem,100%)] mx-auto px-4 md:px-12 lg:px-32 pt-12 pb-16 grid gap-12 relative ">
        <img
          src={eclipse}
          alt="eclipse"
          className="absolute z-[1] -top-[12rem] md:-top-[25rem] lg:-top-[12rem] -right-[7rem] md:-right-[14rem] lg:-right-[14rem]"
        />
        <div className="grid gap-6 w-[min(714px,100%)] z-[2] text-Greyscale">
          <p className="text-[44px] lg:text-[56px] font-bold mb-2">Affiliate</p>
          <p className="text-[24px] lg:text-[30px] font-bold">
            Earn while helping others to grow.
          </p>
          <p className="text-[18px]">
            Become an affiliate of{" "}
            <span className="underline">tomhunsaker.com </span> across the
            world, spread the word to your network, and{" "}
            <span className="font-bold">
              benefit every time someone you refer accesses a bestseller bundle
            </span>{" "}
            (book + personalized assessment report + insights guide) featured on
            this site.
          </p>
          <p className="text-[18px]">
            Becoming an affiliate is selective so you’ll be in great company.
            Applying is simple and you’ll receive an approval decision quickly.
          </p>
        </div>
        <AffiliateForm />
      </div>
    </section>
  );
}
