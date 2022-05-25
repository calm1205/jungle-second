import React from "react";
import { Box, Heading, Paragraph } from "~/components/atoms";
import { theme } from "~/theme";

type Props = {
  title: string;
  text: string;
};

export const HeadingParagraph: React.FC<Props> = ({ title, text }) => {
  return (
    <>
      <Heading text={title} />
      <Box marginLeft={theme.space.s}>
        <Paragraph text={text} marginTop={theme.space.xs} />
      </Box>
    </>
  );
};
