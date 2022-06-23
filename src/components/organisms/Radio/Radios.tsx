import React, { useState } from 'react';
import { Box, Label } from '~/components/atoms';
import { RRadio } from '~/components/react-hook-forms';
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
 * 複数のラジオボタン
 */
export const Radios: React.FC<RadiosType> = ({ name, label, items }) => {
  const [checked, setChecked] = useState(items[0].value);

  return (
    <Label text={label}>
      <Box display="flex" marginTop={theme.space.xs}>
        {items.map((i) => (
          <RRadio
            key={i.value}
            name={name}
            label={i.label}
            value={i.label}
            checked={checked === i.value}
            onChange={() => setChecked(i.value)}
          />
        ))}
      </Box>
    </Label>
  );
};
