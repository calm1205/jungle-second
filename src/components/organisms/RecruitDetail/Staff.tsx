import React from "react";
import { RecruitDetail } from "./RecruitDetail";

export const Staff: React.FC = () => {
  return (
    <RecruitDetail
      footnote="ホールスタッフ（アルバイト）"
      title="Staff"
      time="19:30〜翌2:00"
      payment={`ホール時給2,000円〜(研修時給1800円)\nエスコート(アルバイト) 時給 4,000円〜`}
      holiday="日・祝日・GW・夏休暇・年末年始休暇"
      treatment={`送迎有り\n昇給昇格随時あり\n独立支援制度あり\n研修制度あり\n制服貸与\n体験入社OK\n正社員登用社保完備\n年齢不問\n経験者優遇\n未経験者歓迎`}
    />
  );
};
