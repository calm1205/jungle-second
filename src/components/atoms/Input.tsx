import React from "react";
import styled, { css } from "styled-components";
import { Label } from "./Label";

export type InputType = {
  name: string;
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: () => void;
  onBlur?: () => void;
};

export const Input: React.FC<InputType> = ({
  name,
  label,
  placeholder,
  value,
  onChange,
  onBlur,
}) => {
  return (
    <>
      <Label text={label}>
        <StyledInput
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
      </Label>
    </>
  );
};

const StyledInput = styled.input`
  ${({ theme }) =>
    css`
      color: ${theme.font.color.default};
      letter-spacing: 2px;
      font-family: ${theme.font.family.default};

      border: none;
      border-bottom: solid 1px ${theme.input.border.color.default};

      background-color: inherit;
      padding: ${theme.space.xs};
      box-sizing: border-box;
      width: 100%;

      :focus {
        outline: none;
      }
    `}
`;
