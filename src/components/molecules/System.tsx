import React from "react";
import styled from "styled-components";
import { BackgroundWhite, Box, Title } from "~/components/atoms";
import { Fee } from "~/components/molecules";
import { theme } from "~/theme";

export const System: React.FC = () => {
  return (
    <BackgroundWhite>
      <Box paddingTop={theme.space.xl} textAlign="center">
        <Title text="システム" />
      </Box>

      <Box padding={theme.space.m}>
        <Box marginTop={theme.space.m}>
          <Fee
            title="セット料金"
            fee={30_000}
            time={60}
            description={`お酒飲み放題\nお水・氷・おつまみセット\nハウスボトル`}
          />
        </Box>

        <Box marginTop={theme.space.m}>
          <Fee
            title="席料"
            fee={10_000}
            time={60}
            description={`お席の料金のみ\nドリンクや水、氷、おつまみは代金に含まれません。`}
          />
        </Box>

        <Box marginTop={theme.space.m}>
          <Fee
            title="指名料"
            fee={6_000}
            time={60}
            description={`お好みのスタッフをご指名頂けます。`}
          />
        </Box>

        <Box marginTop={theme.space.m}>
          <Fee
            title="深夜料金"
            fee={2_000}
            description={`23時以降はお客様1名毎に2000円の深夜料金が発生します。`}
          />
        </Box>
      </Box>

      <Box paddingBottom={theme.space.xl} />
    </BackgroundWhite>
  );
};
