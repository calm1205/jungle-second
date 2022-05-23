import React from "react";
import { BackgroundWhite, Box, Footnote, Hr, Title } from "~/components/atoms";
import { theme } from "~/theme";
import { FeeUl, FeeSection } from "~/components/molecules";

export const System: React.FC = () => {
  return (
    <BackgroundWhite>
      <Box paddingY={theme.space.l} textAlign="center">
        <Title text="System" />
      </Box>

      <Box paddingX={theme.space.m}>
        <Hr />

        <Box margin={`${theme.space.l} ${theme.space.m}`}>
          <FeeSection
            title="Regular"
            fees={[
              { name: "1set", value: "¥15000" },
              { name: "additional", value: "¥8000" },
            ]}
          />
        </Box>

        <Hr />

        <Box margin={`${theme.space.l} ${theme.space.m}`}>
          <FeeSection
            title="Member"
            fees={[
              { name: "1set", value: "¥12000" },
              { name: "additional", value: "¥6000" },
            ]}
          />
        </Box>

        <Hr />

        <Box margin={`${theme.space.l} ${theme.space.m}`}>
          <FeeSection
            title="Vip"
            fees={[
              { name: "1set", value: "¥12000" },
              { name: "charge", value: "¥50000" },
              { name: "additional", value: "¥9000" },
            ]}
          />
        </Box>

        <Hr />

        <Box marginTop={theme.space.m} paddingX={theme.space.xl}>
          <FeeUl
            lists={[
              { name: "1set", value: "60min" },
              { name: "charge", value: "60min" },
              { name: "additional", value: "30min" },
            ]}
          />

          <Box marginTop={theme.space.m}>
            <FeeUl
              lists={[
                { name: "本指名(60min)", value: "¥3000" },
                { name: "場内指名(60min)", value: "¥5000" },
                { name: "同伴", value: "¥5000" },
              ]}
            />
          </Box>

          <Box marginTop={theme.space.m}>
            <FeeUl
              lists={[
                { name: "サービス料", value: "30%" },
                { name: "消費税", value: "10%" },
              ]}
            />
          </Box>
        </Box>
        <Footnote
          text={`\n※ 自動延長制となります。\n※ 追加指名は1人につき、セット料金の50%頂きます。\n※ オーダー料金は別途頂戴いたします。\n※ 会員登録時にお名刺を頂戴いたします。\n※ 同業者、スカウトマンの入店はお断りいたします。`}
        />
      </Box>

      <Box paddingBottom={theme.space.xl} />
    </BackgroundWhite>
  );
};
