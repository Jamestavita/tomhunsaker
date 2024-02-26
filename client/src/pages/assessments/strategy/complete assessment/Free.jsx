import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AppButton100 from "../../../../components/reuseable/AppButtons";
import InputField from "../../../../components/reuseable/InputField";
import SelectField from "../../../../components/reuseable/SelectField";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useCreateMindsetUserMutation } from "../../../../services/appApi";
import { FaArrowLeft } from "react-icons/fa";

export default function Free() {
  const navigate = useNavigate();
  const { mindset_assessment_evaluation: assessmentInfo } = useSelector(
    (state) => state.app
  );

  const marketSectorOptions = [
    {
      value: "Business Services",
      label: "Business Services",
    },
    {
      value: "Consumer Goods",
      label: "Consumer Goods",
    },
    {
      value: "Telecom & IT",
      label: "Telecom & IT",
    },
    {
      value: "Education",
      label: "Education",
    },
    {
      value: "Energy",
      label: "Energy",
    },
    {
      value: "Entertainment",
      label: "Entertainment",
    },
    {
      value: "Food & Beverage",
      label: "Food & Beverage",
    },
    {
      value: "Healthcare",
      label: "Healthcare",
    },
    {
      value: "Media",
      label: "Media",
    },
    {
      value: "Professional Services",
      label: "Professional Services",
    },
    {
      value: "Real Estate",
      label: "Real Estate",
    },
    {
      value: "Software",
      label: "Software",
    },
    {
      value: "Travel & Tourism",
      label: "Travel & Tourism",
    },
  ];

  const employeesCountOptions = [
    {
      value: "1 - 100",
      label: "1 - 100",
    },
    {
      value: "100 - 1000",
      label: "100 - 1000",
    },
    {
      value: "1000 - 10000",
      label: "1000 - 10000",
    },
    {
      value: "10000+",
      label: "10000+",
    },
  ];

  const [countryOptions, setCountryOptions] = useState();
  useEffect(() => {
    async function getCountries() {
      const { data } = await axios.get(
        "https://countriesnow.space/api/v0.1/countries/states"
      );
      setCountryOptions(() => [
        {
          value: "United States",
          label: "United States",
        },
        ...data.data.map((country) => ({
          value: country.name,
          label: country.name,
        })),
      ]);
    }
    getCountries();
  }, []);

  const [freeFormVal, setFreeFormVal] = useState({});

  function handleChange(e) {
    setFreeFormVal({
      ...freeFormVal,
      [e.target.name]: e.target.value,
    });
  }

  const [createFounderApi] = useCreateMindsetUserMutation();
  const [loading, setLoading] = useState(false);
  function onSubmitForm(e) {
    e.preventDefault();
    setLoading(true);
    createFounderApi({
      body: {
        name: freeFormVal.Name,
        last_name: freeFormVal.Last_Name,
        email: freeFormVal.Email,
        user_info: freeFormVal,
        assessment_info: assessmentInfo,
        points: {
          Personal_points: assessmentInfo?.Personal?.reduce(
            (a, c) => a + c.score,
            0
          ),
          Personal_score: +(
            assessmentInfo?.Personal?.reduce((a, c) => a + c.score, 0) / 50
          ).toFixed(2),

          Interpersonal_points: assessmentInfo?.Interpersonal?.reduce(
            (a, c) => a + c.score,
            0
          ),
          Interpersonal_score: +(
            assessmentInfo?.Interpersonal?.reduce((a, c) => a + c.score, 0) / 50
          ).toFixed(2),
          Team_points: assessmentInfo?.Team?.reduce((a, c) => a + c.score, 0),
          Team_score: +(
            assessmentInfo?.Team?.reduce((a, c) => a + c.score, 0) / 95
          ).toFixed(2),
          Purpose_score:
            assessmentInfo?.Purpose?.Continue?.score +
            assessmentInfo?.Purpose?.Stop?.score +
            assessmentInfo?.Purpose?.Start?.score,
          People_score:
            assessmentInfo?.People?.Continue?.score +
            assessmentInfo?.People?.Stop?.score +
            assessmentInfo?.People?.Start?.score,
          Positions_score:
            assessmentInfo?.Positions?.Continue?.score +
            assessmentInfo?.Positions?.Stop?.score +
            assessmentInfo?.Positions?.Start?.score,
          Process_score:
            assessmentInfo?.Process?.Continue?.score +
            assessmentInfo?.Process?.Stop?.score +
            assessmentInfo?.Process?.Start?.score,
        },
        total_score: 86,
        level: 1,
        plan: "Free",
      },
    })
      .unwrap()
      .then((result) => {
        // navigate("../assessment/mindset/free_success");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }

  console.log(freeFormVal);

  return (
    <div className="bg-Greyscale200 mx-auto">
      <div className="w-[min(90rem,100%)] mx-auto pt-8 md:px-12 md:pb-16 lg:px-32 lg:pt-16 lg:pb-20 grid gap-12 lg:grid-cols-[1fr,0.6fr]">
        <div
          className="cursor-pointer flex gap-3 lg:col-span-2 items-center mx-auto lg:mx-0"
          onClick={() => navigate("../assessment/mindset/plan")}
        >
          <FaArrowLeft />
          Back to option selection
        </div>
        <div className="grid gap-6 rounded-[40px] px-6 lg:py-0 text-Greyscale900 justify-center lg:order-2 self-start">
          <p className="text-[30px] lg:text-[56px] font-bold lg:font-medium leading-tight text-center">
            Just your raw score
          </p>
          <svg
            width="261"
            height="190"
            viewBox="0 0 261 190"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            <path
              d="M244.656 111.815C244.656 127.431 231.187 139.642 215.645 138.115L116.105 128.334C102.576 127.004 92.2626 115.628 92.2626 102.034L92.2626 52.4466C92.2626 38.7363 102.748 27.303 116.407 26.1187L215.947 17.488C231.385 16.1495 244.656 28.3201 244.656 43.8159L244.656 111.815Z"
              fill="#CB4A22"
            />
            <g filter="url(#filter0_b_804_133560)">
              <path
                d="M16.5 77.6244C16.5 62.008 29.9694 49.7973 45.511 51.3245L145.051 61.1059C158.58 62.4353 168.894 73.8118 168.894 87.4059V136.993C168.894 150.703 158.409 162.136 144.75 163.321L45.2094 171.951C29.7715 173.29 16.5 161.119 16.5 145.624V77.6244Z"
                fill="url(#paint0_linear_804_133560)"
              />
              <path
                d="M16.5 77.6244C16.5 62.008 29.9694 49.7973 45.511 51.3245L145.051 61.1059C158.58 62.4353 168.894 73.8118 168.894 87.4059V136.993C168.894 150.703 158.409 162.136 144.75 163.321L45.2094 171.951C29.7715 173.29 16.5 161.119 16.5 145.624V77.6244Z"
                fill="url(#paint1_radial_804_133560)"
                fill-opacity="0.7"
              />
            </g>
            <g filter="url(#filter1_b_804_133560)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M145.008 61.5442L45.468 51.7628C30.1854 50.2611 16.9404 62.2682 16.9404 77.6244V145.624C16.9404 160.861 29.9908 172.829 45.1714 171.513L144.712 162.882C158.143 161.717 168.453 150.475 168.453 136.993V87.4059C168.453 74.0383 158.312 62.8515 145.008 61.5442ZM45.511 51.3245C29.9694 49.7973 16.5 62.008 16.5 77.6244V145.624C16.5 161.119 29.7715 173.29 45.2094 171.951L144.75 163.321C158.409 162.136 168.894 150.703 168.894 136.993V87.4059C168.894 73.8118 158.58 62.4353 145.051 61.1059L45.511 51.3245Z"
                fill="url(#paint2_linear_804_133560)"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_804_133560"
                x="4.5"
                y="39.1953"
                width="176.395"
                height="144.857"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="6" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_804_133560"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_804_133560"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_b_804_133560"
                x="-17.3358"
                y="17.3595"
                width="220.066"
                height="188.529"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur
                  in="BackgroundImageFix"
                  stdDeviation="16.9179"
                />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_804_133560"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_804_133560"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_804_133560"
                x1="-43.7063"
                y1="22.9241"
                x2="241.026"
                y2="56.5507"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.0197282"
                  stop-color="#CB4A22"
                  stop-opacity="0"
                />
                <stop
                  offset="0.816755"
                  stop-color="#CB4A22"
                  stop-opacity="0.7"
                />
              </linearGradient>
              <radialGradient
                id="paint1_radial_804_133560"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(39.2747 168.096) rotate(-44.3789) scale(105.429 176.169)"
              >
                <stop stop-color="white" />
                <stop offset="1" stop-color="white" stop-opacity="0" />
              </radialGradient>
              <linearGradient
                id="paint2_linear_804_133560"
                x1="24.0582"
                y1="42.8036"
                x2="195.79"
                y2="129.37"
                gradientUnits="userSpaceOnUse"
              >
                <stop
                  offset="0.0136312"
                  stop-color="#EDAB96"
                  stop-opacity="0"
                />
                <stop offset="0.600063" stop-color="#CB4A22" />
                <stop offset="1" stop-color="#EDAB96" stop-opacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
          <p className="text-center text-xl">Free</p>
        </div>
        <form
          onSubmit={onSubmitForm}
          id="Mindset_form"
          className="grid gap-10 py-12 md:py-10 px-6 md:px-10 bg-Greyscale md:rounded-[20px] [box-shadow:0px_-12px_30px_0px_rgba(17,17,17,0.10)]"
        >
          <p className="text-[30px] lg:text-[44px] font-bold lg:font-medium leading-tight">
            Fill in your information for instant access
          </p>
          <div className="grid gap-6 md:grid-cols-2 md:items-center">
            <InputField
              id="Name"
              label="Name"
              name="Name"
              onChange={handleChange}
              required={true}
              type="text"
              value={freeFormVal.name}
            />
            <InputField
              id="Last_Name"
              label="Last Name"
              name="Last_Name"
              onChange={handleChange}
              required={true}
              type="text"
              value={freeFormVal.Last_Name}
            />
            <div className="grid gap-2">
              <label htmlFor="Market_Sector" className="font-medium">
                Market Sector
              </label>
              <SelectField
                options={marketSectorOptions}
                selectChange={(e, obj) =>
                  setFreeFormVal({
                    ...freeFormVal,
                    [obj.name]: e.value,
                  })
                }
                name="Market_Sector"
                value={marketSectorOptions.find(
                  (option) => freeFormVal.Market_Sector === option.label
                )}
                placeholder="Select market sector"
              />
            </div>
            <InputField
              id="Organization"
              label="Organization"
              name="Organization"
              onChange={handleChange}
              required={true}
              type="text"
              value={freeFormVal.Organization}
            />
            <div className="grid gap-2">
              <label htmlFor="Number_of_Employees" className="font-medium">
                Total Number of Employees
              </label>
              <SelectField
                options={employeesCountOptions}
                selectChange={(e, obj) =>
                  setFreeFormVal({
                    ...freeFormVal,
                    [obj.name]: e.value,
                  })
                }
                name="Number_of_Employees"
                value={employeesCountOptions?.find(
                  (option) => freeFormVal.Country === option.label
                )}
                placeholder=""
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="Country" className="font-medium">
                Country
              </label>
              <SelectField
                options={countryOptions}
                selectChange={(e, obj) =>
                  setFreeFormVal({
                    ...freeFormVal,
                    [obj.name]: e.value,
                  })
                }
                name="Country"
                value={countryOptions?.find(
                  (option) => freeFormVal.Country === option.label
                )}
                placeholder="Select country"
              />
            </div>
            <InputField
              id="Email"
              label="Email"
              name="Email"
              onChange={handleChange}
              required={true}
              type="email"
              value={freeFormVal.Email}
            />
            <InputField
              id="Website_or_Social_Handle"
              label="Website or Social Handle"
              name="Website_or_Social_Handle"
              onChange={handleChange}
              required={true}
              type="text"
              value={freeFormVal.Website_or_Social_Handle}
            />
            <div className="grid gap-2">
              <label htmlFor="Phone" className="font-medium">
                Phone
              </label>
              <PhoneInput
                country="us"
                placeholder="Enter phone number"
                defaultCountry="US"
                containerStyle={{
                  height: "53.6px",
                }}
                inputStyle={{
                  height: "53.6px",
                  width: "100%",
                  paddingLeft: "80px",
                  fontSize: "18px",
                }}
                buttonStyle={{
                  width: "70px",
                }}
                value={freeFormVal.Phone}
                onChange={(e) =>
                  setFreeFormVal({
                    ...freeFormVal,
                    Phone: e,
                  })
                }
              />
            </div>
          </div>
          <div className="grid gap-6 justify-self-center">
            <p className="text-[18px] font-bold text-center">
              You'll receive an email with your raw score
            </p>
            <AppButton100
              className="bg-Red500 text-Greyscale border-Red500 border-2"
              label={loading ? "Processing..." : "Get raw score"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

//{loading?"Processing...":"Get raw score"}
///disabled:{loading}
