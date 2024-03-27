import React, { useContext, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import AppButton100 from "../../../../components/reuseable/AppButtons";
import InputField from "../../../../components/reuseable/InputField";
import SelectField from "../../../../components/reuseable/SelectField";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useCreateUserMutation } from "../../../../services/appApi";
import { FaArrowLeft } from "react-icons/fa";
import appContext from "../../../../context/AppContext";

export function Free() {
  const navigate = useNavigate();
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
  const [freeFormVal, setFreeFormVal] = useState({
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
    setFreeFormVal({
      ...freeFormVal,
      [e.target.name]: e.target.value,
    });
  }

  const [createUserApi] = useCreateUserMutation();
  const [loading, setLoading] = useState(false);
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
      section_points(assessmentInfo, "Systems");

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
        name: freeFormVal.Name,
        last_name: freeFormVal.Last_Name,
        email: freeFormVal.Email,
        user_info: freeFormVal,
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
    })
      .unwrap()
      .then((result) => {
        navigate("../assessment/innovation/free_success");
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  }

  return (
    <div className="bg-Greyscale200 mx-auto">
      <div className="w-[min(90rem,100%)] mx-auto pt-8 md:px-12 md:pb-16 lg:px-32 lg:pt-16 lg:pb-20 grid gap-12 lg:grid-cols-[1fr,0.6fr]">
        <div
          className="cursor-pointer flex gap-3 lg:col-span-2 items-center mx-auto lg:mx-0"
          onClick={() => navigate("../assessment/innovation/plan")}
        >
          <FaArrowLeft />
          Back to option selection
        </div>
        <div className="grid gap-6 rounded-[40px] px-6 lg:py-0 text-Greyscale900 justify-center lg:order-2 self-start">
          <p className="text-[30px] lg:text-[56px] font-bold lg:font-medium leading-tight text-center">
            Just your raw score
          </p>
          <svg
            width="260"
            height="190"
            viewBox="0 0 260 190"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            <path
              d="M244.156 111.815C244.156 127.431 230.687 139.642 215.145 138.115L115.605 128.334C102.076 127.004 91.7626 115.628 91.7626 102.034L91.7626 52.4466C91.7626 38.7363 102.248 27.303 115.907 26.1187L215.447 17.488C230.885 16.1495 244.156 28.3201 244.156 43.8159L244.156 111.815Z"
              fill="#315C90"
            />
            <g filter="url(#filter0_b_804_137681)">
              <path
                d="M16 77.6244C16 62.008 29.4694 49.7973 45.011 51.3245L144.551 61.1059C158.08 62.4353 168.394 73.8118 168.394 87.4059V136.993C168.394 150.703 157.909 162.136 144.25 163.321L44.7094 171.951C29.2715 173.29 16 161.119 16 145.624V77.6244Z"
                fill="white"
                fillOpacity="0.1"
              />
              <path
                d="M16 77.6244C16 62.008 29.4694 49.7973 45.011 51.3245L144.551 61.1059C158.08 62.4353 168.394 73.8118 168.394 87.4059V136.993C168.394 150.703 157.909 162.136 144.25 163.321L44.7094 171.951C29.2715 173.29 16 161.119 16 145.624V77.6244Z"
                fill="url(#paint0_linear_804_137681)"
                fillOpacity="0.58"
              />
            </g>
            <g filter="url(#filter1_b_804_137681)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M144.508 61.5442L44.968 51.7628C29.6854 50.2611 16.4404 62.2682 16.4404 77.6244V145.624C16.4404 160.861 29.4908 172.829 44.6714 171.513L144.212 162.882C157.643 161.717 167.953 150.475 167.953 136.993V87.4059C167.953 74.0383 157.812 62.8515 144.508 61.5442ZM45.011 51.3245C29.4694 49.7973 16 62.008 16 77.6244V145.624C16 161.119 29.2715 173.29 44.7094 171.951L144.25 163.321C157.909 162.136 168.394 150.703 168.394 136.993V87.4059C168.394 73.8118 158.08 62.4353 144.551 61.1059L45.011 51.3245Z"
                fill="url(#paint1_linear_804_137681)"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_804_137681"
                x="4"
                y="39.1953"
                width="176.391"
                height="144.857"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="6" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_804_137681"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_804_137681"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_b_804_137681"
                x="-17.8358"
                y="17.3595"
                width="220.062"
                height="188.529"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur
                  in="BackgroundImageFix"
                  stdDeviation="16.9179"
                />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_804_137681"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_804_137681"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_804_137681"
                x1="22.3497"
                y1="53.7132"
                x2="80.5528"
                y2="173.866"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#D9E4F1" />
                <stop offset="0.765625" stopColor="#85A9D5" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_804_137681"
                x1="23.5582"
                y1="42.8036"
                x2="195.29"
                y2="129.37"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0136312" stopColor="#85A9D5" stopOpacity="0" />
                <stop offset="0.600063" stopColor="#315C90" />
                <stop offset="1" stopColor="#85A9D5" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
          <p className="text-center text-xl">Free</p>
        </div>
        <form
          onSubmit={onSubmitForm}
          id="Innovation_form"
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
              value={freeFormVal.Name}
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
              id="Teams"
              label="Teams"
              name="Teams"
              onChange={handleChange}
              required={true}
              type="text"
              value={freeFormVal.Teams}
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
                  (option) => freeFormVal.Number_of_Employees === option.label
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
              className="bg-Blue500 text-Greyscale border-Blue500 border-2"
              label={loading ? "Processing..." : "Get raw score"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
