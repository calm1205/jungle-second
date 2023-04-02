import React from 'react';
import {
  BaseRadio,
  HiddenRadio,
  RadioLabel,
  StyledActiveRadio,
  StyledInActiveRadio,
} from '~/components/atoms';

export type Radio = BaseRadio & {
  label: string;
};

/**
 * 単体のラジオボタン
 */
export const Radio: React.FC<Radio> = ({
  name,
  checked,
  label,
  value,
  onChange,
}) => (
  <RadioLabel text={label}>
    <HiddenRadio
      name={name}
      checked={checked}
      value={value}
      onChange={onChange}
    />
    <StyledInActiveRadio>
      {checked && <StyledActiveRadio />}
    </StyledInActiveRadio>
  </RadioLabel>
);
