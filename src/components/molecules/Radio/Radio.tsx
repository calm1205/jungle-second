import React from 'react';
import {
  BaseRadioType,
  HiddenRadio,
  RadioLabel,
  StyledActiveRadio,
  StyledInActiveRadio,
} from '~/components/atoms';

export type RadioType = BaseRadioType & {
  label: string;
};

/**
 * 単体のラジオボタン
 */
export const Radio: React.FC<RadioType> = ({
  name,
  checked,
  label,
  value,
  onChange,
}) => {
  return (
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
};
