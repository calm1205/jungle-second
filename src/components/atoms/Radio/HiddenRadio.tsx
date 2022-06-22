import React from 'react';
import styled from 'styled-components';

type BaseRadioType = Pick<HTMLInputElement, 'name' | 'checked'>;

/**
 * 画面上では非表示だがinputのvalueを制御するために必要
 */
export const HiddenRadio: React.FC<BaseRadioType> = ({ name, checked }) => {
  return <StyledHiddenRadio type="radio" name={name} checked={checked} />;
};

const StyledHiddenRadio = styled.input`
  display: none;
`;
