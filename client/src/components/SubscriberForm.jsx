import React, { useState } from "react";
import InputField from "./reuseable/InputField";
import "react-phone-input-2/lib/style.css";
import { AppButton900 } from "./reuseable/AppButtons";

export default function SubscriberForm({ className }) {
  const [subscriberFormValues, setSubscriberFormValues] = useState({});

  function handleChange(e) {
    setSubscriberFormValues({
      ...subscriberFormValues,
      [e.target.name]: e.target.value,
    });
  }

  function handlesubmit(e) {
    e.preventDefault();
    console.log(subscriberFormValues);
  }

  return (
    <div
      className={`gap-10 bg-Greyscale text-Greyscale900 pt-8 pb-16 px-4 md:pt-12 md:px-12 lg:px-10 rounded-t-[20px] md:rounded-[20px] ${className}`}
    >
      <p className="font-bold text-[30px] lg:text-[44px]">
        Join Tom's thought leadership updates
      </p>
      <form className="grid gap-6" onSubmit={handlesubmit}>
        <InputField
          id="Name"
          label="Name"
          name="Name"
          onChange={handleChange}
          required={true}
          type="text"
          value={subscriberFormValues.name}
        />
        <InputField
          id="Organization"
          label="Organization"
          name="Organization"
          onChange={handleChange}
          required={true}
          type="text"
          value={subscriberFormValues.Organization}
        />
        <InputField
          id="Email"
          label="Email"
          name="Email"
          onChange={handleChange}
          required={true}
          type="email"
          value={subscriberFormValues.Email}
        />
        <AppButton900
          className="bg-Greyscale900 text-white"
          label="Receive updates"
        />
      </form>
    </div>
  );
}
