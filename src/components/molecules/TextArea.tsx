import React from "react";
import { theme } from "~/theme";
import { Box } from "../atoms/Box";
import { FormErrorMessage } from "../atoms/FormErrorMessage";
import { Label } from "../atoms/Label";
import { StyledTextArea } from "../atoms/StyledTextArea";

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
