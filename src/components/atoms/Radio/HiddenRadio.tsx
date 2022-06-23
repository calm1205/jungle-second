import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

export type BaseRadioType = Pick<
  HTMLInputElement,
  'name' | 'checked' | 'value'
> & { onChange: (e: ChangeEvent<HTMLInputElement>) => void };

/**
 * 画面上では非表示だがinputのvalueを制御するために必要
 */
export const HiddenRadio: React.FC<BaseRadioType> = ({
  name,
  checked,
  value,
  onChange,
}) => {
  return (
    <StyledHiddenRadio
      type="radio"
      name={name}
      checked={checked}
      value={value}
      onChange={onChange}
    />
  );
};

const StyledHiddenRadio = styled.input`
  display: none;
`;
