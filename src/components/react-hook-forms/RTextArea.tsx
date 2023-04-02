import React from 'react';
import { Controller } from 'react-hook-form';
import { TextArea } from '~/components/molecules';

export const RTextArea: React.FC<TextArea> = ({ name, label, placeholder }) => (
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
