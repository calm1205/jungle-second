import React from 'react';
import { Controller } from 'react-hook-form';
import { Input, InputType } from '~/components/molecules';

export const RInput: React.FC<InputType> = ({ name, label, placeholder }) => {
  return (
    <Controller
      name={name}
      rules={{ required: `${label}は必須です。` }}
      render={({
        field: { name, value, onChange, onBlur },
        fieldState: { error },
      }) => (
        <Input
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
