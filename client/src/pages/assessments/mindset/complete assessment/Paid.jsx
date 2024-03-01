import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AppButton100, {
  AppButton900,
} from "../../../../components/reuseable/AppButtons";
import InputField from "../../../../components/reuseable/InputField";
import SelectField from "../../../../components/reuseable/SelectField";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function Paid() {
  const navigate = useNavigate();

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

  const [paidFormVal, setPaidFormVal] = useState({});

  function handleChange(e) {
    setPaidFormVal({
      ...paidFormVal,
      [e.target.name]: e.target.value,
    });
  }

  const [loading, setLoading] = useState(false);
  function onSubmitForm(e) {
    e.preventDefault();
    setLoading(true);
    createFounderApi({
      body: {
        name: paidFormVal.name,
        email: paidFormVal.email,
        userInfo: paidFormVal,
        assessmentInfo,
        score,
        level,
      },
    });
    checkoutApi({
      body: {
        name: paidFormVal.name,
        email: paidFormVal.email,
        userInfo: paidFormVal,
        score,
        level,
      },
    })
      .unwrap()
      .then((result) => {
        window.location.href = result.url;
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }

  console.log(paidFormVal);

  return (
    <div className="bg-Greyscale200 mx-auto">
      <div className="w-[min(90rem,100%)] mx-auto md:px-12 lg:px-32 pb-16 md:pt-16 lg:pb-24 grid gap-12 lg:grid-cols-[1fr,0.6fr]">
        <form
          onSubmit={onSubmitForm}
          id="Mindset_form"
          className="grid gap-10 py-12 md:py-10 px-6 md:px-10 bg-Greyscale md:rounded-[20px]"
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
              pattern=""
              required={true}
              type="text"
              value={paidFormVal.name}
            />
            <InputField
              id="Last_Name"
              label="Last Name"
              name="Last_Name"
              onChange={handleChange}
              pattern=""
              required={true}
              type="text"
              value={paidFormVal.Last_Name}
            />
            <div className="grid gap-2">
              <label htmlFor="Market_Sector" className="font-medium">
                Market Sector
              </label>
              <SelectField
                options={marketSectorOptions}
                selectChange={(e, obj) =>
                  setPaidFormVal({
                    ...paidFormVal,
                    [obj.name]: e.value,
                  })
                }
                name="Market_Sector"
                value={marketSectorOptions.find(
                  (option) => paidFormVal.Market_Sector === option.label
                )}
                placeholder="Select market sector"
              />
            </div>
            <InputField
              id="Organization"
              label="Organization"
              name="Organization"
              onChange={handleChange}
              pattern=""
              required={true}
              type="text"
              value={paidFormVal.Organization}
            />
            <div className="grid gap-2">
              <label htmlFor="Number_of_Employees" className="font-medium">
                Total Number of Employees
              </label>
              <SelectField
                options={employeesCountOptions}
                selectChange={(e, obj) =>
                  setPaidFormVal({
                    ...paidFormVal,
                    [obj.name]: e.value,
                  })
                }
                name="Number_of_Employees"
                value={employeesCountOptions?.find(
                  (option) => paidFormVal.Country === option.label
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
                  setPaidFormVal({
                    ...paidFormVal,
                    [obj.name]: e.value,
                  })
                }
                name="Country"
                value={countryOptions?.find(
                  (option) => paidFormVal.Country === option.label
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
              value={paidFormVal.Email}
            />
            <InputField
              id="Website_or_Social_Handle"
              label="Website or Social Handle"
              name="Website_or_Social_Handle"
              onChange={handleChange}
              required={true}
              type="text"
              value={paidFormVal.Website_or_Social_Handle}
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
                value={paidFormVal.Phone}
                onChange={(e) =>
                  setPaidFormVal({
                    ...paidFormVal,
                    Phone: e,
                  })
                }
              />
            </div>
          </div>
          <div className="grid gap-6 justify-self-center">
            <p className="text-[18px] font-bold text-center">
              all for a limited time just $49 ($500 value)
            </p>
            <AppButton100
              className="bg-Red500 text-Greyscale border-Red500 border-2"
              label="Proceed to checkout"
            />
          </div>
        </form>
        <div className="grid gap-6 rounded-[40px] p-6 lg:px-0 text-Greyscale900 self-start">
          <p className="text-[30px] lg:text-[44px] font-bold lg:font-medium leading-tight">
            With your complete bundle you will receive:
          </p>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
            <div className="flex gap-4 items-center [&>*:first-child]:shrink-0">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="38.1375"
                  cy="38.3992"
                  r="31.2"
                  fill="url(#paint0_linear_804_133568)"
                />
                <mask
                  id="mask0_804_133568"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="6"
                  y="6"
                  width="64"
                  height="64"
                >
                  <circle
                    cx="38.1375"
                    cy="38.1336"
                    r="31.2"
                    fill="#D9D9D9"
                    stroke="url(#paint1_linear_804_133568)"
                    stroke-width="0.677966"
                  />
                </mask>
                <g mask="url(#mask0_804_133568)">
                  <path
                    d="M88.0588 38.1341C88.0588 48.4728 65.7088 56.8541 38.1388 56.8541C10.5687 56.8541 -11.7812 48.4728 -11.7812 38.1341M88.0588 38.1341C88.0588 27.7953 65.7088 19.4141 38.1388 19.4141C10.5687 19.4141 -11.7812 27.7953 -11.7812 38.1341M88.0588 38.1341H-11.7812"
                    stroke="url(#paint2_linear_804_133568)"
                    stroke-width="0.677966"
                  />
                </g>
                <circle
                  cx="38.1375"
                  cy="38.1336"
                  r="31.2"
                  stroke="url(#paint3_linear_804_133568)"
                  stroke-width="0.677966"
                />
                <path
                  d="M38.1375 69.3336C20.9062 69.3336 6.9375 55.3649 6.9375 38.1336C6.9375 20.9023 20.9062 6.93359 38.1375 6.93359"
                  stroke="#CB4A22"
                  stroke-width="0.677966"
                />
                <path
                  d="M38.1341 69.3336C27.7953 69.3336 19.4141 55.3649 19.4141 38.1336C19.4141 20.9023 27.7953 6.93359 38.1341 6.93359"
                  stroke="#CB4A22"
                  stroke-width="0.677966"
                />
                <path
                  d="M37.8281 69.3336C38.0004 69.3336 38.1401 55.3649 38.1401 38.1336C38.1401 20.9023 38.0004 6.93359 37.8281 6.93359"
                  stroke="#CB4A22"
                  stroke-width="0.677966"
                />
                <path
                  d="M37.8281 69.3336C48.1669 69.3336 56.5481 55.3649 56.5481 38.1336C56.5481 20.9023 48.1669 6.93359 37.8281 6.93359"
                  stroke="#CB4A22"
                  stroke-width="0.677966"
                />
                <g filter="url(#filter0_b_804_133568)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M67.5746 66.811C72.1806 60.789 71.7298 52.1395 66.2221 46.6318C60.2235 40.6331 50.4977 40.6331 44.499 46.6318C38.5003 52.6305 38.5003 62.3563 44.499 68.3549C50.0067 73.8626 58.6562 74.3134 64.6782 69.7075L69.3207 74.35C69.7423 74.7715 70.4258 74.7715 70.8473 74.35L72.2171 72.9801C72.6387 72.5586 72.6387 71.8751 72.2171 71.4535L67.5746 66.811Z"
                    fill="url(#paint4_linear_804_133568)"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M67.5746 66.811C72.1806 60.789 71.7298 52.1395 66.2221 46.6318C60.2235 40.6331 50.4977 40.6331 44.499 46.6318C38.5003 52.6305 38.5003 62.3563 44.499 68.3549C50.0067 73.8626 58.6562 74.3134 64.6782 69.7075L69.3207 74.35C69.7423 74.7715 70.4258 74.7715 70.8473 74.35L72.2171 72.9801C72.6387 72.5586 72.6387 71.8751 72.2171 71.4535L67.5746 66.811Z"
                    fill="url(#paint5_radial_804_133568)"
                    fill-opacity="0.7"
                  />
                </g>
                <g filter="url(#filter1_b_804_133568)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M67.4983 66.8874C67.46 66.8491 67.456 66.7884 67.4889 66.7455C72.0624 60.7658 71.6147 52.177 66.1458 46.7081C60.1893 40.7516 50.5319 40.7516 44.5753 46.7081C38.6188 52.6647 38.6188 62.3221 44.5753 68.2786C50.0442 73.7475 58.633 74.1953 64.6126 69.6217C64.6556 69.5888 64.7163 69.5929 64.7545 69.6311L69.397 74.2736C69.7764 74.653 70.3916 74.653 70.771 74.2736L72.1408 72.9038C72.5202 72.5244 72.5202 71.9093 72.1408 71.5299L67.4983 66.8874ZM65.098 70.1272C64.8577 69.8869 64.4772 69.8633 64.1995 70.0591C58.205 74.2863 49.8623 73.7183 44.499 68.3549C38.5003 62.3563 38.5003 52.6305 44.499 46.6318C50.4977 40.6331 60.2235 40.6331 66.2221 46.6318C71.5855 51.9951 72.1535 60.3379 67.9263 66.3323C67.7305 66.61 67.7541 66.9905 67.9944 67.2308L72.2171 71.4535C72.6387 71.8751 72.6387 72.5586 72.2171 72.9801L70.8473 74.35C70.4258 74.7715 69.7423 74.7715 69.3207 74.35L65.098 70.1272Z"
                    fill="url(#paint6_linear_804_133568)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_804_133568"
                    x="19.661"
                    y="21.7938"
                    width="73.2131"
                    height="73.2112"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="10.1695"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_804_133568"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_804_133568"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_b_804_133568"
                    x="29.322"
                    y="31.4548"
                    width="53.8911"
                    height="53.8891"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="5.33898"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_804_133568"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_804_133568"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_804_133568"
                    x1="37.9703"
                    y1="5.42287"
                    x2="37.9703"
                    y2="69.8297"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0327056" stop-color="#CB4A22" />
                    <stop offset="0.520187" stop-color="#F9E3DC" />
                    <stop offset="0.960352" stop-color="#CB4A22" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_804_133568"
                    x1="38.1375"
                    y1="6.93359"
                    x2="38.1375"
                    y2="69.3336"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#0B5BDB" />
                    <stop offset="0.526042" stop-color="#C4D6FF" />
                    <stop offset="1" stop-color="#0B5BDB" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_804_133568"
                    x1="8.27292"
                    y1="38.4005"
                    x2="68.5396"
                    y2="38.4005"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CB4A22" />
                    <stop offset="0.546875" stop-color="#CB4A22" />
                    <stop offset="1" stop-color="#CB4A22" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_804_133568"
                    x1="57"
                    y1="34"
                    x2="38.1375"
                    y2="69.3336"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CB4A22" />
                    <stop offset="0.526042" stop-color="#F9E3DC" />
                    <stop offset="1" stop-color="#CB4A22" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_804_133568"
                    x1="55.4813"
                    y1="19.8109"
                    x2="85.3737"
                    y2="56.9255"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0.188941"
                      stop-color="#CB4A22"
                      stop-opacity="0"
                    />
                    <stop
                      offset="0.526042"
                      stop-color="#CB4A22"
                      stop-opacity="0.7"
                    />
                    <stop offset="1" stop-color="#CB4A22" stop-opacity="0.17" />
                  </linearGradient>
                  <radialGradient
                    id="paint5_radial_804_133568"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(44.862 73.601) rotate(-50.9773) scale(25.5493 41.7761)"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </radialGradient>
                  <linearGradient
                    id="paint6_linear_804_133568"
                    x1="44.6819"
                    y1="40.9709"
                    x2="75.1764"
                    y2="58.7756"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0277705" stop-color="#CB4A22" />
                    <stop
                      offset="0.723618"
                      stop-color="#EDAB96"
                      stop-opacity="0"
                    />
                    <stop offset="1" stop-color="#EDAB96" stop-opacity="0.1" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="">
                Visual breakdown report of your scores in each dimension and how
                they compare to others globally
              </p>
            </div>
            <div className="flex gap-4 items-center [&>*:first-child]:shrink-0">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_b_804_133571)">
                  <path
                    d="M5.42188 48.6641C5.42188 44.4205 8.86194 40.9805 13.1055 40.9805H28.5815V74.5782H13.1055C8.86194 74.5782 5.42188 71.1381 5.42188 66.8946V48.6641Z"
                    fill="url(#paint0_linear_804_133571)"
                  />
                </g>
                <g filter="url(#filter1_b_804_133571)">
                  <path
                    d="M28.5859 29.0899C28.5859 24.8463 32.026 21.4062 36.2695 21.4062H51.4193V74.5754H28.5859V29.0899Z"
                    fill="url(#paint1_linear_804_133571)"
                  />
                </g>
                <g filter="url(#filter2_b_804_133571)">
                  <path
                    d="M51.4141 13.1074C51.4141 8.8639 54.8541 5.42383 59.0977 5.42383H66.89C71.1336 5.42383 74.5736 8.8639 74.5736 13.1074V66.8928C74.5736 71.1363 71.1336 74.5764 66.89 74.5764H51.4141V13.1074Z"
                    fill="url(#paint2_linear_804_133571)"
                  />
                </g>
                <g filter="url(#filter3_d_804_133571)">
                  <path
                    d="M11.5218 61.976C11.2294 62.2099 11.182 62.6365 11.4159 62.9289C11.6498 63.2213 12.0765 63.2687 12.3688 63.0348L11.5218 61.976ZM35.5942 43.5863L36.1451 43.1911C36.0366 43.04 35.8709 42.94 35.6867 42.9147C35.5024 42.8893 35.3159 42.9407 35.1707 43.0569L35.5942 43.5863ZM46.3585 58.5911L45.8076 58.9863C45.9226 59.1465 46.1016 59.2488 46.2981 59.2663C46.4945 59.2839 46.6889 59.2151 46.8305 59.0778L46.3585 58.5911ZM68.565 37.7253C68.5708 37.3509 68.2719 37.0427 67.8975 37.037L61.7966 36.9431C61.4222 36.9373 61.114 37.2362 61.1083 37.6106C61.1025 37.9849 61.4013 38.2931 61.7757 38.2989L67.1988 38.3823L67.1154 43.8054C67.1096 44.1798 67.4084 44.4879 67.7828 44.4937C68.1572 44.4995 68.4654 44.2006 68.4711 43.8262L68.565 37.7253ZM12.3688 63.0348L36.0177 44.1157L35.1707 43.0569L11.5218 61.976L12.3688 63.0348ZM35.0433 43.9815L45.8076 58.9863L46.9094 58.1959L36.1451 43.1911L35.0433 43.9815ZM46.8305 59.0778L68.3591 38.2016L67.4151 37.2281L45.8865 58.1044L46.8305 59.0778Z"
                    fill="#FDFDFD"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_804_133571"
                    x="1.58007"
                    y="37.1387"
                    width="30.8438"
                    height="41.2813"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="1.9209"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_804_133571"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_804_133571"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_b_804_133571"
                    x="24.7441"
                    y="17.5644"
                    width="30.5156"
                    height="60.8535"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="1.9209"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_804_133571"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_804_133571"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_b_804_133571"
                    x="47.5723"
                    y="1.58202"
                    width="30.8438"
                    height="76.836"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="1.9209"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_804_133571"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_804_133571"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_d_804_133571"
                    x="6.04657"
                    y="31.7243"
                    width="72.958"
                    height="41.8974"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="2.60953" dy="2.60953" />
                    <feGaussianBlur stdDeviation="3.91429" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.445401 0 0 0 0 0.162363 0 0 0 0 0.0745992 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_133571"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_133571"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_804_133571"
                    x1="17.0017"
                    y1="40.9805"
                    x2="17.0017"
                    y2="74.5782"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F9E3DC" />
                    <stop offset="0.765625" stop-color="#CB4A22" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_804_133571"
                    x1="40.0026"
                    y1="21.4062"
                    x2="40.0026"
                    y2="74.5754"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F9E3DC" />
                    <stop offset="0.765625" stop-color="#CB4A22" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_804_133571"
                    x1="62.9939"
                    y1="5.42383"
                    x2="62.9939"
                    y2="74.5764"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F9E3DC" />
                    <stop offset="0.765625" stop-color="#CB4A22" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="">Top trends from all participants by region</p>
            </div>
            <div className="flex gap-4 items-center [&>*:first-child]:shrink-0">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.57812 5.42383L27.1902 11.8268V74.5764L1.57812 68.1734V5.42383Z"
                  fill="white"
                />
                <path
                  d="M1.57812 5.42383L27.1902 11.8268V74.5764L1.57812 68.1734V5.42383Z"
                  fill="url(#paint0_linear_804_133574)"
                />
                <path
                  d="M1.57812 5.42383L27.1902 11.8268V74.5764L1.57812 68.1734V5.42383Z"
                  fill="url(#paint1_linear_804_133574)"
                  fill-opacity="0.2"
                />
                <path
                  d="M1.57812 5.42383L27.1902 11.8268V74.5764L1.57812 68.1734V5.42383Z"
                  stroke="url(#paint2_linear_804_133574)"
                  stroke-width="0.271186"
                />
                <path
                  d="M52.8086 5.42383L27.1965 11.8268V74.5764L52.8086 68.1734V5.42383Z"
                  fill="white"
                />
                <path
                  d="M52.8086 5.42383L27.1965 11.8268V74.5764L52.8086 68.1734V5.42383Z"
                  fill="url(#paint3_linear_804_133574)"
                />
                <path
                  d="M52.8086 5.42383L27.1965 11.8268V74.5764L52.8086 68.1734V5.42383Z"
                  fill="url(#paint4_linear_804_133574)"
                  fill-opacity="0.2"
                />
                <path
                  d="M52.8086 5.42383L27.1965 11.8268V74.5764L52.8086 68.1734V5.42383Z"
                  stroke="url(#paint5_linear_804_133574)"
                  stroke-width="0.271186"
                />
                <path
                  d="M52.8086 5.42383L78.4207 11.8268V74.5764L52.8086 68.1734V5.42383Z"
                  fill="white"
                />
                <path
                  d="M52.8086 5.42383L78.4207 11.8268V74.5764L52.8086 68.1734V5.42383Z"
                  fill="url(#paint6_linear_804_133574)"
                />
                <path
                  d="M52.8086 5.42383L78.4207 11.8268V74.5764L52.8086 68.1734V5.42383Z"
                  fill="url(#paint7_linear_804_133574)"
                  fill-opacity="0.2"
                />
                <path
                  d="M52.8086 5.42383L78.4207 11.8268V74.5764L52.8086 68.1734V5.42383Z"
                  stroke="url(#paint8_linear_804_133574)"
                  stroke-width="0.271186"
                />
                <g clip-path="url(#clip0_804_133574)">
                  <g filter="url(#filter0_bi_804_133574)">
                    <path
                      d="M39.9993 30.5078C42.5166 30.5078 44.9309 31.5078 46.7109 33.2878C48.4909 35.0678 49.4909 37.482 49.4909 39.9993C49.4909 43.5112 47.5767 46.5801 44.7451 48.2253V51.0728C44.7451 51.4923 44.5784 51.8947 44.2818 52.1914C43.9851 52.488 43.5827 52.6547 43.1632 52.6547H36.8355C36.4159 52.6547 36.0136 52.488 35.7169 52.1914C35.4202 51.8947 35.2536 51.4923 35.2536 51.0728V48.2253C32.4219 46.5801 30.5078 43.5112 30.5078 39.9993C30.5078 37.482 31.5078 35.0678 33.2878 33.2878C35.0678 31.5078 37.482 30.5078 39.9993 30.5078ZM43.1632 54.2366V55.8185C43.1632 56.2381 42.9965 56.6405 42.6998 56.9371C42.4032 57.2338 42.0008 57.4005 41.5813 57.4005H38.4174C37.9979 57.4005 37.5955 57.2338 37.2988 56.9371C37.0022 56.6405 36.8355 56.2381 36.8355 55.8185V54.2366H43.1632Z"
                      fill="url(#paint9_linear_804_133574)"
                      fill-opacity="0.5"
                    />
                    <path
                      d="M39.9993 30.5078C42.5166 30.5078 44.9309 31.5078 46.7109 33.2878C48.4909 35.0678 49.4909 37.482 49.4909 39.9993C49.4909 43.5112 47.5767 46.5801 44.7451 48.2253V51.0728C44.7451 51.4923 44.5784 51.8947 44.2818 52.1914C43.9851 52.488 43.5827 52.6547 43.1632 52.6547H36.8355C36.4159 52.6547 36.0136 52.488 35.7169 52.1914C35.4202 51.8947 35.2536 51.4923 35.2536 51.0728V48.2253C32.4219 46.5801 30.5078 43.5112 30.5078 39.9993C30.5078 37.482 31.5078 35.0678 33.2878 33.2878C35.0678 31.5078 37.482 30.5078 39.9993 30.5078ZM43.1632 54.2366V55.8185C43.1632 56.2381 42.9965 56.6405 42.6998 56.9371C42.4032 57.2338 42.0008 57.4005 41.5813 57.4005H38.4174C37.9979 57.4005 37.5955 57.2338 37.2988 56.9371C37.0022 56.6405 36.8355 56.2381 36.8355 55.8185V54.2366H43.1632Z"
                      fill="url(#paint10_radial_804_133574)"
                    />
                  </g>
                  <g filter="url(#filter1_di_804_133574)">
                    <path
                      d="M39.9999 22.666V27.2054M49.0787 30.9195L52.3801 27.6181M52.7928 39.9984H57.3322M30.9215 30.9197L27.6201 27.6183M27.2074 39.9986H22.668"
                      stroke="#FDFDFD"
                      stroke-width="2.0339"
                      stroke-linecap="round"
                    />
                    <path
                      d="M39.9999 22.666V27.2054M49.0787 30.9195L52.3801 27.6181M52.7928 39.9984H57.3322M30.9215 30.9197L27.6201 27.6183M27.2074 39.9986H22.668"
                      stroke="url(#paint11_radial_804_133574)"
                      stroke-width="2.0339"
                      stroke-linecap="round"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_bi_804_133574"
                    x="10.1688"
                    y="10.1688"
                    width="59.6623"
                    height="67.5705"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="10.1695"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_804_133574"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_804_133574"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="2.71186" />
                    <feGaussianBlur stdDeviation="1.35593" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect2_innerShadow_804_133574"
                    />
                  </filter>
                  <filter
                    id="filter1_di_804_133574"
                    x="6.73709"
                    y="8.08912"
                    width="66.5258"
                    height="49.1977"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1.35593" />
                    <feGaussianBlur stdDeviation="7.45763" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.615686 0 0 0 0 0.223529 0 0 0 0 0.101961 0 0 0 0.2 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_133574"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_133574"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="1.35593" />
                    <feGaussianBlur stdDeviation="1.35593" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.12 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect2_innerShadow_804_133574"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_804_133574"
                    x1="14.5336"
                    y1="0.339082"
                    x2="14.5336"
                    y2="69.8306"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0207592" stop-color="#F9E3DC" />
                    <stop offset="0.649494" stop-color="#CB4A22" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_804_133574"
                    x1="25.5718"
                    y1="41.695"
                    x2="-0.529924"
                    y2="40.0001"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CB4A22" />
                    <stop offset="1" stop-color="#F9E3DC" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_804_133574"
                    x1="14.3842"
                    y1="5.42383"
                    x2="14.3842"
                    y2="74.5764"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F9E3DC" />
                    <stop offset="1" stop-color="#CB4A22" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_804_133574"
                    x1="39.8531"
                    y1="0.339082"
                    x2="39.8531"
                    y2="69.8306"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0207592" stop-color="#F9E3DC" />
                    <stop offset="0.649494" stop-color="#CB4A22" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_804_133574"
                    x1="28.8149"
                    y1="41.695"
                    x2="54.9166"
                    y2="40.0001"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CB4A22" />
                    <stop offset="1" stop-color="#F9E3DC" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_804_133574"
                    x1="40.0026"
                    y1="5.42383"
                    x2="40.0026"
                    y2="74.5764"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F9E3DC" />
                    <stop offset="1" stop-color="#CB4A22" />
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_804_133574"
                    x1="65.7641"
                    y1="0.339082"
                    x2="65.7641"
                    y2="69.8306"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0207592" stop-color="#F9E3DC" />
                    <stop offset="0.649494" stop-color="#CB4A22" />
                  </linearGradient>
                  <linearGradient
                    id="paint7_linear_804_133574"
                    x1="76.8022"
                    y1="41.695"
                    x2="50.7005"
                    y2="40.0001"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CB4A22" />
                    <stop offset="1" stop-color="#F9E3DC" />
                  </linearGradient>
                  <linearGradient
                    id="paint8_linear_804_133574"
                    x1="65.6146"
                    y1="5.42383"
                    x2="65.6146"
                    y2="74.5764"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F9E3DC" />
                    <stop offset="1" stop-color="#CB4A22" />
                  </linearGradient>
                  <linearGradient
                    id="paint9_linear_804_133574"
                    x1="39.3214"
                    y1="25.4231"
                    x2="55.7215"
                    y2="43.0173"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F9E3DC" />
                    <stop offset="0.586318" stop-color="#CB4A22" />
                    <stop offset="1" stop-color="#CB4A22" stop-opacity="0.17" />
                    <stop offset="1" stop-color="#F9E3DC" />
                  </linearGradient>
                  <radialGradient
                    id="paint10_radial_804_133574"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(33.3448 56.52) rotate(-60.2272) scale(18.9029 27.2347)"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0.46" />
                  </radialGradient>
                  <radialGradient
                    id="paint11_radial_804_133574"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(39.9985 38.9816) rotate(-90) scale(9.49153 6.32768)"
                  >
                    <stop stop-color="#CB4A22" />
                    <stop offset="1" stop-color="#F9E3DC" />
                  </radialGradient>
                  <clipPath id="clip0_804_133574">
                    <rect
                      width="37.9661"
                      height="37.9661"
                      fill="white"
                      transform="translate(21.0156 21.0176)"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p className="">
                Personalized action insights for each dimension based on your
                responses
              </p>
            </div>
            <div className="flex gap-4 items-center [&>*:first-child]:shrink-0">
              <svg
                width="80"
                height="92"
                viewBox="0 0 80 92"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="46"
                  cy="26"
                  r="26"
                  fill="url(#paint0_linear_804_133577)"
                />
                <g filter="url(#filter0_d_804_133577)">
                  <g clip-path="url(#clip0_804_133577)">
                    <rect
                      x="8"
                      y="12"
                      width="52"
                      height="73.3985"
                      fill="#FDFDFD"
                    />
                    <rect
                      x="8"
                      y="12"
                      width="52"
                      height="73.3985"
                      fill="url(#paint1_linear_804_133577)"
                      fill-opacity="0.2"
                    />
                    <g filter="url(#filter1_i_804_133577)">
                      <path
                        d="M15.4602 24.2015C15.8949 24.6129 16.1968 24.8995 16.3658 25.0614C16.5348 25.2232 16.724 25.4222 16.9333 25.6582C17.1506 25.8942 17.2834 26.046 17.3317 26.1134C17.38 26.1741 17.4323 26.2888 17.4887 26.4574C17.5531 26.6192 17.5853 26.744 17.5853 26.8316C17.5853 26.9126 17.5853 27.0609 17.5853 27.2767V29.7045C17.5853 30.4059 17.3116 30.9994 16.7642 31.4849C16.2169 31.9705 15.4763 32.2133 14.5426 32.2133C13.6089 32.2133 12.8684 31.9705 12.321 31.4849C11.7737 30.9994 11.5 30.4059 11.5 29.7045V28.4906C11.5 28.3558 11.5805 28.2883 11.7415 28.2883H13.4318C13.5928 28.2883 13.6733 28.3558 13.6733 28.4906V29.7045C13.6733 29.9069 13.7457 30.0788 13.8906 30.2204C14.0355 30.3621 14.2529 30.4329 14.5426 30.4329C14.8324 30.4329 15.0497 30.3621 15.1946 30.2204C15.3395 30.0788 15.4119 29.9069 15.4119 29.7045V27.4791C15.4119 27.2633 15.3838 27.0947 15.3274 26.9733C15.2791 26.8451 15.1302 26.6462 14.8807 26.3764C14.6312 26.1067 14.1965 25.6919 13.5767 25.1322C12.5786 24.2353 11.983 23.6587 11.7898 23.4024C11.5966 23.1394 11.5 22.7449 11.5 22.2188V20.1552C11.5 19.4538 11.7656 18.8604 12.2969 18.3748C12.8362 17.8893 13.5687 17.6465 14.4943 17.6465C15.42 17.6465 16.1485 17.8893 16.6797 18.3748C17.219 18.8604 17.4887 19.4538 17.4887 20.1552V21.3691C17.4887 21.504 17.4082 21.5714 17.2472 21.5714H15.5568C15.3958 21.5714 15.3154 21.504 15.3154 21.3691V20.1552C15.3154 19.9461 15.251 19.7742 15.1222 19.6393C14.9934 19.4977 14.7841 19.4269 14.4943 19.4269C14.2046 19.4269 13.9953 19.4977 13.8665 19.6393C13.7377 19.7742 13.6733 19.9461 13.6733 20.1552V21.8951C13.6733 21.9895 13.6733 22.057 13.6733 22.0974C13.6814 22.1379 13.6854 22.1885 13.6854 22.2492C13.6854 22.3099 13.6975 22.3605 13.7216 22.4009C13.7457 22.4414 13.7659 22.4852 13.782 22.5324C13.7981 22.5796 13.8343 22.6336 13.8906 22.6943C13.955 22.7482 14.0073 22.8056 14.0476 22.8662C14.0959 22.9202 14.1764 22.9978 14.2891 23.0989C14.4018 23.2001 14.4984 23.2945 14.5788 23.3822C14.6674 23.4631 14.8002 23.5845 14.9773 23.7463C15.1544 23.9082 15.3154 24.0599 15.4602 24.2015Z"
                        fill="url(#paint2_radial_804_133577)"
                      />
                      <path
                        d="M25.511 17.8488C25.672 17.8488 25.7525 17.9162 25.7525 18.0511V31.8086C25.7525 31.9435 25.672 32.0109 25.511 32.0109H23.8207C23.6597 32.0109 23.5792 31.9435 23.5792 31.8086V25.6177H21.5991V31.8086C21.5991 31.9435 21.5186 32.0109 21.3576 32.0109H19.6672C19.5063 32.0109 19.4258 31.9435 19.4258 31.8086V18.0511C19.4258 17.9162 19.5063 17.8488 19.6672 17.8488H21.3576C21.5186 17.8488 21.5991 17.9162 21.5991 18.0511V23.8374H23.5792V18.0511C23.5792 17.9162 23.6597 17.8488 23.8207 17.8488H25.511Z"
                        fill="url(#paint3_radial_804_133577)"
                      />
                      <path
                        d="M33.7741 31.7682C33.7982 31.93 33.7178 32.0109 33.5326 32.0109H31.7457C31.6008 32.0109 31.5203 31.9435 31.5042 31.8086L31.2869 29.9069H29.6931L29.4758 31.8086C29.4597 31.9435 29.3792 32.0109 29.2343 32.0109H27.4474C27.2622 32.0109 27.1817 31.93 27.2059 31.7682L29.3792 18.0107C29.4033 17.9028 29.4838 17.8488 29.6207 17.8488H31.3593C31.4962 17.8488 31.5766 17.9028 31.6008 18.0107L33.7741 31.7682ZM29.8984 28.1265H31.0816L30.49 22.9269L29.8984 28.1265Z"
                        fill="url(#paint4_radial_804_133577)"
                      />
                      <path
                        d="M38.1456 17.8488C39.0793 17.8488 39.8199 18.0916 40.3672 18.5771C40.9146 19.0627 41.1882 19.6562 41.1882 20.3575V23.109C41.1882 23.8104 40.9146 24.4039 40.3672 24.8894C39.8199 25.375 39.0793 25.6177 38.1456 25.6177H37.2763V31.8086C37.2763 31.9435 37.1958 32.0109 37.0348 32.0109H35.3445C35.1835 32.0109 35.103 31.9435 35.103 31.8086V18.0511C35.103 17.9162 35.1835 17.8488 35.3445 17.8488H38.1456ZM38.1456 23.8374C38.4354 23.8374 38.6527 23.7666 38.7976 23.6249C38.9425 23.4833 39.0149 23.3113 39.0149 23.109V20.3575C39.0149 20.1552 38.9425 19.9832 38.7976 19.8416C38.6527 19.7 38.4354 19.6292 38.1456 19.6292H37.2763V23.8374H38.1456Z"
                        fill="url(#paint5_radial_804_133577)"
                      />
                      <path
                        d="M48.2258 30.2306C48.3868 30.2306 48.4673 30.298 48.4673 30.4329V31.8086C48.4673 31.9435 48.3868 32.0109 48.2258 32.0109H43.1548C42.9938 32.0109 42.9133 31.9435 42.9133 31.8086V18.0511C42.9133 17.9162 42.9938 17.8488 43.1548 17.8488H48.0809C48.2419 17.8488 48.3224 17.9162 48.3224 18.0511V19.4269C48.3224 19.5617 48.2419 19.6292 48.0809 19.6292H45.0866V23.8374H47.6463C47.8073 23.8374 47.8877 23.9048 47.8877 24.0397V25.4154C47.8877 25.5503 47.8073 25.6177 47.6463 25.6177H45.0866V30.2306H48.2258Z"
                        fill="url(#paint6_radial_804_133577)"
                      />
                      <path
                        d="M56.5455 31.7277C56.5696 31.8086 56.5495 31.8761 56.4851 31.93C56.4288 31.984 56.3523 32.0109 56.2557 32.0109H54.6137C54.4929 32.0109 54.4124 31.957 54.3722 31.8491L52.2351 25.6177H52.1989V31.8086C52.1989 31.9435 52.1184 32.0109 51.9574 32.0109H50.2671C50.1061 32.0109 50.0256 31.9435 50.0256 31.8086V18.0511C50.0256 17.9162 50.1061 17.8488 50.2671 17.8488H53.0682C54.0019 17.8488 54.7425 18.0916 55.2898 18.5771C55.8372 19.0627 56.1108 19.6562 56.1108 20.3575V23.109C56.1108 23.6148 55.9579 24.0768 55.652 24.4949C55.3542 24.9063 54.9316 25.2097 54.3843 25.4053L56.5455 31.7277ZM52.1989 19.6292V23.8374H53.0682C53.358 23.8374 53.5753 23.7666 53.7202 23.6249C53.8651 23.4833 53.9375 23.3113 53.9375 23.109V20.3575C53.9375 20.1552 53.8651 19.9832 53.7202 19.8416C53.5753 19.7 53.358 19.6292 53.0682 19.6292H52.1989Z"
                        fill="url(#paint7_radial_804_133577)"
                      />
                    </g>
                    <g filter="url(#filter2_i_804_133577)">
                      <path
                        d="M20.5863 35.4734C20.6154 35.4734 20.63 35.488 20.63 35.5172V38.0376C20.63 38.1893 20.5804 38.3176 20.4812 38.4227C20.3821 38.5277 20.2479 38.5802 20.0787 38.5802C19.9095 38.5802 19.7753 38.5277 19.6761 38.4227C19.5769 38.3176 19.5273 38.1893 19.5273 38.0376V35.5172C19.5273 35.488 19.5419 35.4734 19.5711 35.4734H19.8774C19.9066 35.4734 19.9212 35.488 19.9212 35.5172V38.0376C19.9212 38.0813 19.9343 38.1185 19.9605 38.1492C19.9868 38.1798 20.0262 38.1951 20.0787 38.1951C20.1312 38.1951 20.1706 38.1798 20.1968 38.1492C20.2231 38.1185 20.2362 38.0813 20.2362 38.0376V35.5172C20.2362 35.488 20.2508 35.4734 20.28 35.4734H20.5863Z"
                        fill="#111111"
                      />
                      <path
                        d="M22.2929 35.4734C22.3221 35.4734 22.3367 35.488 22.3367 35.5172V38.4927C22.3367 38.5218 22.3221 38.5364 22.2929 38.5364H21.9866C21.9633 38.5364 21.9487 38.5248 21.9429 38.5014L21.584 36.8758V38.4927C21.584 38.5218 21.5695 38.5364 21.5403 38.5364H21.234C21.2048 38.5364 21.1902 38.5218 21.1902 38.4927V35.5172C21.1902 35.488 21.2048 35.4734 21.234 35.4734H21.549C21.568 35.4734 21.5797 35.4822 21.584 35.4997L21.9429 37.169V35.5172C21.9429 35.488 21.9574 35.4734 21.9866 35.4734H22.2929Z"
                        fill="#111111"
                      />
                      <path
                        d="M23.8602 38.1514C23.8894 38.1514 23.904 38.1659 23.904 38.1951V38.4927C23.904 38.5218 23.8894 38.5364 23.8602 38.5364H22.9413C22.9122 38.5364 22.8976 38.5218 22.8976 38.4927V35.5172C22.8976 35.488 22.9122 35.4734 22.9413 35.4734H23.2476C23.2768 35.4734 23.2914 35.488 23.2914 35.5172V38.1514H23.8602Z"
                        fill="#111111"
                      />
                      <path
                        d="M24.5071 35.5872C24.6063 35.4822 24.7405 35.4297 24.9097 35.4297C25.0789 35.4297 25.2131 35.4822 25.3123 35.5872C25.4114 35.6922 25.461 35.8206 25.461 35.9723V38.0376C25.461 38.1893 25.4114 38.3176 25.3123 38.4227C25.2131 38.5277 25.0789 38.5802 24.9097 38.5802C24.7405 38.5802 24.6063 38.5277 24.5071 38.4227C24.408 38.3176 24.3584 38.1893 24.3584 38.0376V35.9723C24.3584 35.8206 24.408 35.6922 24.5071 35.5872ZM24.7916 38.1492C24.8178 38.1798 24.8572 38.1951 24.9097 38.1951C24.9622 38.1951 25.0016 38.1798 25.0278 38.1492C25.0541 38.1185 25.0672 38.0813 25.0672 38.0376V35.9723C25.0672 35.9285 25.0541 35.8913 25.0278 35.8607C25.0016 35.8301 24.9622 35.8147 24.9097 35.8147C24.8572 35.8147 24.8178 35.8301 24.7916 35.8607C24.7653 35.8913 24.7522 35.9285 24.7522 35.9723V38.0376C24.7522 38.0813 24.7653 38.1185 24.7916 38.1492Z"
                        fill="#111111"
                      />
                      <path
                        d="M26.7397 36.2786C26.7105 36.2786 26.6959 36.264 26.6959 36.2348V35.9723C26.6959 35.9285 26.6828 35.8913 26.6566 35.8607C26.6303 35.8301 26.5909 35.8147 26.5384 35.8147C26.4859 35.8147 26.4465 35.8301 26.4203 35.8607C26.394 35.8913 26.3809 35.9285 26.3809 35.9723V38.0376C26.3809 38.0813 26.394 38.1185 26.4203 38.1492C26.4465 38.1798 26.4859 38.1951 26.5384 38.1951C26.5909 38.1951 26.6303 38.1798 26.6566 38.1492C26.6828 38.1185 26.6959 38.0813 26.6959 38.0376V37.7751C26.6959 37.7459 26.7105 37.7313 26.7397 37.7313H27.046C27.0752 37.7313 27.0897 37.7459 27.0897 37.7751V38.0376C27.0897 38.1893 27.0402 38.3176 26.941 38.4227C26.8418 38.5277 26.7076 38.5802 26.5384 38.5802C26.3692 38.5802 26.235 38.5277 26.1358 38.4227C26.0367 38.3176 25.9871 38.1893 25.9871 38.0376V35.9723C25.9871 35.8206 26.0367 35.6922 26.1358 35.5872C26.235 35.4822 26.3692 35.4297 26.5384 35.4297C26.7076 35.4297 26.8418 35.4822 26.941 35.5872C27.0402 35.6922 27.0897 35.8206 27.0897 35.9723V36.2348C27.0897 36.264 27.0752 36.2786 27.046 36.2786H26.7397Z"
                        fill="#111111"
                      />
                      <path
                        d="M28.8147 38.4752C28.8191 38.4897 28.8169 38.5036 28.8082 38.5167C28.7994 38.5299 28.787 38.5364 28.771 38.5364H28.4647C28.4428 38.5364 28.4282 38.5248 28.4209 38.5014L28.0271 37.1275V38.4927C28.0271 38.5218 28.0125 38.5364 27.9833 38.5364H27.677C27.6479 38.5364 27.6333 38.5218 27.6333 38.4927V35.5172C27.6333 35.488 27.6479 35.4734 27.677 35.4734H27.9833C28.0125 35.4734 28.0271 35.488 28.0271 35.5172V36.7293L28.3772 35.5084C28.3844 35.4851 28.399 35.4734 28.4209 35.4734H28.7272C28.7433 35.4734 28.7557 35.48 28.7644 35.4931C28.7732 35.5063 28.7753 35.5201 28.771 35.5347L28.3728 36.9284L28.8147 38.4752Z"
                        fill="#111111"
                      />
                      <path
                        d="M31.3615 35.4734C31.3907 35.4734 31.4053 35.488 31.4053 35.5172V35.8235C31.4053 35.8527 31.3907 35.8673 31.3615 35.8673H31.0465V38.4927C31.0465 38.5218 31.0319 38.5364 31.0027 38.5364H30.6964C30.6672 38.5364 30.6526 38.5218 30.6526 38.4927V35.8673H30.3376C30.3084 35.8673 30.2938 35.8527 30.2938 35.8235V35.5172C30.2938 35.488 30.3084 35.4734 30.3376 35.4734H31.3615Z"
                        fill="#111111"
                      />
                      <path
                        d="M32.9794 35.4734C33.0086 35.4734 33.0232 35.488 33.0232 35.5172V38.4927C33.0232 38.5218 33.0086 38.5364 32.9794 38.5364H32.6731C32.6439 38.5364 32.6294 38.5218 32.6294 38.4927V37.1537H32.2706V38.4927C32.2706 38.5218 32.256 38.5364 32.2268 38.5364H31.9205C31.8913 38.5364 31.8767 38.5218 31.8767 38.4927V35.5172C31.8767 35.488 31.8913 35.4734 31.9205 35.4734H32.2268C32.256 35.4734 32.2706 35.488 32.2706 35.5172V36.7686H32.6294V35.5172C32.6294 35.488 32.6439 35.4734 32.6731 35.4734H32.9794Z"
                        fill="#111111"
                      />
                      <path
                        d="M34.5467 38.1514C34.5759 38.1514 34.5905 38.1659 34.5905 38.1951V38.4927C34.5905 38.5218 34.5759 38.5364 34.5467 38.5364H33.6278C33.5987 38.5364 33.5841 38.5218 33.5841 38.4927V35.5172C33.5841 35.488 33.5987 35.4734 33.6278 35.4734H34.5205C34.5496 35.4734 34.5642 35.488 34.5642 35.5172V35.8147C34.5642 35.8439 34.5496 35.8585 34.5205 35.8585H33.9779V36.7686H34.4417C34.4709 36.7686 34.4855 36.7832 34.4855 36.8124V37.1099C34.4855 37.1391 34.4709 37.1537 34.4417 37.1537H33.9779V38.1514H34.5467Z"
                        fill="#111111"
                      />
                      <path
                        d="M36.6989 35.4734C36.8681 35.4734 37.0023 35.526 37.1014 35.631C37.2006 35.736 37.2502 35.8643 37.2502 36.016V36.6111C37.2502 36.7628 37.2006 36.8912 37.1014 36.9962C37.0023 37.1012 36.8681 37.1537 36.6989 37.1537H36.5414V38.4927C36.5414 38.5218 36.5268 38.5364 36.4976 38.5364H36.1913C36.1621 38.5364 36.1475 38.5218 36.1475 38.4927V35.5172C36.1475 35.488 36.1621 35.4734 36.1913 35.4734H36.6989ZM36.6989 36.7686C36.7514 36.7686 36.7908 36.7533 36.817 36.7227C36.8433 36.6921 36.8564 36.6549 36.8564 36.6111V36.016C36.8564 35.9723 36.8433 35.9351 36.817 35.9044C36.7908 35.8738 36.7514 35.8585 36.6989 35.8585H36.5414V36.7686H36.6989Z"
                        fill="#111111"
                      />
                      <path
                        d="M37.9246 35.5872C38.0238 35.4822 38.158 35.4297 38.3272 35.4297C38.4964 35.4297 38.6306 35.4822 38.7297 35.5872C38.8289 35.6922 38.8785 35.8206 38.8785 35.9723V38.0376C38.8785 38.1893 38.8289 38.3176 38.7297 38.4227C38.6306 38.5277 38.4964 38.5802 38.3272 38.5802C38.158 38.5802 38.0238 38.5277 37.9246 38.4227C37.8254 38.3176 37.7758 38.1893 37.7758 38.0376V35.9723C37.7758 35.8206 37.8254 35.6922 37.9246 35.5872ZM38.209 38.1492C38.2353 38.1798 38.2747 38.1951 38.3272 38.1951C38.3797 38.1951 38.4191 38.1798 38.4453 38.1492C38.4716 38.1185 38.4847 38.0813 38.4847 38.0376V35.9723C38.4847 35.9285 38.4716 35.8913 38.4453 35.8607C38.4191 35.8301 38.3797 35.8147 38.3272 35.8147C38.2747 35.8147 38.2353 35.8301 38.209 35.8607C38.1828 35.8913 38.1697 35.9285 38.1697 35.9723V38.0376C38.1697 38.0813 38.1828 38.1185 38.209 38.1492Z"
                        fill="#111111"
                      />
                      <path
                        d="M41.3006 35.4734C41.3341 35.4734 41.3487 35.4909 41.3443 35.526L40.9483 38.5014C40.944 38.5248 40.9294 38.5364 40.9046 38.5364H40.5655C40.5553 38.5364 40.548 38.5364 40.5436 38.5364C40.5392 38.535 40.5348 38.532 40.5305 38.5277C40.5261 38.5218 40.5232 38.5131 40.5217 38.5014L40.3292 36.6286L40.1367 38.5014C40.1352 38.5131 40.1323 38.5218 40.1279 38.5277C40.1235 38.532 40.1192 38.535 40.1148 38.5364C40.1104 38.5364 40.1031 38.5364 40.0929 38.5364H39.7538C39.729 38.5364 39.7144 38.5248 39.71 38.5014L39.314 35.526C39.3097 35.4909 39.3242 35.4734 39.3578 35.4734H39.6838C39.7086 35.4734 39.7232 35.488 39.7275 35.5172L39.9288 37.6285L40.1192 35.5172C40.1221 35.488 40.1367 35.4734 40.1629 35.4734H40.4955C40.5217 35.4734 40.5363 35.488 40.5392 35.5172L40.7296 37.6285L40.9308 35.5172C40.9352 35.488 40.9498 35.4734 40.9746 35.4734H41.3006Z"
                        fill="#111111"
                      />
                      <path
                        d="M42.7792 38.1514C42.8083 38.1514 42.8229 38.1659 42.8229 38.1951V38.4927C42.8229 38.5218 42.8083 38.5364 42.7792 38.5364H41.8603C41.8311 38.5364 41.8165 38.5218 41.8165 38.4927V35.5172C41.8165 35.488 41.8311 35.4734 41.8603 35.4734H42.7529C42.7821 35.4734 42.7967 35.488 42.7967 35.5172V35.8147C42.7967 35.8439 42.7821 35.8585 42.7529 35.8585H42.2103V36.7686H42.6741C42.7033 36.7686 42.7179 36.7832 42.7179 36.8124V37.1099C42.7179 37.1391 42.7033 37.1537 42.6741 37.1537H42.2103V38.1514H42.7792Z"
                        fill="#111111"
                      />
                      <path
                        d="M44.4967 38.4752C44.5011 38.4927 44.4975 38.5072 44.4858 38.5189C44.4756 38.5306 44.4617 38.5364 44.4442 38.5364H44.1467C44.1248 38.5364 44.1102 38.5248 44.1029 38.5014L43.7157 37.1537H43.7091V38.4927C43.7091 38.5218 43.6945 38.5364 43.6654 38.5364H43.3591C43.3299 38.5364 43.3153 38.5218 43.3153 38.4927V35.5172C43.3153 35.488 43.3299 35.4734 43.3591 35.4734H43.8666C44.0358 35.4734 44.17 35.526 44.2692 35.631C44.3684 35.736 44.418 35.8643 44.418 36.016V36.6111C44.418 36.7205 44.3903 36.8204 44.3348 36.9109C44.2809 36.9998 44.2043 37.0655 44.1051 37.1078L44.4967 38.4752ZM43.7091 35.8585V36.7686H43.8666C43.9192 36.7686 43.9585 36.7533 43.9848 36.7227C44.011 36.6921 44.0242 36.6549 44.0242 36.6111V36.016C44.0242 35.9723 44.011 35.9351 43.9848 35.9044C43.9585 35.8738 43.9192 35.8585 43.8666 35.8585H43.7091Z"
                        fill="#111111"
                      />
                      <path
                        d="M46.1912 35.5872C46.2904 35.4822 46.4246 35.4297 46.5938 35.4297C46.763 35.4297 46.8972 35.4822 46.9963 35.5872C47.0955 35.6922 47.1451 35.8206 47.1451 35.9723V38.0376C47.1451 38.1893 47.0955 38.3176 46.9963 38.4227C46.8972 38.5277 46.763 38.5802 46.5938 38.5802C46.4246 38.5802 46.2904 38.5277 46.1912 38.4227C46.092 38.3176 46.0425 38.1893 46.0425 38.0376V35.9723C46.0425 35.8206 46.092 35.6922 46.1912 35.5872ZM46.4756 38.1492C46.5019 38.1798 46.5413 38.1951 46.5938 38.1951C46.6463 38.1951 46.6857 38.1798 46.7119 38.1492C46.7382 38.1185 46.7513 38.0813 46.7513 38.0376V35.9723C46.7513 35.9285 46.7382 35.8913 46.7119 35.8607C46.6857 35.8301 46.6463 35.8147 46.5938 35.8147C46.5413 35.8147 46.5019 35.8301 46.4756 35.8607C46.4494 35.8913 46.4363 35.9285 46.4363 35.9723V38.0376C46.4363 38.0813 46.4494 38.1185 46.4756 38.1492Z"
                        fill="#111111"
                      />
                      <path
                        d="M48.6251 35.4734C48.6542 35.4734 48.6688 35.488 48.6688 35.5172V35.8147C48.6688 35.8439 48.6542 35.8585 48.6251 35.8585H48.0825V36.7686H48.5463C48.5755 36.7686 48.5901 36.7832 48.5901 36.8124V37.1099C48.5901 37.1391 48.5755 37.1537 48.5463 37.1537H48.0825V38.4927C48.0825 38.5218 48.0679 38.5364 48.0387 38.5364H47.7324C47.7032 38.5364 47.6887 38.5218 47.6887 38.4927V35.5172C47.6887 35.488 47.7032 35.4734 47.7324 35.4734H48.6251Z"
                        fill="#111111"
                      />
                    </g>
                    <g filter="url(#filter3_i_804_133577)">
                      <rect
                        x="8"
                        y="69.082"
                        width="52"
                        height="6.21064"
                        fill="url(#paint8_radial_804_133577)"
                      />
                    </g>
                    <g filter="url(#filter4_i_804_133577)">
                      <path
                        d="M17.5523 70.9254C17.6942 70.9254 17.8067 70.9694 17.8899 71.0575C17.9731 71.1456 18.0147 71.2532 18.0147 71.3804V71.8796C18.0147 72.0068 17.9731 72.1144 17.8899 72.2025C17.8067 72.2906 17.6942 72.3346 17.5523 72.3346H17.4201V73.4576C17.4201 73.4821 17.4079 73.4943 17.3834 73.4943H17.1265C17.1021 73.4943 17.0898 73.4821 17.0898 73.4576V70.9621C17.0898 70.9376 17.1021 70.9254 17.1265 70.9254H17.5523ZM17.5523 72.0117C17.5963 72.0117 17.6293 71.9988 17.6513 71.9731C17.6734 71.9474 17.6844 71.9163 17.6844 71.8796V71.3804C17.6844 71.3437 17.6734 71.3125 17.6513 71.2869C17.6293 71.2612 17.5963 71.2483 17.5523 71.2483H17.4201V72.0117H17.5523Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M19.4439 73.4429C19.4475 73.4576 19.4445 73.4699 19.4347 73.4796C19.4261 73.4894 19.4145 73.4943 19.3998 73.4943H19.1503C19.1319 73.4943 19.1197 73.4845 19.1136 73.465L18.7888 72.3346H18.7833V73.4576C18.7833 73.4821 18.7711 73.4943 18.7466 73.4943H18.4897C18.4652 73.4943 18.453 73.4821 18.453 73.4576V70.9621C18.453 70.9376 18.4652 70.9254 18.4897 70.9254H18.9154C19.0573 70.9254 19.1698 70.9694 19.253 71.0575C19.3362 71.1456 19.3778 71.2532 19.3778 71.3804V71.8796C19.3778 71.9713 19.3546 72.0551 19.3081 72.1309C19.2628 72.2056 19.1986 72.2606 19.1154 72.2961L19.4439 73.4429ZM18.7833 71.2483V72.0117H18.9154C18.9594 72.0117 18.9925 71.9988 19.0145 71.9731C19.0365 71.9474 19.0475 71.9163 19.0475 71.8796V71.3804C19.0475 71.3437 19.0365 71.3125 19.0145 71.2869C18.9925 71.2612 18.9594 71.2483 18.9154 71.2483H18.7833Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M20.6522 73.1714C20.6767 73.1714 20.6889 73.1836 20.6889 73.2081V73.4576C20.6889 73.4821 20.6767 73.4943 20.6522 73.4943H19.8815C19.857 73.4943 19.8448 73.4821 19.8448 73.4576V70.9621C19.8448 70.9376 19.857 70.9254 19.8815 70.9254H20.6302C20.6546 70.9254 20.6669 70.9376 20.6669 70.9621V71.2116C20.6669 71.2361 20.6546 71.2483 20.6302 71.2483H20.1751V72.0117H20.5641C20.5886 72.0117 20.6008 72.0239 20.6008 72.0484V72.2979C20.6008 72.3224 20.5886 72.3346 20.5641 72.3346H20.1751V73.1714H20.6522Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M23.1296 73.4943C23.1052 73.4943 23.0929 73.4821 23.0929 73.4576V70.9621C23.0929 70.9376 23.1052 70.9254 23.1296 70.9254H23.3865C23.411 70.9254 23.4232 70.9376 23.4232 70.9621V73.4576C23.4232 73.4821 23.411 73.4943 23.3865 73.4943H23.1296Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M24.7015 73.1714C24.726 73.1714 24.7382 73.1836 24.7382 73.2081V73.4576C24.7382 73.4821 24.726 73.4943 24.7015 73.4943H23.9308C23.9063 73.4943 23.8941 73.4821 23.8941 73.4576V70.9621C23.8941 70.9376 23.9063 70.9254 23.9308 70.9254H24.6795C24.7039 70.9254 24.7162 70.9376 24.7162 70.9621V71.2116C24.7162 71.2361 24.7039 71.2483 24.6795 71.2483H24.2244V72.0117H24.6134C24.6379 72.0117 24.6501 72.0239 24.6501 72.0484V72.2979C24.6501 72.3224 24.6379 72.3346 24.6134 72.3346H24.2244V73.1714H24.7015Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M26.1421 73.4429C26.1457 73.4576 26.1427 73.4699 26.1329 73.4796C26.1243 73.4894 26.1127 73.4943 26.098 73.4943H25.8485C25.8301 73.4943 25.8179 73.4845 25.8118 73.465L25.487 72.3346H25.4815V73.4576C25.4815 73.4821 25.4692 73.4943 25.4448 73.4943H25.1879C25.1634 73.4943 25.1512 73.4821 25.1512 73.4576V70.9621C25.1512 70.9376 25.1634 70.9254 25.1879 70.9254H25.6136C25.7555 70.9254 25.868 70.9694 25.9512 71.0575C26.0344 71.1456 26.076 71.2532 26.076 71.3804V71.8796C26.076 71.9713 26.0528 72.0551 26.0063 72.1309C25.961 72.2056 25.8968 72.2606 25.8136 72.2961L26.1421 73.4429ZM25.4815 71.2483V72.0117H25.6136C25.6576 72.0117 25.6907 71.9988 25.7127 71.9731C25.7347 71.9474 25.7457 71.9163 25.7457 71.8796V71.3804C25.7457 71.3437 25.7347 71.3125 25.7127 71.2869C25.6907 71.2612 25.6576 71.2483 25.6136 71.2483H25.4815Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M27.9155 70.9254C28.0574 70.9254 28.17 70.9694 28.2532 71.0575C28.3364 71.1456 28.378 71.2532 28.378 71.3804V73.0392C28.378 73.1665 28.3364 73.2741 28.2532 73.3622C28.17 73.4503 28.0574 73.4943 27.9155 73.4943H27.4898C27.4654 73.4943 27.4531 73.4821 27.4531 73.4576V70.9621C27.4531 70.9376 27.4654 70.9254 27.4898 70.9254H27.9155ZM27.9155 73.1714C27.9596 73.1714 27.9926 73.1585 28.0146 73.1328C28.0367 73.1071 28.0477 73.0759 28.0477 73.0392V71.3804C28.0477 71.3437 28.0367 71.3125 28.0146 71.2869C27.9926 71.2612 27.9596 71.2483 27.9155 71.2483H27.7834V73.1714H27.9155Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M29.6409 73.1714C29.6653 73.1714 29.6776 73.1836 29.6776 73.2081V73.4576C29.6776 73.4821 29.6653 73.4943 29.6409 73.4943H28.8702C28.8457 73.4943 28.8335 73.4821 28.8335 73.4576V70.9621C28.8335 70.9376 28.8457 70.9254 28.8702 70.9254H29.6188C29.6433 70.9254 29.6555 70.9376 29.6555 70.9621V71.2116C29.6555 71.2361 29.6433 71.2483 29.6188 71.2483H29.1638V72.0117H29.5528C29.5773 72.0117 29.5895 72.0239 29.5895 72.0484V72.2979C29.5895 72.3224 29.5773 72.3346 29.5528 72.3346H29.1638V73.1714H29.6409Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M30.9835 70.9254C31.0116 70.9254 31.0239 70.9401 31.0202 70.9694L30.6899 73.465C30.6862 73.4845 30.674 73.4943 30.6532 73.4943H30.3669C30.3461 73.4943 30.3339 73.4845 30.3302 73.465L29.9999 70.9694C29.9963 70.9401 30.0085 70.9254 30.0366 70.9254H30.3082C30.3302 70.9254 30.3425 70.9376 30.3449 70.9621L30.5101 72.6888L30.6752 70.9621C30.6777 70.9376 30.6899 70.9254 30.7119 70.9254H30.9835Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M32.2238 73.1714C32.2483 73.1714 32.2605 73.1836 32.2605 73.2081V73.4576C32.2605 73.4821 32.2483 73.4943 32.2238 73.4943H31.4531C31.4287 73.4943 31.4164 73.4821 31.4164 73.4576V70.9621C31.4164 70.9376 31.4287 70.9254 31.4531 70.9254H32.2018C32.2263 70.9254 32.2385 70.9376 32.2385 70.9621V71.2116C32.2385 71.2361 32.2263 71.2483 32.2018 71.2483H31.7467V72.0117H32.1357C32.1602 72.0117 32.1724 72.0239 32.1724 72.0484V72.2979C32.1724 72.3224 32.1602 72.3346 32.1357 72.3346H31.7467V73.1714H32.2238Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M33.4809 73.1714C33.5053 73.1714 33.5176 73.1836 33.5176 73.2081V73.4576C33.5176 73.4821 33.5053 73.4943 33.4809 73.4943H32.7102C32.6857 73.4943 32.6735 73.4821 32.6735 73.4576V70.9621C32.6735 70.9376 32.6857 70.9254 32.7102 70.9254H32.9671C32.9915 70.9254 33.0038 70.9376 33.0038 70.9621V73.1714H33.4809Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M34.0234 71.0208C34.1066 70.9327 34.2192 70.8887 34.3611 70.8887C34.503 70.8887 34.6155 70.9327 34.6987 71.0208C34.7819 71.1089 34.8235 71.2165 34.8235 71.3437V73.0759C34.8235 73.2032 34.7819 73.3108 34.6987 73.3989C34.6155 73.487 34.503 73.531 34.3611 73.531C34.2192 73.531 34.1066 73.487 34.0234 73.3989C33.9403 73.3108 33.8987 73.2032 33.8987 73.0759V71.3437C33.8987 71.2165 33.9403 71.1089 34.0234 71.0208ZM34.262 73.1695C34.284 73.1952 34.317 73.2081 34.3611 73.2081C34.4051 73.2081 34.4381 73.1952 34.4602 73.1695C34.4822 73.1438 34.4932 73.1126 34.4932 73.0759V71.3437C34.4932 71.307 34.4822 71.2758 34.4602 71.2502C34.4381 71.2245 34.4051 71.2116 34.3611 71.2116C34.317 71.2116 34.284 71.2245 34.262 71.2502C34.24 71.2758 34.229 71.307 34.229 71.3437V73.0759C34.229 73.1126 34.24 73.1438 34.262 73.1695Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M35.7418 70.9254C35.8837 70.9254 35.9962 70.9694 36.0794 71.0575C36.1626 71.1456 36.2042 71.2532 36.2042 71.3804V71.8796C36.2042 72.0068 36.1626 72.1144 36.0794 72.2025C35.9962 72.2906 35.8837 72.3346 35.7418 72.3346H35.6097V73.4576C35.6097 73.4821 35.5974 73.4943 35.573 73.4943H35.3161C35.2916 73.4943 35.2794 73.4821 35.2794 73.4576V70.9621C35.2794 70.9376 35.2916 70.9254 35.3161 70.9254H35.7418ZM35.7418 72.0117C35.7858 72.0117 35.8188 71.9988 35.8409 71.9731C35.8629 71.9474 35.8739 71.9163 35.8739 71.8796V71.3804C35.8739 71.3437 35.8629 71.3125 35.8409 71.2869C35.8188 71.2612 35.7858 71.2483 35.7418 71.2483H35.6097V72.0117H35.7418Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M39.3291 73.1714C39.3536 73.1714 39.3658 73.1836 39.3658 73.2081V73.4576C39.3658 73.4821 39.3536 73.4943 39.3291 73.4943H38.5584C38.534 73.4943 38.5217 73.4821 38.5217 73.4576V70.9621C38.5217 70.9376 38.534 70.9254 38.5584 70.9254H39.3071C39.3316 70.9254 39.3438 70.9376 39.3438 70.9621V71.2116C39.3438 71.2361 39.3316 71.2483 39.3071 71.2483H38.852V72.0117H39.241C39.2655 72.0117 39.2777 72.0239 39.2777 72.0484V72.2979C39.2777 72.3224 39.2655 72.3346 39.241 72.3346H38.852V73.1714H39.3291Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M40.7036 70.9254C40.7281 70.9254 40.7403 70.9376 40.7403 70.9621V73.4576C40.7403 73.4821 40.7281 73.4943 40.7036 73.4943H40.4467C40.4272 73.4943 40.4149 73.4845 40.41 73.465L40.1091 72.1016V73.4576C40.1091 73.4821 40.0969 73.4943 40.0724 73.4943H39.8155C39.791 73.4943 39.7788 73.4821 39.7788 73.4576V70.9621C39.7788 70.9376 39.791 70.9254 39.8155 70.9254H40.0797C40.0956 70.9254 40.1054 70.9327 40.1091 70.9474L40.41 72.3475V70.9621C40.41 70.9376 40.4223 70.9254 40.4467 70.9254H40.7036Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M42.0328 70.9254C42.0573 70.9254 42.0695 70.9376 42.0695 70.9621V71.219C42.0695 71.2434 42.0573 71.2557 42.0328 71.2557H41.7686V73.4576C41.7686 73.4821 41.7564 73.4943 41.7319 73.4943H41.475C41.4505 73.4943 41.4383 73.4821 41.4383 73.4576V71.2557H41.1741C41.1496 71.2557 41.1374 71.2434 41.1374 71.219V70.9621C41.1374 70.9376 41.1496 70.9254 41.1741 70.9254H42.0328Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M44.1825 73.1714C44.2069 73.1714 44.2192 73.1836 44.2192 73.2081V73.4576C44.2192 73.4821 44.2069 73.4943 44.1825 73.4943H43.4118C43.3873 73.4943 43.3751 73.4821 43.3751 73.4576V70.9621C43.3751 70.9376 43.3873 70.9254 43.4118 70.9254H44.1605C44.1849 70.9254 44.1972 70.9376 44.1972 70.9621V71.2116C44.1972 71.2361 44.1849 71.2483 44.1605 71.2483H43.7054V72.0117H44.0944C44.1189 72.0117 44.1311 72.0239 44.1311 72.0484V72.2979C44.1311 72.3224 44.1189 72.3346 44.0944 72.3346H43.7054V73.1714H44.1825Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M45.0946 70.9254C45.2365 70.9254 45.349 70.9694 45.4322 71.0575C45.5154 71.1456 45.557 71.2532 45.557 71.3804V73.0392C45.557 73.1665 45.5154 73.2741 45.4322 73.3622C45.349 73.4503 45.2365 73.4943 45.0946 73.4943H44.6689C44.6444 73.4943 44.6322 73.4821 44.6322 73.4576V70.9621C44.6322 70.9376 44.6444 70.9254 44.6689 70.9254H45.0946ZM45.0946 73.1714C45.1386 73.1714 45.1716 73.1585 45.1937 73.1328C45.2157 73.1071 45.2267 73.0759 45.2267 73.0392V71.3804C45.2267 71.3437 45.2157 71.3125 45.1937 71.2869C45.1716 71.2612 45.1386 71.2483 45.0946 71.2483H44.9625V73.1714H45.0946Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M46.0492 73.4943C46.0247 73.4943 46.0125 73.4821 46.0125 73.4576V70.9621C46.0125 70.9376 46.0247 70.9254 46.0492 70.9254H46.3061C46.3306 70.9254 46.3428 70.9376 46.3428 70.9621V73.4576C46.3428 73.4821 46.3306 73.4943 46.3061 73.4943H46.0492Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M47.6358 70.9254C47.6602 70.9254 47.6725 70.9376 47.6725 70.9621V71.219C47.6725 71.2434 47.6602 71.2557 47.6358 71.2557H47.3715V73.4576C47.3715 73.4821 47.3593 73.4943 47.3348 73.4943H47.0779C47.0535 73.4943 47.0412 73.4821 47.0412 73.4576V71.2557H46.777C46.7525 71.2557 46.7403 71.2434 46.7403 71.219V70.9621C46.7403 70.9376 46.7525 70.9254 46.777 70.9254H47.6358Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M48.1046 73.4943C48.0801 73.4943 48.0679 73.4821 48.0679 73.4576V70.9621C48.0679 70.9376 48.0801 70.9254 48.1046 70.9254H48.3615C48.386 70.9254 48.3982 70.9376 48.3982 70.9621V73.4576C48.3982 73.4821 48.386 73.4943 48.3615 73.4943H48.1046Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M48.9792 71.0208C49.0624 70.9327 49.1749 70.8887 49.3168 70.8887C49.4587 70.8887 49.5713 70.9327 49.6545 71.0208C49.7376 71.1089 49.7792 71.2165 49.7792 71.3437V73.0759C49.7792 73.2032 49.7376 73.3108 49.6545 73.3989C49.5713 73.487 49.4587 73.531 49.3168 73.531C49.1749 73.531 49.0624 73.487 48.9792 73.3989C48.896 73.3108 48.8544 73.2032 48.8544 73.0759V71.3437C48.8544 71.2165 48.896 71.1089 48.9792 71.0208ZM49.2177 73.1695C49.2398 73.1952 49.2728 73.2081 49.3168 73.2081C49.3609 73.2081 49.3939 73.1952 49.4159 73.1695C49.4379 73.1438 49.4489 73.1126 49.4489 73.0759V71.3437C49.4489 71.307 49.4379 71.2758 49.4159 71.2502C49.3939 71.2245 49.3609 71.2116 49.3168 71.2116C49.2728 71.2116 49.2398 71.2245 49.2177 71.2502C49.1957 71.2758 49.1847 71.307 49.1847 71.3437V73.0759C49.1847 73.1126 49.1957 73.1438 49.2177 73.1695Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M51.1599 70.9254C51.1844 70.9254 51.1966 70.9376 51.1966 70.9621V73.4576C51.1966 73.4821 51.1844 73.4943 51.1599 73.4943H50.903C50.8835 73.4943 50.8712 73.4845 50.8663 73.465L50.5654 72.1016V73.4576C50.5654 73.4821 50.5532 73.4943 50.5287 73.4943H50.2718C50.2473 73.4943 50.2351 73.4821 50.2351 73.4576V70.9621C50.2351 70.9376 50.2473 70.9254 50.2718 70.9254H50.536C50.5519 70.9254 50.5617 70.9327 50.5654 70.9474L50.8663 72.3475V70.9621C50.8663 70.9376 50.8786 70.9254 50.903 70.9254H51.1599Z"
                        fill="#FDFDFD"
                      />
                    </g>
                    <g filter="url(#filter5_i_804_133577)">
                      <path
                        d="M22.4953 70.9453C22.5198 70.9453 22.532 70.9575 22.532 70.982V73.4776C22.532 73.502 22.5198 73.5143 22.4953 73.5143H22.2384C22.2139 73.5143 22.2017 73.502 22.2017 73.4776V72.3289L21.9668 73.4849C21.9607 73.5045 21.9485 73.5143 21.9301 73.5143H21.8714C21.853 73.5143 21.8408 73.5045 21.8347 73.4849L21.5998 72.3289V73.4776C21.5998 73.502 21.5876 73.5143 21.5631 73.5143H21.3062C21.2818 73.5143 21.2695 73.502 21.2695 73.4776V70.982C21.2695 70.9575 21.2818 70.9453 21.3062 70.9453H21.5705C21.5876 70.9453 21.5974 70.9527 21.5998 70.9673L21.9008 72.6188L22.2017 70.9673C22.2041 70.9527 22.2139 70.9453 22.2311 70.9453H22.4953Z"
                        fill="#FDFDFD"
                      />
                    </g>
                    <g filter="url(#filter6_i_804_133577)">
                      <path
                        d="M37.964 70.9453C37.9885 70.9453 38.0007 70.9575 38.0007 70.982V73.4776C38.0007 73.502 37.9885 73.5143 37.964 73.5143H37.7071C37.6827 73.5143 37.6704 73.502 37.6704 73.4776V72.3289L37.4356 73.4849C37.4295 73.5045 37.4172 73.5143 37.3989 73.5143H37.3401C37.3218 73.5143 37.3096 73.5045 37.3034 73.4849L37.0686 72.3289V73.4776C37.0686 73.502 37.0563 73.5143 37.0319 73.5143H36.775C36.7505 73.5143 36.7383 73.502 36.7383 73.4776V70.982C36.7383 70.9575 36.7505 70.9453 36.775 70.9453H37.0392C37.0563 70.9453 37.0661 70.9527 37.0686 70.9673L37.3695 72.6188L37.6704 70.9673C37.6729 70.9527 37.6827 70.9453 37.6998 70.9453H37.964Z"
                        fill="#FDFDFD"
                      />
                    </g>
                    <g filter="url(#filter7_i_804_133577)">
                      <path
                        d="M21.2764 39.8367C21.3108 39.8367 21.328 39.8539 21.328 39.8883V43.3936C21.328 43.428 21.3108 43.4452 21.2764 43.4452H20.9156C20.8812 43.4452 20.864 43.428 20.864 43.3936V41.7801L20.5341 43.4039C20.5255 43.4314 20.5083 43.4452 20.4826 43.4452H20.4001C20.3743 43.4452 20.3571 43.4314 20.3485 43.4039L20.0186 41.7801V43.3936C20.0186 43.428 20.0014 43.4452 19.9671 43.4452H19.6062C19.5719 43.4452 19.5547 43.428 19.5547 43.3936V39.8883C19.5547 39.8539 19.5719 39.8367 19.6062 39.8367H19.9774C20.0014 39.8367 20.0152 39.847 20.0186 39.8676L20.4413 42.1874L20.864 39.8676C20.8675 39.847 20.8812 39.8367 20.9053 39.8367H21.2764Z"
                        fill="#111111"
                      />
                      <path
                        d="M22.8756 42.9915C22.91 42.9915 22.9271 43.0087 22.9271 43.0431V43.3936C22.9271 43.428 22.91 43.4452 22.8756 43.4452H21.7931C21.7587 43.4452 21.7415 43.428 21.7415 43.3936V39.8883C21.7415 39.8539 21.7587 39.8367 21.7931 39.8367H22.8447C22.879 39.8367 22.8962 39.8539 22.8962 39.8883V40.2388C22.8962 40.2732 22.879 40.2903 22.8447 40.2903H22.2054V41.3626H22.7519C22.7862 41.3626 22.8034 41.3797 22.8034 41.4141V41.7646C22.8034 41.799 22.7862 41.8162 22.7519 41.8162H22.2054V42.9915H22.8756Z"
                        fill="#111111"
                      />
                      <path
                        d="M24.5588 39.8367C24.5932 39.8367 24.6104 39.8539 24.6104 39.8883V43.3936C24.6104 43.428 24.5932 43.4452 24.5588 43.4452H24.198C24.1705 43.4452 24.1533 43.4314 24.1464 43.4039L23.7237 41.4889V43.3936C23.7237 43.428 23.7065 43.4452 23.6722 43.4452H23.3113C23.277 43.4452 23.2598 43.428 23.2598 43.3936V39.8883C23.2598 39.8539 23.277 39.8367 23.3113 39.8367H23.6825C23.7048 39.8367 23.7186 39.847 23.7237 39.8676L24.1464 41.8342V39.8883C24.1464 39.8539 24.1636 39.8367 24.198 39.8367H24.5588Z"
                        fill="#111111"
                      />
                      <path
                        d="M26.1784 39.8367C26.2128 39.8367 26.23 39.8539 26.23 39.8883V40.2491C26.23 40.2835 26.2128 40.3006 26.1784 40.3006H25.8073V43.3936C25.8073 43.428 25.7901 43.4452 25.7557 43.4452H25.3949C25.3605 43.4452 25.3433 43.428 25.3433 43.3936V40.3006H24.9722C24.9378 40.3006 24.9206 40.2835 24.9206 40.2491V39.8883C24.9206 39.8539 24.9378 39.8367 24.9722 39.8367H26.1784Z"
                        fill="#111111"
                      />
                      <path
                        d="M27.684 43.3833C27.6892 43.4245 27.672 43.4452 27.6325 43.4452H27.251C27.2201 43.4452 27.2029 43.428 27.1994 43.3936L27.153 42.909H26.8128L26.7664 43.3936C26.763 43.428 26.7458 43.4452 26.7149 43.4452H26.3334C26.2939 43.4452 26.2767 43.4245 26.2819 43.3833L26.7458 39.8779C26.751 39.8505 26.7681 39.8367 26.7974 39.8367H27.1685C27.1977 39.8367 27.2149 39.8505 27.2201 39.8779L27.684 43.3833ZM26.8566 42.4554H27.1092L26.9829 41.1306L26.8566 42.4554Z"
                        fill="#111111"
                      />
                      <path
                        d="M29.1018 42.9915C29.1361 42.9915 29.1533 43.0087 29.1533 43.0431V43.3936C29.1533 43.428 29.1361 43.4452 29.1018 43.4452H28.0192C27.9849 43.4452 27.9677 43.428 27.9677 43.3936V39.8883C27.9677 39.8539 27.9849 39.8367 28.0192 39.8367H28.3801C28.4144 39.8367 28.4316 39.8539 28.4316 39.8883V42.9915H29.1018Z"
                        fill="#111111"
                      />
                      <path
                        d="M31.1423 39.8367C31.3416 39.8367 31.4997 39.8986 31.6166 40.0223C31.7334 40.146 31.7918 40.2972 31.7918 40.4759V41.177C31.7918 41.3557 31.7334 41.5069 31.6166 41.6306C31.4997 41.7543 31.3416 41.8162 31.1423 41.8162H30.9567V43.3936C30.9567 43.428 30.9395 43.4452 30.9052 43.4452H30.5443C30.51 43.4452 30.4928 43.428 30.4928 43.3936V39.8883C30.4928 39.8539 30.51 39.8367 30.5443 39.8367H31.1423ZM31.1423 41.3626C31.2042 41.3626 31.2506 41.3445 31.2815 41.3084C31.3124 41.2724 31.3279 41.2285 31.3279 41.177V40.4759C31.3279 40.4244 31.3124 40.3805 31.2815 40.3445C31.2506 40.3084 31.2042 40.2903 31.1423 40.2903H30.9567V41.3626H31.1423Z"
                        fill="#111111"
                      />
                      <path
                        d="M33.2942 42.9915C33.3285 42.9915 33.3457 43.0087 33.3457 43.0431V43.3936C33.3457 43.428 33.3285 43.4452 33.2942 43.4452H32.2116C32.1773 43.4452 32.1601 43.428 32.1601 43.3936V39.8883C32.1601 39.8539 32.1773 39.8367 32.2116 39.8367H33.2632C33.2976 39.8367 33.3148 39.8539 33.3148 39.8883V40.2388C33.3148 40.2732 33.2976 40.2903 33.2632 40.2903H32.624V41.3626H33.1704C33.2048 41.3626 33.222 41.3797 33.222 41.4141V41.7646C33.222 41.799 33.2048 41.8162 33.1704 41.8162H32.624V42.9915H33.2942Z"
                        fill="#111111"
                      />
                      <path
                        d="M35.0702 43.373C35.0754 43.3936 35.0711 43.4108 35.0573 43.4245C35.0453 43.4383 35.029 43.4452 35.0083 43.4452H34.6578C34.632 43.4452 34.6148 43.4314 34.6063 43.4039L34.15 41.8162H34.1423V43.3936C34.1423 43.428 34.1251 43.4452 34.0908 43.4452H33.7299C33.6956 43.4452 33.6784 43.428 33.6784 43.3936V39.8883C33.6784 39.8539 33.6956 39.8367 33.7299 39.8367H34.3279C34.5272 39.8367 34.6853 39.8986 34.8021 40.0223C34.919 40.146 34.9774 40.2972 34.9774 40.4759V41.177C34.9774 41.3059 34.9448 41.4236 34.8795 41.5301C34.8159 41.6349 34.7257 41.7122 34.6088 41.7621L35.0702 43.373ZM34.1423 40.2903V41.3626H34.3279C34.3897 41.3626 34.4361 41.3445 34.4671 41.3084C34.498 41.2724 34.5135 41.2285 34.5135 41.177V40.4759C34.5135 40.4244 34.498 40.3805 34.4671 40.3445C34.4361 40.3084 34.3897 40.2903 34.3279 40.2903H34.1423Z"
                        fill="#111111"
                      />
                      <path
                        d="M36.4891 39.8367C36.5235 39.8367 36.5406 39.8539 36.5406 39.8883V40.2388C36.5406 40.2732 36.5235 40.2903 36.4891 40.2903H35.8499V41.3626H36.3963C36.4307 41.3626 36.4479 41.3797 36.4479 41.4141V41.7646C36.4479 41.799 36.4307 41.8162 36.3963 41.8162H35.8499V43.3936C35.8499 43.428 35.8327 43.4452 35.7983 43.4452H35.4375C35.4031 43.4452 35.3859 43.428 35.3859 43.3936V39.8883C35.3859 39.8539 35.4031 39.8367 35.4375 39.8367H36.4891Z"
                        fill="#111111"
                      />
                      <path
                        d="M37.0065 39.9707C37.1234 39.847 37.2814 39.7852 37.4808 39.7852C37.6801 39.7852 37.8382 39.847 37.955 39.9707C38.0719 40.0945 38.1303 40.2457 38.1303 40.4244V42.8575C38.1303 43.0362 38.0719 43.1874 37.955 43.3111C37.8382 43.4348 37.6801 43.4967 37.4808 43.4967C37.2814 43.4967 37.1234 43.4348 37.0065 43.3111C36.8897 43.1874 36.8312 43.0362 36.8312 42.8575V40.4244C36.8312 40.2457 36.8897 40.0945 37.0065 39.9707ZM37.3416 42.9889C37.3725 43.025 37.4189 43.0431 37.4808 43.0431C37.5426 43.0431 37.589 43.025 37.62 42.9889C37.6509 42.9529 37.6663 42.909 37.6663 42.8575V40.4244C37.6663 40.3728 37.6509 40.329 37.62 40.2929C37.589 40.2568 37.5426 40.2388 37.4808 40.2388C37.4189 40.2388 37.3725 40.2568 37.3416 40.2929C37.3107 40.329 37.2952 40.3728 37.2952 40.4244V42.8575C37.2952 42.909 37.3107 42.9529 37.3416 42.9889Z"
                        fill="#111111"
                      />
                      <path
                        d="M39.915 43.373C39.9202 43.3936 39.9159 43.4108 39.9021 43.4245C39.8901 43.4383 39.8738 43.4452 39.8532 43.4452H39.5026C39.4769 43.4452 39.4597 43.4314 39.4511 43.4039L38.9949 41.8162H38.9871V43.3936C38.9871 43.428 38.97 43.4452 38.9356 43.4452H38.5747C38.5404 43.4452 38.5232 43.428 38.5232 43.3936V39.8883C38.5232 39.8539 38.5404 39.8367 38.5747 39.8367H39.1727C39.372 39.8367 39.5301 39.8986 39.647 40.0223C39.7638 40.146 39.8222 40.2972 39.8222 40.4759V41.177C39.8222 41.3059 39.7896 41.4236 39.7243 41.5301C39.6607 41.6349 39.5705 41.7122 39.4537 41.7621L39.915 43.373ZM38.9871 40.2903V41.3626H39.1727C39.2346 41.3626 39.281 41.3445 39.3119 41.3084C39.3428 41.2724 39.3583 41.2285 39.3583 41.177V40.4759C39.3583 40.4244 39.3428 40.3805 39.3119 40.3445C39.281 40.3084 39.2346 40.2903 39.1727 40.2903H38.9871Z"
                        fill="#111111"
                      />
                      <path
                        d="M41.9525 39.8367C41.9869 39.8367 42.0041 39.8539 42.0041 39.8883V43.3936C42.0041 43.428 41.9869 43.4452 41.9525 43.4452H41.5917C41.5573 43.4452 41.5401 43.428 41.5401 43.3936V41.7801L41.2102 43.4039C41.2016 43.4314 41.1844 43.4452 41.1586 43.4452H41.0762C41.0504 43.4452 41.0332 43.4314 41.0246 43.4039L40.6947 41.7801V43.3936C40.6947 43.428 40.6775 43.4452 40.6432 43.4452H40.2823C40.2479 43.4452 40.2308 43.428 40.2308 43.3936V39.8883C40.2308 39.8539 40.2479 39.8367 40.2823 39.8367H40.6535C40.6775 39.8367 40.6913 39.847 40.6947 39.8676L41.1174 42.1874L41.5401 39.8676C41.5435 39.847 41.5573 39.8367 41.5813 39.8367H41.9525Z"
                        fill="#111111"
                      />
                      <path
                        d="M43.7166 43.3833C43.7218 43.4245 43.7046 43.4452 43.6651 43.4452H43.2836C43.2527 43.4452 43.2355 43.428 43.2321 43.3936L43.1857 42.909H42.8454L42.799 43.3936C42.7956 43.428 42.7784 43.4452 42.7475 43.4452H42.366C42.3265 43.4452 42.3093 43.4245 42.3145 43.3833L42.7784 39.8779C42.7836 39.8505 42.8008 39.8367 42.83 39.8367H43.2011C43.2303 39.8367 43.2475 39.8505 43.2527 39.8779L43.7166 43.3833ZM42.8892 42.4554H43.1418L43.0155 41.1306L42.8892 42.4554Z"
                        fill="#111111"
                      />
                      <path
                        d="M45.2993 39.8367C45.3337 39.8367 45.3509 39.8539 45.3509 39.8883V43.3936C45.3509 43.428 45.3337 43.4452 45.2993 43.4452H44.9385C44.911 43.4452 44.8938 43.4314 44.8869 43.4039L44.4642 41.4889V43.3936C44.4642 43.428 44.4471 43.4452 44.4127 43.4452H44.0518C44.0175 43.4452 44.0003 43.428 44.0003 43.3936V39.8883C44.0003 39.8539 44.0175 39.8367 44.0518 39.8367H44.423C44.4453 39.8367 44.4591 39.847 44.4642 39.8676L44.8869 41.8342V39.8883C44.8869 39.8539 44.9041 39.8367 44.9385 39.8367H45.2993Z"
                        fill="#111111"
                      />
                      <path
                        d="M46.6303 40.7852C46.5959 40.7852 46.5787 40.768 46.5787 40.7337V40.4244C46.5787 40.3728 46.5633 40.329 46.5323 40.2929C46.5014 40.2568 46.455 40.2388 46.3931 40.2388C46.3313 40.2388 46.2849 40.2568 46.254 40.2929C46.223 40.329 46.2076 40.3728 46.2076 40.4244V42.8575C46.2076 42.909 46.223 42.9529 46.254 42.9889C46.2849 43.025 46.3313 43.0431 46.3931 43.0431C46.455 43.0431 46.5014 43.025 46.5323 42.9889C46.5633 42.9529 46.5787 42.909 46.5787 42.8575V42.5482C46.5787 42.5138 46.5959 42.4966 46.6303 42.4966H46.9911C47.0255 42.4966 47.0427 42.5138 47.0427 42.5482V42.8575C47.0427 43.0362 46.9842 43.1874 46.8674 43.3111C46.7506 43.4348 46.5925 43.4967 46.3931 43.4967C46.1938 43.4967 46.0357 43.4348 45.9189 43.3111C45.802 43.1874 45.7436 43.0362 45.7436 42.8575V40.4244C45.7436 40.2457 45.802 40.0945 45.9189 39.9707C46.0357 39.847 46.1938 39.7852 46.3931 39.7852C46.5925 39.7852 46.7506 39.847 46.8674 39.9707C46.9842 40.0945 47.0427 40.2457 47.0427 40.4244V40.7337C47.0427 40.768 47.0255 40.7852 46.9911 40.7852H46.6303Z"
                        fill="#111111"
                      />
                      <path
                        d="M48.5697 42.9915C48.604 42.9915 48.6212 43.0087 48.6212 43.0431V43.3936C48.6212 43.428 48.604 43.4452 48.5697 43.4452H47.4871C47.4528 43.4452 47.4356 43.428 47.4356 43.3936V39.8883C47.4356 39.8539 47.4528 39.8367 47.4871 39.8367H48.5387C48.5731 39.8367 48.5903 39.8539 48.5903 39.8883V40.2388C48.5903 40.2732 48.5731 40.2903 48.5387 40.2903H47.8995V41.3626H48.4459C48.4803 41.3626 48.4975 41.3797 48.4975 41.4141V41.7646C48.4975 41.799 48.4803 41.8162 48.4459 41.8162H47.8995V42.9915H48.5697Z"
                        fill="#111111"
                      />
                    </g>
                    <path
                      d="M21.2764 39.8367C21.3108 39.8367 21.328 39.8539 21.328 39.8883V43.3936C21.328 43.428 21.3108 43.4452 21.2764 43.4452H20.9156C20.8812 43.4452 20.864 43.428 20.864 43.3936V41.7801L20.5341 43.4039C20.5255 43.4314 20.5083 43.4452 20.4826 43.4452H20.4001C20.3743 43.4452 20.3571 43.4314 20.3485 43.4039L20.0186 41.7801V43.3936C20.0186 43.428 20.0014 43.4452 19.9671 43.4452H19.6062C19.5719 43.4452 19.5547 43.428 19.5547 43.3936V39.8883C19.5547 39.8539 19.5719 39.8367 19.6062 39.8367H19.9774C20.0014 39.8367 20.0152 39.847 20.0186 39.8676L20.4413 42.1874L20.864 39.8676C20.8675 39.847 20.8812 39.8367 20.9053 39.8367H21.2764Z"
                      stroke="#111111"
                      stroke-width="0.0169381"
                    />
                    <path
                      d="M22.8756 42.9915C22.91 42.9915 22.9271 43.0087 22.9271 43.0431V43.3936C22.9271 43.428 22.91 43.4452 22.8756 43.4452H21.7931C21.7587 43.4452 21.7415 43.428 21.7415 43.3936V39.8883C21.7415 39.8539 21.7587 39.8367 21.7931 39.8367H22.8447C22.879 39.8367 22.8962 39.8539 22.8962 39.8883V40.2388C22.8962 40.2732 22.879 40.2903 22.8447 40.2903H22.2054V41.3626H22.7519C22.7862 41.3626 22.8034 41.3797 22.8034 41.4141V41.7646C22.8034 41.799 22.7862 41.8162 22.7519 41.8162H22.2054V42.9915H22.8756Z"
                      stroke="#111111"
                      stroke-width="0.0169381"
                    />
                    <path
                      d="M24.5588 39.8367C24.5932 39.8367 24.6104 39.8539 24.6104 39.8883V43.3936C24.6104 43.428 24.5932 43.4452 24.5588 43.4452H24.198C24.1705 43.4452 24.1533 43.4314 24.1464 43.4039L23.7237 41.4889V43.3936C23.7237 43.428 23.7065 43.4452 23.6722 43.4452H23.3113C23.277 43.4452 23.2598 43.428 23.2598 43.3936V39.8883C23.2598 39.8539 23.277 39.8367 23.3113 39.8367H23.6825C23.7048 39.8367 23.7186 39.847 23.7237 39.8676L24.1464 41.8342V39.8883C24.1464 39.8539 24.1636 39.8367 24.198 39.8367H24.5588Z"
                      stroke="#111111"
                      stroke-width="0.0169381"
                    />
                    <path
                      d="M26.1784 39.8367C26.2128 39.8367 26.23 39.8539 26.23 39.8883V40.2491C26.23 40.2835 26.2128 40.3006 26.1784 40.3006H25.8073V43.3936C25.8073 43.428 25.7901 43.4452 25.7557 43.4452H25.3949C25.3605 43.4452 25.3433 43.428 25.3433 43.3936V40.3006H24.9722C24.9378 40.3006 24.9206 40.2835 24.9206 40.2491V39.8883C24.9206 39.8539 24.9378 39.8367 24.9722 39.8367H26.1784Z"
                      stroke="#111111"
                      stroke-width="0.0169381"
                    />
                    <path
                      d="M27.684 43.3833C27.6892 43.4245 27.672 43.4452 27.6325 43.4452H27.251C27.2201 43.4452 27.2029 43.428 27.1994 43.3936L27.153 42.909H26.8128L26.7664 43.3936C26.763 43.428 26.7458 43.4452 26.7149 43.4452H26.3334C26.2939 43.4452 26.2767 43.4245 26.2819 43.3833L26.7458 39.8779C26.751 39.8505 26.7681 39.8367 26.7974 39.8367H27.1685C27.1977 39.8367 27.2149 39.8505 27.2201 39.8779L27.684 43.3833ZM26.8566 42.4554H27.1092L26.9829 41.1306L26.8566 42.4554Z"
                      stroke="#111111"
                      stroke-width="0.0169381"
                    />
                    <path
                      d="M29.1018 42.9915C29.1361 42.9915 29.1533 43.0087 29.1533 43.0431V43.3936C29.1533 43.428 29.1361 43.4452 29.1018 43.4452H28.0192C27.9849 43.4452 27.9677 43.428 27.9677 43.3936V39.8883C27.9677 39.8539 27.9849 39.8367 28.0192 39.8367H28.3801C28.4144 39.8367 28.4316 39.8539 28.4316 39.8883V42.9915H29.1018Z"
                      stroke="#111111"
                      stroke-width="0.0169381"
                    />
                    <path
                      d="M31.1423 39.8367C31.3416 39.8367 31.4997 39.8986 31.6166 40.0223C31.7334 40.146 31.7918 40.2972 31.7918 40.4759V41.177C31.7918 41.3557 31.7334 41.5069 31.6166 41.6306C31.4997 41.7543 31.3416 41.8162 31.1423 41.8162H30.9567V43.3936C30.9567 43.428 30.9395 43.4452 30.9052 43.4452H30.5443C30.51 43.4452 30.4928 43.428 30.4928 43.3936V39.8883C30.4928 39.8539 30.51 39.8367 30.5443 39.8367H31.1423ZM31.1423 41.3626C31.2042 41.3626 31.2506 41.3445 31.2815 41.3084C31.3124 41.2724 31.3279 41.2285 31.3279 41.177V40.4759C31.3279 40.4244 31.3124 40.3805 31.2815 40.3445C31.2506 40.3084 31.2042 40.2903 31.1423 40.2903H30.9567V41.3626H31.1423Z"
                      stroke="#111111"
                      stroke-width="0.0169381"
                    />
                    <path
                      d="M33.2942 42.9915C33.3285 42.9915 33.3457 43.0087 33.3457 43.0431V43.3936C33.3457 43.428 33.3285 43.4452 33.2942 43.4452H32.2116C32.1773 43.4452 32.1601 43.428 32.1601 43.3936V39.8883C32.1601 39.8539 32.1773 39.8367 32.2116 39.8367H33.2632C33.2976 39.8367 33.3148 39.8539 33.3148 39.8883V40.2388C33.3148 40.2732 33.2976 40.2903 33.2632 40.2903H32.624V41.3626H33.1704C33.2048 41.3626 33.222 41.3797 33.222 41.4141V41.7646C33.222 41.799 33.2048 41.8162 33.1704 41.8162H32.624V42.9915H33.2942Z"
                      stroke="#111111"
                      stroke-width="0.0169381"
                    />
                    <path
                      d="M35.0702 43.373C35.0754 43.3936 35.0711 43.4108 35.0573 43.4245C35.0453 43.4383 35.029 43.4452 35.0083 43.4452H34.6578C34.632 43.4452 34.6148 43.4314 34.6063 43.4039L34.15 41.8162H34.1423V43.3936C34.1423 43.428 34.1251 43.4452 34.0908 43.4452H33.7299C33.6956 43.4452 33.6784 43.428 33.6784 43.3936V39.8883C33.6784 39.8539 33.6956 39.8367 33.7299 39.8367H34.3279C34.5272 39.8367 34.6853 39.8986 34.8021 40.0223C34.919 40.146 34.9774 40.2972 34.9774 40.4759V41.177C34.9774 41.3059 34.9448 41.4236 34.8795 41.5301C34.8159 41.6349 34.7257 41.7122 34.6088 41.7621L35.0702 43.373ZM34.1423 40.2903V41.3626H34.3279C34.3897 41.3626 34.4361 41.3445 34.4671 41.3084C34.498 41.2724 34.5135 41.2285 34.5135 41.177V40.4759C34.5135 40.4244 34.498 40.3805 34.4671 40.3445C34.4361 40.3084 34.3897 40.2903 34.3279 40.2903H34.1423Z"
                      stroke="#111111"
                      stroke-width="0.0169381"
                    />
                    <path
                      d="M36.4891 39.8367C36.5235 39.8367 36.5406 39.8539 36.5406 39.8883V40.2388C36.5406 40.2732 36.5235 40.2903 36.4891 40.2903H35.8499V41.3626H36.3963C36.4307 41.3626 36.4479 41.3797 36.4479 41.4141V41.7646C36.4479 41.799 36.4307 41.8162 36.3963 41.8162H35.8499V43.3936C35.8499 43.428 35.8327 43.4452 35.7983 43.4452H35.4375C35.4031 43.4452 35.3859 43.428 35.3859 43.3936V39.8883C35.3859 39.8539 35.4031 39.8367 35.4375 39.8367H36.4891Z"
                      stroke="#111111"
                      stroke-width="0.0169381"
                    />
                    <path
                      d="M37.0065 39.9707C37.1234 39.847 37.2814 39.7852 37.4808 39.7852C37.6801 39.7852 37.8382 39.847 37.955 39.9707C38.0719 40.0945 38.1303 40.2457 38.1303 40.4244V42.8575C38.1303 43.0362 38.0719 43.1874 37.955 43.3111C37.8382 43.4348 37.6801 43.4967 37.4808 43.4967C37.2814 43.4967 37.1234 43.4348 37.0065 43.3111C36.8897 43.1874 36.8312 43.0362 36.8312 42.8575V40.4244C36.8312 40.2457 36.8897 40.0945 37.0065 39.9707ZM37.3416 42.9889C37.3725 43.025 37.4189 43.0431 37.4808 43.0431C37.5426 43.0431 37.589 43.025 37.62 42.9889C37.6509 42.9529 37.6663 42.909 37.6663 42.8575V40.4244C37.6663 40.3728 37.6509 40.329 37.62 40.2929C37.589 40.2568 37.5426 40.2388 37.4808 40.2388C37.4189 40.2388 37.3725 40.2568 37.3416 40.2929C37.3107 40.329 37.2952 40.3728 37.2952 40.4244V42.8575C37.2952 42.909 37.3107 42.9529 37.3416 42.9889Z"
                      stroke="#111111"
                      stroke-width="0.0169381"
                    />
                    <path
                      d="M39.915 43.373C39.9202 43.3936 39.9159 43.4108 39.9021 43.4245C39.8901 43.4383 39.8738 43.4452 39.8532 43.4452H39.5026C39.4769 43.4452 39.4597 43.4314 39.4511 43.4039L38.9949 41.8162H38.9871V43.3936C38.9871 43.428 38.97 43.4452 38.9356 43.4452H38.5747C38.5404 43.4452 38.5232 43.428 38.5232 43.3936V39.8883C38.5232 39.8539 38.5404 39.8367 38.5747 39.8367H39.1727C39.372 39.8367 39.5301 39.8986 39.647 40.0223C39.7638 40.146 39.8222 40.2972 39.8222 40.4759V41.177C39.8222 41.3059 39.7896 41.4236 39.7243 41.5301C39.6607 41.6349 39.5705 41.7122 39.4537 41.7621L39.915 43.373ZM38.9871 40.2903V41.3626H39.1727C39.2346 41.3626 39.281 41.3445 39.3119 41.3084C39.3428 41.2724 39.3583 41.2285 39.3583 41.177V40.4759C39.3583 40.4244 39.3428 40.3805 39.3119 40.3445C39.281 40.3084 39.2346 40.2903 39.1727 40.2903H38.9871Z"
                      stroke="#111111"
                      stroke-width="0.0169381"
                    />
                    <path
                      d="M41.9525 39.8367C41.9869 39.8367 42.0041 39.8539 42.0041 39.8883V43.3936C42.0041 43.428 41.9869 43.4452 41.9525 43.4452H41.5917C41.5573 43.4452 41.5401 43.428 41.5401 43.3936V41.7801L41.2102 43.4039C41.2016 43.4314 41.1844 43.4452 41.1586 43.4452H41.0762C41.0504 43.4452 41.0332 43.4314 41.0246 43.4039L40.6947 41.7801V43.3936C40.6947 43.428 40.6775 43.4452 40.6432 43.4452H40.2823C40.2479 43.4452 40.2308 43.428 40.2308 43.3936V39.8883C40.2308 39.8539 40.2479 39.8367 40.2823 39.8367H40.6535C40.6775 39.8367 40.6913 39.847 40.6947 39.8676L41.1174 42.1874L41.5401 39.8676C41.5435 39.847 41.5573 39.8367 41.5813 39.8367H41.9525Z"
                      stroke="#111111"
                      stroke-width="0.0169381"
                    />
                    <path
                      d="M43.7166 43.3833C43.7218 43.4245 43.7046 43.4452 43.6651 43.4452H43.2836C43.2527 43.4452 43.2355 43.428 43.2321 43.3936L43.1857 42.909H42.8454L42.799 43.3936C42.7956 43.428 42.7784 43.4452 42.7475 43.4452H42.366C42.3265 43.4452 42.3093 43.4245 42.3145 43.3833L42.7784 39.8779C42.7836 39.8505 42.8008 39.8367 42.83 39.8367H43.2011C43.2303 39.8367 43.2475 39.8505 43.2527 39.8779L43.7166 43.3833ZM42.8892 42.4554H43.1418L43.0155 41.1306L42.8892 42.4554Z"
                      stroke="#111111"
                      stroke-width="0.0169381"
                    />
                    <path
                      d="M45.2993 39.8367C45.3337 39.8367 45.3509 39.8539 45.3509 39.8883V43.3936C45.3509 43.428 45.3337 43.4452 45.2993 43.4452H44.9385C44.911 43.4452 44.8938 43.4314 44.8869 43.4039L44.4642 41.4889V43.3936C44.4642 43.428 44.4471 43.4452 44.4127 43.4452H44.0518C44.0175 43.4452 44.0003 43.428 44.0003 43.3936V39.8883C44.0003 39.8539 44.0175 39.8367 44.0518 39.8367H44.423C44.4453 39.8367 44.4591 39.847 44.4642 39.8676L44.8869 41.8342V39.8883C44.8869 39.8539 44.9041 39.8367 44.9385 39.8367H45.2993Z"
                      stroke="#111111"
                      stroke-width="0.0169381"
                    />
                    <path
                      d="M46.6303 40.7852C46.5959 40.7852 46.5787 40.768 46.5787 40.7337V40.4244C46.5787 40.3728 46.5633 40.329 46.5323 40.2929C46.5014 40.2568 46.455 40.2388 46.3931 40.2388C46.3313 40.2388 46.2849 40.2568 46.254 40.2929C46.223 40.329 46.2076 40.3728 46.2076 40.4244V42.8575C46.2076 42.909 46.223 42.9529 46.254 42.9889C46.2849 43.025 46.3313 43.0431 46.3931 43.0431C46.455 43.0431 46.5014 43.025 46.5323 42.9889C46.5633 42.9529 46.5787 42.909 46.5787 42.8575V42.5482C46.5787 42.5138 46.5959 42.4966 46.6303 42.4966H46.9911C47.0255 42.4966 47.0427 42.5138 47.0427 42.5482V42.8575C47.0427 43.0362 46.9842 43.1874 46.8674 43.3111C46.7506 43.4348 46.5925 43.4967 46.3931 43.4967C46.1938 43.4967 46.0357 43.4348 45.9189 43.3111C45.802 43.1874 45.7436 43.0362 45.7436 42.8575V40.4244C45.7436 40.2457 45.802 40.0945 45.9189 39.9707C46.0357 39.847 46.1938 39.7852 46.3931 39.7852C46.5925 39.7852 46.7506 39.847 46.8674 39.9707C46.9842 40.0945 47.0427 40.2457 47.0427 40.4244V40.7337C47.0427 40.768 47.0255 40.7852 46.9911 40.7852H46.6303Z"
                      stroke="#111111"
                      stroke-width="0.0169381"
                    />
                    <path
                      d="M48.5697 42.9915C48.604 42.9915 48.6212 43.0087 48.6212 43.0431V43.3936C48.6212 43.428 48.604 43.4452 48.5697 43.4452H47.4871C47.4528 43.4452 47.4356 43.428 47.4356 43.3936V39.8883C47.4356 39.8539 47.4528 39.8367 47.4871 39.8367H48.5387C48.5731 39.8367 48.5903 39.8539 48.5903 39.8883V40.2388C48.5903 40.2732 48.5731 40.2903 48.5387 40.2903H47.8995V41.3626H48.4459C48.4803 41.3626 48.4975 41.3797 48.4975 41.4141V41.7646C48.4975 41.799 48.4803 41.8162 48.4459 41.8162H47.8995V42.9915H48.5697Z"
                      stroke="#111111"
                      stroke-width="0.0169381"
                    />
                    <path
                      d="M21.6919 77.719C21.7221 77.719 21.7371 77.7341 21.7371 77.7642V78.0803C21.7371 78.1105 21.7221 78.1255 21.6919 78.1255H21.3667V80.8356C21.3667 80.8657 21.3517 80.8808 21.3216 80.8808H21.0054C20.9753 80.8808 20.9602 80.8657 20.9602 80.8356V78.1255H20.635C20.6049 78.1255 20.5898 78.1105 20.5898 78.0803V77.7642C20.5898 77.7341 20.6049 77.719 20.635 77.719H21.6919Z"
                      fill="#111111"
                    />
                    <path
                      d="M22.3381 77.8364C22.4405 77.728 22.579 77.6738 22.7537 77.6738C22.9283 77.6738 23.0669 77.728 23.1692 77.8364C23.2716 77.9448 23.3228 78.0773 23.3228 78.2339V80.3659C23.3228 80.5224 23.2716 80.6549 23.1692 80.7633C23.0669 80.8717 22.9283 80.9259 22.7537 80.9259C22.579 80.9259 22.4405 80.8717 22.3381 80.7633C22.2358 80.6549 22.1846 80.5224 22.1846 80.3659V78.2339C22.1846 78.0773 22.2358 77.9448 22.3381 77.8364ZM22.6317 80.481C22.6588 80.5127 22.6995 80.5285 22.7537 80.5285C22.8079 80.5285 22.8485 80.5127 22.8756 80.481C22.9027 80.4494 22.9163 80.411 22.9163 80.3659V78.2339C22.9163 78.1887 22.9027 78.1504 22.8756 78.1187C22.8485 78.0871 22.8079 78.0713 22.7537 78.0713C22.6995 78.0713 22.6588 78.0871 22.6317 78.1187C22.6046 78.1504 22.5911 78.1887 22.5911 78.2339V80.3659C22.5911 80.411 22.6046 80.4494 22.6317 80.481Z"
                      fill="#111111"
                    />
                    <path
                      d="M25.3925 77.719C25.4226 77.719 25.4377 77.7341 25.4377 77.7642V80.8356C25.4377 80.8657 25.4226 80.8808 25.3925 80.8808H25.0763C25.0462 80.8808 25.0312 80.8657 25.0312 80.8356V79.4218L24.7421 80.8446C24.7346 80.8687 24.7195 80.8808 24.6969 80.8808H24.6246C24.6021 80.8808 24.587 80.8687 24.5795 80.8446L24.2904 79.4218V80.8356C24.2904 80.8657 24.2753 80.8808 24.2452 80.8808H23.9291C23.8989 80.8808 23.8839 80.8657 23.8839 80.8356V77.7642C23.8839 77.7341 23.8989 77.719 23.9291 77.719H24.2543C24.2753 77.719 24.2874 77.728 24.2904 77.7461L24.6608 79.7787L25.0312 77.7461C25.0342 77.728 25.0462 77.719 25.0673 77.719H25.3925Z"
                      fill="#111111"
                    />
                    <path
                      d="M28.2752 77.719C28.3053 77.719 28.3204 77.7341 28.3204 77.7642V80.8356C28.3204 80.8657 28.3053 80.8808 28.2752 80.8808H27.9591C27.9289 80.8808 27.9139 80.8657 27.9139 80.8356V79.4535H27.5435V80.8356C27.5435 80.8657 27.5284 80.8808 27.4983 80.8808H27.1822C27.152 80.8808 27.137 80.8657 27.137 80.8356V77.7642C27.137 77.7341 27.152 77.719 27.1822 77.719H27.4983C27.5284 77.719 27.5435 77.7341 27.5435 77.7642V79.056H27.9139V77.7642C27.9139 77.7341 27.9289 77.719 27.9591 77.719H28.2752Z"
                      fill="#111111"
                    />
                    <path
                      d="M29.9925 77.719C30.0226 77.719 30.0376 77.7341 30.0376 77.7642V80.3659C30.0376 80.5224 29.9864 80.6549 29.8841 80.7633C29.7817 80.8717 29.6432 80.9259 29.4685 80.9259C29.2939 80.9259 29.1554 80.8717 29.053 80.7633C28.9506 80.6549 28.8994 80.5224 28.8994 80.3659V77.7642C28.8994 77.7341 28.9145 77.719 28.9446 77.719H29.2607C29.2909 77.719 29.3059 77.7341 29.3059 77.7642V80.3659C29.3059 80.411 29.3195 80.4494 29.3466 80.481C29.3737 80.5127 29.4143 80.5285 29.4685 80.5285C29.5227 80.5285 29.5634 80.5127 29.5905 80.481C29.6176 80.4494 29.6311 80.411 29.6311 80.3659V77.7642C29.6311 77.7341 29.6462 77.719 29.6763 77.719H29.9925Z"
                      fill="#111111"
                    />
                    <path
                      d="M31.7542 77.719C31.7843 77.719 31.7993 77.7341 31.7993 77.7642V80.8356C31.7993 80.8657 31.7843 80.8808 31.7542 80.8808H31.438C31.4139 80.8808 31.3989 80.8687 31.3928 80.8446L31.0224 79.1666V80.8356C31.0224 80.8657 31.0074 80.8808 30.9773 80.8808H30.6611C30.631 80.8808 30.6159 80.8657 30.6159 80.8356V77.7642C30.6159 77.7341 30.631 77.719 30.6611 77.719H30.9863C31.0059 77.719 31.0179 77.728 31.0224 77.7461L31.3928 79.4693V77.7642C31.3928 77.7341 31.4079 77.719 31.438 77.719H31.7542Z"
                      fill="#111111"
                    />
                    <path
                      d="M33.101 79.1373C33.1823 79.2291 33.2388 79.2931 33.2704 79.3292C33.302 79.3654 33.3374 79.4098 33.3766 79.4625C33.4172 79.5152 33.4421 79.5491 33.4511 79.5641C33.4601 79.5777 33.4699 79.6033 33.4805 79.6409C33.4925 79.677 33.4985 79.7049 33.4985 79.7245C33.4985 79.7425 33.4985 79.7757 33.4985 79.8238V80.3659C33.4985 80.5224 33.4473 80.6549 33.3449 80.7633C33.2426 80.8717 33.104 80.9259 32.9294 80.9259C32.7547 80.9259 32.6162 80.8717 32.5138 80.7633C32.4115 80.6549 32.3603 80.5224 32.3603 80.3659V80.0948C32.3603 80.0647 32.3753 80.0497 32.4054 80.0497H32.7216C32.7517 80.0497 32.7668 80.0647 32.7668 80.0948V80.3659C32.7668 80.411 32.7803 80.4494 32.8074 80.481C32.8345 80.5127 32.8752 80.5285 32.9294 80.5285C32.9836 80.5285 33.0243 80.5127 33.0514 80.481C33.0785 80.4494 33.092 80.411 33.092 80.3659V79.869C33.092 79.8208 33.0867 79.7832 33.0762 79.7561C33.0672 79.7275 33.0393 79.6831 32.9926 79.6228C32.946 79.5626 32.8647 79.47 32.7487 79.3451C32.562 79.1448 32.4506 79.0161 32.4145 78.9589C32.3783 78.9001 32.3603 78.8121 32.3603 78.6946V78.2339C32.3603 78.0773 32.41 77.9448 32.5093 77.8364C32.6102 77.728 32.7472 77.6738 32.9204 77.6738C33.0935 77.6738 33.2298 77.728 33.3291 77.8364C33.43 77.9448 33.4805 78.0773 33.4805 78.2339V78.5049C33.4805 78.535 33.4654 78.5501 33.4353 78.5501H33.1191C33.089 78.5501 33.0739 78.535 33.0739 78.5049V78.2339C33.0739 78.1872 33.0619 78.1488 33.0378 78.1187C33.0137 78.0871 32.9746 78.0713 32.9204 78.0713C32.8662 78.0713 32.827 78.0871 32.8029 78.1187C32.7788 78.1488 32.7668 78.1872 32.7668 78.2339V78.6224C32.7668 78.6434 32.7668 78.6585 32.7668 78.6675C32.7683 78.6766 32.7691 78.6879 32.7691 78.7014C32.7691 78.715 32.7713 78.7262 32.7758 78.7353C32.7803 78.7443 32.7841 78.7541 32.7871 78.7646C32.7901 78.7752 32.7969 78.7872 32.8074 78.8008C32.8195 78.8128 32.8293 78.8256 32.8368 78.8392C32.8458 78.8512 32.8609 78.8685 32.882 78.8911C32.9031 78.9137 32.9211 78.9348 32.9362 78.9543C32.9527 78.9724 32.9776 78.9995 33.0107 79.0357C33.0438 79.0718 33.0739 79.1057 33.101 79.1373Z"
                      fill="#111111"
                    />
                    <path
                      d="M35.1767 80.8266C35.1812 80.8627 35.1661 80.8808 35.1315 80.8808H34.7972C34.7701 80.8808 34.7551 80.8657 34.7521 80.8356L34.7114 80.411H34.4133L34.3727 80.8356C34.3697 80.8657 34.3546 80.8808 34.3275 80.8808H33.9933C33.9586 80.8808 33.9436 80.8627 33.9481 80.8266L34.3546 77.7551C34.3591 77.731 34.3742 77.719 34.3998 77.719H34.725C34.7506 77.719 34.7656 77.731 34.7701 77.7551L35.1767 80.8266ZM34.4517 80.0135H34.673L34.5624 78.8527L34.4517 80.0135Z"
                      fill="#111111"
                    />
                    <path
                      d="M36.8616 80.8175C36.8661 80.8326 36.8638 80.8469 36.8548 80.8605C36.8458 80.874 36.833 80.8808 36.8164 80.8808H36.5002C36.4776 80.8808 36.4626 80.8687 36.4551 80.8446L36.0486 79.4264V80.8356C36.0486 80.8657 36.0335 80.8808 36.0034 80.8808H35.6872C35.6571 80.8808 35.642 80.8657 35.642 80.8356V77.7642C35.642 77.7341 35.6571 77.719 35.6872 77.719H36.0034C36.0335 77.719 36.0486 77.7341 36.0486 77.7642V79.0153L36.4099 77.7551C36.4174 77.731 36.4325 77.719 36.4551 77.719H36.7712C36.7878 77.719 36.8006 77.7258 36.8096 77.7393C36.8187 77.7529 36.8209 77.7672 36.8164 77.7822L36.4054 79.2208L36.8616 80.8175Z"
                      fill="#111111"
                    />
                    <path
                      d="M38.3523 80.4833C38.3824 80.4833 38.3974 80.4984 38.3974 80.5285V80.8356C38.3974 80.8657 38.3824 80.8808 38.3523 80.8808H37.4037C37.3736 80.8808 37.3586 80.8657 37.3586 80.8356V77.7642C37.3586 77.7341 37.3736 77.719 37.4037 77.719H38.3252C38.3553 77.719 38.3703 77.7341 38.3703 77.7642V78.0713C38.3703 78.1014 38.3553 78.1165 38.3252 78.1165H37.7651V79.056H38.2439C38.274 79.056 38.289 79.071 38.289 79.1011V79.4083C38.289 79.4384 38.274 79.4535 38.2439 79.4535H37.7651V80.4833H38.3523Z"
                      fill="#111111"
                    />
                    <path
                      d="M40.1253 80.8175C40.1298 80.8356 40.126 80.8507 40.114 80.8627C40.1034 80.8748 40.0891 80.8808 40.0711 80.8808H39.7639C39.7413 80.8808 39.7263 80.8687 39.7188 80.8446L39.319 79.4535H39.3122V80.8356C39.3122 80.8657 39.2972 80.8808 39.2671 80.8808H38.9509C38.9208 80.8808 38.9057 80.8657 38.9057 80.8356V77.7642C38.9057 77.7341 38.9208 77.719 38.9509 77.719H39.4748C39.6495 77.719 39.788 77.7732 39.8904 77.8816C39.9928 77.99 40.044 78.1225 40.044 78.2791V78.8934C40.044 79.0063 40.0154 79.1094 39.9582 79.2028C39.9024 79.2946 39.8234 79.3624 39.721 79.406L40.1253 80.8175ZM39.3122 78.1165V79.056H39.4748C39.5291 79.056 39.5697 79.0402 39.5968 79.0086C39.6239 78.9769 39.6375 78.9385 39.6375 78.8934V78.2791C39.6375 78.2339 39.6239 78.1955 39.5968 78.1639C39.5697 78.1323 39.5291 78.1165 39.4748 78.1165H39.3122Z"
                      fill="#111111"
                    />
                    <path
                      d="M40.6097 81.2963C40.5811 81.2963 40.5691 81.2813 40.5736 81.2512L40.7 80.5194C40.7106 80.4893 40.7286 80.4743 40.7542 80.4743H41.0795C41.093 80.4743 41.1035 80.4788 41.1111 80.4878C41.1186 80.4953 41.1201 80.5059 41.1156 80.5194L40.9168 81.2512C40.9063 81.2813 40.8882 81.2963 40.8626 81.2963H40.6097Z"
                      fill="#111111"
                    />
                    <path
                      d="M43.347 77.719C43.5217 77.719 43.6602 77.7732 43.7626 77.8816C43.865 77.99 43.9162 78.1225 43.9162 78.2791V78.8934C43.9162 79.05 43.865 79.1824 43.7626 79.2909C43.6602 79.3993 43.5217 79.4535 43.347 79.4535H43.1844V80.8356C43.1844 80.8657 43.1694 80.8808 43.1393 80.8808H42.8231C42.793 80.8808 42.7779 80.8657 42.7779 80.8356V77.7642C42.7779 77.7341 42.793 77.719 42.8231 77.719H43.347ZM43.347 79.056C43.4012 79.056 43.4419 79.0402 43.469 79.0086C43.4961 78.9769 43.5096 78.9385 43.5096 78.8934V78.2791C43.5096 78.2339 43.4961 78.1955 43.469 78.1639C43.4419 78.1323 43.4012 78.1165 43.347 78.1165H43.1844V79.056H43.347Z"
                      fill="#111111"
                    />
                    <path
                      d="M46.7872 77.719C46.9618 77.719 47.1003 77.7732 47.2027 77.8816C47.3051 77.99 47.3563 78.1225 47.3563 78.2791V80.3207C47.3563 80.4773 47.3051 80.6098 47.2027 80.7182C47.1003 80.8266 46.9618 80.8808 46.7872 80.8808H46.2632C46.2331 80.8808 46.2181 80.8657 46.2181 80.8356V77.7642C46.2181 77.7341 46.2331 77.719 46.2632 77.719H46.7872ZM46.7872 80.4833C46.8414 80.4833 46.882 80.4675 46.9091 80.4359C46.9362 80.4043 46.9498 80.3659 46.9498 80.3207V78.2791C46.9498 78.2339 46.9362 78.1955 46.9091 78.1639C46.882 78.1323 46.8414 78.1165 46.7872 78.1165H46.6246V80.4833H46.7872Z"
                      fill="#111111"
                    />
                    <path
                      d="M45.4983 78.2266C45.5236 78.2266 45.5362 78.2392 45.5362 78.2645V80.8423C45.5362 80.8676 45.5236 80.8802 45.4983 80.8802H45.2329C45.2076 80.8802 45.195 80.8676 45.195 80.8423V79.6823H44.8842V80.8423C44.8842 80.8676 44.8715 80.8802 44.8462 80.8802H44.5809C44.5556 80.8802 44.543 80.8676 44.543 80.8423V78.2645C44.543 78.2392 44.5556 78.2266 44.5809 78.2266H44.8462C44.8715 78.2266 44.8842 78.2392 44.8842 78.2645V79.3487H45.195V78.2645C45.195 78.2392 45.2076 78.2266 45.2329 78.2266H45.4983Z"
                      fill="#111111"
                    />
                    <circle
                      opacity="0.06"
                      cx="34.0806"
                      cy="55.5826"
                      r="5.63742"
                      stroke="#1C1C1C"
                      stroke-width="2.45668"
                    />
                    <circle
                      opacity="0.15"
                      cx="34.0566"
                      cy="55.5586"
                      r="8.2825"
                      stroke="#1C1C1C"
                      stroke-width="2.55603"
                    />
                    <circle
                      opacity="0.06"
                      cx="34.0563"
                      cy="55.5583"
                      r="10.3307"
                      stroke="#1C1C1C"
                      stroke-width="1.27146"
                    />
                    <circle
                      opacity="0.15"
                      cx="34.0792"
                      cy="55.5831"
                      r="13.7784"
                      stroke="#1C1C1C"
                      stroke-width="0.140596"
                      stroke-dasharray="0.37 0.37"
                    />
                    <circle
                      opacity="0.15"
                      cx="34.0551"
                      cy="55.559"
                      r="16.6372"
                      stroke="#1C1C1C"
                      stroke-width="0.0937306"
                      stroke-dasharray="0.19 0.19"
                    />
                    <circle
                      cx="34.0812"
                      cy="55.5831"
                      r="4.00698"
                      stroke="#CB4A22"
                      stroke-width="0.0937306"
                      stroke-dasharray="0.09 0.09"
                    />
                    <g filter="url(#filter8_d_804_133577)">
                      <path
                        d="M34.4297 56.377L36.0425 63.7846L37.7807 61.9133L34.4297 56.377Z"
                        fill="#CB4A22"
                      />
                      <path
                        d="M39.021 60.9458L34.4297 56.377L41.6204 59.9428L39.021 60.9458Z"
                        fill="#CB4A22"
                      />
                      <path
                        d="M39.2009 62.5312L39.021 60.9458L34.4297 56.377L39.2009 62.5312Z"
                        fill="#722913"
                      />
                      <path
                        d="M37.7807 61.9133L39.2009 62.5312L34.4297 56.377L37.7807 61.9133Z"
                        fill="#9D391A"
                      />
                    </g>
                    <g filter="url(#filter9_d_804_133577)">
                      <path
                        d="M35.1875 50.0156L39.0788 47.3418L37.5906 46.7802L35.1875 50.0156Z"
                        fill="white"
                      />
                      <path
                        d="M35.1875 50.0156L39.0788 47.3418L37.5906 46.7802L35.1875 50.0156Z"
                        fill="#111111"
                        fill-opacity="0.55"
                      />
                      <path
                        d="M36.7408 46.2929L35.1875 50.0156L35.5506 45.0303L36.7408 46.2929Z"
                        fill="white"
                      />
                      <path
                        d="M36.7408 46.2929L35.1875 50.0156L35.5506 45.0303L36.7408 46.2929Z"
                        fill="#111111"
                        fill-opacity="0.55"
                      />
                      <path
                        d="M37.6125 45.8159L36.7408 46.2929L35.1875 50.0156L37.6125 45.8159Z"
                        fill="white"
                      />
                      <path
                        d="M37.6125 45.8159L36.7408 46.2929L35.1875 50.0156L37.6125 45.8159Z"
                        fill="#111111"
                        fill-opacity="0.8"
                      />
                      <path
                        d="M37.5906 46.7802L37.6125 45.8159L35.1875 50.0156L37.5906 46.7802Z"
                        fill="white"
                      />
                      <path
                        d="M37.5906 46.7802L37.6125 45.8159L35.1875 50.0156L37.5906 46.7802Z"
                        fill="#111111"
                        fill-opacity="0.68"
                      />
                    </g>
                    <g filter="url(#filter10_d_804_133577)">
                      <path
                        d="M26.3672 58.9512L22.5966 59.0506L23.3496 60.0742L26.3672 58.9512Z"
                        fill="white"
                      />
                      <path
                        d="M26.3672 58.9512L22.5966 59.0506L23.3496 60.0742L26.3672 58.9512Z"
                        fill="#111111"
                        fill-opacity="0.45"
                      />
                      <path
                        d="M23.7071 60.7703L26.3672 58.9512L23.9556 62.1342L23.7071 60.7703Z"
                        fill="white"
                      />
                      <path
                        d="M23.7071 60.7703L26.3672 58.9512L23.9556 62.1342L23.7071 60.7703Z"
                        fill="#111111"
                        fill-opacity="0.45"
                      />
                      <path
                        d="M22.9155 60.7108L23.7071 60.7703L26.3672 58.9512L22.9155 60.7108Z"
                        fill="white"
                      />
                      <path
                        d="M22.9155 60.7108L23.7071 60.7703L26.3672 58.9512L22.9155 60.7108Z"
                        fill="#111111"
                        fill-opacity="0.7"
                      />
                      <path
                        d="M23.3496 60.0742L22.9155 60.7108L26.3672 58.9512L23.3496 60.0742Z"
                        fill="white"
                      />
                      <path
                        d="M23.3496 60.0742L22.9155 60.7108L26.3672 58.9512L23.3496 60.0742Z"
                        fill="#111111"
                        fill-opacity="0.58"
                      />
                    </g>
                  </g>
                  <rect
                    x="8.15"
                    y="12.15"
                    width="51.7"
                    height="73.0985"
                    stroke="#722913"
                    stroke-width="0.3"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_804_133577"
                    x="6"
                    y="10"
                    width="60"
                    height="81.3984"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="2" dy="2" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.105882 0 0 0 0 0.105882 0 0 0 0 0.105882 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_133577"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_133577"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_i_804_133577"
                    x="11.5"
                    y="17.6465"
                    width="45.6193"
                    height="14.7922"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="0.564604" dy="0.225841" />
                    <feGaussianBlur stdDeviation="0.282302" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.447059 0 0 0 0 0.160784 0 0 0 0 0.0745098 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_804_133577"
                    />
                  </filter>
                  <filter
                    id="filter2_i_804_133577"
                    x="19.5273"
                    y="35.4297"
                    width="29.7052"
                    height="3.37623"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="0.564604" dy="0.225841" />
                    <feGaussianBlur stdDeviation="0.282302" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.447059 0 0 0 0 0.160784 0 0 0 0 0.0745098 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_804_133577"
                    />
                  </filter>
                  <filter
                    id="filter3_i_804_133577"
                    x="8"
                    y="69.082"
                    width="52.5646"
                    height="6.43678"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="0.564604" dy="0.225841" />
                    <feGaussianBlur stdDeviation="0.282302" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.447059 0 0 0 0 0.160784 0 0 0 0 0.0745098 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_804_133577"
                    />
                  </filter>
                  <filter
                    id="filter4_i_804_133577"
                    x="17.0898"
                    y="70.8887"
                    width="34.6701"
                    height="2.86842"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="0.564604" dy="0.225841" />
                    <feGaussianBlur stdDeviation="0.282302" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.447059 0 0 0 0 0.160784 0 0 0 0 0.0745098 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_804_133577"
                    />
                  </filter>
                  <filter
                    id="filter5_i_804_133577"
                    x="21.2695"
                    y="70.9453"
                    width="1.82632"
                    height="2.7942"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="0.564604" dy="0.225841" />
                    <feGaussianBlur stdDeviation="0.282302" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.447059 0 0 0 0 0.160784 0 0 0 0 0.0745098 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_804_133577"
                    />
                  </filter>
                  <filter
                    id="filter6_i_804_133577"
                    x="36.7383"
                    y="70.9453"
                    width="1.82632"
                    height="2.7942"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="0.564604" dy="0.225841" />
                    <feGaussianBlur stdDeviation="0.282302" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.447059 0 0 0 0 0.160784 0 0 0 0 0.0745098 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_804_133577"
                    />
                  </filter>
                  <filter
                    id="filter7_i_804_133577"
                    x="19.5469"
                    y="39.7773"
                    width="29.8313"
                    height="4.02822"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="0.74927" dy="0.299708" />
                    <feGaussianBlur stdDeviation="0.374635" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.447059 0 0 0 0 0.160784 0 0 0 0 0.0745098 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_804_133577"
                    />
                  </filter>
                  <filter
                    id="filter8_d_804_133577"
                    x="33.8651"
                    y="56.377"
                    width="8.32061"
                    height="8.70679"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="0.733985" />
                    <feGaussianBlur stdDeviation="0.282302" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0.4 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_133577"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_133577"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter9_d_804_133577"
                    x="34.6229"
                    y="45.0293"
                    width="5.01983"
                    height="6.28492"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="0.733985" />
                    <feGaussianBlur stdDeviation="0.282302" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0.3 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_133577"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_133577"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter10_d_804_133577"
                    x="22.0331"
                    y="58.9512"
                    width="4.89874"
                    height="4.48218"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="0.733985" />
                    <feGaussianBlur stdDeviation="0.282302" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0.2 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_133577"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_133577"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_804_133577"
                    x1="39.2468"
                    y1="28.026"
                    x2="73.7331"
                    y2="5.56741"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#CB4A22" />
                    <stop offset="1" stop-color="#9D391A" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_804_133577"
                    x1="34.0282"
                    y1="32.7774"
                    x2="34.0282"
                    y2="128.647"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.172067" stop-color="#FDFDFD" />
                    <stop offset="1" stop-color="#111111" stop-opacity="0" />
                  </linearGradient>
                  <radialGradient
                    id="paint2_radial_804_133577"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(33.8464 24.1786) rotate(90) scale(18.6226 21.6336)"
                  >
                    <stop offset="0.474504" stop-color="#CB4A22" />
                    <stop offset="1" stop-color="#9D391A" />
                  </radialGradient>
                  <radialGradient
                    id="paint3_radial_804_133577"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(33.8464 24.1786) rotate(90) scale(18.6226 21.6336)"
                  >
                    <stop offset="0.474504" stop-color="#CB4A22" />
                    <stop offset="1" stop-color="#9D391A" />
                  </radialGradient>
                  <radialGradient
                    id="paint4_radial_804_133577"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(33.8464 24.1786) rotate(90) scale(18.6226 21.6336)"
                  >
                    <stop offset="0.474504" stop-color="#CB4A22" />
                    <stop offset="1" stop-color="#9D391A" />
                  </radialGradient>
                  <radialGradient
                    id="paint5_radial_804_133577"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(33.8464 24.1786) rotate(90) scale(18.6226 21.6336)"
                  >
                    <stop offset="0.474504" stop-color="#CB4A22" />
                    <stop offset="1" stop-color="#9D391A" />
                  </radialGradient>
                  <radialGradient
                    id="paint6_radial_804_133577"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(33.8464 24.1786) rotate(90) scale(18.6226 21.6336)"
                  >
                    <stop offset="0.474504" stop-color="#CB4A22" />
                    <stop offset="1" stop-color="#9D391A" />
                  </radialGradient>
                  <radialGradient
                    id="paint7_radial_804_133577"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(33.8464 24.1786) rotate(90) scale(18.6226 21.6336)"
                  >
                    <stop offset="0.474504" stop-color="#CB4A22" />
                    <stop offset="1" stop-color="#9D391A" />
                  </radialGradient>
                  <radialGradient
                    id="paint8_radial_804_133577"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(33.7908 71.867) rotate(90) scale(7.93985 24.9682)"
                  >
                    <stop offset="0.474504" stop-color="#CB4A22" />
                    <stop offset="1" stop-color="#9D391A" />
                  </radialGradient>
                  <clipPath id="clip0_804_133577">
                    <rect
                      x="8"
                      y="12"
                      width="52"
                      height="73.3985"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
              <p className="">A digital copy of bestseller SHAPER</p>
            </div>
            <div className="flex gap-4 items-center [&>*:first-child]:shrink-0">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M74.5752 53.8716C74.5752 65.3069 65.305 74.5771 53.8696 74.5771C42.4343 74.5771 33.1641 65.3069 33.1641 53.8716C33.1641 42.4362 42.4343 33.166 53.8696 33.166C65.305 33.166 74.5752 42.4362 74.5752 53.8716Z"
                  fill="#CB4A22"
                />
                <g filter="url(#filter0_b_804_133234)">
                  <path
                    d="M5.42188 15.4751C5.42188 9.92392 9.92197 5.42383 15.4731 5.42383H63.7191C69.2702 5.42383 73.7703 9.92392 73.7703 15.4751V38.4748C73.7703 39.194 73.4846 39.8838 72.976 40.3923L56.6832 56.6852L40.3904 72.978C39.8818 73.4866 39.192 73.7723 38.4728 73.7723H15.4731C9.92197 73.7723 5.42188 69.2722 5.42188 63.721V15.4751Z"
                    fill="url(#paint0_linear_804_133234)"
                  />
                  <path
                    d="M5.42188 15.4751C5.42188 9.92392 9.92197 5.42383 15.4731 5.42383H63.7191C69.2702 5.42383 73.7703 9.92392 73.7703 15.4751V38.4748C73.7703 39.194 73.4846 39.8838 72.976 40.3923L56.6832 56.6852L40.3904 72.978C39.8818 73.4866 39.192 73.7723 38.4728 73.7723H15.4731C9.92197 73.7723 5.42188 69.2722 5.42188 63.721V15.4751Z"
                    fill="url(#paint1_radial_804_133234)"
                    fill-opacity="0.7"
                  />
                </g>
                <g filter="url(#filter1_b_804_133234)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M39.5961 73.7723L73.7703 39.598V15.4751C73.7703 9.92392 69.2702 5.42383 63.7191 5.42383H15.4731C9.92197 5.42383 5.42188 9.92392 5.42188 15.4751V63.721C5.42188 69.2722 9.92197 73.7723 15.4731 73.7723H39.5961ZM73.5693 39.4975V15.4751C73.5693 10.0349 69.1592 5.62485 63.7191 5.62485H15.4731C10.033 5.62485 5.6229 10.0349 5.6229 15.4751V63.721C5.6229 69.1612 10.033 73.5712 15.4731 73.5712H39.4956V49.6493C39.4956 44.0426 44.0407 39.4975 49.6473 39.4975H73.5693ZM73.3855 39.6986H49.6473C44.1517 39.6986 39.6966 44.1537 39.6966 49.6493V73.3875L73.3855 39.6986Z"
                    fill="url(#paint2_linear_804_133234)"
                  />
                </g>
                <g filter="url(#filter2_d_804_133234)">
                  <rect
                    x="14.2344"
                    y="20.3379"
                    width="16.2712"
                    height="1.35593"
                    fill="#FDFDFD"
                  />
                  <rect
                    x="23.0469"
                    y="12.8809"
                    width="16.2712"
                    height="1.35593"
                    transform="rotate(90 23.0469 12.8809)"
                    fill="#FDFDFD"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_804_133234"
                    x="-14.9171"
                    y="-14.9152"
                    width="109.026"
                    height="109.026"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="10.1695"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_804_133234"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_804_133234"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_b_804_133234"
                    x="-5.25609"
                    y="-5.25414"
                    width="89.7036"
                    height="89.7036"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="5.33898"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_804_133234"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_804_133234"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_804_133234"
                    x="9.01532"
                    y="7.6618"
                    width="31.9267"
                    height="31.9287"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="2.60953" dy="2.60953" />
                    <feGaussianBlur stdDeviation="3.91429" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.445401 0 0 0 0 0.162363 0 0 0 0 0.0745992 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_133234"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_133234"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_804_133234"
                    x1="37.9462"
                    y1="-41.4717"
                    x2="100.746"
                    y2="36.5015"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0.125"
                      stop-color="#CB4A22"
                      stop-opacity="0"
                    />
                    <stop
                      offset="0.526042"
                      stop-color="#CB4A22"
                      stop-opacity="0.7"
                    />
                    <stop offset="1" stop-color="#CB4A22" stop-opacity="0" />
                  </linearGradient>
                  <radialGradient
                    id="paint1_radial_804_133234"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(15.6363 71.5347) rotate(-50.9773) scale(53.676 87.7663)"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </radialGradient>
                  <linearGradient
                    id="paint2_linear_804_133234"
                    x1="8.81171"
                    y1="0.678064"
                    x2="92.0947"
                    y2="33.9715"
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

              <p className="">
                Access to an overview of research findings and key concepts
                presented by Dr. Tom Hunsaker
              </p>
            </div>
            <div className="flex gap-4 items-center [&>*:first-child]:shrink-0">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect
                  x="21.0156"
                  y="6.10156"
                  width="31.1864"
                  height="31.1864"
                  rx="5.42373"
                  fill="#9D391A"
                />
                <rect
                  x="40"
                  y="12.8809"
                  width="31.1864"
                  height="31.1864"
                  rx="15.5932"
                  fill="#E6886A"
                />
                <path
                  d="M10.3545 17.8549C10.8534 15.1078 13.4847 13.2853 16.2318 13.7842L56.3973 21.0784C59.1444 21.5772 60.9669 24.2086 60.468 26.9557L56.442 49.1246C55.9432 51.8716 53.3118 53.6941 50.5647 53.1953L10.3993 45.9011C7.65219 45.4022 5.82968 42.7708 6.32856 40.0238L10.3545 17.8549Z"
                  fill="#CB4A22"
                />
                <g filter="url(#filter0_b_804_133583)">
                  <path
                    d="M74.5744 37.3826C74.5744 32.8084 70.8663 29.1003 66.2922 29.1003H44.3601C42.5209 29.1003 40.8256 28.1053 39.929 26.4994C39.0324 24.8935 37.3371 23.8984 35.4979 23.8984H13.7041C9.12995 23.8984 5.42188 27.6065 5.42188 32.1807V65.406C5.42188 69.9802 9.12996 73.6883 13.7041 73.6883H66.2922C70.8663 73.6883 74.5744 69.9802 74.5744 65.406V37.3826Z"
                    fill="url(#paint0_radial_804_133583)"
                    fill-opacity="0.7"
                  />
                  <path
                    d="M74.5744 37.3826C74.5744 32.8084 70.8663 29.1003 66.2922 29.1003H44.3601C42.5209 29.1003 40.8256 28.1053 39.929 26.4994C39.0324 24.8935 37.3371 23.8984 35.4979 23.8984H13.7041C9.12995 23.8984 5.42188 27.6065 5.42188 32.1807V65.406C5.42188 69.9802 9.12996 73.6883 13.7041 73.6883H66.2922C70.8663 73.6883 74.5744 69.9802 74.5744 65.406V37.3826Z"
                    fill="url(#paint1_linear_804_133583)"
                  />
                </g>
                <g filter="url(#filter1_b_804_133583)">
                  <mask id="path-5-inside-1_804_133583" fill="white">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M66.2922 29.266H44.3601C42.4608 29.266 40.7102 28.2384 39.7844 26.5801C38.917 25.0267 37.2771 24.0641 35.4979 24.0641H13.7041C9.22144 24.0641 5.58752 27.698 5.58752 32.1807V65.406C5.58752 69.8887 9.22144 73.5226 13.7041 73.5226H66.2922C70.7749 73.5226 74.4088 69.8887 74.4088 65.406V37.3826C74.4088 32.8999 70.7748 29.266 66.2922 29.266ZM66.2922 29.1003C70.8663 29.1003 74.5744 32.8084 74.5744 37.3826V65.406C74.5744 69.9802 70.8663 73.6883 66.2922 73.6883H13.7041C9.12996 73.6883 5.42188 69.9802 5.42188 65.406V32.1807C5.42188 27.6065 9.12995 23.8984 13.7041 23.8984H35.4979C37.3371 23.8984 39.0324 24.8935 39.929 26.4994C40.8256 28.1053 42.5209 29.1003 44.3601 29.1003H66.2922Z"
                    />
                  </mask>
                  <path
                    d="M39.7844 26.5801L39.959 26.4826V26.4826L39.7844 26.5801ZM39.929 26.4994L40.1036 26.4019L39.929 26.4994ZM44.3601 29.466H66.2922V29.066H44.3601V29.466ZM39.6097 26.6776C40.5709 28.3992 42.3884 29.466 44.3601 29.466V29.066C42.5333 29.066 40.8495 28.0776 39.959 26.4826L39.6097 26.6776ZM35.4979 24.2641C37.2046 24.2641 38.7777 25.1875 39.6097 26.6776L39.959 26.4826C39.0563 24.8659 37.3496 23.8641 35.4979 23.8641V24.2641ZM13.7041 24.2641H35.4979V23.8641H13.7041V24.2641ZM5.78752 32.1807C5.78752 27.8085 9.33189 24.2641 13.7041 24.2641V23.8641C9.11098 23.8641 5.38752 27.5875 5.38752 32.1807H5.78752ZM5.78752 65.406V32.1807H5.38752V65.406H5.78752ZM13.7041 73.3226C9.3319 73.3226 5.78752 69.7782 5.78752 65.406H5.38752C5.38752 69.9992 9.11098 73.7226 13.7041 73.7226V73.3226ZM66.2922 73.3226H13.7041V73.7226H66.2922V73.3226ZM74.2088 65.406C74.2088 69.7782 70.6644 73.3226 66.2922 73.3226V73.7226C70.8853 73.7226 74.6088 69.9992 74.6088 65.406H74.2088ZM74.2088 37.3826V65.406H74.6088V37.3826H74.2088ZM66.2922 29.466C70.6644 29.466 74.2088 33.0104 74.2088 37.3826H74.6088C74.6088 32.7894 70.8853 29.066 66.2922 29.066V29.466ZM74.7744 37.3826C74.7744 32.698 70.9768 28.9003 66.2922 28.9003V29.3003C70.7559 29.3003 74.3744 32.9189 74.3744 37.3826H74.7744ZM74.7744 65.406V37.3826H74.3744V65.406H74.7744ZM66.2922 73.8883C70.9768 73.8883 74.7744 70.0906 74.7744 65.406H74.3744C74.3744 69.8697 70.7559 73.4883 66.2922 73.4883V73.8883ZM13.7041 73.8883H66.2922V73.4883H13.7041V73.8883ZM5.22187 65.406C5.22187 70.0906 9.0195 73.8883 13.7041 73.8883V73.4883C9.24041 73.4883 5.62188 69.8697 5.62188 65.406H5.22187ZM5.22187 32.1807V65.406H5.62188V32.1807H5.22187ZM13.7041 23.6984C9.01949 23.6984 5.22187 27.4961 5.22187 32.1807H5.62188C5.62188 27.717 9.24041 24.0984 13.7041 24.0984V23.6984ZM35.4979 23.6984H13.7041V24.0984H35.4979V23.6984ZM40.1036 26.4019C39.1717 24.7327 37.4096 23.6984 35.4979 23.6984V24.0984C37.2646 24.0984 38.8931 25.0543 39.7544 26.5969L40.1036 26.4019ZM44.3601 28.9003C42.5934 28.9003 40.9649 27.9445 40.1036 26.4019L39.7544 26.5969C40.6863 28.266 42.4484 29.3003 44.3601 29.3003V28.9003ZM66.2922 28.9003H44.3601V29.3003H66.2922V28.9003Z"
                    fill="#E6886A"
                    mask="url(#path-5-inside-1_804_133583)"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_804_133583"
                    x="-6.92679"
                    y="11.5498"
                    width="93.8497"
                    height="74.4864"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="6.17433"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_804_133583"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_804_133583"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_b_804_133583"
                    x="-4.3027"
                    y="14.1739"
                    width="88.6015"
                    height="69.2382"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="4.86229"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_804_133583"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_804_133583"
                      result="shape"
                    />
                  </filter>
                  <radialGradient
                    id="paint0_radial_804_133583"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(-0.00185621 81.6957) rotate(-33.6229) scale(80.1965 133.105)"
                  >
                    <stop stop-color="white" />
                    <stop offset="1" stop-color="white" stop-opacity="0" />
                  </radialGradient>
                  <linearGradient
                    id="paint1_linear_804_133583"
                    x1="-4.45706"
                    y1="11.7668"
                    x2="99.2156"
                    y2="51.3987"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0.125"
                      stop-color="#F9E3DC"
                      stop-opacity="0"
                    />
                    <stop
                      offset="0.719024"
                      stop-color="#CB4A22"
                      stop-opacity="0.7"
                    />
                    <stop offset="1" stop-color="#F9E3DC" />
                    <stop offset="1" stop-color="#F9E3DC" stop-opacity="0" />
                  </linearGradient>
                </defs>
              </svg>
              <p className="">All for a limited time just $49 ($500 value)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
