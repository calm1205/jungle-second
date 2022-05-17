import React from "react";
import { theme } from "~/theme";
import { Box } from "./Box";
import { FormErrorMessage } from "./FormErrorMessage";
import { Label } from "./Label";
import { StyledTextArea } from "./StyledTextArea";

export type TextAreaType = {
  name: string;
  label: string;
  placeholder?: string;
  value?: string;
  error?: string;
  onChange?: () => void;
  onBlur?: () => void;
};

export const TextArea: React.FC<TextAreaType> = ({
  name,
  label,
  placeholder,
  value,
  error,
  onChange,
  onBlur,
}) => {
  return (
    <>
      <Label text={label}>
        <StyledTextArea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        <Box marginTop={theme.space.xs}>
          <FormErrorMessage children={error} />
        </Box>
      </Label>
    </>
  );
};
