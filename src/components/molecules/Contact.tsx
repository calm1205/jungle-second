import React from "react";
import { theme } from "~/theme";
import { BackgroundWhite, Box, Input, TextArea, Title } from "../atoms";

export const Contact: React.FC = () => {
  return (
    <BackgroundWhite>
      <Box padding={`${theme.space.xl} 0`}>
        <Box textAlign="center">
          <Title text="コンタクト" />
        </Box>

        <Box padding={theme.space.m}>
          <Input name="name" label="氏名" placeholder="山田太郎" />

          <Box marginTop={theme.space.m}>
            <Input
              name="email"
              label="メールアドレス"
              placeholder="sample@gmail.com"
            />
          </Box>

          <Box marginTop={theme.space.m}>
            <TextArea
              name="content"
              label="お問い合わせ内容"
              placeholder="ここに入力"
            />
          </Box>
        </Box>
      </Box>
    </BackgroundWhite>
  );
};
