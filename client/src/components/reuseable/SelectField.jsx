import React from "react";
import Select from "react-select";

export default function SelectField({
  options,
  selectChange,
  name,
  value,
  placeholder,
}) {
  return (
    <Select
      options={options}
      onChange={selectChange}
      name={name}
      value={value}
      placeholder={placeholder}
      theme={(theme) => ({
        ...theme,
        borderRadius: 8,
        colors: {
          ...theme.colors,
          primary: "black",
          neutral20: "black",
        },
      })}
      styles={{
        control: (base, state) => ({
          ...base,
          height: 53.6,
          minHeight: 53.6,
          paddingLeft: 14,
          borderColor: state.isFocused ? "black" : "#D0D0C8",
        }),
        dropdownIndicator: (base) => ({
          ...base,
          color: "#D0D0C8",
        }),
      }}
      components={{
        IndicatorSeparator: () => null,
      }}
    />
  );
}
