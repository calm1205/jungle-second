import React, { ChangeEvent } from "react";
import styled, { css } from "styled-components";
import { Label } from "./Label";

type Input = {
  name: string;
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
};

export const Input: React.FC<Input> = ({
  name,
  label,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <>
      <Label text={label}>
        <StyledInput
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
      </Label>
    </>
  );
};

export const StyledInput = styled.input`
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
