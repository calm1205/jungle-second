import React from "react";
import { Box, Paragraph, SubTitle } from "~/components/atoms";

type FeeType = {
  title: string;
  fee: number;
  time?: number;
  description?: string;
};

export const Fee: React.FC<FeeType> = ({
  title,
  fee,
  time = "",
  description = "",
}) => {
  const timeDisplay = time && `${time}分`;

  return (
    <>
      <Box display="flex" justifyContent="space-between" alignItems="end">
        <SubTitle text={title} />
        <Paragraph text={`${fee.toLocaleString()}円 ${timeDisplay}`} />
      </Box>

      <Paragraph text={description} />
    </>
  );
};
