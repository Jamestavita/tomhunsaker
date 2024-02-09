import React from "react";

export default function InputField({
  type,
  label,
  name,
  id,
  onChange,
  placeholder,
  required,
  value,
  pattern,
}) {
  return (
    <div className="grid gap-2">
      <label htmlFor={id} className="font-medium">
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={id}
        onChange={onChange}
        value={value}
        className="py-[14px] px-6 md:px-8 rounded-[8px] border-[1px] border-Greyscale400 outline-black"
        placeholder={placeholder}
        required={required}
        pattern={pattern}
      />
    </div>
  );
}
