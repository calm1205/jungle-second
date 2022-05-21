import React from "react";
import { Box, Paragraph, Title } from "~/components/atoms";
import { theme } from "~/theme";
import { ImageGallery } from "../molecules";

export const Concept: React.FC = () => {
  return (
    <Box padding={`${theme.space.xl} 0`} textAlign="center">
      <ImageGallery />

      <Title text={`気品と優美さを\n組み込んだ\n洗礼された空間`} />

      <Paragraph
        text="高級ホテルに居るかのような店内は"
        marginTop={theme.space.l}
      />
      <Paragraph text="高級感もありながら落ち着いた雰囲気で" />
      <Paragraph text="特別なひとときをお過ごし頂けます。" />

      <Paragraph text="ぜひワンランク上の" />
      <Paragraph text="ラグジュアリーな空間をお楽しみください。" />
    </Box>
  );
};
