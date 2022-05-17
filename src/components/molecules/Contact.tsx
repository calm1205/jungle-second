import React from "react";
import { theme } from "~/theme";
import { BackgroundWhite, Box, Button, Input, TextArea, Title } from "../atoms";
import { useFormValue } from "~/hooks/useFormValue";
import emailjs from "@emailjs/browser";

export const Contact: React.FC = () => {
  const [name, onChangeName] = useFormValue();
  const [email, onChangeEmail] = useFormValue();
  const [content, onChangeContent] = useFormValue();

  const onSubmit = async () => {
    await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      { message: "hello world" },
      process.env.EMAILJS_PUBLIC_KEY!
    );
  };

  return (
    <BackgroundWhite>
      <Box padding={`${theme.space.xl} 0`}>
        <Box textAlign="center">
          <Title text="コンタクト" />
        </Box>

        <Box padding={theme.space.m}>
          <Input
            name="name"
            label="氏名"
            placeholder="山田太郎"
            value={name}
            onChange={onChangeName}
          />

          <Box marginTop={theme.space.m}>
            <Input
              name="email"
              label="メールアドレス"
              placeholder="sample@gmail.com"
              value={email}
              onChange={onChangeEmail}
            />
          </Box>

          <Box marginTop={theme.space.m}>
            <TextArea
              name="content"
              label="お問い合わせ内容"
              placeholder="ここに入力"
              value={content}
              onChange={onChangeContent}
            />
          </Box>

          <Box marginTop={theme.space.m}>
            <Button onClick={onSubmit}>送信</Button>
          </Box>
        </Box>
      </Box>
    </BackgroundWhite>
  );
};
