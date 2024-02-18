import React from "react";
import image20 from "../../assets/logos/image 20.png";
import image23 from "../../assets/logos/image 23.png";
import image24 from "../../assets/logos/image 24.png";
import image25 from "../../assets/logos/image 25.png";
import image26 from "../../assets/logos/image 26.png";
import image27 from "../../assets/logos/image 27.png";
import image28 from "../../assets/logos/image 28.png";
import image29 from "../../assets/logos/image 29.png";
import image30 from "../../assets/logos/image 30.png";
import image31 from "../../assets/logos/image 31.png";
import image32 from "../../assets/logos/image 32.png";
import image33 from "../../assets/logos/image 33.png";

export default function Advisory() {
  return (
    <div className="bg-Greyscale mx-auto grid lg:overflow-y-hidden">
      <section className="bg-Greyscale200">
        <div className="w-[min(90rem,100%)] mx-auto px-4 md:px-12 lg:px-32 pt-12 pb-16 grid gap-12">
          <div className="grid gap-8">
            <p className="text-[44px] font-bold">Advisory</p>
            <p className="text-[18px]">
              Tom works with CEOs, other senior leaders, and select management
              teams to help them navigate critical growth points in their
              businesses and careers.
              <br />
              <br /> These range from rapid-growth privately held organizations
              through Fortune 500 companies.
            </p>
          </div>
          <div className="grid gap-8">
            <p className="text-[24px] font-bold">
              A small selection of companies that have benefited from Tom's
              work:
            </p>
            <div className="inline-flex base:grid bg-Greyscale rounded-[20px] p-7 items-center flex-wrap gap-[20px_16px] base:gap-[20px_5px] base:[grid-template-columns:repeat(6,auto)] base:justify-items-center">
              {[
                { img: image20, w: "w-[57.6213px] md:w-[67.452px]" },
                { img: image32, w: "w-[83.241px] md:w-[97.444px]" },
                { img: image29, w: "w-[47.107px] md:w-[55.145px]" },
                { img: image24, w: "w-[122.411px] md:w-[143.296px]" },
                { img: image30, w: "w-[97.355px] md:w-[113.965px]" },
                { img: image33, w: "w-[169.848px] md:w-[256.634px]" },
                { img: image31, w: "w-[97px] md:w-[130.029px]" },
                { img: image26, w: "w-[123px] md:w-[151.847px]" },
                { img: image25, w: "w-[146px] md:w-[181.461px]" },
                { img: image27, w: "w-[120.154px] md:w-[140.654px]" },
                { img: image28, w: "w-[44.764px] md:w-[53.504px]" },
                { img: image23, w: "w-[82.068px] md:w-[98.092px]" },
              ].map((image) => (
                <img
                  src={image.img}
                  alt="logo"
                  className={`grayscale ${image.w}`}
                />
              ))}
            </div>
          </div>
          <div className="grid gap-4 text-[18px]">
            <p className="font-bold">
              To inquire about availability and start a conversation email
            </p>
            <div className="flex gap-1 font-bold items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M4 6L10.1076 10.6123L10.1097 10.614C10.7878 11.1113 11.1271 11.3601 11.4988 11.4562C11.8272 11.5412 12.1725 11.5412 12.501 11.4562C12.8729 11.36 13.2132 11.1105 13.8926 10.6123C13.8926 10.6123 17.8101 7.60594 20 6M3 15.8002V8.2002C3 7.08009 3 6.51962 3.21799 6.0918C3.40973 5.71547 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.4796 5 19.9074 5.21799C20.2837 5.40973 20.5905 5.71547 20.7822 6.0918C21 6.5192 21 7.07899 21 8.19691V15.8036C21 16.9215 21 17.4805 20.7822 17.9079C20.5905 18.2842 20.2837 18.5905 19.9074 18.7822C19.48 19 18.921 19 17.8031 19H6.19691C5.07899 19 4.5192 19 4.0918 18.7822C3.71547 18.5905 3.40973 18.2842 3.21799 17.9079C3 17.4801 3 16.9203 3 15.8002Z"
                  stroke="#1C1C1C"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              info@tomhunsaker.com
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
