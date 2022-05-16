import React from "react";
import styled, { css } from "styled-components";
import { Label } from "./Label";

type TextArea = {
  name: string;
  label: string;
  placeholder?: string;
};

export const TextArea: React.FC<TextArea> = ({ name, label, placeholder }) => {
  return (
    <>
      <Label text={label}>
        <StyledTextArea name={name} placeholder={placeholder} />
      </Label>
    </>
  );
};

export const StyledTextArea = styled.textarea`
  ${({ theme }) =>
    css`
      color: ${theme.font.color.default};
      letter-spacing: 2px;
      font-family: ${theme.font.family.default};

      border: solid 1px ${theme.input.border.color.default};

      background-color: inherit;
      padding: ${theme.space.xs};
      margin-top: ${theme.space.xs};
      box-sizing: border-box;
      width: 100%;
      resize: vertical;

      :focus {
        outline: none;
      }
    `}
`;
