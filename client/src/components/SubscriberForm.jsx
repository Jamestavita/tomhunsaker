import React, { useState } from "react";
import InputField from "./reuseable/InputField";
import "react-phone-input-2/lib/style.css";
import { AppButton900 } from "./reuseable/AppButtons";
import { useAddSubscriberMutation } from "../services/appApi";

export default function SubscriberForm({ className }) {
  const [subscriberFormValues, setSubscriberFormValues] = useState({
    name: "",
    organization: "",
    email: "",
  });

  function handleChange(e) {
    setSubscriberFormValues({
      ...subscriberFormValues,
      [e.target.name]: e.target.value,
    });
  }

  const [subscribeApi] = useAddSubscriberMutation();
  const [loading, setLoading] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    subscribeApi({
      body: {
        name: subscriberFormValues.name,
        organization: subscriberFormValues.organization,
        email: subscriberFormValues.email,
      },
    })
      .unwrap()
      .then((result) => {
        setLoading(false);
        setIsSubscribed(true);
      })
      .catch((err) => {
        setLoading(false);
        setIsSubscribed(false);
      });
  }

  return (
    <div
      className={`gap-10 bg-Greyscale text-Greyscale900 pt-8 pb-16 px-4 md:pt-12 md:px-12 lg:px-10 rounded-t-[20px] md:rounded-[20px] ${className}`}
    >
      <p className="font-bold text-[30px] lg:text-[44px]">
        Join Tom's thought leadership updates
      </p>
      {isSubscribed ? (
        <div className="py-[150px] text-center">
          <p className="text-4xl text-Greyscale700 mb-2">
            Thanks for signing up
          </p>
          <p className="text-Greyscale700">We'll keep you updated.</p>
        </div>
      ) : (
        <form className="grid gap-6" onSubmit={handleSubmit}>
          <InputField
            id="name"
            label="Name"
            name="name"
            onChange={handleChange}
            required={true}
            type="text"
            value={subscriberFormValues.name}
          />
          <InputField
            id="organization"
            label="Organization"
            name="organization"
            onChange={handleChange}
            required={true}
            type="text"
            value={subscriberFormValues.organization}
          />
          <InputField
            id="email"
            label="Email"
            name="email"
            onChange={handleChange}
            required={true}
            type="email"
            value={subscriberFormValues.email}
          />
          <AppButton900
            className="bg-Greyscale900 text-white"
            label={loading ? "Subscribing..." : "Receive updates"}
            disabled={loading}
          />
        </form>
      )}
    </div>
  );
}
