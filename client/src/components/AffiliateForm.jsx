import React, { useEffect, useState } from "react";
import InputField from "./reuseable/InputField";
import Select from "react-select";
import SelectField from "./reuseable/SelectField";
import axios from "axios";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { AppButton900 } from "./reuseable/AppButtons";

export default function AffiliateForm() {
  const [affiliateFormValues, setAffiliateFormValues] = useState({});

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

  const networkOptions = [
    {
      value: "100 - 1,000",
      label: "100 - 1,000",
    },
    {
      value: "1,000 - 5,000",
      label: "1,000 - 5,000",
    },
    {
      value: "5,000 - 10,000",
      label: "5,000 - 10,000",
    },
    {
      value: "10,000 - 25,000",
      label: "10,000 - 25,000",
    },
    {
      value: "25,000+",
      label: "25,000+",
    },
  ];

  function handleChange(e) {
    setAffiliateFormValues({
      ...affiliateFormValues,
      [e.target.name]: e.target.value,
    });
  }

  console.log(affiliateFormValues);
  return (
    <div className="grid gap-6 z-[1] bg-Greyscale pt-8 pb-16 px-4 md:px-6 lg:px-10 rounded-t-[20px] md:rounded-[20px] w-[min(984px,100%)]">
      <p className="font-bold text-[30px]">Get started here</p>
      <div className="grid gap-6 md:grid-cols-2 md:items-center">
        <InputField
          id="Name"
          label="Name"
          name="Name"
          onChange={handleChange}
          pattern=""
          required={true}
          type="text"
          value={affiliateFormValues.name}
        />
        <InputField
          id="Last_Name"
          label="Last Name"
          name="Last_Name"
          onChange={handleChange}
          pattern=""
          required={true}
          type="text"
          value={affiliateFormValues.Last_Name}
        />
        <div className="grid gap-2">
          <label htmlFor="Market_Sector" className="font-medium">
            Market Sector
          </label>
          <SelectField
            options={marketSectorOptions}
            selectChange={(e, obj) =>
              setAffiliateFormValues({
                ...affiliateFormValues,
                [obj.name]: e.value,
              })
            }
            name="Market_Sector"
            value={marketSectorOptions.find(
              (option) => affiliateFormValues.Market_Sector === option.label
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
          value={affiliateFormValues.Organization}
        />
        <div className="grid gap-2">
          <label htmlFor="Country" className="font-medium">
            Country
          </label>
          <SelectField
            options={countryOptions}
            selectChange={(e, obj) =>
              setAffiliateFormValues({
                ...affiliateFormValues,
                [obj.name]: e.value,
              })
            }
            name="Country"
            value={countryOptions?.find(
              (option) => affiliateFormValues.Country === option.label
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
          value={affiliateFormValues.Email}
        />
        <InputField
          id="Website_or_Social_Handle"
          label="Website or Social Handle"
          name="Website_or_Social_Handle"
          onChange={handleChange}
          required={true}
          type="text"
          value={affiliateFormValues.Website_or_Social_Handle}
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
            value={affiliateFormValues.Phone}
            onChange={(e) =>
              setAffiliateFormValues({
                ...affiliateFormValues,
                Phone: e,
              })
            }
          />
        </div>
        <div className="grid gap-2">
          <label htmlFor="Users/followers_network" className="font-medium">
            Unique users/followers in your network
          </label>
          <SelectField
            options={networkOptions}
            selectChange={(e, obj) =>
              setAffiliateFormValues({
                ...affiliateFormValues,
                [obj.name]: e.value,
              })
            }
            name="Users/followers_network"
            value={networkOptions?.find(
              (option) => affiliateFormValues.Country === option.label
            )}
            placeholder="Select range"
          />
        </div>
        <AppButton900
          className="bg-Greyscale900 text-white"
          onChange={() => {}}
          label="Become an affiliate"
        />
      </div>
    </div>
  );
}
