import React from "react";
import { Controller } from "react-hook-form";
import { TextAreaType, TextArea } from "~/components/molecules";

export const RTextArea: React.FC<TextAreaType> = ({
  name,
  label,
  placeholder,
}) => {
  return (
    <Controller
      name={name}
      rules={{ required: `${label}は必須です。` }}
      render={({
        field: { name, value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <TextArea
          name={name}
          label={label}
          value={value}
          placeholder={placeholder}
          error={error?.message}
          onChange={onChange}
          onBlur={onBlur}
        />
      )}
    />
  );
};
