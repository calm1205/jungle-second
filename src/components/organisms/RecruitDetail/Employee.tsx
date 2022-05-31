import React from 'react';
import { RecruitDetail } from './RecruitDetail';

export const Employee: React.FC = () => {
  return (
    <RecruitDetail
      footnote="正社員"
      title="Employee"
      time="17:00 〜 翌2:00"
      payment={
        '店長・店長候補(社員) 月給 700,000円〜\nホール(社員) 月給 320,000円〜\nキャッシャー(社員) 月給 400,000円〜\nエスコート(社員) 月給 400,000円〜\nキッチン(社員) 月給 400,000円〜'
      }
      holiday="日・祝日・GW・夏休暇・年末年始休暇"
      treatment={
        '寮完備\n昇給昇格随時あり\n社員旅行あり\n独立支援制度あり\n研修制度あり\n制服貸与\n体験入社OK\n正社員登用社保完備\n年齢不問\n経験者優遇\n未経験者歓迎'
      }
    />
  );
};
