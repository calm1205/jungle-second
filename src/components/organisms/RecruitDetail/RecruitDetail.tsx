import React from "react";
import { theme } from "~/theme";
import { Box, Footnote, Title } from "~/components/atoms";
import { HeadingParagraph } from "~/components/molecules/HeadingParagraph";

type Props = {
  footnote: string;
  title: string;
  time: string;
  payment: string;
  holiday: string;
  treatment: string;
};

export const RecruitDetail: React.FC<Props> = ({
  footnote,
  title,
  time,
  payment,
  holiday,
  treatment,
}) => {
  return (
    <Box padding={` ${theme.space.l} ${theme.space.m}`}>
      <Footnote text={footnote} marginTop="0" />
      <Title text={title} />

      <Box marginTop={theme.space.l}>
        <HeadingParagraph title="勤務時間" text={time} />
      </Box>

      <Box marginTop={theme.space.l}>
        <HeadingParagraph title="給与" text={payment} />
      </Box>

      <Box marginTop={theme.space.l}>
        <HeadingParagraph title="休日" text={holiday} />
      </Box>

      <Box marginTop={theme.space.l}>
        <HeadingParagraph title="待遇" text={treatment} />
      </Box>
    </Box>
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
