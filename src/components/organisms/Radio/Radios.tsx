import React, { useState } from 'react';
import { Radio } from '~/components/molecules';

type RadiosType = {
  name: string;
  items: {
    label: string;
    value: string;
  }[];
};

/**
 * 複数のラジオボタン
 */
export const Radios: React.FC<RadiosType> = ({ name, items }) => {
  const [checked, setChecked] = useState(items[0].value);

  return (
    <>
      {items.map((i) => {
        return (
          <Radio
            key={i.value}
            name={name}
            label={i.label}
            value={i.label}
            checked={checked === i.value}
            onChange={() => setChecked(i.value)}
          />
        );
      })}
    </>
  );
};
