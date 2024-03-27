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
  const { execution_assessment_evaluation: assessmentInfo } = useSelector(
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
      category_points(assessmentInfo, "Team") +
      section_points(assessmentInfo, "Precision_and_Execution") +
      section_points(assessmentInfo, "Operational_Agility");

    //Assign levels
    const level =
      total_score > 170 && total_score < 196
        ? 5
        : total_score > 139 && total_score < 171
        ? 4
        : total_score > 89 && total_score < 140
        ? 3
        : total_score > 39 && total_score < 90
        ? 2
        : 1;

    createUserApi({
      concept: "execution",
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
            category_points(assessmentInfo, "Personal") / 75
          ).toFixed(2),

          //Team
          Team_points:
            category_points(assessmentInfo, "Team") +
            section_points(assessmentInfo, "Precision_and_Execution") +
            section_points(assessmentInfo, "Operational_Agility"),
          Team_score: +(
            (category_points(assessmentInfo, "Team") +
              section_points(assessmentInfo, "Precision_and_Execution") +
              section_points(assessmentInfo, "Operational_Agility")) /
            120
          ).toFixed(2),
        },
        total_score,
        level,
        plan: "Free",
      },
    })
      .unwrap()
      .then((result) => {
        navigate("../assessment/execution/free_success");
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
          onClick={() => navigate("../assessment/execution/plan")}
        >
          <FaArrowLeft />
          Back to option selection
        </div>
        <div className="grid gap-6 rounded-[40px] px-6 lg:py-0 text-Greyscale900 justify-center lg:order-2 self-start">
          <p className="text-[30px] lg:text-[56px] font-bold lg:font-medium leading-tight text-center">
            Just your raw score
          </p>
          <svg
            width="133"
            height="97"
            viewBox="0 0 133 97"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-auto"
          >
            <path
              d="M124.461 56.7677C124.461 64.696 117.623 70.8953 109.732 70.12L59.1964 65.154C52.3278 64.4791 47.0919 58.7033 47.0919 51.8017L47.0919 26.6268C47.0919 19.6662 52.415 13.8616 59.3495 13.2603L109.885 8.87861C117.723 8.19904 124.461 14.3779 124.461 22.2451L124.461 56.7677Z"
              fill="#DFBF34"
            />
            <g filter="url(#filter0_b_804_138687)">
              <path
                d="M8.625 39.4101C8.625 31.4817 15.4633 25.2824 23.3537 26.0578L73.8896 31.0237C80.7581 31.6987 85.9941 37.4744 85.9941 44.376V69.5509C85.9941 76.5115 80.671 82.3161 73.7364 82.9174L23.2006 87.2991C15.3629 87.9787 8.625 81.7998 8.625 73.9327V39.4101Z"
                fill="url(#paint0_linear_804_138687)"
                fillOpacity="0.7"
              />
            </g>
            <g filter="url(#filter1_b_804_138687)">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M73.8677 31.2463L23.3318 26.2803C15.573 25.5179 8.84861 31.6138 8.84861 39.4101V73.9327C8.84861 81.6687 15.4742 87.7446 23.1812 87.0763L73.7171 82.6946C80.5361 82.1034 85.7705 76.3955 85.7705 69.5509V44.376C85.7705 37.5894 80.6217 31.9099 73.8677 31.2463ZM23.3537 26.0578C15.4633 25.2824 8.625 31.4817 8.625 39.4101V73.9327C8.625 81.7998 15.3629 87.9787 23.2006 87.2991L73.7364 82.9174C80.671 82.3161 85.9941 76.5115 85.9941 69.5509V44.376C85.9941 37.4744 80.7581 31.6987 73.8896 31.0237L23.3537 26.0578Z"
                fill="url(#paint1_linear_804_138687)"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_804_138687"
                x="-3.375"
                y="13.9922"
                width="101.367"
                height="85.3574"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="6" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_804_138687"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_804_138687"
                  result="shape"
                />
              </filter>
              <filter
                id="filter1_b_804_138687"
                x="-25.2108"
                y="-7.84362"
                width="145.039"
                height="129.029"
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
                  result="effect1_backgroundBlur_804_138687"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_804_138687"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_804_138687"
                x1="21.5788"
                y1="27.9659"
                x2="81.8577"
                y2="84.3671"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#F9F2D7" />
                <stop offset="0.331051" stopColor="#ECD57E" />
                <stop offset="0.818043" stopColor="#DFBF34" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_804_138687"
                x1="12.4622"
                y1="21.7318"
                x2="99.6492"
                y2="65.6808"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.0136312" stopColor="#EDDB8C" stopOpacity="0" />
                <stop offset="0.600063" stopColor="#DFBF34" />
                <stop offset="1" stopColor="#EDDB8C" stopOpacity="0.1" />
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
              className="bg-Yellow500 text-Greyscale border-Yellow500 border-2"
              label={loading ? "Processing..." : "Get raw score"}
            />
          </div>
        </form>
      </div>
    </div>
  );
}
