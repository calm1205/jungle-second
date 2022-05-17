import React from "react";
import { theme } from "~/theme";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Box, Button } from "~/components/atoms";
import { RInput, RTextArea } from "~/components/react-hook-forms";
import emailjs from "@emailjs/browser";

type EmailFormTypes = {
  name: string;
  email: string;
  content: string;
};

export const EmailForm: React.FC = () => {
  const methods = useForm<EmailFormTypes>({
    mode: "onBlur",
    reValidateMode: "onBlur",
  });
  const { handleSubmit } = methods;

  const onSubmit: SubmitHandler<EmailFormTypes> = async (input) => {
    const result = await emailjs.send(
      process.env.EMAILJS_SERVICE_ID!,
      process.env.EMAILJS_TEMPLATE_ID!,
      { message: input.content },
      process.env.EMAILJS_PUBLIC_KEY!
    );
    console.log(result);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box padding={theme.space.m}>
          <RInput name="name" label="氏名" placeholder="山田太郎" />

          <Box marginTop={theme.space.m}>
            <RInput
              name="email"
              label="メールアドレス"
              placeholder="sample@gmail.com"
            />
          </Box>

          <Box marginTop={theme.space.m}>
            <RTextArea
              name="content"
              label="お問い合わせ内容"
              placeholder="ここに入力"
            />
          </Box>

          <Box marginTop={theme.space.m}>
            <Button type="submit">送信</Button>
          </Box>
        </Box>
      </form>
    </FormProvider>
  );
};
