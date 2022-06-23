import React from 'react';
import { Controller } from 'react-hook-form';
import { Radio, RadioType } from '~/components/molecules';

/**
 * RHFで管理されたラジオボタン
 */
export const RRadio: React.FC<RadioType> = ({
  name,
  checked,
  label,
  onChange,
}) => {
  return (
    <Controller
      name={name}
      render={({ field: { name, value } }) => (
        <Radio
          name={name}
          checked={checked}
          label={label}
          value={value}
          onChange={onChange}
        />
      )}
    />
  );
};
