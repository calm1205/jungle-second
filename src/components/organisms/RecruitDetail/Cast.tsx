import { RecruitDetail } from './RecruitDetail';

export const Cast: React.FC = () => {
  return (
    <RecruitDetail
      footnote="キャスト"
      title="Cast"
      time="20:00 〜 翌日1:00"
      payment="時給10,000円〜"
      holiday="日・祝日・GW・夏休暇・年末年始休暇"
      treatment={
        '全額日払い\n体入時給10,000円以上\n各種高額バック有り\n週1/2h〜OK\n短期OK\nヘアメ完備\n鍵付きの個人ロッカー完備\n前店の給与を考慮\n送迎有り(都外可)'
      }
    />
  );
};
