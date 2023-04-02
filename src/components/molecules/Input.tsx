import React from 'react';
import { theme } from '~/theme';
import { Box, FormErrorMessage, Label, StyledInput } from '~/components/atoms';

export type Input = {
  name: string;
  label: string;
  placeholder?: string;
  value?: string;
  error?: string;
  onChange?: () => void;
  onBlur?: () => void;
};

export const Input: React.FC<Input> = ({
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
          <FormErrorMessage>{error}</FormErrorMessage>
        </Box>
      </Label>
    </>
  );
};
