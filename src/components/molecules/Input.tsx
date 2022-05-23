import React from "react";
import { theme } from "~/theme";
import { Box, FormErrorMessage, Label, StyledInput } from "~/components/atoms";

export type InputType = {
  name: string;
  label: string;
  placeholder?: string;
  value?: string;
  error?: string;
  onChange?: () => void;
  onBlur?: () => void;
};

export const Input: React.FC<InputType> = ({
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
        <StyledInput
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
