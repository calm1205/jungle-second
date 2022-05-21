import React from "react";
import { Box, Paragraph, Title } from "~/components/atoms";
import { theme } from "~/theme";

export const Description: React.FC = () => {
  return (
    <>
      <Box
        paddingTop={theme.space.xl}
        paddingBottom={theme.space.xl}
        textAlign="center"
      >
        <Title text="完全会員制" />

        <Box padding={theme.space.m}>
          <Paragraph text="2 回目のご来店時に会員登録料として、お一人様につき、10,000円を頂戴しております。" />
          <Paragraph text="ご来店の際は、必ず事前にご予約を頂けますようお願い申し上げます。" />
          <Paragraph text="事前にご予約を頂けずにご来店頂いたお客様、また、会員登録がお済のお客様でも当店の会員様として、そぐわないと判断させて頂いた場合はご入店をお断りさせて頂く場合がございます。" />
          <Paragraph text="あらかじめご了承下さい。" />
        </Box>
      </Box>
    </>
  );
};
