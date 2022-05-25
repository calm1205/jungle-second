import React from "react";
import { Box, Footnote, Heading, Paragraph, Title } from "~/components/atoms";
import { theme } from "~/theme";
import { HeadingParagraph } from "./HeadingParagraph";

export const RecruitDetail: React.FC = () => {
  return (
    <>
      <Footnote text="キャスト" marginTop="0" />
      <Title text="Cast" />

      <Box marginTop={theme.space.l}>
        <HeadingParagraph title="勤務時間" text="20:00 〜 翌日1:00" />
      </Box>

      <Box marginTop={theme.space.l}>
        <Heading text="給与" />
        <Box marginLeft={theme.space.s}>
          <Paragraph text="時給10,000円〜" marginTop={theme.space.xs} />
        </Box>
      </Box>

      <Box marginTop={theme.space.l}>
        <Heading text="休日" />
        <Box marginLeft={theme.space.s}>
          <Paragraph
            text="日・GW・夏休暇・年末年始休暇"
            marginTop={theme.space.xs}
          />
        </Box>
      </Box>

      <Box marginTop={theme.space.l}>
        <Heading text="待遇" />
        <Box marginLeft={theme.space.s}>
          <Paragraph
            text={`全額日払い\n体入時給10,000円以上\n各種高額バック有り\n週1/2h〜OK\n短期OK\nヘアメ完備\n鍵付きの個人ロッカー完備\n前店の給与を考慮\n送迎有り(都外可)`}
            marginTop={theme.space.xs}
          />
        </Box>
      </Box>
    </>
  );
};

/**


正社員

○勤務時間17:00〜翌2:00
○給与
\n 店長・店長候補(社員) 月給 700,000円〜 
\n ホール(社員) 月給 320,000円〜                    
\n キャッシャー(社員) 月給 400,000円〜                        
\n エスコート(社員) 月給 400,000円〜                        
\n キッチン(社員) 月給 400,000円〜
○休日
日祝、GW、夏休暇、年末年始休暇
○待遇
\n寮完備
\n昇給昇格随時あり
\n社員旅行あり
\n独立支援制度あり
\n研修制度あり
\n制服貸与
\n体験入社OK
\n正社員登用社保完備
\n年齢不問
\n経験者優遇
\n未経験者歓迎





ホールスタッフ(アルバイト)

○勤務時間19:30〜翌2:00
○給与
\n ホール時給2,000円〜
(研修時給1800円)
\n エスコート(アルバイト) 時給 4,000円〜
○休日
日祝、GW、夏休暇、年末年始休暇
○待遇
\n送迎有り
\n昇給昇格随時あり
\n独立支援制度あり
\n研修制度あり
\n制服貸与
\n体験入社OK
\n正社員登用社保完備
\n年齢不問
\n経験者優遇
\n未経験者歓迎


 */
