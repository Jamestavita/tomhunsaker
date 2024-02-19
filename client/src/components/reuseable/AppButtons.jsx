import React from "react";

export default function AppButton100({ label, onClick, className, icon }) {
  return (
    <button
      className={`py-3 ${className} rounded-[32px] font-bold flex gap-1 items-center justify-center`}
      onClick={onClick}
    >
      {icon}
      {label}
    </button>
  );
}

export function AppButton900({ label, onClick, className }) {
  return (
    <button
      className={`py-[11px] px-[40px] ${className} rounded-[8px] font-bold border`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
