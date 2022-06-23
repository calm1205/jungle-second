import React from 'react';
import { Controller } from 'react-hook-form';
import { Radio } from '~/components/molecules';
import { Box, Label } from '~/components/atoms';
import { theme } from '~/theme';

type RadiosType = {
  name: string;
  label: string;
  items: {
    label: string;
    value: string;
  }[];
};

/**
 * RHFで管理されたラジオボタン
 */
export const RRadios: React.FC<RadiosType> = ({ name, label, items }) => {
  return (
    <Controller
      name={name}
      render={({ field: { name, value, onChange } }) => (
        <Label text={label}>
          <Box display="flex" marginTop={theme.space.xs}>
            {items.map((i) => (
              <Radio
                key={i.value}
                name={name}
                label={i.label}
                value={i.value}
                checked={value === i.value}
                onChange={onChange}
              />
            ))}
          </Box>
        </Label>
      )}
    />
  );
};
