import React from 'react';
import { theme } from '~/theme';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';
import { Box, Button } from '~/components/atoms';
import { RInput, RRadios, RTextArea } from '~/components/react-hook-forms';
import { sendEmail } from '~/hooks';
import {
  ContactTypeKey,
  CONTACT_TYPE,
  CONTACT_TYPE_ITEMS,
  JOB,
  JobKey,
  JOB_ITEMS,
  RecruiteStatusKey,
  RECRUITE_STATUS,
  RECRUITE_STATUS_ITEMS,
} from './constant';

type EmailFormTypes = {
  contactType: string;
  job: string;
  recruitStatus: string;
  name: string;
  nameKana: string;
  address: string;
  phone: string;
  email: string;
  age: string;
  content: string;
};

export const EmailForm: React.FC = () => {
  const methods = useForm<EmailFormTypes>({
    mode: 'onBlur',
    reValidateMode: 'onChange',
    defaultValues: {
      contactType: 'recruit',
      job: 'cast',
      recruitStatus: 'fresh',
      name: '',
      nameKana: '',
      address: '',
      phone: '',
      email: '',
      age: '',
      content: '',
    },
  });
  const { handleSubmit, reset } = methods;

  const onSubmit: SubmitHandler<EmailFormTypes> = async (input) => {
    const contactType = CONTACT_TYPE[input.contactType as ContactTypeKey];
    const job = JOB[input.job as JobKey];
    const recruiteStatus =
      RECRUITE_STATUS[input.recruitStatus as RecruiteStatusKey];

    sendEmail({ ...input, contactType, job, recruiteStatus });
    reset();
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Box padding={theme.space.m}>
          <RRadios
            name="contactType"
            label="お問い合わせカテゴリ"
            items={CONTACT_TYPE_ITEMS}
          />

          <Box marginTop={theme.space.m}>
            <RRadios name="job" label="応募職種" items={JOB_ITEMS} />
          </Box>

          <Box marginTop={theme.space.m}>
            <RRadios
              name="recruitStatus"
              label="現在の就業状況"
              items={RECRUITE_STATUS_ITEMS}
            />
          </Box>

          <Box marginTop={theme.space.m}>
            <RInput name="name" label="氏名" placeholder="山田 太郎" />
          </Box>

          <Box marginTop={theme.space.m}>
            <RInput
              name="nameKana"
              label="ふりがな"
              placeholder="やまだ たろう"
            />
          </Box>

          <Box marginTop={theme.space.m}>
            <RInput
              name="address"
              label="お住まいの地域"
              placeholder="東京都 港区"
            />
          </Box>

          <Box marginTop={theme.space.m}>
            <RInput name="phone" label="電話番号" placeholder="08012345432" />
          </Box>

          <Box marginTop={theme.space.m}>
            <RInput
              name="email"
              label="メールアドレス"
              placeholder="sample@gmail.com"
            />
          </Box>

          <Box marginTop={theme.space.m}>
            <RInput name="age" label="年齢" placeholder="21" />
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
