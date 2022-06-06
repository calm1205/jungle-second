import React from 'react';
import { theme } from '~/theme';
import { Box, Id, Paragraph, Title } from '~/components/atoms';
import { ImageGallery } from '~/components/molecules';
import { Slider } from './Slider/Slider';

export const Concept: React.FC = () => {
  return (
    <>
      <Id id="home" />

      <Box paddingY={theme.space.xl} textAlign="center">
        <Slider />

        <Paragraph text="日本 東京" marginTop={theme.space.xl} />

        <Box marginY={theme.space.m}>
          <Title text="Lounge Jungle" />
        </Box>

        <Paragraph
          text={
            '気品と優美さを組み込んだ洗礼された空間\n高級ホテルに居るかのような店内は\n高級感もありながら落ち着いた雰囲気で\n特別なひとときをお過ごし頂けます。\nぜひワンランク上のラグジュアリーな空間を\nお楽しみください。'
          }
        />

        <Box marginTop={theme.space.l}>
          <ImageGallery />
        </Box>
      </Box>
    </>
  );
};
