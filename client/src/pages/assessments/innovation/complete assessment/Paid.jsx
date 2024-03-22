import React, { useContext, useEffect, useState } from "react";
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
import {
  useCreateUserMutation,
  useCheckoutMutation,
} from "../../../../services/appApi";
import appContext from "../../../../context/AppContext";

export function Paid() {
  const { innovation_assessment_evaluation: assessmentInfo } = useSelector(
    (state) => state.app
  );
  const { category_points, section_points } = useContext(appContext);

  //Input handlers
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
  const [paidFormVal, setPaidFormVal] = useState({
    Name: "",
    Last_Name: "",
    Market_Sector: "",
    Teams: "",
    Number_of_Employees: "",
    Country: "",
    Email: "",
    Website_or_Social_Handle: "",
    Phone: "",
  });

  function handleChange(e) {
    setPaidFormVal({
      ...paidFormVal,
      [e.target.name]: e.target.value,
    });
  }

  //Submit handlers
  const [loading, setLoading] = useState(false);
  const [createUserApi] = useCreateUserMutation();
  const [checkoutUserApi] = useCheckoutMutation();
  function onSubmitForm(e) {
    e.preventDefault();
    setLoading(true);

    //Calculate total score
    const total_score =
      category_points(assessmentInfo, "Personal") +
      category_points(assessmentInfo, "Interpersonal") +
      category_points(assessmentInfo, "Team") +
      section_points(assessmentInfo, "Ideation") +
      section_points(assessmentInfo, "Validation") +
      section_points(assessmentInfo, "Adoption") +
      section_points(assessmentInfo, "System");

    //Assign levels
    const level =
      total_score > 159 && total_score < 186
        ? 5
        : total_score > 120 && total_score < 160
        ? 4
        : total_score > 69 && total_score < 121
        ? 3
        : total_score > 39 && total_score < 70
        ? 2
        : 1;

    createUserApi({
      concept: "innovation",
      body: {
        name: paidFormVal.Name,
        last_name: paidFormVal.Last_Name,
        email: paidFormVal.Email,
        user_info: paidFormVal,
        assessment_info: assessmentInfo,
        points: {
          //Personal
          Personal_points: category_points(assessmentInfo, "Personal"),
          Personal_score: +(
            category_points(assessmentInfo, "Personal") / 70
          ).toFixed(2),

          //Interpersonal
          Interpersonal_points: category_points(
            assessmentInfo,
            "Interpersonal"
          ),
          Interpersonal_score: +(
            category_points(assessmentInfo, "Interpersonal") / 50
          ).toFixed(2),

          //Team
          Team_points:
            category_points(assessmentInfo, "Team") +
            section_points(assessmentInfo, "Ideation") +
            section_points(assessmentInfo, "Validation") +
            section_points(assessmentInfo, "Adoption") +
            section_points(assessmentInfo, "System"),
          Team_score: +(
            (category_points(assessmentInfo, "Team") +
              section_points(assessmentInfo, "Ideation") +
              section_points(assessmentInfo, "Validation") +
              section_points(assessmentInfo, "Adoption") +
              section_points(assessmentInfo, "System")) /
            65
          ).toFixed(2),
        },
        total_score,
        level,
        plan: "Free",
      },
    });

    checkoutUserApi({
      concept: "strategy",
      body: {
        name: paidFormVal.Name,
        email: paidFormVal.Email,
        user_info: paidFormVal,
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

  return (
    <div className="bg-Greyscale200 mx-auto">
      <div className="w-[min(90rem,100%)] mx-auto md:px-12 lg:px-32 pb-16 md:pt-16 lg:pb-24 grid gap-12 lg:grid-cols-[1fr,0.6fr]">
        <form
          onSubmit={onSubmitForm}
          id="Innovation_form"
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
              required={true}
              type="text"
              value={paidFormVal.Name}
            />
            <InputField
              id="Last_Name"
              label="Last Name"
              name="Last_Name"
              onChange={handleChange}
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
              id="Teams"
              label="Teams"
              name="Teams"
              onChange={handleChange}
              required={true}
              type="text"
              value={paidFormVal.Teams}
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
                  (option) => paidFormVal.Number_of_Employees === option.label
                )}
                placeholder="Select number of employees"
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
              className="bg-Blue500 text-Greyscale border-Blue500 border-2"
              label={loading ? "Proceeding" : "Proceed to checkout"}
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
                  fill="url(#paint0_linear_804_137657)"
                />
                <mask
                  id="mask0_804_137657"
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
                    stroke="url(#paint1_linear_804_137657)"
                    stroke-width="0.677966"
                  />
                </mask>
                <g mask="url(#mask0_804_137657)">
                  <path
                    d="M88.0588 38.1341C88.0588 48.4728 65.7088 56.8541 38.1388 56.8541C10.5687 56.8541 -11.7812 48.4728 -11.7812 38.1341M88.0588 38.1341C88.0588 27.7953 65.7088 19.4141 38.1388 19.4141C10.5687 19.4141 -11.7812 27.7953 -11.7812 38.1341M88.0588 38.1341H-11.7812"
                    stroke="#315C90"
                    stroke-width="0.677966"
                  />
                </g>
                <circle
                  cx="38.1375"
                  cy="38.1336"
                  r="31.2"
                  stroke="url(#paint2_linear_804_137657)"
                  stroke-width="0.677966"
                />
                <path
                  d="M38.1375 69.3336C20.9062 69.3336 6.9375 55.3649 6.9375 38.1336C6.9375 20.9023 20.9062 6.93359 38.1375 6.93359"
                  stroke="#315C90"
                  stroke-width="0.677966"
                />
                <path
                  d="M38.1341 69.3336C27.7953 69.3336 19.4141 55.3649 19.4141 38.1336C19.4141 20.9023 27.7953 6.93359 38.1341 6.93359"
                  stroke="#315C90"
                  stroke-width="0.677966"
                />
                <path
                  d="M37.8281 69.3336C38.0004 69.3336 38.1401 55.3649 38.1401 38.1336C38.1401 20.9023 38.0004 6.93359 37.8281 6.93359"
                  stroke="#315C90"
                  stroke-width="0.677966"
                />
                <path
                  d="M37.8281 69.3336C48.1669 69.3336 56.5481 55.3649 56.5481 38.1336C56.5481 20.9023 48.1669 6.93359 37.8281 6.93359"
                  stroke="#315C90"
                  stroke-width="0.677966"
                />
                <g filter="url(#filter0_b_804_137657)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M67.5746 66.811C72.1806 60.789 71.7298 52.1395 66.2221 46.6318C60.2235 40.6331 50.4977 40.6331 44.499 46.6318C38.5003 52.6305 38.5003 62.3563 44.499 68.3549C50.0067 73.8626 58.6562 74.3134 64.6782 69.7075L69.3207 74.35C69.7423 74.7715 70.4258 74.7715 70.8473 74.35L72.2171 72.9801C72.6387 72.5586 72.6387 71.8751 72.2171 71.4535L67.5746 66.811Z"
                    fill="white"
                    fill-opacity="0.1"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M67.5746 66.811C72.1806 60.789 71.7298 52.1395 66.2221 46.6318C60.2235 40.6331 50.4977 40.6331 44.499 46.6318C38.5003 52.6305 38.5003 62.3563 44.499 68.3549C50.0067 73.8626 58.6562 74.3134 64.6782 69.7075L69.3207 74.35C69.7423 74.7715 70.4258 74.7715 70.8473 74.35L72.2171 72.9801C72.6387 72.5586 72.6387 71.8751 72.2171 71.4535L67.5746 66.811Z"
                    fill="url(#paint3_linear_804_137657)"
                    fill-opacity="0.58"
                  />
                </g>
                <g filter="url(#filter1_b_804_137657)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M67.4315 66.8205L67.4889 66.7455C72.0624 60.7658 71.6147 52.177 66.1458 46.7081C60.1893 40.7516 50.5319 40.7516 44.5753 46.7081C38.6188 52.6647 38.6188 62.3221 44.5753 68.2786C50.0442 73.7475 58.633 74.1953 64.6126 69.6217L64.6877 69.5643L69.397 74.2736C69.7764 74.653 70.3916 74.653 70.771 74.2736L72.1408 72.9038C72.5202 72.5244 72.5202 71.9093 72.1408 71.5299L67.4315 66.8205ZM64.6782 69.7075C58.6562 74.3134 50.0067 73.8626 44.499 68.3549C38.5003 62.3563 38.5003 52.6305 44.499 46.6318C50.4977 40.6331 60.2235 40.6331 66.2221 46.6318C71.7298 52.1395 72.1806 60.789 67.5746 66.811L72.2171 71.4535C72.6387 71.8751 72.6387 72.5586 72.2171 72.9801L70.8473 74.35C70.4258 74.7715 69.7423 74.7715 69.3207 74.35L64.6782 69.7075Z"
                    fill="#85A9D5"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_804_137657"
                    x="33"
                    y="35.1328"
                    width="46.5312"
                    height="46.5332"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="3.5"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_804_137657"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_804_137657"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_b_804_137657"
                    x="29.322"
                    y="31.4548"
                    width="53.8872"
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
                      result="effect1_backgroundBlur_804_137657"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_804_137657"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_804_137657"
                    x1="37.9703"
                    y1="5.42287"
                    x2="37.9703"
                    y2="69.8297"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0327056" stop-color="#315C90" />
                    <stop offset="0.520187" stop-color="#D9E4F1" />
                    <stop offset="1" stop-color="#315C90" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_804_137657"
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
                    id="paint2_linear_804_137657"
                    x1="52.5"
                    y1="24"
                    x2="38.1375"
                    y2="69.3336"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#315C90" />
                    <stop offset="0.526042" stop-color="#85A9D5" />
                    <stop offset="1" stop-color="#315C90" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_804_137657"
                    x1="41.3556"
                    y1="42.8106"
                    x2="59.1197"
                    y2="71.8934"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D9E4F1" />
                    <stop offset="0.765625" stop-color="#85A9D5" />
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
                <g filter="url(#filter0_b_804_137660)">
                  <path
                    d="M5.42188 48.6641C5.42188 44.4205 8.86194 40.9805 13.1055 40.9805H28.5815V74.5782H13.1055C8.86194 74.5782 5.42188 71.1381 5.42188 66.8946V48.6641Z"
                    fill="url(#paint0_linear_804_137660)"
                  />
                </g>
                <g filter="url(#filter1_b_804_137660)">
                  <path
                    d="M28.5859 29.0899C28.5859 24.8463 32.026 21.4062 36.2695 21.4062H51.4193V74.5754H28.5859V29.0899Z"
                    fill="url(#paint1_linear_804_137660)"
                  />
                </g>
                <g filter="url(#filter2_b_804_137660)">
                  <path
                    d="M51.4141 13.1074C51.4141 8.8639 54.8541 5.42383 59.0977 5.42383H66.89C71.1336 5.42383 74.5736 8.8639 74.5736 13.1074V66.8928C74.5736 71.1363 71.1336 74.5764 66.89 74.5764H51.4141V13.1074Z"
                    fill="url(#paint2_linear_804_137660)"
                  />
                </g>
                <g filter="url(#filter3_d_804_137660)">
                  <path
                    d="M11.5218 61.976C11.2294 62.2099 11.182 62.6365 11.4159 62.9289C11.6498 63.2213 12.0765 63.2687 12.3688 63.0348L11.5218 61.976ZM35.5942 43.5863L36.1451 43.1911C36.0366 43.04 35.8709 42.94 35.6867 42.9147C35.5024 42.8893 35.3159 42.9407 35.1707 43.0569L35.5942 43.5863ZM46.3585 58.5911L45.8076 58.9863C45.9226 59.1465 46.1016 59.2488 46.2981 59.2663C46.4945 59.2839 46.6889 59.2151 46.8305 59.0778L46.3585 58.5911ZM68.565 37.7253C68.5708 37.3509 68.2719 37.0427 67.8975 37.037L61.7966 36.9431C61.4222 36.9373 61.114 37.2362 61.1083 37.6106C61.1025 37.9849 61.4013 38.2931 61.7757 38.2989L67.1988 38.3823L67.1154 43.8054C67.1096 44.1798 67.4084 44.4879 67.7828 44.4937C68.1572 44.4995 68.4654 44.2006 68.4711 43.8262L68.565 37.7253ZM12.3688 63.0348L36.0177 44.1157L35.1707 43.0569L11.5218 61.976L12.3688 63.0348ZM35.0433 43.9815L45.8076 58.9863L46.9094 58.1959L36.1451 43.1911L35.0433 43.9815ZM46.8305 59.0778L68.3591 38.2016L67.4151 37.2281L45.8865 58.1044L46.8305 59.0778Z"
                    fill="#FDFDFD"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_b_804_137660"
                    x="1.58007"
                    y="37.1387"
                    width="30.8399"
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
                      result="effect1_backgroundBlur_804_137660"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_804_137660"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_b_804_137660"
                    x="24.7441"
                    y="17.5644"
                    width="30.5195"
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
                      result="effect1_backgroundBlur_804_137660"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_804_137660"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_b_804_137660"
                    x="47.5723"
                    y="1.58202"
                    width="30.8399"
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
                      result="effect1_backgroundBlur_804_137660"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_804_137660"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter3_d_804_137660"
                    x="6.04657"
                    y="31.7243"
                    width="72.9541"
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
                      values="0 0 0 0 0.129412 0 0 0 0 0.235294 0 0 0 0 0.372549 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_137660"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_137660"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_804_137660"
                    x1="17.0017"
                    y1="40.9805"
                    x2="17.0017"
                    y2="74.5782"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D9E4F1" />
                    <stop offset="0.765625" stop-color="#315C90" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_804_137660"
                    x1="40.0026"
                    y1="21.4062"
                    x2="40.0026"
                    y2="74.5754"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D9E4F1" />
                    <stop offset="0.765625" stop-color="#315C90" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_804_137660"
                    x1="62.9939"
                    y1="5.42383"
                    x2="62.9939"
                    y2="74.5764"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D9E4F1" />
                    <stop offset="0.765625" stop-color="#315C90" />
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
                  fill="url(#paint0_linear_804_137664)"
                />
                <path
                  d="M1.57812 5.42383L27.1902 11.8268V74.5764L1.57812 68.1734V5.42383Z"
                  fill="url(#paint1_linear_804_137664)"
                  fill-opacity="0.2"
                />
                <path
                  d="M1.57812 5.42383L27.1902 11.8268V74.5764L1.57812 68.1734V5.42383Z"
                  stroke="url(#paint2_linear_804_137664)"
                  stroke-width="0.271186"
                />
                <path
                  d="M52.8047 5.42383L27.1926 11.8268V74.5764L52.8047 68.1734V5.42383Z"
                  fill="white"
                />
                <path
                  d="M52.8047 5.42383L27.1926 11.8268V74.5764L52.8047 68.1734V5.42383Z"
                  fill="url(#paint3_linear_804_137664)"
                />
                <path
                  d="M52.8047 5.42383L27.1926 11.8268V74.5764L52.8047 68.1734V5.42383Z"
                  fill="url(#paint4_linear_804_137664)"
                  fill-opacity="0.2"
                />
                <path
                  d="M52.8047 5.42383L27.1926 11.8268V74.5764L52.8047 68.1734V5.42383Z"
                  stroke="url(#paint5_linear_804_137664)"
                  stroke-width="0.271186"
                />
                <path
                  d="M52.8047 5.42383L78.4167 11.8268V74.5764L52.8047 68.1734V5.42383Z"
                  fill="white"
                />
                <path
                  d="M52.8047 5.42383L78.4167 11.8268V74.5764L52.8047 68.1734V5.42383Z"
                  fill="url(#paint6_linear_804_137664)"
                />
                <path
                  d="M52.8047 5.42383L78.4167 11.8268V74.5764L52.8047 68.1734V5.42383Z"
                  fill="url(#paint7_linear_804_137664)"
                  fill-opacity="0.2"
                />
                <path
                  d="M52.8047 5.42383L78.4167 11.8268V74.5764L52.8047 68.1734V5.42383Z"
                  stroke="url(#paint8_linear_804_137664)"
                  stroke-width="0.271186"
                />
                <g clip-path="url(#clip0_804_137664)">
                  <g filter="url(#filter0_bi_804_137664)">
                    <path
                      d="M39.9993 30.5078C42.5166 30.5078 44.9309 31.5078 46.7109 33.2878C48.4909 35.0678 49.4909 37.482 49.4909 39.9993C49.4909 43.5112 47.5767 46.5801 44.7451 48.2253V51.0728C44.7451 51.4923 44.5784 51.8947 44.2818 52.1914C43.9851 52.488 43.5827 52.6547 43.1632 52.6547H36.8355C36.4159 52.6547 36.0136 52.488 35.7169 52.1914C35.4202 51.8947 35.2536 51.4923 35.2536 51.0728V48.2253C32.4219 46.5801 30.5078 43.5112 30.5078 39.9993C30.5078 37.482 31.5078 35.0678 33.2878 33.2878C35.0678 31.5078 37.482 30.5078 39.9993 30.5078ZM43.1632 54.2366V55.8185C43.1632 56.2381 42.9965 56.6405 42.6998 56.9371C42.4032 57.2338 42.0008 57.4005 41.5813 57.4005H38.4174C37.9979 57.4005 37.5955 57.2338 37.2988 56.9371C37.0022 56.6405 36.8355 56.2381 36.8355 55.8185V54.2366H43.1632Z"
                      fill="url(#paint9_linear_804_137664)"
                      fill-opacity="0.5"
                    />
                    <path
                      d="M39.9993 30.5078C42.5166 30.5078 44.9309 31.5078 46.7109 33.2878C48.4909 35.0678 49.4909 37.482 49.4909 39.9993C49.4909 43.5112 47.5767 46.5801 44.7451 48.2253V51.0728C44.7451 51.4923 44.5784 51.8947 44.2818 52.1914C43.9851 52.488 43.5827 52.6547 43.1632 52.6547H36.8355C36.4159 52.6547 36.0136 52.488 35.7169 52.1914C35.4202 51.8947 35.2536 51.4923 35.2536 51.0728V48.2253C32.4219 46.5801 30.5078 43.5112 30.5078 39.9993C30.5078 37.482 31.5078 35.0678 33.2878 33.2878C35.0678 31.5078 37.482 30.5078 39.9993 30.5078ZM43.1632 54.2366V55.8185C43.1632 56.2381 42.9965 56.6405 42.6998 56.9371C42.4032 57.2338 42.0008 57.4005 41.5813 57.4005H38.4174C37.9979 57.4005 37.5955 57.2338 37.2988 56.9371C37.0022 56.6405 36.8355 56.2381 36.8355 55.8185V54.2366H43.1632Z"
                      fill="url(#paint10_radial_804_137664)"
                    />
                  </g>
                  <g filter="url(#filter1_di_804_137664)">
                    <path
                      d="M40.0038 22.666V27.2054M49.0826 30.9195L52.384 27.6181M52.7967 39.9984H57.3361M30.9254 30.9197L27.624 27.6183M27.2113 39.9986H22.6719"
                      stroke="#FDFDFD"
                      stroke-width="2.0339"
                      stroke-linecap="round"
                    />
                    <path
                      d="M40.0038 22.666V27.2054M49.0826 30.9195L52.384 27.6181M52.7967 39.9984H57.3361M30.9254 30.9197L27.624 27.6183M27.2113 39.9986H22.6719"
                      stroke="url(#paint11_radial_804_137664)"
                      stroke-width="2.0339"
                      stroke-linecap="round"
                    />
                  </g>
                </g>
                <defs>
                  <filter
                    id="filter0_bi_804_137664"
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
                      result="effect1_backgroundBlur_804_137664"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_804_137664"
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
                      result="effect2_innerShadow_804_137664"
                    />
                  </filter>
                  <filter
                    id="filter1_di_804_137664"
                    x="6.741"
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
                      result="effect1_dropShadow_804_137664"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_137664"
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
                      result="effect2_innerShadow_804_137664"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_804_137664"
                    x1="14.5336"
                    y1="0.339082"
                    x2="14.5336"
                    y2="69.8306"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0207592" stop-color="#D9E4F1" />
                    <stop offset="0.649494" stop-color="#315C90" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_804_137664"
                    x1="25.5718"
                    y1="41.695"
                    x2="-0.529924"
                    y2="40.0001"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#315C90" />
                    <stop offset="1" stop-color="#D9E4F1" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_804_137664"
                    x1="14.3842"
                    y1="5.42383"
                    x2="14.3842"
                    y2="74.5764"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D9E4F1" />
                    <stop offset="1" stop-color="#315C90" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_804_137664"
                    x1="39.8492"
                    y1="0.339082"
                    x2="39.8492"
                    y2="69.8306"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0207592" stop-color="#D9E4F1" />
                    <stop offset="0.649494" stop-color="#315C90" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_804_137664"
                    x1="28.811"
                    y1="41.695"
                    x2="54.9127"
                    y2="40.0001"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#315C90" />
                    <stop offset="1" stop-color="#D9E4F1" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_804_137664"
                    x1="39.9987"
                    y1="5.42383"
                    x2="39.9987"
                    y2="74.5764"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D9E4F1" />
                    <stop offset="1" stop-color="#315C90" />
                  </linearGradient>
                  <linearGradient
                    id="paint6_linear_804_137664"
                    x1="65.7602"
                    y1="0.339082"
                    x2="65.7602"
                    y2="69.8306"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.0207592" stop-color="#D9E4F1" />
                    <stop offset="0.649494" stop-color="#315C90" />
                  </linearGradient>
                  <linearGradient
                    id="paint7_linear_804_137664"
                    x1="76.7983"
                    y1="41.695"
                    x2="50.6966"
                    y2="40.0001"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#315C90" />
                    <stop offset="1" stop-color="#D9E4F1" />
                  </linearGradient>
                  <linearGradient
                    id="paint8_linear_804_137664"
                    x1="65.6107"
                    y1="5.42383"
                    x2="65.6107"
                    y2="74.5764"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D9E4F1" />
                    <stop offset="1" stop-color="#315C90" />
                  </linearGradient>
                  <linearGradient
                    id="paint9_linear_804_137664"
                    x1="39.3214"
                    y1="25.4231"
                    x2="55.7215"
                    y2="43.0173"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D9E4F1" />
                    <stop offset="0.586318" stop-color="#315C90" />
                    <stop offset="1" stop-color="#D9E4F1" />
                  </linearGradient>
                  <radialGradient
                    id="paint10_radial_804_137664"
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
                    id="paint11_radial_804_137664"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(40.0024 38.9816) rotate(-90) scale(9.49153 6.32768)"
                  >
                    <stop stop-color="#315C90" />
                    <stop offset="1" stop-color="#D9E4F1" />
                  </radialGradient>
                  <clipPath id="clip0_804_137664">
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
                <g filter="url(#filter0_i_804_137667)">
                  <circle
                    cx="46"
                    cy="26"
                    r="26"
                    fill="url(#paint0_radial_804_137667)"
                  />
                </g>
                <g filter="url(#filter1_d_804_137667)">
                  <g clip-path="url(#clip0_804_137667)">
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
                      fill="url(#paint1_linear_804_137667)"
                      fill-opacity="0.2"
                    />
                    <g filter="url(#filter2_i_804_137667)">
                      <rect
                        x="8"
                        y="69.082"
                        width="52"
                        height="6.21064"
                        fill="url(#paint2_radial_804_137667)"
                      />
                    </g>
                    <g filter="url(#filter3_i_804_137667)">
                      <path
                        d="M17.5562 70.9254C17.6981 70.9254 17.8106 70.9694 17.8938 71.0575C17.977 71.1456 18.0186 71.2532 18.0186 71.3804V71.8796C18.0186 72.0068 17.977 72.1144 17.8938 72.2025C17.8106 72.2906 17.6981 72.3346 17.5562 72.3346H17.424V73.4576C17.424 73.4821 17.4118 73.4943 17.3873 73.4943H17.1304C17.106 73.4943 17.0938 73.4821 17.0938 73.4576V70.9621C17.0938 70.9376 17.106 70.9254 17.1304 70.9254H17.5562ZM17.5562 72.0117C17.6002 72.0117 17.6332 71.9988 17.6552 71.9731C17.6773 71.9474 17.6883 71.9163 17.6883 71.8796V71.3804C17.6883 71.3437 17.6773 71.3125 17.6552 71.2869C17.6332 71.2612 17.6002 71.2483 17.5562 71.2483H17.424V72.0117H17.5562Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M19.4478 73.4429C19.4514 73.4576 19.4484 73.4699 19.4386 73.4796C19.43 73.4894 19.4184 73.4943 19.4037 73.4943H19.1542C19.1358 73.4943 19.1236 73.4845 19.1175 73.465L18.7927 72.3346H18.7872V73.4576C18.7872 73.4821 18.775 73.4943 18.7505 73.4943H18.4936C18.4691 73.4943 18.4569 73.4821 18.4569 73.4576V70.9621C18.4569 70.9376 18.4691 70.9254 18.4936 70.9254H18.9193C19.0612 70.9254 19.1738 70.9694 19.2569 71.0575C19.3401 71.1456 19.3817 71.2532 19.3817 71.3804V71.8796C19.3817 71.9713 19.3585 72.0551 19.312 72.1309C19.2667 72.2056 19.2025 72.2606 19.1193 72.2961L19.4478 73.4429ZM18.7872 71.2483V72.0117H18.9193C18.9633 72.0117 18.9964 71.9988 19.0184 71.9731C19.0404 71.9474 19.0514 71.9163 19.0514 71.8796V71.3804C19.0514 71.3437 19.0404 71.3125 19.0184 71.2869C18.9964 71.2612 18.9633 71.2483 18.9193 71.2483H18.7872Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M20.6561 73.1714C20.6806 73.1714 20.6928 73.1836 20.6928 73.2081V73.4576C20.6928 73.4821 20.6806 73.4943 20.6561 73.4943H19.8854C19.8609 73.4943 19.8487 73.4821 19.8487 73.4576V70.9621C19.8487 70.9376 19.8609 70.9254 19.8854 70.9254H20.6341C20.6585 70.9254 20.6708 70.9376 20.6708 70.9621V71.2116C20.6708 71.2361 20.6585 71.2483 20.6341 71.2483H20.179V72.0117H20.568C20.5925 72.0117 20.6047 72.0239 20.6047 72.0484V72.2979C20.6047 72.3224 20.5925 72.3346 20.568 72.3346H20.179V73.1714H20.6561Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M23.1335 73.4943C23.1091 73.4943 23.0968 73.4821 23.0968 73.4576V70.9621C23.0968 70.9376 23.1091 70.9254 23.1335 70.9254H23.3904C23.4149 70.9254 23.4271 70.9376 23.4271 70.9621V73.4576C23.4271 73.4821 23.4149 73.4943 23.3904 73.4943H23.1335Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M24.7054 73.1714C24.7299 73.1714 24.7421 73.1836 24.7421 73.2081V73.4576C24.7421 73.4821 24.7299 73.4943 24.7054 73.4943H23.9347C23.9103 73.4943 23.898 73.4821 23.898 73.4576V70.9621C23.898 70.9376 23.9103 70.9254 23.9347 70.9254H24.6834C24.7078 70.9254 24.7201 70.9376 24.7201 70.9621V71.2116C24.7201 71.2361 24.7078 71.2483 24.6834 71.2483H24.2283V72.0117H24.6173C24.6418 72.0117 24.654 72.0239 24.654 72.0484V72.2979C24.654 72.3224 24.6418 72.3346 24.6173 72.3346H24.2283V73.1714H24.7054Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M26.146 73.4429C26.1496 73.4576 26.1466 73.4699 26.1368 73.4796C26.1282 73.4894 26.1166 73.4943 26.1019 73.4943H25.8524C25.834 73.4943 25.8218 73.4845 25.8157 73.465L25.4909 72.3346H25.4854V73.4576C25.4854 73.4821 25.4731 73.4943 25.4487 73.4943H25.1918C25.1673 73.4943 25.1551 73.4821 25.1551 73.4576V70.9621C25.1551 70.9376 25.1673 70.9254 25.1918 70.9254H25.6175C25.7594 70.9254 25.8719 70.9694 25.9551 71.0575C26.0383 71.1456 26.0799 71.2532 26.0799 71.3804V71.8796C26.0799 71.9713 26.0567 72.0551 26.0102 72.1309C25.9649 72.2056 25.9007 72.2606 25.8175 72.2961L26.146 73.4429ZM25.4854 71.2483V72.0117H25.6175C25.6615 72.0117 25.6946 71.9988 25.7166 71.9731C25.7386 71.9474 25.7496 71.9163 25.7496 71.8796V71.3804C25.7496 71.3437 25.7386 71.3125 25.7166 71.2869C25.6946 71.2612 25.6615 71.2483 25.6175 71.2483H25.4854Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M27.9195 70.9254C28.0614 70.9254 28.1739 70.9694 28.2571 71.0575C28.3403 71.1456 28.3819 71.2532 28.3819 71.3804V73.0392C28.3819 73.1665 28.3403 73.2741 28.2571 73.3622C28.1739 73.4503 28.0614 73.4943 27.9195 73.4943H27.4937C27.4693 73.4943 27.457 73.4821 27.457 73.4576V70.9621C27.457 70.9376 27.4693 70.9254 27.4937 70.9254H27.9195ZM27.9195 73.1714C27.9635 73.1714 27.9965 73.1585 28.0185 73.1328C28.0406 73.1071 28.0516 73.0759 28.0516 73.0392V71.3804C28.0516 71.3437 28.0406 71.3125 28.0185 71.2869C27.9965 71.2612 27.9635 71.2483 27.9195 71.2483H27.7873V73.1714H27.9195Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M29.6448 73.1714C29.6692 73.1714 29.6815 73.1836 29.6815 73.2081V73.4576C29.6815 73.4821 29.6692 73.4943 29.6448 73.4943H28.8741C28.8496 73.4943 28.8374 73.4821 28.8374 73.4576V70.9621C28.8374 70.9376 28.8496 70.9254 28.8741 70.9254H29.6228C29.6472 70.9254 29.6595 70.9376 29.6595 70.9621V71.2116C29.6595 71.2361 29.6472 71.2483 29.6228 71.2483H29.1677V72.0117H29.5567C29.5812 72.0117 29.5934 72.0239 29.5934 72.0484V72.2979C29.5934 72.3224 29.5812 72.3346 29.5567 72.3346H29.1677V73.1714H29.6448Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M30.9874 70.9254C31.0155 70.9254 31.0278 70.9401 31.0241 70.9694L30.6938 73.465C30.6901 73.4845 30.6779 73.4943 30.6571 73.4943H30.3708C30.35 73.4943 30.3378 73.4845 30.3341 73.465L30.0039 70.9694C30.0002 70.9401 30.0124 70.9254 30.0406 70.9254H30.3121C30.3341 70.9254 30.3464 70.9376 30.3488 70.9621L30.514 72.6888L30.6791 70.9621C30.6816 70.9376 30.6938 70.9254 30.7158 70.9254H30.9874Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M32.2277 73.1714C32.2522 73.1714 32.2644 73.1836 32.2644 73.2081V73.4576C32.2644 73.4821 32.2522 73.4943 32.2277 73.4943H31.457C31.4326 73.4943 31.4203 73.4821 31.4203 73.4576V70.9621C31.4203 70.9376 31.4326 70.9254 31.457 70.9254H32.2057C32.2302 70.9254 32.2424 70.9376 32.2424 70.9621V71.2116C32.2424 71.2361 32.2302 71.2483 32.2057 71.2483H31.7506V72.0117H32.1396C32.1641 72.0117 32.1763 72.0239 32.1763 72.0484V72.2979C32.1763 72.3224 32.1641 72.3346 32.1396 72.3346H31.7506V73.1714H32.2277Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M33.4848 73.1714C33.5092 73.1714 33.5215 73.1836 33.5215 73.2081V73.4576C33.5215 73.4821 33.5092 73.4943 33.4848 73.4943H32.7141C32.6896 73.4943 32.6774 73.4821 32.6774 73.4576V70.9621C32.6774 70.9376 32.6896 70.9254 32.7141 70.9254H32.971C32.9955 70.9254 33.0077 70.9376 33.0077 70.9621V73.1714H33.4848Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M34.0274 71.0208C34.1105 70.9327 34.2231 70.8887 34.365 70.8887C34.5069 70.8887 34.6194 70.9327 34.7026 71.0208C34.7858 71.1089 34.8274 71.2165 34.8274 71.3437V73.0759C34.8274 73.2032 34.7858 73.3108 34.7026 73.3989C34.6194 73.487 34.5069 73.531 34.365 73.531C34.2231 73.531 34.1105 73.487 34.0274 73.3989C33.9442 73.3108 33.9026 73.2032 33.9026 73.0759V71.3437C33.9026 71.2165 33.9442 71.1089 34.0274 71.0208ZM34.2659 73.1695C34.2879 73.1952 34.3209 73.2081 34.365 73.2081C34.409 73.2081 34.4421 73.1952 34.4641 73.1695C34.4861 73.1438 34.4971 73.1126 34.4971 73.0759V71.3437C34.4971 71.307 34.4861 71.2758 34.4641 71.2502C34.4421 71.2245 34.409 71.2116 34.365 71.2116C34.3209 71.2116 34.2879 71.2245 34.2659 71.2502C34.2439 71.2758 34.2329 71.307 34.2329 71.3437V73.0759C34.2329 73.1126 34.2439 73.1438 34.2659 73.1695Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M35.7457 70.9254C35.8876 70.9254 36.0001 70.9694 36.0833 71.0575C36.1665 71.1456 36.2081 71.2532 36.2081 71.3804V71.8796C36.2081 72.0068 36.1665 72.1144 36.0833 72.2025C36.0001 72.2906 35.8876 72.3346 35.7457 72.3346H35.6136V73.4576C35.6136 73.4821 35.6013 73.4943 35.5769 73.4943H35.32C35.2955 73.4943 35.2833 73.4821 35.2833 73.4576V70.9621C35.2833 70.9376 35.2955 70.9254 35.32 70.9254H35.7457ZM35.7457 72.0117C35.7897 72.0117 35.8227 71.9988 35.8448 71.9731C35.8668 71.9474 35.8778 71.9163 35.8778 71.8796V71.3804C35.8778 71.3437 35.8668 71.3125 35.8448 71.2869C35.8227 71.2612 35.7897 71.2483 35.7457 71.2483H35.6136V72.0117H35.7457Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M39.333 73.1714C39.3575 73.1714 39.3697 73.1836 39.3697 73.2081V73.4576C39.3697 73.4821 39.3575 73.4943 39.333 73.4943H38.5623C38.5379 73.4943 38.5256 73.4821 38.5256 73.4576V70.9621C38.5256 70.9376 38.5379 70.9254 38.5623 70.9254H39.311C39.3355 70.9254 39.3477 70.9376 39.3477 70.9621V71.2116C39.3477 71.2361 39.3355 71.2483 39.311 71.2483H38.8559V72.0117H39.245C39.2694 72.0117 39.2817 72.0239 39.2817 72.0484V72.2979C39.2817 72.3224 39.2694 72.3346 39.245 72.3346H38.8559V73.1714H39.333Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M40.7075 70.9254C40.732 70.9254 40.7442 70.9376 40.7442 70.9621V73.4576C40.7442 73.4821 40.732 73.4943 40.7075 73.4943H40.4506C40.4311 73.4943 40.4188 73.4845 40.4139 73.465L40.113 72.1016V73.4576C40.113 73.4821 40.1008 73.4943 40.0763 73.4943H39.8194C39.7949 73.4943 39.7827 73.4821 39.7827 73.4576V70.9621C39.7827 70.9376 39.7949 70.9254 39.8194 70.9254H40.0836C40.0995 70.9254 40.1093 70.9327 40.113 70.9474L40.4139 72.3475V70.9621C40.4139 70.9376 40.4262 70.9254 40.4506 70.9254H40.7075Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M42.0367 70.9254C42.0612 70.9254 42.0734 70.9376 42.0734 70.9621V71.219C42.0734 71.2434 42.0612 71.2557 42.0367 71.2557H41.7725V73.4576C41.7725 73.4821 41.7603 73.4943 41.7358 73.4943H41.4789C41.4544 73.4943 41.4422 73.4821 41.4422 73.4576V71.2557H41.178C41.1535 71.2557 41.1413 71.2434 41.1413 71.219V70.9621C41.1413 70.9376 41.1535 70.9254 41.178 70.9254H42.0367Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M44.1864 73.1714C44.2109 73.1714 44.2231 73.1836 44.2231 73.2081V73.4576C44.2231 73.4821 44.2109 73.4943 44.1864 73.4943H43.4157C43.3912 73.4943 43.379 73.4821 43.379 73.4576V70.9621C43.379 70.9376 43.3912 70.9254 43.4157 70.9254H44.1644C44.1888 70.9254 44.2011 70.9376 44.2011 70.9621V71.2116C44.2011 71.2361 44.1888 71.2483 44.1644 71.2483H43.7093V72.0117H44.0983C44.1228 72.0117 44.135 72.0239 44.135 72.0484V72.2979C44.135 72.3224 44.1228 72.3346 44.0983 72.3346H43.7093V73.1714H44.1864Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M45.0985 70.9254C45.2404 70.9254 45.3529 70.9694 45.4361 71.0575C45.5193 71.1456 45.5609 71.2532 45.5609 71.3804V73.0392C45.5609 73.1665 45.5193 73.2741 45.4361 73.3622C45.3529 73.4503 45.2404 73.4943 45.0985 73.4943H44.6728C44.6483 73.4943 44.6361 73.4821 44.6361 73.4576V70.9621C44.6361 70.9376 44.6483 70.9254 44.6728 70.9254H45.0985ZM45.0985 73.1714C45.1425 73.1714 45.1756 73.1585 45.1976 73.1328C45.2196 73.1071 45.2306 73.0759 45.2306 73.0392V71.3804C45.2306 71.3437 45.2196 71.3125 45.1976 71.2869C45.1756 71.2612 45.1425 71.2483 45.0985 71.2483H44.9664V73.1714H45.0985Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M46.0531 73.4943C46.0287 73.4943 46.0164 73.4821 46.0164 73.4576V70.9621C46.0164 70.9376 46.0287 70.9254 46.0531 70.9254H46.31C46.3345 70.9254 46.3467 70.9376 46.3467 70.9621V73.4576C46.3467 73.4821 46.3345 73.4943 46.31 73.4943H46.0531Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M47.6397 70.9254C47.6641 70.9254 47.6764 70.9376 47.6764 70.9621V71.219C47.6764 71.2434 47.6641 71.2557 47.6397 71.2557H47.3754V73.4576C47.3754 73.4821 47.3632 73.4943 47.3387 73.4943H47.0818C47.0574 73.4943 47.0451 73.4821 47.0451 73.4576V71.2557H46.7809C46.7564 71.2557 46.7442 71.2434 46.7442 71.219V70.9621C46.7442 70.9376 46.7564 70.9254 46.7809 70.9254H47.6397Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M48.1085 73.4943C48.084 73.4943 48.0718 73.4821 48.0718 73.4576V70.9621C48.0718 70.9376 48.084 70.9254 48.1085 70.9254H48.3654C48.3899 70.9254 48.4021 70.9376 48.4021 70.9621V73.4576C48.4021 73.4821 48.3899 73.4943 48.3654 73.4943H48.1085Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M48.9831 71.0208C49.0663 70.9327 49.1788 70.8887 49.3207 70.8887C49.4626 70.8887 49.5752 70.9327 49.6584 71.0208C49.7415 71.1089 49.7831 71.2165 49.7831 71.3437V73.0759C49.7831 73.2032 49.7415 73.3108 49.6584 73.3989C49.5752 73.487 49.4626 73.531 49.3207 73.531C49.1788 73.531 49.0663 73.487 48.9831 73.3989C48.8999 73.3108 48.8583 73.2032 48.8583 73.0759V71.3437C48.8583 71.2165 48.8999 71.1089 48.9831 71.0208ZM49.2216 73.1695C49.2437 73.1952 49.2767 73.2081 49.3207 73.2081C49.3648 73.2081 49.3978 73.1952 49.4198 73.1695C49.4418 73.1438 49.4528 73.1126 49.4528 73.0759V71.3437C49.4528 71.307 49.4418 71.2758 49.4198 71.2502C49.3978 71.2245 49.3648 71.2116 49.3207 71.2116C49.2767 71.2116 49.2437 71.2245 49.2216 71.2502C49.1996 71.2758 49.1886 71.307 49.1886 71.3437V73.0759C49.1886 73.1126 49.1996 73.1438 49.2216 73.1695Z"
                        fill="#FDFDFD"
                      />
                      <path
                        d="M51.1638 70.9254C51.1883 70.9254 51.2005 70.9376 51.2005 70.9621V73.4576C51.2005 73.4821 51.1883 73.4943 51.1638 73.4943H50.9069C50.8874 73.4943 50.8751 73.4845 50.8702 73.465L50.5693 72.1016V73.4576C50.5693 73.4821 50.5571 73.4943 50.5326 73.4943H50.2757C50.2512 73.4943 50.239 73.4821 50.239 73.4576V70.9621C50.239 70.9376 50.2512 70.9254 50.2757 70.9254H50.5399C50.5559 70.9254 50.5656 70.9327 50.5693 70.9474L50.8702 72.3475V70.9621C50.8702 70.9376 50.8825 70.9254 50.9069 70.9254H51.1638Z"
                        fill="#FDFDFD"
                      />
                    </g>
                    <g filter="url(#filter4_i_804_137667)">
                      <path
                        d="M22.4992 70.9453C22.5237 70.9453 22.5359 70.9575 22.5359 70.982V73.4776C22.5359 73.502 22.5237 73.5143 22.4992 73.5143H22.2423C22.2178 73.5143 22.2056 73.502 22.2056 73.4776V72.3289L21.9707 73.4849C21.9646 73.5045 21.9524 73.5143 21.934 73.5143H21.8753C21.857 73.5143 21.8447 73.5045 21.8386 73.4849L21.6037 72.3289V73.4776C21.6037 73.502 21.5915 73.5143 21.567 73.5143H21.3101C21.2857 73.5143 21.2734 73.502 21.2734 73.4776V70.982C21.2734 70.9575 21.2857 70.9453 21.3101 70.9453H21.5744C21.5915 70.9453 21.6013 70.9527 21.6037 70.9673L21.9047 72.6188L22.2056 70.9673C22.208 70.9527 22.2178 70.9453 22.235 70.9453H22.4992Z"
                        fill="#FDFDFD"
                      />
                    </g>
                    <g filter="url(#filter5_i_804_137667)">
                      <path
                        d="M37.9679 70.9453C37.9924 70.9453 38.0046 70.9575 38.0046 70.982V73.4776C38.0046 73.502 37.9924 73.5143 37.9679 73.5143H37.711C37.6866 73.5143 37.6743 73.502 37.6743 73.4776V72.3289L37.4395 73.4849C37.4334 73.5045 37.4211 73.5143 37.4028 73.5143H37.3441C37.3257 73.5143 37.3135 73.5045 37.3074 73.4849L37.0725 72.3289V73.4776C37.0725 73.502 37.0602 73.5143 37.0358 73.5143H36.7789C36.7544 73.5143 36.7422 73.502 36.7422 73.4776V70.982C36.7422 70.9575 36.7544 70.9453 36.7789 70.9453H37.0431C37.0602 70.9453 37.07 70.9527 37.0725 70.9673L37.3734 72.6188L37.6743 70.9673C37.6768 70.9527 37.6866 70.9453 37.7037 70.9453H37.9679Z"
                        fill="#FDFDFD"
                      />
                    </g>
                    <g filter="url(#filter6_i_804_137667)">
                      <path
                        d="M16.4022 24.6496C16.8273 25.1119 17.0398 25.6648 17.0398 26.308V29.444C17.0398 30.1409 16.7906 30.7305 16.2923 31.213C15.794 31.6954 15.1199 31.9367 14.2699 31.9367H11.7198C11.5733 31.9367 11.5 31.8696 11.5 31.7356V18.0661C11.5 17.9321 11.5733 17.8651 11.7198 17.8651H14.2699C15.1126 17.8651 15.7684 18.1063 16.2374 18.5888C16.7137 19.0645 16.9518 19.6542 16.9518 20.3578V23.0917C16.9518 23.6947 16.7686 24.214 16.4022 24.6496ZM13.4785 19.6341V23.8153H14.1819C14.4457 23.8153 14.6436 23.745 14.7755 23.6043C14.9074 23.4636 14.9733 23.2927 14.9733 23.0917V20.3578C14.9733 19.8753 14.7389 19.6341 14.2699 19.6341H13.4785ZM14.2699 30.1677C14.5337 30.1677 14.7315 30.0973 14.8634 29.9566C14.9953 29.8159 15.0613 29.645 15.0613 29.444V26.308C15.0613 26.107 14.9953 25.9361 14.8634 25.7954C14.7315 25.6547 14.5337 25.5843 14.2699 25.5843H13.4785V30.1677H14.2699Z"
                        fill="url(#paint3_radial_804_137667)"
                      />
                      <path
                        d="M24.6487 31.6552C24.6707 31.7356 24.6523 31.8026 24.5937 31.8562C24.5424 31.9099 24.4728 31.9367 24.3849 31.9367H22.89C22.7801 31.9367 22.7068 31.883 22.6702 31.7758L20.7247 25.5843H20.6917V31.7356C20.6917 31.8696 20.6184 31.9367 20.4719 31.9367H18.9331C18.7865 31.9367 18.7132 31.8696 18.7132 31.7356V18.0661C18.7132 17.9321 18.7865 17.8651 18.9331 17.8651H21.4831C22.3331 17.8651 23.0073 18.1063 23.5056 18.5888C24.0038 19.0712 24.253 19.6609 24.253 20.3578V23.0917C24.253 23.5942 24.1138 24.0532 23.8353 24.4687C23.5642 24.8774 23.1795 25.179 22.6812 25.3733L24.6487 31.6552ZM20.6917 19.6341V23.8153H21.4831C21.7469 23.8153 21.9448 23.745 22.0767 23.6043C22.2086 23.4636 22.2745 23.2927 22.2745 23.0917V20.3578C22.2745 20.1567 22.2086 19.9859 22.0767 19.8452C21.9448 19.7044 21.7469 19.6341 21.4831 19.6341H20.6917Z"
                        fill="url(#paint4_radial_804_137667)"
                      />
                      <path
                        d="M26.215 31.9367C26.0684 31.9367 25.9951 31.8696 25.9951 31.7356V18.0661C25.9951 17.9321 26.0684 17.8651 26.215 17.8651H27.7538C27.9004 17.8651 27.9736 17.9321 27.9736 18.0661V31.7356C27.9736 31.8696 27.9004 31.9367 27.7538 31.9367H26.215Z"
                        fill="url(#paint5_radial_804_137667)"
                      />
                      <path
                        d="M32.509 17.8651C33.3591 17.8651 34.0332 18.1063 34.5315 18.5888C35.0298 19.0712 35.2789 19.6609 35.2789 20.3578V29.444C35.2789 30.1409 35.0298 30.7305 34.5315 31.213C34.0332 31.6954 33.3591 31.9367 32.509 31.9367H29.959C29.8124 31.9367 29.7392 31.8696 29.7392 31.7356V18.0661C29.7392 17.9321 29.8124 17.8651 29.959 17.8651H32.509ZM32.509 30.1677C32.7728 30.1677 32.9707 30.0973 33.1026 29.9566C33.2345 29.8159 33.3004 29.645 33.3004 29.444V20.3578C33.3004 20.1567 33.2345 19.9859 33.1026 19.8452C32.9707 19.7044 32.7728 19.6341 32.509 19.6341H31.7176V30.1677H32.509Z"
                        fill="url(#paint6_radial_804_137667)"
                      />
                      <path
                        d="M40.6456 21.5639C40.499 21.5639 40.4257 21.4969 40.4257 21.3629V20.1567C40.4257 19.9557 40.3598 19.7848 40.2279 19.6441C40.096 19.5034 39.8981 19.4331 39.6343 19.4331C39.3705 19.4331 39.1727 19.5034 39.0408 19.6441C38.9089 19.7848 38.8429 19.9557 38.8429 20.1567V29.645C38.8429 29.846 38.9089 30.0169 39.0408 30.1576C39.1727 30.2983 39.3705 30.3687 39.6343 30.3687C39.8981 30.3687 40.096 30.2983 40.2279 30.1576C40.3598 30.0169 40.4257 29.846 40.4257 29.645V25.5843H39.8542C39.7076 25.5843 39.6343 25.5173 39.6343 25.3833V24.0164C39.6343 23.8824 39.7076 23.8153 39.8542 23.8153H42.1844C42.3309 23.8153 42.4042 23.8824 42.4042 24.0164V29.645C42.4042 30.3419 42.1551 30.9315 41.6568 31.414C41.1585 31.8965 40.4843 32.1377 39.6343 32.1377C38.7843 32.1377 38.1102 31.8965 37.6119 31.414C37.1136 30.9315 36.8645 30.3419 36.8645 29.645V20.1567C36.8645 19.4599 37.1136 18.8702 37.6119 18.3877C38.1102 17.9053 38.7843 17.6641 39.6343 17.6641C40.4843 17.6641 41.1585 17.9053 41.6568 18.3877C42.1551 18.8702 42.4042 19.4599 42.4042 20.1567V21.3629C42.4042 21.4969 42.3309 21.5639 42.1844 21.5639H40.6456Z"
                        fill="url(#paint7_radial_804_137667)"
                      />
                      <path
                        d="M48.916 30.1677C49.0626 30.1677 49.1359 30.2347 49.1359 30.3687V31.7356C49.1359 31.8696 49.0626 31.9367 48.916 31.9367H44.2996C44.153 31.9367 44.0797 31.8696 44.0797 31.7356V18.0661C44.0797 17.9321 44.153 17.8651 44.2996 17.8651H48.7841C48.9307 17.8651 49.004 17.9321 49.004 18.0661V19.4331C49.004 19.5671 48.9307 19.6341 48.7841 19.6341H46.0582V23.8153H48.3884C48.535 23.8153 48.6083 23.8824 48.6083 24.0164V25.3833C48.6083 25.5173 48.535 25.5843 48.3884 25.5843H46.0582V30.1677H48.916Z"
                        fill="url(#paint8_radial_804_137667)"
                      />
                      <path
                        d="M56.4899 31.6552C56.5119 31.7356 56.4936 31.8026 56.435 31.8562C56.3837 31.9099 56.3141 31.9367 56.2261 31.9367H54.7313C54.6214 31.9367 54.5481 31.883 54.5114 31.7758L52.5659 25.5843H52.5329V31.7356C52.5329 31.8696 52.4597 31.9367 52.3131 31.9367H50.7743C50.6277 31.9367 50.5545 31.8696 50.5545 31.7356V18.0661C50.5545 17.9321 50.6277 17.8651 50.7743 17.8651H53.3243C54.1744 17.8651 54.8485 18.1063 55.3468 18.5888C55.8451 19.0712 56.0942 19.6609 56.0942 20.3578V23.0917C56.0942 23.5942 55.955 24.0532 55.6765 24.4687C55.4054 24.8774 55.0207 25.179 54.5224 25.3733L56.4899 31.6552ZM52.5329 19.6341V23.8153H53.3243C53.5881 23.8153 53.786 23.745 53.9179 23.6043C54.0498 23.4636 54.1157 23.2927 54.1157 23.0917V20.3578C54.1157 20.1567 54.0498 19.9859 53.9179 19.8452C53.786 19.7044 53.5881 19.6341 53.3243 19.6341H52.5329Z"
                        fill="url(#paint9_radial_804_137667)"
                      />
                    </g>
                    <path
                      d="M22.6126 35.3538C22.6458 35.3538 22.6602 35.3711 22.6558 35.4057L22.2645 38.3465C22.2601 38.3696 22.2457 38.3811 22.2212 38.3811H21.8861C21.876 38.3811 21.8688 38.3811 21.8644 38.3811C21.8601 38.3796 21.8558 38.3768 21.8515 38.3724C21.8471 38.3667 21.8442 38.358 21.8428 38.3465L21.6525 36.4955L21.4622 38.3465C21.4608 38.358 21.4579 38.3667 21.4536 38.3724C21.4493 38.3768 21.4449 38.3796 21.4406 38.3811C21.4363 38.3811 21.4291 38.3811 21.419 38.3811H21.0838C21.0593 38.3811 21.0449 38.3696 21.0406 38.3465L20.6492 35.4057C20.6449 35.3711 20.6593 35.3538 20.6924 35.3538H21.0146C21.0391 35.3538 21.0535 35.3682 21.0579 35.397L21.2568 37.4837L21.4449 35.397C21.4478 35.3682 21.4622 35.3538 21.4882 35.3538H21.8169C21.8428 35.3538 21.8572 35.3682 21.8601 35.397L22.0482 37.4837L22.2472 35.397C22.2515 35.3682 22.2659 35.3538 22.2904 35.3538H22.6126Z"
                      fill="#111111"
                    />
                    <path
                      d="M24.2123 35.3538C24.2412 35.3538 24.2556 35.3682 24.2556 35.397V38.3378C24.2556 38.3667 24.2412 38.3811 24.2123 38.3811H23.9096C23.8808 38.3811 23.8664 38.3667 23.8664 38.3378V37.0145H23.5117V38.3378C23.5117 38.3667 23.4973 38.3811 23.4685 38.3811H23.1658C23.1369 38.3811 23.1225 38.3667 23.1225 38.3378V35.397C23.1225 35.3682 23.1369 35.3538 23.1658 35.3538H23.4685C23.4973 35.3538 23.5117 35.3682 23.5117 35.397V36.6339H23.8664V35.397C23.8664 35.3682 23.8808 35.3538 23.9096 35.3538H24.2123Z"
                      fill="#111111"
                    />
                    <path
                      d="M25.8998 38.3292C25.9041 38.3638 25.8897 38.3811 25.8565 38.3811H25.5365C25.5106 38.3811 25.4961 38.3667 25.4933 38.3378L25.4543 37.9313H25.1689L25.13 38.3378C25.1271 38.3667 25.1127 38.3811 25.0867 38.3811H24.7667C24.7335 38.3811 24.7191 38.3638 24.7235 38.3292L25.1127 35.3884C25.117 35.3653 25.1314 35.3538 25.1559 35.3538H25.4673C25.4918 35.3538 25.5062 35.3653 25.5106 35.3884L25.8998 38.3292ZM25.2057 37.5507H25.4176L25.3116 36.4393L25.2057 37.5507Z"
                      fill="#111111"
                    />
                    <path
                      d="M27.206 35.3538C27.2348 35.3538 27.2492 35.3682 27.2492 35.397V35.6998C27.2492 35.7286 27.2348 35.743 27.206 35.743H26.8946V38.3378C26.8946 38.3667 26.8802 38.3811 26.8513 38.3811H26.5486C26.5198 38.3811 26.5054 38.3667 26.5054 38.3378V35.743H26.194C26.1652 35.743 26.1507 35.7286 26.1507 35.6998V35.397C26.1507 35.3682 26.1652 35.3538 26.194 35.3538H27.206Z"
                      fill="#111111"
                    />
                    <path
                      d="M30.6646 35.3538C30.6978 35.3538 30.7122 35.3711 30.7079 35.4057L30.3165 38.3465C30.3122 38.3696 30.2978 38.3811 30.2733 38.3811H29.9381C29.928 38.3811 29.9208 38.3811 29.9165 38.3811C29.9122 38.3796 29.9078 38.3768 29.9035 38.3724C29.8992 38.3667 29.8963 38.358 29.8949 38.3465L29.7046 36.4955L29.5143 38.3465C29.5128 38.358 29.51 38.3667 29.5056 38.3724C29.5013 38.3768 29.497 38.3796 29.4927 38.3811C29.4883 38.3811 29.4811 38.3811 29.471 38.3811H29.1359C29.1114 38.3811 29.0969 38.3696 29.0926 38.3465L28.7012 35.4057C28.6969 35.3711 28.7113 35.3538 28.7445 35.3538H29.0667C29.0912 35.3538 29.1056 35.3682 29.1099 35.397L29.3089 37.4837L29.497 35.397C29.4999 35.3682 29.5143 35.3538 29.5402 35.3538H29.8689C29.8949 35.3538 29.9093 35.3682 29.9122 35.397L30.1003 37.4837L30.2992 35.397C30.3035 35.3682 30.318 35.3538 30.3425 35.3538H30.6646Z"
                      fill="#111111"
                    />
                    <path
                      d="M31.284 35.4662C31.3821 35.3624 31.5147 35.3105 31.6819 35.3105C31.8491 35.3105 31.9817 35.3624 32.0798 35.4662C32.1778 35.57 32.2268 35.6969 32.2268 35.8468V37.8881C32.2268 38.038 32.1778 38.1648 32.0798 38.2686C31.9817 38.3724 31.8491 38.4243 31.6819 38.4243C31.5147 38.4243 31.3821 38.3724 31.284 38.2686C31.186 38.1648 31.137 38.038 31.137 37.8881V35.8468C31.137 35.6969 31.186 35.57 31.284 35.4662ZM31.5651 37.9983C31.5911 38.0286 31.63 38.0438 31.6819 38.0438C31.7338 38.0438 31.7727 38.0286 31.7987 37.9983C31.8246 37.9681 31.8376 37.9313 31.8376 37.8881V35.8468C31.8376 35.8036 31.8246 35.7668 31.7987 35.7365C31.7727 35.7063 31.7338 35.6911 31.6819 35.6911C31.63 35.6911 31.5911 35.7063 31.5651 35.7365C31.5392 35.7668 31.5262 35.8036 31.5262 35.8468V37.8881C31.5262 37.9313 31.5392 37.9681 31.5651 37.9983Z"
                      fill="#111111"
                    />
                    <path
                      d="M33.9317 38.3205C33.936 38.3378 33.9324 38.3523 33.9209 38.3638C33.9108 38.3753 33.8971 38.3811 33.8798 38.3811H33.5857C33.5641 38.3811 33.5497 38.3696 33.5425 38.3465L33.1597 37.0145H33.1532V38.3378C33.1532 38.3667 33.1388 38.3811 33.11 38.3811H32.8073C32.7784 38.3811 32.764 38.3667 32.764 38.3378V35.397C32.764 35.3682 32.7784 35.3538 32.8073 35.3538H33.3089C33.4762 35.3538 33.6088 35.4057 33.7068 35.5095C33.8048 35.6133 33.8538 35.7401 33.8538 35.8901V36.4782C33.8538 36.5863 33.8265 36.6851 33.7717 36.7745C33.7183 36.8624 33.6427 36.9273 33.5446 36.9691L33.9317 38.3205ZM33.1532 35.7344V36.6339H33.3089C33.3608 36.6339 33.3998 36.6188 33.4257 36.5885C33.4516 36.5582 33.4646 36.5215 33.4646 36.4782V35.8901C33.4646 35.8468 33.4516 35.81 33.4257 35.7798C33.3998 35.7495 33.3608 35.7344 33.3089 35.7344H33.1532Z"
                      fill="#111111"
                    />
                    <path
                      d="M35.3556 38.0005C35.3844 38.0005 35.3988 38.0149 35.3988 38.0438V38.3378C35.3988 38.3667 35.3844 38.3811 35.3556 38.3811H34.4474C34.4186 38.3811 34.4042 38.3667 34.4042 38.3378V35.397C34.4042 35.3682 34.4186 35.3538 34.4474 35.3538H34.7501C34.779 35.3538 34.7934 35.3682 34.7934 35.397V38.0005H35.3556Z"
                      fill="#111111"
                    />
                    <path
                      d="M36.4101 35.3538C36.5774 35.3538 36.71 35.4057 36.808 35.5095C36.906 35.6133 36.9551 35.7401 36.9551 35.8901V37.8448C36.9551 37.9947 36.906 38.1216 36.808 38.2254C36.71 38.3292 36.5774 38.3811 36.4101 38.3811H35.9085C35.8797 38.3811 35.8652 38.3667 35.8652 38.3378V35.397C35.8652 35.3682 35.8797 35.3538 35.9085 35.3538H36.4101ZM36.4101 38.0005C36.462 38.0005 36.501 37.9854 36.5269 37.9551C36.5529 37.9248 36.5658 37.8881 36.5658 37.8448V35.8901C36.5658 35.8468 36.5529 35.81 36.5269 35.7798C36.501 35.7495 36.462 35.7344 36.4101 35.7344H36.2545V38.0005H36.4101Z"
                      fill="#111111"
                    />
                    <path
                      d="M37.4919 37.0145C37.463 37.0145 37.4486 37.0001 37.4486 36.9712V36.6772C37.4486 36.6483 37.463 36.6339 37.4919 36.6339H38.4519C38.4808 36.6339 38.4952 36.6483 38.4952 36.6772V36.9712C38.4952 37.0001 38.4808 37.0145 38.4519 37.0145H37.4919Z"
                      fill="#111111"
                    />
                    <path
                      d="M39.7335 36.1495C39.7047 36.1495 39.6903 36.1351 39.6903 36.1063V35.8468C39.6903 35.8036 39.6773 35.7668 39.6514 35.7365C39.6254 35.7063 39.5865 35.6911 39.5346 35.6911C39.4827 35.6911 39.4438 35.7063 39.4178 35.7365C39.3919 35.7668 39.3789 35.8036 39.3789 35.8468V37.8881C39.3789 37.9313 39.3919 37.9681 39.4178 37.9983C39.4438 38.0286 39.4827 38.0438 39.5346 38.0438C39.5865 38.0438 39.6254 38.0286 39.6514 37.9983C39.6773 37.9681 39.6903 37.9313 39.6903 37.8881V37.6286C39.6903 37.5998 39.7047 37.5853 39.7335 37.5853H40.0363C40.0651 37.5853 40.0795 37.5998 40.0795 37.6286V37.8881C40.0795 38.038 40.0305 38.1648 39.9325 38.2686C39.8345 38.3724 39.7018 38.4243 39.5346 38.4243C39.3674 38.4243 39.2348 38.3724 39.1367 38.2686C39.0387 38.1648 38.9897 38.038 38.9897 37.8881V35.8468C38.9897 35.6969 39.0387 35.57 39.1367 35.4662C39.2348 35.3624 39.3674 35.3105 39.5346 35.3105C39.7018 35.3105 39.8345 35.3624 39.9325 35.4662C40.0305 35.57 40.0795 35.6969 40.0795 35.8468V36.1063C40.0795 36.1351 40.0651 36.1495 40.0363 36.1495H39.7335Z"
                      fill="#111111"
                    />
                    <path
                      d="M41.5682 38.0005C41.597 38.0005 41.6114 38.0149 41.6114 38.0438V38.3378C41.6114 38.3667 41.597 38.3811 41.5682 38.3811H40.66C40.6311 38.3811 40.6167 38.3667 40.6167 38.3378V35.397C40.6167 35.3682 40.6311 35.3538 40.66 35.3538H40.9627C40.9915 35.3538 41.006 35.3682 41.006 35.397V38.0005H41.5682Z"
                      fill="#111111"
                    />
                    <path
                      d="M43.1676 38.3292C43.172 38.3638 43.1575 38.3811 43.1244 38.3811H42.8044C42.7784 38.3811 42.764 38.3667 42.7611 38.3378L42.7222 37.9313H42.4368L42.3978 38.3378C42.3949 38.3667 42.3805 38.3811 42.3546 38.3811H42.0346C42.0014 38.3811 41.987 38.3638 41.9913 38.3292L42.3805 35.3884C42.3849 35.3653 42.3993 35.3538 42.4238 35.3538H42.7352C42.7597 35.3538 42.7741 35.3653 42.7784 35.3884L43.1676 38.3292ZM42.4735 37.5507H42.6854L42.5795 36.4393L42.4735 37.5507Z"
                      fill="#111111"
                    />
                    <path
                      d="M44.3052 36.7117C44.383 36.7997 44.4371 36.861 44.4673 36.8955C44.4976 36.9301 44.5315 36.9727 44.569 37.0231C44.6079 37.0736 44.6317 37.106 44.6403 37.1204C44.649 37.1334 44.6583 37.1579 44.6684 37.194C44.68 37.2286 44.6857 37.2552 44.6857 37.274C44.6857 37.2913 44.6857 37.323 44.6857 37.3691V37.8881C44.6857 38.038 44.6367 38.1648 44.5387 38.2686C44.4407 38.3724 44.308 38.4243 44.1408 38.4243C43.9736 38.4243 43.841 38.3724 43.7429 38.2686C43.6449 38.1648 43.5959 38.038 43.5959 37.8881V37.6286C43.5959 37.5998 43.6103 37.5853 43.6392 37.5853H43.9419C43.9707 37.5853 43.9851 37.5998 43.9851 37.6286V37.8881C43.9851 37.9313 43.9981 37.9681 44.0241 37.9983C44.05 38.0286 44.0889 38.0438 44.1408 38.0438C44.1927 38.0438 44.2316 38.0286 44.2576 37.9983C44.2835 37.9681 44.2965 37.9313 44.2965 37.8881V37.4124C44.2965 37.3662 44.2915 37.3302 44.2814 37.3042C44.2727 37.2768 44.2461 37.2343 44.2014 37.1767C44.1567 37.119 44.0788 37.0303 43.9678 36.9107C43.7891 36.719 43.6824 36.5957 43.6478 36.5409C43.6132 36.4847 43.5959 36.4004 43.5959 36.2879V35.8468C43.5959 35.6969 43.6435 35.57 43.7386 35.4662C43.8352 35.3624 43.9664 35.3105 44.1322 35.3105C44.2979 35.3105 44.4284 35.3624 44.5236 35.4662C44.6201 35.57 44.6684 35.6969 44.6684 35.8468V36.1063C44.6684 36.1351 44.654 36.1495 44.6252 36.1495H44.3225C44.2936 36.1495 44.2792 36.1351 44.2792 36.1063V35.8468C44.2792 35.8021 44.2677 35.7654 44.2446 35.7365C44.2215 35.7063 44.1841 35.6911 44.1322 35.6911C44.0803 35.6911 44.0428 35.7063 44.0197 35.7365C43.9967 35.7654 43.9851 35.8021 43.9851 35.8468V36.2187C43.9851 36.2389 43.9851 36.2533 43.9851 36.262C43.9866 36.2706 43.9873 36.2814 43.9873 36.2944C43.9873 36.3074 43.9895 36.3182 43.9938 36.3269C43.9981 36.3355 44.0017 36.3449 44.0046 36.355C44.0075 36.3651 44.014 36.3766 44.0241 36.3896C44.0356 36.4011 44.045 36.4133 44.0522 36.4263C44.0608 36.4379 44.0752 36.4544 44.0954 36.4761C44.1156 36.4977 44.1329 36.5179 44.1473 36.5366C44.1632 36.5539 44.1869 36.5798 44.2187 36.6144C44.2504 36.649 44.2792 36.6815 44.3052 36.7117Z"
                      fill="#111111"
                    />
                    <path
                      d="M45.9149 36.7117C45.9927 36.7997 46.0468 36.861 46.0771 36.8955C46.1073 36.9301 46.1412 36.9727 46.1787 37.0231C46.2176 37.0736 46.2414 37.106 46.2501 37.1204C46.2587 37.1334 46.2681 37.1579 46.2782 37.194C46.2897 37.2286 46.2955 37.2552 46.2955 37.274C46.2955 37.2913 46.2955 37.323 46.2955 37.3691V37.8881C46.2955 38.038 46.2465 38.1648 46.1484 38.2686C46.0504 38.3724 45.9178 38.4243 45.7506 38.4243C45.5833 38.4243 45.4507 38.3724 45.3527 38.2686C45.2547 38.1648 45.2056 38.038 45.2056 37.8881V37.6286C45.2056 37.5998 45.2201 37.5853 45.2489 37.5853H45.5516C45.5804 37.5853 45.5949 37.5998 45.5949 37.6286V37.8881C45.5949 37.9313 45.6078 37.9681 45.6338 37.9983C45.6597 38.0286 45.6987 38.0438 45.7506 38.0438C45.8024 38.0438 45.8414 38.0286 45.8673 37.9983C45.8933 37.9681 45.9062 37.9313 45.9062 37.8881V37.4124C45.9062 37.3662 45.9012 37.3302 45.8911 37.3042C45.8825 37.2768 45.8558 37.2343 45.8111 37.1767C45.7664 37.119 45.6886 37.0303 45.5776 36.9107C45.3988 36.719 45.2921 36.5957 45.2575 36.5409C45.2229 36.4847 45.2056 36.4004 45.2056 36.2879V35.8468C45.2056 35.6969 45.2532 35.57 45.3484 35.4662C45.4449 35.3624 45.5761 35.3105 45.7419 35.3105C45.9077 35.3105 46.0381 35.3624 46.1333 35.4662C46.2299 35.57 46.2782 35.6969 46.2782 35.8468V36.1063C46.2782 36.1351 46.2638 36.1495 46.2349 36.1495H45.9322C45.9034 36.1495 45.8889 36.1351 45.8889 36.1063V35.8468C45.8889 35.8021 45.8774 35.7654 45.8543 35.7365C45.8313 35.7063 45.7938 35.6911 45.7419 35.6911C45.69 35.6911 45.6525 35.7063 45.6295 35.7365C45.6064 35.7654 45.5949 35.8021 45.5949 35.8468V36.2187C45.5949 36.2389 45.5949 36.2533 45.5949 36.262C45.5963 36.2706 45.597 36.2814 45.597 36.2944C45.597 36.3074 45.5992 36.3182 45.6035 36.3269C45.6078 36.3355 45.6114 36.3449 45.6143 36.355C45.6172 36.3651 45.6237 36.3766 45.6338 36.3896C45.6453 36.4011 45.6547 36.4133 45.6619 36.4263C45.6705 36.4379 45.685 36.4544 45.7051 36.4761C45.7253 36.4977 45.7426 36.5179 45.757 36.5366C45.7729 36.5539 45.7967 36.5798 45.8284 36.6144C45.8601 36.649 45.8889 36.6815 45.9149 36.7117Z"
                      fill="#111111"
                    />
                    <path
                      d="M21.3855 43.7384C21.3472 43.7384 21.3281 43.7193 21.3281 43.681V39.7807C21.3281 39.7425 21.3472 39.7234 21.3855 39.7234H21.787C21.8252 39.7234 21.8443 39.7425 21.8443 39.7807V43.681C21.8443 43.7193 21.8252 43.7384 21.787 43.7384H21.3855Z"
                      fill="#111111"
                    />
                    <path
                      d="M24.0257 39.7234C24.064 39.7234 24.0831 39.7425 24.0831 39.7807V43.681C24.0831 43.7193 24.064 43.7384 24.0257 43.7384H23.6242C23.5936 43.7384 23.5745 43.7231 23.5669 43.6925L23.0965 41.5617V43.681C23.0965 43.7193 23.0774 43.7384 23.0392 43.7384H22.6377C22.5994 43.7384 22.5803 43.7193 22.5803 43.681V39.7807C22.5803 39.7425 22.5994 39.7234 22.6377 39.7234H23.0506C23.0755 39.7234 23.0908 39.7348 23.0965 39.7578L23.5669 41.946V39.7807C23.5669 39.7425 23.586 39.7234 23.6242 39.7234H24.0257Z"
                      fill="#111111"
                    />
                    <path
                      d="M26.2637 39.7234C26.302 39.7234 26.3211 39.7425 26.3211 39.7807V43.681C26.3211 43.7193 26.302 43.7384 26.2637 43.7384H25.8622C25.8316 43.7384 25.8125 43.7231 25.8049 43.6925L25.3345 41.5617V43.681C25.3345 43.7193 25.3154 43.7384 25.2772 43.7384H24.8757C24.8374 43.7384 24.8183 43.7193 24.8183 43.681V39.7807C24.8183 39.7425 24.8374 39.7234 24.8757 39.7234H25.2887C25.3135 39.7234 25.3288 39.7348 25.3345 39.7578L25.8049 41.946V39.7807C25.8049 39.7425 25.824 39.7234 25.8622 39.7234H26.2637Z"
                      fill="#111111"
                    />
                    <path
                      d="M27.2284 39.8725C27.3584 39.7348 27.5343 39.666 27.7561 39.666C27.9779 39.666 28.1538 39.7348 28.2838 39.8725C28.4138 40.0102 28.4788 40.1784 28.4788 40.3772V43.0845C28.4788 43.2834 28.4138 43.4516 28.2838 43.5893C28.1538 43.7269 27.9779 43.7957 27.7561 43.7957C27.5343 43.7957 27.3584 43.7269 27.2284 43.5893C27.0984 43.4516 27.0334 43.2834 27.0334 43.0845V40.3772C27.0334 40.1784 27.0984 40.0102 27.2284 39.8725ZM27.6012 43.2308C27.6356 43.2709 27.6873 43.291 27.7561 43.291C27.8249 43.291 27.8765 43.2709 27.911 43.2308C27.9454 43.1906 27.9626 43.1419 27.9626 43.0845V40.3772C27.9626 40.3199 27.9454 40.2711 27.911 40.231C27.8765 40.1908 27.8249 40.1708 27.7561 40.1708C27.6873 40.1708 27.6356 40.1908 27.6012 40.231C27.5668 40.2711 27.5496 40.3199 27.5496 40.3772V43.0845C27.5496 43.1419 27.5668 43.1906 27.6012 43.2308Z"
                      fill="#111111"
                    />
                    <path
                      d="M30.5869 39.7234C30.6308 39.7234 30.65 39.7463 30.6442 39.7922L30.128 43.6925C30.1223 43.7231 30.1031 43.7384 30.0706 43.7384H29.6233C29.5908 43.7384 29.5716 43.7231 29.5659 43.6925L29.0497 39.7922C29.0439 39.7463 29.0631 39.7234 29.107 39.7234H29.5315C29.5659 39.7234 29.585 39.7425 29.5888 39.7807L29.847 42.4794L30.1051 39.7807C30.1089 39.7425 30.128 39.7234 30.1624 39.7234H30.5869Z"
                      fill="#111111"
                    />
                    <path
                      d="M32.5386 43.6696C32.5444 43.7154 32.5252 43.7384 32.4813 43.7384H32.0568C32.0224 43.7384 32.0033 43.7193 31.9995 43.681L31.9478 43.1419H31.5693L31.5177 43.681C31.5138 43.7193 31.4947 43.7384 31.4603 43.7384H31.0359C30.9919 43.7384 30.9728 43.7154 30.9785 43.6696L31.4947 39.7693C31.5005 39.7387 31.5196 39.7234 31.5521 39.7234H31.9651C31.9976 39.7234 32.0167 39.7387 32.0224 39.7693L32.5386 43.6696ZM31.618 42.6371H31.8991L31.7586 41.163L31.618 42.6371Z"
                      fill="#111111"
                    />
                    <path
                      d="M34.271 39.7234C34.3092 39.7234 34.3284 39.7425 34.3284 39.7807V40.1822C34.3284 40.2205 34.3092 40.2396 34.271 40.2396H33.858V43.681C33.858 43.7193 33.8389 43.7384 33.8007 43.7384H33.3992C33.3609 43.7384 33.3418 43.7193 33.3418 43.681V40.2396H32.9288C32.8906 40.2396 32.8715 40.2205 32.8715 40.1822V39.7807C32.8715 39.7425 32.8906 39.7234 32.9288 39.7234H34.271Z"
                      fill="#111111"
                    />
                    <path
                      d="M35.0916 39.8725C35.2216 39.7348 35.3975 39.666 35.6193 39.666C35.841 39.666 36.0169 39.7348 36.1469 39.8725C36.277 40.0102 36.342 40.1784 36.342 40.3772V43.0845C36.342 43.2834 36.277 43.4516 36.1469 43.5893C36.0169 43.7269 35.841 43.7957 35.6193 43.7957C35.3975 43.7957 35.2216 43.7269 35.0916 43.5893C34.9616 43.4516 34.8966 43.2834 34.8966 43.0845V40.3772C34.8966 40.1784 34.9616 40.0102 35.0916 39.8725ZM35.4644 43.2308C35.4988 43.2709 35.5504 43.291 35.6193 43.291C35.6881 43.291 35.7397 43.2709 35.7741 43.2308C35.8085 43.1906 35.8257 43.1419 35.8257 43.0845V40.3772C35.8257 40.3199 35.8085 40.2711 35.7741 40.231C35.7397 40.1908 35.6881 40.1708 35.6193 40.1708C35.5504 40.1708 35.4988 40.1908 35.4644 40.231C35.43 40.2711 35.4128 40.3199 35.4128 40.3772V43.0845C35.4128 43.1419 35.43 43.1906 35.4644 43.2308Z"
                      fill="#111111"
                    />
                    <path
                      d="M38.6031 43.6581C38.6088 43.681 38.6041 43.7002 38.5888 43.7154C38.5754 43.7307 38.5572 43.7384 38.5343 43.7384H38.1442C38.1156 43.7384 38.0964 43.7231 38.0869 43.6925L37.5793 41.9259H37.5707V43.681C37.5707 43.7193 37.5515 43.7384 37.5133 43.7384H37.1118C37.0736 43.7384 37.0544 43.7193 37.0544 43.681V39.7807C37.0544 39.7425 37.0736 39.7234 37.1118 39.7234H37.7771C37.9989 39.7234 38.1748 39.7922 38.3048 39.9299C38.4348 40.0675 38.4999 40.2358 38.4999 40.4346V41.2147C38.4999 41.3581 38.4635 41.489 38.3909 41.6076C38.3201 41.7242 38.2198 41.8102 38.0897 41.8657L38.6031 43.6581ZM37.5707 40.2281V41.4212H37.7771C37.846 41.4212 37.8976 41.4011 37.932 41.3609C37.9664 41.3208 37.9836 41.272 37.9836 41.2147V40.4346C37.9836 40.3772 37.9664 40.3285 37.932 40.2883C37.8976 40.2482 37.846 40.2281 37.7771 40.2281H37.5707Z"
                      fill="#111111"
                    />
                    <path
                      d="M40.1206 41.5244C40.2238 41.641 40.2955 41.7223 40.3356 41.7682C40.3758 41.814 40.4207 41.8705 40.4704 41.9374C40.5221 42.0043 40.5536 42.0473 40.5651 42.0664C40.5765 42.0836 40.589 42.1161 40.6024 42.1639C40.6177 42.2098 40.6253 42.2452 40.6253 42.27C40.6253 42.293 40.6253 42.335 40.6253 42.3962V43.0845C40.6253 43.2834 40.5603 43.4516 40.4303 43.5893C40.3003 43.7269 40.1244 43.7957 39.9026 43.7957C39.6808 43.7957 39.5049 43.7269 39.3749 43.5893C39.2449 43.4516 39.1799 43.2834 39.1799 43.0845V42.7404C39.1799 42.7021 39.199 42.683 39.2373 42.683H39.6388C39.677 42.683 39.6961 42.7021 39.6961 42.7404V43.0845C39.6961 43.1419 39.7133 43.1906 39.7477 43.2308C39.7821 43.2709 39.8338 43.291 39.9026 43.291C39.9714 43.291 40.0231 43.2709 40.0575 43.2308C40.0919 43.1906 40.1091 43.1419 40.1091 43.0845V42.4536C40.1091 42.3924 40.1024 42.3446 40.089 42.3102C40.0775 42.2739 40.0422 42.2175 39.9829 42.141C39.9236 42.0645 39.8204 41.9469 39.6732 41.7882C39.4361 41.534 39.2946 41.3705 39.2487 41.2978C39.2028 41.2233 39.1799 41.1114 39.1799 40.9623V40.3772C39.1799 40.1784 39.243 40.0102 39.3692 39.8725C39.4973 39.7348 39.6713 39.666 39.8911 39.666C40.111 39.666 40.284 39.7348 40.4102 39.8725C40.5383 40.0102 40.6024 40.1784 40.6024 40.3772V40.7214C40.6024 40.7596 40.5832 40.7787 40.545 40.7787H40.1435C40.1053 40.7787 40.0861 40.7596 40.0861 40.7214V40.3772C40.0861 40.318 40.0708 40.2692 40.0403 40.231C40.0097 40.1908 39.96 40.1708 39.8911 40.1708C39.8223 40.1708 39.7726 40.1908 39.742 40.231C39.7114 40.2692 39.6961 40.318 39.6961 40.3772V40.8705C39.6961 40.8973 39.6961 40.9164 39.6961 40.9279C39.698 40.9393 39.699 40.9537 39.699 40.9709C39.699 40.9881 39.7018 41.0024 39.7076 41.0139C39.7133 41.0254 39.7181 41.0378 39.7219 41.0512C39.7257 41.0646 39.7344 41.0799 39.7477 41.0971C39.763 41.1124 39.7755 41.1286 39.785 41.1458C39.7965 41.1611 39.8156 41.1831 39.8424 41.2118C39.8691 41.2405 39.8921 41.2672 39.9112 41.2921C39.9322 41.315 39.9638 41.3495 40.0058 41.3953C40.0479 41.4412 40.0861 41.4842 40.1206 41.5244Z"
                      fill="#111111"
                    />
                    <path
                      d="M43.483 39.7234C43.7047 39.7234 43.8806 39.7922 44.0106 39.9299C44.1407 40.0675 44.2057 40.2358 44.2057 40.4346V43.0272C44.2057 43.226 44.1407 43.3942 44.0106 43.5319C43.8806 43.6696 43.7047 43.7384 43.483 43.7384H42.8176C42.7794 43.7384 42.7603 43.7193 42.7603 43.681V39.7807C42.7603 39.7425 42.7794 39.7234 42.8176 39.7234H43.483ZM43.483 43.2336C43.5518 43.2336 43.6034 43.2136 43.6378 43.1734C43.6722 43.1333 43.6894 43.0845 43.6894 43.0272V40.4346C43.6894 40.3772 43.6722 40.3285 43.6378 40.2883C43.6034 40.2482 43.5518 40.2281 43.483 40.2281H43.2765V43.2336H43.483Z"
                      fill="#111111"
                    />
                    <path
                      d="M45.0897 39.8725C45.2197 39.7348 45.3956 39.666 45.6174 39.666C45.8391 39.666 46.015 39.7348 46.1451 39.8725C46.2751 40.0102 46.3401 40.1784 46.3401 40.3772V43.0845C46.3401 43.2834 46.2751 43.4516 46.1451 43.5893C46.015 43.7269 45.8391 43.7957 45.6174 43.7957C45.3956 43.7957 45.2197 43.7269 45.0897 43.5893C44.9597 43.4516 44.8947 43.2834 44.8947 43.0845V40.3772C44.8947 40.1784 44.9597 40.0102 45.0897 39.8725ZM45.4625 43.2308C45.4969 43.2709 45.5485 43.291 45.6174 43.291C45.6862 43.291 45.7378 43.2709 45.7722 43.2308C45.8066 43.1906 45.8239 43.1419 45.8239 43.0845V40.3772C45.8239 40.3199 45.8066 40.2711 45.7722 40.231C45.7378 40.1908 45.6862 40.1708 45.6174 40.1708C45.5485 40.1708 45.4969 40.1908 45.4625 40.231C45.4281 40.2711 45.4109 40.3199 45.4109 40.3772V43.0845C45.4109 43.1419 45.4281 43.1906 45.4625 43.2308Z"
                      fill="#111111"
                    />
                    <path
                      d="M21.3855 43.7384C21.3472 43.7384 21.3281 43.7193 21.3281 43.681V39.7807C21.3281 39.7425 21.3472 39.7234 21.3855 39.7234H21.787C21.8252 39.7234 21.8443 39.7425 21.8443 39.7807V43.681C21.8443 43.7193 21.8252 43.7384 21.787 43.7384H21.3855Z"
                      stroke="#111111"
                      stroke-width="0.0196169"
                    />
                    <path
                      d="M24.0257 39.7234C24.064 39.7234 24.0831 39.7425 24.0831 39.7807V43.681C24.0831 43.7193 24.064 43.7384 24.0257 43.7384H23.6242C23.5936 43.7384 23.5745 43.7231 23.5669 43.6925L23.0965 41.5617V43.681C23.0965 43.7193 23.0774 43.7384 23.0392 43.7384H22.6377C22.5994 43.7384 22.5803 43.7193 22.5803 43.681V39.7807C22.5803 39.7425 22.5994 39.7234 22.6377 39.7234H23.0506C23.0755 39.7234 23.0908 39.7348 23.0965 39.7578L23.5669 41.946V39.7807C23.5669 39.7425 23.586 39.7234 23.6242 39.7234H24.0257Z"
                      stroke="#111111"
                      stroke-width="0.0196169"
                    />
                    <path
                      d="M26.2637 39.7234C26.302 39.7234 26.3211 39.7425 26.3211 39.7807V43.681C26.3211 43.7193 26.302 43.7384 26.2637 43.7384H25.8622C25.8316 43.7384 25.8125 43.7231 25.8049 43.6925L25.3345 41.5617V43.681C25.3345 43.7193 25.3154 43.7384 25.2772 43.7384H24.8757C24.8374 43.7384 24.8183 43.7193 24.8183 43.681V39.7807C24.8183 39.7425 24.8374 39.7234 24.8757 39.7234H25.2887C25.3135 39.7234 25.3288 39.7348 25.3345 39.7578L25.8049 41.946V39.7807C25.8049 39.7425 25.824 39.7234 25.8622 39.7234H26.2637Z"
                      stroke="#111111"
                      stroke-width="0.0196169"
                    />
                    <path
                      d="M27.2284 39.8725C27.3584 39.7348 27.5343 39.666 27.7561 39.666C27.9779 39.666 28.1538 39.7348 28.2838 39.8725C28.4138 40.0102 28.4788 40.1784 28.4788 40.3772V43.0845C28.4788 43.2834 28.4138 43.4516 28.2838 43.5893C28.1538 43.7269 27.9779 43.7957 27.7561 43.7957C27.5343 43.7957 27.3584 43.7269 27.2284 43.5893C27.0984 43.4516 27.0334 43.2834 27.0334 43.0845V40.3772C27.0334 40.1784 27.0984 40.0102 27.2284 39.8725ZM27.6012 43.2308C27.6356 43.2709 27.6873 43.291 27.7561 43.291C27.8249 43.291 27.8765 43.2709 27.911 43.2308C27.9454 43.1906 27.9626 43.1419 27.9626 43.0845V40.3772C27.9626 40.3199 27.9454 40.2711 27.911 40.231C27.8765 40.1908 27.8249 40.1708 27.7561 40.1708C27.6873 40.1708 27.6356 40.1908 27.6012 40.231C27.5668 40.2711 27.5496 40.3199 27.5496 40.3772V43.0845C27.5496 43.1419 27.5668 43.1906 27.6012 43.2308Z"
                      stroke="#111111"
                      stroke-width="0.0196169"
                    />
                    <path
                      d="M30.5869 39.7234C30.6308 39.7234 30.65 39.7463 30.6442 39.7922L30.128 43.6925C30.1223 43.7231 30.1031 43.7384 30.0706 43.7384H29.6233C29.5908 43.7384 29.5716 43.7231 29.5659 43.6925L29.0497 39.7922C29.0439 39.7463 29.0631 39.7234 29.107 39.7234H29.5315C29.5659 39.7234 29.585 39.7425 29.5888 39.7807L29.847 42.4794L30.1051 39.7807C30.1089 39.7425 30.128 39.7234 30.1624 39.7234H30.5869Z"
                      stroke="#111111"
                      stroke-width="0.0196169"
                    />
                    <path
                      d="M32.5386 43.6696C32.5444 43.7154 32.5252 43.7384 32.4813 43.7384H32.0568C32.0224 43.7384 32.0033 43.7193 31.9995 43.681L31.9478 43.1419H31.5693L31.5177 43.681C31.5138 43.7193 31.4947 43.7384 31.4603 43.7384H31.0359C30.9919 43.7384 30.9728 43.7154 30.9785 43.6696L31.4947 39.7693C31.5005 39.7387 31.5196 39.7234 31.5521 39.7234H31.9651C31.9976 39.7234 32.0167 39.7387 32.0224 39.7693L32.5386 43.6696ZM31.618 42.6371H31.8991L31.7586 41.163L31.618 42.6371Z"
                      stroke="#111111"
                      stroke-width="0.0196169"
                    />
                    <path
                      d="M34.271 39.7234C34.3092 39.7234 34.3284 39.7425 34.3284 39.7807V40.1822C34.3284 40.2205 34.3092 40.2396 34.271 40.2396H33.858V43.681C33.858 43.7193 33.8389 43.7384 33.8007 43.7384H33.3992C33.3609 43.7384 33.3418 43.7193 33.3418 43.681V40.2396H32.9288C32.8906 40.2396 32.8715 40.2205 32.8715 40.1822V39.7807C32.8715 39.7425 32.8906 39.7234 32.9288 39.7234H34.271Z"
                      stroke="#111111"
                      stroke-width="0.0196169"
                    />
                    <path
                      d="M35.0916 39.8725C35.2216 39.7348 35.3975 39.666 35.6193 39.666C35.841 39.666 36.0169 39.7348 36.1469 39.8725C36.277 40.0102 36.342 40.1784 36.342 40.3772V43.0845C36.342 43.2834 36.277 43.4516 36.1469 43.5893C36.0169 43.7269 35.841 43.7957 35.6193 43.7957C35.3975 43.7957 35.2216 43.7269 35.0916 43.5893C34.9616 43.4516 34.8966 43.2834 34.8966 43.0845V40.3772C34.8966 40.1784 34.9616 40.0102 35.0916 39.8725ZM35.4644 43.2308C35.4988 43.2709 35.5504 43.291 35.6193 43.291C35.6881 43.291 35.7397 43.2709 35.7741 43.2308C35.8085 43.1906 35.8257 43.1419 35.8257 43.0845V40.3772C35.8257 40.3199 35.8085 40.2711 35.7741 40.231C35.7397 40.1908 35.6881 40.1708 35.6193 40.1708C35.5504 40.1708 35.4988 40.1908 35.4644 40.231C35.43 40.2711 35.4128 40.3199 35.4128 40.3772V43.0845C35.4128 43.1419 35.43 43.1906 35.4644 43.2308Z"
                      stroke="#111111"
                      stroke-width="0.0196169"
                    />
                    <path
                      d="M38.6031 43.6581C38.6088 43.681 38.6041 43.7002 38.5888 43.7154C38.5754 43.7307 38.5572 43.7384 38.5343 43.7384H38.1442C38.1156 43.7384 38.0964 43.7231 38.0869 43.6925L37.5793 41.9259H37.5707V43.681C37.5707 43.7193 37.5515 43.7384 37.5133 43.7384H37.1118C37.0736 43.7384 37.0544 43.7193 37.0544 43.681V39.7807C37.0544 39.7425 37.0736 39.7234 37.1118 39.7234H37.7771C37.9989 39.7234 38.1748 39.7922 38.3048 39.9299C38.4348 40.0675 38.4999 40.2358 38.4999 40.4346V41.2147C38.4999 41.3581 38.4635 41.489 38.3909 41.6076C38.3201 41.7242 38.2198 41.8102 38.0897 41.8657L38.6031 43.6581ZM37.5707 40.2281V41.4212H37.7771C37.846 41.4212 37.8976 41.4011 37.932 41.3609C37.9664 41.3208 37.9836 41.272 37.9836 41.2147V40.4346C37.9836 40.3772 37.9664 40.3285 37.932 40.2883C37.8976 40.2482 37.846 40.2281 37.7771 40.2281H37.5707Z"
                      stroke="#111111"
                      stroke-width="0.0196169"
                    />
                    <path
                      d="M40.1206 41.5244C40.2238 41.641 40.2955 41.7223 40.3356 41.7682C40.3758 41.814 40.4207 41.8705 40.4704 41.9374C40.5221 42.0043 40.5536 42.0473 40.5651 42.0664C40.5765 42.0836 40.589 42.1161 40.6024 42.1639C40.6177 42.2098 40.6253 42.2452 40.6253 42.27C40.6253 42.293 40.6253 42.335 40.6253 42.3962V43.0845C40.6253 43.2834 40.5603 43.4516 40.4303 43.5893C40.3003 43.7269 40.1244 43.7957 39.9026 43.7957C39.6808 43.7957 39.5049 43.7269 39.3749 43.5893C39.2449 43.4516 39.1799 43.2834 39.1799 43.0845V42.7404C39.1799 42.7021 39.199 42.683 39.2373 42.683H39.6388C39.677 42.683 39.6961 42.7021 39.6961 42.7404V43.0845C39.6961 43.1419 39.7133 43.1906 39.7477 43.2308C39.7821 43.2709 39.8338 43.291 39.9026 43.291C39.9714 43.291 40.0231 43.2709 40.0575 43.2308C40.0919 43.1906 40.1091 43.1419 40.1091 43.0845V42.4536C40.1091 42.3924 40.1024 42.3446 40.089 42.3102C40.0775 42.2739 40.0422 42.2175 39.9829 42.141C39.9236 42.0645 39.8204 41.9469 39.6732 41.7882C39.4361 41.534 39.2946 41.3705 39.2487 41.2978C39.2028 41.2233 39.1799 41.1114 39.1799 40.9623V40.3772C39.1799 40.1784 39.243 40.0102 39.3692 39.8725C39.4973 39.7348 39.6713 39.666 39.8911 39.666C40.111 39.666 40.284 39.7348 40.4102 39.8725C40.5383 40.0102 40.6024 40.1784 40.6024 40.3772V40.7214C40.6024 40.7596 40.5832 40.7787 40.545 40.7787H40.1435C40.1053 40.7787 40.0861 40.7596 40.0861 40.7214V40.3772C40.0861 40.318 40.0708 40.2692 40.0403 40.231C40.0097 40.1908 39.96 40.1708 39.8911 40.1708C39.8223 40.1708 39.7726 40.1908 39.742 40.231C39.7114 40.2692 39.6961 40.318 39.6961 40.3772V40.8705C39.6961 40.8973 39.6961 40.9164 39.6961 40.9279C39.698 40.9393 39.699 40.9537 39.699 40.9709C39.699 40.9881 39.7018 41.0024 39.7076 41.0139C39.7133 41.0254 39.7181 41.0378 39.7219 41.0512C39.7257 41.0646 39.7344 41.0799 39.7477 41.0971C39.763 41.1124 39.7755 41.1286 39.785 41.1458C39.7965 41.1611 39.8156 41.1831 39.8424 41.2118C39.8691 41.2405 39.8921 41.2672 39.9112 41.2921C39.9322 41.315 39.9638 41.3495 40.0058 41.3953C40.0479 41.4412 40.0861 41.4842 40.1206 41.5244Z"
                      stroke="#111111"
                      stroke-width="0.0196169"
                    />
                    <path
                      d="M43.483 39.7234C43.7047 39.7234 43.8806 39.7922 44.0106 39.9299C44.1407 40.0675 44.2057 40.2358 44.2057 40.4346V43.0272C44.2057 43.226 44.1407 43.3942 44.0106 43.5319C43.8806 43.6696 43.7047 43.7384 43.483 43.7384H42.8176C42.7794 43.7384 42.7603 43.7193 42.7603 43.681V39.7807C42.7603 39.7425 42.7794 39.7234 42.8176 39.7234H43.483ZM43.483 43.2336C43.5518 43.2336 43.6034 43.2136 43.6378 43.1734C43.6722 43.1333 43.6894 43.0845 43.6894 43.0272V40.4346C43.6894 40.3772 43.6722 40.3285 43.6378 40.2883C43.6034 40.2482 43.5518 40.2281 43.483 40.2281H43.2765V43.2336H43.483Z"
                      stroke="#111111"
                      stroke-width="0.0196169"
                    />
                    <path
                      d="M45.0897 39.8725C45.2197 39.7348 45.3956 39.666 45.6174 39.666C45.8391 39.666 46.015 39.7348 46.1451 39.8725C46.2751 40.0102 46.3401 40.1784 46.3401 40.3772V43.0845C46.3401 43.2834 46.2751 43.4516 46.1451 43.5893C46.015 43.7269 45.8391 43.7957 45.6174 43.7957C45.3956 43.7957 45.2197 43.7269 45.0897 43.5893C44.9597 43.4516 44.8947 43.2834 44.8947 43.0845V40.3772C44.8947 40.1784 44.9597 40.0102 45.0897 39.8725ZM45.4625 43.2308C45.4969 43.2709 45.5485 43.291 45.6174 43.291C45.6862 43.291 45.7378 43.2709 45.7722 43.2308C45.8066 43.1906 45.8239 43.1419 45.8239 43.0845V40.3772C45.8239 40.3199 45.8066 40.2711 45.7722 40.231C45.7378 40.1908 45.6862 40.1708 45.6174 40.1708C45.5485 40.1708 45.4969 40.1908 45.4625 40.231C45.4281 40.2711 45.4109 40.3199 45.4109 40.3772V43.0845C45.4109 43.1419 45.4281 43.1906 45.4625 43.2308Z"
                      stroke="#111111"
                      stroke-width="0.0196169"
                    />
                    <g filter="url(#filter7_d_804_137667)">
                      <g filter="url(#filter8_d_804_137667)">
                        <path
                          d="M18.1641 60.8691L24.0908 63.7207L23.7121 61.5668L18.1641 60.8691Z"
                          fill="#FDFDFD"
                        />
                      </g>
                      <g filter="url(#filter9_d_804_137667)">
                        <path
                          d="M23.7308 60.2072L18.1641 60.8574L24.4018 57.9171L23.7308 60.2072Z"
                          fill="#FDFDFD"
                        />
                      </g>
                      <path
                        d="M24.8908 60.9383L23.706 60.2147L18.1641 60.8613L24.8908 60.9383Z"
                        fill="white"
                      />
                      <path
                        d="M24.8908 60.9383L23.706 60.2147L18.1641 60.8613L24.8908 60.9383Z"
                        fill="#213C5F"
                        fill-opacity="0.6"
                      />
                      <path
                        d="M23.7226 61.5616L24.8895 60.9382L18.1641 60.8613L23.7226 61.5616Z"
                        fill="white"
                      />
                      <path
                        d="M23.7226 61.5616L24.8895 60.9382L18.1641 60.8613L23.7226 61.5616Z"
                        fill="#213C5F"
                        fill-opacity="0.8"
                      />
                    </g>
                    <g filter="url(#filter10_d_804_137667)">
                      <g filter="url(#filter11_d_804_137667)">
                        <path
                          d="M18.1641 53.5547L24.0908 56.4062L23.7121 54.2524L18.1641 53.5547Z"
                          fill="#FDFDFD"
                        />
                      </g>
                      <g filter="url(#filter12_d_804_137667)">
                        <path
                          d="M23.7308 52.8928L18.1641 53.543L24.4018 50.6026L23.7308 52.8928Z"
                          fill="#FDFDFD"
                        />
                      </g>
                      <path
                        d="M24.8908 53.6238L23.706 52.9002L18.1641 53.5469L24.8908 53.6238Z"
                        fill="white"
                      />
                      <path
                        d="M24.8908 53.6238L23.706 52.9002L18.1641 53.5469L24.8908 53.6238Z"
                        fill="#213C5F"
                        fill-opacity="0.6"
                      />
                      <path
                        d="M23.7226 54.2471L24.8895 53.6238L18.1641 53.5469L23.7226 54.2471Z"
                        fill="white"
                      />
                      <path
                        d="M23.7226 54.2471L24.8895 53.6238L18.1641 53.5469L23.7226 54.2471Z"
                        fill="#213C5F"
                        fill-opacity="0.8"
                      />
                    </g>
                    <g filter="url(#filter13_d_804_137667)">
                      <g filter="url(#filter14_d_804_137667)">
                        <path
                          d="M26.4531 60.8691L32.3798 63.7207L32.0012 61.5668L26.4531 60.8691Z"
                          fill="#FDFDFD"
                        />
                      </g>
                      <g filter="url(#filter15_d_804_137667)">
                        <path
                          d="M32.0199 60.2072L26.4531 60.8574L32.6909 57.9171L32.0199 60.2072Z"
                          fill="#FDFDFD"
                        />
                      </g>
                      <path
                        d="M33.1799 60.9383L31.9951 60.2147L26.4531 60.8613L33.1799 60.9383Z"
                        fill="white"
                      />
                      <path
                        d="M33.1799 60.9383L31.9951 60.2147L26.4531 60.8613L33.1799 60.9383Z"
                        fill="#213C5F"
                        fill-opacity="0.6"
                      />
                      <path
                        d="M32.0117 61.5616L33.1785 60.9382L26.4531 60.8613L32.0117 61.5616Z"
                        fill="white"
                      />
                      <path
                        d="M32.0117 61.5616L33.1785 60.9382L26.4531 60.8613L32.0117 61.5616Z"
                        fill="#213C5F"
                        fill-opacity="0.8"
                      />
                    </g>
                    <g filter="url(#filter16_d_804_137667)">
                      <g filter="url(#filter17_d_804_137667)">
                        <path
                          d="M26.4531 53.5547L32.3798 56.4062L32.0012 54.2524L26.4531 53.5547Z"
                          fill="#FDFDFD"
                        />
                      </g>
                      <g filter="url(#filter18_d_804_137667)">
                        <path
                          d="M32.0199 52.8928L26.4531 53.543L32.6909 50.6026L32.0199 52.8928Z"
                          fill="#FDFDFD"
                        />
                      </g>
                      <path
                        d="M33.1799 53.6238L31.9951 52.9002L26.4531 53.5469L33.1799 53.6238Z"
                        fill="white"
                      />
                      <path
                        d="M33.1799 53.6238L31.9951 52.9002L26.4531 53.5469L33.1799 53.6238Z"
                        fill="#213C5F"
                        fill-opacity="0.6"
                      />
                      <path
                        d="M32.0117 54.2471L33.1785 53.6238L26.4531 53.5469L32.0117 54.2471Z"
                        fill="white"
                      />
                      <path
                        d="M32.0117 54.2471L33.1785 53.6238L26.4531 53.5469L32.0117 54.2471Z"
                        fill="#213C5F"
                        fill-opacity="0.8"
                      />
                    </g>
                    <g filter="url(#filter19_d_804_137667)">
                      <g filter="url(#filter20_d_804_137667)">
                        <path
                          d="M34.75 60.8691L40.6767 63.7207L40.298 61.5668L34.75 60.8691Z"
                          fill="#FDFDFD"
                        />
                      </g>
                      <g filter="url(#filter21_d_804_137667)">
                        <path
                          d="M40.3168 60.2072L34.75 60.8574L40.9878 57.9171L40.3168 60.2072Z"
                          fill="#FDFDFD"
                        />
                      </g>
                      <path
                        d="M41.4767 60.9383L40.292 60.2147L34.75 60.8613L41.4767 60.9383Z"
                        fill="white"
                      />
                      <path
                        d="M41.4767 60.9383L40.292 60.2147L34.75 60.8613L41.4767 60.9383Z"
                        fill="#213C5F"
                        fill-opacity="0.6"
                      />
                      <path
                        d="M40.3085 61.5616L41.4754 60.9382L34.75 60.8613L40.3085 61.5616Z"
                        fill="white"
                      />
                      <path
                        d="M40.3085 61.5616L41.4754 60.9382L34.75 60.8613L40.3085 61.5616Z"
                        fill="#213C5F"
                        fill-opacity="0.8"
                      />
                    </g>
                    <g filter="url(#filter22_d_804_137667)">
                      <g filter="url(#filter23_d_804_137667)">
                        <path
                          d="M34.75 53.5547L40.6767 56.4062L40.298 54.2524L34.75 53.5547Z"
                          fill="#FDFDFD"
                        />
                      </g>
                      <g filter="url(#filter24_d_804_137667)">
                        <path
                          d="M40.3168 52.8928L34.75 53.543L40.9878 50.6026L40.3168 52.8928Z"
                          fill="#FDFDFD"
                        />
                      </g>
                      <path
                        d="M41.4767 53.6238L40.292 52.9002L34.75 53.5469L41.4767 53.6238Z"
                        fill="white"
                      />
                      <path
                        d="M41.4767 53.6238L40.292 52.9002L34.75 53.5469L41.4767 53.6238Z"
                        fill="#213C5F"
                        fill-opacity="0.6"
                      />
                      <path
                        d="M40.3085 54.2471L41.4754 53.6238L34.75 53.5469L40.3085 54.2471Z"
                        fill="white"
                      />
                      <path
                        d="M40.3085 54.2471L41.4754 53.6238L34.75 53.5469L40.3085 54.2471Z"
                        fill="#213C5F"
                        fill-opacity="0.8"
                      />
                    </g>
                    <g filter="url(#filter25_d_804_137667)">
                      <g filter="url(#filter26_d_804_137667)">
                        <path
                          d="M43.0391 60.8691L48.9658 63.7207L48.5871 61.5668L43.0391 60.8691Z"
                          fill="#FDFDFD"
                        />
                      </g>
                      <g filter="url(#filter27_d_804_137667)">
                        <path
                          d="M48.6058 60.2072L43.0391 60.8574L49.2768 57.9171L48.6058 60.2072Z"
                          fill="#FDFDFD"
                        />
                      </g>
                      <path
                        d="M49.7658 60.9383L48.581 60.2147L43.0391 60.8613L49.7658 60.9383Z"
                        fill="white"
                      />
                      <path
                        d="M49.7658 60.9383L48.581 60.2147L43.0391 60.8613L49.7658 60.9383Z"
                        fill="#213C5F"
                        fill-opacity="0.6"
                      />
                      <path
                        d="M48.5976 61.5616L49.7645 60.9382L43.0391 60.8613L48.5976 61.5616Z"
                        fill="white"
                      />
                      <path
                        d="M48.5976 61.5616L49.7645 60.9382L43.0391 60.8613L48.5976 61.5616Z"
                        fill="#213C5F"
                        fill-opacity="0.8"
                      />
                    </g>
                    <path
                      d="M52.2952 44.6055C50.6579 49.8281 44.4755 51.0702 45.2094 48.5295C46.397 44.4185 54.3842 53.131 43.5156 53.4133"
                      stroke="#315C90"
                      stroke-width="0.169381"
                      stroke-dasharray="0.28 0.28"
                    />
                    <path
                      d="M53.7055 41.7555L54.5335 36.9894L57.0999 41.3014L53.7055 41.7555Z"
                      fill="#315C90"
                    />
                    <path
                      d="M52.1328 45.2445L53.7045 41.7559L54.5325 36.9898L52.1328 45.2445Z"
                      fill="#111F31"
                    />
                    <path
                      d="M51.0427 42.5716L52.1284 45.2447L54.528 36.99L51.0427 42.5716Z"
                      fill="#213C5F"
                    />
                    <path
                      d="M54.5306 36.9899L47.6075 43.3224L51.0453 42.5716L54.5306 36.9899Z"
                      fill="#315C90"
                    />
                    <path
                      d="M21.6959 77.719C21.726 77.719 21.741 77.7341 21.741 77.7642V78.0803C21.741 78.1105 21.726 78.1255 21.6959 78.1255H21.3706V80.8356C21.3706 80.8657 21.3556 80.8808 21.3255 80.8808H21.0093C20.9792 80.8808 20.9641 80.8657 20.9641 80.8356V78.1255H20.6389C20.6088 78.1255 20.5938 78.1105 20.5938 78.0803V77.7642C20.5938 77.7341 20.6088 77.719 20.6389 77.719H21.6959Z"
                      fill="#111111"
                    />
                    <path
                      d="M22.342 77.8364C22.4444 77.728 22.5829 77.6738 22.7576 77.6738C22.9322 77.6738 23.0708 77.728 23.1731 77.8364C23.2755 77.9448 23.3267 78.0773 23.3267 78.2339V80.3659C23.3267 80.5224 23.2755 80.6549 23.1731 80.7633C23.0708 80.8717 22.9322 80.9259 22.7576 80.9259C22.5829 80.9259 22.4444 80.8717 22.342 80.7633C22.2397 80.6549 22.1885 80.5224 22.1885 80.3659V78.2339C22.1885 78.0773 22.2397 77.9448 22.342 77.8364ZM22.6356 80.481C22.6627 80.5127 22.7034 80.5285 22.7576 80.5285C22.8118 80.5285 22.8524 80.5127 22.8795 80.481C22.9066 80.4494 22.9202 80.411 22.9202 80.3659V78.2339C22.9202 78.1887 22.9066 78.1504 22.8795 78.1187C22.8524 78.0871 22.8118 78.0713 22.7576 78.0713C22.7034 78.0713 22.6627 78.0871 22.6356 78.1187C22.6085 78.1504 22.595 78.1887 22.595 78.2339V80.3659C22.595 80.411 22.6085 80.4494 22.6356 80.481Z"
                      fill="#111111"
                    />
                    <path
                      d="M25.3964 77.719C25.4265 77.719 25.4416 77.7341 25.4416 77.7642V80.8356C25.4416 80.8657 25.4265 80.8808 25.3964 80.8808H25.0802C25.0501 80.8808 25.0351 80.8657 25.0351 80.8356V79.4218L24.746 80.8446C24.7385 80.8687 24.7234 80.8808 24.7008 80.8808H24.6285C24.606 80.8808 24.5909 80.8687 24.5834 80.8446L24.2943 79.4218V80.8356C24.2943 80.8657 24.2792 80.8808 24.2491 80.8808H23.933C23.9028 80.8808 23.8878 80.8657 23.8878 80.8356V77.7642C23.8878 77.7341 23.9028 77.719 23.933 77.719H24.2582C24.2792 77.719 24.2913 77.728 24.2943 77.7461L24.6647 79.7787L25.0351 77.7461C25.0381 77.728 25.0501 77.719 25.0712 77.719H25.3964Z"
                      fill="#111111"
                    />
                    <path
                      d="M28.2791 77.719C28.3092 77.719 28.3243 77.7341 28.3243 77.7642V80.8356C28.3243 80.8657 28.3092 80.8808 28.2791 80.8808H27.963C27.9328 80.8808 27.9178 80.8657 27.9178 80.8356V79.4535H27.5474V80.8356C27.5474 80.8657 27.5324 80.8808 27.5022 80.8808H27.1861C27.156 80.8808 27.1409 80.8657 27.1409 80.8356V77.7642C27.1409 77.7341 27.156 77.719 27.1861 77.719H27.5022C27.5324 77.719 27.5474 77.7341 27.5474 77.7642V79.056H27.9178V77.7642C27.9178 77.7341 27.9328 77.719 27.963 77.719H28.2791Z"
                      fill="#111111"
                    />
                    <path
                      d="M29.9964 77.719C30.0265 77.719 30.0415 77.7341 30.0415 77.7642V80.3659C30.0415 80.5224 29.9904 80.6549 29.888 80.7633C29.7856 80.8717 29.6471 80.9259 29.4724 80.9259C29.2978 80.9259 29.1593 80.8717 29.0569 80.7633C28.9545 80.6549 28.9033 80.5224 28.9033 80.3659V77.7642C28.9033 77.7341 28.9184 77.719 28.9485 77.719H29.2647C29.2948 77.719 29.3098 77.7341 29.3098 77.7642V80.3659C29.3098 80.411 29.3234 80.4494 29.3505 80.481C29.3776 80.5127 29.4182 80.5285 29.4724 80.5285C29.5266 80.5285 29.5673 80.5127 29.5944 80.481C29.6215 80.4494 29.635 80.411 29.635 80.3659V77.7642C29.635 77.7341 29.6501 77.719 29.6802 77.719H29.9964Z"
                      fill="#111111"
                    />
                    <path
                      d="M31.7581 77.719C31.7882 77.719 31.8033 77.7341 31.8033 77.7642V80.8356C31.8033 80.8657 31.7882 80.8808 31.7581 80.8808H31.4419C31.4178 80.8808 31.4028 80.8687 31.3967 80.8446L31.0264 79.1666V80.8356C31.0264 80.8657 31.0113 80.8808 30.9812 80.8808H30.665C30.6349 80.8808 30.6198 80.8657 30.6198 80.8356V77.7642C30.6198 77.7341 30.6349 77.719 30.665 77.719H30.9902C31.0098 77.719 31.0218 77.728 31.0264 77.7461L31.3967 79.4693V77.7642C31.3967 77.7341 31.4118 77.719 31.4419 77.719H31.7581Z"
                      fill="#111111"
                    />
                    <path
                      d="M33.1049 79.1373C33.1862 79.2291 33.2427 79.2931 33.2743 79.3292C33.3059 79.3654 33.3413 79.4098 33.3805 79.4625C33.4211 79.5152 33.446 79.5491 33.455 79.5641C33.464 79.5777 33.4738 79.6033 33.4844 79.6409C33.4964 79.677 33.5024 79.7049 33.5024 79.7245C33.5024 79.7425 33.5024 79.7757 33.5024 79.8238V80.3659C33.5024 80.5224 33.4512 80.6549 33.3489 80.7633C33.2465 80.8717 33.108 80.9259 32.9333 80.9259C32.7587 80.9259 32.6201 80.8717 32.5178 80.7633C32.4154 80.6549 32.3642 80.5224 32.3642 80.3659V80.0948C32.3642 80.0647 32.3792 80.0497 32.4094 80.0497H32.7255C32.7556 80.0497 32.7707 80.0647 32.7707 80.0948V80.3659C32.7707 80.411 32.7842 80.4494 32.8114 80.481C32.8385 80.5127 32.8791 80.5285 32.9333 80.5285C32.9875 80.5285 33.0282 80.5127 33.0553 80.481C33.0824 80.4494 33.0959 80.411 33.0959 80.3659V79.869C33.0959 79.8208 33.0906 79.7832 33.0801 79.7561C33.0711 79.7275 33.0432 79.6831 32.9965 79.6228C32.9499 79.5626 32.8686 79.47 32.7526 79.3451C32.5659 79.1448 32.4545 79.0161 32.4184 78.9589C32.3823 78.9001 32.3642 78.8121 32.3642 78.6946V78.2339C32.3642 78.0773 32.4139 77.9448 32.5132 77.8364C32.6141 77.728 32.7511 77.6738 32.9243 77.6738C33.0974 77.6738 33.2337 77.728 33.333 77.8364C33.4339 77.9448 33.4844 78.0773 33.4844 78.2339V78.5049C33.4844 78.535 33.4693 78.5501 33.4392 78.5501H33.123C33.0929 78.5501 33.0778 78.535 33.0778 78.5049V78.2339C33.0778 78.1872 33.0658 78.1488 33.0417 78.1187C33.0176 78.0871 32.9785 78.0713 32.9243 78.0713C32.8701 78.0713 32.8309 78.0871 32.8068 78.1187C32.7827 78.1488 32.7707 78.1872 32.7707 78.2339V78.6224C32.7707 78.6434 32.7707 78.6585 32.7707 78.6675C32.7722 78.6766 32.773 78.6879 32.773 78.7014C32.773 78.715 32.7752 78.7262 32.7797 78.7353C32.7842 78.7443 32.788 78.7541 32.791 78.7646C32.794 78.7752 32.8008 78.7872 32.8114 78.8008C32.8234 78.8128 32.8332 78.8256 32.8407 78.8392C32.8497 78.8512 32.8648 78.8685 32.8859 78.8911C32.907 78.9137 32.925 78.9348 32.9401 78.9543C32.9566 78.9724 32.9815 78.9995 33.0146 79.0357C33.0477 79.0718 33.0778 79.1057 33.1049 79.1373Z"
                      fill="#111111"
                    />
                    <path
                      d="M35.1806 80.8266C35.1851 80.8627 35.17 80.8808 35.1354 80.8808H34.8012C34.7741 80.8808 34.759 80.8657 34.756 80.8356L34.7153 80.411H34.4172L34.3766 80.8356C34.3736 80.8657 34.3585 80.8808 34.3314 80.8808H33.9972C33.9625 80.8808 33.9475 80.8627 33.952 80.8266L34.3585 77.7551C34.363 77.731 34.3781 77.719 34.4037 77.719H34.7289C34.7545 77.719 34.7695 77.731 34.7741 77.7551L35.1806 80.8266ZM34.4556 80.0135H34.6769L34.5663 78.8527L34.4556 80.0135Z"
                      fill="#111111"
                    />
                    <path
                      d="M36.8655 80.8175C36.87 80.8326 36.8677 80.8469 36.8587 80.8605C36.8497 80.874 36.8369 80.8808 36.8203 80.8808H36.5041C36.4816 80.8808 36.4665 80.8687 36.459 80.8446L36.0525 79.4264V80.8356C36.0525 80.8657 36.0374 80.8808 36.0073 80.8808H35.6911C35.661 80.8808 35.6459 80.8657 35.6459 80.8356V77.7642C35.6459 77.7341 35.661 77.719 35.6911 77.719H36.0073C36.0374 77.719 36.0525 77.7341 36.0525 77.7642V79.0153L36.4138 77.7551C36.4213 77.731 36.4364 77.719 36.459 77.719H36.7751C36.7917 77.719 36.8045 77.7258 36.8135 77.7393C36.8226 77.7529 36.8248 77.7672 36.8203 77.7822L36.4093 79.2208L36.8655 80.8175Z"
                      fill="#111111"
                    />
                    <path
                      d="M38.3562 80.4833C38.3863 80.4833 38.4013 80.4984 38.4013 80.5285V80.8356C38.4013 80.8657 38.3863 80.8808 38.3562 80.8808H37.4076C37.3775 80.8808 37.3625 80.8657 37.3625 80.8356V77.7642C37.3625 77.7341 37.3775 77.719 37.4076 77.719H38.3291C38.3592 77.719 38.3742 77.7341 38.3742 77.7642V78.0713C38.3742 78.1014 38.3592 78.1165 38.3291 78.1165H37.769V79.056H38.2478C38.2779 79.056 38.2929 79.071 38.2929 79.1011V79.4083C38.2929 79.4384 38.2779 79.4535 38.2478 79.4535H37.769V80.4833H38.3562Z"
                      fill="#111111"
                    />
                    <path
                      d="M40.1292 80.8175C40.1337 80.8356 40.1299 80.8507 40.1179 80.8627C40.1073 80.8748 40.093 80.8808 40.075 80.8808H39.7678C39.7453 80.8808 39.7302 80.8687 39.7227 80.8446L39.3229 79.4535H39.3162V80.8356C39.3162 80.8657 39.3011 80.8808 39.271 80.8808H38.9548C38.9247 80.8808 38.9096 80.8657 38.9096 80.8356V77.7642C38.9096 77.7341 38.9247 77.719 38.9548 77.719H39.4788C39.6534 77.719 39.7919 77.7732 39.8943 77.8816C39.9967 77.99 40.0479 78.1225 40.0479 78.2791V78.8934C40.0479 79.0063 40.0193 79.1094 39.9621 79.2028C39.9064 79.2946 39.8273 79.3624 39.7249 79.406L40.1292 80.8175ZM39.3162 78.1165V79.056H39.4788C39.533 79.056 39.5736 79.0402 39.6007 79.0086C39.6278 78.9769 39.6414 78.9385 39.6414 78.8934V78.2791C39.6414 78.2339 39.6278 78.1955 39.6007 78.1639C39.5736 78.1323 39.533 78.1165 39.4788 78.1165H39.3162Z"
                      fill="#111111"
                    />
                    <path
                      d="M40.6136 81.2963C40.585 81.2963 40.573 81.2813 40.5775 81.2512L40.7039 80.5194C40.7145 80.4893 40.7326 80.4743 40.7581 80.4743H41.0834C41.0969 80.4743 41.1075 80.4788 41.115 80.4878C41.1225 80.4953 41.124 80.5059 41.1195 80.5194L40.9208 81.2512C40.9102 81.2813 40.8921 81.2963 40.8666 81.2963H40.6136Z"
                      fill="#111111"
                    />
                    <path
                      d="M43.3509 77.719C43.5256 77.719 43.6641 77.7732 43.7665 77.8816C43.8689 77.99 43.9201 78.1225 43.9201 78.2791V78.8934C43.9201 79.05 43.8689 79.1824 43.7665 79.2909C43.6641 79.3993 43.5256 79.4535 43.3509 79.4535H43.1883V80.8356C43.1883 80.8657 43.1733 80.8808 43.1432 80.8808H42.827C42.7969 80.8808 42.7818 80.8657 42.7818 80.8356V77.7642C42.7818 77.7341 42.7969 77.719 42.827 77.719H43.3509ZM43.3509 79.056C43.4052 79.056 43.4458 79.0402 43.4729 79.0086C43.5 78.9769 43.5136 78.9385 43.5136 78.8934V78.2791C43.5136 78.2339 43.5 78.1955 43.4729 78.1639C43.4458 78.1323 43.4052 78.1165 43.3509 78.1165H43.1883V79.056H43.3509Z"
                      fill="#111111"
                    />
                    <path
                      d="M46.7911 77.719C46.9657 77.719 47.1042 77.7732 47.2066 77.8816C47.309 77.99 47.3602 78.1225 47.3602 78.2791V80.3207C47.3602 80.4773 47.309 80.6098 47.2066 80.7182C47.1042 80.8266 46.9657 80.8808 46.7911 80.8808H46.2671C46.237 80.8808 46.222 80.8657 46.222 80.8356V77.7642C46.222 77.7341 46.237 77.719 46.2671 77.719H46.7911ZM46.7911 80.4833C46.8453 80.4833 46.8859 80.4675 46.913 80.4359C46.9401 80.4043 46.9537 80.3659 46.9537 80.3207V78.2791C46.9537 78.2339 46.9401 78.1955 46.913 78.1639C46.8859 78.1323 46.8453 78.1165 46.7911 78.1165H46.6285V80.4833H46.7911Z"
                      fill="#111111"
                    />
                    <path
                      d="M45.5022 78.2266C45.5275 78.2266 45.5401 78.2392 45.5401 78.2645V80.8423C45.5401 80.8676 45.5275 80.8802 45.5022 80.8802H45.2368C45.2115 80.8802 45.1989 80.8676 45.1989 80.8423V79.6823H44.8881V80.8423C44.8881 80.8676 44.8754 80.8802 44.8501 80.8802H44.5848C44.5595 80.8802 44.5469 80.8676 44.5469 80.8423V78.2645C44.5469 78.2392 44.5595 78.2266 44.5848 78.2266H44.8501C44.8754 78.2266 44.8881 78.2392 44.8881 78.2645V79.3487H45.1989V78.2645C45.1989 78.2392 45.2115 78.2266 45.2368 78.2266H45.5022Z"
                      fill="#111111"
                    />
                  </g>
                  <rect
                    x="7.85"
                    y="11.85"
                    width="52.3"
                    height="73.6985"
                    stroke="#315C90"
                    stroke-width="0.3"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_i_804_137667"
                    x="20"
                    y="0"
                    width="62.2839"
                    height="56.1135"
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
                    <feOffset dx="10.2839" dy="4.11355" />
                    <feGaussianBlur stdDeviation="5.14193" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0666667 0 0 0 0 0.121569 0 0 0 0 0.192157 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_804_137667"
                    />
                  </filter>
                  <filter
                    id="filter1_d_804_137667"
                    x="5.70312"
                    y="9.69922"
                    width="60.5938"
                    height="82"
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
                      result="effect1_dropShadow_804_137667"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_137667"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_i_804_137667"
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
                      values="0 0 0 0 0.0666667 0 0 0 0 0.121569 0 0 0 0 0.192157 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_804_137667"
                    />
                  </filter>
                  <filter
                    id="filter3_i_804_137667"
                    x="17.0938"
                    y="70.8887"
                    width="34.674"
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
                      result="effect1_innerShadow_804_137667"
                    />
                  </filter>
                  <filter
                    id="filter4_i_804_137667"
                    x="21.2734"
                    y="70.9453"
                    width="1.83023"
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
                      result="effect1_innerShadow_804_137667"
                    />
                  </filter>
                  <filter
                    id="filter5_i_804_137667"
                    x="36.7422"
                    y="70.9453"
                    width="1.83023"
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
                      result="effect1_innerShadow_804_137667"
                    />
                  </filter>
                  <filter
                    id="filter6_i_804_137667"
                    x="11.5"
                    y="17.6641"
                    width="45.5806"
                    height="14.7049"
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
                    <feOffset dx="0.580631" dy="0.232252" />
                    <feGaussianBlur stdDeviation="0.290315" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0666667 0 0 0 0 0.121569 0 0 0 0 0.192157 0 0 0 0.1 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_804_137667"
                    />
                  </filter>
                  <filter
                    id="filter7_d_804_137667"
                    x="17.6764"
                    y="57.918"
                    width="7.70181"
                    height="6.92427"
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
                    <feOffset dy="0.633913" />
                    <feGaussianBlur stdDeviation="0.243813" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0.4 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_137667"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_137667"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter8_d_804_137667"
                    x="16.809"
                    y="59.1753"
                    width="9.76899"
                    height="6.69087"
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
                    <feOffset dx="0.564604" dy="0.225841" />
                    <feGaussianBlur stdDeviation="0.959826" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_137667"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_137667"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter9_d_804_137667"
                    x="17.5995"
                    y="57.3534"
                    width="7.13774"
                    height="3.84282"
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
                    <feOffset dx="-0.112921" dy="-0.112921" />
                    <feGaussianBlur stdDeviation="0.225841" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_137667"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_137667"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter10_d_804_137667"
                    x="17.6764"
                    y="50.6035"
                    width="7.70181"
                    height="6.92427"
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
                    <feOffset dy="0.633913" />
                    <feGaussianBlur stdDeviation="0.243813" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0.4 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_137667"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_137667"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter11_d_804_137667"
                    x="16.809"
                    y="51.8609"
                    width="9.76899"
                    height="6.69087"
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
                    <feOffset dx="0.564604" dy="0.225841" />
                    <feGaussianBlur stdDeviation="0.959826" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_137667"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_137667"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter12_d_804_137667"
                    x="17.5995"
                    y="50.0389"
                    width="7.13774"
                    height="3.84282"
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
                    <feOffset dx="-0.112921" dy="-0.112921" />
                    <feGaussianBlur stdDeviation="0.225841" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_137667"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_137667"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter13_d_804_137667"
                    x="25.9655"
                    y="57.918"
                    width="7.70181"
                    height="6.92427"
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
                    <feOffset dy="0.633913" />
                    <feGaussianBlur stdDeviation="0.243813" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0.4 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_137667"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_137667"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter14_d_804_137667"
                    x="25.0981"
                    y="59.1753"
                    width="9.76899"
                    height="6.69087"
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
                    <feOffset dx="0.564604" dy="0.225841" />
                    <feGaussianBlur stdDeviation="0.959826" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_137667"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_137667"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter15_d_804_137667"
                    x="25.8885"
                    y="57.3534"
                    width="7.13774"
                    height="3.84282"
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
                    <feOffset dx="-0.112921" dy="-0.112921" />
                    <feGaussianBlur stdDeviation="0.225841" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_137667"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_137667"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter16_d_804_137667"
                    x="25.9655"
                    y="50.6035"
                    width="7.70181"
                    height="6.92427"
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
                    <feOffset dy="0.633913" />
                    <feGaussianBlur stdDeviation="0.243813" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0.4 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_137667"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_137667"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter17_d_804_137667"
                    x="25.0981"
                    y="51.8609"
                    width="9.76899"
                    height="6.69087"
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
                    <feOffset dx="0.564604" dy="0.225841" />
                    <feGaussianBlur stdDeviation="0.959826" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_137667"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_137667"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter18_d_804_137667"
                    x="25.8885"
                    y="50.0389"
                    width="7.13774"
                    height="3.84282"
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
                    <feOffset dx="-0.112921" dy="-0.112921" />
                    <feGaussianBlur stdDeviation="0.225841" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_137667"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_137667"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter19_d_804_137667"
                    x="34.2624"
                    y="57.918"
                    width="7.70181"
                    height="6.92427"
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
                    <feOffset dy="0.633913" />
                    <feGaussianBlur stdDeviation="0.243813" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0.4 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_137667"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_137667"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter20_d_804_137667"
                    x="33.395"
                    y="59.1753"
                    width="9.76899"
                    height="6.69087"
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
                    <feOffset dx="0.564604" dy="0.225841" />
                    <feGaussianBlur stdDeviation="0.959826" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_137667"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_137667"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter21_d_804_137667"
                    x="34.1854"
                    y="57.3534"
                    width="7.13774"
                    height="3.84282"
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
                    <feOffset dx="-0.112921" dy="-0.112921" />
                    <feGaussianBlur stdDeviation="0.225841" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_137667"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_137667"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter22_d_804_137667"
                    x="34.2624"
                    y="50.6035"
                    width="7.70181"
                    height="6.92427"
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
                    <feOffset dy="0.633913" />
                    <feGaussianBlur stdDeviation="0.243813" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0.4 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_137667"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_137667"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter23_d_804_137667"
                    x="33.395"
                    y="51.8609"
                    width="9.76899"
                    height="6.69087"
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
                    <feOffset dx="0.564604" dy="0.225841" />
                    <feGaussianBlur stdDeviation="0.959826" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_137667"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_137667"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter24_d_804_137667"
                    x="34.1854"
                    y="50.0389"
                    width="7.13774"
                    height="3.84282"
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
                    <feOffset dx="-0.112921" dy="-0.112921" />
                    <feGaussianBlur stdDeviation="0.225841" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_137667"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_137667"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter25_d_804_137667"
                    x="42.5514"
                    y="57.918"
                    width="7.70181"
                    height="6.92427"
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
                    <feOffset dy="0.633913" />
                    <feGaussianBlur stdDeviation="0.243813" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0 0.0666667 0 0 0 0.4 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_137667"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_137667"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter26_d_804_137667"
                    x="41.684"
                    y="59.1753"
                    width="9.76899"
                    height="6.69087"
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
                    <feOffset dx="0.564604" dy="0.225841" />
                    <feGaussianBlur stdDeviation="0.959826" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_137667"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_137667"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter27_d_804_137667"
                    x="42.4745"
                    y="57.3534"
                    width="7.13774"
                    height="3.84282"
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
                    <feOffset dx="-0.112921" dy="-0.112921" />
                    <feGaussianBlur stdDeviation="0.225841" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_137667"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_137667"
                      result="shape"
                    />
                  </filter>
                  <radialGradient
                    id="paint0_radial_804_137667"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(45.7908 23.318) rotate(90) scale(66.4782 24.9682)"
                  >
                    <stop offset="0.474504" stop-color="#315C90" />
                    <stop offset="1" stop-color="#213C5F" />
                  </radialGradient>
                  <linearGradient
                    id="paint1_linear_804_137667"
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
                    id="paint2_radial_804_137667"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(33.7908 71.867) rotate(90) scale(7.93985 24.9682)"
                  >
                    <stop offset="0.474504" stop-color="#315C90" />
                    <stop offset="1" stop-color="#213C5F" />
                  </radialGradient>
                  <radialGradient
                    id="paint3_radial_804_137667"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(33.8184 24.1544) rotate(90) scale(18.5035 21.6065)"
                  >
                    <stop offset="0.474504" stop-color="#315C90" />
                    <stop offset="1" stop-color="#213C5F" />
                  </radialGradient>
                  <radialGradient
                    id="paint4_radial_804_137667"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(33.8184 24.1544) rotate(90) scale(18.5035 21.6065)"
                  >
                    <stop offset="0.474504" stop-color="#315C90" />
                    <stop offset="1" stop-color="#213C5F" />
                  </radialGradient>
                  <radialGradient
                    id="paint5_radial_804_137667"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(33.8184 24.1544) rotate(90) scale(18.5035 21.6065)"
                  >
                    <stop offset="0.474504" stop-color="#315C90" />
                    <stop offset="1" stop-color="#213C5F" />
                  </radialGradient>
                  <radialGradient
                    id="paint6_radial_804_137667"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(33.8184 24.1544) rotate(90) scale(18.5035 21.6065)"
                  >
                    <stop offset="0.474504" stop-color="#315C90" />
                    <stop offset="1" stop-color="#213C5F" />
                  </radialGradient>
                  <radialGradient
                    id="paint7_radial_804_137667"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(33.8184 24.1544) rotate(90) scale(18.5035 21.6065)"
                  >
                    <stop offset="0.474504" stop-color="#315C90" />
                    <stop offset="1" stop-color="#213C5F" />
                  </radialGradient>
                  <radialGradient
                    id="paint8_radial_804_137667"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(33.8184 24.1544) rotate(90) scale(18.5035 21.6065)"
                  >
                    <stop offset="0.474504" stop-color="#315C90" />
                    <stop offset="1" stop-color="#213C5F" />
                  </radialGradient>
                  <radialGradient
                    id="paint9_radial_804_137667"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(33.8184 24.1544) rotate(90) scale(18.5035 21.6065)"
                  >
                    <stop offset="0.474504" stop-color="#315C90" />
                    <stop offset="1" stop-color="#213C5F" />
                  </radialGradient>
                  <clipPath id="clip0_804_137667">
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
              <p className="">A digital copy of bestseller BRIDGER®</p>
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
                  fill="#315C90"
                />
                <g filter="url(#filter0_b_804_137671)">
                  <path
                    d="M5.42188 15.4751C5.42188 9.92392 9.92197 5.42383 15.4731 5.42383H63.7191C69.2702 5.42383 73.7703 9.92392 73.7703 15.4751V38.4748C73.7703 39.194 73.4846 39.8838 72.976 40.3923L56.6832 56.6852L40.3904 72.978C39.8818 73.4866 39.192 73.7723 38.4728 73.7723H15.4731C9.92197 73.7723 5.42188 69.2722 5.42188 63.721V15.4751Z"
                    fill="url(#paint0_linear_804_137671)"
                  />
                  <path
                    d="M5.42188 15.4751C5.42188 9.92392 9.92197 5.42383 15.4731 5.42383H63.7191C69.2702 5.42383 73.7703 9.92392 73.7703 15.4751V38.4748C73.7703 39.194 73.4846 39.8838 72.976 40.3923L56.6832 56.6852L40.3904 72.978C39.8818 73.4866 39.192 73.7723 38.4728 73.7723H15.4731C9.92197 73.7723 5.42188 69.2722 5.42188 63.721V15.4751Z"
                    fill="url(#paint1_radial_804_137671)"
                    fill-opacity="0.7"
                  />
                </g>
                <g filter="url(#filter1_b_804_137671)">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M39.5961 73.7723L73.7703 39.598V15.4751C73.7703 9.92392 69.2702 5.42383 63.7191 5.42383H15.4731C9.92197 5.42383 5.42188 9.92392 5.42188 15.4751V63.721C5.42188 69.2722 9.92197 73.7723 15.4731 73.7723H39.5961ZM73.5693 39.4975V15.4751C73.5693 10.0349 69.1592 5.62485 63.7191 5.62485H15.4731C10.033 5.62485 5.6229 10.0349 5.6229 15.4751V63.721C5.6229 69.1612 10.033 73.5712 15.4731 73.5712H39.4956V49.6493C39.4956 44.0426 44.0407 39.4975 49.6473 39.4975H73.5693ZM73.3855 39.6986H49.6473C44.1517 39.6986 39.6966 44.1537 39.6966 49.6493V73.3875L73.3855 39.6986Z"
                    fill="url(#paint2_linear_804_137671)"
                  />
                </g>
                <g filter="url(#filter2_d_804_137671)">
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
                    id="filter0_b_804_137671"
                    x="-14.9171"
                    y="-14.9152"
                    width="109.03"
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
                      result="effect1_backgroundBlur_804_137671"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_804_137671"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter1_b_804_137671"
                    x="-5.25609"
                    y="-5.25414"
                    width="89.7075"
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
                      result="effect1_backgroundBlur_804_137671"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_804_137671"
                      result="shape"
                    />
                  </filter>
                  <filter
                    id="filter2_d_804_137671"
                    x="9.01532"
                    y="7.6618"
                    width="31.9306"
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
                      values="0 0 0 0 0.129412 0 0 0 0 0.235294 0 0 0 0 0.372549 0 0 0 0.5 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_804_137671"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_804_137671"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_804_137671"
                    x1="12.998"
                    y1="-28.9999"
                    x2="88.7742"
                    y2="28.8005"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0.125"
                      stop-color="#315C90"
                      stop-opacity="0.5"
                    />
                    <stop
                      offset="0.655125"
                      stop-color="#315C90"
                      stop-opacity="0.78"
                    />
                    <stop offset="1" stop-color="#315C90" stop-opacity="0.09" />
                  </linearGradient>
                  <radialGradient
                    id="paint1_radial_804_137671"
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
                    id="paint2_linear_804_137671"
                    x1="8.81171"
                    y1="0.678064"
                    x2="92.0947"
                    y2="33.9715"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0.0136312"
                      stop-color="#D9E4F1"
                      stop-opacity="0"
                    />
                    <stop offset="0.600063" stop-color="#315C90" />
                    <stop offset="1" stop-color="#D9E4F1" stop-opacity="0.1" />
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
                  fill="#213C5F"
                />
                <rect
                  x="40"
                  y="12.8809"
                  width="31.1864"
                  height="31.1864"
                  rx="15.5932"
                  fill="#85A9D5"
                />
                <path
                  d="M10.3545 17.8549C10.8534 15.1078 13.4847 13.2853 16.2318 13.7842L56.3973 21.0784C59.1444 21.5772 60.9669 24.2086 60.468 26.9557L56.442 49.1246C55.9432 51.8716 53.3118 53.6941 50.5647 53.1953L10.3993 45.9011C7.65219 45.4022 5.82968 42.7708 6.32856 40.0238L10.3545 17.8549Z"
                  fill="#315C90"
                />
                <g filter="url(#filter0_b_804_137674)">
                  <path
                    d="M74.5744 37.3826C74.5744 32.8084 70.8663 29.1003 66.2922 29.1003H44.3601C42.5209 29.1003 40.8256 28.1053 39.929 26.4994C39.0324 24.8935 37.3371 23.8984 35.4979 23.8984H13.7041C9.12995 23.8984 5.42188 27.6065 5.42188 32.1807V65.406C5.42188 69.9802 9.12996 73.6883 13.7041 73.6883H66.2922C70.8663 73.6883 74.5744 69.9802 74.5744 65.406V37.3826Z"
                    fill="white"
                    fill-opacity="0.1"
                  />
                  <path
                    d="M74.5744 37.3826C74.5744 32.8084 70.8663 29.1003 66.2922 29.1003H44.3601C42.5209 29.1003 40.8256 28.1053 39.929 26.4994C39.0324 24.8935 37.3371 23.8984 35.4979 23.8984H13.7041C9.12995 23.8984 5.42188 27.6065 5.42188 32.1807V65.406C5.42188 69.9802 9.12996 73.6883 13.7041 73.6883H66.2922C70.8663 73.6883 74.5744 69.9802 74.5744 65.406V37.3826Z"
                    fill="url(#paint0_linear_804_137674)"
                    fill-opacity="0.58"
                  />
                </g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M66.2922 29.266H44.3601C42.4609 29.266 40.7102 28.2384 39.7844 26.5801C38.917 25.0267 37.2771 24.0641 35.4979 24.0641H13.7041C9.22144 24.0641 5.58752 27.698 5.58752 32.1807V65.406C5.58752 69.8887 9.22144 73.5226 13.7041 73.5226H66.2922C70.7749 73.5226 74.4088 69.8887 74.4088 65.406V37.3826C74.4088 32.8999 70.7748 29.266 66.2922 29.266ZM66.2922 29.1003C70.8663 29.1003 74.5744 32.8084 74.5744 37.3826V65.406C74.5744 69.9802 70.8663 73.6883 66.2922 73.6883H13.7041C9.12996 73.6883 5.42188 69.9802 5.42188 65.406V32.1807C5.42188 27.6065 9.12995 23.8984 13.7041 23.8984H35.4979C37.3371 23.8984 39.0324 24.8935 39.929 26.4994C40.8256 28.1053 42.5209 29.1003 44.3601 29.1003H66.2922Z"
                  stroke="url(#paint1_linear_804_137674)"
                  stroke-width="0.2"
                />
                <defs>
                  <filter
                    id="filter0_b_804_137674"
                    x="-1.57812"
                    y="16.8984"
                    width="83.1562"
                    height="63.7891"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feGaussianBlur
                      in="BackgroundImageFix"
                      stdDeviation="3.5"
                    />
                    <feComposite
                      in2="SourceAlpha"
                      operator="in"
                      result="effect1_backgroundBlur_804_137674"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_backgroundBlur_804_137674"
                      result="shape"
                    />
                  </filter>
                  <linearGradient
                    id="paint0_linear_804_137674"
                    x1="8.30323"
                    y1="24.9357"
                    x2="30.8248"
                    y2="76.1461"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#D9E4F1" />
                    <stop offset="0.765625" stop-color="#85A9D5" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_804_137674"
                    x1="63.8831"
                    y1="32.4561"
                    x2="8.40342"
                    y2="70.1378"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop
                      offset="0.223102"
                      stop-color="#D9E4F1"
                      stop-opacity="0.28"
                    />
                    <stop
                      offset="0.629013"
                      stop-color="#315C90"
                      stop-opacity="0.34"
                    />
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
