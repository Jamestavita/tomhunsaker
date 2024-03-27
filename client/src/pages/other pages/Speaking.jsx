import React from "react";
import speech from "../../assets/speech.jpeg";

export default function Speaking() {
  return (
    <div className="h-full mx-auto">
      <section className=" bg-Yellow500 h-full overflow-x-hidden grid">
        <div className="md:grid md:grid-cols-2 md:pl-12 lg:pl-32 self-center md:h-full">
          <div className="px-4 md:px-0 py-12 w-[min(90rem,100%)] md:w-[min(41rem,100%)] mx-auto md:ml-auto md:mr-0 self-center">
            <p className="text-[56px] font:medium">Speaking</p>
            <div className="grid gap-6">
              <p className="text-[18px]">
                Organizations around the world ranging from rapid-growth
                privately held and top-tier professional service firms through
                Fortune 500 companies and industry associations have benefited
                from Dr Tom's dynamic and instructive keynote engagements.
              </p>
              <div className="grid gap-2">
                <p className="text-[18px]">
                  To inquire about availability and start a conversation email
                </p>
                <div className="text-[18px] flex gap-1 font-bold items-center">
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
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  info@tomhunsaker.com
                </div>
              </div>
            </div>
          </div>
          <img
            src={speech}
            alt="Speech"
            className="w-full object-cover object-left h-full mix-blend-luminosity"
          />
        </div>
      </section>
    </div>
  );
}
