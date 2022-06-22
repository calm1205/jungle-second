import React from 'react';
import {
  HiddenRadio,
  RadioLabel,
  StyledActiveRadio,
  StyledInActiveRadio,
} from '~/components/atoms';

type BaseRadioType = Pick<HTMLInputElement, 'name' | 'checked'>;

/**
 * 単体のラジオボタン
 */
export const BaseRadio: React.FC<BaseRadioType> = ({ name, checked }) => {
  return (
    <RadioLabel text="ラジオボタン">
      <HiddenRadio name={name} checked={checked} />

      <StyledInActiveRadio>
        {checked && <StyledActiveRadio />}
      </StyledInActiveRadio>
    </RadioLabel>
  );
};
