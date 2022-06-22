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
  value,
}) => {
  return (
    <Controller
      name={name}
      render={({ field: { name } }) => (
        <Radio name={name} checked={checked} label={label} value={value} />
      )}
    />
  );
};
