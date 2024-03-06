import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function AppButton100({
  label,
  onClick,
  className,
  icon,
  disabled,
}) {
  return (
    <button
      className={`py-3 ${className} rounded-[32px] font-bold flex gap-1 items-center justify-center`}
      onClick={onClick}
      disabled={disabled}
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

export function AppNextButton({ label, onClick, className, disabled }) {
  return (
    <button
      className={`py-[11px] px-[45px] ${className} rounded-[8px] font-bold border flex items-center gap-4`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
      <FaArrowRight className="text-2xl" />
    </button>
  );
}
