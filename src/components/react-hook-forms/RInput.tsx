import React from "react";
import { Controller } from "react-hook-form";
import { Input, InputType } from "~/components/atoms";

export const RInput: React.FC<InputType> = ({ name, label, placeholder }) => {
  return (
    <Controller
      name={name}
      rules={{ required: `${label}は必須です。` }}
      render={({ field: { name, value, onChange, onBlur } }) => (
        <Input
          name={name}
          label={label}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    />
  );
};
