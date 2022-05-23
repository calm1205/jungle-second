import React from "react";
import { theme } from "~/theme";
import { Box, Paragraph, Title } from "~/components/atoms";
import { ImageGallery } from "~/components/molecules";
import { Line } from "../atoms/Line";

export const Concept: React.FC = () => {
  return (
    <Box paddingY={theme.space.xl} textAlign="center">
      <Paragraph text="日本 東京" />

      <Box width="300px" height={"30px"}>
        <Line />
      </Box>

      <Box marginY={theme.space.m}>
        <Title text="Lounge Jungle" />
      </Box>

      <Paragraph
        text={`気品と優美さを組み込んだ洗礼された空間\n高級ホテルに居るかのような店内は\n高級感もありながら落ち着いた雰囲気で\n特別なひとときをお過ごし頂けます。\nぜひワンランク上のラグジュアリーな空間を\nお楽しみください。`}
      />

      <Box marginTop={theme.space.l}>
        <ImageGallery />
      </Box>
    </Box>
  );
};
