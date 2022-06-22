import React from 'react';
import styled from 'styled-components';

export type BaseRadioType = Pick<
  HTMLInputElement,
  'name' | 'checked' | 'value'
>;

/**
 * 画面上では非表示だがinputのvalueを制御するために必要
 */
export const HiddenRadio: React.FC<BaseRadioType> = ({
  name,
  checked,
  value,
}) => {
  return (
    <StyledHiddenRadio
      type="radio"
      name={name}
      checked={checked}
      value={value}
    />
  );
};

const StyledHiddenRadio = styled.input`
  display: none;
`;
