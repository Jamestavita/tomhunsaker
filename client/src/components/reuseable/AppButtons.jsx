import React from "react";

export default function AppButton100({ title, onChange, bg }) {
  return (
    <button className={`py-3 ${bg} rounded-[32px] font-bold`}>{title}</button>
  );
}
